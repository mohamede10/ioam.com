import Image from "next/image";
import Link from "next/link";

export default function Enseignants() {
  const enseignants = [
    {
      id: 1,
      nom: "Pr. Mamadou Diallo",
      specialite: "Analyse et Équations Différentielles",
      image: "/images/enseignants/enseignant1.jpg",
      description:
        "Professeur titulaire avec plus de 20 ans d’expérience dans l’enseignement et la recherche en mathématiques appliquées.",
      scholar: "https://scholar.google.com/",
      orcid: "https://orcid.org/",
    },
    {
      id: 2,
      nom: "Dr. Aïssatou Camara",
      specialite: "Statistiques et Data Science",
      image: "/images/enseignants/enseignant2.jpg",
      description:
        "Chercheuse en science des données et statistiques appliquées, avec plusieurs publications internationales.",
      scholar: "https://scholar.google.com/",
      orcid: "https://orcid.org/",
    },
    {
      id: 3,
      nom: "Pr. Jean Kouadio",
      specialite: "Algèbre et Géométrie",
      image: "/images/enseignants/enseignant3.jpg",
      description:
        "Spécialiste en algèbre moderne et géométrie, il dirige actuellement plusieurs projets collaboratifs.",
      scholar: "https://scholar.google.com/",
      orcid: "https://orcid.org/",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Titre principal */}
      <h1 className="text-4xl font-extrabold text-blue-900 mb-6">
        Enseignants & Chercheurs
      </h1>
      <p className="text-lg text-gray-700 mb-10">
        L’IOAM regroupe un corps enseignant et des chercheurs de haut niveau,
        engagés dans la formation et la recherche scientifique. Découvrez leurs
        profils académiques, domaines de recherche et contributions.
      </p>

      {/* Grille des enseignants */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {enseignants.map((prof) => (
          <div
            key={prof.id}
            className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden"
          >
            <Image
              src={prof.image}
              alt={prof.nom}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-900">
                {prof.nom}
              </h3>
              <p className="text-sm text-gray-500">{prof.specialite}</p>
              <p className="mt-3 text-gray-600 text-sm">{prof.description}</p>

              {/* Liens académiques */}
              <div className="mt-4 flex gap-3">
                <Link
                  href={prof.scholar}
                  target="_blank"
                  className="text-blue-700 hover:underline text-sm"
                >
                  Google Scholar
                </Link>
                <Link
                  href={prof.orcid}
                  target="_blank"
                  className="text-blue-700 hover:underline text-sm"
                >
                  ORCID
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section interventions */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Interventions & Conférences
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Pr. Diallo :</strong> Conférence internationale sur les
            équations différentielles, Dakar 2024.
          </li>
          <li>
            <strong>Dr. Camara :</strong> Atelier sur la science des données,
            Université de Bamako, 2023.
          </li>
          <li>
            <strong>Pr. Kouadio :</strong> Séminaire de géométrie, Abidjan 2024.
          </li>
        </ul>
      </section>
    </div>
  );
}
