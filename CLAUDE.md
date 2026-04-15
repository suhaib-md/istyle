# CLAUDE.md — I Style Leathers Website
> Single source of truth for all AI-assisted development on this project.
> Grounded in SRS v1.0 (April 2026). Update this file when decisions change.

---

## 1. Project Overview

**Brand:** I Style Leathers
**Tagline:** "Timeless Style"
**Sub-tagline:** "Where craftsmanship means timeless fashion."
**Type:** Brand + e-commerce website (first formal digital storefront)
**Business:** Manufacturer and direct seller of handcrafted leather goods — sandals, slides, bags, briefcases, accessories.

### Business Contact Details
| Field | Value |
|---|---|
| WhatsApp | +91 9842376554 |
| Instagram | @istyleLeathers |
| Email | istyleleathersmvs@gmail.com |
| Location | Melvisharam, Ranipet District, Tamil Nadu, India |
| Domain (current) | istyle.vercel.app |

### Ordering Model (V1)
**WhatsApp-only ordering.** There is no cart or checkout in V1. Every "Add to Cart" / "Order" action opens a WhatsApp link with a pre-filled message. Do not build or show a cart/checkout flow until explicitly asked for V2.

WhatsApp pre-fill (generic): `Hi! I'm interested in I Style Leathers products.`
WhatsApp pre-fill (product page): `Hi! I'm interested in [Product Name]. [Product URL]`
WhatsApp URL base: `https://wa.me/919842376554`

---

## 2. Technical Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | **Next.js 14+ (App Router)** | SSG/SSR for SEO, React |
| Styling | **Tailwind CSS** | Full design token config in `tailwind.config.js` |
| Product Data | **Static JSON/TypeScript** (V1) | Structured for easy Sanity CMS migration later |
| CMS (future) | Sanity.io | V2 — owner-editable content without coding |
| Hosting | Vercel | CDN included, free tier |
| Search | Fuse.js | Client-side, no server needed for <100 products |
| Analytics | Google Analytics 4 | Track page views, WA CTA clicks, searches |
| Newsletter | MailerLite or Brevo (free tier) | Email capture form |
| Images (V1) | Placeholder images | Real product photos to be substituted later |
| Images (V2) | Sanity Image CDN | Automatic WebP + resizing |

### Key Next.js conventions
- Use the **App Router** (`app/` directory), not Pages Router
- Prefer **Server Components** by default; use `'use client'` only where interactivity is needed
- All pages are statically generated at build time (SSG) unless dynamic data requires otherwise
- Product data lives in `src/data/products.ts` as a typed array — swap for Sanity queries later

---

## 3. Brand Identity & Design System

### 3.1 Color Palette

All colors must be encoded as Tailwind custom tokens in `tailwind.config.js`.

#### Core Palette
| Token name | Hex | Usage |
|---|---|---|
| `leather-brown` | `#351710` | Primary text, nav background, headings, primary buttons |
| `russet` | `#8e4e25` | Secondary accents, hover states |
| `warm-cream` | `#fff8f6` | Page background, card backgrounds |
| `parchment` | `#f1e6e2` | Alternating section backgrounds, footer |
| `warm-sand` | `#fdf1ee` | Subtle container fills |

#### Accent Palette
| Token name | Hex | Usage |
|---|---|---|
| `sage-teal` | `#4a7a6e` | Badges, new-arrival tags, WhatsApp CTA banner background, section accents, hover highlights |
| `aged-brass` | `#cba72f` | Premium badges, "Limited" labels, dividers — use sparingly |

#### Surface / Utility
| Token name | Hex | Usage |
|---|---|---|
| `surface-low` | `#fdf1ee` | Light card backgrounds |
| `surface-mid` | `#f7ebe8` | Medium card backgrounds |
| `surface-high` | `#f1e6e2` | Darker card backgrounds |
| `outline` | `#d5c3be` | Dividers, borders |
| `on-surface-variant` | `#514441` | Muted body text, labels |

> **Why teal?** Every real product photo is shot against a sage-teal background. Using that color as an accent makes the site feel built for these products, not from a generic luxury template.

### 3.2 Typography

**Headline font:** Noto Serif (Google Fonts)
- Weights: 400, 600, 700
- Used for: page titles, section headings, product names, hero text

**Body / UI font:** Manrope (Google Fonts)
- Weights: 300, 400, 500, 600, 700
- Used for: body copy, navigation, buttons, labels, prices, captions

#### Type Scale
| Token | Desktop size | Line-height | Font | Weight | Usage |
|---|---|---|---|---|---|
| `display-xl` | 80–96px | 1.0 | Noto Serif | 700 | Hero headline |
| `display-lg` | 56–64px | 1.05 | Noto Serif | 700 | Section hero |
| `headline-lg` | 40–48px | 1.1 | Noto Serif | 700 | Section titles |
| `headline-md` | 32px | 1.2 | Noto Serif | 600 | Sub-sections |
| `headline-sm` | 24px | 1.3 | Noto Serif | 400 | Card titles |
| `body-lg` | 18–20px | 1.6 | Manrope | 400 | Lead paragraphs |
| `body-md` | 16px | 1.6 | Manrope | 400 | Body copy |
| `body-sm` | 14px | 1.5 | Manrope | 400 | Captions, notes |
| `label-lg` | 14px | 1.4 | Manrope | 700 | Button text |
| `label-sm` | 11–12px | 1.2 | Manrope | 700 | Tags, badges (letter-spacing: 0.15–0.3em, ALL CAPS) |

> ALL CAPS + extreme letter spacing is for badge/tag labels ONLY. Navigation and body labels use sentence case / title case.

Font loading: Preload Noto Serif and Manrope WOFF2 files used above the fold. Use `font-display: swap`.

### 3.3 Corner Radius
| Element | Radius |
|---|---|
| Product cards, most UI | 2px (sharp — artisanal/luxury convention) |
| Buttons | 2px |
| Filter chips / tags | 999px (pill shape) |
| Images | 0px (full-bleed, no rounding — editorial) |

> Near-zero radius is intentional. Luxury brands use sharp corners. Round corners signal "app" or "startup", not artisanal craft.

