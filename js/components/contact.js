window.Components = window.Components || {};

window.Components.contact = {
  render() {
    return `
      <section id="contact">
        <div class="rv">
          <div class="s-num">05 — Contact</div>
          <h2 class="s-title">Init contact_</h2>
        </div>
        <div class="contact-grid">

          <div class="rv-l d1">
            <p class="c-big">Let's build something that matters.</p>
            <p class="c-sub">Available for freelance projects, collaborations and career opportunities.
               I reply to every message.</p>
            <div class="c-links">
              <a href="mailto:yagoalcontact@gmail.com" class="c-link">
                <div class="c-ico">@</div>
                <div>
                  <div class="c-lbl">Email</div>
                  <div class="c-val">yagoalcontact@gmail.com</div>
                </div>
              </a>
              <a href="https://github.com/YagoYal" target="_blank" rel="noopener noreferrer" class="c-link">
                <div class="c-ico">GH</div>
                <div>
                  <div class="c-lbl">GitHub</div>
                  <div class="c-val">github.com/YagoYal</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/yago-s-20628892" target="_blank" rel="noopener noreferrer" class="c-link">
                <div class="c-ico">LI</div>
                <div>
                  <div class="c-lbl">LinkedIn</div>
                  <div class="c-val">linkedin.com/in/yago-s-20628892</div>
                </div>
              </a>
            </div>
          </div>

          <div class="rv-r d2">
            <form id="contact-form" class="c-form" novalidate>
              <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off" />
              <div class="fr">
                <input type="text"  id="field-name"    name="name"    placeholder="full_name"         required minlength="2" autocomplete="name" />
                <p class="c-form-feedback" id="err-name">Enter your name.</p>
              </div>
              <div class="fr">
                <input type="email" id="field-email"   name="email"   placeholder="email@domain.com"  required autocomplete="email" />
                <p class="c-form-feedback" id="err-email">Enter a valid email.</p>
              </div>
              <div class="fr">
                <textarea           id="field-message" name="message" placeholder="// message..."     required minlength="10" rows="5"></textarea>
                <p class="c-form-feedback" id="err-message">Message must be at least 10 characters.</p>
              </div>
              <p class="c-form-feedback" id="form-feedback"></p>
              <button type="submit" id="submit-btn" class="c-form-btn btn-mag">
                <span id="submit-label">Send transmission →</span>
              </button>
            </form>
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
      label.textContent = 'Transmitting...';
      try {
        const res = await fetch(window.Config.formspreeEndpoint, {
          method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form),
        });
        if (res.ok) {
          this._feedback('ok', "Transmission received. I'll be in touch soon.");
          form.reset();
        } else {
          const data = await res.json().catch(() => ({}));
          const msg  = data?.errors?.map(er => er.message).join(', ') || 'Send error. Try again.';
          this._feedback('err', msg);
        }
      } catch {
        this._feedback('err', 'No connection. Check your internet and try again.');
      } finally {
        btn.disabled      = false;
        label.textContent = 'Send transmission →';
      }
    });
  },

  _validate() {
    const rules = [
      { id: 'field-name',    errId: 'err-name',    ok: v => v.trim().length >= 2 },
      { id: 'field-email',   errId: 'err-email',   ok: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
      { id: 'field-message', errId: 'err-message', ok: v => v.trim().length >= 10 },
    ];
    let valid = true;
    rules.forEach(({ id, errId, ok }) => {
      const field = document.getElementById(id);
      const err   = document.getElementById(errId);
      const pass  = ok(field.value);
      err.style.display = pass ? 'none' : 'block';
      if (!pass && valid) { field.focus(); valid = false; }
    });
    return valid;
  },

  _feedback(type, message) {
    const el = document.getElementById('form-feedback');
    el.textContent  = message;
    el.className    = 'c-form-feedback ' + type;
    el.style.display = 'block';
  },
};
