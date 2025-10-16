import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center space-y-6">
      <h1 className="text-7xl font-extrabold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
        404
      </h1>
      <p className="text-gray-300 text-lg">
        Oups 😢 Cette page n’existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="mt-4 bg-red-600 hover:bg-red-500 px-6 py-3 rounded-full text-lg font-semibold transition-all shadow-lg hover:scale-105"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}
