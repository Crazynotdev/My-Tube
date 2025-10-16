import Link from "next/link";
import { motion } from "framer-motion";
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-br from-gray-900 to-gray-950 text-gray-300 pt-12 pb-8 mt-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Navigation
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 transition">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Suivez-nous
          </h3>
          <div className="flex gap-5">
            <a
              href="https://youtube.com/@DavidTechInc"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition-transform hover:scale-110"
            >
              <FaYoutube size={26} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-transform hover:scale-110"
            >
              <FaTwitter size={26} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition-transform hover:scale-110"
            >
              <FaInstagram size={26} />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Newsletter
          </h3>
          <p className="mb-3">
            Recevez nos dernières nouveautés et astuces chaque semaine ✨
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 p-2 rounded-l-md bg-gray-800 border-none focus:outline-none text-white"
            />
            <button
              type="submit"
              className="bg-blue-600 px-4 rounded-r-md hover:bg-blue-700 transition"
            >
              S’abonner
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-10 border-t border-gray-700 pt-4 text-sm">
        © 2025 <span className="font-bold text-white">MyTube</span> — Tous droits réservés.
        <br />
        💻 Développé par <span className="text-blue-400">Crazy Dev</span>.
      </div>
    </motion.footer>
  );
}
