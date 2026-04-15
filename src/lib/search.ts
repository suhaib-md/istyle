"use client";

import Fuse from "fuse.js";
import { products } from "@/data/products";
import type { Product } from "@/types/product";

// ── Fuse.js config ─────────────────────────────────────────────

const fuse = new Fuse<Product>(products, {
  keys: [
    { name: "name", weight: 0.5 },
    { name: "shortDescription", weight: 0.25 },
    { name: "leatherType", weight: 0.15 },
    { name: "subcategory", weight: 0.1 },
  ],
  threshold: 0.4,       // 0 = exact, 1 = match anything
  minMatchCharLength: 2,
  includeScore: true,
});

export interface SearchResult {
  item: Product;
  score: number;
}

/**
 * Search products by query string.
 * Returns up to `limit` results, sorted by relevance.
 */
export function searchProducts(
  query: string,
  limit: number = 10
): SearchResult[] {
  if (!query || query.trim().length < 2) return [];

  const results = fuse.search(query.trim(), { limit });

  return results.map((r) => ({
    item: r.item,
    score: r.score ?? 1,
  }));
}
