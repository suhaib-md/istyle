"use client";

import { useEffect } from "react";

// Declare the Behold web component for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "behold-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { "feed-id": string },
        HTMLElement
      >;
    }
  }
}

export default function LiveInstagramFeed({ feedId }: { feedId: string }) {
  useEffect(() => {
    // Matches Behold's own embed code exactly
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://w.behold.so/widget.js";
    document.head.appendChild(script);
  }, []);

  return <behold-widget feed-id={feedId} />;
}
