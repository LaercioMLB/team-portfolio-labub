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
Design system source: `design-system/tokens.css` (aprovado em 2026-11-25; o site lê esses tokens: `src/app/globals.css` importa o `tokens.css`). Guia visual: `design-system/guide-foundations.html`; o guia no pen.dev (`design-system/labub.pen`) espelha o `tokens.css` com os mesmos nomes (registro em `design-sync.json`).
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
- **Movimento contido:** só onde ajuda (chegadas e mudanças). O limite do site é: a entrada única do hero (2,4s, uma vez por carregamento) com a luz que responde ao hover, e o carrossel de métricas. Fumaça do cursor removida em 2026-11-25. Tudo para com "reduzir movimento".
- **Tema:** escuro no site. **Também precisa de uma versão clara** para propostas em PDF, documentos e e-mail.
- **Ícones:** um set só, em linha de 2px (Lucide no lugar dos emojis, decidido em 2026-11-25).
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
- 2026-11-25 — Fundações aprovadas (`design-system/tokens.css`, tema escuro e claro) com as 8 decisões: índigo de texto pequeno `#818CF8`; 4 cinzas de texto; hover de peça com borda só na borda índigo; tags com raio único de 6px; fundo oficial `#080808`; um set de ícones em linha de 2px (Lucide) no lugar dos emojis; estrelas âmbar e bolinhas de semáforo saem; tema claro com botão principal `#0D0D0D` e índigos do kit.
- 2026-11-25 — Design system importado para o pen.dev (`design-system/labub.pen`): 84 variáveis com temas dark/light, guias de cor e de tipo/escalas, componente Button (primary · secondary × md · lg × 6 estados) e índice. 15 tokens sem tipo no pen.dev (tracking, sombras, durações, ease, measure) ficaram como texto no guia; mono vira JetBrains Mono no pen.dev.
- 2026-11-25 — Site migrado para os tokens: `globals.css` importa `design-system/tokens.css` e registra os nomes no Tailwind (`@theme inline reference`), sem duplicar valores. 206 classes trocadas nos componentes: cores soltas viram tokens (`bg-surface`, `text-text-muted`, `border-border`…), eyebrows passam a `--color-accent-text`, estrelas e bolinhas de semáforo saem da cor (decisão 7), raios entram na escala (`rounded-md` 8, `-lg` 12, `-xl` 16; tags em `rounded-sm` 6), tamanhos iguais aos tokens viram `text-eyebrow`, `text-body-sm`… Tokens antigos (`--color-card`, `body`, `faint`, `muted`, `subtle`, `dimmed`) removidos.
- 2026-11-25 — Novos componentes aprovados: **Tab** (6 estados, 44px, só nas abas da home; hover com tom, sublinhado sempre presente) e **Index item** (5 estados, barra de 2px à esquerda; coluna fixa no desktop e sumário no celular, para a /servicos). A /servicos usa índice, não abas — a pessoa pediu. Abas da home migradas para a Tab, com ícones Lucide (`src/components/AreaIcon.tsx`, desenhos copiados do Lucide em vez de instalar a dependência).
- 2026-11-25 — Página `/servicos` desenhada no pen.dev (quadros 01–05 em `design-system/labub.pen`): página longa com as 4 áreas, índice em coluna fixa no desktop e sumário no topo no celular — a pessoa escolheu índice em vez de abas. Cada área: resumo, os 6 serviços em 2 colunas (1 no celular) e um secundário "Falar sobre <área>". Um principal só ("Fale com a gente", no topo); o fechamento oferece WhatsApp e e-mail como secundários, como na home.
- 2026-11-25 — Textos da /servicos: "Quatro frentes. Um time só."; "Conta o que você precisa. A gente monta o time."; prova sob o botão "7 especialistas no time · resposta em até 24h" (números que o site comprova). Textos ajustados no self-check para não deixar palavra sozinha na última linha no celular.
- 2026-11-25 — Logo virou componente no pen.dev (`Logo`), com os vetores do `Logo.tsx` e cores em tokens (`--color-accent` e `--color-text`), então no tema claro o "la" fica grafite, como no kit.
- 2026-11-25 — Hero da home ganhou "Do zero ao deploy" à direita do texto (`src/components/HeroFlow.tsx`; desenho em `labub.pen` › 06 e 07): caminho com 6 paradas (Ideia → UX Design → Frontend → FullStack → DevOps → No ar), entrada única e rápida (400ms por parada) e descanso em "No ar"; hover ou Tab leva a luz até a parada (350ms) e volta ao sair (250ms). Escolhido entre 3 direções (coruja em luz; "time se montando", descartada por parecer tela de carregamento). A pessoa pediu a entrada única + hover.
- 2026-11-25 — Cada parada do hero é link (regra: nada reage a hover se não for clicável): UX/Frontend/FullStack/DevOps levam a `#servicos` com a aba da área aberta (evento `labub:service-area`); Ideia e No ar levam a `#contato`. Quando a /servicos existir, trocar para `/servicos#<área>`. No celular o mapa vira uma fileira compacta abaixo do botão, completa, sem hover.
- 2026-11-25 — Fumaça do cursor removida (`SmokeCanvas`) para o hero ser o único momento de luz da primeira tela.

## Open questions
- **/servicos no código:** desenhada, ainda não construída. Ao construir, trocar os links do hero (`HeroFlow.tsx`, campo `href`/`area`) para `/servicos#<área>`. A nav do site aponta "Serviços" para `#servicos` da home; com a página nova, o link vai para `/servicos`? A home mantém a seção com abas como resumo? O mockup antigo mostra `labub.dev/servicos/<área>`: redirecionar para `/servicos#<área>`?
- **Valores ainda soltos no site:** glows sem token (CTA índigo 8%, fundo do "Como funciona" índigo 3%, linha do card do time índigo 50%), tamanhos de título responsivos (`text-[24px] md:text-[36px]`…) e 14/12,5/14,5px, cores de marca dos clientes nos cases e no Ip Logger (fora do sistema de propósito). O botão segue escrito à mão em 3 lugares e os ícones ainda são emojis (Lucide decidido).
- **Tema claro no site:** hoje só para PDF, documentos e e-mail (tokens prontos). O site também deve ter? sim
- **Prova de clientes:** as referências pedem faixa de logos e selo de prova; hoje há 3 cases e 1 depoimento. Quais clientes podem aparecer com logo?
- **Números das métricas:** 40+ projetos, 8+ clientes ativos, 98% de satisfação e 100% no prazo ainda não foram confirmados.
- **Objeto 3D / produto mostrado:** a Labub não tem um produto único. Mostrar o quê (telas de cases? o mascote?) — a decidir.
- **Domínio e e-mail:** o mockup mostra `labub.dev`, o contato é um Hotmail pessoal. Qual domínio e e-mail oficiais?
- **`brand/` vazio:** o `BRAND_GUIDE.md` e as logos que estavam em `brand/` sumiram do disco; o kit original segue em `labub-marca/labub-logo/entrega/`.
- **Rodapé "© 2025"** e itens 7 a 13 da revisão da home ainda em aberto.
