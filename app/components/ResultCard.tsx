'use client';

import { useState } from "react";
import { motion } from "framer-motion";

interface Result {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  source: "youtube" | "soundcloud";
  previewUrl?: string; // <-- ajouté pour type-safe
}

interface Format {
  quality: string;
  url: string;
}

export default function ResultCard({ item }: { item: Result }) {
  const [preview, setPreview] = useState(false);
  const [formats, setFormats] = useState<Format[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFormats = async (format: "mp3" | "mp4") => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/download?videoId=${item.id}&format=${format}&source=${item.source}`);
      if (!res.ok) throw new Error("Erreur lors du téléchargement");
      const data = await res.json();
      setFormats(data.formats || []);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      className="card bg-white dark:bg-gray-900 p-4 rounded shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-cover rounded mb-2" />
      <h2 className="font-semibold text-lg mb-1">{item.title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
        Durée: {item.duration} | Vues: {item.views} | Source: {item.source.toUpperCase()}
      </p>

      <button onClick={() => setPreview(!preview)} className="btn-primary mb-2">
        {preview ? "Fermer" : "Prévisualiser"}
      </button>

      {preview && (
        <motion.video
          controls
          className="w-full mb-2 rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <source
            src={
              item.source === "youtube"
                ? `https://www.youtube.com/embed/${item.id}`
                : item.previewUrl || "" // fallback si previewUrl est absent
            }
            type="video/mp4"
          />
        </motion.video>
      )}

      <div className="flex justify-between mb-2">
        <button onClick={() => fetchFormats("mp3")} className="btn-secondary mr-1">MP3</button>
        <button onClick={() => fetchFormats("mp4")} className="btn-secondary ml-1">MP4</button>
      </div>

      {loading && <p>Chargement...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {formats.length > 0 && (
        <ul className="mt-2 space-y-2">
          {formats.map((fmt, idx) => (
            <li key={idx} className="flex justify-between items-center">
              <span>{fmt.quality}</span>
              <a href={fmt.url} download className="btn-primary text-sm">
                Télécharger
              </a>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
