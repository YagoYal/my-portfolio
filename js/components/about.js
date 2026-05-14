window.Components = window.Components || {};

window.Components.about = {
  render() {
    return `
      <section id="origin">
        <div class="rv">
          <div class="s-num">01 — Origin</div>
          <h2 class="s-title">Who I am</h2>
        </div>
        <div class="bento-origin">

          <div class="bento-cell bento-bio rv-l d1">
            <div class="b-num">01</div>
            <h2>Back-end systems architect.</h2>
            <p>Developer focused on <strong>Java</strong>. Graduated in <strong>Web Systems</strong>,
               currently pursuing a second degree in <strong>Information Systems</strong>.</p>
            <p>I build personal projects focused on clean architecture, security and scalability.
               Available to collaborate on external projects.</p>
          </div>

          <div class="bento-cell bento-stat accent rv d1">
            <span class="st-label">Projects</span>
            <div class="st-val">02+</div>
            <span class="st-sub">deployed in production</span>
          </div>

          <div class="bento-cell bento-info rv d2">
            <div class="b-icon">01</div>
            <div>
              <div class="b-lbl">Experience</div>
              <div class="b-val">Personal Projects</div>
            </div>
          </div>

          <div class="bento-cell bento-info rv d3">
            <div class="b-icon">02</div>
            <div>
              <div class="b-lbl">Education</div>
              <div class="b-val">Information Systems</div>
            </div>
          </div>

          <div class="bento-cell bento-info rv d4">
            <div class="b-icon">03</div>
            <div>
              <div class="b-lbl">Focus</div>
              <div class="b-val">Back-End Java</div>
            </div>
          </div>

          <div class="bento-cell bento-avail rv d5">
            <div class="avail-left">
              <div class="avail-dot"></div>
              <div>
                <div class="avail-txt">Available for work</div>
                <div class="avail-sub">Freelance · Collaboration · Career</div>
              </div>
            </div>
            <div class="avail-badge">OPEN TO WORK</div>
          </div>

        </div>
      </section>`;
  },
};
