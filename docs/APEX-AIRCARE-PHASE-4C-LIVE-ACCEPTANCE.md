# Apex AirCare — Phase 4C Live Production Acceptance

**Review date:** 2026-09-30
**Accepted application source:** `3f26331bf4d0653d7cb5a6a303775eade3439978`
**Repository branch at review start:** `main`
**Production origin:** <https://apex-aircare.vercel.app>
**Scope:** Live production verification and documentation only. No application source, dependency, configuration, Vercel project setting, environment variable, or deployment was changed during this review.

## 1. Release and deployment identity

- At review start, local `HEAD`, `main`, `origin/main`, and the SHA returned by `git ls-remote origin refs/heads/main` all matched `3f26331bf4d0653d7cb5a6a303775eade3439978`.
- The only pre-existing untracked path was `docs/phase-2.5a-evidence/`; it was kept local and was not included in the release documentation commit.
- In the authenticated Vercel project overview, the deployment was shown as **Production**, **Current**, **Ready**, and **Latest**. Its source was branch `main` and commit `3f26331`, with a Vercel link to the full accepted GitHub commit SHA above. The stable production domain shown was `apex-aircare.vercel.app`.
- The Vercel environment-variable page listed `NEXT_PUBLIC_SITE_URL` for **Production** and showed **Enable access to System Environment Variables** checked. Values were masked in the settings UI; the live canonical URLs and OG image URLs independently resolved to `https://apex-aircare.vercel.app`. `NEXT_PUBLIC_WHATSAPP_NUMBER` was not listed.
- Deployment identity is independently verified from the authenticated Vercel project UI and live site responses; it is not inferred from a local build.

## 2. Vercel build warnings and deployment recommendations

The successful 37-second Vercel Production build displayed two warning entries in Build Logs:

1. **`npm warn deprecated eslint@9.39.5: This version is no longer supported.` — P2.** This concerns the development lint toolchain, not a demonstrated production runtime failure. The Vercel deployment reached Ready, and the current checkout's `npm run lint` passed. Upgrade and verify the lint toolchain in a separately scoped maintenance change; no dependency change was made for this release gate.
2. **`npm warn install-scripts 1 package has install scripts not yet covered by allowScripts: unrs-resolver@1.12.2 (postinstall: node postinstall.js)` — P3.** npm's install-script policy skips dependency lifecycle scripts that are not covered by `allowScripts`; npm lists them for review. The Vercel build completed and the deployed routes and quote endpoint worked. Keep the policy conservative and review this package-specific script during routine dependency maintenance; do not blanket-approve install scripts to silence the notice. [npm install-script documentation](https://docs.npmjs.com/cli/v11/commands/npm-install-scripts/)

The Vercel overview separately showed a **Deployment Settings — 3 Recommendations** panel: concurrent deployments, skew protection, and a custom domain. These are platform recommendations, not Build Logs warnings. The existing Vercel production domain is live; no evidence showed a frontend/backend mismatch or a queued-build problem. No recommendation was applied.

## 3. Live routes and metadata

Each route below was requested from the live production origin:

| Route | HTTP result |
| --- | ---: |
| `/` | 200 |
| `/services` | 200 |
| `/services/aircon-servicing` | 200 |
| `/services/repair-troubleshooting` | 200 |
| `/services/new-installation` | 200 |
| `/services/chemical-cleaning` | 200 |
| `/about` | 200 |
| `/service-areas` | 200 |
| `/contact` | 200 |
| `/privacy` | 200 |
| unknown path | 404 |
| `/services/unknown-slug` | 404 |
| `/robots.txt` | 200, `text/plain` |
| `/opengraph-image` | 200, `image/png` |

Browser inspection found one H1 on each requested public page and the branded not-found page. Titles and descriptions were route-specific. Canonicals resolved to the production origin and the page path; Open Graph image URLs resolved to `https://apex-aircare.vercel.app/opengraph-image`. Pages exposed `noindex, nofollow` (the not-found page exposed `noindex`). No JSON-LD business structured data was present. `robots.txt` allows public routes and disallows `/api/`; no sitemap was added.

The live OG image was visually inspected. It reads “A fictional aircon service concept” and “PORTFOLIO DEMONSTRATION · NOT A LIVE BUSINESS”; it contains no ratings, reviews, customer counts, phone number, certifications, or operating-business claim.

## 4. Live quote flow and API boundary

The form was exercised in the production browser with synthetic values only:

- The labels, required states, and controls rendered. An invalid phone value displayed the error summary, set `aria-invalid="true"`, associated the field error through `aria-describedby`, and moved focus to the summary.
- A valid synthetic submission entered the submitting state and then displayed: “Demo only: your details were sent to this application for validation. They were not retained or forwarded to a lead system.” The URL acquired no query string. This is an application-level demo result, not evidence of infrastructure-level data handling.
- The contact page showed that WhatsApp is not configured, and no `wa.me` link was present. No form data was placed in a WhatsApp URL.

Direct synthetic POST checks to `/api/quote` returned:

| Case | HTTP result | Observed response |
| --- | ---: | --- |
| valid synthetic request | 200 | truthful demo response |
| invalid fields | 400 | sanitized message and field errors |
| unsupported `text/plain` | 415 | sanitized content-type message |
| malformed JSON | 400 | sanitized parse message |
| foreign `Origin` | 403 | sanitized origin message |
| filled honeypot | 400 | generic retry message |
| future timestamp | 400 | generic retry message |

