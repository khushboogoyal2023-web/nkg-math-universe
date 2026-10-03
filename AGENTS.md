# NKG EDUCATION — Base44 Dev Environment

## Overview
This is a pre-built static React SPA (exported from Base44). No build step, no backend, no database.
The app is served as static files by nginx.

## Setup
The source was extracted from `nkg-math.base44.app-source.zip`. The zip renamed the built files:
- `script-2.js` → `assets/index-D8RfexzM.js` (main React bundle, ~1.4MB)
- `style-1.css` → `assets/index-M_CHqjuq.css` (Tailwind CSS)
- `script-3.js` → `static/js/badge.js` (Base44 badge widget)
- `script-1.js` was AdSense/Closure code loaded from CDN — not needed locally, removed.

## Running
```
docker compose -f docker-compose.base44.yml up -d
```
- nginx:alpine serves on port 3000
- Source bind-mounted at `/app` (read-only)
- SPA fallback: all unknown routes serve `index.html`
- Healthcheck uses `127.0.0.1:3000` (not `localhost` — IPv6 resolution issue in Alpine)

## Notes
- No external credentials needed — purely static frontend.
- The app calls `/api/app-logs/...` for analytics (will 404, non-critical).
- `manifest.json` was created since the HTML references it but it wasn't in the zip.
- File permissions on the repo root must be 755 for nginx worker to read files.
