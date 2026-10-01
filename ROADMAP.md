## ROADMAP DELLE PROSSIME COSE DA FARE

### PROBLEMI ATTUALI

- Non è stata implementata **nessuna cookies policy**. Domanda: serve davvero in questo sito, rischio problemi e rogne di qualche tipo a non averla? ovviamente sarebbe meglio fosse gratis

### PROSSIME IMPLEMENTAZIONI
- valuta l'acquisto di un **dominio personalizzato**: istituzionalizza meglio il sito ed evita che la gente si faccia un'idea sbagliata delle mie abilità leggendo "sito-Vercel-hosted" nell'url.
  Dopo il cambio dominio, aggiorna l’host `fabiotognaa-personal-portfolio.vercel.app` in:
  - `Frontend/index.html` — `canonical`, `og:url`, `og:image` (+ `twitter:*` se presenti)
  - `Frontend/public/sitemap.xml` — tutti i `<loc>`
  - `Frontend/public/robots.txt` — riga `Sitemap:`
  - `package.json` → `homepage`, `README.md` (badge/demo)
  - dashboard Web3Forms (domain allowlist) e Vercel Domains