"use client";
import Link from "next/link";
import Image from "next/image";
import { FileText, DollarSign, HelpCircle, Mail } from "lucide-react";

export default function Admissions() {
  return (
    <main>
      {/* 🔹 Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center text-center">
        <Image
          src="/images/ioam_header_slide3.png"
          alt="Admissions IOAM"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
            Admissions à l’IOAM
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-100">
            Rejoignez une communauté académique d’excellence
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Intro */}
        <p className="text-lg text-gray-700 mb-10 text-center">
          Faites partie de la nouvelle génération de chercheurs et enseignants
          en mathématiques en Afrique de l’Ouest. Découvrez comment postuler et
          rejoignez l’Institut Ouest Africain de Mathématiques (IOAM).
        </p>

        {/* 🔹 Formulaires + Frais en 2 colonnes */}
        <section className="grid sm:grid-cols-2 gap-8 mb-16">
          {/* Formulaires */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-6 h-6 text-blue-800" />
              <h2 className="text-2xl font-bold text-blue-800">
                Formulaires de candidature
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              Téléchargez le dossier de candidature correspondant <br /> à votre
              programme :
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-700" />
                <Link
                  href="/docs/appel_candidature/Appel_CandidatureMaster.pdf"
                  className="text-blue-700 hover:underline font-medium"
                >
                  Formulaire de candidature – Master
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-700" />
                <Link
                  href="/docs/appel_candidature/Appel_CandidatureDoctorat.pdf"
                  className="text-blue-700 hover:underline font-medium"
                >
                  Formulaire de candidature – Doctorat
                </Link>
              </li>
            </ul>
          </div>

          {/* Frais */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-6 h-6 text-blue-800" />
              <h2 className="text-2xl font-bold text-blue-800">
                Frais de scolarité
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              Les frais varient selon le programme choisi :
            </p>
            <div className="bg-gray-50 p-6 rounded-lg shadow border">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-blue-700" />
                  <span>
                    <strong>Master :</strong> 500 000 GNF/an
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-blue-700" />
                  <span>
                    <strong>Doctorat :</strong> 700 000 GNF/an
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section FAQ */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-6 h-6 text-blue-800" />
            <h2 className="text-2xl font-bold text-blue-800">
              FAQ sur les admissions
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 border rounded-lg shadow-sm">
              <summary className="cursor-pointer font-semibold text-gray-800 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-700" />
                Quels sont les critères d’admission ?
              </summary>
              <p className="mt-2 text-gray-600">
                Licence (L3) en mathématiques ou équivalent pour le Master.
                Master (M2) en mathématiques pour le Doctorat.
              </p>
            </details>
            <details className="bg-white p-4 border rounded-lg shadow-sm">
              <summary className="cursor-pointer font-semibold text-gray-800 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-700" />
                Comment postuler ?
              </summary>
              <p className="mt-2 text-gray-600">
                Téléchargez le formulaire, remplissez-le et envoyez-le par email
                à{" "}
                <a
                  href="mailto:admissions@ioam.org"
                  className="text-blue-700 underline"
                >
                  admissions@ioam.org
                </a>{" "}
                accompagné des documents requis.
              </p>
            </details>
            <details className="bg-white p-4 border rounded-lg shadow-sm">
              <summary className="cursor-pointer font-semibold text-gray-800 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-700" />
                Y a-t-il des bourses disponibles ?
              </summary>
              <p className="mt-2 text-gray-600">
                Oui, des bourses partielles et totales sont offertes selon le
                mérite et la situation financière.
              </p>
            </details>
          </div>
        </section>

        {/* Section Contact */}
        <section className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="w-6 h-6 text-blue-800" />
            <h2 className="text-2xl font-bold text-blue-800">Besoin d’aide ?</h2>
          </div>
          <p className="text-gray-700 mb-6">
            Notre équipe est à votre disposition pour répondre à vos questions
            sur les admissions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white rounded-lg shadow hover:opacity-90"
          >
            <Mail className="w-5 h-5" />
            Contacter l’IOAM
          </Link>
        </section>
      </div>
    </main>
  );
}
