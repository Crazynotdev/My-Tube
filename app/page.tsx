"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [query, setQuery] = useState("");

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
        MyTube Downloader 🎧
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
        Téléchargez vos vidéos et musiques préférées depuis YouTube — Simple, rapide et gratuit !
      </p>

      <div className="flex w-full max-w-xl bg-white dark:bg-gray-800 shadow-lg rounded-full overflow-hidden">
        <input
          type="text"
          placeholder="Rechercher une vidéo ou coller un lien..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-5 py-3 focus:outline-none bg-transparent text-gray-800 dark:text-gray-100"
        />
        <button
          onClick={() => alert(`Recherche de "${query}"`)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold transition-all"
        >
          Rechercher
        </button>
      </div>

      <motion.div
        className="mt-16 text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        ⚡ Aucun téléchargement encore lancé. Recherchez une vidéo pour commencer !
      </motion.div>
    </motion.div>
  );
}
