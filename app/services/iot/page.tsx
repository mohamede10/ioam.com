"use client";
import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";
import Link from "next/link";
import { 
  Cpu, 
  Home, 
  Droplets, 
  Bell, 
  Microchip, 
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Award,
  Wifi,
  Smartphone,
  Leaf
} from "lucide-react";

export default function ServiceIoTDetail() {
  const services = [
    {
      title: "Domotique Intelligente",
      description: "Automatisez votre maison ou bureau pour plus de confort",
      icon: Home,
      features: ["Contrôle éclairage à distance", "Gestion des volets", "Climatisation connectée", "Scénarios personnalisés"]
    },
    {
      title: "Irrigation Connectée",
      description: "Économisez l'eau avec un système d'arrosage intelligent",
      icon: Droplets,
      features: ["Capteurs d'humidité", "Programmation automatique", "Contrôle à distance", "Économie d'eau jusqu'à 40%"]
    },
    {
      title: "Sécurité Intelligente",
      description: "Protégez vos biens avec des alarmes connectées",
      icon: Bell,
      features: ["Détecteurs de mouvement", "Sirènes connectées", "Alertes SMS", "Caméras intelligentes"]
    },
    {
      title: "Prototypage IoT",
      description: "Conception de solutions IoT sur mesure",
      icon: Microchip,
      features: ["Arduino / ESP32", "Capteurs personnalisés", "Intégration GSM", "Plateforme de gestion"]
    }
  ];

  const technologies = [
    { name: "Arduino", level: "Expert", color: "bg-blue-100 text-blue-800" },
    { name: "ESP32/ESP8266", level: "Expert", color: "bg-green-100 text-green-800" },
    { name: "Raspberry Pi", level: "Avancé", color: "bg-purple-100 text-purple-800" },
    { name: "MQTT", level: "Expert", color: "bg-red-100 text-red-800" },
    { name: "Node-RED", level: "Avancé", color: "bg-cyan-100 text-cyan-800" },
    { name: "LoRaWAN", level: "Intermédiaire", color: "bg-orange-100 text-orange-800" }
  ];

  const etapes = [
    { 
      num: "1", 
      title: "Analyse", 
      description: "Étude de vos besoins et contraintes",
      icon: Users
    },
    { 
      num: "2", 
      title: "Prototypage", 
      description: "Création d'un prototype fonctionnel",
      icon: Microchip
    },
    { 
      num: "3", 
      title: "Déploiement", 
      description: "Installation et configuration",
      icon: Wifi
    },
    { 
      num: "4", 
      title: "Maintenance", 
      description: "Suivi et évolutions",
      icon: Zap
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/images/services/iot/rob.jpg"
          alt="Solutions IoT & Systèmes Intelligents"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <div className="bg-blue-900/20 backdrop-blur-sm inline-block p-3 rounded-full mb-4">
            <Cpu className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Solutions IoT & Systèmes Intelligents
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Des objets connectés sur mesure pour automatiser et optimiser votre quotidien
          </p>
        </div>
      </section>

      {/* Description principale */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                L'innovation au service de votre quotidien
              </h2>
              <p className="text-gray-600 mb-4">
                Chez <span className="font-semibold text-blue-900">COTECH SERVICES</span>, nous concevons des 
                solutions IoT innovantes qui rendent votre environnement plus intelligent et connecté.
              </p>
              <p className="text-gray-600 mb-6">
                Que vous souhaitiez automatiser votre maison, optimiser votre consommation d'eau, 
                ou créer une solution sur mesure pour votre entreprise, notre équipe d'experts 
                en électronique et programmation vous accompagne du prototype au déploiement.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition">
                  Demander un devis
                </Link>
                <Link href="#services" className="px-6 py-3 border border-blue-900 text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Découvrir nos solutions
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/services/iot/slide_iot.png"
                alt="Solutions IoT"
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
              Nos solutions IoT
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des objets connectés adaptés à vos besoins spécifiques
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
              Technologies IoT
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous maîtrisons les meilleures technologies du marché
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

      {/* Applications */}
      <section className="py-10 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Applications concrètes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez comment l'IoT transforme différents secteurs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Agriculture intelligente</h3>
              <p className="text-gray-600 text-sm">Surveillance des cultures, irrigation automatique, capteurs météo</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Maison connectée</h3>
              <p className="text-gray-600 text-sm">Contrôle à distance, économies d'énergie, sécurité</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Industrie 4.0</h3>
              <p className="text-gray-600 text-sm">Maintenance prédictive, suivi de production, capteurs industriels</p>
            </div>
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
              De l'idée au produit connecté
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
            Pourquoi choisir COTECH SERVICES pour l'IoT ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microchip className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expertise technique</h3>
              <p className="text-gray-600">Équipe spécialisée en électronique et programmation</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Solutions sur mesure</h3>
              <p className="text-gray-600">Conception adaptée à vos besoins spécifiques</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Support technique</h3>
              <p className="text-gray-600">Assistance continue après déploiement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à connecter votre monde ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour concrétiser votre projet IoT
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
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
          <SocialLinks variant="light" showContact={true} />
        </div>
      </section>
    </main>
  );
}