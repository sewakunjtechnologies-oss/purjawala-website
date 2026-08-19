# PURJAWALA — Phase 1 Analysis & Phase 2 Information Architecture

**Prepared by:** SewaKunj Technologies LLP
**Project:** Official Purjawala website — D.T. Mfr. & Traders
**Status:** Pre-build. Approval required on Section 7 before Phase 3 begins.

---

## 1. Objective

Turn five printed 2026 spare-parts catalogs into a searchable digital catalog that a
weaving-shed owner, a maintenance fitter, or a procurement manager can use to identify a
part and raise an inquiry in under a minute — while presenting D.T. Mfr. & Traders as a
serious engineering business rather than a parts lister.

---

## 2. Verified Company Data

Everything below is taken directly from the catalog artwork. Nothing here is assumed.

### 2.1 Address (extracted from catalog front/back covers)

> **Opp. Indo Farm House, Shri Ram Marg, Sec. 25, HUDA, Panipat-132103 (Haryana) INDIA**

### 2.2 Contact block

| Field | Value | Source |
|---|---|---|
| Phone 1 | 93555-52807 | All five catalog covers |
| Phone 2 | 94164-81383 | Vamatex, Somet, Sulzer/TP600, Feeder covers |
| Phone 3 | 93555-52700 | Special Parts catalog cover **only** |
| Email 1 | info@purjawala.com | Sulzer/TP600 back cover |
| Email 2 | batra2deepak@yahoo.co.in | Sulzer/TP600 back cover |
| Website | www.purjawala.com | All covers |

### 2.3 Identity as printed

- **D.T. Mfr. & Traders** — masthead on every interior page
- **A Unit of Batra Machine** — sub-lockup under the masthead (note: *Machine*, singular)
- **V-Tex India** — a separate badge in the top-right corner of every interior page
- Descriptor line: *"Importers & Traders of All Kinds of Weaving & Suttleless Loom Spare Parts"*
- Catalog year: **2026** on all five

### 2.4 Catalog set

| Catalog | Pages | File size | Text layer | Codes recovered |
|---|---|---|---|---|
| Vamatex Spare Parts Catalog 2026 | 10 | 3.2 MB | Yes | 289 |
| Special Parts Catalog 2026 | 15 | 4.3 MB | Yes | 237 |
| Feeder Dobby Jacquard Spare Parts Catalog 2026 | 9 | 17.1 MB | Yes | 231 |
| Sulzer / TP600 Spare Parts Catalog 2026 | 13 | 3.5 MB | Yes | 197 |
| Somet Spare Parts Catalog 2026 | 9 | 23.7 MB | **No** | 243 (OCR) |
| **Total** | **56** | **51.8 MB** | | **~1,170 distinct codes** |

The 925 codes from the four text-layer catalogs are exact. The 243 Somet codes came from
OCR at roughly 85–90% recall, so the true Somet figure is likely 270–290. **Treat ~1,170 as
a floor, not a final number.**

### 2.5 Code families identified

| Prefix | Meaning | Count |
|---|---|---|
| V / V-xxxx | Vamatex general | 260 |
| JD-xxxx | Dobby & Jacquard | 146 |
| TP-xxx / TP-1xxx | Sulzer / TP600 | 171 |
| S / SE / ST / SA | Somet (incl. electronics) | 274 |
| F-3xxx | Feeder | 43 |
| VE-2xxx | Vamatex electronics | 42 |
| VP / VL / V9 / V4 | Vamatex P1001 / Leonardo / Plus 9000 / P401 | 98 |
| D1xxx | Dornier | 21 |
| GS-9xx | GS series | 19 |
| J-14xx | Dobby Jacquard machined | 31 |
| N-16xx | Nylon parts | 17 |
| C-8xx | C series | 16 |
| VW-16xx | Vendeville | 9 |
| P-15xx | Panther | 5 |
| M- / E- | Cross-reference codes | 44 |

### 2.6 Machine brands and models referenced inside the catalogs

Vamatex (P1001, P1001 ES, P1001 EK, Leonardo, Plus 9000, P401, K2000, Jambo) · Somet
(Thema 11, Thema 11E, Thema SE, Super Excel, Alpha, Mythos, Clipper, SM93) · Sulzer /
TP600 · Dornier · Panther · Vendeville · Van de Wiele · Bonas (200, 250, 500) · Stäubli
(JC4, JC5, JC6) · LGL (Progress) · IRO (Chrono X3) · Sanhe · Grosse · Fimtextile · Ciel ·
Elsy · Eltex · Teco · Telemecanique

---

## 3. Five Findings That Change the Build

### 3.1 The domain is already in the market — the site's first job is to be the catalog's twin

