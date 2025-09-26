"use client";
import React from "react";
import Image from "next/image";

// ——— Configuration éditable ———
const cfg = {
  school: "Institut Ouest Africain de Mathématiques (IOAM)",
  year: "2025-2026",
  location: "GAMAL, Guinée",
  emails: {
    admissions: "admissions@ioam.edu.gn",
    copy: "secretariat.mesri@exemple.gov.gn", // TODO: remplacer
  },
  capacity: { master: 30, phd: 15, foreignShare: 0.4 },
  fees: { master: "—", phd: "—", currency: "GNF" }, // TODO: montant exact
  bank: { accountNo: "…", holder: "IOAM" }, // TODO: renseigner
  deadlineISO: "2025-06-30", // TODO: date exacte
};

// ——— Composants utilitaires ———
function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-white/60 border border-gray-200 rounded-2xl p-5 text-center shadow-sm">
      <div className="text-3xl font-semibold text-blue-900">{value}</div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  );
}

function Pill({ children }: React.PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur bg-white/60 border-gray-200">
      {children}
    </span>
  );
}

// ——— Page fusionnée ———
export default function AppelPage() {
  const deadline = new Date(cfg.deadlineISO);
  const deadlineFmt = new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "long",
  }).format(deadline);
  const foreignPct = Math.round(cfg.capacity.foreignShare * 100);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-gray-200">
        {/* Image de fond */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/ioam_header_slide3.png"
            alt="Fond IOAM"
            fill
            className="object-cover blur-sm opacity-70"
            priority
          />
        </div>

        {/* Contenu */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col items-center text-center">
          <div className="w-16 h-16 relative mb-4">
            <Image
              src="/images/logo.jpg"
              alt="Logo IOAM"
              fill
              className="object-contain"
            />
          </div>
          <Pill>Année académique {cfg.year}</Pill>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-blue-900">
            Appel à candidatures
          </h1>
          <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-gray-800">
            {cfg.school}
          </h2>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl">
            Programmes de <strong>Master</strong> et <strong>Doctorat</strong> en
            Mathématiques visant à renforcer la recherche et l’enseignement
            supérieur en Afrique de l’Ouest.
          </p>
           <p className="text-lg text-gray-700 mb-6">
          L’Institut Ouest Africain de Mathématiques (IOAM) lance un appel à
          candidatures pour les programmes de Master et Doctorat en
          Mathématiques.
          </p>
          <p>
            Ces formations visent à renforcer les capacités en recherche et en
            enseignement supérieur dans la sous-région ouest-africaine.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4 w-full">
            <Stat label="Capacité Master" value={cfg.capacity.master} />
            <Stat label="Capacité Doctorat" value={cfg.capacity.phd} />
            <Stat
              label="Part d’étudiants étrangers"
              value={`${foreignPct}%`}
            />
          </div>

          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a
              href="/admissions/postuler"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold bg-blue-900 text-white hover:opacity-90"
            >
              Postuler maintenant
            </a>
            <a
              href="#documents"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold border border-blue-900 text-blue-900 hover:bg-blue-50"
            >
              Pièces à fournir
            </a>
            <Pill>Lieu : {cfg.location}</Pill>
            <Pill>Date limite : {deadlineFmt}</Pill>
          </div>
        </div>
      </header>

      {/* Contenu Appel */}
  
 <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
  {/* Texte à gauche */}
  <div className="space-y-6 text-gray-700 leading-relaxed">
    <h2 className="text-xl font-semibold text-blue-800">
      Capacités d’accueil
    </h2>
    <ul className="list-disc list-inside">
      <li>{cfg.capacity.master} étudiants pour le Master</li>
      <li>{cfg.capacity.phd} étudiants pour le Doctorat</li>
      <li>{foreignPct}% de places réservées aux étudiants étrangers</li>
    </ul>

    <h2 id="documents" className="text-xl font-semibold text-blue-800 mt-6">
      Documents requis – Master
    </h2>
    <ol className="list-decimal list-inside space-y-1">
      <li>Demande adressée au Directeur de l’IOAM</li>
      <li>Lettre de motivation</li>
      <li>Curriculum Vitae (CV)</li>
      <li>Deux lettres de recommandation</li>
      <li>Copies certifiées des diplômes et relevés (y compris bac)</li>
      <li>Copies authentifiées ou attestation pour diplômes étrangers</li>
      <li>Reçu de paiement des frais d’étude de dossier</li>
    </ol>

    <h2 className="text-xl font-semibold text-blue-800 mt-6">
      Documents requis – Doctorat
    </h2>
    <ol className="list-decimal list-inside space-y-1">
      <li>Demande adressée au Directeur de l’IOAM</li>
      <li>Lettre de motivation</li>
      <li>Curriculum Vitae (CV)</li>
      <li>Deux lettres de recommandation</li>
      <li>Copies certifiées des diplômes et relevés (y compris bac)</li>
      <li>Copies authentifiées ou attestation pour diplômes étrangers</li>
      <li>Résumé du mémoire de Master signé</li>
      <li>Projet de thèse signé par un encadreur</li>
      <li>Reçu de paiement des frais d’étude de dossier</li>
    </ol>

    <h2 className="text-xl font-semibold text-blue-800 mt-6">
      Conditions d’éligibilité
    </h2>
    <p>
      Pour le <strong>Master</strong> : Licence (L3) en mathématiques ou
      équivalent, mention Bien recommandée. <br />
      Pour le <strong>Doctorat</strong> : Master (M2) en mathématiques,
      projet de recherche identifié, encadreur potentiel.
    </p>

    <p className="mt-6 text-sm italic text-gray-600">
      NB : Les frais d’étude de dossier ne sont pas remboursables.
    </p>
  </div>

  {/* Images verticales à droite */}
  <div className="flex flex-col items-center gap-6">
    <Image
      src="/images/appel_candidature/ioam_img1.png" 
      alt="Affiche IOAM 2"
      width={400}
      height={400}
      className="rounded-lg shadow-lg object-cover"
    />
    <Image
      src="/images/appel_candidature/ioam2.jpg"
      alt="Affiche IOAM"
      width={400}
      height={600}
      className="rounded-lg shadow-lg object-cover"
    />
  </div>
</section>


    </main>
  );
}
