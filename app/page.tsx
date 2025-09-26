"use client";
import Image from "next/image";
import { GraduationCap, FlaskConical, Globe } from "lucide-react";

export default function Home() {
  // Année actuelle
  const currentYear = new Date().getFullYear();
  // Exemple : 2025 -> "2025-2026"
  const academicYear = `${currentYear}-${currentYear + 1}`;

  return (
    <main>
      {/* Hero */}
      <section className="relative w-full h-[70vh] flex items-center justify-center text-center">
        {/* Image de fond */}
        <Image
          src="/images/ioam_header_slide3.png"
          alt="IOAM Banner"
          fill
          className="object-cover brightness-75 blu"
          priority
        />
        {/* Contenu */}
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
            Bienvenue à l’Institut Ouest Africain de Mathématiques
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-100 drop-shadow">
            L’IOAM forme une nouvelle génération de chercheurs et d’enseignants
            en mathématiques pour renforcer l’excellence scientifique en Afrique de l’Ouest.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a
              href="/appel"
              className="px-5 py-2 bg-blue-900 text-white rounded-lg shadow hover:opacity-90 text-sm sm:text-base"
            >
              Voir l’appel à candidature {academicYear}
            </a>
            <a
              href="/appel"
              className="px-5 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-blue-900 text-sm sm:text-base"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      {/* Présentation rapide */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Personnage à gauche */}
        <div className="flex justify-center">
          <Image
            src="/images/a.jpg"
            alt="Personnage IOAM"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Texte à droite */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Qui sommes-nous ?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            L’Institut Ouest Africain de Mathématiques (IOAM) est dédié à
            l’excellence dans l’enseignement et la recherche en sciences
            mathématiques et appliquées. Nous formons la prochaine génération
            d’innovateurs et de leaders pour l’Afrique et le monde.
          </p>
          <button className="px-6 py-3 bg-blue-900 text-white rounded-lg shadow hover:opacity-90">
            <a href="/about">En savoir plus</a>
          </button>
        </div>
      </section>

      {/* Pourquoi IOAM */}
      <section className="py-10 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900">
          Pourquoi choisir l’IOAM ?
        </h2>
        <div className="mt-6 grid sm:grid-cols-3 gap-5">
          {/* Carte 1 */}
          <div className="bg-white p-5 rounded-lg shadow text-center">
            <GraduationCap className="mx-auto h-10 w-10 text-blue-900 mb-3" />
            <h3 className="text-lg font-semibold text-blue-900">
              Programmes de qualité
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Masters et Doctorats encadrés par des enseignants-chercheurs de renom.
            </p>
          </div>

          {/* Carte 2 */}
          <div className="bg-white p-5 rounded-lg shadow text-center">
            <FlaskConical className="mx-auto h-10 w-10 text-blue-900 mb-3" />
            <h3 className="text-lg font-semibold text-blue-900">
              Recherche active
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Des laboratoires innovants avec des projets régionaux et internationaux.
            </p>
          </div>

          {/* Carte 3 */}
          <div className="bg-white p-5 rounded-lg shadow text-center">
            <Globe className="mx-auto h-10 w-10 text-blue-900 mb-3" />
            <h3 className="text-lg font-semibold text-blue-900">
              Partenariats
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Un réseau solide d’universités et d’institutions prestigieuses.
            </p>
          </div>
        </div>
      </section>

      {/* Actualités */}
      <section className="py-10 bg-gray-100 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900">
          Actualités récentes
        </h2>
        <div className="mt-6 grid sm:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {/* Actu 1 */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition">
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              alt="Conférence régionale"
              width={400}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="text-base font-semibold text-blue-900">
                Conférence régionale {currentYear}
              </h3>
              <p className="text-gray-600 mt-1 text-sm">
                Des chercheurs réunis autour des avancées mathématiques.
              </p>
            </div>
          </div>

          {/* Actu 2 */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition">
            <Image
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
              alt="Partenariat universitaire"
              width={400}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="text-base font-semibold text-blue-900">
                Nouveaux partenariats
              </h3>
              <p className="text-gray-600 mt-1 text-sm">
                Accord signé avec l’Université Paris-Saclay.
              </p>
            </div>
          </div>

          {/* Actu 3 */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition">
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Admissions IOAM"
              width={400}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="text-base font-semibold text-blue-900">
                Admissions ouvertes
              </h3>
              <p className="text-gray-600 mt-1 text-sm">
                Lancement officiel de l’appel à candidatures {academicYear}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
