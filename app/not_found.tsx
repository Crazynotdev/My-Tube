"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.section
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6 text-gray-300">
        Oups 😢 Cette page n’existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-medium transition-all shadow-lg hover:shadow-blue-500/50"
      >
        Retour à l’accueil
      </Link>
    </motion.section>
  );
}