### 3.4 Spacing & Grid
- Base unit: 4px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192px
- Max content width: 1440px centered

| Breakpoint | Grid | Margins | Gutters |
|---|---|---|---|
| Mobile | 1 column | 16px | — |
| Tablet | 12-col | 24px | 16px |
| Desktop | 12-col | 48–64px | 24px |

Section vertical rhythm:
- Between major sections: 96–128px desktop / 64px mobile
- Between subsections: 48–64px desktop / 32px mobile

### 3.5 Motion & Animation
Philosophy: **Slow, deliberate, purposeful. Nothing bounces or spins.**

| Interaction | Spec |
|---|---|
| Standard hover transition | `all 300ms ease` |
| Image hover scale | `scale(1.04)` over 600–700ms ease |
| Page entrance (scroll) | `opacity: 0→1` + `translateY(20px→0)` over 600ms, triggered by IntersectionObserver |
| Mobile nav drawer | Slide in from left, 300ms ease-in-out |
| Cart drawer | Slide in from right, 350ms ease |

**MUST:** Respect `prefers-reduced-motion`. Disable all animations when this OS preference is set.

### 3.6 Logo
- Circular badge: "I STYLE LEATHERS" top arc, "TIMELESS STYLE" bottom arc, stylised sandal motif center
- Dark version (white logo) on dark/primary backgrounds
- Light version (dark logo on cream) for the nav bar
- Always SVG — never distort, recolor, or add effects
- Minimum clear space: height of the letter "I" on all sides

### 3.7 Iconography
- Library: **Material Symbols Outlined** (Google), weight 300–400
- WhatsApp icon: Official WhatsApp SVG brand icon (NOT Material Symbols)

Key icons: `shopping_bag`, `search`, `person`, `menu`, `close`, `arrow_forward`, `arrow_back`, `favorite`, `share`, `verified`, `local_shipping`, `eco`, `workspace_premium`

### 3.8 Image Specs
- All images served as **WebP** with JPEG fallback
- Lazy-load all non-hero images (`loading="lazy"`)
- Hero images: preloaded with `<link rel="preload">` in `<head>`
- Responsive `srcset`: provide 400w, 800w, 1200w, 1600w variants
- Every image must have descriptive `alt` text
- Product card aspect ratio: **4:5 (portrait)**
- Hero / lifestyle aspect ratio: **16:9 (landscape)**
- OG image per product: **1200×630px** (critical — product links shared on WhatsApp)

> V1 uses placeholder images. Real product photography to be dropped in later. Keep all `src` attributes pointing to a consistent placeholder utility (e.g. `/images/placeholder/[filename].jpg` or a placeholder service).

### 3.9 WhatsApp Floating Button (FAB)
- Present on **ALL pages**, every scroll position
- Position: bottom-right, 24px from edge (mobile), 32px from edge (desktop)
- Size: 56px circle
- Color: `#25D366` background, white WhatsApp icon
- On mobile: must sit **above** the bottom navigation bar (use `bottom: calc(56px + 24px + env(safe-area-inset-bottom))` or equivalent)
- On desktop: show tooltip on hover: "Chat with us to order"
- On product pages: pre-fill includes product name + URL

---

## 4. Site Architecture

### Sitemap
```
/                           Homepage
/collections                → redirects to /collections/footwear
/collections/footwear       Footwear catalog
/collections/bags           Bags catalog
/collections/accessories    Accessories catalog
/products/[slug]            Product Detail Page
/about                      Our Story / About
/contact                    Contact
/search                     Search results
/not-found                  Custom 404 page
```
> `/cart` and `/checkout` are V2 only. Do not build them for V1.

### URL conventions
- All URLs are human-readable slugs: `/products/cross-strap-croc-slides` NOT `/products?id=34`
- Filter state goes in URL params: `/collections/footwear?color=black&sort=new`

---

## 5. Navigation

### Desktop Nav
```
[Logo]  Footwear  Bags  Accessories  Our Story       [Search] [Cart] [Account]
```
- Footwear → dropdown: Slides | Sandals | Slippers
- Bags → dropdown: Briefcases | Backpacks | Weekenders
- Sticky/fixed — always visible on scroll
- On scroll down: nav padding condenses slightly
- Active page indicated with underline or color change

### Mobile Nav
- Top bar (max 60px tall): `[Logo]` left/center + `[Cart icon] [Hamburger]` right
- Full-screen **left slide-over drawer** (300ms ease-in-out):
  - Logo at top
  - Footwear (expandable accordion) → Slides, Sandals, Slippers
  - Bags (expandable accordion) → Briefcases, Backpacks, Weekenders
  - Accessories
  - Our Story
  - Contact
  - WhatsApp CTA button (green)
  - Instagram link (icon)
  - × close button top-right
- **Sticky bottom tab bar** (56px, always present on mobile):
  - Home | Shop | Search | Cart | Menu
  - Icons + labels
  - Respect iOS safe area: `padding-bottom: env(safe-area-inset-bottom)`

### Footer
4 columns desktop / stacked mobile:
1. **Brand** — Logo, 1-line description, Instagram + WhatsApp social icons
2. **Shop** — Footwear, Bags, Accessories, New Arrivals
3. **Information** — Our Story, Sustainability, Shipping & Returns, Contact Us
4. **Newsletter + Contact** — email capture form, WhatsApp number, Instagram handle

Bottom bar: `© [Year] I Style Leathers. All rights reserved.` | Privacy Policy | Terms & Conditions | Shipping Policy

---

## 6. Pages — Requirements Summary

