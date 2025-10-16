"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center space-y-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-red-500 via-pink-400 to-purple-500 bg-clip-text text-transparent"
      >
        Téléchargez vos musiques et vidéos préférées 🎶
      </motion.h1>

      <p className="text-gray-300 text-lg max-w-2xl mx-auto">
        Recherchez, écoutez et téléchargez rapidement depuis YouTube en toute
        simplicité. Gratuit, rapide et sans publicité.
      </p>

      <div className="flex justify-center gap-6">
        <Link
          href="/about"
          className="bg-red-600 hover:bg-red-500 px-6 py-3 rounded-full text-lg font-semibold transition-all shadow-lg hover:scale-105"
        >
          En savoir plus
        </Link>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-600 hover:border-red-500 px-6 py-3 rounded-full text-lg font-semibold transition-all hover:text-red-400"
        >
          Explorer YouTube
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          {
            title: "Conversion rapide",
            desc: "Téléchargez MP3 et MP4 en quelques secondes.",
            icon: "⚡",
          },
          {
            title: "Qualité optimale",
            desc: "Choisissez la meilleure résolution disponible.",
            icon: "🎥",
          },
          {
            title: "100% Gratuit",
            desc: "Aucun abonnement, aucune limite.",
            icon: "💎",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all"
          >
            <div className="text-4xl mb-3">{card.icon}</div>
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-400">{card.desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
