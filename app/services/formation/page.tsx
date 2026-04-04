"use client";
import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";
import Link from "next/link";
import { 
  GraduationCap, 
  Code2, 
  Wifi, 
  Cpu, 
  Users, 
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Shield,
  BookOpen,
  Laptop,
  Trophy
} from "lucide-react";

export default function ServiceFormationDetail() {
  const formations = [
    {
      title: "Développement Web",
      description: "Devenez développeur full-stack professionnel",
      icon: Code2,
      features: ["HTML/CSS/JavaScript", "React/Next.js", "Node.js/PHP", "Bases de données"]
    },
    {
      title: "Réseaux & Sécurité",
      description: "Maîtrisez l'infrastructure et la sécurité IT",
      icon: Wifi,
      features: ["Administration réseau", "Configuration firewall", "Sécurité informatique", "Virtualisation"]
    },
    {
      title: "IoT & Embarqué",
      description: "Créez des objets connectés intelligents",
      icon: Cpu,
      features: ["Arduino/ESP32", "Capteurs et actionneurs", "Programmation embarquée", "Prototypage"]
    },
    {
      title: "Bureautique & IT",
      description: "Initiation à l'informatique pour tous",
      icon: Laptop,
      features: ["Suite Microsoft Office", "Gestion de fichiers", "Internet et email", "Sécurité de base"]
    }
  ];

  const programmes = [
    { name: "Initiation (30h)", level: "Débutant", color: "bg-green-100 text-green-800" },
    { name: "Perfectionnement (60h)", level: "Intermédiaire", color: "bg-blue-100 text-blue-800" },
    { name: "Expert (120h)", level: "Avancé", color: "bg-purple-100 text-purple-800" },
    { name: "Certification", level: "Professionnel", color: "bg-orange-100 text-orange-800" }
  ];

  const etapes = [
    { 
      num: "1", 
      title: "Évaluation", 
      description: "Analyse de votre niveau",
      icon: Users
    },
    { 
      num: "2", 
      title: "Programme", 
      description: "Plan de formation personnalisé",
      icon: BookOpen
    },
    { 
      num: "3", 
      title: "Formation", 
      description: "Cours théoriques et pratiques",
      icon: GraduationCap
    },
    { 
      num: "4", 
      title: "Certification", 
      description: "Évaluation et attestation",
      icon: Award
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center text-center">
        <Image
          src="/images/services/formation-hero.jpg"
          alt="Formation IT"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <div className="bg-blue-900/20 backdrop-blur-sm inline-block p-3 rounded-full mb-4">
            <GraduationCap className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Formation IT
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Montez en compétences avec nos formations professionnelles
          </p>
        </div>
      </section>

      {/* Description principale */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Formez-vous aux métiers de demain
              </h2>
              <p className="text-gray-600 mb-4">
                Chez <span className="font-semibold text-blue-900">COTECH SERVICES</span>, nous proposons des 
                formations professionnelles en informatique adaptées à tous les niveaux.
              </p>
              <p className="text-gray-600 mb-6">
                Que vous soyez débutant ou professionnel, nos formateurs expérimentés 
                vous accompagnent pour acquérir les compétences recherchées sur le marché 
                du travail. Formation en présentiel ou à distance.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition">
                  S'inscrire maintenant
                </Link>
                <Link href="#formations" className="px-6 py-3 border border-blue-900 text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Voir nos programmes
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/services/formation-detail.jpg"
                alt="Formation informatique"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Formations détaillées */}
      <section id="formations" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Nos programmes de formation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des cursus complets pour tous les profils
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {formations.map((formation, index) => {
              const Icon = formation.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition group">
                  <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-900 transition">
                    <Icon className="h-7 w-7 text-blue-900 group-hover:text-white transition" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{formation.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{formation.description}</p>
                  <ul className="space-y-2">
                    {formation.features.map((feature, idx) => (
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

      {/* Programmes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Durées et niveaux
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des programmes adaptés à vos objectifs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {programmes.map((programme, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition">
                <span className="font-semibold text-gray-900">{programme.name}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${programme.color}`}>
                  {programme.level}
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
              Notre méthodologie pédagogique
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Un apprentissage structuré et efficace
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
            Pourquoi choisir nos formations ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Formateurs experts</h3>
              <p className="text-gray-600">Des professionnels en activité</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pédagogie pratique</h3>
              <p className="text-gray-600">70% de travaux pratiques</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certification</h3>
              <p className="text-gray-600">Attestation de fin de formation</p>
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
                  "La formation en développement web m'a permis de changer de carrière. 
                  Les formateurs sont compétents et à l'écoute. Aujourd'hui, je travaille 
                  comme développeur full-stack dans une entreprise internationale."
                </p>
                <p className="font-bold text-blue-900">Mariama Diallo</p>
                <p className="text-gray-500 text-sm">Développeuse Full-Stack</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à faire évoluer votre carrière ?
          </h2>
          <p className="text-xl mb-8">
            Inscrivez-vous dès maintenant à nos formations
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              S'inscrire maintenant
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