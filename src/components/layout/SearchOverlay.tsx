"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSearchOverlay } from "./SearchContext";
import { searchProducts, type SearchResult } from "@/lib/search";
import { SearchIcon, CloseIcon } from "@/components/ui/Icons";
import { formatPrice } from "@/data/products";

export default function SearchOverlay() {
  const { isOpen, close } = useSearchOverlay();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();

  function handleClose() {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    setQuery("");
    setResults([]);
    setActiveIndex(-1);
    close();
  }

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      document.body.style.overflow = "";
    };
  }, []);

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const nextQuery = event.target.value;
    setQuery(nextQuery);
    setActiveIndex(-1);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setResults(searchProducts(nextQuery));
    }, 200);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    switch (event.key) {
      case "Escape":
        handleClose();
        break;
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((index) => Math.min(index + 1, results.length - 1));
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((index) => Math.max(index - 1, -1));
        break;
      case "Enter":
        if (activeIndex >= 0 && results[activeIndex]) {
          router.push(`/products/${results[activeIndex].item.slug}`);
          handleClose();
        }
        break;
    }
  }

  if (!isOpen) return null;

  const hasQuery = query.trim().length >= 2;

  return (
    <>
      <div
        className="fixed inset-0 z-60 bg-leather-brown/40"
        onClick={handleClose}
        aria-hidden
      />

      <div
        role="dialog"
        aria-label="Search products"
        aria-modal="true"
        className="fixed top-0 left-0 right-0 z-60 bg-warm-cream shadow-xl"
      >
        <div className="max-w-8xl mx-auto px-6 lg:px-12 flex items-center gap-4 h-16 lg:h-20 border-b border-outline">
          <SearchIcon
            size={20}
            className="text-on-surface-variant shrink-0"
            aria-hidden
          />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder="Search products..."
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            aria-label="Search products"
            aria-autocomplete="list"
            aria-controls="search-results-list"
            aria-activedescendant={
              activeIndex >= 0 ? `sr-${activeIndex}` : undefined
            }
            className="
              flex-1 bg-transparent
              font-sans text-body-lg text-leather-brown
              placeholder:text-on-surface-variant/50
              focus:outline-none
            "
          />
          <button
            onClick={handleClose}
            aria-label="Close search"
            className="
              w-9 h-9 flex items-center justify-center shrink-0
              text-on-surface-variant hover:text-leather-brown
              transition-colors duration-150
            "
          >
            <CloseIcon size={20} />
          </button>
        </div>

        <div
          id="search-results-list"
          className="max-w-8xl mx-auto px-6 lg:px-12 max-h-[60vh] overflow-y-auto"
        >
          {!hasQuery && (
            <p className="py-8 font-sans text-body-md text-on-surface-variant/70 text-center">
              Start typing to search...
            </p>
          )}

          {hasQuery && results.length === 0 && (
            <div className="py-10 flex flex-col items-center gap-3 text-center">
              <p className="font-sans font-semibold text-body-md text-leather-brown">
                No results for &ldquo;{query}&rdquo;
              </p>
              <p className="font-sans text-body-sm text-on-surface-variant max-w-[40ch]">
                Try browsing our collections or chat with us on WhatsApp.
              </p>
              <Link
                href="/collections"
                onClick={handleClose}
                className="
                  font-sans font-semibold text-body-sm
                  text-sage-teal hover:text-leather-brown
                  transition-colors duration-150
                "
              >
                Browse all collections -&gt;
              </Link>
            </div>
          )}

          {hasQuery && results.length > 0 && (
            <ul role="listbox" className="py-2 divide-y divide-outline">
              {results.map(({ item }, index) => (
                <li
                  key={item.slug}
                  id={`sr-${index}`}
                  role="option"
                  aria-selected={index === activeIndex}
                >
                  <Link
                    href={`/products/${item.slug}`}
                    onClick={handleClose}
                    className={`
                      flex items-center gap-4 px-2 py-3.5
                      transition-colors duration-100
                      hover:bg-surface-mid
                      ${index === activeIndex ? "bg-surface-mid" : ""}
                    `}
                  >
                    <div className="w-10 h-10 shrink-0 bg-surface-high overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${item.images[0]}')` }}
                        aria-hidden
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-sans font-semibold text-body-sm text-leather-brown truncate">
                        {item.name}
                      </p>
                      <p className="font-sans text-body-sm text-on-surface-variant capitalize">
                        {item.subcategory}
                      </p>
                    </div>

                    <p className="font-sans font-bold text-body-sm text-leather-brown shrink-0">
                      {formatPrice(item.price)}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
