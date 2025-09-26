"use client";
import Image from "next/image";
import { GraduationCap, BookOpen, Users } from "lucide-react";

export default function Programmes() {
  return (
    <main>
      {/* 🔹 Hero avec image de fond */}
      <section className="relative w-full h-[45vh] flex items-center justify-center text-center">
        <Image
          src="/images/ioam_header_slide3.png"
          alt="Background IOAM"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
            À propos de l’IOAM
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-100">
            Institut Ouest Africain de Mathématiques
          </p>
        </div>
      </section>

      {/* 🔹 Contenu Programmes */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-10 text-center">
          Programmes de formation
        </h1>

        <div className="grid sm:grid-cols-2 gap-8">
          {/* Master */}
          <div className="bg-white shadow rounded-lg p-6 border hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-blue-800" />
              <h2 className="text-xl font-semibold text-blue-800">
                Master en Mathématiques
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Ce programme vise à former des étudiants capables de poursuivre
              une carrière académique ou professionnelle en mathématiques
              fondamentales et appliquées. Les diplômés sont préparés à des
              opportunités dans l’enseignement, la recherche, et les secteurs
              innovants.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600 space-y-1">
              <li>Durée : 2 ans</li>
              <li>Capacité : 30 étudiants</li>
              <li>40% réservés aux étudiants étrangers</li>
              <li>Bourses partielles disponibles</li>
            </ul>
          </div>

          {/* Doctorat */}
          <div className="bg-white shadow rounded-lg p-6 border hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-blue-800" />
              <h2 className="text-xl font-semibold text-blue-800">
                Doctorat en Mathématiques
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Le doctorat offre un encadrement de haut niveau pour développer
              des compétences avancées en recherche scientifique. Les doctorants
              bénéficient d’un suivi personnalisé et participent à des projets
              internationaux.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600 space-y-1">
              <li>Durée : 3 à 4 ans</li>
              <li>Capacité : 15 étudiants</li>
              <li>Encadrement par enseignants-chercheurs expérimentés</li>
              <li>Participation à des colloques et séminaires</li>
            </ul>
          </div>
        </div>

        {/* Avantages */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Pourquoi choisir l’IOAM ?
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Rejoindre l’IOAM, c’est intégrer une communauté académique engagée,
            bénéficier d’un encadrement de qualité et accéder à un réseau
            d’institutions partenaires en Afrique et à l’international.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
              <Users className="w-5 h-5 text-blue-800" />
              <span>Encadrement rapproché</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
              <GraduationCap className="w-5 h-5 text-blue-800" />
              <span>Opportunités de bourses</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
              <BookOpen className="w-5 h-5 text-blue-800" />
              <span>Recherche collaborative</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
