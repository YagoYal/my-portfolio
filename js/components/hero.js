window.Components = window.Components || {};

window.Components.hero = {
  _tickerItems: [
    'DISPONÍVEL: ATIVA',
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
           <span style="color:#818cf8;margin:0 6px;">•</span>`
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
          <line x1="0"   y1="190" x2="380" y2="190" stroke="#818cf8" stroke-width="0.6" opacity="0.3"/>
          <line x1="190" y1="0"   x2="190" y2="380" stroke="#818cf8" stroke-width="0.6" opacity="0.3"/>
          <line x1="55"  y1="55"  x2="325" y2="325" stroke="#818cf8" stroke-width="0.5" opacity="0.2"/>
          <line x1="325" y1="55"  x2="55"  y2="325" stroke="#818cf8" stroke-width="0.5" opacity="0.2"/>
          <circle cx="190" cy="80"  r="3"   fill="#a78bfa" opacity="0.6"/>
          <circle cx="300" cy="150" r="2"   fill="#818cf8" opacity="0.45"/>
          <circle cx="80"  cy="250" r="2"   fill="#818cf8" opacity="0.45"/>
          <circle cx="260" cy="300" r="2.5" fill="#a78bfa" opacity="0.4"/>
          <circle cx="130" cy="130" r="2"   fill="#818cf8" opacity="0.35"/>
          <circle cx="190" cy="190" r="6"   fill="#818cf8" opacity="0.7"/>
        </svg>
      </div>`;
  },

  render() {
    return `
      <section id="home" class="min-h-screen flex flex-col" style="position:relative;z-index:1;">
        <div class="flex-1 max-w-7xl mx-auto w-full px-5 md:px-10 flex items-center py-10 md:py-16">
          <div class="flex flex-col md:flex-row items-center md:justify-between w-full gap-8 md:gap-10">

            <div class="max-w-lg text-center md:text-left">

              <div class="reveal">
                <span class="section-badge inline-flex items-center gap-2 text-sm px-4 py-1 rounded-full mb-8"
                      style="border:1px solid rgba(129,140,248,0.35);color:#a5b4fc;">
                  <span class="w-2 h-2 rounded-full inline-block status-dot" style="background:#818cf8;"></span>
                  Sistema Operacional
                </span>
              </div>

              <h1 class="reveal delay-100 font-black leading-none mb-6 tracking-tight"
                  style="font-size:clamp(2.2rem,7vw,4.2rem);color:#f1f5f9;">
                ARQUITETANDO<br>
                <span class="gradient-text">SISTEMAS</span><br>
                DIGITAIS<br>
                RESILIENTES
              </h1>

              <p class="reveal delay-200 text-slate-400 text-lg leading-relaxed mb-8">
                Desenvolvedor Back-End com foco em Java,
                construindo soluções robustas e seguras para o
                mundo digital.
              </p>

              <div class="reveal delay-300 flex flex-wrap justify-center md:justify-start items-center gap-3">
                <a href="assets/YagoAlmeida-CV.pdf" download="Yago_Almeida_CV.pdf"
                   class="btn-primary btn-magnetic inline-flex items-center gap-2 text-white px-6 py-3 rounded-xl font-semibold transition text-sm"
                   style="background:#4f46e5;">
                  <i data-lucide="download" class="w-4 h-4"></i> Download CV
                </a>
                <a href="#contact" rel="noopener noreferrer"
                   class="btn-secondary btn-magnetic inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition text-sm">
                  <i data-lucide="mail" class="w-4 h-4"></i> Contato
                </a>
              </div>

              <div class="reveal delay-400 mt-10 flex justify-center md:justify-start">
                <a href="#about" class="scroll-indicator">
                  <i data-lucide="arrow-down" class="w-5 h-5" style="color:#4f46e5;"></i>
                </a>
              </div>
            </div>

            <div class="reveal-scale delay-200 hidden md:flex flex-1 justify-center items-center">
              <div id="sphere-parallax">
                ${this._renderSphere()}
              </div>
            </div>

          </div>
        </div>

        <div style="background:rgba(0,0,0,0.5);backdrop-filter:blur(10px);border-top:1px solid rgba(129,140,248,0.1);padding:11px 0;overflow:hidden;">
          ${this._renderTicker()}
        </div>
      </section>`;
  },
};
