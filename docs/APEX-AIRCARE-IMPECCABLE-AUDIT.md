# Apex AirCare — Independent Impeccable Audit

Date: 2026-09-30
Accepted application baseline: `084830b9e26b61b42bcd3d6ce8420d9dc32d9bad`

## Audit boundary

This was an audit-only pass over the accepted Phase 2.5B implementation. No application source, styles, components, configuration, dependency, deployment, or runtime behavior was changed. Phase 3 was not started, and no findings were implemented.

The review treated the rendered Apex AirCare implementation as the subject. The Phase 2.5A recommendation list was not used as an answer key. Phase 1 planning was read only to preserve the approved product direction: a truthful fictional local-service concept with navy, service blue, cool white, photo-led composition, and commercial service-business character.

## Baseline and working tree

- `HEAD`: `084830b9e26b61b42bcd3d6ce8420d9dc32d9bad`
- Branch: `main`
- `origin/main`: `084830b9e26b61b42bcd3d6ce8420d9dc32d9bad`
- Application source/configuration: clean and unchanged during this audit.
- Pre-existing untracked directory: `docs/phase-2.5a-evidence/`, retained as local audit evidence.

The working tree was therefore not byte-for-byte clean because of that pre-existing evidence directory. No unexpected application source dirtiness was found.

## Impeccable discovery and installation state

Official source and guidance:

- Source repository: https://github.com/pbakaus/impeccable
- Official documentation: https://impeccable.style/docs/
- Official audit guidance: https://impeccable.style/docs/audit/
- Official detector guidance: https://impeccable.style/docs/detector/

| State | Result | Evidence |
|---|---|---|
| AVAILABLE | YES | Official repository, documentation, and npm CLI were reachable |
| INSTALLED | NO project-local skill | No `.agents/skills/impeccable`, `.impeccable`, or project hook manifest existed |
| EXECUTABLE | YES | `npx --yes impeccable --version` returned `4.1.0`; `detect` executed |
| USED | YES, partially | Deterministic source scan ran against `src/` |
| PARTIALLY USED | YES | Official audit domains were applied to rendered browser inspection; URL detector was blocked |
| BLOCKED | URL detector and harness-native `/impeccable audit` | No Chrome, Chromium, Edge, or Brave executable was available to the CLI; no Codex Impeccable skill was installed |

Installation details:

- Installer/package version: `impeccable` CLI `4.1.0` via `npx --yes impeccable`.
- Skill metadata version: not applicable; no skill bundle was installed.
- Engine version: not separately exposed by the CLI output.
- Installation location: no project-local installation. The transient npx resolution used the npm cache configured at `D:\DevCache\npm`; no project files were created by the CLI.
- Files created by Impeccable: none.
- Tracked/ignored Impeccable files: none.
- Hooks: not enabled. `.codex/hooks.json` was absent, and no Git hooks were added.
- Runtime dependencies: unchanged; `package.json` and the lockfile were not modified.

## Capabilities actually executed

### Deterministic source detector

Command:

```text
npx --yes impeccable detect --json src/
```

Observed output: two `side-tab` warnings in `src/app/globals.css`, at lines 158 and 226. The process returned exit code 1, so this was recorded as a non-clean diagnostic result rather than a pass.

The warnings identify:

1. `.image-stamp { border-left: 3px solid #73b3f1; }`
2. `.form-status.is-visible { border-left: 3px solid var(--service-blue); }`

### Official audit guidance applied

The official web audit categories were applied to a fresh rendered production preview: accessibility, performance observations, theming consistency, responsive behavior, touch targets, and implementation integrity. The visual review covered hierarchy, typography, spacing, alignment, section rhythm, CTA hierarchy, local-service character, card use, image treatment, service discovery, quote entry, mobile usability, semantic structure, and interaction clarity.

### Capabilities unavailable

- `npx impeccable detect <URL>` could not run because the CLI could not find a Chrome, Chromium, Edge, or Brave executable. The in-app browser was still used for manual rendered inspection.
- No Codex-native `/impeccable audit` skill command was available because no Impeccable skill was installed in the project or surfaced skill catalog.
- No Impeccable LLM critique command was run.
- No Lighthouse, Core Web Vitals score, axe scan, full contrast audit, or screen-reader session was run.

## Independent findings

### P0 — blocking

None found.

### P1 — important

None found.

### P2 — meaningful polish

None requiring an authorized fix in this audit.

The two detector warnings are documented under rejected recommendations below. They are intentional accent treatments with clear functional or contextual roles, not confirmed usability failures.

### P3 — optional

#### IMP-001 — Development-only LCP advisory

- **Severity:** P3 — optional
- **Area:** Performance observation
- **Evidence:** During a fresh development preview, Next reported that `/images/hero-indoor-technician.jpg` was detected as the Largest Contentful Paint and suggested `loading="eager"`. The production preview emitted no browser warning or error, and no Lighthouse or Core Web Vitals measurement was available.
- **Impeccable capability/guidance source:** Official audit guidance includes loading and rendering observations; this specific message came from Next.js development diagnostics, not from Impeccable.
- **Recommended action:** Verify hero image LCP with a production performance measurement before changing source behavior.
- **Risk if unchanged:** A slower hero render on some devices is possible, but the impact is currently unquantified.

This remains an observation, not a confirmed root cause or a request to change the application during this audit.

## False positives and rejected recommendations

### Detector `side-tab` warnings

The detector's two warnings are technically accurate pattern matches, but the generic recommendation to remove both borders is rejected for this project:

