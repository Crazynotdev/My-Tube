import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { FaHome, FaInfoCircle, FaEnvelope, FaBars, FaTimes, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export const metadata: Metadata = {
  title: "MyTube - Téléchargez Musique et Vidéos Gratuitement",
  description: "Recherchez, prévisualisez et téléchargez des MP3 et MP4 depuis YouTube et plus. Simple, rapide et gratuit.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="fr">
      <body className="antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Header */}
        <header className="fixed w-full bg-blue-600 text-white shadow-md z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold">MyTube</h1>
            </Link>
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6 items-center">
              <Link href="/" className="flex items-center space-x-1 hover:text-blue-200 transition">
                <FaHome /> <span>Accueil</span>
              </Link>
              <Link href="/about" className="flex items-center space-x-1 hover:text-blue-200 transition">
                <FaInfoCircle /> <span>À Propos</span>
              </Link>
              <Link href="/contact" className="flex items-center space-x-1 hover:text-blue-200 transition">
                <FaEnvelope /> <span>Contact</span>
              </Link>
            </nav>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-blue-700">
              <Link href="/" className="block py-2 px-4 hover:bg-blue-800">Accueil</Link>
              <Link href="/about" className="block py-2 px-4 hover:bg-blue-800">À Propos</Link>
              <Link href="/contact" className="block py-2 px-4 hover:bg-blue-800">Contact</Link>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="pt-24 pb-8 min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-blue-400">Accueil</Link></li>
                <li><Link href="/about" className="hover:text-blue-400">À Propos</Link></li>
                <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-red-500"><FaYoutube size={24} /></a>
                <a href="#" className="hover:text-blue-400"><FaTwitter size={24} /></a>
                <a href="#" className="hover:text-pink-500"><FaInstagram size={24} /></a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Newsletter</h3>
              <form className="flex">
                <input type="email" placeholder="Votre email" className="flex-1 p-2 rounded-l-md border-none focus:outline-none" />
                <button className="bg-blue-600 px-4 rounded-r-md hover:bg-blue-700">S'abonner</button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center border-t border-gray-700 pt-4">
            © 2025 MyTube - Tous droits réservés
          </div>
        </footer>
      </body>
    </html>
  );
}
