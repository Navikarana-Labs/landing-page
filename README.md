# Navikarana Labs

Independent research and engineering. Live at https://navikarana.io.

## Local Preview

Plain HTML and CSS with a small Contact-page copy script, no dependencies, and no build step. Serve the repository root:

```sh
python3 -m http.server 8000
```

Visit http://localhost:8000. Pages can also be opened directly: asset paths are relative. Directory links are intended for a static server; when browsing local files, open each directory's `index.html` if your browser shows a directory listing.

## Files

- `index.html`: homepage introducing the lab and its work.
- `projects/index.html`: project publication status and links to existing work.
- `about/index.html`: lab background and relationship to Lokesh.
- `contact/index.html`: contact details for collaborations, projects, and research.
- `contact/copy.js`: copy-link and copy-email buttons with animated confirmation. Requires clipboard support over HTTPS or localhost; links still work without JavaScript.
- `styles.css`: shared styles, variables, responsive layout, and self-hosted font declarations.
- `public/`: supplied light-mode full header logo, standalone logomark, and self-hosted font assets and licenses.
- `public/favicon/`: supplied PNG icons in 16, 32, 64, 192, and 512 pixel sizes, plus `site.webmanifest`.

## Typography

The entire site uses **Geologica**, including headings, navigation, and links. Geologica is a variable font. Synthetic bold and italic are disabled. The supplied SVG logos remain unchanged, as their lettering is part of the image rather than live text.

Geologica's Latin and extended Latin WOFF2 subsets are served locally. Source: [Geologica on Google Fonts](https://fonts.google.com/specimen/Geologica). It uses the SIL Open Font License 1.1, which allows commercial use and self-hosting. Keep `public/geologica-OFL.txt` with the font files when deploying or distributing the site; no visible footer attribution is required. No runtime font requests go to Google. The site's root `LICENSE` is separate and unchanged.

## Manual Maintenance

The site is light-only, regardless of system settings or previously saved theme preferences. The header uses `public/full-logo-lightmode.svg`, the homepage hero uses `public/logomark-lightmode.svg`, and favicon assets live in `public/favicon/`. No theme script or dark-mode assets are required.

Headers and footers are deliberately duplicated across four small HTML files. Apply shared navigation or contact changes to all four. The copyright year is plain HTML: update it annually rather than loading JavaScript just for a date.

To update the active favicons, replace the PNGs in `public/favicon/`. All four pages reference the 16, 32, and 64 pixel browser icons and the 192 pixel Apple touch icon (scaled by the device as needed). The manifest references the 192 and 512 pixel icons, with ordinary browser display and no service worker.

## Deployment

Upload `index.html`, `styles.css`, `projects/`, `about/`, `contact/`, and `public/` to any static host. Use the project root as the publish directory, no build command, and standard `index.html` directory serving. No SPA routing or rewrite rules are needed. Do not publish `.git/` or local configuration files.

Relative asset and navigation paths also support a hosting subdirectory. Canonical and Open Graph URLs target `https://navikarana.io`; update these in each page if the production location changes. No analytics or external font requests are used.
