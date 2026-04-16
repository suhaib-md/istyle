"use client";

import { useEffect, useState } from "react";
import { CloseIcon } from "@/components/ui/Icons";

export type SortOption = "featured" | "price-asc" | "price-desc" | "new";

interface Subcategory {
  slug: string;
  label: string;
}

interface FilterBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  subcategories: Subcategory[];
  activeSubcategory: string;
  activeSort: SortOption;
  onApply: (subcategory: string, sort: SortOption) => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "new", label: "New Arrivals" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

export default function FilterBottomSheet({
  isOpen,
  onClose,
  subcategories,
  activeSubcategory,
  activeSort,
  onApply,
}: FilterBottomSheetProps) {
  const [draftSubcategory, setDraftSubcategory] = useState(activeSubcategory);
  const [draftSort, setDraftSort] = useState<SortOption>(activeSort);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <>
      <div
        aria-hidden
        onClick={onClose}
        className={`
          lg:hidden fixed inset-0 z-49 bg-leather-brown/50
          transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Filter products"
        className={`
          lg:hidden fixed inset-x-0 bottom-0 z-50
          bg-warm-cream rounded-t-[12px]
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-y-0" : "translate-y-full"}
          max-h-[80vh]
        `}
      >
        <div className="flex justify-center pt-3 pb-1 shrink-0">
          <div className="w-10 h-1 rounded-full bg-outline" />
        </div>

        <div className="flex items-center justify-between px-5 py-3 border-b border-outline shrink-0">
          <h2 className="font-sans font-semibold text-body-md text-leather-brown">
            Filter & Sort
          </h2>
          <button
            onClick={onClose}
            aria-label="Close filters"
            className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-leather-brown transition-colors"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-5 py-5 space-y-7">
          {subcategories.length > 0 && (
            <div>
              <p className="label-sm-caps text-leather-brown mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                <SheetChip
                  label="All"
                  selected={draftSubcategory === ""}
                  onClick={() => setDraftSubcategory("")}
                />
                {subcategories.map((subcategory) => (
                  <SheetChip
                    key={subcategory.slug}
                    label={subcategory.label}
                    selected={draftSubcategory === subcategory.slug}
                    onClick={() => setDraftSubcategory(subcategory.slug)}
                  />
                ))}
              </div>
            </div>
          )}

          <div>
            <p className="label-sm-caps text-leather-brown mb-3">Sort By</p>
            <div className="flex flex-wrap gap-2">
              {SORT_OPTIONS.map((option) => (
                <SheetChip
                  key={option.value}
                  label={option.label}
                  selected={draftSort === option.value}
                  onClick={() => setDraftSort(option.value)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="px-5 py-4 border-t border-outline shrink-0 flex gap-3">
          <button
            onClick={() => {
              onApply("", "featured");
              onClose();
            }}
            className="flex-1 py-3 border border-outline font-sans font-semibold text-label-lg text-on-surface-variant hover:border-leather-brown hover:text-leather-brown transition-colors duration-150"
          >
            Clear All
          </button>
          <button
            onClick={() => {
              onApply(draftSubcategory, draftSort);
              onClose();
            }}
            className="flex-1 py-3 bg-leather-brown text-warm-cream font-sans font-semibold text-label-lg hover:bg-russet transition-colors duration-200"
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
}

function SheetChip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`
        px-4 py-2 rounded-full font-sans font-medium text-body-sm border
        transition-colors duration-150
        ${
          selected
            ? "bg-leather-brown border-leather-brown text-warm-cream"
            : "border-outline text-leather-brown hover:border-leather-brown"
        }
      `}
    >
      {label}
    </button>
  );
}
