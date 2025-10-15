"use client";

import { useEffect } from "react";

interface AdBannerProps {
  format?: string;
  type?: "display" | "native";
}

export default function AdBanner({ format = "auto", type = "display" }: AdBannerProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("Erreur AdSense :", err);
    }
  }, []);

  return (
    <div className={`my-4 ${type === "native" ? "bg-gray-100 dark:bg-gray-800 p-4 rounded" : ""}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // ← remplace par ton ID
        data-ad-slot="XXXXXXXXXX"               // ← remplace par ton slot
        data-ad-format={format}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