`www.purjawala.com` is printed on all five 2026 covers. Those catalogs are already sitting
on desks in weaving sheds. That single fact reorders the priorities: the highest-value
feature is not the 3D hero, it is a **search box that resolves `JD-3231` typed off a
printed page into a product record with an inquiry button.** Everything else supports that.

Recommendation: the search bar is present in the header on every page, not buried on a
products page.

### 3.2 44 parts carry two or three codes — search must resolve all of them

Confirmed examples: `F-3001 / F-435 A` · `JD-3202 / TP-615 / TP-652` · `JD-3230 / M-454` ·
`F-3005 / TP-647` · `S-2606 / M-469`. A fitter may hold an older catalog, an OEM number,
or a supplier's number.

Requirement: every part record carries a `partNumber` plus an `altPartNumbers[]` array.
Search matches on any of them; alternates resolve to the canonical URL via 301. Building
this later means rewriting the data layer — it goes in from day one.

### 3.3 The Somet catalog is a flat image — invisible to search engines and to our own site

Pages 2–9 of the Somet catalog have zero text layer. Consequences:

- Google cannot index a single Somet part number from the PDF
- The in-browser viewer cannot offer text search on it
- Its 243+ part records must be OCR'd and then **verified by hand**, because an OCR error
  in a part number is worse than a missing part — it produces a wrong quote

This is the largest single work item in the project and it is data entry, not development.
Budget it separately.

### 3.4 51.8 MB of PDFs cannot be served as-is

Somet alone is 23.7 MB and Feeder 17.1 MB. On a Panipat 4G connection that is a 60-second
wait, and mobile is where most of this audience is. Plan: compress to web-optimised
derivatives, serve page-by-page in a paginated viewer, and keep the full-resolution
original behind an explicit "Download PDF" button.

### 3.5 The brief and the catalogs describe two different businesses

The brief positions an engineering and manufacturing firm. The catalog masthead says
**"Importers & Traders of All Kinds of Weaving & Suttleless Loom Spare Parts."**

Both can be true — many firms in this trade import, trade, and machine parts to order. But
the website cannot claim manufacturing capability that the printed material does not
support, and an international buyer will notice the gap immediately. See Section 7 for the
question this raises.

Also flagged for correction, since these will appear across the site and in search results:

- **"Suttleless" → "Shuttleless"** (appears on every interior page of all five catalogs)
- **"Van de Weile" → "Van de Wiele"**
- Several product labels: "SELVEDGE" is printed "SELVEDGE"/"SELEVEDGE"/"SELVEDGE"
  inconsistently, "SEPARATOR" as "SEPRATOR", "KEYPAD" as "KAY PAD", "PULLEY" as "PULLY",
  "ECCENTRIC" as "CCENTRIC", "DISASSEMBLE" as "DISAAMBLE"

We should correct these on the website and supply a clean list for the 2027 print run.

---

## 4. Risks

| Risk | Severity | Mitigation |
|---|---|---|
| Trademark exposure — Vamatex, Somet, Dornier, Sulzer, Bonas, Stäubli, LGL, IRO and others are third-party marks | **High** | Never use OEM logos. Compatibility language only ("Parts for", "Compatible with"). Persistent trademark disclaimer in the footer and on every machine page. Legal review before launch. |
| OCR errors in Somet part numbers producing wrong quotes | **High** | Two-pass human verification against the printed catalog before any Somet part goes live. Ship Somet as PDF-only in v1 if verification is not complete. |
| Dimensional data mistaken for a specification guarantee | Medium | Catalog dimensions (e.g. "263mm x 100mm") are identifying descriptions, not certified specs. Label them as such. |
| 3D scope consuming the budget before catalog search works | Medium | Catalog + search + inquiry ship first. 3D is Phase 8 and can be cut without harming the business case. |
| Illustrative 3D read as engineering-accurate | Medium | Label every 3D asset "Illustrative visualisation — not to scale". |
| Catalog images are photographs on white/coloured backgrounds of varying quality | Medium | Standardise via consistent cropping and card treatment. Do not retouch part geometry. |
| Inquiry spam from a public B2B form | Low | Rate limiting, honeypot, server-side validation. No CAPTCHA that blocks genuine buyers. |

---

## 5. Phase 2 — Information Architecture

### 5.1 Sitemap

