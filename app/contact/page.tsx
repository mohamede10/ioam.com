"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Globe, MessageSquare, Send, CheckCircle, Facebook, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi (à remplacer par votre backend)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      
      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/images/slide/slide1.png"
          alt="Contact COTECH SERVICES"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Nous sommes à votre écoute pour tous vos projets technologiques
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Infos de contact */}
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center gap-2">
                <MessageSquare className="h-6 w-6" />
                Nos coordonnées
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700 p-3 bg-white rounded-lg">
                  <MapPin className="text-blue-900 w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-sm">Conakry, République de Guinée</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-gray-700 p-3 bg-white rounded-lg">
                  <Phone className="text-blue-900 w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <a href="tel:+224627421722" className="text-sm hover:text-blue-900 transition">
                      +224 627 421 722
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-gray-700 p-3 bg-white rounded-lg">
                  <MessageSquare className="text-blue-900 w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <a href="https://wa.me/224610093485" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-900 transition">
                      +224 610 093 485
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-gray-700 p-3 bg-white rounded-lg">
                  <Mail className="text-blue-900 w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:cotechservices.gn@gmail.com" className="text-sm hover:text-blue-900 transition">
                      cotechservices.gn@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-gray-700 p-3 bg-white rounded-lg">
                  <Globe className="text-blue-900 w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Site web</p>
                    <a href="https://cotechservices.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-900 transition">
                      www.cotechservices.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-gray-700 p-3 bg-white rounded-lg">
                  <Clock className="text-blue-900 w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Horaires</p>
                    <p className="text-sm">Lun-Ven: 8h00-18h00 | Samedi: 9h00-13h00</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-700 p-3 bg-white rounded-lg">
                  <Clock className="text-blue-900 w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Horaires</p>
                    <p className="text-sm">Lun-Ven: 8h00-18h00 | Samedi: 9h00-13h00</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-700 p-3 bg-white rounded-lg">
                  <Clock className="text-blue-900 w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Horaires</p>
                    <p className="text-sm">Lun-Ven: 8h00-18h00 | Samedi: 9h00-13h00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl p-8 border space-y-6">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-blue-900">Envoyez-nous un message</h3>
              <p className="text-gray-500 text-sm mt-1">Nous vous répondrons dans les plus brefs délais</p>
            </div>

            {isSubmitted && (
              <div className="bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Message envoyé avec succès ! Nous vous contacterons rapidement.</span>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet *
              </label>
              <input
                type="text"
                placeholder="Votre nom et prénom"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                placeholder="votre@email.com"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Téléphone
              </label>
              <input
                type="tel"
                placeholder="+224 XX XXX XXX"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sujet *
              </label>
              <select
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                required
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="devis">Demande de devis</option>
                <option value="service">Informations sur un service</option>
                <option value="maintenance">Maintenance / Support</option>
                <option value="formation">Formation</option>
                <option value="partenariat">Partenariat</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                placeholder="Décrivez votre projet ou votre demande..."
                className="w-full border border-gray-300 px-4 py-3 rounded-lg h-32 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white font-semibold rounded-lg shadow-md hover:from-blue-800 hover:to-blue-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Envoyer le message
                </>
              )}
            </button>

          </form>
        </div>
      </section>

      {/* CTA Réseaux sociaux */}
      <section className="py-12 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h3 className="text-2xl font-bold mb-4">Suivez-nous sur les réseaux sociaux</h3>
          <p className="text-blue-100 mb-8">Restez connectés pour suivre nos actualités et projets</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://facebook.com/cotechservices"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>

            <a
              href="https://wa.me/224610093485?text=Bonjour%20COTECH%20SERVICES%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="WhatsApp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.032 2.001c-5.516 0-10 4.484-10 10 0 1.852.504 3.588 1.385 5.084L2.04 21.96l4.93-1.342a9.979 9.979 0 0 0 5.062 1.383c5.516 0 10-4.484 10-10s-4.484-10-10-10zm0 18.364c-1.542 0-2.978-.43-4.21-1.172l-.3-.18-2.91.792.79-2.868-.185-.306A8.138 8.138 0 0 1 4.032 12c0-4.422 3.598-8 8-8s8 3.578 8 8-3.598 8-8 8z"/>
                <path d="M16.434 14.043c-.206-.103-1.218-.601-1.408-.67-.19-.068-.328-.103-.467.103-.139.206-.537.67-.658.808-.12.137-.24.154-.447.051-.206-.103-.87-.32-1.656-1.022-.612-.547-1.025-1.222-1.146-1.428-.12-.206-.012-.318.09-.42.09-.09.206-.24.308-.36.103-.12.138-.206.206-.343.068-.137.034-.257-.017-.36-.051-.103-.467-1.124-.64-1.54-.168-.4-.338-.344-.466-.35-.12-.006-.257-.006-.395-.006-.137 0-.36.051-.548.257-.188.206-.719.703-.719 1.714 0 1.011.736 1.988.84 2.125.102.137 1.44 2.203 3.496 3.077.489.208.872.332 1.17.424.492.156.94.134 1.295.082.395-.055 1.218-.497 1.39-.977.171-.48.171-.892.12-.978-.052-.086-.19-.137-.395-.24z"/>
              </svg>
            </a>

            <a
              href="https://linkedin.com/company/cotechservices"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.204 0 22.225 0z"/>
              </svg>
            </a>

            <a
              href="https://twitter.com/cotechservices"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            <a
              href="https://instagram.com/cotechservices"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>

            <a
              href="https://tiktok.com/@cotechservices"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="TikTok"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>

            <a
              href="https://youtube.com/@cotechservices"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="YouTube"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
          
          <div className="mt-8 text-blue-100 text-sm">
            <p> +224 627 421 722 / +224 610 093 485 | cotechservices.gn@gmail.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
