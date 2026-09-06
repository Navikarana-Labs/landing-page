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
- `assets/css/main.css`: shared styles, variables, responsive layout, and self-hosted font declarations.
- `assets/images/favicon.svg`: simplified orange-only version of the logo for browser tabs.
- `assets/images/favicon.ico`: 16, 32, and 48 pixel fallback derived from the SVG.
- `public/`: preserved original logo, original favicon (no longer used), and Geist fonts.

## Manual Maintenance

Headers and footers are deliberately duplicated across four small HTML files. Apply shared navigation or contact changes to all four. The copyright year is plain HTML: update it annually rather than loading JavaScript just for a date.

The homepage headline is marked with a comment and is provisional. The first update is dated 6 September 2026; review its wording and date before publishing.

To add an update, duplicate the `li.update-entry` in `updates/index.html` and place it first. Set the machine-readable `datetime` to `YYYY-MM-DD`, edit the visible date and factual text, then copy the newest date/text into the homepage's Latest section. No article pages, tags, or feeds are required.

When a real project is ready, replace the work page's placeholder with an `article.project-entry`. Use `project-meta` for its ID, year, status, and optional field; `project-title` on its heading; ordinary paragraphs for its description; and `project-links` for GitHub, technical notes, or a project website. Do not publish placeholder projects.

The favicon is independent of the original logo. To regenerate the ICO after changing the SVG, use ImageMagick if installed (this is an optional asset-maintenance command, not a site build step):

```sh
convert -background none assets/images/favicon.svg -define icon:auto-resize=48,32,16 assets/images/favicon.ico
```

## Deployment

Upload `index.html`, `work/`, `updates/`, `about/`, `assets/`, and `public/` to any static host. Use the project root as the publish directory, no build command, and standard `index.html` directory serving. No SPA routing or rewrite rules are needed. Do not publish `.git/` or local configuration files.

Relative asset and navigation paths also support a hosting subdirectory. Canonical and Open Graph URLs target `https://navikarana.io`; update these in each page if the production location changes. No analytics or external font requests are used.
