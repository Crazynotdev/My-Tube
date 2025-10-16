export const metadata = {
  title: "À propos - MyTube",
  description: "Découvrez qui nous sommes et notre mission.",
};

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto py-16 text-center">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">À propos de MyTube</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        MyTube est une plateforme gratuite qui permet de télécharger facilement des vidéos et musiques depuis YouTube et d'autres sources.
        Notre mission est de simplifier l'accès au contenu multimédia, sans publicité intrusive.
      </p>
    </section>
  );
}

