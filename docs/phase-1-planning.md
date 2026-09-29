# Apex AirCare — Phase 1 Product and Design Plan

**Status:** Phase 1 complete; planning only
**Project:** Fictional portfolio demonstration for a Kuala Lumpur / Klang Valley air-conditioning service business
**Visual source:** Owner-approved Apex AirCare concept image attached to the project brief
**Boundary:** This plan does not authorize Phase 2, deployment, real lead delivery, or publication.

## 1. Repository and Git State

- Local path: `D:\chatgpt\Apex AirCare`.
- The directory was empty before this Phase 1 document was added; it contained no application, dependency manifest, or prior work.
- Git was initialized on `main`; `origin` is `https://github.com/TDY0225/apex-aircare.git`.
- The public GitHub repository was checked and displayed as empty. `git ls-remote origin` completed without listing refs.
- No commit or push was made. The Phase 1 document is the only project file created so far.
- The working tree is expected to contain this untracked planning document; there is no pre-existing history to preserve.

## 2. Capability Inventory

Inventory is limited to resources surfaced in this Codex session and the official/public pages that could be inspected. “Not observed” does not mean globally unavailable.

| Capability | Status | Role / selected state | Evidence and reason |
|---|---|---|---|
| Product Design skills | AVAILABLE / SELECTED | Flow, visitor friction, information architecture | Product Design skill metadata and routing guidance are available in this session; applied as planning guidance only. |
| Taste frontend skill | AVAILABLE / SELECTED | Anti-template review and visual discipline | The `design-taste-frontend` skill is available; used as advisory planning guidance, not to override the approved reference. |
| UI UX Pro Max | UNVERIFIED / NOT SELECTED | Possible later interface/accessibility reference | Not present in the surfaced skill catalog; no claim of local installation or use. |
| Impeccable | OPTIONAL / NOT SELECTED | Possible focused design critique after implementation | Not present in the surfaced skill catalog. Its public repository describes critique/audit and deterministic detection workflows; installation and execution are deferred. |
| awesome-design-md | AVAILABLE / SELECTED FOR RESEARCH | Extract reusable design-system principles | Public repository and design-language examples were accessible. Its token roles, typography hierarchy, component states, spacing, and responsive behavior format are useful as a checklist; no brand system is copied. |
| Bencho | AVAILABLE / CONSIDERED | Interactive UI pattern reference | Public component catalog was accessible. Most blocks are more expressive than this service flow needs; see the decision matrix below. |
| Uiverse Galaxy | AVAILABLE / CONSIDERED, REJECTED | Optional component inspiration | Public repository was accessible and describes a large collection of community UI elements. No element improves this brief enough to justify importing or adapting it. |
| GSAP skills | AVAILABLE / NOT SELECTED | Advanced motion guidance | GSAP-related skills are visible in the session. No GSAP runtime/package is present because the project has no package setup; CSS/native interaction is adequate. |
| Screenshot-to-code | NOT OBSERVED / NOT SELECTED | Possible visual reconstruction aid | No relevant capability was surfaced. The image is a visual guide rather than a pixel-copy target. |
| Refero | UNVERIFIED / NOT SELECTED | Optional product-design reference research | Not verified in this session and not needed to establish the approved direction. |
| Next.js, TypeScript, Tailwind CSS | AVAILABLE AS A PLANNED STACK; NOT INSTALLED | Phase 2 application foundation | Git, Node.js `v24.18.0`, and npm `11.16.0` are installed. No project package manifest exists yet. Current Next.js documentation presents App Router and version `16.3.7`; exact versions should be resolved and locked when Phase 2 starts. |

### awesome-design-md findings

The collection is most useful as a structured way to record semantic color roles, type levels, control states, spacing, elevation, and responsive behavior. Those categories informed the original Apex tokens below. Its brand examples are reference material only; none of their brand colors, logos, or signature components should be transplanted into Apex.

## 3. Product Definition

Apex AirCare is a fictional portfolio concept for residential and small-commercial air-conditioning servicing, repair, installation, and cleaning in Kuala Lumpur / Klang Valley. The site demonstrates how a local service business can help visitors understand a problem, decide which service may fit, see whether an area is relevant, and choose a contact route.

It is not an operating company. All hosted or publicly shown versions must identify themselves as a portfolio demonstration. The site must not imply that a technician is available, that an enquiry reaches a real business, or that a service-area list represents verified operational coverage.