```
/                              Home
/products                      Searchable index — the core of the site
/products/[part-number]        Part detail  (e.g. /products/jd-3231)
/machines                      Brand & machine hub
/machines/[brand]              e.g. /machines/vamatex
/machines/[brand]/[model]      e.g. /machines/vamatex/leonardo
/categories/[category]         e.g. /categories/gears-sprockets
/catalogs                      Catalog library — 5 catalogs
/catalogs/[slug]               In-browser viewer + download
/about                         Story & legacy timeline
/manufacturing                 Requirement → Engineering → Manufacturing → QC → Delivery
/custom-engineering            Non-catalog parts + drawing/photo upload
/contact                       Address, phones, WhatsApp, map, hours
/inquiry                       Full inquiry form (also available as a modal everywhere)
/trademark-notice              Legal — OEM marks disclaimer
/privacy  /terms
/sitemap.xml  /robots.txt
```

Navigation (7 items, no dropdown overload):
**Products · Catalogs · Machines · Manufacturing · Custom Engineering · About · Contact**
with a persistent search field and a **Send Inquiry** button in the header.

### 5.2 Product data model

```ts
Part {
  partNumber        string     // canonical, e.g. "JD-3202"
  altPartNumbers    string[]   // ["TP-615", "TP-652"]  — searchable, 301 to canonical
  name              string     // "Roller 44-16-8"
  slug              string
  category          Category
  brand             Brand      // Vamatex | Somet | Sulzer/TP600 | Dornier | Panther |
                               // Vendeville | Dobby & Jacquard | Feeder | Nylon | General
  machineModels     string[]   // ["Leonardo", "P1001"] — only where the catalog states it
  dimensions        string?    // verbatim from catalog, labelled "as listed in catalog"
  variants          Variant[]  // the A / B / C sub-parts printed on many catalog entries
  material          string?    // only where stated (Bronze, Nylon, Gun Metal, Ceramic)
  catalogRef        { slug, page }
  image             { src, alt, hasCleanBackground }
  status            'listed' | 'verified' | 'pending-verification'
}
```

`status` matters: it lets us publish the 925 exact codes immediately and hold the OCR'd
Somet records at `pending-verification` until a person has checked them.

### 5.3 Category taxonomy (derived from the catalogs, not invented)

Gears & Sprockets · Shafts & Spindles · Bearings, Bushes & Rollers · Rapier Heads, Tapes &
Grippers · Cutters, Knives & Shears · Springs · Brushes & Rings · Feeder & Tensioner
Components · Dobby & Jacquard Components · Hooks, Pulleys & Lines · Electronics (keypads,
displays, PCBs, sensors, encoders, load cells) · Clutch & Brake Components · Nylon &
Engineering Plastics · Plates, Brackets & Covers · Connectors & Cables · Fasteners &
Hardware

### 5.4 The primary journey

```
Search "JD-3231"  →  Part page (image, name, brand, catalog ref, dimensions)
                  →  "Also fits / also known as"  →  Send Inquiry (part pre-filled)
                  →  Confirmation + WhatsApp fallback
```

Secondary journey, for the visitor who doesn't have a number:
`Machine (Vamatex) → Model (Leonardo) → Category (Rapier Heads) → Part → Inquiry`

Tertiary: `Catalogs → browse the PDF exactly as printed → Inquiry`

Three routes to the same conversion. No dead ends.

### 5.5 Homepage sequence

1. Hero — Purjawala, positioning line, **search bar in the hero itself**, Explore Catalog / Talk to Us
2. Find Your Part — search by part number, machine, or category
3. Machines We Cover — Vamatex, Somet, Sulzer/TP600, Dornier, Panther, Vendeville, Dobby & Jacquard, Feeder
4. Legacy — 1949 → 2001 → Today timeline
5. What We Do — capability cards
6. Catalog Library — five catalog covers, view/download
7. Custom Engineering — "Need a part that isn't in the catalog?" with upload
8. Final CTA — Request an Inquiry
9. Footer — full identity lockup, address, phones, trademark notice

---

## 6. Recommended Technology Architecture

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js (App Router) + TypeScript | SSG for ~1,200 part pages, server rendering for SEO |
| Styling | Tailwind CSS | Fast, consistent, small output |
| Part data | JSON/MDX content layer, git-versioned | No database to maintain; catalog updates are a pull request. Migrate to a CMS only when the father's team wants to self-edit |
| Search | Client-side index (FlexSearch/Fuse) over a pre-built JSON index | ~1,200 records fits comfortably in memory; instant, works offline, no search service cost |
| PDF viewer | react-pdf / PDF.js with lazy page loading | In-browser reading without forcing a download |
| Motion | Framer Motion | Restrained scroll and hover work |
| 3D | React Three Fiber, lazy-loaded, desktop-only, disabled under `prefers-reduced-motion` | Keeps mobile fast |
| Images | Next/Image, AVIF + WebP, responsive sizes | ~1,200 product photos need this |
| Inquiry | Server action → email + WhatsApp deep link, with file upload | Simple, no third-party form fees |
| Hosting | Vercel or equivalent edge host | Global CDN matters for international buyers |

