"use client";
import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";
import Link from "next/link";
import { 
  Layout, 
  Database, 
  Users, 
  ShoppingCart, 
  BarChart3,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Shield,
  Settings,
  Briefcase
} from "lucide-react";

export default function ServiceOdooDetail() {
  const services = [
    {
      title: "Installation Odoo",
      description: "Déploiement rapide et sécurisé d'Odoo",
      icon: Database,
      features: ["Installation sur serveur", "Configuration initiale", "Optimisation performances", "Sauvegarde automatique"]
    },
    {
      title: "Personnalisation",
      description: "Adaptez Odoo à vos processus métier",
      icon: Settings,
      features: ["Développement modules sur mesure", "Personnalisation des vues", "Workflows personnalisés", "Intégrations API"]
    },
    {
      title: "Formation",
      description: "Formez vos équipes à l'utilisation d'Odoo",
      icon: Users,
      features: ["Formation utilisateurs", "Formation administrateurs", "Documentation personnalisée", "Support post-formation"]
    },
    {
      title: "Maintenance",
      description: "Support continu pour votre ERP",
      icon: Shield,
      features: ["Mises à jour régulières", "Support technique", "Optimisation base de données", "Sécurité renforcée"]
    }
  ];

  const modules = [
    { name: "Ventes", level: "Expert", color: "bg-blue-100 text-blue-800" },
    { name: "Achats", level: "Expert", color: "bg-green-100 text-green-800" },
    { name: "Comptabilité", level: "Avancé", color: "bg-purple-100 text-purple-800" },
    { name: "Stock", level: "Expert", color: "bg-red-100 text-red-800" },
    { name: "RH", level: "Avancé", color: "bg-cyan-100 text-cyan-800" },
    { name: "CRM", level: "Expert", color: "bg-orange-100 text-orange-800" }
  ];

  const etapes = [
    { 
      num: "1", 
      title: "Analyse", 
      description: "Étude de vos besoins",
      icon: Briefcase
    },
    { 
      num: "2", 
      title: "Installation", 
      description: "Déploiement d'Odoo",
      icon: Database
    },
    { 
      num: "3", 
      title: "Configuration", 
      description: "Paramétrage sur mesure",
      icon: Settings
    },
    { 
      num: "4", 
      title: "Formation", 
      description: "Prise en main",
      icon: Users
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center text-center">
        <Image
          src="/images/services/odoo-hero.jpg"
          alt="Gestion ERP Odoo"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <div className="bg-blue-900/20 backdrop-blur-sm inline-block p-3 rounded-full mb-4">
            <Layout className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Gestion ERP Odoo
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            La solution ERP complète pour gérer votre entreprise
          </p>
        </div>
      </section>

      {/* Description principale */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Optimisez la gestion de votre entreprise
              </h2>
              <p className="text-gray-600 mb-4">
                Chez <span className="font-semibold text-blue-900">COTECH SERVICES</span>, nous installons et 
                personnalisons Odoo, l'ERP open-source le plus complet du marché.
              </p>
              <p className="text-gray-600 mb-6">
                Que vous soyez une PME ou une grande entreprise, Odoo s'adapte à tous vos besoins : 
                ventes, achats, comptabilité, stock, RH, CRM... Notre équipe vous accompagne 
                de l'installation à la formation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition">
                  Demander une démo
                </Link>
                <Link href="#services" className="px-6 py-3 border border-blue-900 text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Découvrir nos offres
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/services/odoo-detail.jpg"
                alt="ERP Odoo"
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
              Nos prestations Odoo
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un accompagnement complet pour votre projet ERP
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

      {/* Modules Odoo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Modules Odoo maîtrisés
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une expertise sur les modules les plus utilisés
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition">
                <span className="font-semibold text-gray-900">{module.name}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${module.color}`}>
                  {module.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Notre méthodologie
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Un accompagnement structuré pour réussir votre projet
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
              <p className="text-gray-600">Déploiement accéléré</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sécurité</h3>
              <p className="text-gray-600">Données protégées</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Support continu</h3>
              <p className="text-gray-600">Assistance réactive</p>
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
                  "Grâce à COTECH SERVICES, nous avons déployé Odoo dans toute notre entreprise. 
                  Le support est excellent, la formation de qualité, et nos processus sont 
                  désormais parfaitement optimisés."
                </p>
                <p className="font-bold text-blue-900">Alpha Condé</p>
                <p className="text-gray-500 text-sm">CEO, Société B</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à digitaliser votre entreprise ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour une démonstration personnalisée
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Demander une démo
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