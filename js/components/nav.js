window.Components = window.Components || {};

window.Components.nav = {
  render() {
    return `
      <nav id="nav">
        <a href="#home" class="nav-logo">YA<em>_</em></a>
        <div class="nav-right">
          <ul class="nav-links">
            <li><a href="#origin">Origin</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#stack">Stack</a></li>
            <li><a href="#security">Security</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" class="nav-cta btn-mag"><span>Init contact →</span></a>
        </div>
      </nav>`;
  },
};
