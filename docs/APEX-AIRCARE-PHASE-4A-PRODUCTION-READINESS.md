# Apex AirCare — Phase 4A Production Readiness

**Review date:** 2026-09-30
**Accepted starting baseline:** `cbd80e90ef88b8d56ba1e5dc74ac95fd5ad24a03`
**Branch at start:** `main`
**Scope:** production hardening and verification for the fictional portfolio demo. No deployment, live lead provider, Phase 4B, redesign, or new Bencho interaction was started.

## 1. Baseline and project boundary

- At start, `main`, `HEAD`, and `origin/main` matched the accepted baseline. There were no tracked changes.
- The only pre-existing untracked item was `docs/phase-2.5a-evidence/`; it remains local and is excluded from the Phase 4A commit.
- Phase 3.5 remains accepted. Its findings were not reopened.
- This is a fictional concept, not an operating local business. No actual coverage, technicians, phone, email, hours, prices, reviews, ratings, credentials, warranties, or customer records are claimed.

## 2. Production-readiness changes

- Quote API reads the body as a bounded byte stream, stops above 8,000 bytes even when `Content-Length` is absent, rejects malformed UTF-8/JSON, and accepts only the `application/json` media type (parameters such as `charset=utf-8` remain valid).
- Quote success and error responses set `Cache-Control: no-store` and `X-Content-Type-Options: nosniff`; submitted values are not echoed.
- Quote timing logic is isolated in a dependency-free helper so the exact 800 ms boundary can be tested deterministically.
- Quote copy now explains that submission transmits details to this application for server validation; the demo provider does not retain or forward them. Privacy copy distinguishes the app's provider from hosting-platform request processing.
- Added branded not-found and recoverable error pages without exposing exception details.
- Added per-route title/description, optional canonical/social URLs from a validated HTTPS origin, and a generated fictional-demo Open Graph image endpoint. No deployment hostname is hardcoded. With no origin configured, canonical/image URLs are omitted; `NEXT_PUBLIC_SITE_URL` or the Vercel production host fallback supplies them during a configured deployment.
- `robots.txt` disallows `/api/`; global metadata remains `noindex,nofollow`. No sitemap or business structured data was added.
- WhatsApp remains optional and source-free; malformed values outside an 8–15 digit international destination are disabled. The app does not put quote fields in a WhatsApp URL.
- Fixed the measured 768 px service-detail overflow by stacking the detail hero below 900 px and constraining the image to its grid container.
- README now documents demo behavior, setup, environment configuration, validation, privacy boundary, route map, deployment notes, and future client work.

## 3. Quote/API regression coverage

`npm test` uses Node's built-in test runner and a temporary local Next development server. It adds no test framework or dependency. All eight checks passed:

1. Valid synthetic request returns the truthful demo response, does not echo test values, and is not cacheable.
2. Invalid fields return `400`.
3. Unsupported media type and `application/jsonp` return `415`; JSON with a charset parameter reaches JSON validation.
4. Malformed JSON returns `400`.
5. Foreign `Origin` returns `403`.
6. Filled honeypot returns `400`.
7. Oversized chunked body without `Content-Length` returns `413`.
8. Deterministic timing helper rejects 799 ms and future/invalid timestamps, and accepts exactly 800 ms; a future timestamp is also rejected by the API.

The provider is still a no-op after validation. The route does not persist, log, forward, email, or send to WhatsApp/CRM. Current abuse controls are body bound, field checks, optional same-origin enforcement, honeypot, and timing check. There is no distributed request-rate limit; configure an owner-approved edge limit before enabling live lead delivery.

## 4. Routes, metadata, and social sharing

Reviewed public routes: `/`, `/services`, four `/services/[slug]` details, `/service-areas`, `/about`, `/contact`, `/privacy`, and an unmatched URL. Each rendered page had exactly one H1 and route-specific title text. All public content retains the fictional-demo disclosure.

