# I Style Leathers

Brand + e-commerce website for I Style Leathers — a handcrafted leather goods maker based in Melvisharam, Tamil Nadu, India.

**Live:** [istyle.vercel.app](https://istyle.vercel.app)
**Instagram:** [@istyleLeathers](https://www.instagram.com/istyleLeathers/)
**Order:** WhatsApp +91 98423 76554

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, SSG) |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Fonts | Noto Serif + Manrope (Google Fonts) |
| Product data | Static TypeScript (V1) |
| Search | Fuse.js (client-side) |
| Hosting | Vercel |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # production build
npx tsc --noEmit # type check
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── collections/[category]/page.tsx
│   ├── products/[slug]/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── search/page.tsx
├── components/
│   ├── layout/             # Navbar, Footer, Drawer, FAB, BottomTabBar
│   ├── home/               # All 8 homepage sections
│   ├── catalog/            # ProductCard, ProductGrid, FilterBar (Phase 4)
│   ├── product/            # PDP components (Phase 5)
│   └── ui/                 # AnimatedSection, Button, Badge, Chip, Icons
├── data/
│   ├── products.ts         # 12 products (6 footwear, 4 bags, 2 accessories)
│   └── instagram.ts        # 6 static Instagram posts
├── lib/
│   ├── whatsapp.ts         # WA URL builder
│   └── search.ts           # Fuse.js search
└── types/
    └── product.ts          # Product TypeScript types
```

---

## Build Progress

| Phase | Description | Status |
|---|---|---|
| 0 | Scaffold, design tokens, fonts, product data | ✅ Complete |
| 1 | Root layout, Navbar, Footer, Mobile Drawer, BottomTabBar, WhatsApp FAB | ✅ Complete |
| 2 | Homepage — all 8 sections + AnimatedSection utility | ✅ Complete |
| 3 | Shared UI: Button, Badge, Chip components | ✅ Complete |
| 4 | Collection/catalog pages with filters | ✅ Complete |
| 5 | Product Detail Pages | ✅ Complete |
| 6 | About page | ✅ Complete |
| 7 | Contact page + Custom 404 | 🔲 Next |
| 8 | Search overlay (Fuse.js) | 🔲 Pending |
| 9 | SEO, PWA, Performance | 🔲 Pending |
| 10 | QA + Cross-browser | 🔲 Pending |

Full spec in [CLAUDE.md](./CLAUDE.md).

---

## Ordering Model (V1)

No cart. No checkout. Every "Order" action opens a WhatsApp link with a pre-filled message. This is intentional — it matches how the business currently operates and keeps the site lean for V1.

---

## Images

All images are placeholders (`/images/placeholder/`). Real product photography will be dropped in at a later phase — no component changes needed, just file replacements.

---

## V1 vs V2

V1 (this repo): Static product data, WhatsApp-only ordering, static Instagram grid, placeholder images.

V2 (future): Sanity CMS, native cart + Razorpay checkout, live Instagram feed, user accounts.
