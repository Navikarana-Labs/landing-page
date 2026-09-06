# Navikarana Labs

Independent research and engineering. Live at https://navikarana.io.

## Local Preview

Plain HTML and CSS, with one small vanilla JavaScript file for theme switching. No dependencies or build step. Serve the repository root:

```sh
python3 -m http.server 8000
```

Visit http://localhost:8000. Pages can also be opened directly: asset paths are relative. Directory links are intended for a static server; when browsing local files, open each directory's `index.html` if your browser shows a directory listing.

## Files

- `index.html`: homepage, editable hero copy, and latest update.
- `work/index.html`: public project index, intentionally sparse for now.
- `updates/index.html`: chronological lab updates, newest first.
- `about/index.html`: lab background and relationship to Lokesh.
- `assets/css/main.css`: shared styles, variables, responsive layout, and self-hosted font declarations.
- `assets/js/main.js`: light/dark switch and saved preference, with light mode as the default.
- `assets/images/`: earlier simplified favicon variants, no longer referenced by the site.
- `public/`: supplied full header logos, standalone logomarks, light/dark ICO favicons, and self-hosted Geologica fonts with their license.

## Typography

The logo lettering matches **Geologica Regular (400)**, identified by comparing its SVG outlines with the font's glyph geometry. The entire site uses Geologica, including navigation, headings, prose, dates, labels, and buttons. The original SVG logos remain unchanged.

The variable WOFF2 files cover weights 100 through 900 and are served locally. Latin and extended Latin subsets preserve the accented characters in Navikarana's name. The font is distributed under the SIL Open Font License in `public/geologica-OFL.txt`. Source: [Geologica](https://github.com/googlefonts/geologica), with webfont subsets from [Google Fonts](https://fonts.google.com/specimen/Geologica). No runtime font requests go to Google. The former Geist files and monospace font overrides have been removed.

## Manual Maintenance

The site defaults to light mode until a visitor chooses Dark using the top-right button. The choice is saved in local storage across pages and visits. With JavaScript disabled, the site stays in light mode and the switch is hidden. The supplied full-logo SVGs are used unchanged in the header, and standalone logomarks remain in the homepage hero. The favicon switches between `public/favicon-lightmode.ico` and `public/logomark-darkmode.ico` with the selected theme.

Headers and footers are deliberately duplicated across four small HTML files. Apply shared navigation or contact changes to all four. The copyright year is plain HTML: update it annually rather than loading JavaScript just for a date.

The homepage headline is marked with a comment and is provisional. The first update is dated 6 September 2026; review its wording and date before publishing.

To add an update, duplicate the `li.update-entry` in `updates/index.html` and place it first. Set the machine-readable `datetime` to `YYYY-MM-DD`, edit the visible date and factual text, then copy the newest date/text into the homepage's Latest section. No article pages, tags, or feeds are required.

When a real project is ready, replace the work page's placeholder with an `article.project-entry`. Use `project-meta` for its ID, year, status, and optional field; `project-title` on its heading; ordinary paragraphs for its description; and `project-links` for GitHub, technical notes, or a project website. Do not publish placeholder projects.

To update the active favicons, replace the supplied ICO files in `public/`. The earlier generated variants in `assets/images/` are not used.

## Deployment

Upload `index.html`, `work/`, `updates/`, `about/`, `assets/`, and `public/` to any static host. Use the project root as the publish directory, no build command, and standard `index.html` directory serving. No SPA routing or rewrite rules are needed. Do not publish `.git/` or local configuration files.

Relative asset and navigation paths also support a hosting subdirectory. Canonical and Open Graph URLs target `https://navikarana.io`; update these in each page if the production location changes. No analytics or external font requests are used.
