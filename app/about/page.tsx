"use client";
import Image from "next/image";
import { 
  Eye, 
  Target, 
  Heart, 
  Award, 
  Shield, 
  Lightbulb, 
  Users, 
  TrendingUp,
  CheckCircle,
  Rocket,
  Star,
  Briefcase,
  Clock,
  Headphones
} from "lucide-react";

export default function About() {
  // Valeurs fondamentales selon le document
  const values = [
    {
      icon: Briefcase,
      title: "Professionnalisme",
      description: "Respect des engagements, rigueur et compétence technique",
      color: "bg-blue-100 text-blue-900"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Veille technologique constante et solutions créatives",
      color: "bg-blue-100 text-blue-900"
    },
    {
      icon: Shield,
      title: "Intégrité",
      description: "Transparence, honnêteté et éthique dans toutes nos actions",
      color: "bg-blue-100 text-blue-900"
    },
    {
      icon: Heart,
      title: "Responsabilité",
      description: "Engagement total vis-à-vis de nos clients et de nos réalisations",
      color: "bg-blue-100 text-blue-900"
    },
    {
      icon: Award,
      title: "Excellence technique",
      description: "Maîtrise des technologies et perfectionnement continu",
      color: "bg-blue-100 text-blue-900"
    },
    {
      icon: Users,
      title: "Satisfaction client",
      description: "Écoute, accompagnement personnalisé et suivi après-vente",
      color: "bg-blue-100 text-blue-900"
    }
  ];

  // Chiffres clés
  const stats = [
    { value: "+50", label: "Projets réalisés", icon: CheckCircle },
    { value: "+100", label: "Clients satisfaits", icon: Users },
    { value: "24/7", label: "Support technique", icon: Star },
    { value: "100%", label: "Solutions sur mesure", icon: Target }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/images/slide/slide2.jpg"
          alt="À propos de COTECH SERVICES"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            À propos de nous
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Découvrez qui nous sommes, notre vision et nos valeurs
          </p>
        </div>
      </section>

      {/* Présentation Générale */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
                Présentation Générale
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold text-blue-900">COTECH SERVICES</span> est une entreprise 
                  multiservices spécialisée dans les technologies de l'information (IT), 
                  les solutions numériques, les systèmes intelligents (IoT), la maintenance 
                  matérielle et logicielle, la vente d'équipements informatiques et 
                  l'installation de systèmes GPS.
                </p>
                <p>
                  L'entreprise propose des services professionnels adaptés aux particuliers, 
                  entreprises, institutions et organisations souhaitant moderniser leurs 
                  infrastructures technologiques.
                </p>
                <p>
                  Elle fonctionne principalement en ligne et offre des prestations à distance 
                  ainsi que des interventions techniques sur site dans un rayon déterminé 
                  selon les besoins des clients.
                </p>
              </div>

              {/* Informations légales */}
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Informations légales
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Statut juridique :</span>
                    <span>SARL</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Siège social :</span>
                    <span>Conakry, Guinée</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">RCCM :</span>
                    <span>À venir</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">IFU (NIF) :</span>
                    <span>À venir</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/apropos/pdg.jpg"
                alt="COTECH SERVICES - Bureau"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bloc unique: Vision, Mission, Valeurs, Objectifs, Engagement Qualité, Chiffres clés */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Vision */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-xl shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-10 w-10" />
                <h2 className="text-3xl font-bold">Notre Vision</h2>
              </div>
              <p className="text-lg leading-relaxed">
                Devenir une référence nationale et sous-régionale dans le domaine 
                des solutions numériques innovantes, en contribuant activement à 
                la transformation digitale des entreprises et organisations.
              </p>
              <div className="mt-6">
                <Rocket className="h-16 w-16 text-white/30" />
              </div>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-8 rounded-xl shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-10 w-10" />
                <h2 className="text-3xl font-bold">Notre Mission</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Fournir des solutions technologiques fiables et performantes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Accompagner les entreprises dans leur digitalisation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Concevoir des systèmes intelligents adaptés aux réalités locales</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Offrir un service professionnel basé sur l'innovation, la qualité et la satisfaction client</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Valeurs Fondamentales */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                Nos Valeurs Fondamentales
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Six valeurs qui guident nos actions au quotidien
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition group"
                  >
                    <div className="bg-blue-100 text-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Objectifs */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12">
              Nos Objectifs
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Objectifs Généraux */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6" />
                  Objectifs Généraux
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>Développer une structure IT solide et reconnue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>Accroître la présence digitale des entreprises locales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>Promouvoir l'utilisation des technologies intelligentes</span>
                  </li>
                </ul>
              </div>

              {/* Objectifs Spécifiques */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Target className="h-6 w-6" />
                  Objectifs Spécifiques
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>Réaliser des projets web et applicatifs performants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>Mettre en place des infrastructures réseaux sécurisées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>Concevoir et déployer des solutions IoT adaptées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>Assurer la maintenance et le support technique continu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>Former et sensibiliser à l'usage des technologies modernes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Engagement Qualité */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 text-white">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
                Notre Engagement Qualité
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm text-center">
                  <Clock className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Respect des délais</h3>
                  <p className="text-blue-100">Suivi régulier de l'avancement</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm text-center">
                  <Shield className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Confidentialité</h3>
                  <p className="text-blue-100">Protection des données clients</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm text-center">
                  <Award className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Solutions durables</h3>
                  <p className="text-blue-100">Évolutives et pérennes</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm text-center">
                  <Headphones className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">SAV efficace</h3>
                  <p className="text-blue-100">Service après-vente réactif</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à collaborer avec COTECH SERVICES ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour discuter de vos projets technologiques
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Nous contacter
            </a>
            <a
              href="/services"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Découvrir nos services
            </a>
          </div>

          {/* Réseaux sociaux */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/80 mb-4">Suivez-nous sur les réseaux sociaux</p>
            <div className="flex flex-wrap justify-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com/cotechservices"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/224610093485?text=Bonjour%20COTECH%20SERVICES%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.032 2.001c-5.516 0-10 4.484-10 10 0 1.852.504 3.588 1.385 5.084L2.04 21.96l4.93-1.342a9.979 9.979 0 0 0 5.062 1.383c5.516 0 10-4.484 10-10s-4.484-10-10-10zm0 18.364c-1.542 0-2.978-.43-4.21-1.172l-.3-.18-2.91.792.79-2.868-.185-.306A8.138 8.138 0 0 1 4.032 12c0-4.422 3.598-8 8-8s8 3.578 8 8-3.598 8-8 8z"/>
                  <path d="M16.434 14.043c-.206-.103-1.218-.601-1.408-.67-.19-.068-.328-.103-.467.103-.139.206-.537.67-.658.808-.12.137-.24.154-.447.051-.206-.103-.87-.32-1.656-1.022-.612-.547-1.025-1.222-1.146-1.428-.12-.206-.012-.318.09-.42.09-.09.206-.24.308-.36.103-.12.138-.206.206-.343.068-.137.034-.257-.017-.36-.051-.103-.467-1.124-.64-1.54-.168-.4-.338-.344-.466-.35-.12-.006-.257-.006-.395-.006-.137 0-.36.051-.548.257-.188.206-.719.703-.719 1.714 0 1.011.736 1.988.84 2.125.102.137 1.44 2.203 3.496 3.077.489.208.872.332 1.17.424.492.156.94.134 1.295.082.395-.055 1.218-.497 1.39-.977.171-.48.171-.892.12-.978-.052-.086-.19-.137-.395-.24z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/cotechservices"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.204 0 22.225 0z"/>
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href="https://twitter.com/cotechservices"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/cotechservices"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@cotechservices"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>

              {/* Threads */}
              <a
                href="https://threads.net/@cotechservices"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Threads"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.022 6.667c-.96 0-1.797.347-2.496.984-.699.638-1.104 1.462-1.192 2.444h3.026v1.78H6.722c-.023-.3-.035-.6-.035-.89 0-1.44.403-2.73 1.21-3.87.806-1.14 1.902-1.977 3.287-2.513 1.385-.536 2.98-.804 4.785-.804 1.42 0 2.743.213 3.967.638 1.224.426 2.262 1.03 3.115 1.813.853.782 1.5 1.711 1.94 2.786.44 1.075.66 2.256.66 3.543 0 1.304-.224 2.496-.672 3.576-.448 1.08-1.068 2.01-1.86 2.79-.792.78-1.73 1.384-2.814 1.812-1.084.428-2.262.642-3.534.642-1.676 0-3.147-.341-4.413-1.023-1.266-.682-2.268-1.638-3.007-2.87-.738-1.23-1.12-2.655-1.146-4.274h2.94c.022.86.22 1.608.594 2.244.374.636.888 1.124 1.542 1.464.654.34 1.403.51 2.247.51 1.01 0 1.886-.264 2.628-.792.742-.528 1.31-1.254 1.704-2.178.394-.924.591-1.968.591-3.132 0-.996-.156-1.896-.468-2.7-.312-.804-.752-1.482-1.32-2.034-.568-.552-1.26-.972-2.076-1.26-.816-.288-1.716-.432-2.7-.432z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@cotechservices"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            
            {/* Téléphone et email */}
            <div className="mt-6 text-white/70 text-sm">
              <p> +224 628 811 827 / 610 093 485 | cotechservices.gn@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}