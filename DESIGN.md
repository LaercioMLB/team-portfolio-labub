# DESIGN.md · Labub

> Se este arquivo e o código discordarem, o código vale até a pessoa decidir. Anote o conflito em Open questions.

## Product
Site institucional da Labub, um time completo de tecnologia (frontend, backend, UX e DevOps) que leva projetos "da ideia ao deploy". Página única em Next.js: hero, métricas, serviços, time, como funciona, cases, open source, depoimentos e contato.
Quem usa: quem quer contratar um time de tecnologia, muitas vezes chegando pelo celular (Instagram, WhatsApp).
Trabalho principal da página: **levar a pessoa a falar com a gente** (WhatsApp ou e-mail), mostrando antes que o time é real e já entregou.

## Audience and voice
Donos de negócio, fundadores e gestores, **muitas vezes sem saber de tecnologia** ("sem precisar saber de tecnologia", `HowItWorks.tsx`).
Voz informal-profissional e brasileira, no estilo da Rocketseat e da Alura: fala com **você**, a marca é **"a gente"**, frases curtas, termo técnico sem rodeio (deploy, DevOps), humor de bastidor só nas falas do time.
Títulos de 3 a 7 palavras com ponto final; sem exclamação e sem emoji no texto. Botão diz o que acontece ("Chamar no WhatsApp", nunca "Clique aqui"). Só número que a página comprova.
Português (Brasil): datas 23/11, horas 18h30, dinheiro R$ 4.500.

## Mood
Words: confiável, moderna, rápida, profissional, criativa (briefing da marca).
Never like: SaaS genérico (degradê roxo, ilustração 3D, blobs em toda seção); agência espalhafatosa (animação por todo lado, scroll sequestrado); portfólio com cara de terminal de dev (VS Code, texto verde, só fala com outro dev). Também nunca: clima de venda com urgência (contador, "50% OFF") nem tela carregada.

## Brand
Design system source: `design-system/tokens.css` (rascunho v0.1, ainda não aprovado; o site usa `src/app/globals.css` `@theme`). Guia visual: `design-system/guide-foundations.html`.
- **Logo:** dois "b" espelhados formam uma coruja; o mesmo "b" constrói "la" + "bub". Vetor, sem fonte. No site: `src/components/Logo.tsx` (horizontal, fundo escuro), 28px no celular e 36px no desktop. Kit completo em `labub-marca/labub-logo/entrega/` (fora do repo), com `GUIA-DE-USO.md`: área de proteção de um olho da coruja, mínimo 96px (horizontal) e 16px (símbolo), não mudar as cores de "la"/"bub".
- **Cor:** tema escuro. Fundo `#080808`, card `#0D0D0D`, texto `#F0F0F0`. **Um acento só: índigo `#6366F1`**, usado como luz (glow, grid 4%, linhas), não como tinta. Texto informativo nunca abaixo de `#888`.
- **Tipo:** Inter, pesada e apertada (títulos 800–900 com tracking negativo); eyebrow em caixa alta, 11px, +0,18em.
- **Linguagem visual:** cards com borda de 1px translúcida e sem sombra; mockup de navegador; grid índigo de 48px; glow radial num canto; título em três tratamentos (sólido, vazado, degradê índigo → azul); título em duas cores (segunda metade apagada); números grandes vazados ("01").
- **Mascote:** coruja do kit, só em usos grandes; nunca no lugar do logo.

## References
- **Vercel** (vercel.com) — take: contenção (quase só preto e branco, muito espaço, um ponto de luz por tela); dois botões claros no hero (principal branco cheio + secundário só com borda); produto real mostrado em vez de ilustração. Avoid: nada.
- **Resend** (resend.com) — take: título enorme dominando o hero; objeto 3D escuro que dá profundidade sem cor; faixa de logos de clientes como prova. Avoid: título serifado (a Labub é Inter).
- **Rocketseat** (rocketseat.com.br) — take: roxo/índigo sobre escuro; cards grandes com luz sutil; voz brasileira de dev; selo de prova sob o botão ("+725 mil alunos"). Avoid: nada.
- **Alura** (alura.com.br) — take: prova em lista (bullets curtos com ícone dizendo o que a pessoa ganha); voz brasileira direta. Avoid: urgência de venda (contador, "% OFF", faixa de campanha); tela carregada.

