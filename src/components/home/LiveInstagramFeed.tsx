"use client";

import { createElement, useEffect } from "react";

export default function LiveInstagramFeed({ feedId }: { feedId: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://w.behold.so/widget.js";
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return createElement("behold-widget", { "feed-id": feedId });
}
