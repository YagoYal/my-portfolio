# Yago Almeida — Portfólio

Portfólio pessoal desenvolvido com HTML, CSS e JavaScript vanilla, organizado em componentes reutilizáveis e pronto para deploy estático.

## Stack

- **HTML5 + JavaScript** — sem framework, componentes via namespace global
- **Tailwind CSS** — build estático (sem CDN em produção)
- **Lucide Icons** — versão fixada com SRI
- **Google Fonts** — Inter
- **Formspree** — envio do formulário de contato (requer configuração)

## Estrutura

```
my-portfolio/
├── index.html
├── assets/
│   └── curriculo.pdf          # CV para download
├── css/
│   ├── base.css               # reset, body, scroll
│   ├── animations.css         # @keyframes
│   ├── components.css         # .card, .chip, .nav-link, inputs
│   ├── input.css              # entrada do Tailwind CLI
│   └── tailwind.css           # build gerado (não editar)
├── js/
│   ├── config.js              # endpoint do Formspree
│   ├── main.js                # orquestrador
│   ├── data/
│   │   ├── stack.js
│   │   ├── projects.js
│   │   └── security.js
│   └── components/
│       ├── hero.js
│       ├── about.js
│       ├── stack.js
│       ├── security.js
│       ├── projects.js
│       ├── contact.js
│       ├── footer.js
│       └── nav.js
├── netlify.toml               # headers de segurança (Netlify)
├── vercel.json                # headers de segurança (Vercel)
├── tailwind.config.js
└── package.json
```

## Rodando localmente

Abra `index.html` diretamente no browser — não requer servidor.

## Build do CSS

Necessário após adicionar novas classes Tailwind:

```bash
npm install
npm run build:css
```

## Formulário de contato

1. Crie uma conta gratuita em [formspree.io](https://formspree.io)
2. Crie um novo form e copie o ID gerado
3. Abra `js/config.js` e substitua `YOUR_FORM_ID`:

```js
formspreeEndpoint: 'https://formspree.io/f/SEU_ID_AQUI',
```

## Deploy

### Vercel

1. Suba o projeto no GitHub
2. Importe o repositório no Vercel
3. **Framework Preset:** `Other` — sem build command, sem output directory
4. Deploy

Os headers de segurança (CSP, X-Frame-Options, etc.) são aplicados automaticamente via `vercel.json`.

### Netlify

1. Suba o projeto no GitHub
2. Importe no Netlify → **Build command:** vazio, **Publish directory:** `.`
3. Deploy

Headers aplicados via `netlify.toml`.

## Segurança aplicada

- Lucide com versão fixada (`0.446.0`) e hash SRI
- Tailwind servido como arquivo estático local
- Headers HTTP: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `CSP`, `Permissions-Policy`
- Formulário com honeypot anti-bot e validação client-side
- Links externos com `rel="noopener noreferrer"`
