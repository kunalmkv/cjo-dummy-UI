/* Interactivity: theme toggle, mobile sidebar drawer, marketing mobile menu. */
(function () {
  // Apply saved theme as early as possible
  try {
    const t = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (t === 'dark' || (!t && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}

  function delegate(selector, event, handler) {
    document.addEventListener(event, function (e) {
      const t = e.target.closest(selector);
      if (t) handler(t, e);
    });
  }

  delegate('[data-theme-toggle]', 'click', function () {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch (e) {}
  });

  delegate('[data-open-drawer]', 'click', function () {
    document.getElementById('appSidebar')?.classList.add('open');
    document.querySelector('.sidebar-backdrop')?.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  delegate('[data-close-drawer]', 'click', function () {
    document.getElementById('appSidebar')?.classList.remove('open');
    document.querySelector('.sidebar-backdrop')?.classList.remove('open');
    document.body.style.overflow = '';
  });

  // Auto-close mobile drawer on nav link click
  delegate('.sidebar .nav-link', 'click', function () {
    if (window.innerWidth >= 1024) return;
    document.getElementById('appSidebar')?.classList.remove('open');
    document.querySelector('.sidebar-backdrop')?.classList.remove('open');
    document.body.style.overflow = '';
  });

  delegate('[data-toggle-mobile-menu]', 'click', function () {
    document.getElementById('mobileMenu')?.classList.toggle('open');
  });
})();
