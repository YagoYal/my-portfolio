window.Components = window.Components || {};

window.Components.about = {
  _infoCards: [
    { icon: 'briefcase',      label: 'Experiência', value: 'Projetos Pessoais'      },
    { icon: 'graduation-cap', label: 'Formação',    value: 'Sistemas de Informação' },
    { icon: 'code-2',         label: 'Foco',        value: 'Back-End Java'          },
  ],

  _renderCard({ icon, label, value }) {
    return `
      <div class="card flex items-center gap-4">
        <div class="icon-box w-12 h-12">
          <i data-lucide="${icon}" class="w-5 h-5 text-blue-600"></i>
        </div>
        <div>
          <p class="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-0.5">${label}</p>
          <p class="font-bold text-slate-900">${value}</p>
        </div>
      </div>`;
  },

  render() {
    return `
      <section id="about" class="py-24">
        <div class="max-w-7xl mx-auto px-10">
          <span class="inline-flex items-center gap-2 border border-blue-400 text-blue-600 text-sm px-4 py-1 rounded-full mb-5">
            <span class="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
            Sobre Mim
          </span>
          <h2 class="font-black mb-14" style="font-size:3rem;color:#0f172a;">Quem sou eu</h2>

          <div class="flex gap-16 items-start">

            <!-- Foto -->
            <div class="flex-shrink-0">
              <div class="rounded-2xl overflow-hidden shadow-lg border-4 border-white ring-2 ring-blue-100 inline-block">
                <img
                  src="assets/YagoS.jpeg"
                  alt="Foto de Yago Silva"
                  class="block max-w-xs"
                />
              </div>
            </div>

            <!-- Texto + cards -->
            <div class="flex-1 flex flex-col gap-8">
              <div>
                <p class="text-slate-600 text-lg leading-relaxed mb-6">
                  Desenvolvedor back-end com foco em <strong class="text-slate-900">Java</strong>. Graduado em
                  <strong class="text-slate-900">Sistemas para Web</strong> e atualmente cursando a segunda
                  graduação em <strong class="text-slate-900">Sistemas de Informação</strong>.
                </p>
                <p class="text-slate-600 text-lg leading-relaxed">
                  Construo projetos pessoais com foco em arquitetura limpa, segurança e escalabilidade.
                  Estou sempre à disposição para colaborar em projetos de terceiros e expandir meu
                  conhecimento em soluções de back-end robustas.
                </p>
              </div>
              <br />
              <div class="flex flex-col gap-4">
                ${this._infoCards.map((c) => this._renderCard(c)).join('')}
              </div>
            </div>

          </div>
        </div>
      </section>`;
  },
};
