"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/ui/Icons";

const SLIDES = [
  {
    image: "/images/placeholder/hero-1.jpg",
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
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function handleChange(event: MediaQueryListEvent) {
      setReducedMotion(event.matches);
    }

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || paused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrent((index) => (index + 1) % SLIDES.length);
    }, INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, reducedMotion]);

  const activeSlide = reducedMotion ? SLIDES[0] : SLIDES[current];

  return (
    <section
      aria-label="Hero"
      className="relative w-full h-svh overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((slide, index) => (
        <div
          key={slide.headline}
          aria-hidden={index !== current}
          className={`
            absolute inset-0
            ${slide.bg}
            transition-opacity
          `}
          style={{
            opacity: reducedMotion ? (index === 0 ? 1 : 0) : index === current ? 1 : 0,
            transitionDuration: `${FADE_DURATION}ms`,
            transitionProperty: "opacity",
            zIndex: index === current ? 1 : 0,
          }}
        >
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.75) 100%)",
            }}
          />
        </div>
      ))}

      <div className="relative z-20 h-full flex flex-col justify-end px-6 lg:px-16 pb-20 lg:pb-28 max-w-8xl mx-auto">
        <div className="flex mb-5 lg:mb-6">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/25 backdrop-blur-sm text-white text-[11px] font-sans font-semibold tracking-[0.18em] uppercase px-4 py-2 rounded-sm">
            <WhatsAppIcon size={13} aria-hidden />
            Available on Order &nbsp;·&nbsp; WhatsApp Us
          </span>
        </div>

        <h1
          className="
            font-serif font-bold text-white
            text-[2.5rem] leading-[1.05] sm:text-[3.5rem] lg:text-[5rem] xl:text-[5.5rem]
            max-w-[14ch] mb-6 lg:mb-8
            whitespace-pre-line
          "
        >
          {activeSlide.headline}
        </h1>

        <p className="font-sans font-light text-white/80 text-body-md lg:text-body-lg max-w-[52ch] mb-10 lg:mb-12">
          {activeSlide.sub}
        </p>

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

        {!reducedMotion && (
          <div className="flex items-center gap-2 mt-10 lg:mt-12" role="tablist" aria-label="Slide navigation">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.headline}
                role="tab"
                aria-selected={index === current}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrent(index)}
                className={`
                  h-0.5 transition-all duration-300
                  ${index === current ? "w-8 bg-white" : "w-4 bg-white/40 hover:bg-white/70"}
                `}
              />
            ))}
          </div>
        )}
      </div>

      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-[10px] font-sans tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-linear-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
