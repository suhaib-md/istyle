// ── Product Types — I Style Leathers ──────────────────────────

export type ProductCategory = "footwear" | "bags" | "accessories";

export type FootwearSubcategory = "slides" | "sandals" | "slippers";
export type BagSubcategory = "briefcases" | "backpacks" | "weekenders";
export type AccessorySubcategory = "keychains" | "watch-rolls" | "other";

export type ProductSubcategory =
  | FootwearSubcategory
  | BagSubcategory
  | AccessorySubcategory;

export type ProductStatus =
  | "in-stock"
  | "available-on-order"
  | "coming-soon";

export type ProductTag = "new" | "featured" | "limited";

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  /** URL slug — e.g. "cross-strap-croc-slide" */
  slug: string;
  /** Display name — e.g. "Cross-Strap Croc Slide" */
  name: string;
  category: ProductCategory;
  subcategory: ProductSubcategory;
  /** 1–2 sentences shown on listing cards */
  shortDescription: string;
  /** 5–8 sentences shown in PDP accordion */
  longDescription: string;
  /** Materials & Care accordion content */
  materialsAndCare: string;
  /** Dimensions accordion content */
  dimensions: string;
  /** Price in INR (integer) */
  price: number;
  /** e.g. "Full Grain", "Croc Embossed", "Nubuck" */
  leatherType: string;
  /** Available color variants */
  colors: ProductColor[];
  /** UK sizes — footwear only, omit for bags/accessories */
  sizes?: number[];
  /**
   * Image paths relative to /public.
   * Order: [hero, side, detail/texture, lifestyle, flatlay]
   * Minimum 3 per product.
   */
  images: string[];
  status: ProductStatus;
  tags: ProductTag[];
  /** Appears in homepage Featured Products section */
  featured: boolean;
}

// ── Category metadata (used on collection pages) ─────────────

export interface CategoryMeta {
  slug: ProductCategory;
  label: string;
  description: string;
  /** 16:9 hero image for the collection page */
  heroImage: string;
  subcategories: { slug: ProductSubcategory; label: string }[];
}
