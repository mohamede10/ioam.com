"use client";
import Image from "next/image";
import { Target, Eye, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Section titre */}

        <section className="relative w-full h-[40vh] flex items-center justify-center text-center text-white">
          {/* Image de fond */}
          <Image
            src="/images/ioam_header_slide3.png"
            alt="Background IOAM"
            fill
            priority
            className="object-cover brightness-50"
          />

          {/* Overlay contenu */}
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg">
              À propos de l’IOAM
            </h1>
          </div>
        </section>
      {/* Historique */}
 
      <section className="max-w-6xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Historique</h2>
        <p className="text-gray-700 leading-relaxed">
          L’Institut Ouest Africain de Mathématiques (IOAM) a été fondé pour répondre au besoin croissant 
          de formation d’excellence en mathématiques en Afrique de l’Ouest. Depuis sa création, 
          il accueille des étudiants de toute la région et collabore avec des institutions internationales 
          pour renforcer la recherche et l’enseignement supérieur.
        </p>
      </section>
<section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-3 gap-8 text-center">
        
        {/* Mission */}
        <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
            <Target className="w-8 h-8 text-blue-900" />
          </div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Mission</h3>
          <p className="text-gray-600">
            Former une nouvelle génération de chercheurs et enseignants en mathématiques, 
            capables de relever les défis scientifiques de l’Afrique.
          </p>
        </div>

        {/* Vision */}
        <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
            <Eye className="w-8 h-8 text-blue-900" />
          </div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Vision</h3>
          <p className="text-gray-900">
            Devenir un centre de référence internationale en recherche et enseignement 
            mathématique en Afrique de l’Ouest.
          </p>
        </div>

        {/* Valeurs */}
        <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
            <Lightbulb className="w-8 h-8 text-blue-900" />
          </div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Valeurs</h3>
          <p className="text-blue-900">
            Excellence académique, collaboration, inclusion, innovation et engagement régional.
          </p>
        </div>

      </div>
    </section>

      {/* Programmes académiques */}
      <section className="max-w-6xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Programmes académiques</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L’IOAM propose une offre de formation complète adaptée aux besoins académiques 
          et scientifiques de la région :
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Masters</strong> : des spécialisations en recherche et applications mathématiques modernes.</li>
          <li><strong>Doctorats</strong> : une recherche avancée en mathématiques fondamentales et appliquées, 
              encadrée par des experts nationaux et internationaux.</li>
        </ul>
      </section>

      {/* Recherche */}
      <section className="max-w-6xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Recherche et Innovation</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La recherche est au cœur de la mission de l’IOAM. L’institut développe des projets 
          en partenariat avec des universités prestigieuses et contribue activement à l’avancement 
          scientifique en Afrique.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Mathématiques fondamentales</li>
          <li>Modélisation appliquée aux sciences et à l’ingénierie</li>
          <li>Intelligence artificielle et data science</li>
          <li>Projets collaboratifs régionaux et internationaux</li>
        </ul>
      </section>
      {/* Organigramme */}
            
        <section className="max-w-6xl mx-auto py-10 px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Organigramme & Équipe dirigeante
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {/* Directeur */}
            <div>
              <div className="w-40 h-40 mx-auto rounded-full border-4 border-blue-900 shadow-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
                  alt="Directeur IOAM"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-blue-900">
                Pr. Nom Directeur
              </h3>
              <p className="text-gray-600">Directeur Général</p>
            </div>

            {/* Responsable pédagogique */}
            <div>
              <div className="w-40 h-40 mx-auto rounded-full border-4 border-blue-900 shadow-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
                  alt="Responsable pédagogique"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-blue-900">
                Dr. Nom Responsable
              </h3>
              <p className="text-gray-600">Responsable pédagogique</p>
            </div>

            {/* Secrétaire */}
            <div>
              <div className="w-40 h-40 mx-auto rounded-full border-4 border-blue-900 shadow-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
                  alt="Secrétaire général"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-blue-900">
                M. Nom Secrétaire
              </h3>
              <p className="text-gray-600">Secrétaire Général</p>
            </div>
          </div>
        </section>
      {/* Partenaires */}

    <section className="bg-gray-100 py-10 px-6 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Partenaires académiques & institutionnels
      </h2>
      {/* Container du défilement */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll space-x-12 w-max">
          {/* Logos répétés 2x pour boucle infinie */}
          <a href="https://www.univ-paris-saclay.fr" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
              alt="Université Paris-Saclay"
              width={150}
              height={80}
              className="object-contain"
            />
          </a>
          <a href="https://www.aims.org" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
              alt="AIMS"
              width={150}
              height={80}
              className="object-contain"
            />
          </a>
          <a href="https://www.uca.ma" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
              alt="Université Cadi Ayyad"
              width={150}
              height={80}
              className="object-contain"
            />
          </a>

          {/* Reprise pour boucle infinie */}
          <a href="https://www.univ-paris-saclay.fr" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
              alt="Université Paris-Saclay"
              width={150}
              height={80}
              className="object-contain"
            />
          </a>
          <a href="https://www.aims.org" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
              alt="AIMS"
              width={150}
              height={80}
              className="object-contain"
            />
          </a>
          <a href="https://www.uca.ma" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
              alt="Université Cadi Ayyad"
              width={150}
              height={80}
              className="object-contain"
            />
          </a>
        </div>
      </div>
    </section>
    </main>
  );
}
