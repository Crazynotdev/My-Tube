import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { FaHome, FaInfoCircle, FaEnvelope, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import ThemeToggle from "./components/ThemeToggle";

export const metadata: Metadata = {
  title: "MyTube - Téléchargez Musique et Vidéos Gratuitement",
  description: "Recherchez, prévisualisez et téléchargez des MP3 et MP4 depuis YouTube et plus. Simple, rapide et gratuit.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <header className="fixed top-0 w-full bg-blue-600 text-white shadow-md z-10">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M21 12L3 5V19L21 12Z" fill="white" />
              </svg>
              <h1 className="text-2xl font-bold">MyTube</h1>
            </Link>

            <nav className="hidden md:flex space-x-6 items-center">
              <Link href="/" className="flex items-center space-x-1 hover:text-blue-200"><FaHome /><span>Accueil</span></Link>
              <Link href="/about" className="flex items-center space-x-1 hover:text-blue-200"><FaInfoCircle /><span>À Propos</span></Link>
              <Link href="/contact" className="flex items-center space-x-1 hover:text-blue-200"><FaEnvelope /><span>Contact</span></Link>
              <ThemeToggle />
            </nav>
          </div>
        </header>

        <main className="pt-24 pb-8 min-h-screen">{children}</main>

        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/about">À Propos</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/privacy">Politique de Confidentialité</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="https://youtube.com" className="hover:text-red-500"><FaYoutube size={24} /></a>
                <a href="https://twitter.com" className="hover:text-blue-400"><FaTwitter size={24} /></a>
                <a href="https://instagram.com" className="hover:text-pink-500"><FaInstagram size={24} /></a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="mb-2">Restez informé des mises à jour !</p>
              <form className="flex">
                <input type="email" placeholder="Votre email" className="flex-1 p-2 rounded-l-md bg-gray-700 border-none focus:outline-none" />
                <button type="submit" className="bg-blue-600 p-2 rounded-r-md hover:bg-blue-700">S'abonner</button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center border-t border-gray-700 pt-4">© 2025 MyTube - Tous droits réservés.</div>
        </footer>
      </body>
    </html>
  );
}
