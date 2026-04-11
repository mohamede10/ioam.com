"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";
import { 
  GraduationCap, 
  User, 
  Mail, 
  Phone, 
  Calendar,
  MapPin,
  Video,
  Building,
  MessageCircle,
  Send,
  CheckCircle,
  ArrowLeft,
  Laptop,
  Wifi,
  Cpu,
  Code2
} from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  formation: string;
  type: "online" | "presentiel";
  address?: string;
  city?: string;
  message: string;
}

export default function InscriptionPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    formation: "",
    type: "online",
    address: "",
    city: "Conakry",
    message: ""
  });

  const formations = [
    { value: "web", label: "Développement Web Full-Stack", icon: Code2, duration: "120h" },
    { value: "reseau", label: "Réseaux & Sécurité", icon: Wifi, duration: "80h" },
    { value: "iot", label: "IoT & Systèmes Embarqués", icon: Cpu, duration: "60h" },
    { value: "bureautique", label: "Informatique de base", icon: Laptop, duration: "40h" }
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Inscription soumise:", formData);
    setSubmitted(true);
    // Ici vous pouvez ajouter l'envoi vers votre API
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        formation: "",
        type: "online",
        address: "",
        city: "Conakry",
        message: ""
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="text-center p-8 max-w-md">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Inscription envoyée !</h1>
          <p className="text-gray-600 mb-6">
            Merci pour votre inscription. Nous vous contacterons dans les plus brefs délais pour confirmer votre place.
          </p>
          <Link href="/formations" className="inline-flex items-center gap-2 text-blue-900 font-semibold">
            <ArrowLeft className="h-4 w-4" />
            Retour aux formations
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/images/services/formation/cotech_design_salle.png"
          alt="Inscription formation"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <div className="bg-blue-900/20 backdrop-blur-sm inline-block p-3 rounded-full mb-4">
            <GraduationCap className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Inscription formation
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Rejoignez nos programmes certifiants
          </p>
        </div>
      </section>

      {/* Formulaire d'inscription */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Types de formation */}
            <div className="grid grid-cols-2 border-b">
              <button
                onClick={() => setFormData({ ...formData, type: "online" })}
                className={`py-4 text-center font-semibold transition ${
                  formData.type === "online"
                    ? "bg-blue-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Video className="h-5 w-5 mx-auto mb-1" />
                Formation en ligne
              </button>
              <button
                onClick={() => setFormData({ ...formData, type: "presentiel" })}
                className={`py-4 text-center font-semibold transition ${
                  formData.type === "presentiel"
                    ? "bg-blue-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <MapPin className="h-5 w-5 mx-auto mb-1" />
                Formation présentielle
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Prénom *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="+224 XX XXX XXXX"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Formation souhaitée *</label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <select
                    name="formation"
                    required
                    value={formData.formation}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Sélectionnez une formation</option>
                    {formations.map((f) => (
                      <option key={f.value} value={f.value}>
                        {f.label} ({f.duration})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {formData.type === "presentiel" && (
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Votre adresse"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Votre ville"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message (optionnel)</label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre message ou question..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Envoyer ma demande d'inscription
              </button>

              <p className="text-xs text-gray-500 text-center">
                En soumettant ce formulaire, j'accepte que mes informations soient utilisées pour me recontacter.
              </p>
            </form>
          </div>

          {/* Informations complémentaires */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <Calendar className="h-8 w-8 text-blue-900 mx-auto mb-2" />
              <h3 className="font-semibold">Prochaine session</h3>
              <p className="text-sm text-gray-600">Début : 15 Février 2025</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <GraduationCap className="h-8 w-8 text-blue-900 mx-auto mb-2" />
              <h3 className="font-semibold">Certification incluse</h3>
              <p className="text-sm text-gray-600">Attestation reconnue</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}