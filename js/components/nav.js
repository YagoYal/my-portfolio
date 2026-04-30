window.Components = window.Components || {};

window.Components.nav = {
  _items: [
    { href: '#home',     icon: 'home'      },
    { href: '#about',    icon: 'user'      },
    { href: '#stack',    icon: 'code-2'    },
    { href: '#security', icon: 'shield'    },
    { href: '#projects', icon: 'briefcase' },
    { href: '#contact',  icon: 'mail'      },
  ],

  render() {
    const links = this._items
      .map(
        ({ href, icon }) =>
          `<a href="${href}" class="nav-link p-1">
             <i data-lucide="${icon}" class="w-5 h-5"></i>
           </a>`
      )
      .join('');

    return `
      <div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <nav class="bg-white rounded-2xl shadow-xl border border-slate-100 px-7 py-3 flex items-center gap-7">
          ${links}
        </nav>
      </div>`;
  },

  init() {
    const sections = document.querySelectorAll('section[id]');
    const links    = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          links.forEach((l) => l.classList.remove('active'));
          const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
          if (active) active.classList.add('active');
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => observer.observe(s));
  },
};
