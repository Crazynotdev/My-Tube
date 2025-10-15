'use client';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4">
      <h1 className="text-6xl font-extrabold mb-4 animate-fadeIn">404</h1>
      <p className="text-xl md:text-2xl mb-6 text-center animate-fadeIn">
        Oups ! La page que vous cherchez n'existe pas.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transition-all animate-fadeIn"
      >
        Retour à l'accueil
      </a>
    </div>
  );
}

