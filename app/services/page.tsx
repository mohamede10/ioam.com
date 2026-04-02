"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  Code2, 
  Wifi, 
  Cpu, 
  Wrench, 
  ShoppingCart, 
  MapPin,
  CheckCircle,
  ArrowRight,
  Server,
  Database,
  Smartphone,
  Network,
  Shield,
  Cloud,
  TrendingUp,
  Clock,
  Award,
  ChevronLeft,
  ChevronRight,
  Star,
  User
} from "lucide-react";

export default function Services() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Services principaux selon le document
  const services = [
    {
      id: "web",
      icon: Code2,
      title: "Dév Web & App-Mobile",
      subtitle: "Solutions numériques sur mesure",
      description: "Création de sites web professionnels et applications de gestion adaptés à vos besoins.",
      features: [
        "Sites web vitrine, e-commerce et institutionnels",
        "Applications web de gestion sur mesure",
        "Intégration de solutions de paiement en ligne",
        "Maintenance et optimisation de plateformes"
      ],
      image: "/images/services/web-dev.jpg"
    },
    {
      id: "reseau",
      icon: Wifi,
      title: "Réseaux & Sécurité",
      subtitle: "Infrastructures sécurisées",
      description: "Installation et configuration de réseaux informatiques pour une connectivité optimale.",
      features: [
        "Installation de réseaux (câblage structuré)",
        "Solutions Wi-Fi professionnelles",
        "Configuration de routeurs, Firewall, VPN",
        "Installation de vidéosurveillance"
      ],
      image: "/images/services/network.jpg"
    },
    {
      id: "iot",
      icon: Cpu,
      title: "Solutions IoT",
      subtitle: "Systèmes intelligents",
      description: "Conception de systèmes automatisés intelligents pour la domotique et l'industrie.",
      features: [
        "Systèmes automatisés intelligents",
        "Systèmes d'irrigation connectés",
        "Solutions de surveillance intelligente",
        "Prototypage électronique"
      ],
      image: "/images/services/iot.jpg"
    },
    {
      id: "maintenance",
      icon: Wrench,
      title: "Maintenance IT",
      subtitle: "Assistance technique",
      description: "Maintenance préventive et corrective pour vos équipements informatiques.",
      features: [
        "Maintenance préventive et corrective",
        "Réparation d'ordinateurs et imprimantes",
        "Installation de systèmes d'exploitation",
        "Optimisation des performances"
      ],
      image: "/images/services/maintenance.jpg"
    },
    {
      id: "vente",
      icon: ShoppingCart,
      title: "Vente d'Équipements",
      subtitle: "Matériel de qualité",
      description: "Fourniture d'équipements informatiques et électroniques adaptés à vos besoins.",
      features: [
        "Vente de matériel informatique",
        "Fourniture d'accessoires électroniques",
        "Conseil et accompagnement",
        "Vente sur devis"
      ],
      image: "/images/services/sales.jpg"
    },
    {
      id: "gps",
      icon: MapPin,
      title: "Systèmes GPS",
      subtitle: "Suivi de flotte",
      description: "Installation de dispositifs GPS pour le suivi de véhicules et de flottes.",
      features: [
        "Installation de dispositifs GPS",
        "Configuration des plateformes de suivi",
        "Assistance technique",
        "Alertes personnalisées"
      ],
      image: "/images/services/gps.jpg"
    }
  ];

  // Témoignages avec couleurs d'avatar différentes
  const testimonials = [
    {
      name: "Mamadou Diallo",
      position: "CEO, Entreprise X",
      text: "COTECH SERVICES a réalisé un excellent travail sur notre infrastructure réseau. Professionnalisme et réactivité au rendez-vous.",
      rating: 5,
      color: "from-blue-600 to-blue-800"
    },
    {
      name: "Aissatou Barry",
      position: "Directrice, ONG Y",
      text: "Le système GPS installé par COTECH nous permet désormais de suivre efficacement nos véhicules. Un service de qualité !",
      rating: 5,
      color: "from-blue-600 to-blue-800"
    },
    {
      name: "Ibrahima Camara",
      position: "Gérant, Commerce Z",
      text: "Notre site e-commerce est parfaitement fonctionnel. L'équipe est très à l'écoute et compétente.",
      rating: 5,
      color: "from-blue-600 to-blue-800"
    },
    {
      name: "Fatoumata Soumah",
      position: "Directrice Technique, Banque A",
      text: "La solution de sécurité réseau déployée par COTECH SERVICES est robuste et fiable. Une équipe professionnelle !",
      rating: 5,
      color: "from-blue-600 to-blue-800"
    },
    {
      name: "Alpha Condé",
      position: "Responsable IT, Société B",
      text: "Excellent accompagnement pour notre migration vers le cloud. Je recommande vivement COTECH SERVICES.",
      rating: 5,
      color: "from-blue-600 to-blue-800"
    }
  ];

  // Avantages des services
  const avantages = [
    {
      icon: TrendingUp,
      title: "Expertise technique",
      description: "Une équipe qualifiée et expérimentée"
    },
    {
      icon: Clock,
      title: "Support réactif",
      description: "Assistance rapide 24/7"
    },
    {
      icon: Shield,
      title: "Sécurité garantie",
      description: "Protection de vos données"
    },
    {
      icon: Award,
      title: "Qualité certifiée",
      description: "Solutions durables et fiables"
    }
  ];

  // Changement automatique des témoignages toutes les 6 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Navigation manuelle
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/images/slide/slide1.png"
          alt="Nos services COTECH SERVICES"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Services IT complets
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Des solutions technologiques complètes pour votre entreprise
            COTECH SERVICES vous accompagne dans tous vos projets technologiques,
            de la conception à la maintenance, avec des solutions innovantes et
            adaptées au contexte africain.
          </p>
        </div>
      </section>

      {/* Liste des services en grille 3 par ligne */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              
              return (
                <div 
                  key={service.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {service.subtitle}
                    </div>
                  </div>
                  
                  {/* Contenu */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-blue-100 text-blue-900 w-12 h-12 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-blue-900 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href={`/contact?service=${service.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition text-sm w-full justify-center"
                    >
                      Demander un devis <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pourquoi nos services */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Pourquoi nos services ?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Des avantages qui font la différence
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {avantages.map((avantage, index) => {
              const Icon = avantage.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{avantage.title}</h3>
                  <p className="text-blue-100">{avantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies utilisées */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Technologies & Outils
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous utilisons les technologies les plus récentes pour garantir des solutions performantes
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React/Next.js", icon: "⚛️" },
              { name: "Node.js", icon: "🟢" },
              { name: "Python", icon: "🐍" },
              { name: "PHP", icon: "🐘" },
              { name: "Odoo", icon: "🧿" },
              { name: "Laravel", icon: "⚡" },
              { name: "Arduino", icon: "🚦" },
              { name: "ESP32", icon: "📡" },
              { name: "Linux", icon: "🐧" },
              { name: "Windows Server", icon: "🪟" },
              { name: "Cisco", icon: "🌐" },
              { name: "MySQL", icon: "🗄️" },
              { name: "MongoDB", icon: "🍃" },
              { name: "Firebase", icon: "🔥" },
              { name: "Hostinger", icon: "☁️" },
              { name: "Docker", icon: "🐳" },
              { name: "Git", icon: "📦" },
              { name: "Jenkins", icon: "🤖" }
            ].map((tech, index) => (
              <div key={index} className="text-center p-4 border rounded-lg hover:shadow-md transition hover:border-blue-300 group">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</div>
                <div className="text-sm font-medium text-gray-700 group-hover:text-blue-900">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus de travail */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Notre processus de travail
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une méthodologie rigoureuse pour garantir la qualité de nos prestations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Analyse", description: "Étude et cahier des charges" },
              { step: "2", title: "Proposition", description: "Devis détaillé et planning" },
              { step: "3", title: "Réalisation", description: "Développement et tests qualité" },
              { step: "4", title: "Livraison & Support", description: "Déploiement et assistance" }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-gray-400">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages en Slider avec avatars colorés */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ils nous ont fait confiance et témoignent
            </p>
          </div>

          <div className="relative">
            {/* Boutons de navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-blue-900 hover:text-white transition"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-blue-900 hover:text-white transition"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Contenu du témoignage */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-500">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Avatar avec initiales et couleur personnalisée */}
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${testimonials[currentTestimonial].color} flex items-center justify-center border-4 border-blue-900 shadow-lg`}>
                    <span className="text-white font-bold text-3xl">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Texte à droite */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 mb-3">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="relative">
                    <svg className="absolute -top-2 -left-2 w-6 h-6 text-gray-200 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8h-2zM24 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8h-2z"/>
                    </svg>
                    <p className="text-gray-700 text-base md:text-lg italic pl-6">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                  </div>

                  <div className="mt-4">
                    <div className="w-12 h-0.5 bg-blue-900 mx-auto md:mx-0 mb-3"></div>
                    <p className="font-bold text-blue-900">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonials[currentTestimonial].position}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Indicateurs */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all h-2 rounded-full ${
                    index === currentTestimonial
                      ? "w-8 bg-blue-900"
                      : "w-2 bg-gray-300 hover:bg-blue-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}