## 4. Target Visitors and Friction

**Primary visitor:** a homeowner or tenant with an air-conditioning problem or planned maintenance need who wants to know what service to request and how to contact the provider.

**Secondary visitors:** landlords/property managers, small offices, and retail or other small commercial premises.

Common visitor needs and anxieties:

- Is this the right service for the symptom or job?
- Does the provider cover my area and property type?
- What happens after I make contact?
- Will the service scope, price, and next steps be explained clearly?
- Is this a real business contact or a portfolio demo?

Resolve these with readable service descriptions, a plain-language process, visible demo disclosure, clearly scoped area examples, and one simple quote path. Do not rely on invented reviews or credentials to create trust.

## 5. Conversion Funnel and CTA Hierarchy

Visitor understands the service and demo context → selects a relevant service → checks example coverage → sees what to expect → chooses **Request a Quote** or an intentionally configured WhatsApp route → receives a truthful demo confirmation.

1. **Primary:** Request a Quote; link to the quote section/form.
2. **Secondary:** WhatsApp Us only when a business destination is explicitly configured outside source control. Without configuration, omit the outbound CTA and keep quote/contact guidance available.
3. **Tertiary:** service-detail and process links.

Avoid equal-weight CTA clusters, floating conversion overlays, or sticky mobile bars that cover page content. On mobile, place the quote action in the first screen and keep the form reachable without persistent obstruction.

## 6. Information Architecture

Planned site map:

- `/` — service proposition, primary services, service philosophy/process, example service areas, quote CTA, demo disclosure.
- `/services` — overview of all service categories.
- `/services/[slug]` — useful detail for each service, with symptoms, scope, process, intended audience, FAQ, and CTA.
- `/about` — fictional concept/team framing and service approach; no invented founder history or operating credentials.
- `/service-areas` — one transparent overview of intended example locations; no thin location doorway pages.
- `/contact` — quote/contact options and demo behavior.
- `/privacy` — explain what the demo form does and does not retain or send.

Phase 2 should implement the shared foundation and homepage structure first. Add the remaining routes in later implementation slices only when they have useful, distinct content.

## 7. Service Taxonomy

Use Malaysian English “aircon” naturally in service labels and user-facing copy; use “air-conditioning” in formal supporting copy where it reads better.

1. **Aircon Servicing** — routine inspection and cleaning scope, clearly described without a guaranteed outcome.
2. **Repair & Troubleshooting** — symptom-led explanation; no diagnosis or repair promise before inspection.
3. **New Installation** — explain that suitability and quotation depend on site requirements; do not invent package prices.
4. **Chemical Cleaning / Chemical Wash** — explain the service purpose and that suitability depends on the unit’s condition; avoid medical or guaranteed-performance claims.

Each detail page should answer: what it is, common reasons to enquire, what the visit may cover, what affects the final scope, who it is for, a short FAQ, and the next contact step.

## 8. Quote Form Strategy

Minimum useful fields: **phone number** and **service type** required; **name** and **message** optional. Do not require email, property type, a full address, photos, or sensitive data at the initial enquiry stage. If the eventual service cannot respond by phone, revisit the required contact field before launch.

Planned interaction: idle → client-side invalid feedback → submitting → server validation/normalization → recoverable error or demo success. Use a visible error summary, field-level messages, focus the summary after invalid submission, preserve user input on recoverable failure, and use an `aria-live` status for progress/result.

Demo mode may validate a request and return a success-shaped demonstration response, but it must state that no real request was sent, retain no submitted PII, log no PII, and put no PII in URL parameters. The future endpoint should enforce accepted content type, request-size limits, same-origin/origin policy where applicable, server-side validation, safe error messages, and low-cost honeypot/timing controls. Add CAPTCHA/Turnstile only if observed abuse justifies the friction.

## 9. WhatsApp Strategy

Do not invent a phone number or hard-code a personal one. Resolve the destination from explicit deployment configuration and only expose it as a public contact value when the owner intentionally supplies a real business number. Build `wa.me` URLs with encoded, minimal prefilled text; do not include the visitor’s form content or phone number. If no destination is configured, show no dead/disabled WhatsApp button and do not route to a placeholder number.

## 10. Truthfulness and Demo Boundaries

