"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaDownload, FaYoutube } from "react-icons/fa";

export default function Home() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const handleSearch = async () => {
  if (!query.trim()) return;
  setLoading(true);
  setResults([]);

  try {
    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    if (!res.ok) throw new Error("Erreur API");
    const data = await res.json();
    setResults(data.results || []);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};
  
  return (
    <section className="min-h-screen text-center">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-red-500 via-pink-400 to-purple-500 bg-clip-text text-transparent mt-10"
      >
        🎧 MyTube Downloader
      </motion.h1>

      <p className="text-gray-400 text-lg mt-3">
        Recherchez et téléchargez vos musiques & vidéos préférées depuis YouTube
      </p>

      {/* Zone de recherche */}
      <div className="mt-10 flex justify-center">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ex: Booba - Reels ou Lomepal - Trop beau"
            className="w-full p-4 rounded-full bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
          <button
            onClick={handleSearch}
            className="absolute right-2 top-2 bg-red-600 hover:bg-red-500 text-white p-3 rounded-full transition"
          >
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Loader */}
      {loading && (
        <div className="mt-10 text-gray-400 animate-pulse">
          Recherche en cours...
        </div>
      )}

      {/* Résultats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: results.length > 0 ? 1 : 0 }}
        transition={{ delay: 0.2 }}
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-4"
      >
        {results.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 p-4 rounded-2xl text-left shadow-lg hover:bg-white/10 transition-all"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="rounded-xl mb-3"
            />
            <h3 className="font-semibold mb-2 line-clamp-2">{item.title}</h3>
            <p className="text-gray-400 text-sm mb-3">{item.channel}</p>
            <div className="flex justify-between items-center">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-400 hover:text-red-300 transition"
              >
                <FaYoutube /> Voir sur YouTube
              </a>
              <button className="flex items-center gap-2 bg-red-600 hover:bg-red-500 px-3 py-2 rounded-full text-sm font-medium transition">
                <FaDownload /> Télécharger
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Si aucun résultat */}
      {!loading && results.length === 0 && (
        <div className="mt-16 text-gray-500 italic">
          🔍 Tapez un titre pour commencer la recherche.
        </div>
      )}
    </section>
  );
}
