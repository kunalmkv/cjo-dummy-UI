/* Shared shells: renderAppShell({active}), renderMarketingNav(), renderMarketingFooter().
   Inserted into placeholder divs in each page. */
(function (global) {
  const sidebarGroups = [
    {
      label: 'Engage',
      items: [
        { href: 'dashboard.html', label: 'Overview', icon: 'layout-dashboard' },
        { href: 'journeys.html', label: 'Journeys', icon: 'git-branch', badge: { text: '12', tone: 'neutral' } },
        { href: 'campaigns.html', label: 'Campaigns', icon: 'send' },
        { href: 'audience.html', label: 'Audience', icon: 'users' },
        { href: 'analytics.html', label: 'Analytics', icon: 'bar-chart-3' },
      ],
    },
    {
      label: 'Create',
      items: [
        { href: 'landers.html', label: 'Landers', icon: 'globe-2', badge: { text: 'Beta', tone: 'accent' } },
        { href: 'templates.html', label: 'Templates', icon: 'file-text' },
      ],
    },
    {
      label: 'System',
      items: [
        { href: 'integrations.html', label: 'Integrations', icon: 'plug' },
        { href: 'settings.html', label: 'Settings', icon: 'settings' },
      ],
    },
  ];

  function navLink(it, activeFile) {
    const active =
      it.href === activeFile ||
      (it.href === 'journeys.html' && activeFile === 'journey-builder.html') ||
      (it.href === 'landers.html' && (activeFile === 'lander-clone.html' || activeFile === 'lander-editor.html'));
    const badge = it.badge
      ? `<span class="badge badge-${it.badge.tone}">${it.badge.text}</span>`
      : '';
    return `<a href="${it.href}" class="nav-link ${active ? 'active' : ''}">
      ${icon(it.icon, '4')}
      <span class="nav-label">${it.label}</span>
      ${badge}
    </a>`;
  }

  function renderAppShell(active) {
    const activeFile = active || (location.pathname.split('/').pop() || 'dashboard.html');

    const sidebarHTML = `
      <div class="sidebar-backdrop" data-close-drawer></div>
      <aside class="sidebar scroll-thin" id="appSidebar">
        <div class="sidebar-head">
          <button class="workspace-switcher" type="button" aria-label="Workspace">
            <span class="ws-logo">${logoSvg('icon icon-4')}</span>
            <span class="flex-1" style="min-width:0">
              <span class="ws-name truncate" style="display:block">JourneyCraft</span>
              <span class="ws-meta truncate" style="display:block">acme · Pro</span>
            </span>
            ${icon('chevrons-up-down', '3p5')}
          </button>
          <button class="sidebar-close" type="button" data-close-drawer aria-label="Close menu">${icon('x', '4')}</button>
        </div>
        <nav class="sidebar-nav scroll-thin">
          ${sidebarGroups.map(g => `
            <div>
              <div class="nav-group-label">${g.label}</div>
              ${g.items.map(it => navLink(it, activeFile)).join('')}
            </div>
          `).join('')}
        </nav>
        <div class="sidebar-foot">
          <div class="trial-card">
            <div class="trial-card-title">${icon('sparkles', '3p5')} Free trial</div>
            <p class="trial-card-desc">14 days left. Upgrade to unlock unlimited journeys.</p>
            <button class="trial-card-btn">Upgrade</button>
          </div>
          <button class="sidebar-help">${icon('help-circle', '3p5')} Help & docs</button>
        </div>
      </aside>
    `;

    const topbarHTML = `
      <header class="topbar">
        <button class="topbar-menu" type="button" data-open-drawer aria-label="Open menu">
          ${icon('menu', '5')}
        </button>
        <button class="topbar-search" type="button">
          ${icon('search', '4')}
          <span class="topbar-search-fill">Search journeys, people, campaigns…</span>
          <span class="kbd hide-desktop" style="display:none"></span>
          <span class="kbd hide-mobile">${icon('command', '3')} K</span>
        </button>
        <div class="topbar-actions">
          <button class="btn btn-secondary btn-sm">${icon('plus', '4')} Create</button>
          <button class="theme-toggle" data-theme-toggle aria-label="Toggle theme">
            ${icon('moon', '4p5')}
            ${icon('sun', '4p5')}
          </button>
          <button class="topbar-iconbtn" aria-label="Notifications">
            ${icon('bell', '4p5')}
            <span class="dot"></span>
          </button>
          <span class="topbar-divider"></span>
          <button class="topbar-user">
            ${avatarHTML('Tanvir Ahmed', 'sm')}
            <span class="topbar-user-info">
              <span class="topbar-user-name" style="display:block">Tanvir Ahmed</span>
              <span class="topbar-user-role" style="display:block">Owner</span>
            </span>
          </button>
        </div>
      </header>
    `;

    const slot = document.getElementById('app-shell-slot');
    if (slot) {
      slot.outerHTML = `
        <div class="app-shell">
          ${sidebarHTML}
          <div class="app-main">
            ${topbarHTML}
            <main class="page-main">${slot.innerHTML}</main>
          </div>
        </div>
      `;
    }
  }

  function renderMarketingNav() {
    const links = [
      { href: '#journeys', label: 'Journeys' },
      { href: '#landers', label: 'Landers' },
      { href: '#analytics', label: 'Analytics' },
      { href: '#pricing', label: 'Pricing' },
      { href: '#customers', label: 'Customers' },
    ];
    return `
      <header class="m-nav">
        <div class="m-nav-inner">
          <a href="index.html" class="m-logo">
            <span class="m-logo-icon">${logoSvg('icon icon-4')}</span>
            <span class="m-logo-name">JourneyCraft</span>
          </a>
          <nav class="m-nav-links">
            ${links.map(l => `<a href="${l.href}" class="m-nav-link">${l.label}</a>`).join('')}
          </nav>
          <div class="m-nav-cta">
            <button class="theme-toggle" data-theme-toggle aria-label="Toggle theme">
              ${icon('moon', '4')}${icon('sun', '4')}
            </button>
            <a href="dashboard.html" class="btn btn-secondary btn-sm">Open dashboard ${icon('arrow-up-right', '3p5')}</a>
            <a href="dashboard.html" class="btn btn-primary btn-sm">Start free trial</a>
          </div>
          <button class="m-nav-mobile-btn" data-toggle-mobile-menu aria-label="Open menu">
            ${icon('menu', '4')}
          </button>
        </div>
        <div class="m-mobile-menu" id="mobileMenu">
          <div class="m-mobile-menu-inner">
            ${links.map(l => `<a href="${l.href}" class="m-nav-link">${l.label}</a>`).join('')}
            <div style="padding-top:8px;margin-top:8px;border-top:1px solid var(--color-border);display:flex;flex-direction:column;gap:8px">
              <a href="dashboard.html" class="btn btn-secondary btn-sm" style="width:100%">Open dashboard ${icon('arrow-up-right', '3p5')}</a>
              <div style="display:flex;align-items:center;gap:8px">
                <button class="theme-toggle" data-theme-toggle aria-label="Toggle theme">${icon('moon', '4')}${icon('sun', '4')}</button>
                <a href="dashboard.html" class="btn btn-primary btn-sm" style="flex:1">Start free trial</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    `;
  }

  function renderMarketingFooter() {
    const cols = [
      { title: 'Product', links: ['Journeys', 'Campaigns', 'Audience', 'Templates', 'Landers', 'Analytics', 'Integrations'] },
      { title: 'Solutions', links: ['For SaaS', 'For E-commerce', 'For Fintech', 'For Mobile', 'For Media', 'For Agencies'] },
      { title: 'Resources', links: ['Docs', 'API reference', 'Changelog', 'Playbooks', 'Customer stories', 'Webinars'] },
      { title: 'Company', links: ['About', 'Customers', 'Careers', 'Press', 'Security', 'Contact'] },
    ];
    return `
      <footer class="m-footer">
        <div class="m-footer-inner">
          <div class="m-footer-grid">
            <div style="grid-column: span 2 / span 2">
              <a href="index.html" class="m-logo">
                <span class="m-logo-icon">${logoSvg('icon icon-4')}</span>
                <span class="m-logo-name">JourneyCraft</span>
              </a>
              <p class="m-footer-tag">The growth OS for product teams. Journeys, campaigns, landers and analytics — in one calm workspace.</p>
              <div class="m-footer-socials">
                <a href="#" class="m-footer-social">${icon('at-sign', '3p5')}</a>
                <a href="#" class="m-footer-social">${icon('message-circle', '3p5')}</a>
                <a href="#" class="m-footer-social">${icon('globe-2', '3p5')}</a>
              </div>
            </div>
            ${cols.map(c => `
              <div class="m-footer-col">
                <div class="m-footer-col-title">${c.title}</div>
                <ul>${c.links.map(l => `<li><a href="#">${l}</a></li>`).join('')}</ul>
              </div>
            `).join('')}
          </div>
          <div class="m-footer-bottom">
            <div>© 2026 JourneyCraft, Inc. All rights reserved.</div>
            <div class="m-footer-legal">
              <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a><a href="#">DPA</a>
              <span style="display:inline-flex;align-items:center;gap:6px"><span class="dot-color pulse-dot" style="background:var(--color-success-500)"></span>All systems operational</span>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  function renderMarketingShell() {
    const navSlot = document.getElementById('marketing-nav-slot');
    if (navSlot) navSlot.outerHTML = renderMarketingNav();
    const footSlot = document.getElementById('marketing-footer-slot');
    if (footSlot) footSlot.outerHTML = renderMarketingFooter();
  }

  global.renderAppShell = renderAppShell;
  global.renderMarketingShell = renderMarketingShell;
})(window);
