window.Components = window.Components || {};

window.Components.stack = {
  _renderCategory({ title, chips }, delay) {
    return `
      <div class="reveal card ${delay}">
        <div class="flex items-center gap-3 mb-7">
          <div class="w-1 h-6 rounded-full" style="background:linear-gradient(to bottom,#818cf8,#6366f1);"></div>
          <h3 class="text-lg font-bold" style="color:#f1f5f9;">${title}</h3>
        </div>
        <div class="chip-group flex flex-wrap gap-2">
          ${chips.map((c) => `<span class="chip">${c}</span>`).join('')}
        </div>
      </div>`;
  },

  render() {
    const delays = ['', 'delay-100', 'delay-200'];
    return `
      <section id="stack" class="py-14 md:py-24" style="position:relative;z-index:1;">
        <div class="max-w-7xl mx-auto px-5 md:px-10">

          <div class="reveal">
            <span class="section-badge inline-flex items-center gap-2 text-sm px-4 py-1 rounded-full mb-5"
                  style="border:1px solid rgba(129,140,248,0.35);color:#a5b4fc;">
              <span class="w-2 h-2 rounded-full inline-block status-dot" style="background:#818cf8;"></span>
              Tecnologias
            </span>
          </div>
          <h2 class="reveal delay-100 font-black mb-10 md:mb-14"
              style="font-size:clamp(2rem,6vw,3rem);color:#f1f5f9;">Stack Técnico</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            ${window.Data.stackCategories.map((cat, i) => this._renderCategory(cat, delays[i])).join('')}
          </div>
        </div>
      </section>`;
  },
};
