# Apex AirCare

A fictional local air-conditioning service website concept for Kuala Lumpur and Klang Valley. This portfolio demonstration has no operating service provider, and it does not receive enquiries.

## Run locally

Requirements: Node.js 20.9 or later and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Use `npm run lint`, `npx tsc --noEmit`, and `npm run build` for static checks and a production build.

## Phase 2 scope

- Responsive homepage with a service-led hero, four service cards, a service approach, example areas, an enquiry process, and a contact form preview.
- Shared header/footer, a small inline icon set, centralized service/navigation content, and responsive local photography.
- Page metadata marks this fictional concept `noindex`/`nofollow`. There is no real-business schema or real service-coverage claim.
- The form only displays a local demo confirmation. It does not send or store submitted information. No WhatsApp link appears unless `NEXT_PUBLIC_WHATSAPP_NUMBER` is deliberately configured; no number is included in this repository.

The service names and locations are illustrative copy, not verified business offerings or coverage. All photographs are illustrative stock imagery and do not depict Apex AirCare employees. The dark service-area graphic is a schematic, not a geographic map.

## Image sources

Images are downloaded locally from Pexels so the page does not request image assets from a third party at runtime. Each image is marked as illustrative in its page context or alternative text.

- `hero-indoor-technician.jpg` and the first service card: [Technician Performing Air Conditioning Maintenance by Bulat843](https://www.pexels.com/photo/technician-performing-air-conditioning-maintenance-32588555/).
- `aircon-interior.jpg`: Pexels photo 16592625 by Airam Datoon. The photo is a clean illustrative room air-conditioner image; the source file is available via the [Pexels image endpoint](https://images.pexels.com/photos/16592625/pexels-photo-16592625.jpeg).
- `aircon-cleaning.jpg` and `aircon-servicing.jpg`: [Man Fixing an Air Conditioner by José Andrés Pacheco Cortes](https://www.pexels.com/photo/man-fixing-an-air-conditioner-5463583/) and [Man Repairing an Aircon by José Andrés Pacheco Cortes](https://www.pexels.com/photo/man-repairing-an-aircon-5463580/).

Pexels marks these photos free to use under its [license](https://www.pexels.com/license/). The source-page links are included for attribution and traceability. The site's fictional identity must not be presented as the photographer's, the subjects' or the pictured businesses' endorsement.

## Deliberately out of scope

No service detail routes, backend, database, lead delivery, analytics, third-party scripts, reviews, ratings, operating-hours claims, contact details, credentials, guarantees, or deployment are included in this Phase 2 build.
