"use client";
import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";
import Link from "next/link";
import { 
  Wrench, 
  Laptop, 
  Shield, 
  Database, 
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Award,
  Server,
  Smartphone,
  HardDrive,
  Bug
} from "lucide-react";

export default function ServiceMaintenanceDetail() {
  const services = [
    {
      title: "Maintenance Matérielle",
      description: "Diagnostic et réparation de vos équipements informatiques",
      icon: Laptop,
      features: ["Réparation ordinateurs", "Remplacement composants", "Nettoyage interne", "Diagnostic gratuit"]
    },
    {
      title: "Maintenance Logicielle",
      description: "Optimisation et sécurisation de vos systèmes",
      icon: Shield,
      features: ["Installation OS", "Mise à jour logiciels", "Suppression virus", "Optimisation performances"]
    },
    {
      title: "Support technique",
      description: "Assistance rapide pour tous vos problèmes IT",
      icon: Zap,
      features: ["Support à distance", "Intervention sur site", "Hotline téléphonique", "Assistance WhatsApp"]
    },
    {
      title: "Contrats de maintenance",
      description: "Solutions adaptées pour les professionnels",
      icon: Database,
      features: ["Suivi personnalisé", "Interventions prioritaires", "Rapports d'activité", "Tarifs préférentiels"]
    }
  ];

  const prestations = [
    { name: "Windows/MacOS/Linux", level: "Expert", color: "bg-blue-100 text-blue-800" },
    { name: "Suite Office", level: "Expert", color: "bg-green-100 text-green-800" },
    { name: "Antivirus", level: "Avancé", color: "bg-purple-100 text-purple-800" },
    { name: "Sauvegarde", level: "Expert", color: "bg-red-100 text-red-800" },
    { name: "Virtualisation", level: "Avancé", color: "bg-cyan-100 text-cyan-800" },
    { name: "GLPI/OTRS", level: "Expert", color: "bg-orange-100 text-orange-800" }
  ];

  const etapes = [
    { 
      num: "1", 
      title: "Diagnostic", 
      description: "Analyse complète de votre matériel/logiciel",
      icon: Users
    },
    { 
      num: "2", 
      title: "Intervention", 
      description: "Réparation ou optimisation",
      icon: Wrench
    },
    { 
      num: "3", 
      title: "Tests", 
      description: "Vérification et validation",
      icon: Server
    },
    { 
      num: "4", 
      title: "Suivi", 
      description: "Assistance post-intervention",
      icon: Zap
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center text-center">
        <Image
          src="/images/services/maintenance-hero.jpg"
          alt="Maintenance IT"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <div className="bg-blue-900/20 backdrop-blur-sm inline-block p-3 rounded-full mb-4">
            <Wrench className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Maintenance IT
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Assistance technique complète pour votre matériel et logiciels
          </p>
        </div>
      </section>

      {/* Description principale */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Votre partenaire informatique de confiance
              </h2>
              <p className="text-gray-600 mb-4">
                Chez <span className="font-semibold text-blue-900">COTECH SERVICES</span>, nous prenons soin de votre 
                parc informatique pour que vous puissiez vous concentrer sur votre cœur de métier.
              </p>
              <p className="text-gray-600 mb-6">
                Que ce soit pour une panne matérielle, un virus, une lenteur anormale, 
                ou une simple mise à jour, notre équipe intervient rapidement pour résoudre 
                tous vos problèmes informatiques, à distance ou sur site.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition">
                  Demander une intervention
                </Link>
                <Link href="#services" className="px-6 py-3 border border-blue-900 text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Nos formules
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/services/maintenance-detail.jpg"
                alt="Maintenance informatique"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Nos prestations de maintenance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des solutions adaptées aux particuliers et aux professionnels
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

      {/* Prestations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Nos domaines d'expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous maîtrisons l'ensemble des technologies courantes
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {prestations.map((presta, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition">
                <span className="font-semibold text-gray-900">{presta.name}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${presta.color}`}>
                  {presta.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formules */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Nos formules de maintenance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des packs adaptés à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Particulier</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">À partir de 50 000 GNF</div>
              <ul className="space-y-2 text-left mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-900" />
                  <span>Diagnostic gratuit</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-900" />
                  <span>Maintenance préventive</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-900" />
                  <span>Support à distance</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-900" />
                  <span>Intervention à domicile</span>
                </li>
              </ul>
              <Link href="/contact" className="block text-center px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition">
                Je souscris
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center border-2 border-blue-900 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white px-3 py-1 rounded-full text-xs">
                Populaire
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">PME/Startup</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">Sur devis</div>
              <ul className="space-y-2 text-left mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-900" />
                  <span>Audit complet</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-900" />
                  <span>Support prioritaire</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-900" />
                  <span>Intervention sous 24h</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-900" />
                  <span>Rapport mensuel</span>
                </li>
              </ul>
              <Link href="/contact" className="block text-center px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition">
                Demander un devis
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Entreprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">Sur mesure</div>
              <ul className="space-y-2 text-left mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-900" />
                  <span>Contrat personnalisé</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-900" />
                  <span>Technicien dédié</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-900" />
                  <span>Intervention 24/7</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-900" />
                  <span>Gestion parc complet</span>
                </li>
              </ul>
              <Link href="/contact" className="block text-center px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Notre processus d'intervention
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Une méthodologie claire et efficace
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Pourquoi choisir COTECH SERVICES ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rapidité</h3>
              <p className="text-gray-600">Intervention sous 24h ouvrées</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fiabilité</h3>
              <p className="text-gray-600">Solutions durables et garanties</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Disponibilité</h3>
              <p className="text-gray-600">Support technique réactif</p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-12 w-12 text-blue-900" />
              </div>
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic mb-4">
                  "COTECH SERVICES assure la maintenance de nos 50 postes de travail. 
                  Interventions rapides, techniciens compétents, et un suivi impeccable. 
                  Notre productivité a augmenté de 30% depuis leur arrivée !"
                </p>
                <p className="font-bold text-blue-900">Alpha Condé</p>
                <p className="text-gray-500 text-sm">Responsable IT, Société B</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Un problème informatique ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour une intervention rapide
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Demander une intervention
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