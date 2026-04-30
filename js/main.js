const { hero, about, stack, security, projects, contact, footer, nav } = window.Components;

document.getElementById('app').innerHTML = [
  hero.render(),
  about.render(),
  stack.render(),
  security.render(),
  projects.render(),
  contact.render(),
  footer.render(),
  nav.render(),
].join('');

lucide.createIcons();
nav.init();
contact.init();
