# Saumya Rishikesh — Portfolio

Personal portfolio site built with Astro 5 and Tailwind CSS 4, deployed to GitHub Pages as a fully static site. All content — projects, experience, skills, bio — lives in a single TypeScript data file with no CMS or database.

## Quickstart

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # preview the build locally
```

No environment variables required.

## Project structure

```
src/
  data/site.ts          # all content — edit here to update the site
  pages/index.astro     # single page
  layouts/Base.astro    # HTML shell
  components/
    ProjectCard.astro
  styles/global.css
public/
  resume.pdf
  favicon.svg
  robots.txt
```
