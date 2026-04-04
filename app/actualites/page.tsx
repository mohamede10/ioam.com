"use client";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Eye, ChevronRight } from "lucide-react";

export default function Actualites() {
  const actualites = [
    {
      id: 1,
      title: "Lancement de nos nouveaux services IoT",
      excerpt: "COTECH SERVICES propose désormais des solutions IoT innovantes pour l'agriculture et l'industrie.",
      date: "15 Mars 2026",
      image: "/images/actualites/iot-launch.jpg",
      link: "/actualites/iot-launch"
    },
    {
      id: 2,
      title: "Partenariat avec les grandes marques informatiques",
      excerpt: "Nous sommes désormais partenaires officiels de HP, Dell et Lenovo pour la vente d'équipements.",
      date: "10 Mars 2026",
      image: "/images/actualites/partenariat.jpg",
      link: "/actualites/partenariat"
    },
    {
      id: 3,
      title: "Formation gratuite en développement web",
      excerpt: "Inscrivez-vous à notre formation gratuite sur les bases du développement web.",
      date: "5 Mars 2026",
      image: "/images/actualites/formation.jpg",
      link: "/actualites/formation"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center text-center">
        <Image
          src="/images/actualites-banner.jpg"
          alt="Actualités COTECH SERVICES"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Actualités
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Toute l'actualité de COTECH SERVICES
          </p>
        </div>
      </section>

      {/* Liste des actualités */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {actualites.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <Link
                    href={article.link}
                    className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:gap-3 transition"
                  >
                    Lire la suite <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}