### 6.1 Homepage
Sections in order:
1. **Hero** — Full viewport (100svh mobile / 100vh desktop). Auto-advancing crossfade carousel (3–4 images, 5s interval, 300ms opacity transition, pause on hover, static fallback for reduced-motion). Large serif headline, 1-line Manrope sub-headline, two CTAs ("Shop the Collection" → /collections, "Our Story" → /about). Scroll indicator. Small badge: "Available on Order | WhatsApp Us".
2. **Category Grid** — 3 tiles: Footwear, Bags, Accessories. Full-bleed images with large serif overlay. Desktop: 3 equal columns, middle tile taller. Mobile: stacked full-width, ~60vw tall. Hover: image scales up + "Shop Now →" appears. Always-visible on mobile.
3. **Featured Products** — "New Arrivals" / "Current Collection". 4 products. Horizontal scroll on mobile, 4-col grid desktop. Each: image, name, price (INR), "View Product". "View All" link → /collections.
4. **Brand Story Strip** — 50/50 split. Left: leather texture/stitching close-up. Right: "HANDCRAFTED WITH PASSION" label, headline "Where Craftsmanship Meets Timeless Style", 2 paragraphs, "Meet Our Story →" CTA. Floating stat card overlapping image.
5. **Editorial Feature** — Full-width hero block for one hero product (e.g. black+tan briefcase). Background image, large serif quote, price + "Order on WhatsApp" CTA.
6. **Instagram Feed Strip** — "Follow @istyleLeathers on Instagram". 6–8 photos, horizontal scroll. Each opens Instagram in new tab. Statically curated in V1.
7. **WhatsApp CTA Banner** — Full-width, `#4a7a6e` (sage teal) background. Headline: "Order Directly on WhatsApp". Sub-text explaining the process. Large WhatsApp button → wa.me link.
8. **Newsletter Signup** — Minimal. "Be the first to know about new designs." Email input + "Notify Me". Inline success message on submit (no page reload). No popup.

### 6.2 Collection / Catalog Page (`/collections/[category]`)
- Large serif category headline + 1–2 line description
- Category hero image (lifestyle shot, 16:9)
- Filter bar: sticky below nav
  - Desktop: horizontal filter strip above grid OR left sidebar
  - Mobile: "Filter" button → bottom sheet modal (slides up)
  - Filters: subcategory chips, color swatches, sort (Featured / Price Low→High / Price High→Low / New)
  - Active filter count shown: "Filter (2)"
  - "Clear All" when filters active
  - Filter state in URL params
- Product count: "Showing X of Y products"
- Grid: 3–4 col desktop / 2 col tablet / **2 col mobile** (never 1 col)
- Load More button (12 products per load)
- Product Card:
  - 4:5 image, product name (Noto Serif), 1-line descriptor, INR price, status badge
  - "New" badge (top-left, sage-teal) or "Limited" badge (aged-brass)
  - Desktop hover: secondary image slides in + "View Product" button appears
  - Full card tappable on mobile

### 6.3 Product Detail Page (`/products/[slug]`)
- Breadcrumb: full path desktop / "← Category" on mobile
- Image gallery: large primary + thumbnail strip. Mobile: swipeable carousel with dot indicators.
- Product info: name, price (₹), short description (2–3 sentences), leather type chip
- Color variant swatches (if applicable)
- Size chips (footwear): 6 | 7 | 8 | 9 | 10 | 11 + size guide modal link
- **Primary CTA: "Order on WhatsApp"** — full-width, prominent. Opens WA with pre-filled message.
- Trust signals row: Handcrafted Quality | Easy WhatsApp Ordering | Pan-India Delivery
- Accordion sections: Description (open by default on mobile) | Materials & Care | Dimensions | Shipping & Returns
- Craftsmanship mini-section: brief editorial + 1 process image
- Related products: "You May Also Like" — 3–4 cards, horizontal scroll mobile
- **Sticky bottom CTA on mobile**: "Order on WhatsApp" bar fixed to bottom of screen — appears after user scrolls past info panel
- Schema.org/Product structured data on every PDP
- OG tags with 1200×630 product image

### 6.4 Our Story / About (`/about`)
- Hero: "The Soul Behind Every Stitch". Full-width or 60/40 split with artisan image.
- Origin story: 2–3 paragraphs, founder image/workshop shot
- The Craft / Process: 4-step section (Material Selection → Cutting & Shaping → Stitching → Finishing), dark background, scroll-triggered reveal, one photo per step
- Product tour: brief visual tour of each category with links to catalog
- Values: 3-item grid — "Handcrafted with Care" | "Available on Order" | "Made for Indian Needs"
- Closing CTA → shop or WhatsApp

### 6.5 Contact (`/contact`)
- Heading: "Get in Touch"
- Three contact methods: WhatsApp (large green button) | Instagram (@istyleLeathers) | Email (istyleleathersmvs@gmail.com)
- Contact form: Name, Phone (type="tel"), Message — sends email to owner. Honeypot spam protection.
- Location: "Based in Melvisharam, Ranipet District, Tamil Nadu, India"
- Google Maps embed (general area)

### 6.6 Custom 404
- On-brand tone: "That page seems to have walked off."
- Logo + 404 message + "Go Home" + "Browse All Products"
- 4 featured/random product cards to re-engage visitor

---

## 7. Functional Requirements (quick reference)

| ID | Requirement |
|---|---|
| FR-01 | Top nav sticky, logo links home, active page indicated |
| FR-02 | Filters URL-param-driven, product count shown, Load More |
| FR-03 | Search overlay (full-width modal), live client-side results (Fuse.js), no-results state |
| FR-04 | WA button on every PDP, FAB on all pages, pre-filled messages |
| FR-05 | Newsletter form with inline success, no aggressive popups |
| FR-06 | (V2) CMS for owner: add/edit products, upload images, toggle status, update prices |
| FR-07 | Unique `<title>` + `<meta description>` per page, OG tags, schema.org/Product, sitemap.xml, robots.txt, canonical URLs |
| FR-08 | GA4 installed, track page views + WA CTA clicks + searches + signups |

---

## 8. Mobile-Specific Requirements

| ID | Requirement |
|---|---|
| MB-01 | Bottom tab bar on all pages (Home/Shop/Search/Cart/Menu), 56px, iOS safe area |
| MB-02 | PDP gallery: swipeable carousel, dot indicators |
| MB-03 | Filters: bottom sheet modal, NOT sidebar |
| MB-04 | Touch targets minimum 44×44px |
| MB-05 | No unintentional horizontal overflow on any page |
| MB-06 | Text never below 14px |
| MB-07 | Sticky "Order on WhatsApp" bar at bottom of PDP (appears after scrolling past info panel) |
| MB-08 | Top nav: Logo + Cart icon + Hamburger only — no nav links |
| MB-09 | Hero: `height: 100svh` (not `100vh` — avoids iOS browser chrome bug) |
| MB-11 | Form inputs use correct type: email/tel/number/text |
| MB-12 | manifest.json + service worker for PWA / Add to Homescreen |
| MB-13 | Preload above-fold fonts (WOFF2), `font-display: swap` |

