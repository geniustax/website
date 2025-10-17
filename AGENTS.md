# Repository Guidelines

## Project Structure & Module Organization
- Root HTML pages: `index.html`, `Services.html`, `About-us.html`, `Contact.html`, `Terms-of-use.html`.
- Styles: `index.css`, page-specific CSS (e.g., `Services.css`), and `assets/styles.css`.
- Scripts: `assets/scripts.js` (UI), `contact-form.js` (form), `server.js` (local dev server).
- Serverless API: `api/contact.js` (Vercel function for email via Resend).
- Partials: `templates/header.html`, `templates/footer.html`.
- Assets: `images/`, `intlTelInput/`, `jquery.js`, `nicepage.*`.
- Config: `.env` (local), `.vercel/` (Vercel).

## Build, Test, and Development Commands
- `npm run dev` — Run with Vercel Dev (requires `vercel` CLI). Serves pages and `api/` locally.
- `node server.js` — Lightweight local server with simulated `/api/contact` email sending.
- `npm run build` — No-op (static site). Present for CI consistency.
- Tip: Open `http://localhost:3000/Contact.html` and submit the form to test.

## Coding Style & Naming Conventions
- Indentation: 2 spaces. Use UTF‑8. End files with newline.
- HTML: double quotes for attributes; keep semantic, accessible markup; reuse classes from `assets/styles.css`.
- CSS: kebab-case class names (e.g., `.nav-menu`, `.footer-section`).
- JS: plain ES modules not required; prefer small functions; terminate with semicolons.
- Filenames: follow existing pattern (`About-us.html`, `Services.css`); new assets in `assets/` with kebab-case.

## Testing Guidelines
- No automated tests. Perform manual checks:
  - Pages load without console errors; header/menu responsive.
  - Contact form validates and posts to `/api/contact`.
  - With `server.js`, responses are simulated; on Vercel, ensure `RESEND_API_KEY` is set.
- Example (local):
  - `curl -X POST http://localhost:3000/api/contact -H 'Content-Type: application/json' -d '{"name":"Test","email":"a@b.co","phone":"+316...","service":"VAT","message":"Hi"}'`

## Commit & Pull Request Guidelines
- Commits: imperative, concise, scoped (e.g., "Fix mobile layout", "Refactor Services page").
- PRs: describe motivation and changes, include before/after screenshots for UI, link issues, and list manual test steps.
- Keep PRs small and focused; avoid unrelated refactors.

## Security & Configuration Tips
- Secrets: set `RESEND_API_KEY` in Vercel project settings; keep `.env` local and out of commits.
- Input handling: `api/contact.js` validates and escapes HTML; do not remove.
- CORS: handled for local dev; avoid exposing new endpoints without validation.
