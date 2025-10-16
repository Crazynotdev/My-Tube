export const metadata = {
  title: "À propos - MyTube",
  description: "Découvrez qui nous sommes et notre mission chez MyTube.",
};

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6 text-center">
      <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">
        À propos de MyTube
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        MyTube est une plateforme moderne et intuitive permettant de télécharger
        facilement des musiques et vidéos depuis YouTube. Notre mission est de
        rendre le contenu multimédia accessible à tous, sans publicité intrusive
        ni complications.
      </p>
    </section>
  );
}
