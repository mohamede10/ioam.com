"use client";
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Message envoyé (simulation, à connecter avec backend).");
    setForm({ name: "", email: "", message: "" }); // reset après envoi
  };

  return (
    <main>
      {/* 🔹 Hero avec image en en-tête */}
      <section className="relative w-full h-[40vh] flex items-center justify-center text-center">
        <Image
          src="/images/ioam_header_slide3.png"
          alt="Contact IOAM"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
            Contactez-nous
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-100">
            Restons en contact avec l’IOAM
          </p>
        </div>
      </section>

      {/* 🔹 Contenu principal */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Grille principale */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Infos de contact + carte */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Nos coordonnées
            </h2>
            <p className="flex items-center gap-3 text-gray-700">
              <MapPin className="text-blue-900 w-6 h-6" />
              Institut IOAM, Conakry, République de Guinée
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              <Phone className="text-blue-900 w-6 h-6" />
              <a
                href="tel:+224620000000"
                className="hover:underline hover:text-blue-900"
              >
                +224 620 00 00 00
              </a>
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              <Mail className="text-blue-900 w-6 h-6" />
              <a
                href="mailto:contact@ioam.org"
                className="hover:underline hover:text-blue-900"
              >
                contact@ioam.org
              </a>
            </p>

            {/* Carte Google Maps directement sous les coordonnées */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Nous trouver
              </h3>
              <div className="w-full h-64 md:h-80 border rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.01] transition">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7869.147412054298!2d-13.678872332293698!3d9.545714432394606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd6d3f93e0449%3A0x9e9b96b41bdb1ebc!2sGamal%20Abdel%20Nasser%20University%20Of%20Conakry!5e0!3m2!1sfr!2s!4v1758759675479!5m2!1sfr!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl p-8 border space-y-6"
          >  <span className="text-blue-900 text-2xl">Envoyez nous message pour tous besoin !</span>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Nom complet
              </label>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Votre email"
                className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Message
              </label>
              <textarea
                placeholder="Votre message"
                className="w-full border px-4 py-3 rounded-lg h-32 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
