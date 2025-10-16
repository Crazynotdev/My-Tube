"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg z-50 backdrop-blur-md"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight flex items-center gap-2 hover:scale-105 transition-transform"
        >
          🎧 <span className="text-white">MyTube</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="hover:text-blue-200 flex items-center gap-1 transition"
          >
            <FaHome /> Accueil
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-200 flex items-center gap-1 transition"
          >
            <FaInfoCircle /> À propos
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-200 flex items-center gap-1 transition"
          >
            <FaEnvelope /> Contact
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Ouvrir le menu"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-blue-700 px-6 py-4 space-y-4"
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-200"
          >
            <FaHome className="inline mr-2" /> Accueil
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-200"
          >
            <FaInfoCircle className="inline mr-2" /> À propos
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-200"
          >
            <FaEnvelope className="inline mr-2" /> Contact
          </Link>
          <ThemeToggle />
        </motion.div>
      )}
    </motion.header>
  );
}
