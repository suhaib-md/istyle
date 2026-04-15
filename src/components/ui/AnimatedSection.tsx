"use client";

import React, { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  /** Delay before animation starts (ms). Use for stagger effects. */
  delay?: number;
  /** Animation threshold — 0 to 1. Default 0.15. */
  threshold?: number;
  /** translateY offset to start from (px). Default 20. */
  offsetY?: number;
  /** Animation duration (ms). Default 600. */
  duration?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * Wraps children in a scroll-triggered fade-in + translateY animation.
 * Immediately renders (no animation) when prefers-reduced-motion is set.
 */
export default function AnimatedSection({
  children,
  className,
  delay = 0,
  threshold = 0.15,
  offsetY = 20,
  duration = 600,
  as: Tag = "div",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion — skip animation entirely
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    // Set initial hidden state
    el.style.opacity = "0";
    el.style.transform = `translateY(${offsetY}px)`;
    el.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
    if (delay) el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold, offsetY, duration]);

  return (
    // @ts-expect-error — dynamic tag
    <Tag ref={ref} className={className} style={{ willChange: "opacity, transform" } as CSSProperties}>
      {children}
    </Tag>
  );
}
