window.Components = window.Components || {};

window.Components.security = {
  _icons: { 'shield-check': '🛡', 'lock': '🔒', 'layers': '⬡' },

  _renderCell({ icon, title, description }, delay) {
    return `
      <div class="sec-cell rv ${delay}">
        <div class="sec-icon">${this._icons[icon] || '⬡'}</div>
        <h3>${title}</h3>
        <p>${description}</p>
      </div>`;
  },

  render() {
    const delays = ['d1', 'd2', 'd3'];
    return `
      <section id="security">
        <div class="rv">
          <div class="s-num">04 — Trust Protocol</div>
          <h2 class="s-title">Security layer</h2>
        </div>
        <p class="rv d1" style="color:var(--dim);margin-top:20px;max-width:520px;line-height:1.75;font-size:.95rem;">
          Every line of code is built with protection, performance and reliability in mind.
        </p>
        <div class="sec-grid">
          ${window.Data.securityFeatures.map((f, i) => this._renderCell(f, delays[i])).join('')}
        </div>
      </section>`;
  },
};
