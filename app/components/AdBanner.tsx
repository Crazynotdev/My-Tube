'use client';

import AdSense from "react-google-adsense";

export default function AdBanner({ format = "auto", type = "display" }: { format?: string; type?: "display" | "native" }) {
  return (
    <div className={`my-4 ${type === "native" ? "bg-gray-100 dark:bg-gray-800 p-4 rounded" : ""}`}>
      <AdSense
        client="ca-pub-XXXXXXXXXXXXXXXX"
        slot="XXXXXXXXXX"
        style={{ display: "block" }}
        format={format}
        responsive="true"
      />
    </div>
  );
}
