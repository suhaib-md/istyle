import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { WA_GENERIC_URL } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Learn about the craft and passion behind I Style Leathers, handcrafted in Melvisharam, Tamil Nadu.",
};

/* ── Craft process steps ─────────────────────────────────── */
const CRAFT_STEPS = [
  {
    number: "01",
    title: "Material Selection",
    description:
      "Every piece starts with the hide. We select full-grain leathers for their natural texture, durability, and the way they age — developing character rather than cracking.",
    image: "/images/placeholder/craft-material.jpg",
  },
  {
    number: "02",
    title: "Cutting & Shaping",
    description:
      "Patterns are traced and cut by hand. Each cut is deliberate — the grain direction, the strap width, the sole outline. A millimetre off here means an ill-fitting finish.",
    image: "/images/placeholder/craft-cutting.jpg",
  },
  {
    number: "03",
    title: "Stitching",
    description:
      "We use a saddle-stitch technique: two needles, one thread, each loop tightened by hand. It takes twice as long as machine stitching and lasts twice as long.",
    image: "/images/placeholder/craft-stitching.jpg",
  },
  {
    number: "04",
    title: "Finishing",
    description:
      "Edges are burnished, surfaces conditioned, and hardware fitted. The final inspection is done under daylight — nothing leaves the workshop that we wouldn't wear ourselves.",
    image: "/images/placeholder/craft-finishing.jpg",
  },
];

/* ── Values ─────────────────────────────────────────────── */
const VALUES = [
  {
    heading: "Handcrafted with Care",
    body: "Every piece is made by hand in our workshop in Melvisharam. No factory lines, no shortcuts — just skilled hands and the time it takes to do things right.",
  },
  {
    heading: "Available on Order",
    body: "We make to order. That means your piece is fresh, not sitting on a shelf for months. It also means we can accommodate custom sizing and colour requests.",
  },
  {
    heading: "Made for Indian Needs",
    body: "Designed for the Indian climate, the Indian street, and the Indian aesthetic. Our soles handle heat and monsoon. Our silhouettes work with kurtas and trousers alike.",
  },
];