---

## 9. Performance & Accessibility

### Performance targets
- Lighthouse mobile score ≥ 90
- LCP < 2.5s on 4G
- CLS < 0.1
- Homepage total weight < 1.5MB
- No render-blocking scripts (all JS: async/defer)

### Accessibility
- WCAG 2.1 AA minimum
- Color contrast ≥ 4.5:1 for normal text
- All interactive elements keyboard-focusable
- All images have descriptive alt text
- `prefers-reduced-motion`: disable all animations
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<header>`, `<footer>` — no div-soup

---

## 10. Product Data (V1 — Static)

Product data structure (TypeScript):
```ts
type ProductStatus = 'in-stock' | 'available-on-order' | 'coming-soon';
type ProductTag = 'new' | 'featured' | 'limited';

interface Product {
  slug: string;
  name: string;
  category: 'footwear' | 'bags' | 'accessories';
  subcategory: string;           // e.g. 'slides', 'briefcases'
  shortDescription: string;      // 1–2 sentences for listing card
  longDescription: string;       // 5–8 sentences for PDP accordion
  price: number;                 // INR
  leatherType: string;           // e.g. 'Full Grain', 'Croc Embossed'
  colors: { name: string; hex: string }[];
  sizes?: number[];              // footwear only (UK sizing)
  images: string[];              // [hero, side, detail, lifestyle, flatlay]
  status: ProductStatus;
  tags: ProductTag[];
  featured: boolean;
}
```

### Initial Product Catalog (placeholders until real images are added)

**Footwear (~8–10 products)**
- F-01: Cross-Strap Croc Slide (Brown/Black)
- F-02: Double-Buckle Slide (Black)
- F-03: Single-Strap Embossed Slip-On (Black)
- F-04: Thong Sandal with Buckle (Cognac Croc, Black Sole)
- F-05: Thong Sandal Two-Tone (Black/White)
- F-06: Toe-Ring Multi-Strap Sandal (Black)

**Bags (~5–6 products)**
- B-01: Laptop Briefcase (Black Textured + Tan Leather Trim)
- B-02: Laptop Briefcase (Navy Blue + Tan Leather Trim)
- B-03: Backpack (Navy/Brown Perforated)
- B-04: Weekender/Duffel Bag (Dark Espresso)
- B-05: Watch Roll / Accessories Clutch

**Accessories (~3–5 products)**
- A-01: Keychains (multiple styles)
- A-02: Watch Roll
- A-03: TBD from image library

---

## 11. Copy Tone of Voice

**Sound like:** Confident but not boastful. Warm and personal (family business, not corporation). Tactile — use sensory words: "soft", "grain", "worn", "stitched". Specific — not "high quality leather" but "croc-embossed full-grain". Aspirational but accessible.

**Avoid:** Corporate jargon ("synergies", "value proposition"). Vague superlatives ("the best", "world-class"). Hindi-English code-switching in body copy (a few Hindi words in headlines can work).

**Good example:**
> "The Cross-Strap Slide is cut from full-grain leather with a croc-emboss pattern that catches the light differently every time you wear it. The cushioned black sole is built for Indian summers — firm enough to walk all day, soft enough to forget you have them on."

**Bad example:**
> "Premium quality leather sandals with superior craftsmanship and high-end materials for the discerning customer."

---

## 12. SEO Defaults

| Page | Title pattern | Description pattern |
|---|---|---|
| Homepage | `I Style Leathers — Timeless Handcrafted Leather Goods` | `Shop handcrafted leather sandals, bags, and accessories from Melvisharam. Order directly on WhatsApp.` |
| Collection | `[Category] Collection — I Style Leathers` | `Browse our handcrafted leather [category]. Made in Tamil Nadu. Order on WhatsApp.` |
| Product | `[Product Name] — I Style Leathers` | `[Short description]. ₹[price]. Available on order. Chat on WhatsApp to buy.` |
| About | `Our Story — I Style Leathers` | `Learn about the craft and passion behind I Style Leathers, handcrafted in Melvisharam, Tamil Nadu.` |
| Contact | `Contact I Style Leathers — WhatsApp & Instagram` | `Get in touch with I Style Leathers on WhatsApp (+91 9842376554) or Instagram @istyleLeathers.` |

---

## 13. V1 vs V2 Scope

### V1 (build now)
- All pages listed in §4 sitemap except `/cart` and `/checkout`
- WhatsApp-only ordering (no cart, no payment gateway)
- Static product data (JSON/TS file, not CMS)
- Static Instagram grid (6 hand-picked images, not live API)
- PWA manifest + basic service worker
- GA4 analytics
- Newsletter form (can be non-functional or connected to MailerLite)
- Placeholder images throughout

### V2 (future — do not build yet)
- Sanity CMS for owner-managed products/content
- Native cart (right-side drawer)
- Razorpay checkout
- Live Instagram feed widget (EmbedSocial / Behold.so)
- User accounts, wishlists
- Blog section for SEO
- Exit-intent popup

---

## 14. Open Owner Questions (decisions pending)

| # | Question | Impact |
|---|---|---|
| OQ-01 | Are prices fixed or "contact for price" / variant-priced? | CMS structure, PDP display |
| OQ-03 | Should custom-order page/CTA be built? | New page or PDP section |
| OQ-04 | Can workshop photo session be arranged? | About page quality |
| OQ-05 | Founding year, founder name, brand story details | About page content |
| OQ-06 | Exact sizes available (UK? Indian?) Half-sizes? | Size chip data |
| OQ-07 | Delivery: pan-India? Timelines? Free delivery threshold? | Trust signals, checkout |
| OQ-08 | Returns/exchange policy details | PDP accordion content |

---

## 15. File/Folder Structure (target)

```
istyle/
├── CLAUDE.md
├── next.config.js
├── tailwind.config.js          ← Full design token config
├── public/
│   ├── images/
│   │   └── placeholder/        ← Placeholder images (swap with real later)
│   ├── icons/
│   │   └── whatsapp.svg        ← Official WhatsApp brand SVG
│   ├── logo/
│   │   ├── logo-dark.svg       ← White logo (for dark backgrounds)
│   │   └── logo-light.svg      ← Dark logo (for light backgrounds / nav)
│   └── manifest.json           ← PWA manifest
├── src/
│   ├── app/                    ← Next.js App Router
│   │   ├── layout.tsx          ← Root layout (fonts, nav, footer, WA FAB)
│   │   ├── page.tsx            ← Homepage
│   │   ├── collections/
│   │   │   ├── page.tsx        ← Redirects to /collections/footwear
│   │   │   └── [category]/
│   │   │       └── page.tsx    ← Collection/catalog page
│   │   ├── products/
│   │   │   └── [slug]/
│   │   │       └── page.tsx    ← Product detail page
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── search/
│   │   │   └── page.tsx
│   │   └── not-found.tsx       ← Custom 404
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── MobileDrawer.tsx
│   │   │   ├── BottomTabBar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── WhatsAppFAB.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── CategoryGrid.tsx
│   │   │   ├── FeaturedProducts.tsx
│   │   │   ├── BrandStoryStrip.tsx
│   │   │   ├── EditorialFeature.tsx
│   │   │   ├── InstagramStrip.tsx
│   │   │   ├── WhatsAppBanner.tsx
│   │   │   └── NewsletterSignup.tsx
│   │   ├── catalog/
│   │   │   ├── FilterBar.tsx
│   │   │   ├── FilterBottomSheet.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   └── ProductCard.tsx
│   │   ├── product/
│   │   │   ├── ImageGallery.tsx
│   │   │   ├── ProductInfo.tsx
│   │   │   ├── SizeSelector.tsx
│   │   │   ├── SizeGuideModal.tsx
│   │   │   ├── TrustSignals.tsx
│   │   │   ├── ProductAccordion.tsx
│   │   │   ├── CraftsmanshipMini.tsx
│   │   │   ├── RelatedProducts.tsx
│   │   │   └── StickyOrderBar.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       ├── Chip.tsx
│   │       └── AnimatedSection.tsx  ← IntersectionObserver fade-in wrapper
│   ├── data/
│   │   ├── products.ts         ← Static product catalog (V1)
│   │   └── instagram.ts        ← Static Instagram image list (V1)
│   ├── lib/
│   │   ├── search.ts           ← Fuse.js client-side search
│   │   └── whatsapp.ts         ← WA URL builder utility
│   └── types/
│       └── product.ts          ← Product TypeScript types
```

---

## 17. Production Plan — Phase by Phase

Each phase builds on the previous. Do not start a phase until all tasks in the prior phase are complete and visually verified in the browser.

Legend:
- `[ ]` — not started
- `[~]` — in progress
- `[x]` — complete

---

### Phase 0 — Project Scaffold & Design Tokens ✓ COMPLETE
> Goal: Runnable Next.js app with all design tokens wired up, fonts loading, and a blank page that already looks "on-brand".
> Stack note: Next.js 16 + Tailwind v4 — design tokens live in `globals.css` under `@theme` (no tailwind.config.js needed).

- [x] **0.1 Init project**
  - [x] Scaffolded Next.js 16 (App Router, TypeScript, Tailwind v4, ESLint, src/ dir)
  - [x] Cleared boilerplate page.tsx and globals.css
  - [x] Dev server confirmed running on http://localhost:3000

- [x] **0.2 Tailwind design tokens** (in `src/app/globals.css` under `@theme`)
  - [x] Full color palette — leather-brown, russet, warm-cream, parchment, warm-sand, sage-teal, aged-brass, all surface variants
  - [x] Font families — `--font-serif: var(--font-noto-serif)`, `--font-sans: var(--font-manrope)`
  - [x] Full type scale tokens (display-xl through label-sm with line-heights)
  - [x] Border radius tokens (DEFAULT 2px, pill 999px)

- [x] **0.3 Google Fonts setup** (in `src/app/layout.tsx`)
  - [x] Noto Serif (400, 600, 700) + Manrope (300, 400, 500, 600, 700) via `next/font/google`
  - [x] CSS variables `--font-noto-serif` and `--font-manrope` applied to `<html>`
  - [x] `display: swap` set on both fonts

- [x] **0.4 Global CSS** (in `src/app/globals.css`)
  - [x] Page background `#fff8f6`, text `#351710`
  - [x] `box-sizing: border-box` reset, image reset, margin resets
  - [x] `prefers-reduced-motion` global disable rule
  - [x] Smooth scroll, focus-visible ring, scrollbar-hide utility, pb-safe utility

