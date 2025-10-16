"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.section
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white text-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-7xl font-extrabold mb-4">404</h1>
      <p className="text-xl mb-8 text-gray-300">
        Oups 😢 Cette page n’existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-blue-500/40"
      >
        Retour à l’accueil
      </Link>
    </motion.section>
  );
}
