# Apex AirCare — Phase 2.5A Visual / UX / Design Audit

**Date:** 2026-09-30
**Scope:** Audit and evidence only; no application implementation changes
**Visual decision:** **YES — WITH MINOR DRIFT**
**Phase 2.5B readiness:** **YES** — no P0/P1 blocker; keep the next slice limited to the candidates below.

## Executive summary

The current homepage preserves the approved Apex AirCare direction: cool white, navy, and service blue; a photo-led hero; prominent quote actions; image-led service cards; a dark illustrative service-area band; and a clear quote path. It reads as a local service concept rather than a generic SaaS page. The desktop reference's multi-panel composition becomes a straightforward mobile reading sequence, as intended by the Phase 1 responsive plan.

The concept image's fake testimonials, ratings, experience claims, contacts, hours, and guarantees were not reproduced. A clearly disclosed “What to expect” section takes the trust-building role. The form remains a local demonstration and does not send or store submissions. No active WhatsApp destination is configured.

No release-blocking defect was found. The bounded Phase 2.5B candidates are: transfer focus to the destination heading after choosing a mobile navigation link; bring small mobile supporting copy up to the Phase 1 practical minimum; remove the static “01 / 04” hero cue; and consider better-matched distinct photography only after its provenance and license are verified.

## 1. Baseline commit and Git state

- Repository: D:\chatgpt\Apex AirCare; branch: main.
- Baseline HEAD: 894f3489a2b832c3b3432371145ba8e4fbdd7cb2, matching the known Phase 2 commit 894f348.
- origin/main was queried with git ls-remote and returned the same SHA.
- The working tree was clean before audit evidence was created.
- Current audit changes are limited to this report, the development journal, and the screenshot evidence directory. No application source or dependency manifest changed.

## 2. Visual-reference alignment

**Classification: YES — WITH MINOR DRIFT.**

The attached 1320 × 1200 concept was reopened and inspected directly. It uses an airy white header, large dark hero copy beside technician photography, saturated blue actions, image-led service cards, a dark blue service-area panel, and a strong quote section. The implementation carries those same visual cues and maintains useful image/content balance.

| Reference element | Current implementation | Classification |
|---|---|---|
| Navy, service blue, cool white | Retained across shell, headings, links, actions, and pale surfaces | Intentional alignment |
| Large photo-led hero, copy beside image | Retained at desktop; stacks into a readable mobile sequence | Acceptable responsive difference |
| Header and quote CTA hierarchy | Brand/navigation and a clear Request a Quote action remain prominent | Intentional alignment |
| Four photo-led service cards | Four service options use image cards and direct enquiry links | Intentional alignment |
| Broad light/dark section rhythm | Pale service/approach/process regions alternate with a deep navy area band | Intentional alignment |
| Dark service-area illustration | Retained as a clearly labeled illustrative visual, not a real coverage map | Intentional improvement |
| Testimonial and experience-proof block | Replaced with an enquiry-process explanation and fictional-demo framing | Intentional truthfulness improvement |
| Quote composition | A focused form sits beside explanatory copy and a visible demo disclosure | Acceptable implementation difference |
| Static “01 / 04” hero index | One static hero image, no carousel behavior or controls | Potential regression; P3 |
| Hero/service photo fit and reuse | Technician scene differs from reference wall-mounted unit; some image assets repeat | Optional asset-fit improvement; P3 |

This is a directional comparison, not a pixel-copy request. The single-column mobile flow, simplified illustration, and truthful process block are supported by the approved project plan.

## 3. Current architecture assessment

**Assessment: ACCEPTABLE.**

The homepage is a 289-line Server Component. Repeated service content is data-driven; mobile navigation and quote-form behavior are separate Client Components. Shared container, icon, button, footer, and content modules are already extracted. The remaining page code is a straightforward composition of six semantic sections; no repeated interaction logic or tangled state justified extraction.

Keep the existing Server Component default and small client boundaries. Do not extract components only to meet an arbitrary line count.

## 4. Responsive live QA

The production preview was inspected in the in-app browser at the required CSS widths. document.documentElement.scrollWidth matched clientWidth at every width; the 15 px difference from the viewport dimensions at desktop/tablet was the vertical scrollbar gutter, not overflow.

