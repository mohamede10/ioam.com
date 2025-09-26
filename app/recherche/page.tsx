import Image from "next/image";
import Link from "next/link";

export default function Recherche() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Titre principal */}
      <h1 className="text-4xl font-extrabold text-blue-900 mb-6">
        Recherche à l’IOAM
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        L’Institut Ouest Africain de Mathématiques (IOAM) développe une recherche
        scientifique de haut niveau, orientée vers les besoins de la région et
        ouverte à la coopération internationale.
      </p>

      {/* Domaines de recherche */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Domaines de recherche
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Mathématiques appliquées
            </h3>
            <p className="text-gray-600">
              Modélisation, optimisation, statistiques et applications aux
              sciences sociales et économiques.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Mathématiques fondamentales
            </h3>
            <p className="text-gray-600">
              Analyse, algèbre, géométrie, topologie et leurs applications
              théoriques.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Mathématiques et technologie
            </h3>
            <p className="text-gray-600">
              Intelligence artificielle, science des données, calcul scientifique
              et informatique mathématique.
            </p>
          </div>
        </div>
      </section>

      {/* Projets en cours */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Projets en cours</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            Projet de modélisation des épidémies en Afrique de l’Ouest.
          </li>
          <li>
            Recherche sur l’optimisation des réseaux énergétiques durables.
          </li>
          <li>
            Développement de ressources pédagogiques numériques en mathématiques.
          </li>
        </ul>
      </section>

      {/* Laboratoires */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Laboratoires et centres
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-blue-900">
              Laboratoire de Mathématiques Fondamentales (LMF)
            </h3>
            <p className="text-gray-600 mt-2">
              Spécialisé dans l’analyse, l’algèbre et la géométrie.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-blue-900">
              Centre de Modélisation et Simulation (CMS)
            </h3>
            <p className="text-gray-600 mt-2">
              Recherche appliquée en modélisation des systèmes complexes.
            </p>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Publications scientifiques
        </h2>
        <ul className="space-y-3">
          <li className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-blue-900">
              Analyse des systèmes dynamiques en Afrique (2024)
            </h3>
            <p className="text-gray-600">
              Publié dans le *Journal Africain de Mathématiques Appliquées*.
            </p>
          </li>
          <li className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-blue-900">
              Optimisation des réseaux énergétiques (2023)
            </h3>
            <p className="text-gray-600">
              Collaboration avec l’Université Paris-Saclay.
            </p>
          </li>
        </ul>
        <div className="mt-4">
          <Link
            href="/publications"
            className="text-blue-700 hover:underline font-medium"
          >
            Voir toutes les publications →
          </Link>
        </div>
      </section>

      {/* Appels à projets */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Appels à projets
        </h2>
        <p className="text-gray-700 mb-4">
          L’IOAM lance régulièrement des appels à projets et à contributions.
          Consultez les annonces pour participer.
        </p>
        <Link
          href="/actualites"
          className="inline-block px-6 py-3 bg-blue-900 text-white rounded-lg shadow hover:opacity-90"
        >
          Voir les appels en cours
        </Link>
      </section>
    </div>
  );
}
