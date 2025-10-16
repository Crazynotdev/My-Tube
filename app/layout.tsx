import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyTube - Téléchargez Musique et Vidéos Gratuitement",
  description:
    "Recherchez, prévisualisez et téléchargez des MP3 et MP4 depuis YouTube et plus. Simple, rapide et gratuit.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen`}
      >
        <header className="sticky top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
          <nav className="container mx-auto flex justify-between items-center p-4">
            <Link href="/" className="text-2xl font-bold text-red-500">
              🎧 MyTube
            </Link>
            <div className="flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-red-400 transition">
                Accueil
              </Link>
              <Link href="/about" className="hover:text-red-400 transition">
                À propos
              </Link>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-10">{children}</main>

        <footer className="border-t border-white/10 mt-16 py-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} MyTube. Créé par Crazy & Toge 🚀
        </footer>
      </body>
    </html>
  );
}