| Viewport | Document client width | Document scroll width | Result |
|---:|---:|---:|---|
| 375 px | 360 px | 360 px | Pass; mobile flow and cards fit |
| 768 px | 753 px | 753 px | Pass; tablet layout fits without document overflow |
| 1024 px | 1009 px | 1009 px | Pass; navigation, hero, and section grid fit |
| 1440 px | 1425 px | 1425 px | Pass; desktop composition fits |

The 375 px review covered hero, service cards, area section, menu, form validation/demo result, and footer. The 768/1024/1440 px captures covered header, hero, service cards, approach, dark area panel, process, quote region, and footer. All six rendered images loaded in the production preview. The first 1024 px capture was taken before image loading completed and was retaken after network idle; the retaken evidence supports this assessment.

There is no confirmed CTA wrapping, clipping, or horizontal-overflow defect. An early concern that 768 px might be cramped was not confirmed after inspecting the loaded capture.

## 5. Accessibility QA

**Observed strengths**

- Skip link is the first keyboard stop and becomes visibly outlined when focused.
- One descriptive h1, semantic header/nav/main/footer landmarks, and labeled content sections are present.
- Mobile menu exposes aria-expanded, has an accessible name, opens/closes, and Escape closes it and restores focus to its trigger.
- The mobile menu trigger measures 44 × 44 CSS px. Main actions and form controls are keyboard-usable; no hover-only operation was observed.
- Form controls have explicit labels; required phone and service fields match Phase 1. The local result uses a persistent role=status / polite live announcement.
- Informative photography has alt text; decorative icons and the illustrative area drawing are hidden from assistive technology.
- Reduced-motion CSS disables smooth scrolling and minimizes animation/transition duration.

**Finding:** after activating an in-page link in the mobile menu, the menu hides and the page scrolls, but the settled active element is BODY, not the destination heading. This is reproducible with Service Areas. It weakens keyboard context continuity; see A11Y-01.

At narrow mobile widths, several supporting text elements are below the Phase 1 14 px practical caption floor; see TYPE-01. This is a project readability discrepancy, not a claim of a measured WCAG failure.

No screen-reader session, automated axe scan, complete contrast audit, or physical-device test was performed. No WCAG conformance claim is made. Reduced-motion behavior was source-checked, not emulated in the browser.

## 6. Product Design findings

**Status: USED.** Product Design index/audit guidance informed a screenshot-backed review of information flow, visitor intent, conversion friction, service discovery, area relevance, trust progression, quote entry, and mobile usability.

- First-screen comprehension is direct: the page identifies the fictional local-service concept, explains the proposition, and offers a quote action.
- The primary action is consistent with the Phase 1 funnel. Repeated quote actions are useful at section decision points and consistent with the approved reference.
- Services, illustrative locations, enquiry expectations, and quote form form a comprehensible progression.
- The phone/service fields are appropriate for the planned demo. Visible disclosure states that data is not sent or stored.
- WhatsApp is absent while no business destination is configured, consistent with the no-placeholder rule.
- Supporting copy size and mobile menu destination focus are the material UX/a11y polish candidates.

## 7. UI UX Pro Max findings

**Status: UNAVAILABLE in the capability catalog surfaced for this session.** No review or simulated output is claimed. Direct browser QA and available Product Design/Taste guidance covered relevant questions without representing them as UI UX Pro Max findings.

## 8. Taste / anti-slop findings

**Status: USED** as advisory anti-slop review, not as authority to override the approved concept.

The local-service character is clear. The site avoids fake reviews, unsupported proof badges, gradients, motion spectacle, floating overlays, and repeated generic feature sections. Pale surfaces and image cards support service discovery; the dark area band adds a useful visual pause.

Polish opportunities: the uninteractive “01 / 04” counter suggests a slide sequence, some supporting mobile copy feels too small, and some photos repeat. The approved repeated Request a Quote path is deliberate and should remain.

## 9. awesome-design-md findings

