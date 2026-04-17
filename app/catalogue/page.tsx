"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { 
  Code2, 
  Wifi, 
  Cpu, 
  Wrench, 
  ShoppingCart, 
  MapPin,
  CheckCircle,
  ArrowRight,
  Shield,
  Cloud,
  TrendingUp,
  Clock,
  Award,
  Users,
  Download,
  FileText,
  Mail,
  Phone,
  Loader2,
  Palette,
  Layout,
  Car
} from "lucide-react";

export default function Catalogue() {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const catalogueRef = useRef<HTMLDivElement>(null);

  // Services COTECH SERVICES - TOUS LES 12 SERVICES
  const services = [
    {
      id: "web",
      icon: Code2,
      title: "Développement Web & Applications",
      subtitle: "Solutions numériques sur mesure",
      description: "Création de sites web professionnels et applications de gestion adaptés à vos besoins.",
      fullDescription: "Nous concevons des sites web et applications qui allient esthétique, performance et simplicité d'utilisation. Que vous ayez besoin d'un site vitrine, d'une boutique e-commerce ou d'une application métier sur mesure, notre équipe vous accompagne de la conception à la maintenance.",
      features: [
        "Sites web vitrine, e-commerce et institutionnels",
        "Applications web de gestion sur mesure",
        "Intégration de solutions de paiement en ligne (Mobile Money, carte bancaire)",
        "Maintenance et optimisation de plateformes numériques",
        "Design responsive et adapté à tous les écrans",
        "Optimisation SEO pour un meilleur référencement"
      ],
      benefits: [
        "Visibilité accrue sur internet",
        "Automatisation des processus",
        "Augmentation des ventes en ligne",
        "Présence professionnelle 24/7"
      ],
      price: "Sur devis",
      duration: "2 à 8 semaines",
      image: "/images/services/web-dev.jpg",
      color: "blue"
    },
    {
      id: "reseau",
      icon: Wifi,
      title: "Réseaux & Sécurité Informatique",
      subtitle: "Infrastructures sécurisées",
      description: "Installation et configuration de réseaux informatiques pour une connectivité optimale.",
      fullDescription: "Nous installons et configurons des réseaux informatiques sécurisés pour garantir la continuité de vos activités. Notre équipe d'experts vous accompagne de l'audit à la maintenance.",
      features: [
        "Installation de réseaux (câblage structuré, sans fil)",
        "Solutions Wi-Fi professionnelles (couverture optimale)",
        "Configuration de routeurs, Firewall, VPN",
        "Installation de systèmes de vidéosurveillance",
        "Sécurisation des infrastructures numériques",
        "Audit et diagnostic de sécurité"
      ],
      benefits: [
        "Protection contre les cybermenaces",
        "Connectivité fiable et rapide",
        "Sécurité des données sensibles",
        "Tranquillité d'esprit"
      ],
      price: "Sur devis",
      duration: "1 à 4 semaines",
      image: "/images/services/network.jpg",
      color: "green"
    },
    {
      id: "iot",
      icon: Cpu,
      title: "Solutions IoT & Systèmes Intelligents",
      subtitle: "Systèmes intelligents",
      description: "Conception de systèmes automatisés intelligents pour la domotique et l'industrie.",
      fullDescription: "Nous concevons des solutions IoT innovantes qui rendent votre environnement plus intelligent et connecté. De la domotique à l'industrie 4.0, nous créons des objets connectés sur mesure.",
      features: [
        "Systèmes automatisés intelligents (domotique, automatismes)",
        "Systèmes d'irrigation connectés (gestion à distance)",
        "Solutions de surveillance intelligente",
        "Prototypage électronique (Arduino, ESP32)",
        "Intégration GSM et systèmes connectés",
        "Capteurs et actionneurs sur mesure"
      ],
      benefits: [
        "Économies d'énergie jusqu'à 40%",
        "Confort et praticité au quotidien",
        "Contrôle à distance via mobile",
        "Automatisation des tâches répétitives"
      ],
      price: "Sur devis",
      duration: "2 à 6 semaines",
      image: "/images/services/iot.jpg",
      color: "purple"
    },
    {
      id: "maintenance",
      icon: Wrench,
      title: "Maintenance Soft & Hard",
      subtitle: "Assistance technique",
      description: "Maintenance préventive et corrective pour vos équipements informatiques.",
      fullDescription: "Nous prenons soin de votre parc informatique pour que vous puissiez vous concentrer sur votre cœur de métier. Interventions rapides, à distance ou sur site.",
      features: [
        "Maintenance préventive et corrective",
        "Réparation d'ordinateurs et imprimantes",
        "Installation de systèmes d'exploitation",
        "Optimisation des performances",
        "Suppression de virus et malwares",
        "Support technique à distance et sur site"
      ],
      benefits: [
        "Intervention sous 24h",
        "Tarifs préférentiels pour contrats",
        "Disponibilité 7j/7",
        "Équipe de techniciens certifiés"
      ],
      price: "À partir de 50 000 GNF",
      duration: "Intervention rapide",
      image: "/images/services/maintenance.jpg",
      color: "orange"
    },
    {
      id: "vente",
      icon: ShoppingCart,
      title: "Vente d'Équipements",
      subtitle: "Matériel de qualité",
      description: "Fourniture d'équipements informatiques et électroniques adaptés à vos besoins.",
      fullDescription: "Nous vous proposons une large gamme d'équipements informatiques des plus grandes marques, avec livraison rapide et installation possible.",
      features: [
        "Vente de matériel informatique (ordinateurs, serveurs)",
        "Fourniture d'accessoires électroniques",
        "Conseil et accompagnement personnalisé",
        "Vente sur devis",
        "Catalogue en ligne disponible",
        "Installation et configuration incluses"
      ],
      benefits: [
        "Prix compétitifs",
        "Garantie 1 an minimum",
        "Livraison à Conakry",
        "Conseils d'experts"
      ],
      price: "Variable selon produit",
      duration: "Livraison sous 48h",
      image: "/images/services/sales.jpg",
      color: "red"
    },
    {
      id: "gps",
      icon: MapPin,
      title: "Systèmes GPS",
      subtitle: "Suivi de flotte et colis",
      description: "Installation de dispositifs GPS pour le suivi de véhicules et de flottes.",
      fullDescription: "Nous installons des solutions GPS professionnelles pour suivre vos véhicules en temps réel, optimiser vos trajets et réduire vos coûts.",
      features: [
        "Installation de dispositifs GPS",
        "Configuration des plateformes de suivi",
        "Assistance technique",
        "Alertes personnalisées (géofencing, vitesse)",
        "Rapports de consommation et d'activité",
        "Historique des trajets"
      ],
      benefits: [
        "Réduction des coûts carburant jusqu'à 25%",
        "Sécurité des véhicules renforcée",
        "Optimisation des tournées",
        "Productivité accrue"
      ],
      price: "Sur devis",
      duration: "Installation en 1 jour",
      image: "/images/services/gps.jpg",
      color: "teal"
    },
    {
      id: "infographie",
      icon: Palette,
      title: "Infographie & Design",
      subtitle: "Création visuelle",
      description: "Conception de supports visuels professionnels pour votre communication.",
      fullDescription: "Nous créons des designs percutants qui renforcent votre image de marque et captent l'attention de votre audience.",
      features: [
        "Création de logos et chartes graphiques",
        "Design d'affiches et flyers",
        "Montage vidéo et motion design",
        "Retouche photo et illustrations",
        "Design de supports print et web",
        "Identité visuelle complète"
      ],
      benefits: [
        "Image de marque professionnelle",
        "Visibilité accrue",
        "Communication cohérente",
        "Designs uniques et originaux"
      ],
      price: "Sur devis",
      duration: "1 à 3 semaines",
      image: "/images/services/infographie.jpg",
      color: "pink"
    },
    {
      id: "odoo",
      icon: Layout,
      title: "Gestion ERP Odoo",
      subtitle: "ERP sur mesure",
      description: "Installation, configuration et personnalisation d'Odoo pour votre entreprise.",
      fullDescription: "Nous installons et personnalisons Odoo, l'ERP open-source le plus complet du marché, pour optimiser la gestion de votre entreprise.",
      features: [
        "Installation et déploiement Odoo",
        "Personnalisation des modules",
        "Formation utilisateurs",
        "Maintenance et support",
        "Migration de données",
        "Intégrations API"
      ],
      benefits: [
        "Gestion centralisée de l'entreprise",
        "Processus optimisés",
        "Gain de temps et d'efficacité",
        "Solution évolutive"
      ],
      price: "Sur devis",
      duration: "2 à 8 semaines",
      image: "/images/services/odoo.jpg",
      color: "indigo"
    },
    {
      id: "automobile",
      icon: Car,
      title: "Solutions Automobile",
      subtitle: "Informatique embarquée",
      description: "Services informatiques spécialisés pour l'industrie automobile.",
      fullDescription: "Nous proposons des services informatiques spécialisés pour les véhicules modernes, du diagnostic à l'installation d'équipements connectés.",
      features: [
        "Diagnostic électronique automobile",
        "Programmation calculateurs",
        "Installation systèmes embarqués",
        "Maintenance équipements",
        "Reprogrammation moteur",
        "Installation d'autoradios connectés"
      ],
      benefits: [
        "Diagnostic précis et rapide",
        "Réparation par des experts",
        "Équipements de qualité",
        "Intervention mobile possible"
      ],
      price: "Sur devis",
      duration: "1 à 3 jours",
      image: "/images/services/automobile.jpg",
      color: "yellow"
    },
    {
      id: "formation",
      icon: Users,
      title: "Formation IT",
      subtitle: "Montée en compétences",
      description: "Formations professionnelles en informatique pour particuliers et entreprises.",
      fullDescription: "Nous proposons des formations professionnelles en informatique adaptées à tous les niveaux, pour vous aider à acquérir les compétences recherchées.",
      features: [
        "Initiation à l'informatique",
        "Développement web (HTML/CSS, JS, PHP)",
        "Réseaux et sécurité informatique",
        "Électronique et IoT (Arduino, ESP32)",
        "Bureautique avancée",
        "Certification possible"
      ],
      benefits: [
        "Formateurs expérimentés",
        "Pédagogie pratique (70% TP)",
        "Certification offerte",
        "Horaires flexibles"
      ],
      price: "À partir de 350 000 GNF",
      duration: "40 à 120 heures",
      image: "/images/services/formation.jpg",
      color: "cyan"
    },
    {
      id: "conseil",
      icon: TrendingUp,
      title: "Conseil & Audit IT",
      subtitle: "Expertise stratégique",
      description: "Accompagnement stratégique pour optimiser votre système d'information.",
      fullDescription: "Nous vous conseillons pour optimiser votre système d'information et votre sécurité, de l'audit à la mise en œuvre.",
      features: [
        "Audit de sécurité informatique",
        "Consultance en transformation digitale",
        "Architecture des systèmes d'information",
        "Stratégie cloud et infrastructure",
        "Gouvernance IT",
        "Conformité RGPD"
      ],
      benefits: [
        "Vision stratégique",
        "Recommandations adaptées",
        "Accompagnement personnalisé",
        "Réduction des risques"
      ],
      price: "Sur devis",
      duration: "1 à 4 semaines",
      image: "/images/services/conseil.jpg",
      color: "emerald"
    },
    {
      id: "cloud",
      icon: Cloud,
      title: "Cloud & Hébergement",
      subtitle: "Solutions cloud",
      description: "Services d'hébergement et solutions cloud pour votre entreprise.",
      fullDescription: "Nous proposons des solutions cloud adaptées à vos besoins et à votre budget, de l'hébergement web à la migration complète vers le cloud.",
      features: [
        "Hébergement de sites web",
        "Solutions de stockage cloud",
        "Migration vers le cloud",
        "Sauvegarde automatisée",
        "Serveurs dédiés et VPS",
        "Sécurité et monitoring"
      ],
      benefits: [
        "Disponibilité 99.9%",
        "Sécurité des données",
        "Accès depuis n'importe où",
        "Coûts maîtrisés"
      ],
      price: "À partir de 30 000 GNF/mois",
      duration: "Mise en place rapide",
      image: "/images/services/cloud.jpg",
      color: "sky"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; hover: string; light: string }> = {
      blue: { bg: "bg-blue-900", hover: "hover:bg-blue-800", light: "bg-blue-100 text-blue-900" },
      green: { bg: "bg-green-900", hover: "hover:bg-green-800", light: "bg-green-100 text-green-900" },
      purple: { bg: "bg-purple-900", hover: "hover:bg-purple-800", light: "bg-purple-100 text-purple-900" },
      orange: { bg: "bg-orange-900", hover: "hover:bg-orange-800", light: "bg-orange-100 text-orange-900" },
      red: { bg: "bg-red-900", hover: "hover:bg-red-800", light: "bg-red-100 text-red-900" },
      teal: { bg: "bg-teal-900", hover: "hover:bg-teal-800", light: "bg-teal-100 text-teal-900" },
      pink: { bg: "bg-pink-900", hover: "hover:bg-pink-800", light: "bg-pink-100 text-pink-900" },
      indigo: { bg: "bg-indigo-900", hover: "hover:bg-indigo-800", light: "bg-indigo-100 text-indigo-900" },
      yellow: { bg: "bg-yellow-800", hover: "hover:bg-yellow-700", light: "bg-yellow-100 text-yellow-800" },
      cyan: { bg: "bg-cyan-900", hover: "hover:bg-cyan-800", light: "bg-cyan-100 text-cyan-900" },
      emerald: { bg: "bg-emerald-900", hover: "hover:bg-emerald-800", light: "bg-emerald-100 text-emerald-900" },
      sky: { bg: "bg-sky-900", hover: "hover:bg-sky-800", light: "bg-sky-100 text-sky-900" }
    };
    return colors[color] || colors.blue;
  };

  const generatePDF = async () => {
    if (!catalogueRef.current) return;
    
    setIsGeneratingPDF(true);
    
    try {
      const element = catalogueRef.current;
      
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: "#ffffff",
        logging: false,
        useCORS: true,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      });
      
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      
      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();
      
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pdf.internal.pageSize.getHeight();
      }
      
      pdf.save("catalogue-cotech-services.pdf");
    } catch (error) {
      console.error("Erreur lors de la génération du PDF:", error);
      alert("Une erreur est survenue lors de la génération du PDF. Veuillez réessayer.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center text-center">
        <Image
          src="/images/contactez-nous.png"
          alt="Catalogue COTECH SERVICES"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-4xl px-4">
          <div className="bg-blue-900/20 backdrop-blur-sm inline-block p-3 rounded-full mb-4">
            <FileText className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Catalogue des Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Découvrez l'ensemble de nos prestations et solutions technologiques
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <a
              href="/contact"
              className="px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Demander un devis
            </a>
            <button
              onClick={generatePDF}
              disabled={isGeneratingPDF}
              className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGeneratingPDF ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Génération...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  Télécharger le catalogue PDF
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-5 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            COTECH SERVICES - AFRICA THINKING
          </h2>
          <p className="text-gray-600 text-lg">
            Entreprise multiservices spécialisée dans les technologies de l'information, 
            les solutions numériques et les systèmes intelligents pour l'Afrique. <span className="font-bold text-blue-900">#AFRICA #TECHNOLOGY #INNOVATION</span>
          </p>
          <div className="mt-6 flex justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2 text-blue-900"><Shield className="h-4 w-4" /> Expertise garantie</span>
            <span className="flex items-center gap-2 text-blue-900"><Clock className="h-4 w-4" /> Support réactif</span>
            <span className="flex items-center gap-2 text-blue-900"><Award className="h-4 w-4" /> Qualité certifiée</span>
          </div>
        </div>
      </section>

      {/* Grille des services - TOUS LES 12 SERVICES */}
      <div id="catalogue-content" ref={catalogueRef}>
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                Nos Prestations
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Des solutions complètes adaptées à tous vos besoins
              </p>
            </div>

            <div className="space-y-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                const colors = getColorClasses(service.color);
                const isEven = index % 2 === 0;
                
                return (
                  <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition break-inside-avoid">
                    <div className={`grid md:grid-cols-3 ${isEven ? "" : "md:flex-row-reverse"}`}>
                      {/* Image */}
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div className={`absolute top-4 left-4 ${colors.bg} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                          {service.subtitle}
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className="md:col-span-2 p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`${colors.light} w-12 h-12 rounded-lg flex items-center justify-center`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                        </div>

                        <p className="text-gray-600 mb-4">{service.fullDescription}</p>

                        {/* Caractéristiques */}
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          <div>
                            <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                              <CheckCircle className="h-4 w-4" /> Prestations incluses
                            </h4>
                            <ul className="space-y-1">
                              {service.features.slice(0, 4).map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <span className="text-blue-900 mt-0.5">•</span>
                                  <span className="text-gray-600">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                              <TrendingUp className="h-4 w-4" /> Avantages
                            </h4>
                            <ul className="space-y-1">
                              {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <span className="text-green-600 mt-0.5">✓</span>
                                  <span className="text-gray-600">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Infos pratiques */}
                        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2">
                            <div className={`${colors.light} p-1 rounded`}>
                              <Clock className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Délai</p>
                              <p className="text-sm font-medium">{service.duration}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className={`${colors.light} p-1 rounded`}>
                              <Award className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Tarif</p>
                              <p className="text-sm font-medium">{service.price}</p>
                            </div>
                          </div>
                          <div className="flex-1 text-right">
                            <a
                              href={`/contact?service=${service.id}`}
                              className={`inline-flex items-center gap-2 px-4 py-2 ${colors.bg} text-white rounded-lg ${colors.hover} transition text-sm`}
                            >
                              Demander un devis <ArrowRight className="h-4 w-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tableau récapitulatif */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
              Récapitulatif des Services
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="p-3 text-left">Service</th>
                    <th className="p-3 text-left">Description</th>
                    <th className="p-3 text-left">Délai</th>
                    <th className="p-3 text-left">Tarif</th>
                    <th className="p-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr key={service.id} className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                      <td className="p-3 font-medium">{service.title}</td>
                      <td className="p-3 text-sm text-gray-600">{service.description}</td>
                      <td className="p-3 text-sm">{service.duration}</td>
                      <td className="p-3 text-sm font-semibold text-blue-900">{service.price}</td>
                      <td className="p-3 text-center">
                        <a href={`/contact?service=${service.id}`} className="text-blue-900 hover:text-blue-700">
                          Devis →
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Contact */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Besoin d'un renseignement ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour obtenir un devis personnalisé
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Nous contacter
            </Link>
            <a
              href="https://wa.me/224610093485"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              WhatsApp : +224 610 093 485
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}