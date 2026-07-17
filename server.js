import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const publicDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "public");
const PORT = process.env.PORT || 8080;
const MIME = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".ico": "image/x-icon", ".txt": "text/plain", ".json": "application/json" };

http.createServer((req, res) => {
  const url = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  const file = path.join(publicDir, url === "/" ? "index.html" : url);
  fs.readFile(file, (err, data) => {
    if (err) return fs.readFile(path.join(publicDir, "404.html"), (_e, d) => res.writeHead(404).end(d ?? "Not Found"));
    res.writeHead(200, { "Content-Type": MIME[path.extname(file)] ?? "application/octet-stream" }).end(data);
  });
}).listen(PORT, () => console.log(`Serving http://localhost:${PORT}`));
