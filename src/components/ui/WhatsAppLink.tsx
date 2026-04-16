"use client";

import { trackWhatsAppClick } from "@/lib/analytics";

interface WhatsAppLinkProps {
  href: string;
  productName?: string;
  className?: string;
  children: React.ReactNode;
  /** Defaults to "_blank" */
  target?: string;
  /** Defaults to "noopener noreferrer" */
  rel?: string;
  "aria-label"?: string;
  tabIndex?: number;
}

/**
 * Drop-in replacement for <a href={waUrl}> that fires a GA4 event on click.
 * Works in both server and client components.
 */
export default function WhatsAppLink({
  href,
  productName,
  className,
  children,
  target = "_blank",
  rel = "noopener noreferrer",
  "aria-label": ariaLabel,
  tabIndex,
}: WhatsAppLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      onClick={() => trackWhatsAppClick(productName)}
    >
      {children}
    </a>
  );
}
