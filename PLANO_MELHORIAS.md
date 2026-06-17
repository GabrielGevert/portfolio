# Plano de Melhorias - Portfolio Gabriel Gevert

Documento que prevê todos os ajustes e adições combinados. Status: `[ ]` pendente, `[~]` em andamento, `[x]` concluído.

---

## Legenda de prioridade
- **P0**: base / impacto alto, fazer primeiro
- **P1**: melhorias importantes
- **P2**: incremento / polimento

---

## 1. Títulos em roxo `[x]` (P0)
Removido o gradiente de texto (efeito "IA") de todos os títulos e trocado por cor sólida.

- Cor escolhida: `var(--tints_primary_light)` (#9D8DF2), roxo claro com bom contraste no fundo escuro (ajuda também a acessibilidade, ponto 6).
- Arquivos: `header`, `opening`, `about me`, `stacks`, `projects`, `contact`, `menu-header`, `stacks-card`.
- Gradiente mantido em botões, bordas de card e detalhes (ali funciona como acento, não como texto).

## 2. Ponto 4 - Renomear pasta com espaço `[ ]` (P0)
`sections/about me/` tem espaço no nome, fonte de bug em scripts/imports.

- Renomear para `sections/about-me/`.
- Atualizar imports em `src/app/page.tsx` (e onde mais referenciar).
- Validar build após renomear.

## 3. Ponto 5 - SEO forte `[ ]` (P0)
Hoje o `layout.tsx` só tem `title` e `description`. Plano:

- `metadataBase` com a URL de produção.
- Open Graph completo (title, description, url, siteName, locale `pt_BR`, type `website`, imagem 1200x630).
- Twitter Card (`summary_large_image`).
- `keywords`, `authors`, `creator`.
- `alternates.canonical`.
- `robots` (index, follow).
- Favicon / ícones (`icon`, `apple-touch-icon`) e `manifest.webmanifest`.
- Imagem social `public/og-image.png` (1200x630) - **preciso que você gere/forneça**, ou crio um placeholder.
- `robots.txt` e `sitemap.xml` (via `app/robots.ts` e `app/sitemap.ts` do Next).
- JSON-LD `Person` (structured data) para rich results no Google.
- Ajustar caminhos hardcoded `/portfolio/` (fontes em `global.css`) para não quebrar SEO/assets.

## 4. Ponto 6 - Acessibilidade `[ ]` (P1)
- Contraste: validar textos cinza (`--neutrals_gray` #BDBDBD / `--neutrals_gray_dark`) sobre o fundo escuro; subir tom onde reprovar no WCAG AA.
- `alt` descritivo em todas as imagens (projetos, stacks, avatar).
- `aria-label` em links/botões só com ícone (redes sociais, menu).
- Estado de foco visível (`:focus-visible`) em links e botões.
- `prefers-reduced-motion`: desligar/diminuir as animações GSAP para quem pede menos movimento.
- Hierarquia de headings (um `h1`, depois `h2`/`h3` em ordem).
- `scroll-margin-top` nas âncoras para o header fixo não cobrir o título.

## 5. Ponto 7 - `lang` dinâmico (i18n) `[ ]` (P1)
`<html lang="pt-BR">` é fixo, mas existe `LanguageContext` (PT/EN).

- Sincronizar o atributo `lang` do `<html>` com o idioma selecionado (via efeito no client que ajusta `document.documentElement.lang`).
- Garantir que o toggle de idioma também atualize textos de `aria-label` e `metadata` quando possível.

## 6. README sobre mim `[ ]` (P2)
Reescrever o README focado em **quem é o Gabriel** (não no que cada seção faz):

- Apresentação: Full Stack & Cloud Developer, Curitiba-PR.
- Stacks principais e áreas (web, cloud/AWS-GCP, IA, mobile/Flutter, Unity).
- Onde trabalha hoje (SAMPI, L8) e link do LinkedIn/GitHub.
- Link do portfólio ao vivo.
- Seção curta de "como rodar" no final (sem detalhar cada seção da página).

## 7. Animações de entrada com GSAP `[ ]` (P1)
- Instalar `gsap` (+ `@gsap/react` para o hook `useGSAP` em React 19).
- ScrollTrigger para revelar seções ao entrar na viewport (fade + slide-up suave).
- Stagger nos cards (stacks, projetos, timeline).
- Animação de entrada do hero (opening) no load.
- Respeitar `prefers-reduced-motion`.
- Manter sutil (sem exagero), para não parecer "template".

## 8. Botão de download de CV `[ ]` (P1)
- Adicionar o PDF em `public/` (já existe `Currículo - PORTUGUÊS.pdf`; renomear para algo sem acento/espaço, ex: `gabriel-gevert-cv-pt.pdf`).
- Botão "Baixar CV" no hero (opening) e/ou no header, com `download` e `aria-label`.
- Se mantiver PT/EN, considerar dois arquivos (PT e EN) conforme idioma.

## 9. Analytics - CANCELADO
- Você decidiu não usar analytics. Integração removida do projeto.
- Deploy segue no **GitHub Pages** (sem migração para Vercel por enquanto).

## 11. og-image `[x]`
- Imagem social gerada como PNG estático no build via `src/app/opengraph-image.tsx` (gradiente roxo da marca, nome e principais stacks), 1200x630.
- Usada automaticamente em Open Graph e Twitter Card.

## 10. Seção Experiência profissional + timeline `[ ]` (P1)
Nova seção `sections/experience/` com timeline vertical bonita (linha + nós + cards alternados no desktop, empilhado no mobile), entrada animada via GSAP.

- Adicionar ao `page.tsx` e ao menu de navegação.
- Componente de item de timeline reutilizável.
- Dados em arquivo/constante (ver abaixo).

### Dados da timeline (as 3 principais, mais recentes)
> Confirmado com você: L8 e SAMPI são concomitantes (ambas atuais).

1. **SAMPI (sampi.ai)** - Full Stack Developer - **Fev/2026 - Atual**
   - Plataforma de IA: orquestração de agentes, RAG / busca semântica, knowledge graph (Neo4j), integrações com Claude/Gemini.
   - Backend Node/Express em Google Cloud Run, Redis, segurança (rate limiting, CAPTCHA, JWT).

2. **L8 GROUP** - Full Stack Developer - **Out/2024 - Atual**
   - Soluções web de alta performance e escalabilidade.
   - React, Node.js, TypeScript, Docker, PostgreSQL, TypeORM, Laravel.

3. **Form&Fun** - `CARGO A CONFIRMAR` - `DATAS A CONFIRMAR`
   - ⚠️ Não consegui acessar seu LinkedIn (bloqueado para leitura automática) e a busca não trouxe os detalhes.
   - **Preciso que você me passe**: cargo, período (início/fim) e uma descrição curta (2-3 linhas) do que fez.

> Experiências mais antigas do currículo (Signotech, ISOCRM) ficam de fora da timeline principal, conforme combinado.

---

## Ordem de execução sugerida
1. (P0) Títulos roxos ✅ → Renomear pasta `about-me` → SEO forte
2. (P1) Seção de experiência + timeline → GSAP → botão CV → acessibilidade → lang dinâmico → analytics
3. (P2) README

## Decisões pendentes com você
- [x] Analytics: **cancelado** (sem analytics).
- [x] Deploy: **segue no GitHub Pages**.
- [x] Dados da **Form&Fun**: preenchidos (Full-Stack & Game Developer, fev/2025 - atual).
- [x] Imagem social: og-image gerada no build via `opengraph-image.tsx`.
