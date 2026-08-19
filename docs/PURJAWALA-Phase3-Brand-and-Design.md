# PURJAWALA — Phase 3: Brand Strategy & Design System

Companion to the homepage preview (`purjawala-website.html`) and the
illustrated part dataset (`purjawala-parts-dataset.json`).

---

## A. Brand Strategy

### Positioning

> **A weaving shed doesn't buy a spare part. It buys the loom running again.**

Everything follows from that. The competition in this trade is not other parts
suppliers — it is the hour the machine stands idle while someone works out which part
it needs. Purjawala wins by being the fastest, clearest route from *"something broke"*
to *"the right part is on its way."*

**The site is built around the catalogs, not around a search box.** A part search was
considered and dropped: only 38% of catalogued parts currently carry a name (see Section D),
so a search would return nothing for a large share of the range — worse than no search at
all. The five catalogs are complete, accurate and already trusted by the trade, so the site
puts them at the centre and makes them free to read and download by anyone.

Search becomes worth building once the parts are named. Until then, the catalog is the
product finder.

### Brand hierarchy (locked)

```
PURJAWALA                              ← the digital brand, the wordmark
D.T. Manufactures & Traders            ← the firm, carries the credibility
A Unit of Batra Machine · Since 2001   ← the name the trade already knows
Sister concern: M/S Tera Chand Batra & Son's · Since 1949
```

Purjawala leads. D.T. Manufactures & Traders sits under it in every lockup, never
alone. Batra Machine appears in the footer, the About page, and the contact page —
enough that a long-standing customer recognises the business, not so much that the new
brand is diluted. **V-Tex India does not appear anywhere on the site.**

### Tagline options considered

| | Line | Read |
|---|---|---|
| 1 | **Keeping looms running.** | Buyer-side, plain, true. Short enough for a rubber stamp. |
| 2 | Find the part. Get the loom running. | Two verbs, states the site's job. Strong as a headline, long as a tagline. |
| 3 | Generations of engineering. Built for the next generation. | Warm, but it talks about us, not about the customer's problem. |
| 4 | Built on experience. Engineered for industry. | Solid, slightly generic — could belong to any engineering firm. |
| 5 | Engineering parts. Textile expertise. Generations of trust. | Three claims, no focus. |
| 6 | Precision parts for weaving. | Accurate, forgettable. |
| 7 | Know the loom. Know the part. | Nice symmetry, but it's a boast rather than a benefit. |
| 8 | Manufactured, imported, traded. Since 1949. | Descriptive, not memorable. |

**Recommendation — two lines doing two jobs:**

- **Tagline (footer, cards, catalogs, print): "Keeping looms running."**
- **Homepage headline: "Find the part. Get the loom running."**

Same voice, same idea, different registers. The tagline states what the business is
for; the headline states what the page is for. Neither overclaims, and both would sit
comfortably on the 2027 printed catalog.

### Voice

Plain, technical, unhurried. Sentences a fitter and a European procurement manager both
read the same way. No "revolutionising", no "one-stop solution", no exclamation marks.
Where the catalog has a real fact — a dimension, a tooth count, an OEM number — say it;
where it doesn't, say nothing rather than fill the space.

---

## B. Design Direction

**Dark industrial, built from the trade's own materials.**

The reference point is not a tech website with a dark theme. It is the workshop:
blued gun-metal, machined aluminium, bronze bushes, printer's ink on a catalog cover.
The palette below is taken from those materials and from the existing catalog artwork —
not chosen from a general-purpose dark theme.

### The signature: floating machined components

The page opens with real mechanical geometry — gears, a bearing race, a shaft, a bronze
pinion — suspended in space, turning slowly, drifting, and shifting with the pointer.
Machined steel and bronze under workshop light, with nothing else competing for attention.

Below it, the actual catalog components float on the same gentle rhythm.

**No grid lines anywhere.** Structure comes from spacing, surface tone and rounded panels
rather than hairline rules. Sections separate by breathing room and background shifts,
never by borders. The result is quieter and cleaner, and it keeps the eye on the parts.

### E. Colour palette

| Token | Hex | Role |
|---|---|---|
| `--gr-950` | `#0B0E10` | Page base — blued dark, not pure black |
| `--gr-900` | `#111518` | Raised surface, hover states |
| `--gr-850` | `#161B1F` | Input fields, panels |
| `--line` | `#262F35` | Structural borders, grid |
| `--line-soft` | `#1A2126` | Warp threads, section rules |
| `--steel` | `#8B979F` | Secondary text, labels |
| `--steel-2` | `#B9C3C9` | Body copy on dark |
| `--bone` | `#E9EDEF` | Primary text — machined aluminium, not white |
| `--ink` | `#EF6A1E` | **Accent.** CTAs, part numbers, active states |
| `--bronze` | `#B08D57` | Legacy, timeline, counts — the second metal |

Two decisions worth stating:

**The orange is not decorative — it is your existing ink.** The D.T. masthead on all
five catalog covers is an orange block. Carrying that colour onto the site means the
customer holding the printed catalog sees the same brand. It appears only on calls to
action, active states and part numbers; nowhere else.

**Bronze is the second metal.** A single accent on a dark ground is the most common
look in modern web design and it would have made this site anonymous. Bronze — taken
straight from the catalog's gun-metal bushes and the *83 Teeth Gear Bronze* — carries
the legacy and heritage material, so the orange never has to do sentiment as well as
action. Two metals, each with one job.