/* ── Product Tour ────────────────────────────────────────── */
const PRODUCT_TOUR = [
  {
    label: "Footwear",
    href: "/collections/footwear",
    description: "Sandals, slides, and slippers built for daily wear.",
    bg: "bg-[#2a1208]",
  },
  {
    label: "Bags",
    href: "/collections/bags",
    description: "Briefcases, backpacks, and weekenders that go the distance.",
    bg: "bg-[#1b3a5c]",
  },
  {
    label: "Accessories",
    href: "/collections/accessories",
    description: "Watch rolls, keychains, and small leather goods.",
    bg: "bg-[#3a2a1a]",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════
          6.2  HERO
      ══════════════════════════════════════════════════ */}
      <section
        aria-label="About hero"
        className="relative w-full min-h-[70vh] lg:min-h-[80vh] bg-leather-brown flex items-end overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/placeholder/about-hero.jpg')" }}
          aria-hidden
        />
        {/* Gradient */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(53,23,16,0.92) 0%, rgba(53,23,16,0.3) 60%, rgba(53,23,16,0.1) 100%)" }}
          aria-hidden
        />

        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
          <AnimatedSection>
            <p className="label-sm-caps text-sage-teal mb-5">Our Story</p>
            <h1 className="font-serif font-bold text-white text-headline-lg lg:text-[4rem] xl:text-[5rem] leading-tight max-w-[16ch] mb-5">
              The Soul Behind Every Stitch
            </h1>
            <p className="font-sans font-light text-white/70 text-body-lg lg:text-[1.25rem] max-w-[50ch] leading-relaxed">
              A family workshop in Melvisharam. Leather worked by hand. Products
              built to outlast the occasions you wear them to.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6.3  ORIGIN STORY
      ══════════════════════════════════════════════════ */}
      <section aria-label="Origin story" className="py-16 lg:py-24 bg-warm-cream">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* Image */}
            <AnimatedSection className="relative">
              <div className="aspect-[4/5] bg-surface-high overflow-hidden max-w-[520px] mx-auto lg:mx-0">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/placeholder/about-workshop.jpg')" }}
                  role="img"
                  aria-label="Craftsman at work in the I Style Leathers workshop"
                />
              </div>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection delay={150}>
              <p className="label-sm-caps text-sage-teal mb-4">Melvisharam, Tamil Nadu</p>
              <h2 className="font-serif font-bold text-leather-brown text-headline-md lg:text-headline-lg leading-tight mb-6">
                Made Here.<br />Worn Everywhere.
              </h2>
              <div className="space-y-4 font-sans text-body-lg text-on-surface-variant leading-relaxed">
                <p>
                  I Style Leathers started the way most honest things do — with a skill
                  passed from one generation to the next, and a dissatisfaction with what
                  the market was offering. The sandals on the shelves were either too cheap
                  to last or too expensive to justify. We knew we could do better.
                </p>
                <p>
                  Our workshop is in Melvisharam, a town in Ranipet District with a long
                  tradition of leather craft. Every cutter, every stitcher, every finisher
                  here has spent years learning what we do. The leather we use is selected
                  for its grain and its grain alone — nothing that will crack at the fold
                  points after six months of wear.
                </p>
                <p>
                  We sell directly. No retail markup, no middleman. You place an order on
                  WhatsApp, we make it, we ship it. The price you pay reflects the leather
                  and the labour — not the margin of a shop that never touched what it sold.
                </p>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6.4  THE CRAFT — dark section, stagger reveal
      ══════════════════════════════════════════════════ */}
      <section
        aria-label="Our craft process"
        className="py-16 lg:py-24 bg-leather-brown"
      >
        <div className="max-w-8xl mx-auto px-6 lg:px-12">

          <AnimatedSection className="mb-12 lg:mb-16">
            <p className="label-sm-caps text-sage-teal mb-4">The Process</p>
            <h2 className="font-serif font-bold text-white text-headline-md lg:text-headline-lg leading-tight max-w-[20ch]">
              Four Steps. No Shortcuts.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {CRAFT_STEPS.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 150}>
                {/* Step image */}
                <div className="aspect-[4/3] bg-warm-cream/10 overflow-hidden mb-5">
                  <div
                    className="w-full h-full bg-cover bg-center opacity-70"
                    style={{ backgroundImage: `url('${step.image}')` }}
                    aria-hidden
                  />
                </div>

                {/* Step number */}
                <p className="font-serif font-bold text-[3rem] leading-none text-white/20 mb-2 select-none">
                  {step.number}
                </p>

                {/* Heading */}
                <h3 className="font-serif font-bold text-white text-headline-sm mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-body-sm text-white/65 leading-relaxed">
                  {step.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6.5  PRODUCT TOUR
      ══════════════════════════════════════════════════ */}
      <section aria-label="Product categories" className="py-16 lg:py-24 bg-parchment">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">

          <AnimatedSection className="mb-10 lg:mb-12">
            <p className="label-sm-caps text-sage-teal mb-3">What We Make</p>
            <h2 className="font-serif font-bold text-leather-brown text-headline-md lg:text-headline-lg">
              Browse the Collection
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            {PRODUCT_TOUR.map((cat, i) => (
              <AnimatedSection key={cat.href} delay={i * 100}>
                <Link
                  href={cat.href}
                  className={`group relative block overflow-hidden h-56 lg:h-72 ${cat.bg}`}
                  aria-label={`Shop ${cat.label}`}
                >
                  {/* Placeholder bg image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-50 transition-transform duration-700 group-hover:scale-[1.04]"
                    style={{ backgroundImage: `url('/images/placeholder/category-${cat.label.toLowerCase()}.jpg')` }}
                    aria-hidden
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%)" }}
                    aria-hidden
                  />

                  <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                    <h3 className="font-serif font-bold text-white text-headline-sm mb-1">
                      {cat.label}
                    </h3>
                    <p className="font-sans text-body-sm text-white/70 mb-3">
                      {cat.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-sans font-semibold text-label-lg text-white/90 group-hover:gap-3 transition-all duration-200">
                      Shop Now <ArrowRightIcon size={14} aria-hidden />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6.6  VALUES
      ══════════════════════════════════════════════════ */}
      <section aria-label="Our values" className="py-16 lg:py-24 bg-warm-cream">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">

          <AnimatedSection className="mb-10 lg:mb-14 max-w-[42ch]">
            <p className="label-sm-caps text-sage-teal mb-3">What We Stand For</p>
            <h2 className="font-serif font-bold text-leather-brown text-headline-md lg:text-headline-lg leading-tight">
              Three Things We Don't Compromise On
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {VALUES.map((v, i) => (
              <AnimatedSection key={v.heading} delay={i * 100}>
                {/* Decorative rule */}
                <div className="w-10 h-[2px] bg-sage-teal mb-6" />
                <h3 className="font-serif font-bold text-leather-brown text-headline-sm mb-3">
                  {v.heading}
                </h3>
                <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                  {v.body}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6.7  CLOSING CTA
      ══════════════════════════════════════════════════ */}
      <section aria-label="Call to action" className="py-16 lg:py-24 bg-surface-low">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="flex flex-col items-center text-center max-w-[560px] mx-auto">

            <p className="label-sm-caps text-sage-teal mb-4">Ready?</p>

            <h2 className="font-serif font-bold text-leather-brown text-headline-md lg:text-headline-lg leading-tight mb-4">
              Find Something Made for You
            </h2>

            <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed mb-10 max-w-[44ch]">
              Browse the collection, pick what you love, and send us a message on
              WhatsApp. We'll take it from there.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/collections"
                className="
                  inline-flex items-center gap-2
                  bg-leather-brown text-warm-cream
                  font-sans font-semibold text-label-lg tracking-wide
                  px-8 py-4
                  hover:bg-russet transition-colors duration-200
                "
              >
                Shop the Collection
                <ArrowRightIcon size={16} aria-hidden />
              </Link>

              <a
                href={WA_GENERIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2.5
                  border border-leather-brown text-leather-brown
                  font-sans font-semibold text-label-lg tracking-wide
                  px-8 py-4
                  hover:bg-leather-brown hover:text-warm-cream
                  transition-colors duration-200
                "
              >
                <WhatsAppIcon size={18} aria-hidden />
                Order on WhatsApp
              </a>
            </div>

          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