- [x] **0.5 Public assets + directory structure**
  - [x] All component directories created under `src/components/`
  - [x] All page route directories created under `src/app/`
  - [x] `public/icons/whatsapp.svg` — official WhatsApp brand SVG
  - [x] `public/logo/logo-dark.svg` and `logo-light.svg` — placeholder badge SVGs
  - [x] `public/manifest.json` — PWA manifest (theme `#351710`, bg `#fff8f6`)
  - [x] `public/images/placeholder/` directory created

- [x] **0.6 TypeScript types** (`src/types/product.ts`)
  - [x] `Product` interface with all fields
  - [x] `ProductStatus`, `ProductTag`, `ProductCategory`, `ProductSubcategory`, `CategoryMeta` types

- [x] **0.7 Static product data**
  - [x] `src/data/products.ts` — 12 products (6 footwear, 4 bags, 2 accessories), full copy, helpers
  - [x] `src/data/instagram.ts` — 6 static Instagram post entries
  - [x] `npx tsc --noEmit` passes with 0 errors

- [x] **0.8 Utility functions**
  - [x] `src/lib/whatsapp.ts` — `buildWhatsAppURL()`, `WA_GENERIC_URL`, `WA_PHONE_DISPLAY`
  - [x] `src/lib/search.ts` — Fuse.js search over product name, description, leather type
  - [x] Fuse.js installed

---

### Phase 1 — Root Layout, Navigation & Footer ✓ COMPLETE

