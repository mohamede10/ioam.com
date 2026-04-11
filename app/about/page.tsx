"use client";
import SocialLinks from "@/components/SocialLinks";
import Link from "next/link";
import Image from "next/image";
import { 
  Eye, 
  Target, 
  Heart, 
  Award, 
  Shield, 
  Lightbulb, 
  Users, 
  TrendingUp,
  CheckCircle,
  Rocket,
  Star,
  Briefcase,
  Clock,
  Headphones,
  Code2,
  Wifi,
  Cpu,
  Wrench,
  ShoppingCart,
  MapPin
} from "lucide-react";

export default function About() {
  // Valeurs fondamentales selon le document
  const values = [
    {
      icon: Briefcase,
      title: "Professionnalisme",
      description: "Respect des engagements, rigueur et compétence technique",
      color: "bg-blue-100 text-blue-900"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Veille technologique constante et solutions créatives",
      color: "bg-blue-100 text-blue-900"
    },
    {
      icon: Shield,
      title: "Intégrité",
      description: "Transparence, honnêteté et éthique dans toutes nos actions",
      color: "bg-blue-100 text-blue-900"
    },
    {
      icon: Heart,
      title: "Responsabilité",
      description: "Engagement total vis-à-vis de nos clients et de nos réalisations",
      color: "bg-blue-100 text-blue-900"
    },
    {
      icon: Award,
      title: "Excellence technique",
      description: "Maîtrise des technologies et perfectionnement continu",
      color: "bg-blue-100 text-blue-900"
    },
    {
      icon: Users,
      title: "Satisfaction client",
      description: "Écoute, accompagnement personnalisé et suivi après-vente",
      color: "bg-blue-100 text-blue-900"
    }
  ];

  // Services clés
  const keyServices = [
    { icon: Code2, title: "Développement Web", description: "Sites et applications sur mesure" },
    { icon: Wifi, title: "Réseaux & Sécurité", description: "Infrastructures sécurisées" },
    { icon: Cpu, title: "Solutions IoT", description: "Systèmes intelligents" },
    { icon: Wrench, title: "Maintenance IT", description: "Assistance technique" },
    { icon: ShoppingCart, title: "Vente d'Équipements", description: "Matériel de qualité" },
    { icon: MapPin, title: "Systèmes GPS", description: "Suivi de flotte" }
  ];

  // Chiffres clés
  const stats = [
    { value: "+50", label: "Projets réalisés", icon: CheckCircle },
    { value: "+100", label: "Clients satisfaits", icon: Users },
    { value: "24/7", label: "Support technique", icon: Star },
    { value: "100%", label: "Solutions sur mesure", icon: Target },
    { value: "6", label: "Domaines d'expertise", icon: Award },
    { value: "98%", label: "Taux de satisfaction", icon: Heart }
  ];

  return (
    <main>
      {/* SECTION 1: Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/images/services/librairie.jpg"
          alt="À propos de COTECH SERVICES"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            À propos de nous
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Découvrez qui nous sommes, notre vision et nos valeurs
          </p>
        </div>
      </section>
      {/* SECTION 8: Chiffres clés */}
      <section className="py-10 bg-white overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12">
            Chiffres clés
          </h2>
          <div className="flex gap-4 min-w-max lg:min-w-0 lg:grid lg:grid-cols-6 lg:gap-6 px-4 lg:px-0">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition w-[160px] lg:w-auto">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-blue-900" />
                  </div>
                  <div className="text-xl font-bold text-blue-900">{stat.value}</div>
                  <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div> 
      </section>
      {/* SECTION 2: Présentation Générale */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-6"> <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
                Présentation Générale de COTECH SERVICES GUINEE
              </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold text-blue-900">COTECH SERVICES</span> est une entreprise 
                  multiservices spécialisée dans les technologies de l'information (IT), 
                  les solutions numériques, les systèmes intelligents (IoT), la maintenance 
                  matérielle et logicielle, la vente d'équipements informatiques et 
                  l'installation de systèmes GPS.
                </p>
                <p>
                  L'entreprise propose des services professionnels adaptés aux particuliers, 
                  entreprises, institutions et organisations souhaitant moderniser leurs 
                  infrastructures technologiques.
                </p>
                <p>
                  Elle fonctionne principalement en ligne et offre des prestations à distance 
                  ainsi que des interventions techniques sur site dans un rayon déterminé 
                  selon les besoins des clients.
                </p>
              </div>

              {/* Informations légales */}
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Informations légales
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Statut juridique :</span>
                    <span>SARL</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Siège social :</span>
                    <span>Conakry, Guinée</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">RCCM :</span>
                    <span>À venir</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">IFU (NIF) :</span>
                    <span>À venir</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[530px] rounded-lg overflow-hidden shadow-xl group cursor-pointer">
                <Link href="/profil">
                  <Image
                    src="/images/apropos/pdg.jpg"
                    alt="COTECH SERVICES - Bureau"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/90 text-blue-900 px-4 py-2 rounded-lg font-semibold">
                      Voir mon profil →
                    </span>
                  </div>
                </Link>
              </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Vision & Mission */}
      <section className="py-10 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-5">
            {/* Vision */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-xl shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-10 w-10" />
                <h2 className="text-3xl font-bold">Notre Vision</h2>
              </div>
              <p className="text-lg leading-relaxed">
                Devenir une référence nationale et sous-régionale dans le domaine 
                des solutions numériques innovantes, en contribuant activement à 
                la transformation digitale des entreprises et organisations.
              </p>
              <div className="mt-6">
                <Rocket className="h-16 w-16 text-white/30" />
              </div>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-8 rounded-xl shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-10 w-10" />
                <h2 className="text-3xl font-bold">Notre Mission</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Fournir des solutions technologiques fiables et performantes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Accompagner les entreprises dans leur digitalisation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Concevoir des systèmes intelligents adaptés aux réalités locales</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Offrir un service professionnel basé sur l'innovation, la qualité et la satisfaction client</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Valeurs Fondamentales */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Nos Valeurs Fondamentales
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Six valeurs qui guident nos actions au quotidien
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition group"
                >
                  <div className="bg-blue-100 text-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: Nos Services Clés */}
      <section className="py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Nos Services Clés
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour tous vos besoins IT
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition">
                  <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-blue-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: Objectifs */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12">
            Nos Objectifs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Objectifs Généraux */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                Objectifs Généraux
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-900 mt-0.5" />
                  <span>Développer une structure IT solide et reconnue</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-900 mt-0.5" />
                  <span>Accroître la présence digitale des entreprises locales</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-900 mt-0.5" />
                  <span>Promouvoir l'utilisation des technologies intelligentes</span>
                </li>
              </ul>
            </div>

            {/* Objectifs Spécifiques */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Objectifs Spécifiques
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-900 mt-0.5" />
                  <span>Réaliser des projets web et applicatifs performants</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-900 mt-0.5" />
                  <span>Mettre en place des infrastructures réseaux sécurisées</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-900 mt-0.5" />
                  <span>Concevoir et déployer des solutions IoT adaptées</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-900 mt-0.5" />
                  <span>Assurer la maintenance et le support technique continu</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-900 mt-0.5" />
                  <span>Former et sensibiliser à l'usage des technologies modernes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Engagement Qualité */}
      <section className="py-10 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Notre Engagement Qualité
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm text-center">
              <Clock className="h-12 w-12 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Respect des délais</h3>
              <p className="text-blue-100">Suivi régulier de l'avancement</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm text-center">
              <Shield className="h-12 w-12 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Confidentialité</h3>
              <p className="text-blue-100">Protection des données clients</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm text-center">
              <Award className="h-12 w-12 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Solutions durables</h3>
              <p className="text-blue-100">Évolutives et pérennes</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm text-center">
              <Headphones className="h-12 w-12 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">SAV efficace</h3>
              <p className="text-blue-100">Service après-vente réactif</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CTA */}
      <section className="py-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à collaborer avec COTECH SERVICES ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour discuter de vos projets technologiques
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Nous contacter
            </a>
            <a
              href="/services"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Découvrir nos services
            </a>
          </div>
          <SocialLinks variant="light" showContact={true} />
        </div>
      </section>
    </main>
  );
}