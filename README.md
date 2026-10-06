# website-accordion

Request a service — a production-ready, responsive web app (HTML / CSS / vanilla JS) styled after uber.com (Uber Move typography, strict black & white), with a full-screen service accordion.

## Pages

- `index.html` — main app: category icon bar, category/service dropdowns, details modal (Personal / Company / Review), webhook submit with toast, sticky inquiry bar, service preview section, Stack Resources marquee carousel, dark-theme toggle.
- `showcase.html` — preserved original FAQ accordion page.

## Structure

- `style.css` — Uber black & white design system, light/dark themes.
- `script.js` — all config in `APP_CONFIG` at the top (categories, services, resources, form fields, webhook, contact, status). Swap data here without touching the UI code.
- `Icon/` — category icons and brand logos.

## Development

Open `index.html` directly in a browser, or serve the folder:

```sh
npx serve .
```

Submission is simulated when `WEBHOOK_URL` is not configured (a console warning is logged and a success toast is shown).
