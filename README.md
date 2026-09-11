# Navikarana Labs

Independent research and engineering. Live at https://navikarana.io.

### Local Preview

Plain HTML and CSS with a small Contact-page copy script. No dependencies or build step.

```sh
python3 preview.py
```

Then open http://localhost:8000.

The stylesheet is referenced with a version query string (`styles.css?v=2`) on every page to bust CDN/browser caches; bump the version whenever you change `styles.css`.