### F. Typography

| Role | Face | Setting |
|---|---|---|
| Display | **Archivo** | width 74–84, weight 700–800, uppercase, tight leading |
| Body / UI | **Archivo** | width 100, weight 300–600 |
| Data | **IBM Plex Mono** | 400–600 — part numbers, dimensions, catalog refs, counts |

**Why Archivo.** The typeface in your printed catalogs is *Trade Gothic LT Bold
Condensed No. 20* — I found it embedded in all five PDFs. Archivo is the closest
open, web-licensed face in that American-gothic lineage, and because it carries a
variable width axis, the same family gives us the condensed catalog masthead voice for
headlines and a normal-width, highly readable body face. One family, direct continuity
with the print, no licence cost.

**Why part numbers are always mono.** `JD-3214`, `263mm × 168mm × 110mm`, `28T` — these
are data, and setting them in a monospaced face makes them scannable, unambiguous
(`0` vs `O`, `1` vs `l`) and instantly recognisable as *the thing you can search for*.
It becomes the brand's numeric voice.

### G. Animation strategy

Motion communicates precision, or it doesn't appear.

- **Scroll reveals** — one short fade-and-rise per section, 320ms, staggered by 40ms
- **The weft** — the ink thread across a part card on hover, 450ms ease-out
- **Hairline draw** — section rules draw left-to-right when they enter the viewport
- **Timeline** — 1949 → 2001 → Today advances as it scrolls into view
- **Counters** — only on numbers that are factually true (part counts, catalog counts, 1949)
- **Page transitions** — a 180ms crossfade, nothing more

Not used: bouncing, particles, parallax on text, anything that moves continuously in the
background, anything that delays content. `prefers-reduced-motion` disables all of it and
the page loses nothing but the flourish.

### H. 3D strategy

Built and shipped in the hero.

A real-time WebGL scene of machined components — three gears with correct tooth geometry,
a bearing race, a shaft and a bronze pinion — floating, rotating slowly and responding to
the pointer. Steel and bronze materials lit by a small procedural workshop environment, so
the metal genuinely reflects rather than reading flat.

Engineered so it never becomes a liability:

- **three.js is bundled into the page**, not loaded from a CDN — it cannot fail to load
- Rendering **pauses** whenever the scene scrolls out of view
- Pixel ratio and detail are **reduced on phones**
- `prefers-reduced-motion` **freezes it** to a still composition
- If WebGL is unavailable, a soft gradient stands in and nothing breaks

The scroll-driven exploded component from the brief remains available as a later addition.

## C. What's in the preview

Open `purjawala-website.html` in any browser. Everything is inside that one file — the five
catalogs, the PDF reader, the 3D engine and the product images. No folders to assemble, no
server, no internet connection required.

Note: embedding the catalogs is a preview technique so the single file works anywhere. The
production site will serve them as normal static files at full resolution.

Everything in it is real:

- The eight showcased parts are **actual components extracted from your catalogs**
- **All five catalogs open and download for real** — no form, no registration
- The transparent product images were cut out of the PDFs programmatically — this is the
  same pipeline that will populate all ~1,170 part pages
- Part counts per machine family come from the extraction, not from estimates
- The address, phone numbers and email are taken from the catalog covers
- Placeholders are visible in bronze: `[ADD WHATSAPP NUMBER]`, `[ADD BUSINESS HOURS]`

---

## D. Two findings from building the dataset

**1. The product images are ~170px wide.** Fine at thumbnail size, soft on a part detail
page. Re-photographing all 1,170 parts isn't realistic, but photographing the **top 100
fastest-moving parts** against a plain background is a weekend's work with a phone and a
sheet of white paper, and it would visibly lift the whole site. Worth putting on someone's
list.

**2. Only 38% of illustrated parts have a name.** I extracted 553 parts with images across
the four text-layer catalogs; 211 of them carry a descriptive name, the rest carry only a
code. The Special Parts catalog is the extreme case — 119 code-only entries against 29
named ones.

This matters more than it looks. Nobody searches Google for "V-211", but people do search
for *"vamatex plus 9000 bevel gear"*. An unnamed part is invisible to search engines and
hard to browse to. Naming them doesn't need engineering knowledge in most cases — someone
looking at the photo can write "Bevel gear, 15T" or "Timing pulley" in seconds. **A person
naming 30 parts an hour clears the entire backlog in about a week**, and it is probably the
single highest-return task in the project.

I'd suggest we ship with what we have and add names in batches — the data structure takes
them without a rebuild.

---

## E. Next

Phase 4 is the full homepage build in Next.js, then the catalog and part systems on top of
the extracted dataset.

Still needed from you, none of it blocking the build:

1. **WhatsApp number** — which of 93555-52807 / 94164-81383 / 93555-52700?
2. **Public email** — `info@purjawala.com` only, or both addresses?
3. **Business hours** for the contact page
4. **Workshop or team photographs** — the About and Manufacturing pages have slots waiting
5. **English only, or English + Hindi?** — cheap to decide now, expensive to retrofit

And one thing to look at rather than decide: open the preview on your phone as well as a
laptop. Most of this audience will meet the site on a phone, standing next to a stopped loom.
