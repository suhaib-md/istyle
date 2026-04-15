"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMobileMenu } from "./MobileMenuContext";
import { useSearchOverlay } from "./SearchContext";
import {
  HomeIcon,
  ShoppingBagIcon,
  SearchIcon,
  MenuIcon,
} from "@/components/ui/Icons";

const tabs = [
  { id: "home", label: "Home", href: "/", icon: HomeIcon },
  { id: "shop", label: "Shop", href: "/collections", icon: ShoppingBagIcon },
  // Cart is V2 — shown disabled
  {
    id: "cart",
    label: "Cart",
    href: null as string | null,
    icon: ShoppingBagIcon,
    disabled: true as boolean,
  },
];

export default function BottomTabBar() {
  const pathname = usePathname();
  const { open } = useMobileMenu();
  const { open: openSearch } = useSearchOverlay();

  function isActive(href: string | null) {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <nav
      aria-label="Mobile navigation"
      className="
        lg:hidden
        fixed bottom-0 left-0 right-0 z-40
        bg-warm-cream border-t border-outline
        flex items-stretch
        pb-safe
      "
      style={{ height: "calc(56px + env(safe-area-inset-bottom, 0px))" }}
    >
      {tabs.map(({ id, label, href, icon: Icon, disabled }) =>
        disabled ? (
          // V1: Cart is disabled
          <button
            key={id}
            disabled
            aria-label={`${label} (coming soon)`}
            className="
              flex-1 flex flex-col items-center justify-center gap-0.5 pt-2
              text-outline cursor-not-allowed select-none
            "
          >
            <Icon size={22} aria-hidden />
            <span className="text-[10px] font-sans font-500">{label}</span>
          </button>
        ) : href ? (
          <Link
            key={id}
            href={href}
            aria-current={isActive(href) ? "page" : undefined}
            className={`
              flex-1 flex flex-col items-center justify-center gap-0.5 pt-2
              min-h-11 transition-colors duration-150
              ${
                isActive(href)
                  ? "text-leather-brown"
                  : "text-on-surface-variant hover:text-leather-brown"
              }
            `}
          >
            <Icon size={22} aria-hidden />
            <span
              className={`
                text-[10px] font-sans font-medium
                ${isActive(href) ? "font-semibold" : ""}
              `}
            >
              {label}
            </span>
          </Link>
        ) : null
      )}

      {/* Search — opens the search overlay */}
      <button
        onClick={openSearch}
        aria-label="Search"
        className="
          flex-1 flex flex-col items-center justify-center gap-0.5 pt-2
          min-h-11 text-on-surface-variant hover:text-leather-brown
          transition-colors duration-150
        "
      >
        <SearchIcon size={22} aria-hidden />
        <span className="text-[10px] font-sans font-medium">Search</span>
      </button>

      {/* Menu — opens the mobile drawer */}
      <button
        onClick={open}
        aria-label="Open menu"
        className="
          flex-1 flex flex-col items-center justify-center gap-0.5 pt-2
          min-h-11 text-on-surface-variant hover:text-leather-brown
          transition-colors duration-150
        "
      >
        <MenuIcon size={22} aria-hidden />
        <span className="text-[10px] font-sans font-medium">Menu</span>
      </button>
    </nav>
  );
}
