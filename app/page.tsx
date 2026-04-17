"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import FormationSection  from "@/components/FormationSection";
import { 
  Code2, 
  Wifi, 
  Cpu, 
  Wrench, 
  ShoppingCart, 
  MapPin, 
  GraduationCap,
  ChevronRight,
  Globe,
  Shield,
  Clock,
  Headphones,
  ChevronLeft,
  ChevronRight as ChevronRightIcon
} from "lucide-react";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slides avec images et textes personnalisés
  const slides = [
    {
      src: "/images/slide/slide1.png",
      alt: "COTECH SERVICES - Formation",
      title: "Formation & Certification",
      subtitle: "Développez vos compétences technologiques",
      buttonText: "Découvrir nos formations",
      buttonLink: "/formations",
      icon: GraduationCap
    },
    {
      src: "/images/slide/slide2.png",
      alt: "COTECH SERVICES - Solutions Numériques",
      title: "Solutions IT sur Mesure",
      subtitle: "Transformez votre entreprise avec le digital",
      buttonText: "Découvrir nos solutions",
      buttonLink: "/services",
      icon: Code2
    },
    {
      src: "/images/slide/slide3.png",
      alt: "COTECH SERVICES - Systèmes Embarqués & IoT",
      title: "Systèmes Embarqués & IoT",
      subtitle: "L'innovation au service de votre quotidien",
      buttonText: "Explorer nos solutions IoT",
      buttonLink: "/solutions-iot",
      icon: Cpu
    }
  ];

  // Changement automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Navigation manuelle
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Services principaux
  const services = [
    {
      icon: Code2,
      title: "Développement Web & Apps",
      description: "Sites web professionnels, applications de gestion, e-commerce et paiement en ligne.",
      link: "/services#web"
    },
    {
      icon: Wifi,
      title: "Réseaux & Sécurité",
      description: "Installation réseau, Wi-Fi professionnel, vidéosurveillance et sécurité informatique.",
      link: "/infrastructure-reseau"
    },
    {
      icon: Cpu,
      title: "Solutions IoT",
      description: "Systèmes intelligents, domotique, irrigation connectée et prototypage électronique.",
      link: "/solutions-iot"
    },
    {
      icon: Wrench,
      title: "Maintenance IT",
      description: "Maintenance préventive et corrective, réparation, optimisation et support technique.",
      link: "/maintenance"
    },
    {
      icon: ShoppingCart,
      title: "Vente d'Équipements",
      description: "Matériel informatique, accessoires, composants électroniques sur devis.",
      link: "/ventes-equipements"
    },
    {
      icon: MapPin,
      title: "Systèmes GPS",
      description: "Installation GPS, suivi de flotte en temps réel et géolocalisation.",
      link: "/gps"
    }
  ];

  // Avantages
  const avantages = [
    {
      icon: Shield,
      title: "Expertise technique",
      description: "Un seul interlocuteur pour tous vos besoins IT"
    },
    {
      icon: Globe,
      title: "Solutions locales",
      description: "Adaptées au contexte africain et aux contraintes locales"
    },
    {
      icon: Clock,
      title: "Support réactif",
      description: "Assistance rapide et disponible"
    },
    {
      icon: Headphones,
      title: "Accompagnement personnalisé",
      description: "Solutions sur mesure et suivi dédié"
    }
  ];

  return (
    <main>
      {/* Hero Section avec Slider */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        {/* Images du slider */}
        {slides.map((slide, index) => {
          const Icon = slide.icon;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover brightness-50"
                priority={index === 0}
              />
              
              {/* Contenu du slide */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30">
                <div className="h-full flex items-center justify-center">
                  <div className="max-w-4xl mx-auto px-6 text-center text-white">
                    <div className="mb-4 flex justify-center">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                        <Icon className="h-12 w-12" />
                      </div>
                    </div>
                    <h4 className="text-2xl sm:text-5xl md:text-6xl font-extrabold mb-4">
                      {slide.title}
                    </h4>
                    <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-blue-300">
                      {slide.subtitle}
                    </p>
                    
                    {/* Features */}
                    
                    
                    <div className="flex flex-wrap justify-center gap-4">
                      <a
                        href={slide.buttonLink}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
                      >
                        {slide.buttonText}
                      </a>
                      <a
                        href="/contact"
                        className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition"
                      >
                        Demander un devis
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Boutons de navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition backdrop-blur-sm"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition backdrop-blur-sm"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>

        {/* Indicateurs (dots) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all h-2 rounded-full ${
                index === currentSlide
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Présentation rapide */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Qui sommes-nous ?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            <span className="font-semibold text-blue-900">COTECH SERVICES</span> est une entreprise multiservices 
            spécialisée dans les technologies de l'information (IT), les solutions numériques, 
            les systèmes intelligents (IoT), la maintenance matérielle et logicielle.
            L'entreprise propose des services professionnels adaptés aux particuliers, entreprises, institutions et organisations souhaitant moderniser leurs infrastructures technologiques.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              Elle fonctionne principalement en ligne et offre des prestations à distance ainsi que des interventions techniques sur site dans un rayon déterminé selon les besoins des clients.
          </p>
  
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Nous proposons des services professionnels adaptés aux particuliers, entreprises, 
            institutions et organisations souhaitant moderniser leurs infrastructures technologiques.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="/about"
              className="px-6 py-3 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition"
            >
              En savoir plus
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50 transition"
            >
              Nous contacter
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/apropos/pdg.jpg"
            alt="COTECH SERVICES - Innovation technologique"
            width={500}
            height={300}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Nos domaines d'expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des solutions technologiques complètes adaptées à vos besoins
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition group"
                >
                  <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-900 transition">
                    <Icon className="h-7 w-7 text-blue-900 group-hover:text-white transition" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <a 
                    href={service.link}
                    className="text-blue-900 font-medium inline-flex items-center gap-1 hover:gap-2 transition"
                  >
                    En savoir plus <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pourquoi choisir COTECH SERVICES */}
      <section className="py-8 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12">
          Pourquoi choisir COTECH SERVICES ?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {avantages.map((avantage, index) => {
            const Icon = avantage.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center border border-gray-100 hover:shadow-lg transition">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  {avantage.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {avantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Formation & Accompagnement */}
      <FormationSection />
      {/* Contact et horaires */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Contactez-nous
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-gray-600">Conakry, Guinée</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Headphones className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <p className="font-semibold">Téléphone / WhatsApp</p>
                    <p className="text-gray-600">+224 628 811 827 / +224 610 093 485</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Globe className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">cotechservices.gn@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <p className="font-semibold">Horaires</p>
                    <p className="text-gray-600">Lun-Ven: 8h00-18h00 | Sam: 9h00-13h00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Zone d'intervention
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold">Prestations à distance :</span>
                  <span className="text-gray-600">Partout (support téléphonique, visioconférence)</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold">Interventions sur site :</span>
                  <span className="text-gray-600">Conakry</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Projets spécifiques :</span>
                  <span className="text-gray-600">Étude au cas par cas</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-800 rounded-lg text-center text-white">
                <a
                  href="https://wa.me/224610093485?text=Bonjour%20COTECH%20SERVICES%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20services.%20Pouvez-vous%20me%20renseigner%20%3F%0A%0A--Source--%0A%20Message%20envoy%C3%A9%20depuis%20mon%20site%20web%20cotechservices.com"
                >
                  WhatsApp : +224 610 093 485
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}