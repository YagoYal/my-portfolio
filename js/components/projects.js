window.Components = window.Components || {};

window.Components.projects = {
  _illustrations: {
    server: `
      <svg width="100%" height="100%" viewBox="0 0 640 224" preserveAspectRatio="xMidYMid slice">
        <rect width="640" height="224" fill="#0d1f35"/>
        <rect x="180" y="20" width="280" height="184" rx="4" fill="#0a1826" stroke="#1a3a5c" stroke-width="1"/>
        <rect x="188" y="28"  width="264" height="18" rx="2" fill="#142840" stroke="#1e4a7a" stroke-width="0.5"/>
        <rect x="188" y="50"  width="264" height="18" rx="2" fill="#142840" stroke="#1e4a7a" stroke-width="0.5"/>
        <rect x="188" y="72"  width="264" height="18" rx="2" fill="#1a3560" stroke="#2563eb" stroke-width="0.5"/>
        <rect x="188" y="94"  width="264" height="18" rx="2" fill="#142840" stroke="#1e4a7a" stroke-width="0.5"/>
        <rect x="188" y="116" width="264" height="18" rx="2" fill="#142840" stroke="#1e4a7a" stroke-width="0.5"/>
        <rect x="188" y="138" width="264" height="18" rx="2" fill="#1a3560" stroke="#2563eb" stroke-width="0.5"/>
        <rect x="188" y="160" width="264" height="18" rx="2" fill="#142840" stroke="#1e4a7a" stroke-width="0.5"/>
        <rect x="188" y="182" width="264" height="16" rx="2" fill="#142840" stroke="#1e4a7a" stroke-width="0.5"/>
        <circle cx="200" cy="37"  r="3" fill="#22c55e" opacity="0.9"/>
        <circle cx="210" cy="37"  r="3" fill="#22c55e" opacity="0.7"/>
        <circle cx="200" cy="59"  r="3" fill="#3b82f6" opacity="0.9"/>
        <circle cx="210" cy="59"  r="3" fill="#22c55e" opacity="0.7"/>
        <circle cx="200" cy="81"  r="3" fill="#22c55e" opacity="0.9"/>
        <circle cx="200" cy="103" r="3" fill="#f59e0b" opacity="0.8"/>
        <circle cx="210" cy="103" r="3" fill="#22c55e" opacity="0.7"/>
        <circle cx="200" cy="125" r="3" fill="#3b82f6" opacity="0.9"/>
        <circle cx="200" cy="147" r="3" fill="#22c55e" opacity="0.9"/>
        <circle cx="200" cy="169" r="3" fill="#22c55e" opacity="0.7"/>
        <path d="M460 80  Q520 80  520 120 Q520 160 460 160" stroke="#3b82f6" stroke-width="3" fill="none" opacity="0.5"/>
        <path d="M460 90  Q510 90  510 130 Q510 155 460 155" stroke="#2563eb" stroke-width="2" fill="none" opacity="0.4"/>
        <path d="M460 100 Q500 100 500 140" stroke="#1d4ed8" stroke-width="2.5" fill="none" opacity="0.3"/>
      </svg>`,

    network: `
      <svg width="100%" height="100%" viewBox="0 0 640 224" preserveAspectRatio="xMidYMid slice">
        <rect width="640" height="224" fill="#f0f5ff"/>
        <line x1="320" y1="112" x2="220" y2="60"  stroke="#3b82f6" stroke-width="1.5" opacity="0.5"/>
        <line x1="320" y1="112" x2="420" y2="60"  stroke="#3b82f6" stroke-width="1.5" opacity="0.5"/>
        <line x1="320" y1="112" x2="180" y2="140" stroke="#3b82f6" stroke-width="1.5" opacity="0.5"/>
        <line x1="320" y1="112" x2="460" y2="140" stroke="#3b82f6" stroke-width="1.5" opacity="0.5"/>
        <line x1="320" y1="112" x2="300" y2="185" stroke="#3b82f6" stroke-width="1.5" opacity="0.5"/>
        <line x1="320" y1="112" x2="380" y2="185" stroke="#3b82f6" stroke-width="1.5" opacity="0.5"/>
        <line x1="220" y1="60"  x2="140" y2="30"  stroke="#2563eb" stroke-width="1" opacity="0.35"/>
        <line x1="220" y1="60"  x2="160" y2="90"  stroke="#2563eb" stroke-width="1" opacity="0.35"/>
        <line x1="420" y1="60"  x2="500" y2="30"  stroke="#2563eb" stroke-width="1" opacity="0.35"/>
        <line x1="420" y1="60"  x2="490" y2="90"  stroke="#2563eb" stroke-width="1" opacity="0.35"/>
        <line x1="180" y1="140" x2="110" y2="170" stroke="#2563eb" stroke-width="1" opacity="0.35"/>
        <line x1="460" y1="140" x2="530" y2="170" stroke="#2563eb" stroke-width="1" opacity="0.35"/>
        <line x1="300" y1="185" x2="260" y2="215" stroke="#2563eb" stroke-width="1" opacity="0.35"/>
        <line x1="380" y1="185" x2="420" y2="215" stroke="#2563eb" stroke-width="1" opacity="0.35"/>
        <circle cx="320" cy="112" r="14" fill="#fff" stroke="#2563eb" stroke-width="2"/>
        <circle cx="320" cy="112" r="8"  fill="#3b82f6" opacity="0.8"/>
        <circle cx="220" cy="60"  r="10" fill="#fff" stroke="#3b82f6" stroke-width="1.5"/>
        <circle cx="220" cy="60"  r="5"  fill="#60a5fa" opacity="0.7"/>
        <circle cx="420" cy="60"  r="10" fill="#fff" stroke="#3b82f6" stroke-width="1.5"/>
        <circle cx="420" cy="60"  r="5"  fill="#60a5fa" opacity="0.7"/>
        <circle cx="180" cy="140" r="10" fill="#fff" stroke="#3b82f6" stroke-width="1.5"/>
        <circle cx="180" cy="140" r="5"  fill="#60a5fa" opacity="0.7"/>
        <circle cx="460" cy="140" r="10" fill="#fff" stroke="#3b82f6" stroke-width="1.5"/>
        <circle cx="460" cy="140" r="5"  fill="#60a5fa" opacity="0.7"/>
        <circle cx="300" cy="185" r="10" fill="#fff" stroke="#3b82f6" stroke-width="1.5"/>
        <circle cx="300" cy="185" r="5"  fill="#60a5fa" opacity="0.7"/>
        <circle cx="380" cy="185" r="10" fill="#fff" stroke="#3b82f6" stroke-width="1.5"/>
        <circle cx="380" cy="185" r="5"  fill="#60a5fa" opacity="0.7"/>
        <circle cx="140" cy="30"  r="7" fill="#fff" stroke="#93c5fd" stroke-width="1.2"/><circle cx="140" cy="30"  r="3" fill="#93c5fd"/>
        <circle cx="160" cy="90"  r="7" fill="#fff" stroke="#93c5fd" stroke-width="1.2"/><circle cx="160" cy="90"  r="3" fill="#93c5fd"/>
        <circle cx="500" cy="30"  r="7" fill="#fff" stroke="#93c5fd" stroke-width="1.2"/><circle cx="500" cy="30"  r="3" fill="#93c5fd"/>
        <circle cx="490" cy="90"  r="7" fill="#fff" stroke="#93c5fd" stroke-width="1.2"/><circle cx="490" cy="90"  r="3" fill="#93c5fd"/>
        <circle cx="110" cy="170" r="7" fill="#fff" stroke="#93c5fd" stroke-width="1.2"/><circle cx="110" cy="170" r="3" fill="#93c5fd"/>
        <circle cx="530" cy="170" r="7" fill="#fff" stroke="#93c5fd" stroke-width="1.2"/><circle cx="530" cy="170" r="3" fill="#93c5fd"/>
        <circle cx="260" cy="215" r="7" fill="#fff" stroke="#93c5fd" stroke-width="1.2"/><circle cx="260" cy="215" r="3" fill="#93c5fd"/>
        <circle cx="420" cy="215" r="7" fill="#fff" stroke="#93c5fd" stroke-width="1.2"/><circle cx="420" cy="215" r="3" fill="#93c5fd"/>
      </svg>`,
  },

  _renderCard({ badge, date, title, description, type, projectUrl, codeUrl }) {
    const bgColor = type === 'server' ? '#0d1f35' : '#f0f5ff';
    return `
      <div class="bg-white rounded-2xl overflow-hidden shadow-sm">
        <div class="relative h-56 overflow-hidden" style="background:${bgColor};">
          ${this._illustrations[type] || ''}
          <span class="absolute top-4 left-4 bg-white/85 backdrop-blur-sm text-slate-700 text-xs font-mono px-3 py-1.5 rounded-full">
            ${badge}
          </span>
        </div>
        <div class="p-6">
          <p class="text-slate-400 text-sm mb-1">${date}</p>
          <h3 class="text-xl font-bold text-slate-900 mb-3">${title}</h3>
          <p class="text-slate-500 leading-relaxed text-sm mb-6">${description}</p>
          <div class="flex gap-3">
            <a href="${projectUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition">
              <i data-lucide="external-link" class="w-4 h-4"></i> Ver Projeto
            </a>
            <a href="${codeUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition">
              <i data-lucide="github" class="w-4 h-4"></i> Código
            </a>
          </div>
        </div>
      </div>`;
  },

  render() {
    return `
      <section id="projects" class="py-14 md:py-24">
        <div class="max-w-7xl mx-auto px-5 md:px-10">
          <span class="inline-flex items-center gap-2 border border-blue-400 text-blue-600 text-sm px-4 py-1 rounded-full mb-5">
            <span class="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
            Assets Deployados
          </span>
          <h2 class="font-black mb-10 md:mb-14" style="font-size:clamp(2rem,6vw,3rem);color:#0f172a;">Projetos</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${window.Data.projects.map((p) => this._renderCard(p)).join('')}
          </div>
        </div>
      </section>`;
  },
};
