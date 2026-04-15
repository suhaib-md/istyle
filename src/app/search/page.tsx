import type { Metadata } from "next";
import { Suspense } from "react";
import SearchResults from "./SearchResults";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the I Style Leathers collection.",
};

export default function SearchPage() {
  return (
    <div className="max-w-8xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
      <div className="mb-8">
        <p className="label-sm-caps text-sage-teal mb-3">Search</p>
        <h1 className="font-serif font-bold text-leather-brown text-headline-md lg:text-headline-lg">
          Find What You&apos;re Looking For
        </h1>
      </div>

      <Suspense
        fallback={
          <p className="font-sans text-body-md text-on-surface-variant py-12 text-center">
            Searching…
          </p>
        }
      >
        <SearchResults />
      </Suspense>
    </div>
  );
}
