(() => {
  const root = document.documentElement;
  let preference;
  let button;

  try {
    const saved = localStorage.getItem('navikarana-theme');
    if (saved === 'light' || saved === 'dark') preference = saved;
  } catch {
    // Theme switching still works when browser storage is unavailable.
  }

  function applyTheme() {
    const theme = preference || 'light';
    root.dataset.theme = theme;
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.setAttribute('href', favicon.dataset[theme]);
    document.querySelector('meta[name="theme-color"]').content =
      theme === 'dark' ? '#191919' : '#faf9f6';
    if (button) {
      const next = theme === 'dark' ? 'light' : 'dark';
      button.textContent = next === 'dark' ? 'Dark' : 'Light';
      button.setAttribute('aria-label', `Switch to ${next} mode`);
    }
  }

  // Run in the head so a saved theme is applied before the page is painted.
  applyTheme();

  document.addEventListener('DOMContentLoaded', () => {
    button = document.querySelector('.theme-toggle');
    applyTheme();
    button.hidden = false;
    button.addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('navikarana-theme', preference);
      } catch {
        // Keep the selected theme for this page even without persistence.
      }
      applyTheme();
    });
  });
})();
