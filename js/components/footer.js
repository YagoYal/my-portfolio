window.Components = window.Components || {};

window.Components.footer = {
  render() {
    return `
      <footer class="py-8" style="border-top:1px solid rgba(255,255,255,0.07);position:relative;z-index:1;">
        <div class="reveal max-w-7xl mx-auto px-5 md:px-10 flex flex-col gap-2 md:flex-row items-center justify-between">
          <p class="text-sm font-mono" style="color:#475569;">© 2026 Yago Almeida. Todos os direitos reservados.</p>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-400 inline-block status-dot"></span>
            <span class="text-sm font-mono" style="color:#475569;">Conexão segura</span>
          </div>
        </div>
      </footer>`;
  },
};
