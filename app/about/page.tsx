import AdBanner from '../components/AdBanner';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto p-4 prose dark:prose-invert">
      <h1>À Propos de MyTube</h1>
      <p>MyTube est une plateforme créer par Crazy gratuite pour rechercher et télécharger du contenu multimédia depuis diverses sources. Nous priorisons la simplicité et la qualité.</p>
      <AdBanner />
    </div>
  );
}
