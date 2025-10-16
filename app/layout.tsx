"use client";

import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { FaHome, FaInfoCircle, FaEnvelope, FaBars, FaTimes, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export const metadata: Metadata = {
  title: "MyTube - Téléchargez Musique et Vidéos Gratuitement",
  description: "Recherchez, prévisualisez et téléchargez des MP3 et MP4 depuis YouTube et plus. Simple, rapide et gratuit.",
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#2563eb",
  openGraph: {
    title: "MyTube",
    description: "Votre plateforme de téléchargement multimédia",
    images: "/og-image.jpg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="fr">
      <body className="antialiased">
        {/* Header + main + footer */}
        {children}
      </body>
    </html>
  );
}
