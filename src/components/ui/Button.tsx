import Link from "next/link";
import { WhatsAppIcon } from "@/components/ui/Icons";

type ButtonVariant = "primary" | "ghost" | "whatsapp" | "link";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
  /** Passed to <a> when href is external */
  target?: "_blank" | "_self";
  rel?: string;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[12px] gap-1.5",
  md: "px-6 py-3 text-label-lg gap-2",
  lg: "px-8 py-4 text-label-lg gap-2.5",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-leather-brown text-warm-cream hover:bg-russet disabled:bg-outline disabled:text-on-surface-variant disabled:cursor-not-allowed",
  ghost:
    "border border-leather-brown text-leather-brown hover:bg-leather-brown hover:text-warm-cream disabled:border-outline disabled:text-outline disabled:cursor-not-allowed",
  whatsapp:
    "bg-whatsapp text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed",
  link: "text-leather-brown underline-offset-4 hover:underline hover:text-russet disabled:text-outline disabled:cursor-not-allowed p-0",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  disabled = false,
  onClick,
  children,
  className = "",
  target,
  rel,
  type = "button",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const base = `
    inline-flex items-center justify-center font-sans font-semibold tracking-wide
    transition-colors duration-200 select-none
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leather-brown focus-visible:ring-offset-2
    ${variant !== "link" ? "rounded-sm" : ""}
    ${variant !== "link" ? sizeClasses[size] : ""}
    ${variantClasses[variant]}
    ${className}
  `.replace(/\s+/g, " ").trim();

  const content = (
    <>
      {variant === "whatsapp" && <WhatsAppIcon size={size === "sm" ? 16 : 20} aria-hidden />}
      {children}
    </>
  );

  if (href && !disabled) {
    const isExternal = href.startsWith("http") || href.startsWith("//");
    if (isExternal) {
      return (
        <a
          href={href}
          target={target ?? "_blank"}
          rel={rel ?? "noopener noreferrer"}
          className={base}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={base} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={base}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
