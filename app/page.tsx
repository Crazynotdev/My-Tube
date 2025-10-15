'use client';

import { useState, useEffect } from "react";
import AdBanner from "../components/AdBanner";
import ResultCard from "../components/ResultCard";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
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
      const data = await res.json();
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
  }, [inView]);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <AdBanner format="horizontal" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher..."
        className="input-search mb-4"
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button onClick={() => handleSearch()} className="btn-primary mb-4">Rechercher</button>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Historique</h3>
        <ul className="flex flex-wrap gap-2">
          {history.map((item, idx) => (
            <li key={idx} onClick={() => handleSearch(item)} className="bg-gray-200 p-1 rounded cursor-pointer">{item}</li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map((item: any, idx: number) => (
          <div key={item.id}>
            <ResultCard item={item} />
            {(idx + 1) % 4 === 0 && <AdBanner type="native" />}
          </div>
        ))}
      </div>

      {loading && <p className="text-center">Chargement...</p>}
      {hasMore && <div ref={ref} className="h-10" />}
      <AdBanner format="rectangle" type="display" />
    </div>
  );
}
