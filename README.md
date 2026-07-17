# pikappoint.com

Static marketing landing page for **PikAppoint**, served via GitHub Pages from the `docs/` folder.

## Structure

- `docs/index.html` — landing page
- `docs/` — static assets (`calendar-icon.svg`, `favicon.ico`, `robots.txt`, `404.html`)

## Local preview

No build step — it's a static site. Serve the `docs/` folder with:

```sh
npm start
```

This runs `npx http-server docs -p 8080` → open http://127.0.0.1:8080.

## Deployment

GitHub Pages serves this site. Settings → Pages → Source: **Deploy from a branch**, Branch: `main` / `/docs`.