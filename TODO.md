# Grazeen Studios website - decisions and TODO

## Decisions (2026-10-19)
- Own repo (`Disko-Website`), separate from the Disko monorepo. No subfolder in Disko.
- Hosting: GitHub Pages, free `*.github.io` address. No custom domain for now.
- Languages: English + Turkish. English first, Turkish alongside at launch.
- Call to action: "Request a demo" only. No pricing.
- Request a demo goes straight to the owner's personal mailbox.
- Logo: none yet. Try AI options first, then a professional designer.
- Static site only. Kept apart from the Disko Server and Drone stack.
- Screenshots and demo clip come from the simulation stack, not hardware.
- Repo: `GrazeenStudios/Disko-Website`, public, in the existing GrazeenStudios organisation.
- Address: rename repo to `GrazeenStudios.github.io` so the site is `grazeenstudios.github.io`.
- Framework: Astro, static output, deployed to Pages by GitHub Actions on push to main.
- Demo form: a free form-relay service (Formspree or Web3Forms) that emails the owner. The address lives in the service, never in the repo.
- Look until the logo exists: match the Disko dashboard (dark UI, same type), company name as plain text.

## Page plan
1. Hero: one sentence on Disko, looping demo clip, "Request a demo" button
2. Product: 3-4 capabilities with dashboard screenshots
3. How it works: drone -> server -> dashboard diagram
4. About Grazeen Studios
5. Contact: demo request, plus press/investor contact
6. Later: downloadable one-pager or deck behind an email form

## Logo (owner task)
- Try first: Recraft (vector/SVG output), Ideogram (good with text in logos), Looka (quick brand kit)
- Ask for 3-5 directions, pick one, then hand it to a designer to refine
- Need back from the logo: SVG, light and dark versions, favicon

## Done (2026-10-19)
- [x] Repo renamed to `GrazeenStudios/GrazeenStudios.github.io` (still private)
- [x] Astro site scaffolded: English at `/`, Turkish at `/tr/`, language switch, sitemap, hreflang
- [x] Pages deploy workflow (`.github/workflows/deploy.yml`), reads the form endpoint from the repo variable `FORM_ENDPOINT`

## Open questions
- [ ] Make the repo public (free Pages needs it), then in Settings > Pages set Source to GitHub Actions
- [ ] Sign up at the form service (Formspree or Web3Forms) with the mailbox that should get requests; add the endpoint URL as repo variable `FORM_ENDPOINT` (not committed)
- [ ] Until `FORM_ENDPOINT` is set the contact section shows "form not connected yet"
- [ ] Owner to check the "Working" / "In development" chips on the four product cards match reality
- [ ] Owner to read the Turkish copy (machine-written first draft)

## Before launch
- [ ] Claims reviewed (nothing we cannot demonstrate)
- [ ] English copy approved, then Turkish copy
- [ ] Privacy note for the demo form
- [ ] Tested on phone, light and dark
