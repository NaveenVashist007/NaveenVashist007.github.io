# NextGen Infra Website (Phase 1)

## Run locally
1. Install Node.js (LTS) from nodejs.org
2. `npm install`
3. `npm run dev`  -> open http://localhost:4321

## Change business details
Edit `src/config/site.ts` (phone, email, address, WhatsApp, form key, menu).

## Change colours / fonts
Edit the `@theme` block in `src/styles/global.css`.

## Animations
Add `data-reveal` (fade-up on scroll) or `data-parallax="12"` (parallax) to any element.

## Deploy (GitHub Pages)
1. Push to a GitHub repo (branch `main`).
2. Repo > Settings > Pages > Source = "GitHub Actions".
3. Custom domain: set it in Settings > Pages, and change `site` in `astro.config.mjs`
   and the Sitemap line in `public/robots.txt`.

## Next phases
2 Home page · 3 Projects + detail pages · 4 Gallery, contact, enquiry · 5 Listings, SEO, performance

## Add a new project
1. Copy `src/content/samples/project-template.json` to `src/content/projects/your-project.json` and fill it in.
2. Put images in `public/images/` and PDFs in `public/documents/`.
3. For an exact map pin: Google Maps > Share > Embed a map > copy the `src` URL into `googleMapsEmbedUrl`.

## Enquiry form
Create a free key at web3forms.com using the client's email, then paste it into `formAccessKey` in `src/config/site.ts`.