## Constraints
- **Celular primeiro:** desenhar em 375px antes do desktop (1280px). Sem rolagem horizontal.
- **WCAG AA:** texto ≥ 4,5:1 (títulos grandes ≥ 3:1), foco visível só pelo teclado (`:focus-visible`), alvos de toque ≥ 44px.
- **Movimento contido:** só onde ajuda (chegadas e mudanças). Fumaça do cursor e carrossel de métricas são o limite. Tudo para com "reduzir movimento".
- **Tema:** escuro no site. **Também precisa de uma versão clara** para propostas em PDF, documentos e e-mail.
- **Ícones:** um set só, em linha de 2px (proposta: Lucide no lugar dos emojis; ver Open questions).
- **Uma ação principal por tela:** botão branco "Fale com a gente →".

## Decisions log
- 2026-11-23 — Tokens de texto `body` (#888) e `faint` (#6b6b6b) substituem #333/#444/#555/#666 — texto informativo estava entre 1,6:1 e 3,5:1.
- 2026-11-23 — Métrica "Especialistas no time" de 10 para 7 — tem que bater com a seção Time.
- 2026-11-23 — Carrossel de métricas mantido, mas legível: opacidade total, sem blur, 40s por volta, pausa no hover, parado com "reduzir movimento" — a pessoa pediu o movimento; os números são a prova da página.
- 2026-11-23 — Hero ganha o botão principal "Fale com a gente"; o da nav vira secundário (só borda) — uma ação principal por tela.
- 2026-11-23 — Seções Services e ServicesBrowser fundidas; fica o navegador com abas (`id="servicos"`) — diziam a mesma coisa duas vezes.
- 2026-11-23 — WhatsApp: "Clique aqui" vira "Chamar no WhatsApp" — o botão diz o que acontece.
- 2026-11-23 — Inter confirmada renderizando no site (`next/font` registra a família como "Inter").
- 2026-11-23 — Referências e "nunca assim" definidos com a pessoa (seções Mood e References).
- 2026-11-23 — DESIGN.md aprovado.

## Open questions
- **As 7 decisões das fundações** (no fim de `design-system/guide-foundations.html`) esperam aprovação: índigo de texto pequeno `#818CF8`; 4 cinzas de texto; hover com borda só na borda; tags com raio único de 6px; fundo oficial `#080808`; Lucide no lugar dos emojis; estrelas âmbar e bolinhas de semáforo saem.
- **Tema claro:** escopo e paleta ainda não definidos (só PDF, documentos e e-mail, ou o site também?). O kit tem a logo de fundo claro.
- **Prova de clientes:** as referências pedem faixa de logos e selo de prova; hoje há 3 cases e 1 depoimento. Quais clientes podem aparecer com logo?
- **Números das métricas:** 40+ projetos, 8+ clientes ativos, 98% de satisfação e 100% no prazo ainda não foram confirmados.
- **Objeto 3D / produto mostrado:** a Labub não tem um produto único. Mostrar o quê (telas de cases? o mascote?) — a decidir.
- **Domínio e e-mail:** o mockup mostra `labub.dev`, o contato é um Hotmail pessoal. Qual domínio e e-mail oficiais?
- **`brand/` vazio:** o `BRAND_GUIDE.md` e as logos que estavam em `brand/` sumiram do disco; o kit original segue em `labub-marca/labub-logo/entrega/`.
- **Rodapé "© 2025"** e itens 7 a 13 da revisão da home ainda em aberto.
