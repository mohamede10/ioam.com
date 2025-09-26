import Image from "next/image";

export default function Actualites() {
  const news = [
    {
      id: 1,
      title: "Conférence régionale 2025",
      date: "15 mars 2025",
      image: "/images/news1.jpg",
      excerpt: "Chercheurs et étudiants réunis autour des avancées en mathématiques appliquées.",
    },
    {
      id: 2,
      title: "Accord de partenariat avec l’Université Paris-Saclay",
      date: "02 avril 2025",
      image: "/images/news2.jpg",
      excerpt: "Un partenariat stratégique pour renforcer la coopération académique et scientifique.",
    },
    {
      id: 3,
      title: "Appel à candidatures 2025-2026",
      date: "10 mai 2025",
      image: "/images/news3.jpg",
      excerpt: "Lancement officiel des inscriptions aux Masters et Doctorats.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Titre */}
      <h1 className="text-4xl font-extrabold text-blue-900 mb-8">Actualités & Événements</h1>
      <p className="text-lg text-gray-700 mb-12">
        Retrouvez ici toutes les actualités récentes de l’IOAM, les annonces importantes,
        ainsi que les événements à venir (séminaires, conférences, écoles d’été).
      </p>

      {/* Liste des actualités */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden flex flex-col"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <span className="text-sm text-gray-500">{item.date}</span>
              <h3 className="text-lg font-semibold text-blue-900 mt-2">{item.title}</h3>
              <p className="text-gray-600 mt-2 flex-1">{item.excerpt}</p>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-medium text-blue-900 hover:underline"
              >
                Lire plus →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Agenda (exemple simple) */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Agenda des événements</h2>
        <ul className="divide-y divide-gray-200 bg-white rounded-lg shadow">
          <li className="p-4 flex justify-between">
            <span className="font-medium text-gray-700">Séminaire : Mathématiques appliquées à l’IA</span>
            <span className="text-sm text-gray-500">20 juin 2025</span>
          </li>
          <li className="p-4 flex justify-between">
            <span className="font-medium text-gray-700">École d’été en statistiques</span>
            <span className="text-sm text-gray-500">5 - 12 août 2025</span>
          </li>
          <li className="p-4 flex justify-between">
            <span className="font-medium text-gray-700">Colloque sur les équations différentielles</span>
            <span className="text-sm text-gray-500">25 octobre 2025</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
