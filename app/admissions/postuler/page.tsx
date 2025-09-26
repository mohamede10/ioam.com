"use client";

import { useState } from "react";

export default function Postuler() {
  const [programme, setProgramme] = useState<"master" | "doctorat">("master");

  // Master form state
  const [masterForm, setMasterForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    nationalite: "",
    diplome: "",
    motivation: "",
  });

  // Doctorat form state
  const [phdForm, setPhdForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    nationalite: "",
    master: "",
    domaine: "",
    motivation: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: "master" | "doctorat"
  ) => {
    const { name, value } = e.target;
    if (type === "master") setMasterForm({ ...masterForm, [name]: value });
    if (type === "doctorat") setPhdForm({ ...phdForm, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (programme === "master") {
      alert("✅ Candidature Master soumise !");
      console.log(masterForm);
    } else {
      alert("✅ Candidature Doctorat soumise !");
      console.log(phdForm);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-extrabold text-blue-900 mb-6">
        Postuler à l’IOAM
      </h1>
      <p className="text-gray-700 mb-6">
        Choisissez le programme pour lequel vous souhaitez soumettre une
        candidature.
      </p>

      {/* Boutons de bascule */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setProgramme("master")}
          className={`px-6 py-2 rounded-lg font-medium ${
            programme === "master"
              ? "bg-blue-900 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Master
        </button>
        <button
          onClick={() => setProgramme("doctorat")}
          className={`px-6 py-2 rounded-lg font-medium ${
            programme === "doctorat"
              ? "bg-blue-900 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Doctorat
        </button>
      </div>

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white shadow rounded-lg p-8"
      >
        {/* Champs communs */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Prénom</label>
          <input
            type="text"
            name="prenom"
            placeholder="Entrez votre prénom"
            value={programme === "master" ? masterForm.prenom : phdForm.prenom}
            onChange={(e) => handleChange(e, programme)}
            required
            className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-900 focus:border-blue-900"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            name="nom"
            placeholder="Entrez votre nom"
            value={programme === "master" ? masterForm.nom : phdForm.nom}
            onChange={(e) => handleChange(e, programme)}
            required
            className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-900 focus:border-blue-900"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="exemple@mail.com"
            value={programme === "master" ? masterForm.email : phdForm.email}
            onChange={(e) => handleChange(e, programme)}
            required
            className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-900 focus:border-blue-900"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Téléphone</label>
          <input
            type="tel"
            name="telephone"
            placeholder="+224 620 00 00 00"
            value={programme === "master" ? masterForm.telephone : phdForm.telephone}
            onChange={(e) => handleChange(e, programme)}
            required
            className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-900 focus:border-blue-900"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Nationalité</label>
          <input
            type="text"
            name="nationalite"
            placeholder="Ex: Guinéenne"
            value={programme === "master" ? masterForm.nationalite : phdForm.nationalite}
            onChange={(e) => handleChange(e, programme)}
            required
            className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-900 focus:border-blue-900"
          />
        </div>

        {/* Spécifique Master */}
        {programme === "master" && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Dernier diplôme obtenu
              </label>
              <input
                type="text"
                name="diplome"
                placeholder="Ex: Licence en Informatique"
                value={masterForm.diplome}
                onChange={(e) => handleChange(e, "master")}
                required
                className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-900 focus:border-blue-900"
              />
            </div>
          </>
        )}

        {/* Spécifique Doctorat */}
        {programme === "doctorat" && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Diplôme de Master obtenu
              </label>
              <input
                type="text"
                name="master"
                placeholder="Ex: Master en Biologie"
                value={phdForm.master}
                onChange={(e) => handleChange(e, "doctorat")}
                required
                className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-900 focus:border-blue-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Domaine de recherche
              </label>
              <input
                type="text"
                name="domaine"
                placeholder="Ex: Intelligence Artificielle"
                value={phdForm.domaine}
                onChange={(e) => handleChange(e, "doctorat")}
                required
                className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-900 focus:border-blue-900"
              />
            </div>
          </>
        )}

        {/* Lettre de motivation */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Lettre de motivation</label>
          <textarea
            name="motivation"
            rows={5}
            placeholder="Rédigez votre lettre de motivation ici..."
            value={programme === "master" ? masterForm.motivation : phdForm.motivation}
            onChange={(e) => handleChange(e, programme)}
            required
            className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-900 focus:border-blue-900"
          />
        </div>

        {/* Bouton Submit */}
        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-3 rounded-lg shadow hover:opacity-90"
        >
          Soumettre ma candidature
        </button>
      </form>
    </div>
  );
}
