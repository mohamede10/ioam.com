// app/formations/page.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";
import { 
  GraduationCap, 
  Code2, 
  Wifi, 
  Cpu, 
  Users, 
  Clock, 
  Award,
  ArrowRight,
  Laptop,
  Video,
  MapPin,
  BookOpen,
  Library,
  ChevronRight,
  Star,
  Calendar,
  Mail,
  Phone,
  User,
  MessageCircle,
  Database,
  Shield,
  Smartphone,
  PenTool,
  Cloud,
  BarChart,
  Figma,
  Terminal,
  Car,
  Bike,
  Wrench,
  Zap
} from "lucide-react";

// Types pour le formulaire
interface FormData {
  name: string;
  email: string;
  phone: string;
  formation: string;
  message: string;
}

// Types pour les formations
interface Formation {
  id: number;
  title: string;
  slug: string;
  icon: any;
  duration: string;
  description: string;
  image: string;
  level: string;
}

export default function Formations() {
  const formations: Formation[] = [
    // Formations existantes
    {
      id: 1,
      title: "Dév Web Full-Stack",
      slug: "developpement-web-fullstack",
      icon: Code2,
      duration: "120 heures",
      description: "Devenez développeur web professionnel en maîtrisant les technologies les plus recherchées du marché.",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&h=300&fit=crop",
      level: "Avancé"
    },
    {
      id: 2,
      title: "Réseaux & Sécurité",
      slug: "reseaux-securite-informatique",
      icon: Wifi,
      duration: "80 heures",
      description: "Maîtrisez l'infrastructure réseau et la sécurité des systèmes informatiques.",
      image: "/images/services/reseau/securite_cotech.png",
      level: "Intermédiaire"
    },
    {
      id: 3,
      title: "IoT & Systèmes Embarqués",
      slug: "iot-systemes-embarques",
      icon: Cpu,
      duration: "60 heures",
      description: "Créez des objets connectés avec Arduino, ESP32 et capteurs intelligents.",
      image: "/images/services/iot/slide_iot.png",
      level: "Intermédiaire"
    },
    {
      id: 4,
      title: "Informatique de base",
      slug: "bureautique-informatique-gestion",
      icon: Laptop,
      duration: "40 heures",
      description: "Maîtrisez les outils bureautiques essentiels pour le monde professionnel.",
      image: "/images/services/formation/cotech_design_salle.png",
      level: "Débutant"
    },
    // 8 formations précédentes
    {
      id: 5,
      title: "Data Science & IA",
      slug: "data-science-intelligence-artificielle",
      icon: Database,
      duration: "150 heures",
      description: "Apprenez les fondamentaux de la data science, machine learning et intelligence artificielle.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&h=300&fit=crop",
      level: "Avancé"
    },
    {
      id: 6,
      title: "Cybersécurité",
      slug: "cybersecurite",
      icon: Shield,
      duration: "100 heures",
      description: "Protégez les systèmes informatiques contre les menaces et les cyberattaques.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop",
      level: "Avancé"
    },
    {
      id: 7,
      title: "Développement Mobile",
      slug: "developpement-mobile",
      icon: Smartphone,
      duration: "90 heures",
      description: "Créez des applications iOS et Android avec React Native et Flutter.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      level: "Intermédiaire"
    },
    {
      id: 8,
      title: "UI/UX Design",
      slug: "ui-ux-design",
      icon: PenTool,
      duration: "70 heures",
      description: "Apprenez à concevoir des interfaces utilisateur intuitives et attractives.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&h=300&fit=crop",
      level: "Débutant"
    },
    {
      id: 9,
      title: "Cloud Computing",
      slug: "cloud-computing",
      icon: Cloud,
      duration: "80 heures",
      description: "Maîtrisez AWS, Azure et Google Cloud pour déployer vos applications.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=300&fit=crop",
      level: "Avancé"
    },
    {
      id: 10,
      title: "DevOps & CI/CD",
      slug: "devops-cicd",
      icon: Terminal,
      duration: "85 heures",
      description: "Automatisez le déploiement et la gestion d'applications avec Docker et Jenkins.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&h=300&fit=crop",
      level: "Avancé"
    },
    {
      id: 11,
      title: "Marketing Digital",
      slug: "marketing-digital",
      icon: BarChart,
      duration: "60 heures",
      description: "Maîtrisez le SEO, SEA, réseaux sociaux et stratégies digitales.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop",
      level: "Débutant"
    },
    {
      id: 12,
      title: "Design Graphique",
      slug: "design-graphique",
      icon: Figma,
      duration: "65 heures",
      description: "Créez des logos, affiches et supports visuels avec Photoshop et Illustrator.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&h=300&fit=crop",
      level: "Débutant"
    },
    // 4 NOUVELLES FORMATIONS : Électronique, Automobile, Moto, Maintenance
    {
      id: 13,
      title: "Électronique Générale",
      slug: "electronique-generale",
      icon: Zap,
      duration: "80 heures",
      description: "Apprenez les bases de l'électronique, composants, circuits imprimés et soudure professionnelle.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&h=300&fit=crop",
      level: "Débutant"
    },
    {
      id: 14,
      title: "Diagnostic Automobile",
      slug: "diagnostic-automobile",
      icon: Car,
      duration: "100 heures",
      description: "Maîtrisez le diagnostic électronique automobile, lecture des défauts et réparation des calculateurs.",
      image: "https://images.unsplash.com/photo-1486006920555-cfe460f9d48c?w=500&h=300&fit=crop",
      level: "Intermédiaire"
    },
    {
      id: 15,
      title: "Mécanique Moto",
      slug: "mecanique-moto",
      icon: Bike,
      duration: "70 heures",
      description: "Formation complète en mécanique moto : moteur, transmission, électricité et entretien.",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&h=300&fit=crop",
      level: "Débutant"
    },
    {
      id: 16,
      title: "Maintenance Informatique",
      slug: "maintenance-informatique",
      icon: Wrench,
      duration: "60 heures",
      description: "Apprenez à diagnostiquer, réparer et entretenir les ordinateurs et périphériques.",
      image: "https://images.unsplash.com/photo-1581092335871-2d5d00da4a8b?w=500&h=300&fit=crop",
      level: "Débutant"
    }
  ];

  return (
    <main>
      {/* Hero Section avec image en ligne */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/images/services/formation/cotech_design_salle.png"
          alt="Formations COTECH SERVICES"
          fill
          className="object-cover brightness-50"
          priority
          unoptimized
        />
        <div className="relative z-10 max-w-3xl px-4">
          <div className="bg-blue-900/20 backdrop-blur-sm inline-block p-3 rounded-full mb-4">
            <GraduationCap className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Nos Formations
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Montez en compétences avec nos programmes certifiants
          </p>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900">+800</div>
              <div className="text-gray-600">Apprenants formés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900">98%</div>
              <div className="text-gray-600">Taux de satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900">16+</div>
              <div className="text-gray-600">Programmes disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900">100%</div>
              <div className="text-gray-600">Certification offerte</div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages - Chaque avantage a sa propre page avec lien */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* 1. Bibliothèque - Lien vers page dédiée */}
            <Link href="/bibliotheque" className="group">
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg hover:shadow-lg transition cursor-pointer h-full">
                <Library className="h-8 w-8 text-blue-900 group-hover:scale-110 transition" />
                <div className="flex-1">
                  <p className="font-semibold">Bibliothèque numérique</p>
                  <p className="text-sm text-gray-600">Accédez à nos ressources et supports de cours</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-900" />
              </div>
            </Link>

            {/* 2. Formation en ligne - Lien vers page d'inscription */}
            <Link href="/formations/inscription" className="group">
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg hover:shadow-lg transition cursor-pointer h-full">
                <Video className="h-8 w-8 text-blue-900 group-hover:scale-110 transition" />
                <div className="flex-1">
                  <p className="font-semibold">Formation en ligne & présentielle</p>
                  <p className="text-sm text-gray-600">Inscription en ligne - Cliquez ici</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-900" />
              </div>
            </Link>

            {/* 3. Certification officielle - Lien vers page des étudiants certifiés */}
            <Link href="/formations/etudiants-certifies" className="group">
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg hover:shadow-lg transition cursor-pointer h-full">
                <Award className="h-8 w-8 text-blue-900 group-hover:scale-110 transition" />
                <div className="flex-1">
                  <p className="font-semibold">Certification officielle</p>
                  <p className="text-sm text-gray-600">+200 étudiants certifiés - Voir témoignages</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-900" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Liste des formations - 16 formations */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Des cursus adaptés à tous les niveaux
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              16 programmes certifiants pour booster votre carrière
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {formations.map((formation) => {
              const Icon = formation.icon;
              return (
                <div key={formation.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={formation.image}
                      alt={formation.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-500"
                      unoptimized
                    />
                    <div className="absolute top-2 right-2 bg-blue-900 text-white px-2 py-1 rounded text-xs">
                      {formation.duration}
                    </div>
                    <div className="absolute bottom-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded text-xs">
                      {formation.level}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-5 w-5 text-blue-900" />
                      <h3 className="font-bold text-gray-900 text-base line-clamp-1">{formation.title}</h3>
                    </div>
                    <p className="text-gray-600 text-xs mb-4 line-clamp-2">{formation.description}</p>
                    <Link
                      href={`/formations/${formation.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition text-sm"
                    >
                      Voir détails <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des atouts qui font la différence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="font-semibold mb-1">Formateurs experts</h3>
              <p className="text-sm text-gray-600">Des professionnels en activité</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Laptop className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="font-semibold mb-1">Pédagogie pratique</h3>
              <p className="text-sm text-gray-600">70% de travaux pratiques</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="font-semibold mb-1">Certification offerte</h3>
              <p className="text-sm text-gray-600">Attestation de formation</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="font-semibold mb-1">Horaires flexibles</h3>
              <p className="text-sm text-gray-600">Soir et week-end</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}