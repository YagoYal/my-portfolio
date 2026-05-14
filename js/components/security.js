window.Components = window.Components || {};

window.Components.security = {
  _renderCard({ icon, title, description }, delay) {
    return `
      <div class="reveal card ${delay}">
        <div class="icon-box w-14 h-14 rounded-2xl mb-6">
          <i data-lucide="${icon}" class="w-6 h-6" style="color:#818cf8;"></i>
        </div>
        <h3 class="text-lg font-bold mb-3" style="color:#f1f5f9;">${title}</h3>
        <p class="text-slate-400 leading-relaxed text-sm">${description}</p>
      </div>`;
  },

  render() {
    const delays = ['', 'delay-200', 'delay-400'];
    return `
      <section id="security" class="py-14 md:py-24" style="position:relative;z-index:1;">
        <div class="max-w-7xl mx-auto px-5 md:px-10">

          <div class="text-center mb-10 md:mb-14">
            <div class="reveal">
              <span class="section-badge inline-flex items-center gap-2 text-sm px-4 py-1 rounded-full mb-5"
                    style="border:1px solid rgba(52,211,153,0.4);color:#6ee7b7;">
                <span class="w-2 h-2 rounded-full bg-emerald-400 inline-block status-dot"></span>
                Protocolo de Confiança
              </span>
            </div>
            <h2 class="reveal delay-100 font-black mb-4"
                style="font-size:clamp(2rem,6vw,3rem);color:#f1f5f9;">Camada de Segurança</h2>
            <p class="reveal delay-200 text-slate-400 text-lg max-w-lg mx-auto leading-relaxed">
              Cada linha de código é construída pensando em proteção, performance e confiabilidade.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            ${window.Data.securityFeatures.map((f, i) => this._renderCard(f, delays[i])).join('')}
          </div>
        </div>
      </section>`;
  },
};