- [x] **1.1 Root layout** — `MobileMenuProvider` wraps everything; Navbar, MobileDrawer, Footer, WhatsAppFAB, BottomTabBar all wired. `main` has `pt-15 lg:pt-18` for navbar offset and `pb-[56px+safe-area]` on mobile.
- [x] **1.2 Desktop Navbar** — Fixed, condensing-on-scroll, hover dropdowns (Footwear/Bags), active underline via `usePathname()`, Cart disabled (V1), hidden on mobile.
- [x] **1.3 Mobile top bar** — Inside Navbar component, `flex lg:hidden`, Logo + Search + Cart + Hamburger. Max height 60px.
- [x] **1.4 Mobile Nav Drawer** — Slide-in from left 300ms, backdrop, focus trap, Escape key, accordion subcategories, closes on route change, WhatsApp CTA + Instagram link.
- [x] **1.5 Bottom Tab Bar** — Fixed bottom, 56px + `env(safe-area-inset-bottom)`, Home/Shop/Search/Cart(disabled)/Menu, active state, min-h-11 touch targets.
- [x] **1.6 WhatsApp FAB** — Fixed above bottom tab bar on mobile, `lg:bottom-8`, `#25D366`, hover tooltip on desktop, `aria-label`.
- [x] **1.7 Footer** — 4-col → stacked, parchment bg, logo + brand description + social icons, shop/info link columns, newsletter form (honeypot, inline success), contact links, copyright bar.
- [x] **1.8 NewsletterForm** — `'use client'`, honeypot, inline success state, no page reload. Compact prop for footer use.
- [x] **1.9 Icons** — All inline SVG: Menu, Close, Search, ShoppingBag, Home, ChevronDown, ChevronRight, ArrowRight, WhatsApp, Instagram.
- [x] **TypeScript** — `npx tsc --noEmit` passes with 0 errors. All canonical Tailwind class warnings resolved.

---

### Phase 2 — Homepage ✓ COMPLETE

- [x] **2.1 `AnimatedSection` utility component**
  - [x] Create `src/components/ui/AnimatedSection.tsx`
  - [x] Uses `IntersectionObserver` to trigger `opacity: 0→1` + `translateY(20px→0)` on scroll
  - [x] Duration 600ms, stagger support for children
  - [x] Respects `prefers-reduced-motion` (renders immediately if set)
  - [x] Wrap all homepage sections in this component

- [x] **2.2 Hero Section (`HeroSection.tsx`)**
  - [x] `height: 100svh`
  - [x] Auto-advancing crossfade carousel: 3 slides, 5s interval, 300ms opacity transition
  - [x] Pause on hover (mouse enter/leave)
  - [x] Reduced-motion: static single slide, no carousel
  - [x] Dark gradient overlay (bottom-heavy)
  - [x] Badge, display serif headline, Manrope sub-headline, two CTAs, slide indicators
  - [x] Scroll indicator ("Scroll" + line) — desktop only

- [x] **2.3 Category Grid (`CategoryGrid.tsx`)**
  - [x] 3 tiles: Footwear, Bags, Accessories
  - [x] Desktop: 3 equal columns, middle tile taller
  - [x] Mobile: stacked, each 60vw tall
  - [x] Full-bleed placeholder background, large serif overlay
  - [x] Hover: image `scale(1.04)` over 700ms, "Shop Now →" fades in
  - [x] Mobile: "Shop Now →" always visible

- [x] **2.4 Featured Products (`FeaturedProducts.tsx`)**
  - [x] "New Arrivals" heading + "View All" link → `/collections`
  - [x] Pulls `getFeaturedProducts(4)` from `products.ts`
  - [x] Desktop: 4-col grid; Mobile: horizontal scroll with `scrollbar-hide`
  - [x] Simplified inline ProductCard (refactor in Phase 4)

- [x] **2.5 Brand Story Strip (`BrandStoryStrip.tsx`)**
  - [x] 50/50 split desktop, stacked mobile
  - [x] 4:5 placeholder image with floating "100% Handcrafted in Tamil Nadu" stat card
  - [x] Headline, 2 paragraphs, "Meet Our Story →" CTA

- [x] **2.6 Editorial Feature (`EditorialFeature.tsx`)**
  - [x] Full-width, min-height 70vh, dark overlay
  - [x] Briefcase product — large serif quote, price, WA + View Product CTAs

- [x] **2.7 Instagram Strip (`InstagramStrip.tsx`)**
  - [x] 6 posts from `instagram.ts`, horizontal scroll, 1:1 squares
  - [x] Each links to Instagram, hover overlay with icon

- [x] **2.8 WhatsApp CTA Banner (`WhatsAppBanner.tsx`)**
  - [x] `bg-sage-teal`, phone number in CTA button, centered layout

- [x] **2.9 Newsletter Signup (`NewsletterSignup.tsx`)**
  - [x] Section wrapper around existing `NewsletterForm` (honeypot + inline success already in form)
  - [x] `bg-surface-low` background

- [x] **2.10 Homepage QA**
  - [x] All 8 sections render in correct order in `src/app/page.tsx`
  - [x] `npx tsc --noEmit` passes with 0 errors

---

### Phase 3 — Shared UI Components ✓ COMPLETE

- [x] **3.1 Button (`src/components/ui/Button.tsx`)**
  - [x] Variants: `primary`, `ghost`, `whatsapp` (with WA icon), `link`
  - [x] Sizes: `sm`, `md`, `lg`
  - [x] `borderRadius: 2px`, hover/disabled states, `transition-colors duration-200`
  - [x] Renders `<Link>` for internal hrefs, `<a>` for external, `<button>` otherwise

- [x] **3.2 Badge (`src/components/ui/Badge.tsx`)**
  - [x] Variants: `new` (sage-teal), `limited` (aged-brass), `in-stock` (green), `on-order` (outline)
  - [x] 10px ALL CAPS, letter-spacing 0.2em, pill shape

- [x] **3.3 Chip (`src/components/ui/Chip.tsx`)**
  - [x] States: default (outline), selected (leather-brown bg, white text), disabled
  - [x] Pill shape, Manrope 500, 14px, `aria-pressed` for accessibility
  - [x] `readOnly` prop for display-only use

---

### Phase 4 — Collection / Catalog Page ✓ COMPLETE