Deliberate omission: no headless CMS in v1. It adds cost and a login the father's team
doesn't need yet. The content layer is structured so a CMS can be added later without
touching the front end.

### 6.1 SEO architecture

- One indexable page per part — this is where the long-tail traffic lives
  ("vamatex leonardo rapier head", "bonas 250 keypad", "somet thema 11 encoder")
- `Product` and `Organization` structured data; `BreadcrumbList` on every deep page
- Machine and category pages as topical hubs linking down to parts
- Canonical URLs, with alternate part numbers 301'd to the canonical
- Extracted PDF text published as HTML so the catalogs become indexable — this is the
  single biggest SEO gain available, and it is exactly what the Somet catalog currently
  blocks

---

## 7. Open Questions — Answers Needed Before Phase 3

These are blocking. We will not invent answers.

1. **Manufacturing vs trading.** Which parts, if any, are manufactured in-house? The
   catalogs say "Importers & Traders". If there is genuine machining capability, the
   Manufacturing page is real; if not, it needs to be reframed as sourcing and custom
   procurement. This is the single most important answer.
2. **V-Tex India.** It appears on every interior page. Is it a house brand, a trading name,
   a group company, or a supplier's mark? It cannot go on the website until we know.
3. **Batra Machine or Batra Machines?** The catalogs print "A Unit of Batra Machine".
   The brief says "Batra Machines". One spelling, everywhere.
4. **D.T. Mfr. & Traders or D.T. Manufactures & Traders?** Same question — what is the
   registered legal name?
5. **WhatsApp number.** Which of 93555-52807 / 94164-81383 / 93555-52700 is the WhatsApp
   line? Placeholder until confirmed.
6. **Primary email.** `info@purjawala.com` is the professional address; `batra2deepak@yahoo.co.in`
   should probably not appear publicly. Confirm.
7. **Business hours** and whether a Google Maps pin exists for the Sec. 25 HUDA address.
8. **Somet verification.** Who checks the 243 OCR'd part numbers against the printed
   catalog, and by when? This gates the Somet section going live.
9. **Photographs.** Are factory, workshop, or team photos available? The About and
   Manufacturing pages will be markedly stronger with them, and we will build the slots
   either way.
10. **Languages.** English only, or English + Hindi? This affects the routing structure
    and is expensive to retrofit.

---

## 8. Action Plan

| # | Step | Owner | Gate |
|---|---|---|---|
| 1 | Answer Section 7, questions 1–6 | Client (father) | Blocks Phase 3 |
| 2 | Approve sitemap and taxonomy (Section 5) | Client | Blocks Phase 3 |
| 3 | Build design system — palette, type, grid, motion rules | SewaKunj | — |
| 4 | Extract and clean ~1,200 product images from the PDFs | SewaKunj | — |
| 5 | Build structured part dataset from the 925 exact codes | SewaKunj | — |
| 6 | OCR + two-pass human verification of Somet | Joint | Gates Somet go-live |
| 7 | Build homepage, catalog system, search, part pages | SewaKunj | — |
| 8 | Inquiry system + WhatsApp integration | SewaKunj | Needs Q5 |
| 9 | About / Manufacturing / Custom Engineering | SewaKunj | Needs Q1, Q9 |
| 10 | 3D and motion layer | SewaKunj | Cuttable |
| 11 | Responsive, performance, accessibility, SEO pass | SewaKunj | — |
| 12 | Legal review of trademark language | Client + counsel | Blocks launch |

Suggested v1 scope: steps 1–5, 7, 8, 11, 12 — a fast, searchable, credible catalog site.
Steps 6, 9, 10 follow as v1.1. Shipping a working part search beats shipping a beautiful
homepage with no data behind it.

---

## 9. Long-Term Opportunity

The part database is the durable asset here, not the website. Once ~1,200 parts are
structured, the same data supports:

- A **WhatsApp inquiry bot** — a fitter sends a part number or a photo and gets back the
  part card and availability. Directly aligned with how this trade actually communicates.
- **Stock and quotation management** — the natural next system once inquiries have volume.
- **An IndiaMART / export-marketplace feed** generated from the same records.
- **Annual catalog regeneration** — the 2027 print catalog produced from the database
  instead of rebuilt by hand in a design tool.
- **A cross-reference engine** — the 44 multi-code parts already found hint at a much
  larger OEM-to-Purjawala mapping, which would be a genuine competitive moat in this trade.

The website is the entry point. The database is the business.

---

*Prepared from the five 2026 catalog PDFs supplied. Every figure in this document is
derived from those files. Placeholders are marked where information was not available.*
