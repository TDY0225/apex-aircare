# Apex AirCare — Phase 2 Development Journal

**Slice:** Foundation, design system, and homepage structure
**Status:** Phase 2 implementation and local validation
**Date:** 2026-09-30

## Starting checkpoint

- Continued the Phase 1 planning checkpoint in `docs/phase-1-planning.md`.
- Git was on `main` with no commits and the configured `origin` had no refs. The Phase 1 document was untracked and retained.
- The user authorized Phase 2 implementation, validation, one meaningful commit, and a push only if safe. Deployment and later slices remain out of scope.

## Decisions applied

- Kept the approved cool white, service blue, and navy palette; the large photo-led hero, generous section rhythm, image-led service cards, dark illustrative area panel, and focused quote-form composition.
- Built a responsive single-page structure and centralized the reusable service, navigation, location, and form-option content.
- Replaced testimonials and operational proof with a truthful enquiry-process preview. Kept the fictional-demo disclosure visible throughout the page.
- Kept lead behavior local-only: the quote form sends and stores nothing. WhatsApp remains absent unless a destination is supplied through explicit configuration.
- Marked the page `noindex` and `nofollow`; omitted LocalBusiness schema and unverified contact/coverage claims.
- Inspected stock assets directly and excluded images with visible store, service-company, and manufacturer branding. Remaining stock images are locally served and described as illustrative.
- Read the installed Next.js font and image guides before validating those implementation choices. The site uses `next/font` and local assets with `next/image` sizing, priority on the hero only, and lazy defaults for below-fold photos.

## Validation record

Record actual command results below before the Phase 2 commit. Do not mark a check complete unless it passed in this checkout.

| Check | Result | Evidence / notes |
|---|---|---|
| Dependency installation | PASS | `npm ci` completed; 359 packages audited, zero reported vulnerabilities. |
| ESLint | PASS | `npm run lint` completed with exit code 0. |
| TypeScript | PASS | `npx tsc --noEmit` completed with exit code 0. |
| Production build | PASS | `npm run build` compiled and prerendered `/`, `/icon.svg`, and `/robots.txt`. |
| Responsive browser review | PASS | In-app browser checked 375, 768, 1024, and 1440 CSS px. No horizontal overflow; all six rendered images loaded. The tablet nav stayed on one line after a spacing adjustment. |
| Accessibility baseline | PASS | One `h1`, `lang="en"`, visible `noindex, nofollow`, four labeled fields and no unlabeled controls; 44 px main nav targets; mobile menu exposes its state, opens, closes with Escape, and restores focus. Form preview produced a local-only “nothing sent or saved” status. |
| Fake-proof/asset scan | PASS | Searched app and README for ratings, testimonials, phone/email, hours, guarantees and credentials. No invented proof or contact values were found in rendered copy. Visually excluded stock images with retailer/manufacturer identity. |
| Production preview diagnostics | PASS | Production preview returned `/` with no browser errors or warnings; all six images loaded. |
| Automated test suite | NOT PRESENT | `package.json` contains no test script or test framework; no test infrastructure was added. |
| Git diff checks | PASS | `git diff --cached --check` completed without whitespace errors. The staged file list and text sources were reviewed before commit. |

## Issues found and disposition

- An early candidate service photo visibly included a manufacturer's logo; it was removed from the implementation.
- An early installation photo included a named retailer and contact details; it was removed and replaced with an unbranded indoor unit photograph.
- The initial dependency install exited with a Windows `ENOTEMPTY` cleanup error. A subsequent `npm install` completed successfully; record the passing final check above.
- The development server emitted a React hydration diagnostic during browser review. The production preview did not reproduce it and had no browser console warnings or errors. The dev-only warning's cause was not established, so this is recorded as an unresolved development-environment observation rather than a confirmed application defect.

## Next gate

Complete the staged diff check, inspect the full staged change, create one Phase 2 commit, and push `main` only if the remote is still empty and the commit is exactly the reviewed checkpoint. Do not deploy or start Phase 3.