The concept image is the visual north star, not factual source material. Exclude its fictional star ratings, testimonials/customer identities, years in business, phone/email, exact business hours, response-time claims, guarantees, and any similar proof. Do not add certifications, awards, partnerships, service counts, real addresses, or “verified” badges.

Replace the testimonial band with a **What to expect** or **How an enquiry works** section that explains the contact process. Label the site as a fictional portfolio demo and state beside the form that demo submissions are not delivered to a service provider. Do not imply that example locations are actual coverage. Do not activate email, CRM, WhatsApp, or persistence.

## 11. Local SEO Plan

- Provide unique page titles/descriptions, canonical metadata only once a canonical demo origin is intentionally chosen, Open Graph metadata, `robots.txt`, and a sitemap for useful public pages.
- Use one useful service-area overview and service pages with genuinely distinct content; no mass-generated city pages or keyword stuffing.
- Keep the portfolio demo `noindex` while it represents a fictional, non-operating business. Revisit indexing only if the work is clearly hosted as a portfolio case study and cannot be mistaken for a real provider.
- Omit `LocalBusiness`/`HVACBusiness` structured data and fake address, phone, hours, ratings, or opening status. Do not add business schema until a real operator supplies verified details and the site represents that operator.
- Do not claim Google Business Profile ownership, review verification, or local rankings.

## 12. Accessibility Baseline

- Semantic header/nav/main/footer landmarks, one descriptive `h1`, and a logical heading sequence.
- Skip link, keyboard-operable navigation, visible focus states, touch-sized targets (aim for 44 × 44 CSS px), and no hover-only interaction.
- Mobile navigation must expose state, support Escape when implemented as a dismissible panel, keep focus predictable, and restore focus to its trigger on close.
- Explicit form labels, instructions, `aria-invalid`/described errors as needed, error summary, focus management, and announced submitting/success/error states.
- Meet WCAG AA contrast targets for text and controls; verify actual combinations during implementation rather than relying on token names.
- Accurate alt text for informative service photography; empty alt for decorative imagery. Do not describe a stock/demo technician as an Apex employee.
- Reduced-motion behavior; native details/summary or a fully keyboard-accessible disclosure for FAQs.
- Do not claim certification or conformance until a real audit supports that claim.

## 13. Responsive Strategy

Mobile is the primary contact surface. At 375 px, stack hero copy and image with quote action visible early; show service cards as a simple vertical list or compact two-column grid only when text remains readable. At 768 px, transition to two-column sections where useful. At 1024 px and 1440 px, progressively restore the photo-led asymmetry and multi-column service layout from the reference.

Validate at **375, 768, 1024, and 1440 px**: no horizontal overflow/clipping, readable text, stable image crop, keyboard-visible mobile nav, unblocked CTA, and form controls that remain usable at touch size. The reference’s split information-panel desktop composition should collapse into a clear single-column reading order rather than be shrunk mechanically.

## 14. Performance Strategy

Use server-rendered/static content by default, small purposeful client boundaries for navigation/form behavior, responsive AVIF/WebP service photography, intrinsic dimensions, lazy loading below the fold, and priority only for the hero image. Keep third-party scripts, client hydration, fonts, and animation minimal. Prefer local/self-hosted licensed font assets or a system-font fallback over a blocking remote font dependency. No video background, heavy map embed, UI framework, or animation framework is justified in Phase 2.

## 15. Proposed Technical Architecture

- Next.js App Router + TypeScript + Tailwind CSS; use Server Components by default.
- Node/npm are available locally; the official Next.js documentation currently labels App Router documentation latest version `16.3.7`. Select and lock compatible stable package versions when Phase 2 begins instead of freezing versions in this planning phase.
- Small client components only for mobile navigation and the quote form’s submission state; no database, auth, CMS, payments, Redux, or external lead delivery.
- Start with the homepage and shared shell, then add service routes when their content is ready.

## 16. Content Architecture

Keep typed content centralized in a small module, grouped by `site`, `navigation`, `services`, `serviceAreas`, `demo/contact`, `process/FAQ`, and per-page SEO metadata. Store no real contact value in source. Validate any environment-provided contact destination at the configuration boundary. Avoid a CMS and avoid prematurely abstracting page sections into a large component system.

## 17. Apex AirCare Design System Proposal

### Visual reading of the approved image

