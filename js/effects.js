(function () {
  'use strict';

  /* ── LOADER ── */
  (function () {
    var loader = document.getElementById('loader');
    var pct    = document.getElementById('lpct');
    var n = 0;
    var iv = setInterval(function () {
      n += Math.floor(Math.random() * 12) + 4;
      if (n > 100) n = 100;
      pct.textContent = String(n).padStart(3, '0') + '%';
      if (n === 100) { clearInterval(iv); setTimeout(function () { loader.classList.add('out'); }, 300); }
    }, 55);
  })();

  /* ── CANVAS PARTICLES ── */
  (function () {
    var cv  = document.getElementById('cv');
    var ctx = cv.getContext('2d');
    var W, H, pts = [];

    function resize() { W = cv.width = innerWidth; H = cv.height = innerHeight; }
    resize();
    window.addEventListener('resize', function () { resize(); init(); });

    function init() {
      pts = [];
      var n = Math.floor(W * H / 18000);
      for (var i = 0; i < n; i++) {
        pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3, r: Math.random() * 1.2 + .3, a: Math.random() });
      }
    }
    init();

    var mx = -9999, my = -9999;
    window.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; });

    function draw() {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(function (p) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        var d = Math.hypot(p.x - mx, p.y - my);
        if (d < 130) { var f = (130 - d) / 130; p.vx += (p.x - mx) / d * f * .015; p.vy += (p.y - my) / d * f * .015; }
        p.vx *= .995; p.vy *= .995;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,' + (p.a * .28) + ')'; ctx.fill();
      });
      var md = 95;
      for (var i = 0; i < pts.length; i++) {
        for (var j = i + 1; j < pts.length; j++) {
          var dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          var d2 = Math.sqrt(dx * dx + dy * dy);
          if (d2 < md) {
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = 'rgba(124,106,255,' + ((1 - d2 / md) * .09) + ')';
            ctx.lineWidth = .5; ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    draw();
  })();

  /* ── CURSOR ── */
  var dot  = document.getElementById('c-dot');
  var ring = document.getElementById('c-ring');
  var cmx = innerWidth / 2, cmy = innerHeight / 2, crx = cmx, cry = cmy;

  document.addEventListener('mousemove', function (e) { cmx = e.clientX; cmy = e.clientY; });
  (function loop() {
    crx += (cmx - crx) * .13; cry += (cmy - cry) * .13;
    dot.style.left  = cmx + 'px'; dot.style.top  = cmy + 'px';
    ring.style.left = crx + 'px'; ring.style.top = cry + 'px';
    requestAnimationFrame(loop);
  })();

  function setCursorClass(cls) {
    document.body.classList.remove('hov', 'btn');
    if (cls) document.body.classList.add(cls);
  }
  document.addEventListener('mouseover', function (e) {
    var t = e.target.closest('a, .chip, .c-link, .w-card, .w-link, .bento-cell, .sec-cell');
    var b = e.target.closest('.nav-cta, .c-form-btn, .cta-btn');
    if (b)      setCursorClass('btn');
    else if (t) setCursorClass('hov');
    else        setCursorClass('');
  });

  /* ── SCROLL PROGRESS ── */
  var bar = document.getElementById('progress');
  window.addEventListener('scroll', function () {
    bar.style.transform = 'scaleX(' + (scrollY / (document.body.scrollHeight - innerHeight)) + ')';
  }, { passive: true });

  /* ── NAV SCROLL ── */
  var nav = document.querySelector('nav');
  window.addEventListener('scroll', function () {
    if (nav) nav.classList.toggle('scrolled', scrollY > 60);
  }, { passive: true });

  /* ── SCROLL REVEAL ── */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: .08 });
  document.querySelectorAll('.rv, .rv-l, .rv-r').forEach(function (el) { io.observe(el); });

  /* ── DRAG CAROUSEL ── */
  var drag = document.getElementById('drag');
  if (drag) {
    var down = false, dsx, dss, dvx = 0, dlx, dlt, draf;
    drag.addEventListener('mousedown', function (e) {
      down = true; drag.classList.add('g');
      dsx = e.pageX; dss = drag.scrollLeft; dvx = 0; dlx = e.pageX; dlt = Date.now();
      cancelAnimationFrame(draf);
    });
    window.addEventListener('mouseup', function () {
      if (!down) return; down = false; drag.classList.remove('g');
      (function glide() { if (Math.abs(dvx) < .4) return; drag.scrollLeft -= dvx; dvx *= .91; draf = requestAnimationFrame(glide); })();
    });
    window.addEventListener('mousemove', function (e) {
      if (!down) return; e.preventDefault();
      drag.scrollLeft = dss - (e.pageX - dsx);
      var now = Date.now(); dvx = (e.pageX - dlx) / Math.max(1, now - dlt) * 16; dlx = e.pageX; dlt = now;
    });
    drag.addEventListener('touchstart', function (e) { dsx = e.touches[0].pageX; dss = drag.scrollLeft; dvx = 0; dlx = dsx; dlt = Date.now(); cancelAnimationFrame(draf); }, { passive: true });
    drag.addEventListener('touchmove',  function (e) { drag.scrollLeft = dss - (e.touches[0].pageX - dsx); var now = Date.now(); dvx = (e.touches[0].pageX - dlx) / Math.max(1, now - dlt) * 16; dlx = e.touches[0].pageX; dlt = now; }, { passive: true });
    drag.addEventListener('touchend',   function () { (function glide() { if (Math.abs(dvx) < .4) return; drag.scrollLeft -= dvx; dvx *= .91; draf = requestAnimationFrame(glide); })(); });
  }

  /* ── 3D TILT ── */
  document.querySelectorAll('.w-card').forEach(function (c) {
    c.addEventListener('mousemove', function (e) {
      var r = c.getBoundingClientRect();
      var rx = ((e.clientY - r.top  - r.height / 2) / (r.height / 2)) * -7;
      var ry = ((e.clientX - r.left - r.width  / 2) / (r.width  / 2)) *  7;
      c.style.transform = 'perspective(800px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) scale3d(1.018,1.018,1.018)';
    });
    c.addEventListener('mouseleave', function () { c.style.transform = ''; });
  });

  /* ── STACK CELL GLOW ── */
  document.querySelectorAll('.st-cell').forEach(function (c) {
    c.addEventListener('mousemove', function (e) {
      var r = c.getBoundingClientRect();
      c.style.setProperty('--mx', ((e.clientX - r.left) / r.width  * 100) + '%');
      c.style.setProperty('--my', ((e.clientY - r.top)  / r.height * 100) + '%');
    });
  });

  /* ── MAGNETIC BUTTONS ── */
  document.querySelectorAll('.btn-mag').forEach(function (el) {
    el.addEventListener('mousemove', function (e) {
      var r = el.getBoundingClientRect();
      el.style.transform = 'translate(' + ((e.clientX - (r.left + r.width / 2)) * .28) + 'px,' + ((e.clientY - (r.top + r.height / 2)) * .28) + 'px)';
    });
    el.addEventListener('mouseleave', function () {
      el.style.transition = 'transform .5s cubic-bezier(.16,1,.3,1)';
      el.style.transform  = '';
      setTimeout(function () { el.style.transition = ''; }, 500);
    });
  });

  /* ── CHAR SPLIT — hero line 1 ── */
  var hl1 = document.getElementById('hl1');
  if (hl1) {
    var txt = hl1.textContent;
    hl1.innerHTML = txt.split('').map(function (ch, i) {
      return '<span class="ch" style="animation-delay:' + (.32 + i * .042) + 's">' + (ch === ' ' ? '&nbsp;' : ch) + '</span>';
    }).join('');
  }

  /* ── PROCEDURAL LIGHT ── */
  var hero = document.querySelector('.hero');
  if (hero) {
    var tlx = 30, tly = 60, clx = 30, cly = 60;
    document.addEventListener('mousemove', function (e) {
      tlx = (e.clientX / innerWidth)  * 100;
      tly = (e.clientY / innerHeight) * 100;
    });
    (function lightLoop() {
      clx += (tlx - clx) * .06; cly += (tly - cly) * .06;
      hero.style.setProperty('--lx', clx.toFixed(2) + '%');
      hero.style.setProperty('--ly', cly.toFixed(2) + '%');
      requestAnimationFrame(lightLoop);
    })();
  }

  /* ── PARALLAX MULTI-LAYER ── */
  var heroHl   = document.getElementById('hero-hl');
  var heroDesc = document.querySelector('.hero-desc');
  var heroCta  = document.querySelector('.hero-cta');
  var heroTop  = document.querySelector('.hero-top');
  window.addEventListener('scroll', function () {
    var y = scrollY;
    if (y < innerHeight * 1.2) {
      if (heroHl)   heroHl.style.transform   = 'translateY(' + (y * .16) + 'px)';
      if (heroDesc) heroDesc.style.transform  = 'translateY(' + (y * .07) + 'px)';
      if (heroCta)  heroCta.style.transform   = 'translateY(' + (y * .05) + 'px)';
      if (heroTop)  heroTop.style.transform   = 'translateY(' + (y * .04) + 'px)';
    }
  }, { passive: true });

  /* ── NAV SCRAMBLE ── */
  var CH = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  function scramble(el, txt) {
    var f = 0, T = 14;
    var run = function () {
      el.textContent = txt.split('').map(function (c, i) {
        return i < Math.floor(f / T * txt.length) ? c : (c === ' ' ? ' ' : CH[Math.floor(Math.random() * CH.length)]);
      }).join('');
      if (++f <= T) requestAnimationFrame(run); else el.textContent = txt;
    };
    run();
  }
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var orig = a.textContent;
    a.addEventListener('mouseenter', function () { scramble(a, orig); });
  });

  /* ── LIVE CLOCK ── */
  var coordsEl = document.getElementById('coords');
  function clock() {
    if (!coordsEl) return;
    var n = new Date(), pad = function (x) { return String(x).padStart(2, '0'); };
    coordsEl.textContent = "38°43'N 9°08'W · " + pad(n.getHours()) + ':' + pad(n.getMinutes()) + ':' + pad(n.getSeconds()) + ' WET';
  }
  clock(); setInterval(clock, 1000);

  /* ── SUBTLE SOUND ── */
  var audioCtx, tickFn, audioReady = false;
  function initAudio() {
    if (audioReady) return;
    audioReady = true;
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      var master = audioCtx.createGain();
      master.gain.setValueAtTime(0, audioCtx.currentTime);
      master.gain.linearRampToValueAtTime(.016, audioCtx.currentTime + 3);
      master.connect(audioCtx.destination);
      var o1 = audioCtx.createOscillator(); o1.type = 'sine'; o1.frequency.value = 55;
      var o2 = audioCtx.createOscillator(); o2.type = 'sine'; o2.frequency.value = 55.4;
      var g1 = audioCtx.createGain(); g1.gain.value = 1;
      var g2 = audioCtx.createGain(); g2.gain.value = .6;
      o1.connect(g1); g1.connect(master);
      o2.connect(g2); g2.connect(master);
      o1.start(); o2.start();
      tickFn = function () {
        var g = audioCtx.createGain();
        g.gain.setValueAtTime(.04, audioCtx.currentTime);
        g.gain.exponentialRampToValueAtTime(.0001, audioCtx.currentTime + .08);
        var o = audioCtx.createOscillator(); o.type = 'sine'; o.frequency.value = 1800;
        o.connect(g); g.connect(audioCtx.destination);
        o.start(); o.stop(audioCtx.currentTime + .08);
      };
      setTimeout(function () {
        document.querySelectorAll('a, .chip, .cta-btn, .w-link, .nav-links a').forEach(function (el) {
          el.addEventListener('mouseenter', function () { if (tickFn) tickFn(); });
        });
      }, 500);
    } catch (e) {}
  }
  document.addEventListener('pointerdown', initAudio, { once: true });

})();
