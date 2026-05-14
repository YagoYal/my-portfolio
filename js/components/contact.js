window.Components = window.Components || {};

window.Components.contact = {
  _links: [
    { icon: 'mail',     label: 'Email',    value: 'yagoalcontact@gmail.com'                       },
    { icon: 'github',   label: 'GitHub',   value: 'https://github.com/YagoYal'                    },
    { icon: 'linkedin', label: 'LinkedIn', value: 'https://www.linkedin.com/in/yago-s-20628892'   },
  ],

  _renderLink({ icon, label, value }, delay) {
    const isExternal = value.startsWith('http');
    const href = isExternal ? value : `mailto:${value}`;
    const targetAttrs = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';

    return `
      <a href="${href}"${targetAttrs} class="reveal ${delay} flex items-center gap-5 group">
        <div class="icon-box w-14 h-14 rounded-2xl">
          <i data-lucide="${icon}" class="w-6 h-6" style="color:#818cf8;"></i>
        </div>
        <div>
          <p class="text-xs font-semibold tracking-widest uppercase mb-0.5" style="color:#475569;">${label}</p>
          <p class="font-bold transition" style="color:#e2e8f0;"
             onmouseover="this.style.color='#818cf8'" onmouseout="this.style.color='#e2e8f0'">${value}</p>
        </div>
      </a>`;
  },

  render() {
    const linkDelays = ['delay-100', 'delay-200', 'delay-300'];
    return `
      <section id="contact" class="py-14 md:py-24" style="position:relative;z-index:1;">
        <div class="max-w-7xl mx-auto px-5 md:px-10">

          <div class="text-center mb-10 md:mb-14">
            <h2 class="reveal font-black mb-4"
                style="font-size:clamp(2rem,6vw,3rem);color:#f1f5f9;">Solicitar Acesso</h2>
            <p class="reveal delay-100 text-slate-400 text-lg leading-relaxed">
              Interessado em colaborar? Envie uma mensagem e vamos construir algo incrível juntos.
            </p>
          </div>

          <div class="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div class="reveal reveal-left flex-1 card">
              <form id="contact-form" novalidate>
                <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off" />
                <div class="flex flex-col gap-4">
                  <div>
                    <input type="text" id="field-name" name="name"
                      placeholder="Nome completo" required minlength="2" autocomplete="name" />
                    <p class="text-red-400 text-xs mt-1 hidden" id="err-name">Informe seu nome.</p>
                  </div>
                  <div>
                    <input type="email" id="field-email" name="email"
                      placeholder="E-mail" required autocomplete="email" />
                    <p class="text-red-400 text-xs mt-1 hidden" id="err-email">Informe um e-mail válido.</p>
                  </div>
                  <div>
                    <textarea id="field-message" name="message"
                      rows="6" placeholder="Sua mensagem..." required minlength="10"></textarea>
                    <p class="text-red-400 text-xs mt-1 hidden" id="err-message">Mensagem deve ter pelo menos 10 caracteres.</p>
                  </div>
                  <div id="form-feedback" class="hidden text-sm font-medium px-4 py-3 rounded-xl"></div>
                  <button type="submit" id="submit-btn"
                    class="btn-primary inline-flex items-center justify-center gap-2 text-white py-4 rounded-xl font-semibold transition"
                    style="background:#4f46e5;">
                    <i data-lucide="send" class="w-4 h-4"></i>
                    <span id="submit-label">Enviar Mensagem</span>
                  </button>
                </div>
              </form>
            </div>

            <div class="reveal-right flex-1 flex flex-col gap-5 pt-2">
              ${this._links.map((l, i) => this._renderLink(l, linkDelays[i])).join('')}
            </div>
          </div>
        </div>
      </section>`;
  },

  init() {
    const form  = document.getElementById('contact-form');
    const btn   = document.getElementById('submit-btn');
    const label = document.getElementById('submit-label');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!this._validate()) return;

      btn.disabled      = true;
      label.textContent = 'Enviando...';

      try {
        const res = await fetch(window.Config.formspreeEndpoint, {
          method:  'POST',
          headers: { Accept: 'application/json' },
          body:    new FormData(form),
        });

        if (res.ok) {
          this._feedback('success', 'Mensagem enviada! Entrarei em contato em breve.');
          form.reset();
        } else {
          const data = await res.json().catch(() => ({}));
          const msg  = data?.errors?.map((er) => er.message).join(', ') || 'Erro ao enviar. Tente novamente.';
          this._feedback('error', msg);
        }
      } catch {
        this._feedback('error', 'Sem conexão. Verifique sua internet e tente novamente.');
      } finally {
        btn.disabled      = false;
        label.textContent = 'Enviar Mensagem';
      }
    });
  },

  _validate() {
    const rules = [
      { id: 'field-name',    errId: 'err-name',    ok: (v) => v.trim().length >= 2 },
      { id: 'field-email',   errId: 'err-email',   ok: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
      { id: 'field-message', errId: 'err-message', ok: (v) => v.trim().length >= 10 },
    ];

    let valid = true;
    rules.forEach(({ id, errId, ok }) => {
      const field = document.getElementById(id);
      const err   = document.getElementById(errId);
      const pass  = ok(field.value);
      err.classList.toggle('hidden', pass);
      if (!pass && valid) { field.focus(); valid = false; }
    });
    return valid;
  },

  _feedback(type, message) {
    const el = document.getElementById('form-feedback');
    el.textContent = message;
    el.className = type === 'success'
      ? 'text-sm font-medium px-4 py-3 rounded-xl'
      : 'text-sm font-medium px-4 py-3 rounded-xl';
    el.style.background = type === 'success'
      ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.12)';
    el.style.color = type === 'success' ? '#34d399' : '#f87171';
    el.style.border = type === 'success'
      ? '1px solid rgba(52,211,153,0.25)' : '1px solid rgba(248,113,113,0.25)';
    el.classList.remove('hidden');
  },
};
