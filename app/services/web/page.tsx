"use client";
import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";
import Link from "next/link";
import { 
  Code2, 
  Smartphone, 
  ShoppingCart, 
  Shield, 
  Zap, 
  Globe,
  CheckCircle,
  ArrowRight,
  Users,
  BarChart3,
  Clock,
  Award,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export default function ServiceWebDetail() {
  const services = [
    {
      title: "Sites Web Vitrine",
      description: "Présentez votre entreprise avec élégance et professionnalisme",
      icon: Globe,
      features: ["Design responsive", "Optimisation SEO", "Formulaire de contact", "Galerie média"]
    },
    {
      title: "E-commerce",
      description: "Vendez vos produits en ligne avec une boutique performante",
      icon: ShoppingCart,
      features: ["Paiement Mobile Money", "Gestion des stocks", "Panier d'achat", "Suivi des commandes"]
    },
    {
      title: "Applications Web",
      description: "Automatisez vos processus avec des applications sur mesure",
      icon: Code2,
      features: ["Tableau de bord admin", "Gestion des utilisateurs", "Rapports et analyses", "API personnalisées"]
    },
    {
      title: "Applications Mobiles",
      description: "Soyez accessible partout avec votre application mobile",
      icon: Smartphone,
      features: ["iOS et Android", "Notifications push", "Mode hors ligne", "Synchronisation cloud"]
    }
  ];

  const technologies = [
    { name: "React/Next.js", level: "Avancé", color: "bg-blue-100 text-blue-800" },
    { name: "Node.js", level: "Avancé", color: "bg-green-100 text-green-800" },
    { name: "Laravel", level: "Expert", color: "bg-red-100 text-red-800" },
    { name: "MySQL/PostgreSQL", level: "Avancé", color: "bg-purple-100 text-purple-800" },
    { name: "MongoDB", level: "Intermédiaire", color: "bg-green-100 text-green-800" },
    { name: "TailwindCSS", level: "Expert", color: "bg-cyan-100 text-cyan-800" }
  ];

  const etapes = [
    { 
      num: "1", 
      title: "Analyse des besoins", 
      description: "Nous étudions votre projet et vos objectifs",
      icon: Users
    },
    { 
      num: "2", 
      title: "Conception", 
      description: "Création des maquettes et validation",
      icon: Globe
    },
    { 
      num: "3", 
      title: "Développement", 
      description: "Codage et tests qualité",
      icon: Code2
    },
    { 
      num: "4", 
      title: "Déploiement", 
      description: "Mise en ligne et formation",
      icon: Zap
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center text-center">
        <Image
          src="/images/services/web-dev-hero.jpg"
          alt="Développement Web & Applications"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <div className="bg-blue-900/20 backdrop-blur-sm inline-block p-3 rounded-full mb-4">
            <Code2 className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Développement Web & Applications
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Des solutions numériques sur mesure pour propulser votre entreprise dans l'ère digitale
          </p>
        </div>
      </section>

      {/* Description principale */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Créez votre présence en ligne
              </h2>
              <p className="text-gray-600 mb-4">
                Chez <span className="font-semibold text-blue-900">COTECH SERVICES</span>, nous concevons des sites web 
                et applications qui allient esthétique, performance et simplicité d'utilisation.
              </p>
              <p className="text-gray-600 mb-6">
                Que vous ayez besoin d'un site vitrine pour présenter votre activité, 
                d'une boutique e-commerce pour vendre en ligne, ou d'une application 
                métier sur mesure, notre équipe vous accompagne de la conception à la maintenance.
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
                src="/images/services/web-dev-detail.jpg"
                alt="Développement web"
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
              Nos solutions web
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des prestations adaptées à tous vos besoins digitaux
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Technologies de pointe
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous utilisons les frameworks et technologies les plus récents
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
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Notre méthodologie
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Un processus clair et transparent pour votre projet
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">Performance</h3>
              <p className="text-gray-600">Des sites rapides et optimisés pour le référencement</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sécurité</h3>
              <p className="text-gray-600">Protection avancée contre les menaces en ligne</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Support 24/7</h3>
              <p className="text-gray-600">Assistance technique réactive et disponible</p>
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
                  "COTECH SERVICES a développé notre site e-commerce. Le résultat est bluffant : 
                  design moderne, paiement Mobile Money intégré, et un accompagnement parfait. 
                  Notre chiffre d'affaires en ligne a augmenté de 40% !"
                </p>
                <p className="font-bold text-blue-900">Mamadou Diallo</p>
                <p className="text-gray-500 text-sm">CEO, Djoma Market</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à donner vie à votre projet web ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour un devis gratuit et personnalisé
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Demander un devis
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Voir tous nos services
            </Link>
          </div>
        </div>
        <SocialLinks variant="light" showContact={true} />
      </section>
    </main>
  );
}