The image places oversized, dark headline and short supporting copy over a bright service-photo hero; a working technician anchors the right half while the copy occupies the left. Below that, image-led service cards sit on pale cool surfaces. A deep navy service-area band carries a geographic visual; the lower contact area gives the quote form strong visual priority. Blue CTA buttons are distinct from quiet outline/text actions. The overall rhythm alternates broad image sections with tighter information blocks.

Preserve this hierarchy, navy/blue/white balance, technician image placement, contrast between the pale service grid and dark area panel, and strong quote path. Improve mobile reading order and accessibility. Do not duplicate the image’s exact two-column page proportions, map artwork, wording, or fabricated social-proof content.

### Tokens and layout

| Role | Proposed value | Use |
|---|---|---|
| Canvas | `#F5F8FC` | Cool, light page background |
| Surface | `#FFFFFF` | Content and form surfaces |
| Ink | `#102238` | Headings and body text |
| Muted | `#50647A` | Supporting text; recheck contrast by size |
| Primary Navy | `#082846` | Header accents and dark service-area band |
| Service Blue | `#0759B8` | Primary actions and key links; white text |
| Light Accent | `#DCEEFF` | Low-emphasis blue fills and focus backdrop |
| Border | `#D8E2ED` | Inputs, dividers, restrained card edges |
| Success | `#087443` | Form success state |
| Error | `#B42318` | Form error state |

Values are an initial design proposal; verify all text/control contrast in implementation and adjust if needed. Keep blue as the principal accent; reserve green/red for status semantics.

- **Type:** professional, highly readable sans. Use a self-hostable/open-licensed family such as DM Sans for headings/body if its assets and license are confirmed in Phase 2; otherwise use a system sans stack. Strong 700–750 hero weight, body 16–18 px, minimum practical captions 14 px, line-height 1.5–1.65.
- **Spacing:** 4 px base with 8, 12, 16, 24, 32, 48, 64, 80 px steps.
- **Grid:** centered max width 1240 px; gutters 20 px on small screens, 32 px from tablet up; editorial/service content uses 12-column desktop grid and collapses to one column on mobile.
- **Section rhythm:** 64–80 px desktop, 48–56 px tablet, 40–48 px mobile; tighter intervals for related content.
- **Radii:** 4 px controls/labels, 8 px cards/media, 12 px hero/form grouping; pills only for small labels, not every surface.
- **Borders/elevation:** 1 px cool-gray hairlines; one subtle card shadow tier for image/service cards; flat sections by default. Avoid a floating card for every item.
- **Buttons:** filled blue primary “Request a Quote”; white/outline secondary; WhatsApp green only when configured; underlined or arrowed text links for service details. Hover/focus/pressed/disabled states must be visible.
- **Icons:** one consistent, lightweight inline SVG set with aligned stroke weights; decorative icons hidden from assistive tech, icon-only controls receive accessible names.
- **Photography:** hero uses one high-resolution technician servicing a wall-mounted unit, with text over a calm light portion and subject unobscured. Service cards use distinct real/licensed images; team/about image remains demo/stock-disclosed and must not be represented as a real Apex employee. Use responsive focal positions and avoid embedding text in images.
- **Alt text:** describe the visible service/action only when informative; empty alt for atmosphere/decor. Never claim identity, certification, or job outcome from a photograph.
- **Motion:** 140–220 ms ease-out for control feedback; no scroll choreography or autoplay. Support `prefers-reduced-motion`; use CSS/native behavior only.

## 18. Bencho Decision Matrix

| Interaction | Potential location | User benefit | Accessibility impact | Performance impact | Decision / reason |
|---|---|---|---|---|---|
| Magnetic/animated service selection | Quote service type | Could add visual delight | Custom select risks keyboard/screen-reader regressions | Extra JS | **REJECT**; native labeled `<select>` is clearer. |
| Tactile CTA press feedback | Primary/secondary buttons | Confirms activation | Safe when also visible to keyboard users | Negligible CSS | **USE** the idea only; implement with CSS `:active`/focus states, no Bencho code/runtime. |
| Before/after image slider | Service detail | Compare cleaning result | Requires a keyboard-operable range control and meaningful captions | Low-to-moderate JS/image cost | **DEFER** until authentic, licensed paired images and a real explanatory need exist. |
| Mobile service carousel | Service overview | Reduce initial scroll length | Swipe-only controls can hide items | JS and state cost | **REJECT**; a normal list/grid keeps all services discoverable. |
| Contact confirmation toast | Quote form | Confirms demo state | Must be announced and not disappear too quickly | Low JS | **DEFER**; use inline, persistent form status instead. |
| Photo upload dropzone | Quote form | Could show equipment context | Adds keyboard, file validation, privacy, and assistive-technology burden | Upload/security cost | **REJECT**; no photo requirement or real recipient exists. |

