window.Components = window.Components || {};

window.Components.security = {
  _renderCard({ icon, title, description }) {
    return `
      <div class="card">
        <div class="icon-box w-14 h-14 rounded-2xl mb-6">
          <i data-lucide="${icon}" class="w-6 h-6 text-blue-600"></i>
        </div>
        <h3 class="text-lg font-bold text-slate-900 mb-3">${title}</h3>
        <p class="text-slate-500 leading-relaxed text-sm">${description}</p>
      </div>`;
  },

  render() {
    return `
      <section id="security" class="py-24">
        <div class="max-w-7xl mx-auto px-10">
          <div class="text-center mb-14">
            <span class="inline-flex items-center gap-2 border border-emerald-400 text-emerald-600 text-sm px-4 py-1 rounded-full mb-5">
              <span class="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
              Protocolo de Confiança
            </span>
            <h2 class="font-black mb-4" style="font-size:3rem;color:#0f172a;">Camada de Segurança</h2>
            <p class="text-slate-500 text-lg max-w-lg mx-auto leading-relaxed">
              Cada linha de código é construída pensando em proteção, performance e confiabilidade.
            </p>
          </div>
          <div class="grid grid-cols-3 gap-6">
            ${window.Data.securityFeatures.map((f) => this._renderCard(f)).join('')}
          </div>
        </div>
      </section>`;
  },
};
