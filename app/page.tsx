'use client';

import { useState, useEffect } from "react";
import AdBanner from "./components/AdBanner";
import ResultCard from "./components/ResultCard";
import { useInView } from "react-intersection-observer";

interface Result {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  source: "youtube" | "soundcloud";
  previewUrl?: string;
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const { ref, inView } = useInView();

  useEffect(() => {
    const stored = localStorage.getItem("searchHistory");
    if (stored) setHistory(JSON.parse(stored));
  }, []);

  const handleSearch = async (newQuery: string = query, append = false) => {
    if (!newQuery) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/search?query=${encodeURIComponent(newQuery)}&page=${page}`);
      if (!res.ok) throw new Error("Erreur API");
      const data: Result[] = await res.json();
      setResults(append ? [...results, ...data] : data);
      setHasMore(data.length > 0);
      if (!append) {
        const newHistory = [newQuery, ...history.filter(h => h !== newQuery).slice(0, 9)];
        setHistory(newHistory);
        localStorage.setItem("searchHistory", JSON.stringify(newHistory));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inView && hasMore && !loading) {
      setPage(prev => prev + 1);
      handleSearch(query, true);
    }
  }, [inView, hasMore, loading, query]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Bannière principale */}
      <AdBanner format="horizontal" />

      {/* Barre de recherche stylée */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Rechercher musique ou vidéo..."
          className="flex-1 p-3 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
          onKeyDown={e => e.key === "Enter" && handleSearch()}
        />
        <button
          onClick={() => handleSearch()}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Rechercher
        </button>
      </div>

      {/* Historique de recherche */}
      {history.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">Historique</h3>
          <ul className="flex flex-wrap gap-2">
            {history.map((item, idx) => (
              <li
                key={idx}
                onClick={() => handleSearch(item)}
                className="cursor-pointer px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 dark:hover:bg-blue-600 text-gray-800 dark:text-white hover:text-white transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Résultats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {results.map((item, idx) => (
          <div key={item.id} className="transition-transform hover:scale-105">
            <ResultCard item={item} />
            {(idx + 1) % 4 === 0 && <AdBanner type="native" />}
          </div>
        ))}
      </div>

      {loading && <p className="text-center mt-6 text-gray-700 dark:text-gray-300 font-semibold">Chargement...</p>}
      {hasMore && <div ref={ref} className="h-10" />}
      <AdBanner format="rectangle" type="display" />
    </div>
  );
}