- Unknown paths and unknown service slugs return HTTP `404` with the branded accessible not-found content.
- The generated `/opengraph-image` endpoint returns `image/png` (1200 × 630) and only describes the fictional concept.
- Titles and descriptions are distinct by route. Canonical and OG image URLs are emitted only with a valid configured HTTPS origin. The build emits no localhost canonical URL.
- `robots.txt` allows public pages and disallows `/api/`; page metadata stays `noindex,nofollow`. Sitemap omission is intentional while this remains a fictional non-indexed concept.
- No `LocalBusiness`, `HVACBusiness`, review, aggregate rating, address, telephone, hours, or price structured data is present.

## 5. Privacy and truthfulness

- Form submission sends name, phone, service, and optional details to this app's API for validation. The UI says so before submission.
- `DemoLeadProvider` returns a demo result without storing, logging, or forwarding the values. The application has no database, CRM, email delivery, technician dispatch, or live WhatsApp lead flow.
- The privacy page states that the hosting platform may process request data under its own terms; app-level behavior does not make claims about infrastructure logs.
- Source review found no analytics SDK, app-managed tracking cookies, `localStorage`, or `sessionStorage` use. No `.env*`, key/certificate file, or debug-log artifact was found in the project root/repository scan. No contact details are hardcoded.
- Current environment has no configured WhatsApp destination, and the rendered UI identifies it as unavailable.
- A real deployment should instruct visitors not to submit personal data to this portfolio demo. Any future real lead provider requires a separate privacy, retention, consent, abuse-control, and operational review.

## 6. Accessibility and responsive browser QA

Using the Codex in-app browser against the production build, all reviewed routes were checked at CSS viewport widths **375, 768, 1024, and 1440 px**. After the 768 px correction, every measured route reported `scrollWidth - clientWidth = 0`; every route had one H1. The mobile menu opened, Escape closed it, `aria-expanded` returned to false, and focus returned to the trigger. Tab reached the skip link. Invalid synthetic form input set `aria-invalid`, associated its message through `aria-describedby`, focused the error summary, and a valid synthetic request announced the demo response. Browser console inspection had no warning/error entries during the interaction run.

Targeted review covered landmarks, labels, field errors/status announcements, menu keyboard behavior, touch-target dimensions, image alternative text/decorative image behavior, reduced-motion CSS, and 404 content. The mobile menu control measured 44 × 44 px and primary mobile actions at least 46 px high in the inspected layout.

No axe scan, assistive-technology screen-reader test, formal WCAG conformance audit, or accessibility certification was performed. Browser results are viewport/browser evidence, not a substitute for those checks.

## 7. Performance and build output

- `npm run build` passed on Next.js 16.3.7. Public content pages and service details are statically generated; `/api/quote` is server-rendered on demand. `/opengraph-image` is generated locally through the built-in Next image response API.
- Images use local assets and `next/image`; hero loading is prioritized. Approximate checked source image sizes: hero 485 KB, other supplied photos 137–196 KB. The configured DM Sans font is self-hosted by `next/font` at build time.
- No external runtime image, analytics, or lead-delivery dependency was found. No database/filesystem persistence assumption or local service is required.
- Bundle analysis, Lighthouse, lab LCP, field Core Web Vitals, and production traffic measurements were not run. No performance score is claimed.

## 8. Required status carried forward

- **Hydration:** **NOT REPRODUCED / ROOT CAUSE UNKNOWN**. No hydration diagnostic appeared in the production-browser run; this does not identify or claim a fix for the earlier observation.
- **IMP-001:** **DEFERRED**, P3, pending production LCP/CWV evidence. No speculative hero change was made.
- **Bencho:** **INSPECTED + CONCEPT ADOPTED; no IMPLEMENTED BLOCK**. Existing CSS tactile `:active` feedback remains; no interaction dependency or additional Bencho pattern was added.
- **Complete Impeccable suite:** not claimed or run in this phase.

