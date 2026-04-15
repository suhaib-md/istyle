interface ChipProps {
  label: string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  /** Render as a non-interactive display chip (no button semantics) */
  readOnly?: boolean;
  className?: string;
}

export default function Chip({
  label,
  selected = false,
  disabled = false,
  onClick,
  readOnly = false,
  className = "",
}: ChipProps) {
  const base = `
    inline-flex items-center justify-center
    rounded-full
    font-sans font-medium text-body-sm
    px-4 py-1.5
    border
    transition-colors duration-150
    leading-none select-none
    ${
      selected
        ? "bg-leather-brown border-leather-brown text-warm-cream"
        : disabled
        ? "border-outline text-outline bg-transparent cursor-not-allowed"
        : "border-outline text-leather-brown bg-transparent hover:border-leather-brown"
    }
    ${!readOnly && !disabled ? "cursor-pointer" : ""}
    ${className}
  `.replace(/\s+/g, " ").trim();

  if (readOnly || !onClick) {
    return <span className={base}>{label}</span>;
  }

  return (
    <button
      type="button"
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-pressed={selected}
      className={base}
    >
      {label}
    </button>
  );
}
