window.Components = window.Components || {};

window.Components.hero = {
  _tickerItems: [
    ': ATIVA',
    'BACK-END: JAVA / SPRING BOOT',
    'BANCO DE DADOS: SQL / MYSQL',
    'DEPLOY: AWS / DOCKER',
    'API REST: JWT ENCRYPTION',
  ],

  _renderTicker() {
    const items = this._tickerItems
      .map(
        (item) =>
          `<span style="color:#64748b;font-size:0.78rem;letter-spacing:.12em;margin:0 28px;">${item}</span>
           <span style="color:#3b82f6;margin:0 6px;">•</span>`
      )
      .join('');
    return `<div class="ticker-track">${items}${items}</div>`;
  },

  _renderSphere() {
    return `
      <div class="sphere-wrap">
        <div class="sphere-ring" style="width:90%;height:90%;top:5%;left:5%;"></div>
        <div class="sphere-ring" style="width:70%;height:70%;top:15%;left:15%;"></div>
        <div class="sphere-ring" style="width:50%;height:50%;top:25%;left:25%;"></div>
        <div class="sphere-ring" style="width:30%;height:30%;top:35%;left:35%;"></div>
        <svg style="position:absolute;inset:0;width:100%;height:100%;" viewBox="0 0 380 380">
          <line x1="0"   y1="190" x2="380" y2="190" stroke="#3b82f6" stroke-width="0.6" opacity="0.25"/>
          <line x1="190" y1="0"   x2="190" y2="380" stroke="#3b82f6" stroke-width="0.6" opacity="0.25"/>
          <line x1="55"  y1="55"  x2="325" y2="325" stroke="#3b82f6" stroke-width="0.5" opacity="0.18"/>
          <line x1="325" y1="55"  x2="55"  y2="325" stroke="#3b82f6" stroke-width="0.5" opacity="0.18"/>
          <circle cx="190" cy="80"  r="3"   fill="#2563eb" opacity="0.4"/>
          <circle cx="300" cy="150" r="2"   fill="#2563eb" opacity="0.3"/>
          <circle cx="80"  cy="250" r="2"   fill="#2563eb" opacity="0.3"/>
          <circle cx="260" cy="300" r="2.5" fill="#2563eb" opacity="0.3"/>
          <circle cx="130" cy="130" r="2"   fill="#2563eb" opacity="0.25"/>
          <circle cx="190" cy="190" r="5"   fill="#2563eb" opacity="0.5"/>
        </svg>
      </div>`;
  },

  render() {
    return `
      <section id="home" class="min-h-screen flex flex-col">
        <div class="flex-1 max-w-7xl mx-auto w-full px-5 md:px-10 flex items-center py-10 md:py-16">
          <div class="flex flex-col md:flex-row items-center md:justify-between w-full gap-8 md:gap-10">

            <div class="max-w-lg text-center md:text-left">
              <span class="inline-flex items-center gap-2 border border-emerald-400 text-emerald-600 text-sm px-4 py-1 rounded-full mb-8">
                <span class="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                Sistema Operacional
              </span>
              <h1 class="font-black leading-none mb-6 tracking-tight" style="font-size:clamp(2.2rem,7vw,4.2rem);color:#0f172a;">
                ARQUITETANDO<br>
                <span style="color:#2563eb;">SISTEMAS</span><br>
                DIGITAIS<br>
                RESILIENTES
              </h1>
              <p class="text-slate-500 text-lg leading-relaxed mb-8">
                Desenvolvedor Back-End com foco em Java,
                construindo soluções robustas e seguras para o
                mundo digital.
              </p>
              <div class="flex flex-wrap justify-center md:justify-start items-center gap-3">
                <a href="assets/YagoAlmeida-CV.pdf" download="Yago_Almeida_CV.pdf" class="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition text-sm">
                  <i data-lucide="download" class="w-4 h-4"></i> Download CV
                </a>
                <a href="#contact" rel="noopener noreferrer" class="inline-flex items-center gap-2 border border-slate-300 bg-white text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition text-sm">
                  <i data-lucide="mail" class="w-4 h-4"></i> Contato
                </a>
              </div>
              <div class="mt-10 flex justify-center md:justify-start">
                <a href="#about"><i data-lucide="arrow-down" class="w-5 h-5 text-slate-400"></i></a>
              </div>
            </div>

            <div class="hidden md:flex flex-1 justify-center items-center">
              ${this._renderSphere()}
            </div>
          </div>
        </div>

        <div style="background:#0f172a;padding:11px 0;overflow:hidden;">
          ${this._renderTicker()}
        </div>
      </section>`;
  },
};
