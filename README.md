# pikappoint.com

Static marketing landing page for **PikAppoint**, served via GitHub Pages from the `docs/` folder.

## Structure

- `docs/index.html` — landing page
- `docs/` — static assets (`calendar-icon.svg`, `favicon.ico`, `robots.txt`, `404.html`)

## Local preview

No build or server code needed — it's a static site. Preview with either:

```sh
npx serve docs
# or
python -m http.server -d docs 8080
```

## Deployment

GitHub Pages serves this site. Settings → Pages → Source: **Deploy from a branch**, Branch: `main` / `/docs`.