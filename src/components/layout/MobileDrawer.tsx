"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMobileMenu } from "./MobileMenuContext";
import SiteLogo from "./SiteLogo";
import {
  CloseIcon,
  ChevronDownIcon,
  WhatsAppIcon,
  InstagramIcon,
} from "@/components/ui/Icons";
import { WA_GENERIC_URL } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

const FOOTWEAR_SUBCATS = [
  { label: "Slides", href: "/collections/footwear?subcategory=slides" },
  { label: "Sandals", href: "/collections/footwear?subcategory=sandals" },
  { label: "Slippers", href: "/collections/footwear?subcategory=slippers" },
];

const BAGS_SUBCATS = [
  { label: "Briefcases", href: "/collections/bags?subcategory=briefcases" },
  { label: "Backpacks", href: "/collections/bags?subcategory=backpacks" },
  { label: "Weekenders", href: "/collections/bags?subcategory=weekenders" },
];

function AccordionItem({
  label,
  href,
  items,
  onLinkClick,
}: {
  label: string;
  href: string;
  items: { label: string; href: string }[];
  onLinkClick: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-outline/40">
      <button
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="
          w-full flex items-center justify-between
          px-6 py-4
          text-left text-body-md font-sans font-medium text-leather-brown
          hover:text-russet transition-colors duration-150
          min-h-11
        "
      >
        <span>{label}</span>
        <ChevronDownIcon
          size={18}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="pb-2">
          <li>
            <Link
              href={href}
              onClick={onLinkClick}
              className="flex items-center px-8 py-2.5 text-body-sm font-sans text-on-surface-variant hover:text-leather-brown transition-colors duration-150 min-h-11"
            >
              All {label}
            </Link>
          </li>
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onLinkClick}
                className="flex items-center px-8 py-2.5 text-body-sm font-sans text-on-surface-variant hover:text-leather-brown transition-colors duration-150 min-h-11"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        flex items-center px-6 py-4 border-b border-outline/40
        text-body-md font-sans font-medium text-leather-brown
        hover:text-russet transition-colors duration-150
        min-h-11
      "
    >
      {children}
    </Link>
  );
}

export default function MobileDrawer() {
  const { isOpen, close } = useMobileMenu();
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    close();
  }, [pathname, close]);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => closeButtonRef.current?.focus(), 50);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();

      if (event.key === "Tab" && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!first || !last) return;

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <>
      <div
        aria-hidden="true"
        onClick={close}
        className={`
          lg:hidden fixed inset-0 z-49 bg-leather-brown/50
          transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`
          lg:hidden fixed top-0 left-0 bottom-0 z-50
          w-[min(320px,90vw)]
          bg-warm-cream
          flex flex-col
          shadow-2xl
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline">
          <SiteLogo size="sm" />
          <button
            ref={closeButtonRef}
            onClick={close}
            aria-label="Close menu"
            className="
              w-11 h-11 flex items-center justify-center rounded-sm
              text-on-surface-variant hover:text-leather-brown
              transition-colors duration-150
              -mr-2
            "
          >
            <CloseIcon size={22} />
          </button>
        </div>

        <nav
          aria-label="Main menu"
          className="flex-1 overflow-y-auto overscroll-contain"
        >
          <AccordionItem
            label="Footwear"
            href="/collections/footwear"
            items={FOOTWEAR_SUBCATS}
            onLinkClick={close}
          />
          <AccordionItem
            label="Bags"
            href="/collections/bags"
            items={BAGS_SUBCATS}
            onLinkClick={close}
          />
          <NavLink href="/collections/accessories" onClick={close}>
            Accessories
          </NavLink>
          <NavLink href="/about" onClick={close}>
            Our Story
          </NavLink>
          <NavLink href="/contact" onClick={close}>
            Contact
          </NavLink>
        </nav>

        <div className="px-6 py-5 border-t border-outline space-y-3">
          <a
            href={WA_GENERIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick()}
            className="
              flex items-center justify-center gap-2.5
              w-full h-12 rounded-sm
              bg-whatsapp text-white
              font-sans font-semibold text-label-lg tracking-wide
              transition-opacity duration-150 hover:opacity-90
            "
          >
            <WhatsAppIcon size={20} aria-hidden />
            Order on WhatsApp
          </a>

          <a
            href="https://www.instagram.com/istyle_leathers/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center gap-2
              text-on-surface-variant hover:text-leather-brown
              text-body-sm font-sans transition-colors duration-150
              min-h-11
            "
          >
            <InstagramIcon size={18} aria-hidden />
            @istyle_leathers
          </a>
        </div>
      </div>
    </>
  );
}