- [x] **4.1 Category page route (`src/app/collections/[category]/page.tsx`)**
  - [x] Static params for `footwear`, `bags`, `accessories`
  - [x] Unique metadata per category (title + description)
  - [x] Reads `subcategory` and `sort` from `searchParams`
  - [x] Filters via `getProductsByCategory()`, passes to `<ProductGrid />`

- [x] **4.2 Collections index redirect** — already done (`redirect('/collections/footwear')`)

- [x] **4.3 ProductCard (`src/components/catalog/ProductCard.tsx`)**
  - [x] 4:5 aspect ratio, primary/secondary image crossfade on hover
  - [x] `<Badge />` for new/limited tags, leather type label, price
  - [x] "View Product" bar slides up from bottom on desktop hover
  - [x] Full card is a `<Link>` to `/products/[slug]`

- [x] **4.4 ProductGrid (`src/components/catalog/ProductGrid.tsx`)**
  - [x] 2-col mobile, 3-col tablet, 4-col desktop
  - [x] "Showing X of Y" count, filtered vs total shown
  - [x] Load More (12 per page), hidden when all loaded
  - [x] Empty state with Clear All + Browse All Collections links

- [x] **4.5 FilterBar (`src/components/catalog/FilterBar.tsx`)**
  - [x] Desktop: subcategory chips + sort chips + "Clear all" link
  - [x] Mobile: "Filter (N)" button showing active count
  - [x] URL params updated via `router.push(..., { scroll: false })`

- [x] **4.6 FilterBottomSheet (`src/components/catalog/FilterBottomSheet.tsx`)**
  - [x] Slides up from bottom 300ms, backdrop, Escape to close
  - [x] Subcategory chips + sort chips, applies immediately on tap
  - [x] "Clear All" + "Done" footer buttons

- [x] **4.7 Category page header**
  - [x] Full-width hero image with dark gradient overlay
  - [x] Subcategory breadcrumb, serif headline, body description

- [x] **4.8 Catalog QA**
  - [x] `npx tsc --noEmit` passes with 0 errors

---

### Phase 5 — Product Detail Page ✓ COMPLETE

- [x] **5.1 PDP route (`src/app/products/[slug]/page.tsx`)**
  - [x] Static params from all 12 product slugs
  - [x] Unique title, meta description, OG tags (og:image, og:url, og:title, og:description)
  - [x] Schema.org/Product JSON-LD (name, description, image, price/INR, availability, brand)
  - [x] `notFound()` for unknown slugs

- [x] **5.2 Breadcrumb** — desktop full path, mobile single parent link

- [x] **5.3 ImageGallery** — desktop: 72px thumbnail strip + 4:5 primary; mobile: CSS scroll-snap carousel with dot indicators + scroll sync

- [x] **5.4 ProductInfo** — name, price, on-order note, short description, leather chip, colour swatches, UK size chips, full-width WA CTA, trust signals row

- [x] **5.5 SizeGuideModal** — UK 6–11 table, backdrop + Escape close

- [x] **5.6 ProductAccordion** — 4 sections (Description open by default), chevron rotate, max-h transition

- [x] **5.7 CraftsmanshipMini** — skipped (not blocking; content pending real photos — add in Phase 10 polish)

- [x] **5.8 RelatedProducts** — same-category first, fills to 4; 4-col desktop / horizontal scroll mobile; uses ProductCard

- [x] **5.9 StickyOrderBar** — mobile only, IntersectionObserver sentinel, slide-up above bottom tab bar

- [x] **5.10 PDP QA** — `npx tsc --noEmit` passes with 0 errors
  - [ ] OG tags visible in source
  - [ ] JSON-LD structured data in source

---

### Phase 6 — About Page ✓ COMPLETE

- [x] **6.1 Route** — unique title + meta description

- [x] **6.2 About Hero** — full-viewport dark section, "The Soul Behind Every Stitch" serif headline, Manrope light tagline, AnimatedSection fade-in

- [x] **6.3 Origin Story** — 2-col layout (4:5 image + 3 narrative paragraphs), staggered AnimatedSection reveals

- [x] **6.4 The Craft** — dark `bg-leather-brown` section, 4-step grid (Material Selection → Cutting → Stitching → Finishing), step photo + oversized step number + heading + description, 150ms stagger

- [x] **6.5 Product Tour** — 3 full-bleed tiles (Footwear / Bags / Accessories), image hover scale, "Shop Now →" link

- [x] **6.6 Values** — 3-col grid with teal rule, serif heading, body copy per value

- [x] **6.7 Closing CTA** — "Shop the Collection" primary + "Order on WhatsApp" ghost buttons, centered layout

- [x] **6.8 QA** — `npx tsc --noEmit` passes with 0 errors

---

### Phase 7 — Contact Page & Custom 404
> Goal: Functional contact page and on-brand 404.

- [ ] **7.1 Contact page (`src/app/contact/page.tsx`)**
  - [ ] Heading: "Get in Touch"
  - [ ] Three contact cards: WhatsApp (large green button → wa.me link), Instagram (@istyleLeathers → instagram.com), Email (istyleleathersmvs@gmail.com → mailto:)
  - [ ] Contact form: Name (`type="text"`), Phone (`type="tel"`), Message (`<textarea>`) — honeypot field — submit shows inline success
  - [ ] "Based in Melvisharam, Ranipet District, Tamil Nadu, India"
  - [ ] Google Maps embed (general area — Melvisharam)

- [ ] **7.2 Custom 404 (`src/app/not-found.tsx`)**
  - [ ] Logo
  - [ ] On-brand message: "That page seems to have walked off."
  - [ ] "Go Home" primary CTA + "Browse All Products" secondary CTA
  - [ ] 4 featured product cards (from `products.ts` where `featured: true`)
  - [ ] Same nav/footer as rest of the site (root layout handles this)

---

### Phase 8 — Search
> Goal: Functional search overlay with live results using Fuse.js.

- [ ] **8.1 Search route (`src/app/search/page.tsx`)**
  - [ ] Reads `q` query param, runs `searchProducts(q)`, renders results
  - [ ] Handles empty query (show "Start typing to search") and no-results state ("No results for 'X'. Try browsing our collections or chat with us on WhatsApp.")

