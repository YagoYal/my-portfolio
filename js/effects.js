(function () {
  'use strict';

  var isMobile = window.matchMedia('(hover: none)').matches;

  function lerp(a, b, n) { return (1 - n) * a + n * b; }

  /* ── Custom Cursor ──────────────────────────────────── */
  function initCursor() {
    if (isMobile) return;

    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';

    var dot  = document.createElement('div');
    var ring = document.createElement('div');
    dot.id  = 'cursor-dot';
    ring.id = 'cursor-ring';
    document.body.append(dot, ring);

    var mx = window.innerWidth / 2;
    var my = window.innerHeight / 2;
    var rx = mx;
    var ry = my;

    document.addEventListener('mousemove', function (e) {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top  = my + 'px';
    });

    document.addEventListener('mousedown', function () {
      document.documentElement.classList.add('cursor-click');
    });
    document.addEventListener('mouseup', function () {
      document.documentElement.classList.remove('cursor-click');
    });

    document.addEventListener('mouseover', function (e) {
      if (e.target && e.target.closest) {
        var el = e.target.closest('a, button, .card, .chip, .project-card, .nav-link, input, textarea');
        if (el) document.documentElement.classList.add('cursor-hover');
      }
    });
    document.addEventListener('mouseout', function (e) {
      if (e.target && e.target.closest) {
        var el = e.target.closest('a, button, .card, .chip, .project-card, .nav-link, input, textarea');
        if (el) document.documentElement.classList.remove('cursor-hover');
      }
    });

    function tickCursor() {
      rx = lerp(rx, mx, 0.11);
      ry = lerp(ry, my, 0.11);
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(tickCursor);
    }
    tickCursor();
  }

  /* ── Scroll Reveal ──────────────────────────────────── */
  function initScrollReveal() {
    var els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (!els.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    els.forEach(function (el) { observer.observe(el); });
  }

  /* ── 3D Card Tilt ───────────────────────────────────── */
  function initCardTilt() {
    if (isMobile) return;

    document.querySelectorAll('.project-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x    = (e.clientX - rect.left) / rect.width  - 0.5;
        var y    = (e.clientY - rect.top)  / rect.height - 0.5;
        card.style.transform = [
          'perspective(900px)',
          'rotateY(' + (x * 9) + 'deg)',
          'rotateX(' + (-y * 9) + 'deg)',
          'translateZ(6px)',
        ].join(' ');
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0)';
        card.style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1), box-shadow 0.6s cubic-bezier(0.16,1,0.3,1)';
        setTimeout(function () { card.style.transition = ''; }, 650);
      });

      card.addEventListener('mouseenter', function () {
        card.style.transition = 'box-shadow 0.5s cubic-bezier(0.16,1,0.3,1)';
      });
    });
  }

  /* ── Magnetic Buttons ───────────────────────────────── */
  function initMagnetic() {
    if (isMobile) return;

    document.querySelectorAll('.btn-magnetic').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var x    = (e.clientX - rect.left - rect.width  / 2) * 0.3;
        var y    = (e.clientY - rect.top  - rect.height / 2) * 0.3;
        btn.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
      });

      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
      });
    });
  }

  /* ── Sphere Parallax ────────────────────────────────── */
  function initParallax() {
    if (isMobile) return;

    var wrap = document.getElementById('sphere-parallax');
    if (!wrap) return;

    var tx = 0, ty = 0, cx = 0, cy = 0;

    document.addEventListener('mousemove', function (e) {
      tx = (e.clientX / window.innerWidth  - 0.5) * 24;
      ty = (e.clientY / window.innerHeight - 0.5) * 24;
    });

    function tickParallax() {
      cx = lerp(cx, tx, 0.055);
      cy = lerp(cy, ty, 0.055);
      wrap.style.transform = 'translate(' + cx + 'px, ' + cy + 'px)';
      requestAnimationFrame(tickParallax);
    }
    tickParallax();
  }

  /* ── Chip Stagger ───────────────────────────────────── */
  function initChipStagger() {
    document.querySelectorAll('.chip-group').forEach(function (group) {
      var chips = group.querySelectorAll('.chip');

      chips.forEach(function (chip, i) {
        chip.style.opacity   = '0';
        chip.style.transform = 'translateY(10px) scale(0.94)';
        chip.style.transition =
          'opacity 0.45s ' + (i * 0.042) + 's cubic-bezier(0.16,1,0.3,1), ' +
          'transform 0.45s ' + (i * 0.042) + 's cubic-bezier(0.16,1,0.3,1)';
      });

      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            chips.forEach(function (chip) {
              chip.style.opacity   = '1';
              chip.style.transform = 'translateY(0) scale(1)';
            });
            obs.unobserve(group);
          }
        });
      }, { threshold: 0.2 });

      obs.observe(group);
    });
  }

  /* ── Glass Nav ──────────────────────────────────────── */
  function initGlassNav() {
    var nav = document.querySelector('nav');
    if (nav) nav.classList.add('nav-glass');
  }

  /* ── Page Entrance ──────────────────────────────────── */
  function initPageEntrance() {
    document.body.style.opacity    = '0';
    document.body.style.transition = 'opacity 0.55s ease';
    requestAnimationFrame(function () {
      setTimeout(function () {
        document.body.style.opacity = '1';
      }, 30);
    });
  }

  /* ── Init ───────────────────────────────────────────── */
  function init() {
    initPageEntrance();
    initCursor();
    initScrollReveal();
    initCardTilt();
    initMagnetic();
    initParallax();
    initChipStagger();
    initGlassNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
