'use client';

import { useState } from "react";

interface Result {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

// Composant pour les ads (AdSense par exemple)
const AdBanner = ({ type = "display", format = "auto" }: { type?: string; format?: string }) => (
  <div className={`my-4 ${type === "native" ? "bg-gray-100 p-4 rounded-lg" : ""}`}>
    <div className="w-full h-24 bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
      {type === "native" ? "Native Ad" : "Display Ad"}
    </div>
  </div>
);

const ResultCard = ({ item }: { item: Result }) => (
  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
    <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="font-semibold text-lg mb-2">{item.title}</h2>
      <a href={item.url} target="_blank" className="text-blue-600 hover:underline">
        Voir la vidéo
      </a>
    </div>
  </div>
);

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);

  // Appelle le vrai backend
  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResults([]);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      if (!res.ok) throw new Error("Erreur lors de la récupération");
      const data = await res.json();
      setResults(data.results || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        MyTube - Recherchez et Téléchargez
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Rechercher une vidéo ou musique..."
          className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:bg-gray-700 dark:text-white"
          onKeyDown={e => e.key === "Enter" && handleSearch()}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all"
        >
          Rechercher
        </button>
      </div>

      <AdBanner format="horizontal" />

      {loading && <p className="text-center text-gray-700 dark:text-gray-200">Chargement...</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {results.map((item, idx) => (
          <div key={item.id}>
            <ResultCard item={item} />
            {(idx + 1) % 4 === 0 && <AdBanner type="native" />}
          </div>
        ))}
      </div>
    </div>
  );
}
