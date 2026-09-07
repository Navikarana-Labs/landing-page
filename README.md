# Navikarana Labs

Independent research and engineering. Live at https://navikarana.io.

## Local Preview

Plain HTML and CSS, with no JavaScript, dependencies, or build step. Serve the repository root:

```sh
python3 -m http.server 8000
```

Visit http://localhost:8000. Pages can also be opened directly: asset paths are relative. Directory links are intended for a static server; when browsing local files, open each directory's `index.html` if your browser shows a directory listing.

## Files

- `index.html`: homepage, editable hero copy, and latest update.
- `work/index.html`: public project index, intentionally sparse for now.
- `updates/index.html`: chronological lab updates, newest first.
- `about/index.html`: lab background and relationship to Lokesh.
- `styles.css`: shared styles, variables, responsive layout, and self-hosted font declarations.
- `public/`: supplied light-mode full header logo, standalone logomark, and self-hosted Geologica fonts with their license.
- `public/favicon/`: supplied PNG icons in 16, 32, 64, 192, and 512 pixel sizes, plus `site.webmanifest`.

## Typography

The logo lettering matches **Geologica Regular (400)**, identified by comparing its SVG outlines with the font's glyph geometry. The entire site uses Geologica, including navigation, headings, prose, dates, and labels. Text sizes have been reduced by 10% from the initial Geologica layout; logo sizes and layout spacing are unchanged. The retained original SVG logos remain unchanged.

The variable WOFF2 files cover weights 100 through 900 and are served locally. Latin and extended Latin subsets preserve the accented characters in Navikarana's name. The font is distributed under the SIL Open Font License in `public/geologica-OFL.txt`. Source: [Geologica](https://github.com/googlefonts/geologica), with webfont subsets from [Google Fonts](https://fonts.google.com/specimen/Geologica). No runtime font requests go to Google. The former Geist files and monospace font overrides have been removed.

## Manual Maintenance

The site is light-only, regardless of system settings or previously saved theme preferences. The header uses `public/full-logo-lightmode.svg`, the homepage hero uses `public/logomark-lightmode.svg`, and favicon assets live in `public/favicon/`. No theme script or dark-mode assets are required.

Headers and footers are deliberately duplicated across four small HTML files. Apply shared navigation or contact changes to all four. The copyright year is plain HTML: update it annually rather than loading JavaScript just for a date.

The homepage headline is marked with a comment and is provisional. The first update is dated 6 September 2026; review its wording and date before publishing.

To add an update, duplicate the `li.update-entry` in `updates/index.html` and place it first. Set the machine-readable `datetime` to `YYYY-MM-DD`, edit the visible date and factual text, then copy the newest date/text into the homepage's Latest section. No article pages, tags, or feeds are required.

When a real project is ready, replace the work page's placeholder with an `article.project-entry`. Use `project-meta` for its ID, year, status, and optional field; `project-title` on its heading; ordinary paragraphs for its description; and `project-links` for GitHub, technical notes, or a project website. Do not publish placeholder projects.

To update the active favicons, replace the PNGs in `public/favicon/`. All four pages reference the 16, 32, and 64 pixel browser icons and the 192 pixel Apple touch icon (scaled by the device as needed). The manifest references the 192 and 512 pixel icons, with ordinary browser display and no service worker.

## Deployment

Upload `index.html`, `styles.css`, `work/`, `updates/`, `about/`, and `public/` to any static host. Use the project root as the publish directory, no build command, and standard `index.html` directory serving. No SPA routing or rewrite rules are needed. Do not publish `.git/` or local configuration files.

Relative asset and navigation paths also support a hosting subdirectory. Canonical and Open Graph URLs target `https://navikarana.io`; update these in each page if the production location changes. No analytics or external font requests are used.
