window.Components = window.Components || {};

window.Components.hero = {
  _tickerItems: [
    'AVAILABLE: ACTIVE',
    'BACK-END: JAVA / SPRING BOOT',
    'DATABASE: SQL / MYSQL',
    'DEPLOY: AWS / DOCKER',
    'REST API: JWT ENCRYPTION',
    'CLEAN ARCHITECTURE',
    'RESILIENT SYSTEMS',
    'SPRING SECURITY',
    'DOCKER / AWS',
  ],

  _renderTicker() {
    const items = this._tickerItems
      .map(t => `<span>${t}</span><span class="sep">/</span>`)
      .join('');
    return `<div class="tick-inner">${items}${items}</div>`;
  },

  render() {
    return `
      <section class="hero" id="home">
        <div class="hero-top">
          <div class="hero-status">
            <div class="sdot"></div>
            System online — available
          </div>
          <div class="hero-coords" id="coords">38°43'N 9°08'W · PT</div>
        </div>

        <h1 class="hero-hl" id="hero-hl">
          <span class="lw"><span class="hl-light" id="hl1">building</span></span>
          <span class="lw-clip"><span class="hl-outline">SCALABLE</span></span>
          <span class="lw"><span class="hl-grad">SYSTEMS_</span></span>
        </h1>

        <div class="hero-bottom">
          <p class="hero-desc">
            <strong>Back-End Developer</strong> focused on <strong>Java / Spring Boot</strong>.
            Building robust, secure and scalable systems.
          </p>
          <div class="hero-cta">
            <a href="assets/YagoAlmeida-CV.pdf" download="Yago_Almeida_CV.pdf" class="cta-btn btn-mag">
              Download CV <span class="cta-arr"></span>
            </a>
            <a href="#work" class="cta-btn btn-mag" style="opacity:.45">
              View projects <span class="cta-arr"></span>
            </a>
          </div>
        </div>
      </section>

      <div class="ticker">${this._renderTicker()}</div>`;
  },
};