All tested API responses were JSON with `Cache-Control: no-store` and `X-Content-Type-Options: nosniff`. No stack trace or submitted synthetic value was echoed. A network request cannot precisely establish the 800 ms minimum-time boundary; its exact timing cases are covered by the local deterministic tests. No load test or real lead-provider activation was performed.

## 5. Privacy and truthfulness

- Public pages consistently disclose the fictional portfolio concept. The home, service, about, area, contact, and privacy copy avoids presenting example locations as confirmed coverage or implying real technicians, reviews, ratings, credentials, awards, guarantees, completed jobs, response times, prices, opening hours, address, phone, or email.
- The privacy page says the app sends form values to this application for server-side validation, that the demo provider does not persist, log, or forward them to an operator, email, WhatsApp, or CRM, and that the hosting platform may process request data under its own terms. This matches the accepted `DemoLeadProvider` implementation and the live success response.
- The quote test used synthetic data. The application response did not echo it. No claim is made here about Vercel's internal request logging or retention beyond the platform's own terms.
- No CRM, email delivery, real WhatsApp lead delivery, analytics vendor, customer database, or external distributed rate limiter is active. An owner-approved edge rate limit remains necessary before enabling a real lead receiver; the current non-persistent demo is not a live lead receiver.

## 6. Responsive, accessibility, and runtime checks

The in-app browser measured `/`, `/services`, `/services/aircon-servicing`, `/contact`, `/privacy`, and an unknown route at CSS viewport widths **375, 768, 1024, and 1440 px**. All 24 measurements had zero positive horizontal overflow (`scrollWidth` did not exceed the viewport); no interactive control was positioned outside the viewport bounds.

Live keyboard/accessibility checks found:

- The skip link was first in keyboard order and had a visible 2.4 px focus outline; activating it navigated to `#main-content`.
- At mobile width, the navigation menu opened, Escape closed it, and focus returned to the menu trigger.
- The form controls had associated labels. Invalid-state error association and focus, and the polite live success/submitting status, were observed.
- The ten public routes each had one H1, and their rendered images had no missing or empty `alt` attributes.
- Reduced-motion CSS is present in the accepted application source, but a system reduced-motion preference was not emulated during this live check.

The production app browser console had no warning or error entries during the review. The only previously observed hydration diagnostic remains **NOT REPRODUCED / ROOT CAUSE UNKNOWN**; this review does not call it fixed. No axe scan, screen-reader evaluation, formal WCAG audit/certification, or Lighthouse run was performed.

## 7. Performance and observable security headers

- Vercel showed Speed Insights **Not Enabled** and no production CWV/LCP evidence was available. No performance score is claimed. **IMP-001 remains DEFERRED as P3** pending production performance evidence.
- The quote API's no-store and nosniff headers were verified as above. Public HTML, robots, and OG GET responses returned their expected content types and Vercel cache headers. The observed public HTML responses did not include `X-Content-Type-Options`; no global security-header configuration is claimed. Treat adding broad response headers as optional P3 hardening; no exploit or production failure was demonstrated.
- Vercel runtime protections, request retention, or distributed rate limits are not inferred from these response checks.

## 8. Local regression, findings, and decision

Final local checks on the accepted application source passed:

| Check | Result |
| --- | --- |
| `npm test` | PASS — 8/8 |
| `npm run lint` | PASS |
| `npx tsc --noEmit` | PASS |
| `npm run build` | PASS |
| `git diff --check` | PASS |

Findings:

- **P0:** none.
- **P1:** none.
- **P2:** ESLint 9.39.5 is reported unsupported by npm during Vercel dependency installation; update the development lint toolchain in a later maintenance change.
- **P3:** `unrs-resolver` postinstall remains outside npm's `allowScripts` allowlist (the build still succeeded); optional Vercel deployment recommendations; global `X-Content-Type-Options` header hardening for public GET responses; `IMP-001` pending production CWV/LCP evidence; and the documented axe/screen-reader/WCAG/Lighthouse evidence gaps.

The deployed app remains the accepted Phase 4A source SHA `3f26331bf4d0653d7cb5a6a303775eade3439978`. This Phase 4C documentation closeout does not change the deployed source. No application source or dependencies were changed. With P0 = 0 and P1 = 0, the fictional portfolio-demo release is **ACCEPTED**; the P2/P3 items above are explicitly retained for follow-up and do not activate real-client integrations or begin another phase.

## 9. Reusable Nexus lessons

- Establish the local, branch, remote, and deployed-source identities independently; a green local build is not proof of production deployment identity.
- Use real production HTTP/browser evidence for routes, metadata, forms, API boundaries, responsive behavior, and runtime state. Keep owner-provided deployment state distinct from independently inspected dashboard evidence.
- Classify dependency warnings by their actual effect. Do not treat a warning count as a failure or silence a dependency-script warning by blanket approval.
- State which privacy boundary is supported by application code and which hosting-provider behavior remains governed by that provider's terms.
- Retain exact unknown/deferred statuses: hydration is not reproduced and root cause unknown; IMP-001 remains deferred without CWV evidence; unavailable axe/screen-reader/WCAG/Lighthouse checks are not claimed.
