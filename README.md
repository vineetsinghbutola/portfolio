# Vineet Singh Butola, portfolio website

A responsive, single-page portfolio built with plain HTML, CSS and JavaScript and hosted on GitHub Pages.

**Live website:** https://vineetsinghbutola.github.io/portfolio/

**Repository:** https://github.com/vineetsinghbutola/portfolio

## Sections and features

- Hero with contour-line artwork of the Doon Valley and Dehradun marked as a survey spot height
- About, Skills, Projects, Education and Contact sections
- Light and dark theme, saved per browser
- Mobile menu, highlighted navigation link for the section in view
- Copy-email button
- Keyboard focus styles, skip link and reduced-motion support
- Self-hosted fonts, no build step and no external dependencies

## Project structure

```
vineet-portfolio/
  index.html          page content
  css/style.css       design tokens, layout, themes
  js/main.js          theme toggle, menu, section highlight, copy email
  assets/
    favicon.svg
    fonts/            Bricolage Grotesque and Source Serif 4 (woff2)
  README.md
  .gitignore
```

## Run it locally

Open `index.html` in a browser, or start a local server from the project folder:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Make it yours

Search `index.html` for the comments that start with `EDIT:`. They mark the text that needs your own details: the about paragraphs, skills, projects, email address and LinkedIn link.

## Deploy

1. Push the project to a public GitHub repository.
2. Open **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose branch **main** and folder **/ (root)**, then save.
4. After a few minutes the site is live at `https://vineetsinghbutola.github.io/portfolio/`.

Fonts are licensed under the SIL Open Font License.
