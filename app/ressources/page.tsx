"use client";

import Image from "next/image";
import { Download, BookOpen, FileText } from "lucide-react";

export default function Ressources() {
  const docs = [
    {
      id: 1,
      title: "Guide des admissions 2025-2026",
      description:
        "Tout savoir sur les conditions d’admission et le processus d’inscription.",
      file: "/docs/guide-admissions.pdf",
    },
    {
      id: 2,
      title: "Programme Master en Mathématiques",
      description: "Description détaillée des cours, crédits et débouchés.",
      file: "/docs/programme-master.pdf",
    },
    {
      id: 3,
      title: "Programme Doctorat en Mathématiques",
      description:
        "Informations sur la recherche, la méthodologie et les encadrements.",
      file: "/docs/programme-doctorat.pdf",
    },
  ];

  const cours = [
    {
      id: 1,
      name: "Analyse avancée",
      link: "#",
    },
    {
      id: 2,
      name: "Probabilités et Statistiques",
      link: "#",
    },
    {
      id: 3,
      name: "Optimisation numérique",
      link: "#",
    },
  ];

  return (
    <main>
      {/* 🔹 Hero Section avec image */}
      <section className="relative w-full h-[40vh] flex items-center justify-center text-center">
        <Image
          src="/images/ioam_header_slide3.png"
          alt="Ressources IOAM"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
            Ressources
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-100">
            Accédez aux documents, cours et bibliothèque numérique de l’IOAM
          </p>
        </div>
      </section>

      {/* 🔹 Contenu principal */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <p className="text-lg text-gray-700 mb-12 text-center">
          Retrouvez ici l’ensemble des ressources pédagogiques, documents
          institutionnels et supports de cours mis à disposition des étudiants
          et enseignants de l’IOAM.
        </p>

        {/* Documents téléchargeables */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-700" />
            Documents téléchargeables
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {docs.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-lg shadow hover:shadow-lg p-6 flex flex-col"
              >
                <h3 className="text-lg font-semibold text-blue-900">
                  {doc.title}
                </h3>
                <p className="text-gray-600 mt-2 flex-1">{doc.description}</p>
                <a
                  href={doc.file}
                  download
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-900 hover:underline"
                >
                  <Download className="w-4 h-4" /> Télécharger
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Cours en ligne */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-700" />
            Accès aux cours en ligne
          </h2>
          <ul className="bg-white divide-y divide-gray-200 rounded-lg shadow">
            {cours.map((c) => (
              <li key={c.id} className="p-4 flex justify-between items-center">
                <span className="font-medium text-gray-700">{c.name}</span>
                <a
                  href={c.link}
                  className="text-sm text-blue-900 font-medium hover:underline"
                >
                  Accéder →
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Bibliothèque numérique */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            Bibliothèque numérique
          </h2>
          <p className="text-gray-700 mb-4">
            Une sélection d’ouvrages, d’articles scientifiques et de publications
            est disponible via notre bibliothèque numérique.
          </p>
          <a
            href="/bibliotheque"
            className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg shadow hover:opacity-90"
          >
            Accéder à la bibliothèque
          </a>
        </section>
      </div>
    </main>
  );
}
