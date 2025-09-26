import Image from "next/image";

export default function Etudiants() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Titre principal */}
      <h1 className="text-4xl font-extrabold text-blue-900 mb-6">Vie Étudiante</h1>
      <p className="text-lg text-gray-700 mb-10">
        La vie à l’IOAM ne se limite pas aux cours et à la recherche.
        Les étudiants bénéficient d’un environnement dynamique avec des services
        de qualité, des associations actives et des activités culturelles et sportives.
      </p>

      {/* Section services étudiants */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Services aux étudiants</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg text-center">
            <h3 className="text-xl font-semibold text-blue-900">🏠 Logement</h3>
            <p className="mt-2 text-gray-600">
              Résidences universitaires à proximité du campus et accompagnement pour la recherche de logement privé.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg text-center">
            <h3 className="text-xl font-semibold text-blue-900">🍽️ Restauration</h3>
            <p className="mt-2 text-gray-600">
              Restaurants universitaires et cafétérias proposant des repas équilibrés à prix accessibles.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg text-center">
            <h3 className="text-xl font-semibold text-blue-900">🎓 Bourses</h3>
            <p className="mt-2 text-gray-600">
              Accès à des programmes de bourses nationales et internationales pour soutenir les études.
            </p>
          </div>
        </div>
      </section>

      {/* Section associations étudiantes */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Associations étudiantes</h2>
        <p className="text-gray-700 mb-6">
          L’IOAM encourage la vie associative. Les étudiants peuvent rejoindre ou créer des clubs académiques,
          sportifs et culturels. Ces associations favorisent l’entraide, l’innovation et la cohésion.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Club de Mathématiques Appliquées</strong> – Organisation de séminaires et ateliers.</li>
          <li><strong>Club Sportif IOAM</strong> – Tournois de football, basket et athlétisme.</li>
          <li><strong>Association Culturelle</strong> – Promotion de la diversité culturelle et organisation d’événements.</li>
        </ul>
      </section>

      {/* Témoignages étudiants */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Témoignages d’étudiants</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <p className="text-gray-600 italic">
              "L’IOAM m’a permis de développer des compétences solides en mathématiques et d’accéder à des opportunités de recherche internationale."
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Image
                src="/images/etudiants/student1.jpg"
                alt="Étudiant 1"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-blue-900">Fatoumata Bah</p>
                <p className="text-sm text-gray-500">Master en Statistiques</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <p className="text-gray-600 italic">
              "Un environnement d’apprentissage exceptionnel avec des professeurs passionnés et un réseau international fort."
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Image
                src="/images/etudiants/student2.jpg"
                alt="Étudiant 2"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-blue-900">Mohamed Diallo</p>
                <p className="text-sm text-gray-500">Doctorat en Mathématiques Appliquées</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
