window.Components = window.Components || {};

window.Components.stack = {
  _renderCell({ title, chips }, index) {
    const num = String(index + 1).padStart(3, '0');
    return `
      <div class="st-cell rv d${index + 1}">
        <div class="st-num">— ${num}</div>
        <h3>${title}</h3>
        <div class="chips">
          ${chips.map(c => `<span class="chip">${c}</span>`).join('')}
        </div>
      </div>`;
  },

  render() {
    return `
      <section id="stack">
        <div class="rv">
          <div class="s-num">03 — Stack</div>
          <h2 class="s-title">Tech stack</h2>
        </div>
        <div class="bento-stack">
          ${window.Data.stackCategories.map((cat, i) => this._renderCell(cat, i)).join('')}
        </div>
      </section>`;
  },
};
