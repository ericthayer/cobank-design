export function initMobileNavigation(toggle, dialog) {
  const viewport = matchMedia('(max-width: 900px)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const page = document.documentElement;
  let transition;
  let requestedOpen = false;

  function setOpen(open) {
    const show = open && viewport.matches;
    if (show && !dialog.open) dialog.showModal();
    if (!show && dialog.open) dialog.close();
    toggle.setAttribute('aria-expanded', String(show));
    if (!show && viewport.matches) toggle.focus({ preventScroll: true });
  }

  function changeMenu(open, animate = true) {
    requestedOpen = open;
    transition?.skipTransition();

    if (!animate || reducedMotion.matches || !document.startViewTransition) {
      delete page.dataset.menuTransition;
      setOpen(open);
      return Promise.resolve();
    }

    const bounds = toggle.getBoundingClientRect();
    const x = bounds.left + bounds.width / 2;
    const y = bounds.top + bounds.height / 2;
    const radius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );
    page.style.setProperty('--menu-origin', `${x}px ${y}px`);
    page.style.setProperty('--menu-radius', `${Math.ceil(radius)}px`);
    page.dataset.menuTransition = open ? 'opening' : 'closing';

    const current = document.startViewTransition(() => {
      if (requestedOpen === open) setOpen(open);
    });
    transition = current;
    return current.finished.catch(() => {}).finally(() => {
      if (transition !== current) return;
      transition = undefined;
      delete page.dataset.menuTransition;
    });
  }

  toggle.addEventListener('click', () => changeMenu(true));
  dialog.querySelector('[data-menu-close]').addEventListener('click', () => changeMenu(false));
  dialog.addEventListener('cancel', event => {
    event.preventDefault();
    changeMenu(false);
  });

  dialog.addEventListener('click', async event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;

    event.preventDefault();
    await changeMenu(false);
    if (requestedOpen) return;

    if (location.hash !== link.hash) location.hash = link.hash;
    else target.scrollIntoView();
    if (!target.hasAttribute('tabindex')) {
      target.tabIndex = -1;
      target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
    }
    target.focus({ preventScroll: true });
  });

  viewport.addEventListener('change', event => {
    if (!event.matches && requestedOpen) changeMenu(false, false);
  });
}
