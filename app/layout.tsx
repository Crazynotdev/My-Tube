import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "MyTube - Téléchargez Musique et Vidéos Gratuitement",
  description:
    "Recherchez, prévisualisez et téléchargez des MP3 et MP4 depuis YouTube. Simple, rapide et gratuit.",
  icons: { icon: "/favicon.ico" },
  themeColor: "#2563eb",
  openGraph: {
    title: "MyTube",
    description: "Votre plateforme de téléchargement multimédia",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100 antialiased transition-colors duration-300">
        <Header />
        <main className="pt-24 pb-16 min-h-screen px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
