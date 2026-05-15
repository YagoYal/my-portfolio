window.Components = window.Components || {};

window.Components.projects = {
  _illustrations: {
    server: `
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="220" fill="#080808"/>
        <rect x="110" y="18" width="180" height="184" fill="#0d0d0d" stroke="#1a1a1a" stroke-width="1"/>
        <rect x="118" y="26" width="164" height="13" fill="#111" stroke="#222" stroke-width=".5"/>
        <rect x="118" y="44" width="164" height="13" fill="#0d0d0d" stroke="#1a1a1a" stroke-width=".5"/>
        <rect x="118" y="62" width="164" height="13" fill="#111" stroke="#222" stroke-width=".5"/>
        <rect x="118" y="80" width="164" height="13" fill="#0d0d0d" stroke="#7c6aff" stroke-width=".4" opacity=".6"/>
        <rect x="118" y="98" width="164" height="13" fill="#0d0d0d" stroke="#1a1a1a" stroke-width=".5"/>
        <rect x="118" y="116" width="164" height="13" fill="#111" stroke="#222" stroke-width=".5"/>
        <rect x="118" y="134" width="164" height="13" fill="#0d0d0d" stroke="#7c6aff" stroke-width=".4" opacity=".4"/>
        <circle cx="126" cy="32" r="2.5" fill="#00e676" opacity=".8"/>
        <circle cx="133" cy="32" r="2.5" fill="#ffb300" opacity=".7"/>
        <circle cx="126" cy="50" r="2.5" fill="#7c6aff" opacity=".8"/>
        <circle cx="126" cy="68" r="2.5" fill="#00e676" opacity=".6"/>
        <path d="M290 75 Q345 75 345 110 Q345 148 290 148" stroke="#7c6aff" stroke-width="2.5" fill="none" opacity=".4"/>
        <path d="M290 88 Q333 88 333 118 Q333 145 290 145" stroke="#00e5ff" stroke-width="1.5" fill="none" opacity=".25"/>
        <circle cx="290" cy="75" r="3" fill="#7c6aff" opacity=".7"/>
        <circle cx="290" cy="148" r="3" fill="#00e5ff" opacity=".5"/>
      </svg>`,

    network: `
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="220" fill="#080808"/>
        <line x1="200" y1="110" x2="120" y2="60" stroke="#2a2a2a" stroke-width="1"/>
        <line x1="200" y1="110" x2="280" y2="60" stroke="#2a2a2a" stroke-width="1"/>
        <line x1="200" y1="110" x2="95"  y2="140" stroke="#2a2a2a" stroke-width="1"/>
        <line x1="200" y1="110" x2="305" y2="140" stroke="#2a2a2a" stroke-width="1"/>
        <line x1="200" y1="110" x2="180" y2="180" stroke="#2a2a2a" stroke-width="1"/>
        <line x1="200" y1="110" x2="230" y2="180" stroke="#2a2a2a" stroke-width="1"/>
        <line x1="120" y1="60"  x2="68"  y2="32"  stroke="#1a1a1a" stroke-width="1"/>
        <line x1="280" y1="60"  x2="335" y2="32"  stroke="#1a1a1a" stroke-width="1"/>
        <line x1="95"  y1="140" x2="48"  y2="168" stroke="#1a1a1a" stroke-width="1"/>
        <line x1="305" y1="140" x2="355" y2="168" stroke="#1a1a1a" stroke-width="1"/>
        <circle cx="200" cy="110" r="10" fill="#080808" stroke="#7c6aff" stroke-width="1.5"/>
        <circle cx="200" cy="110" r="5"  fill="#7c6aff" opacity=".8"/>
        <circle cx="120" cy="60"  r="7"  fill="#080808" stroke="#333" stroke-width="1"/>
        <circle cx="120" cy="60"  r="3"  fill="#7c6aff" opacity=".5"/>
        <circle cx="280" cy="60"  r="7"  fill="#080808" stroke="#333" stroke-width="1"/>
        <circle cx="280" cy="60"  r="3"  fill="#7c6aff" opacity=".5"/>
        <circle cx="95"  cy="140" r="7"  fill="#080808" stroke="#333" stroke-width="1"/>
        <circle cx="95"  cy="140" r="3"  fill="#00e5ff" opacity=".4"/>
        <circle cx="305" cy="140" r="7"  fill="#080808" stroke="#333" stroke-width="1"/>
        <circle cx="305" cy="140" r="3"  fill="#00e5ff" opacity=".4"/>
      </svg>`,

    leaf: `
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="220" fill="#080808"/>
        <circle cx="200" cy="100" r="70" fill="none" stroke="#0e1a0e" stroke-width="40" opacity=".8"/>
        <circle cx="200" cy="100" r="50" fill="none" stroke="#122012" stroke-width="20" opacity=".6"/>
        <path d="M200 170 C200 170 140 140 130 90 C120 40 200 20 200 20 C200 20 280 40 270 90 C260 140 200 170 200 170Z" fill="#0a160a" stroke="#1a3a1a" stroke-width="1"/>
        <path d="M200 170 C200 170 140 140 130 90 C120 40 200 20 200 20 C200 20 280 40 270 90 C260 140 200 170 200 170Z" fill="none" stroke="#00e676" stroke-width=".8" opacity=".4"/>
        <line x1="200" y1="170" x2="200" y2="30" stroke="#00e676" stroke-width=".8" opacity=".3"/>
        <line x1="200" y1="110" x2="155" y2="75"  stroke="#00e676" stroke-width=".6" opacity=".2"/>
        <line x1="200" y1="110" x2="245" y2="75"  stroke="#00e676" stroke-width=".6" opacity=".2"/>
        <line x1="200" y1="130" x2="162" y2="103" stroke="#00e676" stroke-width=".6" opacity=".2"/>
        <line x1="200" y1="130" x2="238" y2="103" stroke="#00e676" stroke-width=".6" opacity=".2"/>
        <circle cx="200" cy="100" r="4" fill="#00e676" opacity=".7"/>
        <circle cx="200" cy="100" r="8" fill="none" stroke="#00e676" stroke-width="1" opacity=".3"/>
        <rect x="60"  y="160" width="40" height="8" rx="2" fill="#111" stroke="#1a3a1a" stroke-width=".5"/>
        <rect x="108" y="155" width="40" height="13" rx="2" fill="#0d0d0d" stroke="#1a3a1a" stroke-width=".5"/>
        <rect x="156" y="162" width="40" height="6" rx="2" fill="#111" stroke="#00e676" stroke-width=".4" opacity=".5"/>
        <rect x="204" y="158" width="40" height="10" rx="2" fill="#0d0d0d" stroke="#1a3a1a" stroke-width=".5"/>
        <rect x="252" y="153" width="40" height="15" rx="2" fill="#111" stroke="#1a3a1a" stroke-width=".5"/>
        <rect x="300" y="160" width="40" height="8" rx="2" fill="#0d0d0d" stroke="#00e676" stroke-width=".4" opacity=".4"/>
      </svg>`,
  },

  _renderCard({ badge, date, title, description, type, projectUrl, codeUrl }, delay) {
    return `
      <div class="w-card rv ${delay}">
        <div class="w-card-vis">
          ${this._illustrations[type] || this._illustrations.server}
          <div class="w-card-overlay"></div>
          <span class="w-card-tag">${badge}</span>
          <div class="w-card-preview">↗ View project</div>
        </div>
        <div class="w-card-body">
          <p class="w-card-year">// ${date}</p>
          <h3 class="w-card-title">${title}</h3>
          <p class="w-card-desc">${description}</p>
          <div class="w-card-links">
            <a href="${projectUrl}" target="_blank" rel="noopener noreferrer" class="w-link">↗ Deploy</a>
            <a href="${codeUrl}"    target="_blank" rel="noopener noreferrer" class="w-link">⌥ Source</a>
          </div>
        </div>
      </div>`;
  },

  render() {
    const delays = ['d1', 'd2', 'd3'];
    const cards  = window.Data.projects
      .map((p, i) => this._renderCard(p, delays[i] || ''))
      .join('');

    return `
      <section id="work">
        <div class="work-header rv">
          <div>
            <div class="s-num">02 — Work</div>
            <h2 class="s-title">Deployed assets</h2>
          </div>
          <span class="work-count rv d2">${String(window.Data.projects.length).padStart(4,'0')} projects</span>
        </div>
        <div class="drag-wrap" id="drag">
          ${cards}
          <div class="w-placeholder rv d3"><span>+ incoming</span></div>
        </div>
      </section>`;
  },
};
