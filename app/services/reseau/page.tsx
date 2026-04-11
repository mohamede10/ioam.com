"use client";
import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";
import Link from "next/link";
import { 
  Wifi, 
  Shield, 
  Server, 
  Network, 
  Lock, 
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Award,
  Video,
  Database,
  Cloud
} from "lucide-react";

export default function ServiceReseauDetail() {
  const services = [
    {
      title: "Installation Réseau",
      description: "Infrastructure réseau fiable et performante pour votre entreprise",
      icon: Network,
      features: ["Câblage structuré", "Réseau sans fil (Wi-Fi)", "Switch et routeurs", "Points d'accès professionnels"]
    },
    {
      title: "Sécurité Informatique",
      description: "Protégez vos données et vos systèmes contre les menaces",
      icon: Shield,
      features: ["Pare-feu (Firewall)", "Antivirus et anti-malware", "VPN sécurisé", "Contrôle d'accès"]
    },
    {
      title: "Vidéosurveillance",
      description: "Surveillez vos locaux à distance avec des caméras IP",
      icon: Video,
      features: ["Caméras IP haute définition", "Accès distant mobile", "Détection de mouvement", "Stockage cloud"]
    },
    {
      title: "Sauvegarde & Cloud",
      description: "Solutions de sauvegarde automatique et stockage cloud",
      icon: Cloud,
      features: ["Sauvegarde automatique", "Stockage sécurisé", "Restauration rapide", "Accès depuis n'importe où"]
    }
  ];

  const technologies = [
    { name: "Cisco", level: "Expert", color: "bg-blue-100 text-blue-800" },
    { name: "MikroTik", level: "Avancé", color: "bg-green-100 text-green-800" },
    { name: "Ubiquiti", level: "Expert", color: "bg-purple-100 text-purple-800" },
    { name: "Fortinet", level: "Avancé", color: "bg-red-100 text-red-800" },
    { name: "Hikvision", level: "Expert", color: "bg-cyan-100 text-cyan-800" },
    { name: "Dahua", level: "Avancé", color: "bg-orange-100 text-orange-800" }
  ];

  const etapes = [
    { 
      num: "1", 
      title: "Audit", 
      description: "Analyse de votre infrastructure existante",
      icon: Users
    },
    { 
      num: "2", 
      title: "Conception", 
      description: "Architecture réseau sur mesure",
      icon: Globe
    },
    { 
      num: "3", 
      title: "Installation", 
      description: "Déploiement et configuration",
      icon: Server
    },
    { 
      num: "4", 
      title: "Maintenance", 
      description: "Support et surveillance continue",
      icon: Zap
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/images/services/reseau/reseau_cotech.png"
          alt="Réseaux & Sécurité"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <div className="bg-blue-900/20 backdrop-blur-sm inline-block p-3 rounded-full mb-4">
            <Wifi className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Réseaux & Sécurité Informatique
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Des infrastructures réseaux sécurisées et performantes pour votre entreprise
          </p>
        </div>
      </section>

      {/* Description principale */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Sécurisez votre infrastructure IT
              </h2>
              <p className="text-gray-600 mb-4">
                Chez <span className="font-semibold text-blue-900">COTECH SERVICES</span>, nous concevons et déployons 
                des solutions réseau robustes qui garantissent la continuité de vos activités.
              </p>
              <p className="text-gray-600 mb-6">
                Que vous ayez besoin d'installer un nouveau réseau, de sécuriser votre infrastructure 
                existante, ou de mettre en place un système de vidéosurveillance, notre équipe d'experts 
                vous accompagne de l'audit à la maintenance.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition">
                  Demander un devis
                </Link>
                <Link href="#services" className="px-6 py-3 border border-blue-900 text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Découvrir nos offres
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/services/reseau/securite_cotech.png"
                alt="Réseaux et sécurité"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section id="services" className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Nos solutions réseau & sécurité Informatique
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des prestations complètes pour protéger et optimiser votre infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition group">
                  <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-900 transition">
                    <Icon className="h-7 w-7 text-blue-900 group-hover:text-white transition" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-900" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies utilisées */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Matériels de référence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous utilisons les meilleures marques du marché
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition">
                <span className="font-semibold text-gray-900">{tech.name}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${tech.color}`}>
                  {tech.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-10 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Notre méthodologie
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Une approche structurée pour des résultats optimaux
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {etapes.map((etape, index) => {
              const Icon = etape.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {etape.num}
                  </div>
                  <Icon className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="text-xl font-semibold mb-2">{etape.title}</h3>
                  <p className="text-blue-100 text-sm">{etape.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Pourquoi choisir COTECH SERVICES ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sécurité maximale</h3>
              <p className="text-gray-600">Protection avancée contre les cybermenaces</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Performances optimales</h3>
              <p className="text-gray-600">Réseaux rapides et fiables</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Support 24/7</h3>
              <p className="text-gray-600">Assistance technique réactive</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Besoin d'un réseau sécurisé et performant ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour un audit gratuit de votre infrastructure
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Demander un audit
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Voir tous nos services
            </Link>
          </div>
          <SocialLinks variant="light" showContact={true} />
        </div>
      </section>
    </main>
  );
}