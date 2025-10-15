import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";
import Link from "next/link";
import { useState } from "react"; // Pour le menu mobile (mais comme c'est serveur, on le rend client si besoin)
import { FaHome, FaInfoCircle, FaEnvelope, FaBars, FaTimes, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export const metadata: Metadata = {
  title: "MyTube - Téléchargez Musique et Vidéos Gratuitement",
  description: "Recherchez, prévisualisez et téléchargez des MP3 et MP4 depuis YouTube et plus. Simple, rapide et gratuit.",
  icons: {
    icon: "/favicon.ico", // Ajoute un favicon si tu en as un
  },
  themeColor: "#2563eb", // Bleu pour theme
  openGraph: {
    title: "MyTube",
    description: "Votre plateforme de téléchargement multimédia",
    images: "/og-image.jpg", // Ajoute une image OG si disponible
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <header className="fixed top-0 w-full bg-blue-600 text-white shadow-md z-10 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12L3 5V19L21 12Z" fill="white" />
                <path d="M21 12L3 5M21 12L3 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h1 className="text-2xl font-bold">MyTube</h1>
            </Link>

            {/* Barre de recherche (intégrée pour desktop) */}
            <div className="hidden md:flex flex-1 mx-8">
              <input
                type="text"
                placeholder="Rechercher une vidéo ou musique..."
                className="w-full p-2 rounded-l-md bg-white text-gray-900 focus:outline-none"
              />
              <button className="bg-blue-700 p-2 rounded-r-md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex space-x-6 items-center">
              <Link href="/" className="flex items-center space-x-1 hover:text-blue-200 transition">
                <FaHome />
                <span>Accueil</span>
              </Link>
              <Link href="/about" className="flex items-center space-x-1 hover:text-blue-200 transition">
                <FaInfoCircle />
                <span>À Propos</span>
              </Link>
              <Link href="/contact" className="flex items-center space-x-1 hover:text-blue-200 transition">
                <FaEnvelope />
                <span>Contact</span>
              </Link>
              <ThemeToggle />
            </nav>

            {/* Menu Hamburger pour Mobile */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                aria-label="Ouvrir le menu"
                className="text-white focus:outline-none"
                onClick={() => {/* Logique pour toggle menu mobile – ajoute un state 'use client' si besoin */}}
              >
                <FaBars className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Menu Mobile (affiché conditionnellement – ajoute 'use client' et state pour toggle) */}
          {/* Exemple : const [menuOpen, setMenuOpen] = useState(false); */}
          {/* <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-blue-700 p-4`}> ... liens ... </div> */}
        </header>

        <main className="pt-24 pb-8 min-h-screen">{children}</main>

        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Section Liens */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-blue-300">Accueil</Link></li>
                <li><Link href="/about" className="hover:text-blue-300">À Propos</Link></li>
                <li><Link href="/contact" className="hover:text-blue-300">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-blue-300">Politique de Confidentialité</Link></li>
              </ul>
            </div>

            {/* Section Sociales */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="https://youtube.com/@DavidTechInc" aria-label="YouTube" className="hover:text-red-500"><FaYoutube size={24} /></a>
                <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-400"><FaTwitter size={24} /></a>
                <a href="https://instagram.com" aria-label="Instagram" className="hover:text-pink-500"><FaInstagram size={24} /></a>
              </div>
            </div>

            {/* Section Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="mb-2">Restez informé des mises à jour !</p>
              <form className="flex">
                <input type="email" placeholder="Votre email" className="flex-1 p-2 rounded-l-md bg-gray-700 border-none focus:outline-none" />
                <button type="submit" className="bg-blue-600 p-2 rounded-r-md hover:bg-blue-700">S'abonner</button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center border-t border-gray-700 pt-4">
            © 2025 MyTube - Tous droits réservés. Développé Par Crazy Dev.
          </div>
        </footer>
      </body>
    </html>
  );
}
