"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/ui/Icons";

const SLIDES = [
  {
    image: "/images/placeholder/hero-1.jpg",
    // Warm dark leather-brown placeholder
    bg: "bg-[#2a1208]",
    headline: "Timeless Style,\nMade by Hand.",
    sub: "Handcrafted leather goods from Melvisharam, Tamil Nadu.",
  },
  {
    image: "/images/placeholder/hero-2.jpg",
    bg: "bg-[#1b3a5c]",
    headline: "Built for\nEvery Journey.",
    sub: "Briefcases, backpacks, and weekenders that outlast every job you'll have.",
  },
  {
    image: "/images/placeholder/hero-3.jpg",
    bg: "bg-[#3d2010]",
    headline: "Wear Something\nMemorable.",
    sub: "Sandals, slides, and slippers designed for Indian summers.",
  },
];

const INTERVAL = 5000;
const FADE_DURATION = 300;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (reducedMotion || paused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, reducedMotion]);

  const activeSlide = reducedMotion ? SLIDES[0] : SLIDES[current];

  return (
    <section
      aria-label="Hero"
      className="relative w-full h-[100svh] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides — crossfade via opacity */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          aria-hidden={i !== current}
          className={`
            absolute inset-0
            ${slide.bg}
            transition-opacity
            ${reducedMotion ? "" : ""}
          `}
          style={{
            opacity: reducedMotion ? (i === 0 ? 1 : 0) : i === current ? 1 : 0,
            transitionDuration: `${FADE_DURATION}ms`,
            transitionProperty: "opacity",
            zIndex: i === current ? 1 : 0,
          }}
        >
          {/* Gradient overlay — stronger at bottom */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.75) 100%)",
            }}
          />
        </div>
      ))}

      {/* Content — sits above all slides */}
      <div className="relative z-20 h-full flex flex-col justify-end px-6 lg:px-16 pb-20 lg:pb-28 max-w-[1440px] mx-auto">
        {/* Badge */}
        <div className="flex mb-5 lg:mb-6">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/25 backdrop-blur-sm text-white text-[11px] font-sans font-semibold tracking-[0.18em] uppercase px-4 py-2 rounded-sm">
            <WhatsAppIcon size={13} aria-hidden />
            Available on Order &nbsp;·&nbsp; WhatsApp Us
          </span>
        </div>

        {/* Headline */}
        <h1
          className="
            font-serif font-bold text-white
            text-[2.5rem] leading-[1.05] sm:text-[3.5rem] lg:text-[5rem] xl:text-[5.5rem]
            max-w-[14ch] mb-4 lg:mb-6
            whitespace-pre-line
          "
        >
          {activeSlide.headline}
        </h1>

        {/* Sub-headline */}
        <p className="font-sans font-light text-white/80 text-body-md lg:text-body-lg max-w-[44ch] mb-8 lg:mb-10">
          {activeSlide.sub}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 lg:gap-4">
          <Link
            href="/collections"
            className="
              inline-flex items-center gap-2
              bg-warm-cream text-leather-brown
              font-sans font-semibold text-label-lg tracking-wide
              px-6 py-3.5 lg:px-8 lg:py-4
              hover:bg-parchment
              transition-colors duration-200
            "
          >
            Shop the Collection
            <ArrowRightIcon size={16} aria-hidden />
          </Link>
          <Link
            href="/about"
            className="
              inline-flex items-center gap-2
              border border-white/50 text-white
              font-sans font-semibold text-label-lg tracking-wide
              px-6 py-3.5 lg:px-8 lg:py-4
              hover:bg-white/10
              transition-colors duration-200
            "
          >
            Our Story
          </Link>
        </div>

        {/* Slide indicators */}
        {!reducedMotion && (
          <div className="flex items-center gap-2 mt-10 lg:mt-12" role="tablist" aria-label="Slide navigation">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`
                  h-[2px] transition-all duration-300
                  ${i === current ? "w-8 bg-white" : "w-4 bg-white/40 hover:bg-white/70"}
                `}
              />
            ))}
          </div>
        )}
      </div>

      {/* Scroll hint */}
      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-[10px] font-sans tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
