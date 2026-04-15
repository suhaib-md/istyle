"use client";

import { useEffect } from "react";
import { CloseIcon } from "@/components/ui/Icons";

const SIZE_GUIDE = [
  { uk: 6, cm: "24.5" },
  { uk: 7, cm: "25.4" },
  { uk: 8, cm: "26.2" },
  { uk: 9, cm: "27.1" },
  { uk: 10, cm: "27.9" },
  { uk: 11, cm: "28.8" },
];

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden
        onClick={onClose}
        className="fixed inset-0 z-[60] bg-leather-brown/50 transition-opacity"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="size-guide-title"
        className="
          fixed z-[61] inset-x-4 top-1/2 -translate-y-1/2
          sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-sm
          bg-warm-cream shadow-2xl
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline">
          <h2 id="size-guide-title" className="font-sans font-semibold text-body-md text-leather-brown">
            Size Guide (UK)
          </h2>
          <button
            onClick={onClose}
            aria-label="Close size guide"
            className="w-9 h-9 flex items-center justify-center text-on-surface-variant hover:text-leather-brown transition-colors"
          >
            <CloseIcon size={18} />
          </button>
        </div>

        {/* Table */}
        <div className="px-6 py-5">
          <table className="w-full font-sans text-body-sm">
            <thead>
              <tr className="border-b border-outline">
                <th className="text-left pb-2 font-semibold text-leather-brown">UK Size</th>
                <th className="text-left pb-2 font-semibold text-leather-brown">Foot Length (cm)</th>
              </tr>
            </thead>
            <tbody>
              {SIZE_GUIDE.map((row) => (
                <tr key={row.uk} className="border-b border-outline/40 last:border-0">
                  <td className="py-2.5 text-leather-brown font-medium">{row.uk}</td>
                  <td className="py-2.5 text-on-surface-variant">{row.cm} cm</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 font-sans text-[12px] text-on-surface-variant leading-relaxed">
            Measure your foot from heel to longest toe. If between sizes, size up. All measurements are in UK sizing.
          </p>
        </div>
      </div>
    </>
  );
}
