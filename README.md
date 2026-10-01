# Stackwell — digital studio website

A single-page marketing site for a digital services studio: websites, web &amp; app
development, AI solutions &amp; automation, Meta ads, and the infrastructure stack behind all of it.

Built with **Next.js 16 (App Router) + Tailwind CSS v4**, no other runtime dependencies, fully
static output, and no third-party scripts.

```
npm install
npm run dev      # http://localhost:3000
npm run build    # static export of / and /sitemap.xml
```

## What's in it

| Section | Notes |
| --- | --- |
| Hero | Display headline, animated product mock (Lighthouse rings, bar chart), count-up stats |
| Stack marquee | Two counter-scrolling rows of the technologies used |
| Services | The 44 services as a nested accordion **with live search** and category quick-jump chips |
| How we work | Four commitments + an "honest part" panel |
| AI demo | Interactive sample: pick a question, watch the assistant type its answer and log the automations |
| Work | Three case studies with real metrics and hover states |
| Process | Five steps with a connecting timeline |
| Stack | Infrastructure groups, a technology/use-case table and a 13-term plain-English glossary |
| Pricing | One-time vs monthly switch, three tiers, add-ons and the fine print |
| Testimonials, FAQ | Quotes with aggregate rating, eight-question accordion |
| Contact | Validated brief form (client-side only) with success state, WhatsApp/call/email channels |

## Design notes

- **Light-first "premium tech"**: porcelain background, white cards, hairline borders, one strong
  blue (`#2440ea`) with a violet→cyan gradient used sparingly for emphasis.
- **Dark theme** mirrors every token; the toggle persists to `localStorage` and is applied by an
  inline script before paint, so there is no flash of the wrong theme.
- **Accordion** keeps the original `index.html` mechanism — `grid-template-rows: 0fr → 1fr`
  animation with an overflowing inner wrapper, and a `+/−` mark whose vertical stroke collapses.
  No height measuring, no layout thrash.
- **Motion** is CSS-first: scroll reveals come from one `IntersectionObserver` (`RevealFx`) that
  adds `.in` to `[data-reveal]` nodes. Hidden states are gated behind `html.js`, so content is
  readable even if scripts never run. Everything honours `prefers-reduced-motion`.
- **Cascade layers**: every custom class lives in `@layer components`, so utilities such as
  `p-4` or `bg-panel2/60` still override `.card`.
- Fonts (Sora / Inter / JetBrains Mono) load from Google Fonts via a hoisted `<link>` with a full
  system fallback stack — the site looks right even when the webfonts can't be fetched.

## Structure

```
src/
  app/          layout.jsx (metadata, theme, JSON-LD), page.jsx (section order), globals.css,
                icon.svg, robots.js, sitemap.js
  components/   one file per section + Icons.jsx, Motion.jsx (reveal & count-up), SectionHead.jsx
  data/site.js  all copy and service data — edit here, the site re-renders
public/media/   case-study imagery
```

All client data (clients, metrics, prices, phone numbers) is illustrative placeholder content for
the demo.
