window.Components = window.Components || {};

window.Components.footer = {
  render() {
    return `
      <footer class="border-t border-slate-200 py-8">
        <div class="max-w-7xl mx-auto px-10 flex items-center justify-between">
          <p class="text-slate-400 text-sm font-mono">© 2026 Yago Almeida. Todos os direitos reservados.</p>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
            <span class="text-slate-400 text-sm font-mono">Conexão segura</span>
          </div>
        </div>
      </footer>`;
  },
};
