# CE 1201 · Engineering Mechanics

A complete, fast-loading, mobile-friendly study website built from the supplied KUET BECM course notes, lecture slides, regular question banks, backlog question and the Faires/Chambers solution reference.

**Credit: Made by K.I.Rohan.**

## What is included

- Homepage with course map and study workflow
- Part A Class Note — 4 sets
- Part B Class Note — 4 sets
- Regular Question Bank Analysis with priority ranking
- Formula book with correct superscripts/subscripts and conditions
- Theory + Proof / Derivation bank
- Complete high-frequency Question Bank Solution bank with sketches and Bangla explanations
- Dedicated Backlog 2023 preparation section
- Light / Dark mode
- Global search (press `/`)
- Focus mode
- Responsive web + mobile UI
- Subtle reveal/hover animations
- Downloadable master PDF and supplied question-paper PDFs
- Print-optimized pages (`Print → Save as PDF`)

## Set convention

A paper has four full questions in each part; one full-topic question is treated as one **set**. The course owner specified **2020 as an exception**, so it is not forced into the normal pattern.

The website uses the current set taxonomy even where historical papers printed a topic under a different Section A/B label.

## Run locally

No npm install or build is required.

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Publish on GitHub Pages

1. Create a GitHub repository and upload these files to the repository root.
2. Push to the `main` branch.
3. Open **Settings → Pages → Source → GitHub Actions**.
4. The included `.github/workflows/pages.yml` deploys the static website.

You can also use Pages **Deploy from a branch** and select `/ (root)` because the site is static.

## Source policy

Course statements, year-tags and worked examples are derived from the supplied materials. Where the website adds a verified arithmetic calculation, it is labeled in the content source text. Ambiguous or missing 2020 paper details are not invented.

## Repository structure

```text
.
├── index.html
├── assets/
│   ├── css/styles.css
│   └── js/
│       ├── data.js
│       └── app.js
├── downloads/
│   ├── CE1201_Master_Study_Guide.pdf
│   └── question-papers/
├── .github/workflows/pages.yml
├── manifest.webmanifest
└── README.md
```
