"use client";
import Image from "next/image";
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
  Award
} from "lucide-react";

export default function Services() {
  // Services principaux selon le document
  const services = [
    {
      id: "web",
      icon: Code2,
      title: "Développement Web & Applications",
      subtitle: "Solutions numériques sur mesure",
      description: "Création de sites web professionnels et applications de gestion adaptés à vos besoins.",
      features: [
        "Sites web vitrine, e-commerce et institutionnels",
        "Applications web de gestion sur mesure",
        "Intégration de solutions de paiement en ligne (Mobile Money, carte bancaire)",
        "Maintenance et optimisation de plateformes numériques"
      ],
      image: "/images/services/web-dev.jpg",
      color: "blue"
    },
    {
      id: "reseau",
      icon: Wifi,
      title: "Réseaux & Sécurité Informatique",
      subtitle: "Infrastructures sécurisées et performantes",
      description: "Installation et configuration de réseaux informatiques pour une connectivité optimale.",
      features: [
        "Installation de réseaux (câblage structuré, sans fil)",
        "Solutions Wi-Fi professionnelles (couverture optimale)",
        "Configuration de routeurs, Firewall, Switch, VPN",
        "Installation de systèmes de vidéosurveillance",
        "Sécurisation des infrastructures numériques"
      ],
      image: "/images/services/network.jpg",
      color: "green"
    },
    {
      id: "iot",
      icon: Cpu,
      title: "Solutions IoT & Systèmes Intelligents",
      subtitle: "Technologies innovantes pour un monde connecté",
      description: "Conception de systèmes automatisés intelligents pour la domotique et l'industrie.",
      features: [
        "Systèmes automatisés intelligents (domotique, automatismes)",
        "Systèmes d'irrigation connectés (gestion à distance)",
        "Solutions de surveillance intelligente",
        "Prototypage électronique (Arduino, ESP32)",
        "Intégration GSM et systèmes connectés"
      ],
      image: "/images/services/iot.jpg",
      color: "purple"
    },
    {
      id: "maintenance",
      icon: Wrench,
      title: "Maintenance Informatique",
      subtitle: "Assistance technique complète",
      description: "Maintenance préventive et corrective pour vos équipements informatiques.",
      features: [
        "Maintenance préventive et corrective",
        "Réparation d'ordinateurs, imprimantes et périphériques",
        "Installation et configuration de systèmes d'exploitation",
        "Suppression de virus et sécurisation",
        "Optimisation des performances"
      ],
      image: "/images/services/maintenance.jpg",
      color: "orange"
    },
    {
      id: "vente",
      icon: ShoppingCart,
      title: "Vente d'Équipements",
      subtitle: "Matériel informatique de qualité",
      description: "Fourniture d'équipements informatiques et électroniques adaptés à vos besoins.",
      features: [
        "Vente de matériel informatique (ordinateurs, serveurs)",
        "Fourniture d'accessoires et composants électroniques",
        "Conseil et accompagnement personnalisé",
        "Vente sur devis",
        "Catalogue en ligne disponible"
      ],
      image: "/images/services/sales.jpg",
      color: "red"
    },
    {
      id: "gps",
      icon: MapPin,
      title: "Systèmes GPS & Suivi Flotte",
      subtitle: "Géolocalisation en temps réel",
      description: "Installation de dispositifs GPS pour le suivi de véhicules et de flottes.",
      features: [
        "Installation de dispositifs GPS pour véhicules",
        "Configuration des plateformes de suivi en temps réel",
        "Assistance technique et maintenance",
        "Rapports de géolocalisation",
        "Alertes personnalisées"
      ],
      image: "/images/services/gps.jpg",
      color: "teal"
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

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; hover: string; light: string }> = {
      blue: { bg: "bg-blue-900", hover: "hover:bg-blue-800", light: "bg-blue-100 text-blue-900" },
      green: { bg: "bg-green-900", hover: "hover:bg-green-800", light: "bg-green-100 text-green-900" },
      purple: { bg: "bg-purple-900", hover: "hover:bg-purple-800", light: "bg-purple-100 text-purple-900" },
      orange: { bg: "bg-orange-900", hover: "hover:bg-orange-800", light: "bg-orange-100 text-orange-900" },
      red: { bg: "bg-red-900", hover: "hover:bg-red-800", light: "bg-red-100 text-red-900" },
      teal: { bg: "bg-teal-900", hover: "hover:bg-teal-800", light: "bg-teal-100 text-teal-900" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center text-center">
        <Image
          src="/images/services-banner.jpg"
          alt="Nos services COTECH SERVICES"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Nos Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Des solutions technologiques complètes pour votre entreprise
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
            Des services IT complets et adaptés
          </h2>
          <p className="text-gray-600 text-lg">
            COTECH SERVICES vous accompagne dans tous vos projets technologiques,
            de la conception à la maintenance, avec des solutions innovantes et
            adaptées au contexte africain.
          </p>
        </div>
      </section>

      {/* Liste des services détaillés */}
      {services.map((service, index) => {
        const Icon = service.icon;
        const colors = getColorClasses(service.color);
        const isEven = index % 2 === 0;
        
        return (
          <section 
            key={service.id}
            className={`py-16 ${isEven ? "bg-white" : "bg-gray-50"}`}
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? "" : "md:flex-row-reverse"}`}>
                {/* Texte */}
                <div>
                  <div className={`${colors.light} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h2>
                  <p className="text-xl text-blue-900 font-semibold mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className={`h-5 w-5 ${colors.light.split(" ")[0]} ${colors.light.split(" ")[1]} mt-0.5 flex-shrink-0`} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`/contact?service=${service.id}`}
                    className={`inline-flex items-center gap-2 px-6 py-3 ${colors.bg} text-white rounded-lg ${colors.hover} transition`}
                  >
                    Demander un devis <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Image */}
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

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
              { name: "Arduino", icon: "🔌" },
              { name: "ESP32", icon: "📡" },
              { name: "Linux", icon: "🐧" },
              { name: "Windows Server", icon: "🪟" },
              { name: "Cisco", icon: "🌐" },
              { name: "MySQL", icon: "🗄️" },
              { name: "MongoDB", icon: "🍃" },
              { name: "Firebase", icon: "🔥" },
              { name: "AWS", icon: "☁️" }
            ].map((tech, index) => (
              <div key={index} className="text-center p-4 border rounded-lg hover:shadow-md transition">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="text-sm font-medium text-gray-700">{tech.name}</div>
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
              { step: "1", title: "Analyse", description: "Étude de vos besoins et cahier des charges" },
              { step: "2", title: "Proposition", description: "Devis détaillé et planning" },
              { step: "3", title: "Réalisation", description: "Développement et tests qualité" },
              { step: "4", title: "Livraison & Support", description: "Déploiement et assistance continue" }
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

      {/* Témoignages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ils nous ont fait confiance et témoignent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Mamadou Diallo",
                position: "CEO, Entreprise X",
                text: "COTECH SERVICES a réalisé un excellent travail sur notre infrastructure réseau. Professionnalisme et réactivité au rendez-vous."
              },
              {
                name: "Aissatou Barry",
                position: "Directrice, ONG Y",
                text: "Le système GPS installé par COTECH nous permet désormais de suivre efficacement nos véhicules. Un service de qualité !"
              },
              {
                name: "Ibrahima Camara",
                position: "Gérant, Commerce Z",
                text: "Notre site e-commerce est parfaitement fonctionnel. L'équipe est très à l'écoute et compétente."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
                <div className="text-yellow-400 text-xl mb-3">★★★★★</div>
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <div className="border-t pt-3">
                  <p className="font-semibold text-blue-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Besoin d'une solution sur mesure ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour un devis gratuit et personnalisé
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Demander un devis
            </a>
            <a
              href="/formations"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Voir les formations
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}