# Apex AirCare

Apex AirCare is a fictional local-service website concept for Kuala Lumpur and Klang Valley, built as a portfolio demonstration. There is no operating service provider, real coverage lookup, dispatch, technician, or live enquiry desk. Service names, example areas, and service photography are illustrative. The site must not be presented as a real business.

## Stack and routes

- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4.
- `/` overview; `/services` guides; `/services/[slug]` service detail; `/service-areas` illustrative locations; `/about` concept; `/contact` quote-flow preview; `/privacy` demo data behavior.
- All public pages remain `noindex` and `nofollow`; there is no sitemap or local-business structured data. `robots.txt` disallows the quote API path.
- A branded, locally generated Open Graph image describes the site as a fictional portfolio demo.

## Local development and checks

Requirements: Node.js 20.9 or later and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Run `npm test`, `npm run lint`, `npx tsc --noEmit`, and `npm run build` for regression, lint, type, and production-build checks.

## Environment variables

| Variable | Visibility | Required | Purpose |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public build-time value | No | Preferred absolute HTTPS site origin for metadata base and route canonicals. Use the actual production origin when deploying. |
| `VERCEL_PROJECT_PRODUCTION_URL` | Vercel-provided server/build value | No | Fallback production host when `NEXT_PUBLIC_SITE_URL` is unset. The app adds `https://`. |
| `VERCEL_URL` | Vercel-provided server/build value | No | Last-resort Vercel deployment host fallback; can refer to a deployment-specific host. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Public client-visible value | No | International destination digits for a real client-supplied WhatsApp number. Leave unset in the portfolio demo. |

No secret is required for demo mode. Never put a private API key or personal number in source control. WhatsApp destinations are public by design; the project does not contain a real Apex number. A missing or malformed number leaves the WhatsApp destination disabled. A configured destination must be supplied and approved by the real site owner; its digits are formatted for `wa.me`, and form data is never added to the URL.

## Quote flow and privacy boundary

Submitting the quote preview sends the entered fields to this application's `/api/quote` route for server-side validation. A public deployment should use HTTPS; local development uses localhost. The app applies a bounded 8,000-byte request read, strict JSON media-type handling, same-origin checking when an Origin header is present, field validation, a honeypot, and a minimum elapsed-time check. Responses are not cached and do not echo form values.

The demo lead provider does not persist, log, email, share, or forward submitted values. It does not connect to a CRM, technician, WhatsApp, or any lead-delivery system. The project configures no analytics or app-managed tracking cookies. The hosting platform may process request data and operational metadata under its own terms; the application-level no-persistence statement does not describe the hosting provider's infrastructure logs. The interface explains this server transmission before submission. Do not enter real personal information into a portfolio demo.

Activating a real quote destination is a future client integration. It requires an owner-provided privacy notice, retention and access rules, consent and jurisdiction review, operational monitoring that excludes PII, abuse controls, and a separately reviewed provider implementation. No such integration is enabled here.

## Search and sharing

The site is a fictional concept and intentionally remains `noindex`/`nofollow`. Route titles and descriptions are distinct. Canonical URLs are emitted only when a valid HTTPS site origin is configured or supplied by Vercel. No `LocalBusiness`, `HVACBusiness`, review, rating, address, phone, hours, or pricing structured data is published. The locally generated social image carries an explicit portfolio-demo label.

## Vercel preparation

The app uses Next.js route handlers and generated assets; it has no required database, local filesystem persistence, external runtime service, or secret in demo mode. The quote provider is an in-memory no-op after validation. Before a future deployment, set `NEXT_PUBLIC_SITE_URL` to the approved production domain. Keep `NEXT_PUBLIC_WHATSAPP_NUMBER` unset unless the actual owner supplies the destination. No deployment is performed by this repository's validation workflow.

## Known limits

- This repository contains no live lead delivery or real business details.
- Automated quote tests run against a temporary local Next development server and use synthetic test values only.
- Browser checks do not equal WCAG certification, a screen-reader audit, Lighthouse, or Core Web Vitals measurement.
- The possible hero/LCP concern `IMP-001` remains deferred until production performance evidence exists.
- Previously observed hydration behavior remains `NOT REPRODUCED / ROOT CAUSE UNKNOWN` unless reproduced during a later measured run.

## Image sources

Images are stored locally so the site makes no third-party image request at runtime. All are illustrative and do not depict Apex AirCare employees.

- `hero-indoor-technician.jpg` and the first service card: [Technician Performing Air Conditioning Maintenance by Bulat843](https://www.pexels.com/photo/technician-performing-air-conditioning-maintenance-32588555/).
- `aircon-interior.jpg`: Pexels photo 16592625 by Airam Datoon, available from the [Pexels image endpoint](https://images.pexels.com/photos/16592625/pexels-photo-16592625.jpeg).
- `aircon-cleaning.jpg` and `aircon-servicing.jpg`: [Man Fixing an Air Conditioner by José Andrés Pacheco Cortes](https://www.pexels.com/photo/man-fixing-an-air-conditioner-5463583/) and [Man Repairing an Aircon by José Andrés Pacheco Cortes](https://www.pexels.com/photo/man-repairing-an-aircon-5463580/).
- Pexels license and attribution details: [Pexels license](https://www.pexels.com/license/).
