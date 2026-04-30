window.Components = window.Components || {};

window.Components.stack = {
  _renderCategory({ title, chips }) {
    return `
      <div class="card">
        <div class="flex items-center gap-3 mb-7">
          <div class="w-1 h-6 bg-blue-600 rounded-full"></div>
          <h3 class="text-lg font-bold text-slate-900">${title}</h3>
        </div>
        <div class="flex flex-wrap gap-2">
          ${chips.map((c) => `<span class="chip">${c}</span>`).join('')}
        </div>
      </div>`;
  },

  render() {
    return `
      <section id="stack" class="py-14 md:py-24">
        <div class="max-w-7xl mx-auto px-5 md:px-10">
          <span class="inline-flex items-center gap-2 border border-blue-400 text-blue-600 text-sm px-4 py-1 rounded-full mb-5">
            <span class="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
            Tecnologias
          </span>
          <h2 class="font-black mb-10 md:mb-14" style="font-size:clamp(2rem,6vw,3rem);color:#0f172a;">Stack Técnico</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            ${window.Data.stackCategories.map((cat) => this._renderCategory(cat)).join('')}
          </div>
        </div>
      </section>`;
  },
};