## 19. Galaxy, GSAP, and Impeccable

- **Galaxy:** REJECT for Phase 1 and Phase 2 foundation. Its large community UI library is not needed; recognizable gimmick components would pull away from the approved service-business visual language.
- **GSAP:** REJECT runtime dependency. CSS transitions and native disclosure/form behavior cover the justified interactions; no complex sequence materially improves the quote task.
- **Impeccable:** OPTIONAL for a later design critique/detection pass after there is a rendered page. Public project documentation indicates a critique/audit skill and deterministic detector, but it is not available in the current surfaced skill inventory and must not be described as installed or executed. Reassess then; do not add hooks/global config in this phase.

## 20. Product Design / UI UX Pro Max / Taste / Impeccable Status

- Product Design: **AVAILABLE; used for planning** of funnel, friction, and IA only.
- Taste: **AVAILABLE; selected as advisory** visual-discipline guidance.
- UI UX Pro Max: **UNVERIFIED** in this session’s skill inventory; no use claimed.
- Impeccable: **OPTIONAL, not locally observed, not used**; consider only after a real implementation exists.

## 21. Risks and Open Questions

No owner decision blocks Phase 2. The eventual WhatsApp destination, operating coverage, real business details, and whether any real enquiry is delivered remain intentionally unset because this is a fictional demo. If the project later becomes a real service-business site, those facts and privacy/lead-handling behavior must be supplied and reviewed before enabling contact delivery or indexing.

## 22. Exact Recommended Phase 2 Scope

After owner review, implement only:

1. Next.js App Router + TypeScript + Tailwind foundation with locked stable versions, global font/tokens, and metadata base.
2. Small typed content/config module for navigation, four services, example service-area names, demo disclosure, and metadata.
3. Shared semantic header/footer, container/section primitives, and the four button/link treatments.
4. Responsive homepage structural foundation with reference-aligned photo-led hero, service overview, truthful “What to expect” band, dark service-area panel, and quote-form section.
5. Accessible mobile navigation, reduced-motion baseline, responsive-image handling, and demo-safe quote submission that validates and discards data without external delivery.
6. Basic SEO files with demo `noindex`; no LocalBusiness schema and no mass location pages.

Do not implement the complete service-detail/about/contact route set in this slice, add external CRM/email/WhatsApp delivery, or deploy. Add tests only if the owner requests testing in that phase.

## 23. Files, Dependencies, and Validation

- **Files created:** `docs/phase-1-planning.md`.
- **Files changed:** none pre-existing.
- **Dependencies added:** none.
- **Validation performed:** inspected the attached reference image directly; read the provided project brief; checked the local directory and Git state; verified public GitHub repository is empty; checked Git/Node/npm availability and versions; inspected current session skill metadata and selected skill guidance; reviewed official Next.js documentation and the public design-resource pages listed below.
- **Not performed:** no app build, test, accessibility scan, runtime, deployment, install, image sourcing, commit, or push. No application exists yet.

## 24. Git Status and Recommendation

Git is initialized on `main`, `origin` is configured to the supplied public repository, and no remote refs were listed. The planning document is untracked; there are no commits. Keep this as the review checkpoint. Commit/push only after the owner accepts the Phase 1 plan and a meaningful repository state is ready.

**Recommendation:** preserve the concept’s strong, photo-led local-service composition, replace invented proof with a transparent process explanation, and implement the homepage foundation in a separate owner-approved Phase 2.

## References Checked

- [Next.js App Router documentation](https://nextjs.org/docs/app)
- [VoltAgent awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
- [Bencho interactive UI blocks](https://bencho.dev/)
- [Uiverse Galaxy repository](https://github.com/uiverse-io/galaxy)
- [Impeccable repository](https://github.com/pbakaus/impeccable)
- [Apex AirCare public repository](https://github.com/TDY0225/apex-aircare)

## Stop Gate

READY FOR PHASE 2: YES
