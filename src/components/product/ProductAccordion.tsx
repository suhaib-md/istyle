"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/ui/Icons";
import type { Product } from "@/types/product";

interface AccordionSection {
  id: string;
  title: string;
  content: string;
  defaultOpen?: boolean;
}

function AccordionItem({
  title,
  content,
  defaultOpen = false,
}: Omit<AccordionSection, "id">) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-outline">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="
          w-full flex items-center justify-between
          py-4 text-left
          font-sans font-semibold text-body-md text-leather-brown
          hover:text-russet transition-colors duration-150
        "
      >
        <span>{title}</span>
        <ChevronDownIcon
          size={18}
          className={`shrink-0 ml-4 transition-transform duration-300 text-on-surface-variant ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="font-sans text-body-md text-on-surface-variant leading-relaxed pb-5 whitespace-pre-line">
          {content}
        </p>
      </div>
    </div>
  );
}

interface ProductAccordionProps {
  product: Product;
}

export default function ProductAccordion({ product }: ProductAccordionProps) {
  const sections: AccordionSection[] = [
    {
      id: "description",
      title: "Description",
      content: product.longDescription,
      defaultOpen: true,
    },
    {
      id: "materials",
      title: "Materials & Care",
      content: product.materialsAndCare,
    },
    {
      id: "dimensions",
      title: "Dimensions",
      content: product.dimensions,
    },
    {
      id: "shipping",
      title: "Shipping & Returns",
      content:
        "We ship pan-India via trusted courier partners. Orders are processed within 2–3 business days after confirmation on WhatsApp. Delivery typically takes 5–7 business days.\n\nReturns are accepted within 7 days of delivery for unused items in original condition. Custom or made-to-order pieces are non-returnable. Contact us on WhatsApp to initiate a return.",
    },
  ];

  return (
    <div className="border-t border-outline">
      {sections.map((s) => (
        <AccordionItem
          key={s.id}
          title={s.title}
          content={s.content}
          defaultOpen={s.defaultOpen}
        />
      ))}
    </div>
  );
}