- [ ] **8.2 Search overlay component**
  - [ ] Full-width modal that opens on click of Search icon in nav
  - [ ] Input auto-focuses when opened
  - [ ] Live results appear below as user types (debounced 200ms)
  - [ ] Each result: product image (40px square) + name + price
  - [ ] Clicking result → navigates to PDP, closes overlay
  - [ ] Keyboard: Escape closes, Arrow keys navigate results
  - [ ] Close on backdrop click
  - [ ] `'use client'` component

- [ ] **8.3 Search QA**
  - [ ] Live results appear within 200ms of typing
  - [ ] Keyboard navigation works
  - [ ] No-results state renders correctly
  - [ ] Escape closes the overlay
  - [ ] Search icon in bottom tab bar opens overlay on mobile

---

### Phase 9 — SEO, PWA & Performance
> Goal: All technical SEO requirements met, PWA installable, Lighthouse ≥ 90 on mobile.

- [ ] **9.1 Metadata completeness audit**
  - [ ] Every page has unique `<title>` and `<meta name="description">` (verify using Next.js Metadata API)
  - [ ] Every page has `<link rel="canonical">`
  - [ ] Every PDP has OG tags: `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:type: product`

- [ ] **9.2 Structured data**
  - [ ] Schema.org/Product JSON-LD on every PDP: name, description, image, price, currency (INR), availability, brand
  - [ ] Schema.org/Organization on homepage and about page
  - [ ] Validate with Google's Rich Results Test

- [ ] **9.3 Sitemap + robots.txt**
  - [ ] `src/app/sitemap.ts` — auto-generate sitemap from all product slugs + static pages
  - [ ] `src/app/robots.ts` — `Allow: /`, `Disallow: /api/`, `Sitemap:` pointing to sitemap.xml

- [ ] **9.4 PWA**
  - [ ] `public/manifest.json` complete (name, short_name, start_url, display, theme_color, background_color, icons array with 192×192 and 512×512)
  - [ ] Basic service worker for offline shell (Next.js `next-pwa` package or custom)
  - [ ] Test "Add to Homescreen" on Android Chrome

- [ ] **9.5 Performance audit**
  - [ ] Run Lighthouse on homepage on mobile — target score ≥ 90
  - [ ] Verify LCP < 2.5s (hero image must be preloaded)
  - [ ] Verify CLS < 0.1 (all images must have explicit width/height or aspect ratio containers)
  - [ ] Verify no render-blocking scripts
  - [ ] Check homepage total transfer size < 1.5MB
  - [ ] Add `next/image` with explicit `width` and `height` for all images (prevents CLS)

- [ ] **9.6 GA4**
  - [ ] Install GA4 script (via `next/script` with `strategy="afterInteractive"`)
  - [ ] Track custom events: `whatsapp_cta_click` (on every WA button), `search_query`, `newsletter_signup`

---

### Phase 10 — QA, Polish & Cross-Browser Testing
> Goal: Site is production-ready, all devices and browsers tested, animations tuned.

- [ ] **10.1 Cross-device testing**
  - [ ] Chrome Android (latest) — test at 360px and 390px widths
  - [ ] Safari iOS (latest) — test 100svh hero, bottom tab bar safe area
  - [ ] Chrome Desktop 1280px, 1440px, 1920px
  - [ ] Firefox Desktop
  - [ ] Edge Desktop

- [ ] **10.2 Accessibility audit**
  - [ ] Run axe DevTools or similar on every page
  - [ ] Verify color contrast ≥ 4.5:1 on all text (esp. text on teal and brown backgrounds)
  - [ ] Tab through every page — all interactive elements reachable and visible on focus
  - [ ] Screen reader test on homepage and PDP (VoiceOver on Mac or NVDA on Windows)
  - [ ] All images have meaningful alt text (not generic "product image")

- [ ] **10.3 Animation polish**
  - [ ] Verify all IntersectionObserver animations feel natural (not too fast or too slow)
  - [ ] Verify hero carousel crossfade is smooth
  - [ ] Verify mobile drawer and filter bottom sheet slide animations
  - [ ] Verify sticky PDP bar slide-up feels natural
  - [ ] Test all animations with `prefers-reduced-motion: reduce` — everything must be instant

- [ ] **10.4 Content review**
  - [ ] All placeholder copy reviewed — does it match tone of voice from §11?
  - [ ] All placeholder prices formatted as `₹X,XXX` (not "Rs.", not "$")
  - [ ] All WA links open WhatsApp correctly (test on actual mobile device)
  - [ ] All internal links resolve to correct pages (no 404s in navigation)

- [ ] **10.5 Final pre-launch checklist**
  - [ ] `npm run build` completes with no errors or warnings
  - [ ] `npx tsc --noEmit` passes with no errors
  - [ ] No `console.error` or `console.warn` in browser console on any page
  - [ ] Environment variables documented (GA4 measurement ID, etc.)
  - [ ] Vercel deployment tested on preview URL
  - [ ] Custom domain `istyle.vercel.app` configured

---

## 16. Key Implementation Notes

- **No cart in V1.** If any code review finds a cart component being built, stop and confirm with user.
- **WhatsApp is the purchase channel.** The "Order on WhatsApp" button must always be the most visually dominant CTA on the PDP — never secondary to an "Add to Cart" that doesn't exist.
- **Teal is an accent, not a primary.** Don't let `#4a7a6e` dominate. It accents the warm brown palette.
- **Images are placeholders.** Use a consistent placeholder strategy so swapping to real images later is a find-and-replace in `products.ts`, not a component refactor.
- **Mobile-first CSS.** Write Tailwind styles mobile-first (base = mobile, `md:` = tablet, `lg:` = desktop).
- **100svh for hero on mobile.** Never `100vh` — it's taller than the visible area on iOS.
- **Font preloading.** Add `<link rel="preload">` for both Noto Serif and Manrope WOFF2 in the root layout.
- **Structured data.** Every PDP must include `<script type="application/ld+json">` with schema.org/Product.
- **OG images.** Every PDP needs `og:image` at 1200×630. This is critical — product links will be shared on WhatsApp constantly.
