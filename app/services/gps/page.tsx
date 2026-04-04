"use client";
import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Truck, 
  Bell, 
  BarChart3, 
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Award,
  Navigation,
  AlertTriangle,
  TrendingUp
} from "lucide-react";

export default function ServiceGPSDetail() {
  const solutions = [
    {
      title: "Suivi de flotte",
      description: "Géolocalisation en temps réel de vos véhicules",
      icon: Truck,
      features: ["Position GPS en direct", "Vitesse et direction", "État du véhicule", "Historique des trajets"]
    },
    {
      title: "Géo-alertes",
      description: "Notifications personnalisées en temps réel",
      icon: Bell,
      features: ["Entrée/sortie de zone", "Dépassement de vitesse", "Non-respect d'itinéraire", "Arrêts prolongés"]
    },
    {
      title: "Rapports détaillés",
      description: "Analyses complètes pour optimiser votre flotte",
      icon: BarChart3,
      features: ["Rapports de consommation", "Analyse de conduite", "Durée d'arrêt", "Kilométrage parcouru"]
    },
    {
      title: "Installation GPS",
      description: "Installation professionnelle sur tous types de véhicules",
      icon: Navigation,
      features: ["Installation discrète", "Test de fonctionnement", "Configuration plateforme", "Formation utilisateur"]
    }
  ];

  const avantages = [
    { name: "Économie de carburant", value: "Jusqu'à 25%", color: "bg-green-100 text-green-800" },
    { name: "Réduction des vols", value: "90%", color: "bg-blue-100 text-blue-800" },
    { name: "Productivité", value: "+30%", color: "bg-purple-100 text-purple-800" },
    { name: "ROI", value: "3-6 mois", color: "bg-orange-100 text-orange-800" }
  ];

  const etapes = [
    { 
      num: "1", 
      title: "Analyse", 
      description: "Étude de vos besoins",
      icon: Users
    },
    { 
      num: "2", 
      title: "Installation", 
      description: "Pose des dispositifs GPS",
      icon: MapPin
    },
    { 
      num: "3", 
      title: "Configuration", 
      description: "Paramétrage de la plateforme",
      icon: Globe
    },
    { 
      num: "4", 
      title: "Formation", 
      description: "Prise en main complète",
      icon: Zap
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center text-center">
        <Image
          src="/images/services/gps-hero.jpg"
          alt="Systèmes GPS & Suivi de Flotte"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <div className="bg-blue-900/20 backdrop-blur-sm inline-block p-3 rounded-full mb-4">
            <MapPin className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Systèmes GPS & Suivi de Flotte
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Géolocalisation temps réel pour optimiser votre flotte
          </p>
        </div>
      </section>

      {/* Description principale */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Contrôlez votre flotte en temps réel
              </h2>
              <p className="text-gray-600 mb-4">
                Chez <span className="font-semibold text-blue-900">COTECH SERVICES</span>, nous installons des 
                solutions GPS professionnelles pour suivre vos véhicules en temps réel.
              </p>
              <p className="text-gray-600 mb-6">
                Que vous ayez une flotte de 2 ou 200 véhicules, notre solution vous permet 
                d'optimiser vos trajets, réduire vos coûts de carburant, améliorer la sécurité 
                de vos conducteurs et augmenter la productivité de votre entreprise.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition">
                  Demander une démo
                </Link>
                <Link href="#solutions" className="px-6 py-3 border border-blue-900 text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Découvrir les solutions
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/services/gps-detail.jpg"
                alt="Systèmes GPS"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions détaillées */}
      <section id="solutions" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Nos solutions GPS
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une gamme complète pour la gestion de votre flotte
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition group">
                  <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-900 transition">
                    <Icon className="h-7 w-7 text-blue-900 group-hover:text-white transition" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
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

      {/* Avantages clés */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Bénéfices pour votre entreprise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des résultats mesurables dès les premiers mois
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {avantages.map((avantage, index) => (
              <div key={index} className="text-center p-6 border rounded-xl hover:shadow-lg transition">
                <div className="text-4xl font-bold text-blue-900 mb-2">{avantage.value}</div>
                <p className="text-gray-600">{avantage.name}</p>
                <div className={`mt-3 inline-block px-3 py-1 rounded-full text-xs font-medium ${avantage.color}`}>
                  Économie
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Fonctionnalités avancées
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une plateforme complète pour gérer votre flotte
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Navigation className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Géolocalisation temps réel</h3>
              </div>
              <p className="text-gray-600 text-sm">Visualisez tous vos véhicules sur une carte interactive avec mise à jour toutes les 30 secondes.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Alertes intelligentes</h3>
              </div>
              <p className="text-gray-600 text-sm">Recevez des notifications en cas de dépassement de vitesse, sortie de zone, ou arrêt prolongé.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Rapports d'analyse</h3>
              </div>
              <p className="text-gray-600 text-sm">Générez des rapports détaillés sur la consommation, les distances, et le comportement de conduite.</p>
            </div>
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
              Une mise en place rapide et sans stress
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

      {/* Types de véhicules */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Compatible avec tous types de véhicules
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl mb-2">🚗</div>
              <p className="font-semibold text-gray-900">Voitures</p>
              <p className="text-xs text-gray-500">Particuliers et sociétés</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-2">🚚</div>
              <p className="font-semibold text-gray-900">Camions</p>
              <p className="text-xs text-gray-500">Poids lourds</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-2">🛵</div>
              <p className="font-semibold text-gray-900">Motos</p>
              <p className="text-xs text-gray-500">Deux-roues</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-2">🚜</div>
              <p className="font-semibold text-gray-900">Engins</p>
              <p className="text-xs text-gray-500">Chariots, engins TP</p>
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
                  "Depuis l'installation des GPS par COTECH SERVICES, nous avons réduit notre 
                  consommation de carburant de 25%. La plateforme est intuitive et les alertes 
                  nous aident à mieux gérer notre flotte au quotidien."
                </p>
                <p className="font-bold text-blue-900">Alpha Sow</p>
                <p className="text-gray-500 text-sm">CEO, Transport Express</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à optimiser votre flotte ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour une démonstration gratuite
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