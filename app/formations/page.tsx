"use client";
import Image from "next/image";
import Link from "next/link";
import { 
  GraduationCap, 
  Code2, 
  Wifi, 
  Cpu, 
  Users, 
  Clock, 
  Award,
  ArrowRight,
  Laptop,
  Video,
  MapPin
} from "lucide-react";

export default function Formations() {
  const formations = [
    {
      id: 1,
      title: "Développement Web Full-Stack",
      slug: "developpement-web-fullstack",
      icon: Code2,
      duration: "120 heures",
      description: "Devenez développeur web professionnel en maîtrisant les technologies les plus recherchées du marché.",
      image: "/images/formations/web-dev.jpg"
    },
    {
      id: 2,
      title: "Réseaux & Sécurité Informatique",
      slug: "reseaux-securite-informatique",
      icon: Wifi,
      duration: "80 heures",
      description: "Maîtrisez l'infrastructure réseau et la sécurité des systèmes informatiques.",
      image: "/images/formations/reseau.jpg"
    },
    {
      id: 3,
      title: "IoT & Systèmes Embarqués",
      slug: "iot-systemes-embarques",
      icon: Cpu,
      duration: "60 heures",
      description: "Créez des objets connectés avec Arduino et ESP32.",
      image: "/images/formations/iot.jpg"
    },
    {
      id: 4,
      title: "Bureautique & Informatique de Gestion",
      slug: "bureautique-informatique-gestion",
      icon: Laptop,
      duration: "40 heures",
      description: "Maîtrisez les outils bureautiques essentiels pour le monde professionnel.",
      image: "/images/formations/bureautique.jpg"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center text-center">
        <Image
          src="/images/formations-banner.jpg"
          alt="Formations COTECH SERVICES"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <div className="bg-blue-900/20 backdrop-blur-sm inline-block p-3 rounded-full mb-4">
            <GraduationCap className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Nos Formations
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Montez en compétences avec nos programmes certifiants
          </p>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900">+500</div>
              <div className="text-gray-600">Apprenants formés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900">98%</div>
              <div className="text-gray-600">Taux de satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900">15+</div>
              <div className="text-gray-600">Programmes disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900">100%</div>
              <div className="text-gray-600">Certification offerte</div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
              <Video className="h-8 w-8 text-blue-900" />
              <div>
                <p className="font-semibold">Formation en ligne</p>
                <p className="text-sm text-gray-600">Suivez les cours à distance</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
              <MapPin className="h-8 w-8 text-blue-900" />
              <div>
                <p className="font-semibold">Formation présentielle</p>
                <p className="text-sm text-gray-600">À Conakry, Guinée</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
              <Award className="h-8 w-8 text-blue-900" />
              <div>
                <p className="font-semibold">Certification officielle</p>
                <p className="text-sm text-gray-600">Attestation reconnue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Liste des formations simplifiée */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Nos programmes de formation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des cursus adaptés à tous les niveaux et objectifs professionnels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {formations.map((formation) => {
              const Icon = formation.icon;
              return (
                <div key={formation.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={formation.image}
                      alt={formation.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute top-2 right-2 bg-blue-900 text-white px-2 py-1 rounded text-xs">
                      {formation.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-5 w-5 text-blue-900" />
                      <h3 className="font-bold text-gray-900 text-base">{formation.title}</h3>
                    </div>
                    <p className="text-gray-600 text-xs mb-4 line-clamp-2">{formation.description}</p>
                    <Link
                      href={`/formations/${formation.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition text-sm"
                    >
                      Voir détails <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des atouts qui font la différence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="font-semibold mb-1">Formateurs experts</h3>
              <p className="text-sm text-gray-600">Des professionnels en activité</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Laptop className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="font-semibold mb-1">Pédagogie pratique</h3>
              <p className="text-sm text-gray-600">70% de travaux pratiques</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="font-semibold mb-1">Certification offerte</h3>
              <p className="text-sm text-gray-600">Attestation de formation</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="font-semibold mb-1">Horaires flexibles</h3>
              <p className="text-sm text-gray-600">Soir et week-end</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}