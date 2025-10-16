import Link from "next/link";

export const metadata = {
  title: "MyTube - Téléchargez Musique et Vidéos Gratuitement",
  description:
    "Téléchargez vos vidéos et musiques préférées depuis YouTube — Simple, rapide et gratuit.",
};

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-950 px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
        MyTube Downloader 🎧
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
        Téléchargez vos musiques et vidéos préférées depuis YouTube. Simple,
        rapide et gratuit.
      </p>

      <Link
        href="/search"
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-blue-500/40"
      >
        Commencer
      </Link>
    </section>
  );
}