**Status: INSPECTED.** The [VoltAgent awesome-design-md repository](https://github.com/VoltAgent/awesome-design-md) describes a collection of design-system documents. Useful comparison categories include semantic color roles, type hierarchy, spacing, component states, responsive rules, and explicit do/don't constraints. These categories were used as a checklist only.

No SaaS brand palette, logo, component, or signature visual was copied. Apex's own Phase 1 tokens remain authoritative.

## 10. Bencho decision matrix

**Status: INSPECTED.** The [Bencho catalog](https://bencho.dev/) exposes interactive UI-block patterns. No package or code was imported.

| Interaction | Potential location | User benefit | Accessibility cost | Performance / complexity | Decision |
|---|---|---|---|---|---|
| Press/focus feedback | Quote actions | Confirms activation | Low when focus remains visible | Negligible CSS; native styling is adequate | USE the behavior concept only; no Bencho code |
| Inline confirmation | Quote form | Confirms demo result | Low; persistent live-region status is announced | Low; already implemented without toast timing | USE current inline status; do not replace with transient toast |
| Magnetic/custom service selector | Service field | Little beyond visual novelty | Risks keyboard and screen-reader behavior | Adds custom JS/state | REJECT; keep labeled native select |
| Before/after slider | Future service detail | Could compare real outcomes | Needs keyboard-operable range and meaningful captions | Additional interaction and paired imagery | DEFER until authentic licensed pairs and clear need exist |
| Mobile service carousel | Service overview | May shorten initial scroll | Can hide items behind swipe/controls | Adds JS/state | REJECT; keep all options visible |
| Photo upload dropzone | Quote form | No present recipient or processing need | Adds file-accessibility and privacy complexity | Upload, validation, security cost | REJECT; demo has no real recipient |

## 11. Galaxy / Uiverse decision

**Status: INSPECTED; adoption: REJECTED.** The [Uiverse Galaxy repository](https://github.com/uiverse-io/galaxy/blob/main/README.md) describes a large MIT-licensed collection of community UI items. The top-level repository/description was inspected; no component was selected. Nothing materially improves this service quote flow enough to justify visual consistency or maintenance cost.

## 12. GSAP / GSAP Skills decision

**Status: GSAP skills INSPECTED; runtime: REJECTED.** Core, performance, and ScrollTrigger guidance was reviewed. Apex has no interaction requiring timeline choreography or scroll-linked animation. Native anchors, CSS feedback, and reduced-motion rules meet the current need with less runtime and maintenance cost. Do not add GSAP.

## 13. Refero status and findings

**Status: INSPECTED; adoption: DEFERRED.** Targeted research found mainly SaaS demo-request/contact patterns, not a close local home-service quote analogue. See [Refero's research workflow](https://refero.design/how-it-works) and the inspected [Contractbook demo-request example](https://refero.design/p/contractbook-request-a-demo). No pattern had a clear advantage over Apex's simple quote form.

## 14. Screenshot-to-code decision

**Decision: REJECT for this phase.** Current layout is directionally aligned with the approved reference. Product Design image-to-code capability is available, but reconstruction is not justified and could disturb the accessible source architecture. No reconstruction was performed.

## 15. Morphicons / other microinteraction resources

**Morphicons: UNAVAILABLE in the surfaced capability catalog.** A menu-to-close icon is an understandable native state change; no other real transition needs icon morphing. **Decision: NOT RELEVANT.** No microinteraction dependency should be added for decoration.

## 16. Impeccable status

- Current surfaced skill catalog: **UNAVAILABLE**.
- Project-level hook/config locations inspected: none observed in the repository root and project files checked.
- Global installation outside surfaced catalog/inspected paths: **UNVERIFIED**.
- No executable local Impeccable skill/hook was available; none was run or installed.
- Independent full Impeccable production pass remains **DEFERRED** until after controlled fixes.

## 17. SEO foundation

- Page title, description, Open Graph basics, and configurable metadata base are present.
- The page is noindex/nofollow, appropriate for this fictional portfolio concept.
- robots.txt permits crawling so crawlers can observe the noindex instruction.
- No sitemap or canonical is configured because no production/canonical origin has been selected.
- There is no LocalBusiness/HVACBusiness schema, fake address/phone/hours/opening status, or asserted operational coverage.
- Geographic wording is framed as a fictional concept and illustrative examples.
- Sound demo foundation; not production SEO acceptance.

## 18. Performance assessment

- Page is statically rendered and uses small Client Components for navigation and form state.
- Local photography uses next/image responsive sizes; only the hero is priority-loaded and below-fold images use lazy defaults.
- Four local source JPEG assets total approximately 975 KB; the local preview returned optimized Next image responses. This is not a Lighthouse or transfer-size score.
- DM Sans uses next/font with display: swap.
- No runtime third-party script, external map embed, UI framework, or animation dependency was observed.
- No Core Web Vitals, Lighthouse, or real-network measurements were run or inferred.

## 19. Truthfulness assessment

Rendered implementation contains no unsupported ratings, testimonials, customer identities, years in business, certifications, awards, manufacturer partnerships, guarantees, contact values, exact hours, business statistics, or service prices. Fictional concept and non-delivery form behavior are disclosed. Area list/map are illustrative. Photos are described as illustrative and do not claim pictured people work for Apex.

The concept image's fake proof was replaced by an enquiry-process explanation, retaining a trust-building role without fabricated evidence. Existing photo licensing/provenance was not independently verified and remains a publication gate.

## 20. Consensus findings

- Truthful trust-building: the concept's social proof must not be copied as factual content; Phase 1 and rendered source support the process/disclosure replacement.
- Keep current direction: direct reference comparison, Phase 1 tokens, and live captures support the photo-led blue/navy local-service identity.
- Use native/simple interactions: project architecture and inspected resources support the native select, inline status, anchors, and no animation framework.
- No broad redesign or dependency expansion is warranted: browser evidence shows the structure works at required widths and the flow has no complex interaction need.

## 21. Single-source findings and conflicting recommendations

**Single-source observations**

- Static “01 / 04” cue was raised by visual/anti-slop review; it is decorative, not an accessibility failure.
- Image-fit/repetition comes from direct visual/source inspection. Replacement provenance/license is not confirmed.
- Settled focus target after mobile navigation came from live keyboard/browser interaction and is corroborated by Phase 1's focus-predictability requirement.

**Conflict and resolution**

- Generic Taste advice may discourage repeating a CTA. The Phase 1 funnel and approved concept intentionally repeat Request a Quote at useful decision points. Preserve them because project direction and conversion clarity take precedence.
- A generic file-length preference may suggest extraction. Phase 1 cautions against premature abstraction; the 289-line page is a simple server-rendered composition, so keep it intact.
- Screenshot reconstruction could encourage pixel imitation. The image is direction, not factual or pixel-copy source; preserve truthful content and semantic architecture.

Conflicts were resolved in this order: truthfulness, accessibility, usability, approved project direction, conversion clarity, responsiveness, performance, maintainability, then aesthetic preference.

## 22. P0 findings

**None.**

## 23. P1 findings

**None.**

## 24. P2 findings

| ID | Area | Evidence | Source | Recommended action | Risk if unchanged | Decision |
|---|---|---|---|---|---|---|
| A11Y-01 | Mobile keyboard navigation | After choosing Service Areas, menu closes and settled active element is BODY, not destination heading | Live browser keyboard/DOM QA; Phase 1 focus-predictability requirement | On mobile-menu in-page activation, move keyboard focus to destination heading; preserve Escape-to-trigger behavior | Keyboard users lose a clear continuation point after navigation | ACCEPT for Phase 2.5B |
| TYPE-01 | Mobile supporting-text readability | At 375 px, service descriptions compute to about 12.48 px, area list to 12.16 px, map caption to 10.88 px, footer disclosure to 11.52 px; Phase 1 specifies 14 px practical caption minimum | Live computed-style inspection and Phase 1 type specification | Raise meaningful supporting copy/disclosure to at least 14 px where it fits; retune spacing/wrapping and review 375/768 px | Explanatory text is harder to read and departs from agreed type system | ACCEPT for Phase 2.5B |

These are polish/readability findings, not P0/P1 release blockers.

## 25. P3 findings

| ID | Area | Evidence | Source | Recommended action | Risk if unchanged | Decision |
|---|---|---|---|---|---|---|
| VIS-01 | Hero visual cue | “01 / 04” is visible beside one static image; no slides or controls exist | Direct visual and Taste anti-slop review | Remove counter or replace with truthful static caption | Minor implied-carousel ambiguity | ACCEPT as optional polish |
| ASSET-01 | Photography | Hero scene differs from reference wall-mounted split unit; hero/service and servicing/approach imagery repeat | Direct reference/source review; Phase 1 photography direction | If a distinct, appropriately licensed wall-unit service photo exists, assess a targeted replacement | Slightly weaker service specificity and visual variety | DEFER until provenance/license is verified |

## 26. Proposed Phase 2.5B controlled fix set

### MUST FIX

None. No P0/P1 finding blocks a controlled polish slice.

### SHOULD FIX

1. Resolve A11Y-01: move keyboard focus to the selected in-page destination heading after the mobile menu link is activated. Preserve Escape close and trigger-focus behavior. Verify pointer navigation is not disrupted.
2. Resolve TYPE-01: raise meaningful supporting copy/disclosure to the Phase 1 14 px practical floor, then check wrapping, spacing, and touch/mobile layout at 375 and 768 px.

### OPTIONAL

1. Resolve VIS-01 by removing the static “01 / 04” index or giving it truthful static meaning.
2. Revisit ASSET-01 only if licensed/provenance-verified photography is available. Keep existing imagery if no suitable verified replacement exists.

Keep Phase 2.5B limited to these findings. Preserve visual identity, server/client boundaries, local-only form behavior, dependency restraint, and truthful demo language.

## 27. Recommendations explicitly rejected

- Pixel-copying the concept image or restoring fabricated testimonials, ratings, phone, email, hours, years, guarantees, or credentials.
- Broad redesign, screenshot-to-code reconstruction, or changing the approved navy/blue/white identity.
- Removing useful repeated Request a Quote actions solely for a generic anti-repeat rule.
- Custom/magnetic select, swipe-only carousel, photo upload, or transient toast replacing persistent live status.
- GSAP, Morphicons, Bencho, Galaxy, or other runtime dependencies without a demonstrated interaction need.
- Extracting page sections only because page.tsx is 289 lines.
- Adding real contact, backend, CRM, email, analytics, map embeds, or real business schema during this phase.
- Replacing photos before replacement provenance/license is verified.

## 28. Development journal update

The factual Phase 2.5A entry is appended to docs/APEX-AIRCARE-DEVELOPMENT-JOURNAL.md. It records baseline, capability statuses/contributions, consensus/conflicts, findings, accepted/deferred/rejected candidates, validation, and Nexus-reusable lessons. The older Phase 2 closeout gate is labeled historical.

## 29. Validation results

| Check | Result | Evidence / limits |
|---|---|---|
| Baseline Git inspection | PASS | HEAD and origin/main both 894f3489a2b832c3b3432371145ba8e4fbdd7cb2; clean before evidence |
| In-app production browser QA | PASS | 375, 768, 1024, 1440 CSS px; no document horizontal overflow |
| Browser console | PASS | tab.dev.logs with warn/error levels returned an empty list |
| Mobile menu/keyboard | PASS with A11Y-01 | Skip link, 44 × 44 trigger, aria-expanded, Escape close/focus restore passed; destination focus needs polish |
| Form demonstration | PASS | Native required-field validation and local persistent demo result inspected; no submission sent or stored |
| ESLint | PASS | npm run lint, exit code 0 |
| Production build | PASS | npm run build, exit code 0; Next.js 16.3.7 compiled, type-checked and statically rendered /, /_not-found, /icon.svg, /robots.txt |
| Automated test suite | NOT PRESENT | No test script/framework in package.json; no suite was added or run |
| Accessibility automation/screen reader | NOT RUN | Outside completed manual browser checks; no full conformance claim |
| git diff --check | PASS | Completed after the report and journal were written; no whitespace errors |

## 30. Files changed

- docs/APEX-AIRCARE-PHASE-2.5A-AUDIT.md — this audit report.
- docs/APEX-AIRCARE-DEVELOPMENT-JOURNAL.md — Phase 2.5A record and current gate.
- docs/phase-2.5a-evidence/ — local JPEG browser evidence. Captures used: 01–04 and 06–16. Capture 05 is a redundant top-of-page repeat and was not used to support a claim.

No application code or configuration file was changed.

## 31. Dependencies changed

**None.** No package was installed, removed, or changed.

## 32. Final Git status

Final status: main...origin/main; docs/APEX-AIRCARE-DEVELOPMENT-JOURNAL.md is modified; docs/APEX-AIRCARE-PHASE-2.5A-AUDIT.md and docs/phase-2.5a-evidence/ are untracked. No application source/dependency change, commit, push, or deployment was made.

## Resource references

- [VoltAgent awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
- [Bencho](https://bencho.dev/)
- [Uiverse Galaxy README](https://github.com/uiverse-io/galaxy/blob/main/README.md)
- [Refero research workflow](https://refero.design/how-it-works)
- [Refero Contractbook request-a-demo example](https://refero.design/p/contractbook-request-a-demo)
- [Apex AirCare Phase 1 planning](phase-1-planning.md)
- [Phase 2.5A screenshot evidence](phase-2.5a-evidence/)

## Stop gate

READY FOR PHASE 2.5B CONTROLLED FIXES: YES
