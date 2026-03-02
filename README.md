# GeniusTax Website

Static website for **GeniusTax** — accounting and tax services for businesses and individuals in the Netherlands.

Live: [geniustax.nl](https://geniustax.nl)

## Tech Stack

- **HTML5** with [Nicepage](https://nicepage.com/) framework (v7.13.0)
- **CSS** — Nicepage core + page-specific stylesheets
- **JavaScript** — vanilla JS, jQuery (required by Nicepage runtime)
- **i18n** — client-side translations for English, Russian, Romanian
- **Serverless API** — Vercel Functions (`api/contact.js`) with [Resend](https://resend.com/) for email delivery

## Project Structure

```
├── index.html              # Homepage
├── Services.html           # Services & pricing
├── Contact.html            # Contact form
├── About-us.html           # About the company
├── Privacy.html            # Privacy policy
├── Terms-of-use.html       # Terms of use
├── api/
│   └── contact.js          # Contact form serverless function (Resend)
├── assets/
│   ├── i18n.js             # Translation dictionary (en/ru/ro)
│   ├── i18n-apply.js       # Applies translations to DOM
│   ├── header-component.js # Shared header component
│   ├── footer-component.js # Shared footer component
│   ├── contact-form-handler.js # Contact form submission logic
│   ├── testimonials-component.js # Client testimonials carousel
│   ├── header.css          # Header styles
│   ├── footer.css          # Footer styles
│   └── styles.css          # Shared styles (WhatsApp button, etc.)
├── images/                 # Brand assets, icons, photos
├── partials/
│   └── testimonials.html   # Testimonials HTML partial
├── nicepage.css            # Nicepage framework styles
├── nicepage.js             # Nicepage runtime (carousel, accordion, menu)
├── jquery.js               # jQuery (Nicepage dependency)
├── vercel.json             # Vercel config (clean URLs, rewrites)
└── package.json
```

## Local Development

```bash
npm install -g vercel    # if not installed
vercel dev               # starts dev server at http://localhost:3000
```

The `vercel dev` command runs the serverless functions locally alongside the static files.

## Deployment

The site is deployed on **Vercel**: [vercel.com/geniustaxs-projects/website](https://vercel.com/geniustaxs-projects/website)

Pushes to `main` trigger automatic deployments.

**Domain**: `geniustax.nl` — registered via Google Domains (now managed by Squarespace). DNS points to Vercel.

## Environment Variables

Set these in the Vercel project dashboard:

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | API key for [Resend](https://resend.com/) email service |

## URL Routing

Vercel is configured with clean URLs (no `.html` extensions) and lowercase rewrites:

- `/services` → Services page
- `/contact` → Contact page
- `/about-us`, `/about` → About page
- `/privacy` → Privacy policy
- `/terms-of-use`, `/terms` → Terms of use
