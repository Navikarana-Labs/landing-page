if (navigator.clipboard?.writeText) {
  const status = document.querySelector('.copy-status');

  document.querySelectorAll('.copy-button').forEach((button) => {
    button.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><g class="copy-icon"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></g><path class="copy-check" d="m5 12 4 4 10-10"/></svg>';
    button.hidden = false;
    let timer;
    let copying = false;

    button.addEventListener('click', async () => {
      if (copying) return;
      copying = true;
      clearTimeout(timer);
      status.textContent = '';
      button.classList.remove('is-copied');

      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        button.classList.add('is-copied');
        status.textContent = `Copied: ${button.dataset.copy}`;
        timer = setTimeout(() => button.classList.remove('is-copied'), 2000);
      } catch {
        status.textContent = 'Could not copy. Please select and copy the link or email address manually.';
      } finally {
        copying = false;
      }
    });
  });
}
