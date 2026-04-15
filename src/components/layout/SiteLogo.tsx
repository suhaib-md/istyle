import Image from "next/image";
import Link from "next/link";

interface SiteLogoProps {
  href?: string;
  priority?: boolean;
  size?: "sm" | "md";
}

const logoSizes = {
  sm: {
    mark: 36,
    gap: "gap-2",
    wordmark: "text-[11px]",
    submark: "text-[9px]",
  },
  md: {
    mark: 40,
    gap: "gap-2.5",
    wordmark: "text-[12px]",
    submark: "text-[9px]",
  },
} as const;

export default function SiteLogo({
  href = "/",
  priority = false,
  size = "md",
}: SiteLogoProps) {
  const config = logoSizes[size];

  return (
    <Link href={href} aria-label="I Style Leathers Home" className="inline-flex">
      <span className={`flex items-center ${config.gap}`}>
        <Image
          src="/logo/logo-light.svg"
          alt="I Style Leathers"
          width={config.mark}
          height={config.mark}
          priority={priority}
          className="shrink-0"
        />
        <span className="flex flex-col leading-none">
          <span
            className={`${config.wordmark} font-sans font-bold tracking-[0.18em] uppercase text-leather-brown`}
          >
            I Style
          </span>
          <span
            className={`${config.submark} font-sans tracking-[0.15em] uppercase text-on-surface-variant`}
          >
            Leathers
          </span>
        </span>
      </span>
    </Link>
  );
}