## 9. Security, dependencies, repository hygiene, and Vercel

- Full `npm audit`: **0 vulnerabilities**. `npm audit --omit=dev`: **0 vulnerabilities**.
- No dependency package was added or upgraded. `package.json` adds only the `test` script; `package-lock.json` is unchanged.
- No environment file, key/certificate file, screenshot, debug log, build output, or local Phase 2.5 evidence directory is included in the change set.
- No secret is required in demo mode. Deployment environment variables:
  - `NEXT_PUBLIC_SITE_URL` — set to the actual public HTTPS origin; preferred for canonical/social metadata and custom domains.
  - `NEXT_PUBLIC_WHATSAPP_NUMBER` — optional public international digits, only if supplied by the actual site owner; leave unset for this demo.
  - Vercel supplies `VERCEL_PROJECT_PRODUCTION_URL` and `VERCEL_URL` as system values when available; they are origin fallbacks, not secrets. See [Vercel system environment variables](https://vercel.com/docs/environment-variables/system-environment-variables).
  - No server secret is required. Do not set a real lead destination in Phase 4A.
- Build and local production-server checks pass without an external runtime service. No Vercel project, domain, environment variable, or deployment was created/changed.

## 10. Findings and release gate

| Severity | Result |
|---|---|
| P0 | None. |
| P1 | None. |
| P2 | Before enabling real lead delivery or exposing a live quote destination, apply an owner-approved edge request-rate limit. The portfolio demo currently has no lead sink; the app's deterministic anti-abuse checks are not a distributed rate limiter. |
| P3 | `IMP-001` remains deferred pending production performance evidence. Hydration remains not reproduced/root cause unknown. Formal WCAG/screen-reader, Lighthouse, and field CWV evidence are not available from this run. |

P2/P3 items are documented and do not block deploying the current fictional portfolio demo under its stated boundary. No Phase 4B action is included here.

## 11. Validation record

| Check | Result |
|---|---|
| `npm test` | PASS — 8 tests, 0 failed |
| `npm run lint` | PASS |
| `npx tsc --noEmit` | PASS |
| `npm run build` | PASS — static pages/service details generated; quote API dynamic |
| `npm audit` | PASS — 0 vulnerabilities |
| `git diff --check` | PASS at closeout |
| HTTP routes | PASS — public routes 200; unknown route/service slug 404; OG image PNG; robots text |
| API boundary | PASS — success/400/403/413/415 cases as listed above |
| Browser responsive | PASS — 11 routes × 4 requested widths, no measured horizontal overflow |
| Browser keyboard/form | PASS — skip link, mobile Escape/focus return, errors, valid synthetic demo response |
| Browser console/hydration | No warning/error entries in the browser run; prior hydration status remains **NOT REPRODUCED / ROOT CAUSE UNKNOWN** |
| axe/WCAG/screen reader/Lighthouse/CWV | NOT PERFORMED; no claims made |
| Deploy/live integrations | NOT PERFORMED |

## 12. Reusable Nexus lessons recorded

- Begin each phase by proving the accepted baseline and preserving intentionally local evidence.
- Keep audit evidence, implementation authorization, phase acceptance, and deployment authorization as separate gates.
- Convert exact findings into narrow fixes; do not widen scope when a measurable local defect can be addressed directly.
- Test server boundaries with deterministic helpers and synthetic data; never infer runtime behavior from source presence alone.
- Record unavailable capabilities and negative results literally. A local build/browser check does not stand in for field performance or compliance evidence.
- Distinguish app-provider behavior from hosting-platform processing, and keep all demo success messages aligned with actual data flow.

## 13. Files and dependency status

See the Phase 4A commit for the complete file list. Application, UI, API, metadata, README, and regression-test changes are documented in the commit; no dependency versions or lockfile changed. `docs/phase-2.5a-evidence/` remains untracked and is excluded.
