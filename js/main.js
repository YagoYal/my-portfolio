const { nav, hero, projects, about, stack, security, contact, footer } = window.Components;

document.getElementById('app').innerHTML = [
  nav.render(),
  hero.render(),
  projects.render(),
  about.render(),
  stack.render(),
  security.render(),
  contact.render(),
  footer.render(),
].join('');

contact.init();
