"use client";

import { useState, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Chip from "@/components/ui/Chip";
import FilterBottomSheet, { type SortOption } from "./FilterBottomSheet";

interface Subcategory {
  slug: string;
  label: string;
}

interface FilterBarProps {
  subcategories: Subcategory[];
  totalProducts: number;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "new", label: "New" },
  { value: "price-asc", label: "Price ↑" },
  { value: "price-desc", label: "Price ↓" },
];

export default function FilterBar({ subcategories, totalProducts }: FilterBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sheetOpen, setSheetOpen] = useState(false);

  const activeSubcategory = searchParams.get("subcategory") ?? "";
  const activeSort = (searchParams.get("sort") as SortOption) ?? "featured";

  const activeFilterCount = [
    activeSubcategory !== "" ? 1 : 0,
    activeSort !== "featured" ? 1 : 0,
  ].reduce((a, b) => a + b, 0);

  const buildUrl = useCallback(
    (subcategory: string, sort: SortOption) => {
      const params = new URLSearchParams();
      if (subcategory) params.set("subcategory", subcategory);
      if (sort !== "featured") params.set("sort", sort);
      const qs = params.toString();
      return qs ? `${pathname}?${qs}` : pathname;
    },
    [pathname]
  );

  function setFilter(subcategory: string, sort: SortOption) {
    router.push(buildUrl(subcategory, sort), { scroll: false });
  }

  function clearAll() {
    router.push(pathname, { scroll: false });
  }

  return (
    <>
      {/* ── Desktop filter bar ────────────────────────────── */}
      <div className="hidden lg:flex items-center gap-3 flex-wrap py-4 border-b border-outline">

        {/* Subcategory chips */}
        {subcategories.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <Chip
              label="All"
              selected={activeSubcategory === ""}
              onClick={() => setFilter("", activeSort)}
            />
            {subcategories.map((s) => (
              <Chip
                key={s.slug}
                label={s.label}
                selected={activeSubcategory === s.slug}
                onClick={() => setFilter(s.slug, activeSort)}
              />
            ))}
          </div>
        )}

        {/* Divider */}
        {subcategories.length > 0 && (
          <div className="h-5 w-px bg-outline mx-1" aria-hidden />
        )}

        {/* Sort chips */}
        <div className="flex items-center gap-2 flex-wrap">
          {SORT_OPTIONS.map((opt) => (
            <Chip
              key={opt.value}
              label={opt.label}
              selected={activeSort === opt.value}
              onClick={() => setFilter(activeSubcategory, opt.value)}
            />
          ))}
        </div>

        {/* Clear All */}
        {activeFilterCount > 0 && (
          <button
            onClick={clearAll}
            className="ml-auto font-sans text-body-sm text-on-surface-variant hover:text-russet transition-colors duration-150 underline-offset-2 hover:underline"
          >
            Clear all
          </button>
        )}
      </div>

      {/* ── Mobile filter bar ────────────────────────────── */}
      <div className="flex lg:hidden items-center justify-between gap-3 py-3 border-b border-outline">
        <button
          onClick={() => setSheetOpen(true)}
          className="
            inline-flex items-center gap-2
            font-sans font-semibold text-label-lg text-leather-brown
            border border-outline px-4 py-2
            hover:border-leather-brown transition-colors duration-150
          "
          aria-haspopup="dialog"
        >
          Filter{activeFilterCount > 0 ? ` (${activeFilterCount})` : ""}
          <span className="text-on-surface-variant text-[10px]">▼</span>
        </button>

        {/* Active subcategory label — shows what's applied */}
        {activeSubcategory && (
          <span className="font-sans text-body-sm text-on-surface-variant capitalize">
            {subcategories.find((s) => s.slug === activeSubcategory)?.label}
          </span>
        )}

        {activeFilterCount > 0 && (
          <button
            onClick={clearAll}
            className="ml-auto font-sans text-body-sm text-on-surface-variant hover:text-russet transition-colors duration-150"
          >
            Clear
          </button>
        )}
      </div>

      {/* Bottom sheet — mobile only */}
      <FilterBottomSheet
        isOpen={sheetOpen}
        onClose={() => setSheetOpen(false)}
        subcategories={subcategories}
        activeSubcategory={activeSubcategory}
        activeSort={activeSort}
        onApply={(subcategory, sort) => {
          setFilter(subcategory, sort);
        }}
      />
    </>
  );
}
