"use client";

import { useState, useRef, useCallback } from "react";
import { ChevronDownIcon } from "@/components/ui/Icons";

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Mobile: sync dot indicator when user scrolls snap carousel
  const handleScroll = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.offsetWidth);
    setActiveIndex(index);
  }, []);

  // Mobile: scroll to image when dot clicked
  function scrollToImage(index: number) {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.offsetWidth, behavior: "smooth" });
    setActiveIndex(index);
  }

  return (
    <div className="lg:flex lg:gap-4">
      {/* ── Desktop: thumbnail strip (left) + primary image (right) ── */}
      <div className="hidden lg:flex flex-col gap-2 w-[72px] shrink-0">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`View image ${i + 1} of ${images.length}`}
            className={`
              relative aspect-square w-full overflow-hidden bg-surface-mid
              border-[1.5px] transition-colors duration-150
              ${i === activeIndex ? "border-leather-brown" : "border-transparent hover:border-outline"}
            `}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${src}')` }}
            />
          </button>
        ))}
      </div>

      {/* ── Desktop: primary image ── */}
      <div className="hidden lg:block flex-1 relative aspect-[4/5] bg-surface-mid overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-200"
          style={{ backgroundImage: `url('${images[activeIndex]}')` }}
          role="img"
          aria-label={`${productName} — image ${activeIndex + 1}`}
        />
      </div>

      {/* ── Mobile: horizontal scroll snap carousel ── */}
      <div className="lg:hidden">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          aria-label={`${productName} image gallery`}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="flex-none w-full aspect-[4/5] bg-surface-mid snap-start relative overflow-hidden"
              aria-hidden={i !== activeIndex}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${src}')` }}
                role="img"
                aria-label={`${productName} — image ${i + 1} of ${images.length}`}
              />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="flex justify-center gap-1.5 mt-3" role="tablist" aria-label="Image navigation">
            {images.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Image ${i + 1}`}
                onClick={() => scrollToImage(i)}
                className={`
                  h-1.5 rounded-full transition-all duration-200
                  ${i === activeIndex ? "w-5 bg-leather-brown" : "w-1.5 bg-outline"}
                `}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