- The image stamp is a deliberate photo caption treatment that supports truthful illustrative imagery and reinforces the approved commercial local-service direction.
- The form status border is a persistent status affordance paired with a pale status surface. Removing its visual distinction would reduce feedback clarity.
- The approved Apex direction already uses restrained rectangular labels and service-blue accents. Replacing them solely to satisfy a generic anti-pattern rule would create visual drift without concrete usability evidence.

### Other rejected generic advice

- Removing service cards was rejected because the four cards are the primary service-discovery structure and remain readable at mobile widths.
- Removing repeated quote CTAs was rejected because they appear at distinct decision points and preserve the approved conversion hierarchy.
- Replacing the illustrative map, photo treatment, or navy/blue palette was rejected because the current implementation is explicitly labeled as a fictional concept and remains aligned with the approved visual reference.
- Introducing a carousel, custom select, additional motion library, backend form behavior, testimonials, ratings, contact proof, or coverage claims was rejected as outside this audit and inconsistent with the truthful-demo constraint.

## Live QA

The production preview was inspected at 375, 768, 1024, and 1440 CSS px.

| Viewport | Document width result | Observation |
|---|---:|---|
| 375 | `scrollWidth = clientWidth = 360` | No horizontal overflow; mobile header, hero, services, areas, process, quote, and footer remained within the viewport |
| 768 | `scrollWidth = clientWidth = 753` | No horizontal overflow; content transitioned into the tablet layout without clipping |
| 1024 | `scrollWidth = clientWidth = 1009` | No horizontal overflow; service and content columns remained aligned |
| 1440 | `scrollWidth = clientWidth = 1425` | No horizontal overflow; desktop hierarchy and image-to-copy balance remained stable |

Manual visual review found:

- Hero hierarchy is clear: fictional-demo disclosure, headline, supporting copy, primary quote CTA, secondary service CTA, proof-free reassurance points, and technician image.
- Navy, service blue, and cool white remain coherent across the header, hero, service grid, dark service-area section, process section, quote form, and footer.
- The service-card repetition is purposeful for service discovery rather than unnecessary nested-card decoration.
- Image labels and service-area copy maintain the fictional, illustrative framing.
- The quote section states that details stay on the page and are never submitted; the form labels and required-field markers are understandable.
- No obvious clipping, misleading control, broken image crop, or generic SaaS drift was observed in the requested viewports.

## Accessibility and keyboard observations

- Skip link received focus first through keyboard tabbing.
- Mobile navigation exposed `aria-expanded="true"` when opened.
- Escape closed the mobile menu and restored focus to the `Open navigation menu` button.
- Keyboard activation of `Service Areas` closed the menu and focused `#areas-title` (`h2`, `tabIndex=-1`).
- The form exposed four labels, required phone/service controls, and a polite live status.
- After completing the required demo fields, the form displayed: `Demo only: this form is not connected. Nothing was sent or saved.`
- One `h1`, eight `h2` headings, and header/nav/main/footer landmarks were present.
- The static `01 / 04` hero counter remained absent.
- No full WCAG conformance claim is made.

## Hydration observation

Status remains **NOT REPRODUCED / ROOT CAUSE UNKNOWN**. The earlier HMR panic and React state diagnostic were not reproduced as a clean initial-load hydration defect. The production preview loaded and interacted without console warnings or errors. The separate development LCP advisory is recorded as `IMP-001` and is not treated as a hydration root cause.

## Validation

| Check | Result |
|---|---|
| `npm run lint` | PASS |
| `npx tsc --noEmit` | PASS |
| `npm run build` | PASS; static routes generated |
| `git diff --check` | PASS after documentation edits; new audit document also passed a trailing-whitespace check |
| Production browser QA | PASS at 375/768/1024/1440 px |
| Production browser console | PASS; no warning/error entries in the fresh production tab |
| Impeccable source detector | PARTIAL; two warnings, exit code 1 |
| Impeccable URL detector | BLOCKED by missing supported browser executable |
| Automated test suite | NOT PRESENT; no suite added |

## Files changed in this audit

- `docs/APEX-AIRCARE-IMPECCABLE-AUDIT.md` — new audit report.
- `docs/APEX-AIRCARE-DEVELOPMENT-JOURNAL.md` — audit entry and capability-state record.

Application source, styles, components, configuration, dependencies, and hooks were not changed.

## Nexus-reusable lessons

1. Keep Impeccable's `AVAILABLE`, `INSTALLED`, `EXECUTABLE`, `USED`, `PARTIALLY USED`, and `BLOCKED` states separate; an official source or transient CLI does not prove a Codex skill installation.
2. A deterministic anti-pattern detector is evidence for a pattern match, not automatic authorization to remove an intentional treatment.
3. Treat URL-scan prerequisites and browser-plugin capabilities separately; manual in-app browser QA can proceed without claiming the CLI URL detector ran.
4. Keep development diagnostics, production console results, and performance measurements as separate evidence classes.
5. An audit-only pass should leave findings visible for owner review and should not create a release/application commit or push.

## Owner acceptance and closeout

The owner accepted this independent audit on 2026-09-30 with the following decisions:

- No Phase 2.5C implementation is required.
- P0: none; P1: none; P2 requiring fixes: none.
- `IMP-001` remains **DEFERRED** as a P3 performance observation until production CWV/performance evidence exists.
- The two `side-tab` detector findings remain rejected false positives for this project.
- Hydration status remains **NOT REPRODUCED / ROOT CAUSE UNKNOWN**.
- The documented Impeccable capability limitations remain in force. This acceptance does not claim that a complete Impeccable suite was executed.
- No finding was implemented, no application/release commit was created in this closeout, nothing was pushed, and Phase 3 was not started.

The next action is a separate owner-authorized Phase 3 decision. No Phase 2.5C work is pending.

## Gate

READY FOR PHASE 3: YES
