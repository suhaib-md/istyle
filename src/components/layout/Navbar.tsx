"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMobileMenu } from "./MobileMenuContext";
import { useSearchOverlay } from "./SearchContext";
import SiteLogo from "./SiteLogo";
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
} from "@/components/ui/Icons";

const FOOTWEAR_DROPS = [
  { label: "All Footwear", href: "/collections/footwear" },
  { label: "Slides", href: "/collections/footwear?subcategory=slides" },
  { label: "Sandals", href: "/collections/footwear?subcategory=sandals" },
  { label: "Slippers", href: "/collections/footwear?subcategory=slippers" },
];

const BAGS_DROPS = [
  { label: "All Bags", href: "/collections/bags" },
  { label: "Briefcases", href: "/collections/bags?subcategory=briefcases" },
  { label: "Backpacks", href: "/collections/bags?subcategory=backpacks" },
  { label: "Weekenders", href: "/collections/bags?subcategory=weekenders" },
];

function Dropdown({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div
      className="
        absolute top-full left-1/2 -translate-x-1/2 pt-2
        opacity-0 invisible pointer-events-none
        group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto
        transition-all duration-200
      "
    >
      <ul
        className="
          min-w-45 bg-warm-cream border border-outline
          shadow-lg py-1
        "
      >
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="
                block px-4 py-2.5
                text-body-sm font-sans text-leather-brown
                hover:bg-surface-mid hover:text-russet
                transition-colors duration-150
                first:font-semibold
              "
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NavItem({
  href,
  label,
  dropdown,
  active,
}: {
  href: string;
  label: string;
  dropdown?: { label: string; href: string }[];
  active: boolean;
}) {
  const base = `
    relative flex items-center gap-0.5
    text-body-sm font-sans font-medium tracking-wide
    text-leather-brown hover:text-russet
    transition-colors duration-150
    py-1
  `;

  const underline = `
    absolute -bottom-0.5 left-0 right-0 h-px bg-leather-brown
    transition-opacity duration-150
    ${active ? "opacity-100" : "opacity-0"}
  `;

  if (dropdown) {
    return (
      <div className="group relative">
        <Link href={href} className={base} aria-current={active ? "page" : undefined}>
          {label}
          <span className="sr-only">(has submenu)</span>
        </Link>
        <span className={underline} aria-hidden />
        <Dropdown items={dropdown} />
      </div>
    );
  }

  return (
    <div className="relative">
      <Link href={href} className={base} aria-current={active ? "page" : undefined}>
        {label}
      </Link>
      <span className={underline} aria-hidden />
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { open } = useMobileMenu();
  const { open: openSearch } = useSearchOverlay();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-40
        bg-warm-cream border-b border-outline
        transition-all duration-300
        ${scrolled ? "py-2 shadow-sm" : "py-4"}
      `}
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="hidden lg:flex items-center justify-between gap-8">
          <SiteLogo priority />

          <nav aria-label="Main navigation" className="flex items-center gap-8">
            <NavItem
              href="/collections/footwear"
              label="Footwear"
              dropdown={FOOTWEAR_DROPS}
              active={isActive("/collections/footwear")}
            />
            <NavItem
              href="/collections/bags"
              label="Bags"
              dropdown={BAGS_DROPS}
              active={isActive("/collections/bags")}
            />
            <NavItem
              href="/collections/accessories"
              label="Accessories"
              active={isActive("/collections/accessories")}
            />
            <NavItem href="/about" label="Our Story" active={isActive("/about")} />
          </nav>

          <div className="flex items-center gap-1">
            <button
              onClick={openSearch}
              aria-label="Search"
              className="
                w-10 h-10 flex items-center justify-center rounded-sm
                text-leather-brown hover:text-russet hover:bg-surface-mid
                transition-colors duration-150
              "
            >
              <SearchIcon size={20} />
            </button>
            <button
              disabled
              aria-label="Cart (coming soon)"
              className="
                w-10 h-10 flex items-center justify-center rounded-sm
                text-outline cursor-not-allowed
              "
            >
              <ShoppingBagIcon size={20} />
            </button>
          </div>
        </div>

        <div className="flex lg:hidden items-center justify-between">
          <button
            onClick={open}
            aria-label="Open menu"
            className="
              w-11 h-11 flex items-center justify-center -ml-2
              text-leather-brown hover:text-russet
              transition-colors duration-150
            "
          >
            <MenuIcon size={22} />
          </button>

          <SiteLogo priority />

          <div className="flex items-center -mr-2">
            <button
              onClick={openSearch}
              aria-label="Search"
              className="
                w-11 h-11 flex items-center justify-center
                text-leather-brown hover:text-russet
                transition-colors duration-150
              "
            >
              <SearchIcon size={20} />
            </button>
            <button
              disabled
              aria-label="Cart (coming soon)"
              className="w-11 h-11 flex items-center justify-center text-outline cursor-not-allowed"
            >
              <ShoppingBagIcon size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
