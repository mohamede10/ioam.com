"use client";
import Image from "next/image";
import { useState } from "react";
import TestimonialsSection from "@/components/TestimonialsSection";
import { 
  Code2, 
  Wifi, 
  Cpu, 
  Wrench, 
  ShoppingCart, 
  MapPin,
  Calendar,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Filter,
  X,
  ExternalLink,
  Github
} from "lucide-react";

export default function Projets() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  // Types de projets
  const categories = [
    { id: "all", name: "Tous", icon: Filter },
    { id: "web", name: "Développement Web", icon: Code2 },
    { id: "reseau", name: "Réseaux & Sécurité", icon: Wifi },
    { id: "iot", name: "Solutions IoT", icon: Cpu },
    { id: "maintenance", name: "Maintenance", icon: Wrench },
    { id: "gps", name: "Systèmes GPS", icon: MapPin }
  ];

  // Liste des projets
  const projects: ProjectType[] = [
    {
      id: 1,
      title: "Plateforme E-commerce pour Commerce Local",
      category: "web",
      client: "Djoma Market",
      description: "Développement d'une plateforme e-commerce complète avec paiement Mobile Money intégré.",
      fullDescription: "Nous avons développé une solution e-commerce sur mesure pour Djoma Market, permettant la vente en ligne de produits alimentaires et ménagers. La plateforme intègre le paiement par Mobile Money, un système de livraison en temps réel et un tableau de bord administrateur complet.",
      image: "/images/projets/ecommerce.jpg",
      date: "Janvier 2026",
      technologies: ["Next.js", "Node.js", "MongoDB", "Mobile Money API"],
      features: [
        "Paiement Mobile Money intégré",
        "Suivi des commandes en temps réel",
        "Dashboard administrateur",
        "Gestion des stocks automatisée"
      ],
      results: "+45% de ventes en 3 mois",
      link: "#"
    },
    {
      id: 2,
      title: "Infrastructure Réseau Entreprise",
      category: "reseau",
      client: "Guinea Logistics",
      description: "Installation d'un réseau sécurisé pour une entreprise de logistique avec vidéosurveillance.",
      fullDescription: "Mise en place d'une infrastructure réseau complète pour Guinea Logistics, incluant le câblage structuré, la configuration de serveurs, la mise en place d'un VPN sécurisé et l'installation de caméras de surveillance IP sur 3 sites.",
      image: "/images/projets/reseau.jpg",
      date: "Décembre 2025",
      technologies: ["Cisco", "Firewall", "VPN", "Vidéosurveillance IP"],
      features: [
        "Réseau sécurisé sur 3 sites",
        "VPN pour accès distant",
        "Système de vidéosurveillance 24/7",
        "Sauvegarde automatisée"
      ],
      results: "100% de disponibilité réseau",
      link: "#"
    },
    {
      id: 3,
      title: "Système d'Irrigation Connecté",
      category: "iot",
      client: "AgriTech Guinée",
      description: "Solution IoT pour l'irrigation automatisée des cultures avec capteurs d'humidité.",
      fullDescription: "Conception et déploiement d'un système d'irrigation intelligent utilisant des capteurs d'humidité ESP32. Le système permet une gestion à distance via application mobile et des alertes SMS en cas de problème. Économie d'eau réalisée : 40%.",
      image: "/images/projets/irrigation.jpg",
      date: "Octobre 2025",
      technologies: ["ESP32", "Arduino", "MQTT", "React Native"],
      features: [
        "Capteurs d'humidité connectés",
        "Contrôle à distance via mobile",
        "Alertes SMS automatiques",
        "Programmation automatique"
      ],
      results: "40% d'économie d'eau",
      link: "#"
    },
    {
      id: 4,
      title: "Maintenance IT Préventive",
      category: "maintenance",
      client: "Cabinet Conseil ABC",
      description: "Contrat de maintenance pour 50 postes de travail avec support 24/7.",
      fullDescription: "Mise en place d'un contrat de maintenance préventive et corrective pour le cabinet Conseil ABC. Intervention rapide, monitoring des équipements, mise à jour logicielle et support utilisateur. Taux de satisfaction client : 98%.",
      image: "/images/projets/maintenance.jpg",
      date: "Septembre 2025",
      technologies: ["Windows Server", "Linux", "GLPI", "Active Directory"],
      features: [
        "Monitoring 24/7",
        "Intervention sous 2h",
        "Mises à jour automatiques",
        "Support utilisateur dédié"
      ],
      results: "98% de satisfaction client",
      link: "#"
    },
    {
      id: 5,
      title: "Suivi Flotte Véhicules GPS",
      category: "gps",
      client: "Transport Express",
      description: "Installation de 30 GPS pour une flotte de véhicules avec plateforme de suivi.",
      fullDescription: "Déploiement d'une solution complète de géolocalisation pour 30 véhicules de transport. Installation des dispositifs GPS, configuration de la plateforme de suivi en temps réel, formation des chauffeurs et rapports personnalisés pour la direction.",
      image: "/images/projets/gps.jpg",
      date: "Août 2025",
      technologies: ["GPS Tracking", "4G", "Plateforme web", "Rapports automatisés"],
      features: [
        "Géolocalisation temps réel",
        "Alertes géofencing",
        "Rapports de consommation",
        "Historique des trajets"
      ],
      results: "25% de réduction des coûts carburant",
      link: "#"
    },
    {
      id: 6,
      title: "Application de Gestion Scolaire",
      category: "web",
      client: "Institut Supérieur de Conakry",
      description: "Application web pour la gestion des notes, absences et paiements.",
      fullDescription: "Développement d'une solution complète de gestion scolaire permettant le suivi des étudiants, la gestion des notes, des absences, des paiements et l'envoi de notifications aux parents. Interface intuitive pour enseignants, étudiants et parents.",
      image: "/images/projets/scolaire.jpg",
      date: "Juin 2025",
      technologies: ["React", "Laravel", "MySQL", "TailwindCSS"],
      features: [
        "Gestion des notes et bulletins",
        "Suivi des absences",
        "Paiement en ligne des frais",
        "Notifications push"
      ],
      results: "+2000 étudiants gérés",
      link: "#"
    },
    {
      id: 7,
      title: "Domotique pour Résidence",
      category: "iot",
      client: "Résidence Belle Vue",
      description: "Installation d'un système domotique complet pour 15 appartements.",
      fullDescription: "Déploiement d'une solution domotique sur mesure pour une résidence de luxe. Contrôle de l'éclairage, des volets, de la climatisation et de la sécurité via une application centralisée. Système extensible et évolutif.",
      image: "/images/projets/domotique.jpg",
      date: "Avril 2025",
      technologies: ["KNX", "ESP8266", "MQTT", "React"],
      features: [
        "Contrôle éclairage et volets",
        "Gestion climatisation",
        "Système d'alarme connecté",
        "Application mobile"
      ],
      results: "30% d'économies d'énergie",
      link: "#"
    },
    {
      id: 8,
      title: "Vidéo protection pour Magasins",
      category: "reseau",
      client: "Super Marché du Nord",
      description: "Installation de 25 caméras IP avec accès distant et IA.",
      fullDescription: "Mise en place d'un système de vidéosurveillance moderne pour un supermarché. 25 caméras IP haute définition, enregistrement 24/7, accès distant via mobile, et détection d'événements par IA (détection de mouvements suspects, comptage de personnes).",
      image: "/images/projets/videosurveillance.jpg",
      date: "Mars 2025",
      technologies: ["Hikvision", "IA", "Cloud", "Mobile App"],
      features: [
        "25 caméras IP HD",
        "Accès distant sécurisé",
        "Détection IA",
        "Stockage 30 jours"
      ],
      results: "Réduction des vols de 60%",
      link: "#"
    },
    {
      id: 9,
      title: "Solution de Télémédecine",
      category: "web",
      client: "Centre Médical Espoir",
      description: "Plateforme de consultation médicale à distance avec prise de rendez-vous en ligne.",
      fullDescription: "Développement d'une solution complète de télémédecine permettant aux patients de consulter des médecins à distance. La plateforme inclut la prise de rendez-vous en ligne, la visioconférence sécurisée, le partage de documents médicaux, et un système de prescription électronique. Intégration avec les systèmes de gestion des cabinets médicaux existants.",
      image: "/images/projets/telemedecine.jpg",
      date: "Février 2026",
      technologies: ["Next.js", "WebRTC", "Node.js", "PostgreSQL", "Agora.io"],
      features: [
        "Visioconférence HD sécurisée",
        "Prise de rendez-vous en ligne",
        "Partage de documents médicaux",
        "Prescription électronique",
        "Paiement en ligne intégré",
        "Historique des consultations"
      ],
      results: "+2000 consultations à distance",
      link: "#"
    }
  ];

  // Filtrer les projets
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Composant Modal pour les détails
  const ProjectModal = ({ project, onClose }: { project: ProjectType | null, onClose: () => void }) => {
    if (!project) return null;

    const CategoryIcon = categories.find(c => c.id === project.category)?.icon || Code2;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={onClose}>
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
          <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
            <h3 className="text-2xl font-bold text-blue-900">{project.title}</h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="p-6">
            <div className="relative h-64 rounded-lg overflow-hidden mb-6">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 mb-4">{project.fullDescription}</p>
                
                <h4 className="font-semibold text-blue-900 mb-2">Caractéristiques :</h4>
                <ul className="space-y-2 mb-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-blue-900 mb-3">Informations :</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Client :</span>
                      <span>{project.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Date :</span>
                      <span>{project.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Technologies :</span>
                      <span>{project.technologies.join(", ")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Résultats :</span>
                      <span className="text-green-600 font-semibold">{project.results}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a href={project.link} className="flex-1 text-center px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition">
                    Voir le projet
                  </a>
                  <a href="/contact" className="flex-1 text-center px-4 py-2 border border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50 transition">
                    Demander un devis
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/images/projets/africathinking.jpg"
          alt="Nos projets COTECH SERVICES"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Nos Réalisations
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Découvrez nos projets et succès auprès de nos clients
          </p>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900">+50</div>
              <div className="text-gray-600">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900">+100</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900">98%</div>
              <div className="text-gray-600">Taux de satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900">24/7</div>
              <div className="text-gray-600">Support technique</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                    isActive
                      ? "bg-blue-900 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grille des projets */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Aucun projet dans cette catégorie</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => {
                const CategoryIcon = categories.find(c => c.id === project.category)?.icon || Code2;
                return (
                  <div
                    key={project.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-blue-900 text-white px-2 py-1 rounded text-xs">
                        {categories.find(c => c.id === project.category)?.name}
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <CategoryIcon className="h-4 w-4 text-blue-900" />
                        <span className="text-xs text-gray-500">{project.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-3 text-sm">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Users className="h-3 w-3" />
                          <span>{project.client}</span>
                        </div>
                        <div className="text-green-600 font-semibold text-sm">
                          {project.results}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
     {/* Section Témoignages */}
        <TestimonialsSection />

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Vous avez un projet similaire ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour discuter de votre projet et obtenir un devis gratuit
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Demander un devis
            </a>
            <a
              href="/services"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </main>
  );
}

// Type pour les projets
interface ProjectType {
  id: number;
  title: string;
  category: string;
  client: string;
  description: string;
  fullDescription: string;
  image: string;
  date: string;
  technologies: string[];
  features: string[];
  results: string;
  link: string;
}