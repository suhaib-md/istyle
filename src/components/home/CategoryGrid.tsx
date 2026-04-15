import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";

const CATEGORIES = [
  {
    label: "Footwear",
    href: "/collections/footwear",
    bg: "bg-[#2a1208]",
    description: "Sandals, slides & slippers",
  },
  {
    label: "Bags",
    href: "/collections/bags",
    bg: "bg-[#1b3a5c]",
    description: "Briefcases, backpacks & weekenders",
    tall: true,
  },
  {
    label: "Accessories",
    href: "/collections/accessories",
    bg: "bg-[#3a2a1a]",
    description: "Watch rolls & keychains",
  },
];

export default function CategoryGrid() {
  return (
    <section aria-label="Shop by category" className="w-full">
      <div className="max-w-[1440px] mx-auto px-0 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`
                group relative overflow-hidden block
                ${cat.tall ? "h-[60vw] lg:h-[600px]" : "h-[60vw] lg:h-[520px]"}
                ${cat.bg}
              `}
              aria-label={`Shop ${cat.label}`}
            >
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 z-10 transition-opacity duration-500 group-hover:opacity-70"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)",
                }}
              />

              {/* Image scale-up on hover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                style={{
                  backgroundImage: `url('/images/placeholder/category-${cat.label.toLowerCase()}.jpg')`,
                }}
                aria-hidden
              />

              {/* Text content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 lg:p-10">
                <p className="text-white/60 font-sans text-body-sm mb-1.5 tracking-wide">
                  {cat.description}
                </p>
                <h2 className="font-serif font-bold text-white text-headline-sm lg:text-headline-md leading-tight mb-4">
                  {cat.label}
                </h2>

                {/* "Shop Now" — always visible on mobile, fades in on desktop hover */}
                <span
                  className="
                    inline-flex items-center gap-2
                    text-white/90 font-sans font-semibold text-label-lg tracking-wide
                    lg:opacity-0 lg:translate-y-2
                    lg:group-hover:opacity-100 lg:group-hover:translate-y-0
                    transition-all duration-300
                  "
                >
                  Shop Now
                  <ArrowRightIcon size={16} aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
