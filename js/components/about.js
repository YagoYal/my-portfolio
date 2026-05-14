window.Components = window.Components || {};

window.Components.about = {
  _infoCards: [
    { icon: 'briefcase',      label: 'Experiência', value: 'Projetos Pessoais'      },
    { icon: 'graduation-cap', label: 'Formação',    value: 'Sistemas de Informação' },
    { icon: 'code-2',         label: 'Foco',        value: 'Back-End Java'          },
  ],

  _renderCard({ icon, label, value }, delay) {
    return `
      <div class="reveal card flex items-center gap-4 ${delay}">
        <div class="icon-box w-12 h-12">
          <i data-lucide="${icon}" class="w-5 h-5" style="color:#818cf8;"></i>
        </div>
        <div>
          <p class="text-xs font-semibold tracking-widest uppercase mb-0.5" style="color:#64748b;">${label}</p>
          <p class="font-bold" style="color:#f1f5f9;">${value}</p>
        </div>
      </div>`;
  },

  render() {
    const delays = ['', 'delay-100', 'delay-200'];
    return `
      <section id="about" class="py-14 md:py-24" style="position:relative;z-index:1;">
        <div class="max-w-7xl mx-auto px-5 md:px-10">

          <div class="reveal">
            <span class="section-badge inline-flex items-center gap-2 text-sm px-4 py-1 rounded-full mb-5"
                  style="border:1px solid rgba(129,140,248,0.35);color:#a5b4fc;">
              <span class="w-2 h-2 rounded-full inline-block status-dot" style="background:#818cf8;"></span>
              Sobre Mim
            </span>
          </div>
          <h2 class="reveal delay-100 font-black mb-10 md:mb-14"
              style="font-size:clamp(2rem,6vw,3rem);color:#f1f5f9;">Quem sou eu</h2>

          <div class="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

            <div class="reveal-left flex-shrink-0 mx-auto md:mx-0">
              <div class="about-photo-wrap inline-block"
                   style="border-radius:16px;overflow:hidden;border:1px solid rgba(129,140,248,0.25);box-shadow:0 0 40px rgba(99,102,241,0.2);">
                <img
                  src="assets/YagoS.jpeg"
                  alt="Foto de Yago Silva"
                  class="block max-w-xs w-full"
                />
              </div>
            </div>

            <div class="flex-1 flex flex-col gap-8">
              <div class="reveal delay-100">
                <p class="text-lg leading-relaxed mb-6" style="color:#94a3b8;">
                  Desenvolvedor back-end com foco em <strong style="color:#f1f5f9;">Java</strong>. Graduado em
                  <strong style="color:#f1f5f9;">Sistemas para Web</strong> e atualmente cursando a segunda
                  graduação em <strong style="color:#f1f5f9;">Sistemas de Informação</strong>.
                </p>
                <p class="text-lg leading-relaxed" style="color:#94a3b8;">
                  Construo projetos pessoais com foco em arquitetura limpa, segurança e escalabilidade.
                  Estou sempre à disposição para colaborar em projetos de terceiros e expandir meu
                  conhecimento em soluções de back-end robustas.
                </p>
              </div>
              <div class="flex flex-col gap-4">
                ${this._infoCards.map((c, i) => this._renderCard(c, delays[i])).join('')}
              </div>
            </div>

          </div>
        </div>
      </section>`;
  },
};
