type BadgeVariant = "new" | "limited" | "in-stock" | "on-order";

interface BadgeProps {
  variant: BadgeVariant;
  className?: string;
}

const BADGE_CONFIG: Record<BadgeVariant, { label: string; classes: string }> = {
  new: {
    label: "New",
    classes: "bg-sage-teal text-white",
  },
  limited: {
    label: "Limited",
    classes: "bg-aged-brass text-white",
  },
  "in-stock": {
    label: "In Stock",
    classes: "bg-[#2e7d32] text-white",
  },
  "on-order": {
    label: "On Order",
    classes: "border border-outline text-on-surface-variant bg-transparent",
  },
};

export default function Badge({ variant, className = "" }: BadgeProps) {
  const { label, classes } = BADGE_CONFIG[variant];

  return (
    <span
      className={`
        inline-flex items-center
        text-[10px] font-sans font-bold tracking-[0.2em] uppercase leading-none
        px-2.5 py-1 rounded-full
        ${classes}
        ${className}
      `}
    >
      {label}
    </span>
  );
}
