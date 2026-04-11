"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Award,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Download,
  CheckCircle,
  Star,
  Users,
  Rocket,
  TrendingUp,
  Heart,
  Lightbulb,
  Target,
  Database,
  Cpu,
  Layout,
  Server,
  Globe,
  Laptop
} from "lucide-react";

export default function Profil() {
  const [activeTab, setActiveTab] = useState("experience");

  // Informations personnelles
  const personalInfo = {
    name: "Mohamed Kolomba Camara",
    title: "Développeur Web Full-Stack | Spécialiste IoT & Solutions Digitales",
    email: "mohamedkc237@gmail.com",
    phone: "+224 628 811 827",
    location: "Conakry, Guinée",
    birthDate: "20 Décembre 1999",
    nationality: "Guinéenne",
    bio: "Développeur web spécialisé dans la création de solutions numériques innovantes. Passionné par les technologies modernes telles que HTML/CSS, JavaScript, PHP, Python et les systèmes embarqués IoT. Je conçois des applications performantes et adaptées aux besoins des entreprises et particuliers.",
    avatar: "/images/profil/profil.jpg",
    cover: "/images/profil/profil_slide.jpg"
  };

  // Expériences professionnelles
  const experiences = [
    {
      id: 1,
      title: "Stagiaire Développeur",
      company: "NovTec",
      location: "Guinée",
      period: "Février - Avril 2025",
      description: "Développement de solutions avec l'outil ODOO.",
      achievements: [
        "Utilisation de plusieurs modules ODOO",
        "Création d'une plateforme e-learning",
        "Développement de sites web professionnels",
        "Intégration de solutions de gestion d'entreprise"
      ],
      technologies: ["ODOO", "Python", "PostgreSQL", "JavaScript"]
    },
    {
      id: 2,
      title: "Assistant Technique",
      company: "SOLUGUITECH-GUINEE",
      location: "Siguiri, Guinée",
      period: "Octobre - Novembre 2024",
      description: "Installation de systèmes de sécurité et suivi GPS.",
      achievements: [
        "Installation de caméras de surveillance",
        "Configuration de systèmes GPS & GSM",
        "Mise en place de suivi en temps réel",
        "Maintenance des équipements installés"
      ],
      technologies: ["GPS Tracking", "GSM", "Caméras IP", "Configuration réseau"]
    },
    {
      id: 3,
      title: "Analyste de Données",
      company: "Cabinet CaGeFed",
      location: "Labé, Guinée",
      period: "Mars - Avril 2023",
      description: "Analyse et traitement de données pour le cabinet.",
      achievements: [
        "Collecte et traitement de données",
        "Analyse statistique",
        "Rapports et présentations",
        "Attestation de Satisfecit obtenue"
      ],
      technologies: ["Excel", "Python", "Power BI"]
    },
    {
      id: 4,
      title: "Formateur en Informatique",
      company: "CFPI",
      location: "Guinée",
      period: "2019 - 2020",
      description: "Formation en informatique de base.",
      achievements: [
        "Enseignement de l'informatique fondamentale",
        "Formation de groupes d'étudiants",
        "Évaluation et suivi des apprenants",
        "Satisfecit obtenu"
      ],
      technologies: ["Bureautique", "Windows", "Internet", "Maintenance"]
    }
  ];

  // Formations académiques
  const formations = [
    {
      id: 1,
      title: "Licence en Informatique",
      school: "Université de Labé",
      location: "Labé, Guinée",
      period: "2021 - 2024",
      description: "Programme Informatique - Formation complète en développement et technologies.",
      achievements: [
        "Diplôme de Licence en Informatique",
        "Développement d'applications web et mobiles",
        "Projets académiques réalisés",
        "Participation au concours de codage ODC"
      ]
    },
    {
      id: 2,
      title: "Baccalauréat Unique",
      school: "Lycée Marien N'Gouabi",
      location: "Kankan, Guinée",
      period: "2019 - 2021",
      description: "Série Sciences Mathématiques",
      achievements: [
        "Baccalauréat Unique",
        "Spécialité Sciences Mathématiques",
        "Admission à l'Université"
      ]
    },
    {
      id: 3,
      title: "Brevet d'Etudes du Premier Cycle (BEPC)",
      school: "Collège Fidel Castro",
      location: "Kissidougou, Guinée",
      period: "2016 - 2019",
      description: "Diplôme de fin d'études du premier cycle secondaire",
      achievements: [
        "Diplôme du BEPC",
        "Admission en classe de Seconde"
      ]
    },
    {
      id: 4,
      title: "Certificat d'Etudes Primaires (CEP)",
      school: "École Primaire Sanoyah Rails",
      location: "Coyah, Guinée",
      period: "2003 - 2013",
      description: "Diplôme de fin d'études primaires",
      achievements: [
        "Diplôme du CEP",
        "Admission en 7ème année"
      ]
    }
  ];

  // Certifications professionnelles
  const certifications = [
    { name: "Certification Python 3", issuer: "Codingame", date: "Septembre 2024", icon: "🐍" },
    { name: "Certification en Électronique", issuer: "CJP - Université de Labé", date: "Juin 2024", icon: "🔌" },
    { name: "Certification en JavaScript", issuer: "Codingame", date: "Janvier 2024", icon: "📜" },
    { name: "Formation en Entrepreneuriat", issuer: "FIDUXIS", date: "Juin 2024", icon: "💼" },
    { name: "Formation en Entrepreneuriat", issuer: "ODC - Université de Labé", date: "Mai 2024", icon: "🎓" },
    { name: "Formation en Communication Publique", issuer: "Certificat", date: "Février 2021", icon: "🎙️" },
    { name: "Informatique de base et Maintenance", issuer: "CFPI", date: "2018-2019", icon: "💻" }
  ];

  // Compétences techniques
  const technicalSkills = [
    { name: "HTML/CSS", level: 90, category: "frontend" },
    { name: "JavaScript", level: 85, category: "frontend" },
    { name: "PHP", level: 80, category: "backend" },
    { name: "Python", level: 85, category: "backend" },
    { name: "ODOO", level: 75, category: "backend" },
    { name: "MySQL/PostgreSQL", level: 80, category: "database" },
    { name: "Arduino", level: 85, category: "iot" },
    { name: "React/Next.js", level: 75, category: "frontend" },
    { name: "TailwindCSS", level: 80, category: "frontend" },
    { name: "Git/GitHub", level: 75, category: "devops" }
  ];

  // Langues
  const languages = [
    { name: "Français", level: "Standard", levelValue: 85 },
    { name: "Malinké", level: "Natif", levelValue: 100 },
    { name: "Soussou", level: "Courant", levelValue: 80 }
  ];

  // Projets réalisés
  const personalProjects = [
    { 
      name: "Application de gestion de données de la scolarité UL", 
      description: "Application complète pour la gestion des étudiants, notes et inscriptions à l'Université de Labé", 
      technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
      date: "Juillet 2025"
    },
    { 
      name: "Application de gestion commerciale - Menswearbyml", 
      description: "Solution de gestion pour commerce de vêtements", 
      technologies: ["PHP", "MySQL", "Bootstrap"],
      date: "Juin 2025"
    },
    { 
      name: "Plateforme e-learning & Site web ODOO", 
      description: "Création d'une plateforme e-learning avec ODOO", 
      technologies: ["ODOO", "Python", "PostgreSQL"],
      date: "Février-Mars 2025"
    },
    { 
      name: "Plateforme de gestion des étudiants - Dép_Informatique", 
      description: "Site web de gestion des étudiants du département informatique (www.ecopresguinee.shop)", 
      technologies: ["Next.js", "TailwindCSS", "MongoDB"],
      date: "Avril 2025",
      link: "http://www.ecopresguinee.shop"
    },
    { 
      name: "Application de gestion de facture - LAMAMTECH", 
      description: "Application de facturation et gestion commerciale", 
      technologies: ["JavaScript", "PHP", "MySQL"],
      date: "Novembre 2024"
    },
    { 
      name: "Application de gestion de papeterie - ECOPRESS LABE", 
      description: "Gestion des stocks et ventes pour papeterie", 
      technologies: ["PHP", "MySQL", "TailwindCSS"],
      date: "Juillet 2024"
    },
    { 
      name: "Site web ONG Aprodej Guinée", 
      description: "Site vitrine pour l'ONG Aprodej Guinée", 
      technologies: ["WordPress", "PHP", "CSS"],
      date: "Mai 2023",
      link: "www.aprodejguinee.org"
    }
  ];

  // Projets IoT (Simulations)
  const iotProjects = [
    { name: "Détecteur d'incendie", description: "Simulation d'un système de détection d'incendie avec Arduino", technologies: ["Arduino", "Capteurs"] },
    { name: "Poubelle intelligente", description: "Simulation d'une poubelle connectée avec ouverture automatique", technologies: ["Arduino", "Servomoteur"] },
    { name: "Appareil de surveillance nocturne", description: "Système de surveillance avec détection de mouvement", technologies: ["Arduino", "Capteur IR"] }
  ];

  // Événements et participations
  const events = [
    { name: "Concours national et international du codage", organizer: "Orange Digital Center (ODC)", date: "Janvier 2024" }
  ];

  // Statistiques
  const achievements = [
    { value: "10+", label: "Projets livrés", icon: Rocket },
    { value: "98%", label: "Satisfaction", icon: Star },
    { value: "7", label: "Certifications", icon: Award },
    { value: "50+", label: "Personnes formées", icon: Users }
  ];

  // Filiation
  const filiation = {
    pere: "Alamako Camara",
    mere: "Fanta Camara"
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-80 md:h-90 w-full overflow-hidden">
          <Image
            src={personalInfo.cover || "/images/apropos/pdg.jpg"}
            alt="Cover"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative -mt-20 md:-mt-24">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white bg-white overflow-hidden shadow-lg">
                <Image
                  src={personalInfo.avatar || "/images/profil/default-avatar.jpg"}
                  alt={personalInfo.name}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{personalInfo.name}</h1>
              <p className="text-xl text-blue-900 font-semibold mt-1">{personalInfo.title}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3 text-gray-500 text-sm">
                <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {personalInfo.location}</span>
                <span className="flex items-center gap-1"><Mail className="h-4 w-4" /> {personalInfo.email}</span>
                <span className="flex items-center gap-1"><Phone className="h-4 w-4" /> {personalInfo.phone}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="/cv-mohamed-camara.pdf" download className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition">
                <Download className="h-4 w-4" /> CV
              </a>
              <Link href="/contact" className="px-4 py-2 border border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50 transition">
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bio et infos personnelles */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-gray-600">
                {personalInfo.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-8 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon className="h-6 w-6 text-blue-900" />
                  </div>
                  <div className="text-2xl font-bold text-blue-900">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Onglets */}
      <section className="py-4 bg-gray-50 sticky top-0 z-30 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: "experience", label: "Expériences", icon: Briefcase },
              { id: "formation", label: "Formations", icon: GraduationCap },
              { id: "skills", label: "Compétences", icon: Code2 },
              { id: "certifications", label: "Certifications", icon: Award },
              { id: "projects", label: "Projets", icon: Rocket },
              { id: "iot", label: "IoT", icon: Cpu }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                    activeTab === tab.id
                      ? "bg-blue-900 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expériences */}
      {activeTab === "experience" && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-blue-900" />
              Parcours professionnel
            </h2>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-8 pb-8 border-l-2 border-blue-200 last:pb-0">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-900"></div>
                  <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {exp.period}
                      </span>
                    </div>
                    <p className="text-blue-900 font-semibold mb-2">{exp.company} • {exp.location}</p>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Formations */}
      {activeTab === "formation" && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-blue-900" />
              Parcours académique
            </h2>
            <div className="space-y-8">
              {formations.map((formation) => (
                <div key={formation.id} className="relative pl-8 pb-8 border-l-2 border-blue-200 last:pb-0">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-900"></div>
                  <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{formation.title}</h3>
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {formation.period}
                      </span>
                    </div>
                    <p className="text-blue-900 font-semibold mb-2">{formation.school} • {formation.location}</p>
                    <p className="text-gray-600 mb-3">{formation.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {formation.achievements.map((ach, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          {ach}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Compétences */}
      {activeTab === "skills" && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
              <Code2 className="h-6 w-6 text-blue-900" />
              Compétences techniques
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Layout className="h-5 w-5 text-blue-900" /> Frontend
                </h3>
                {technicalSkills.filter(s => s.category === "frontend").map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-900 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Server className="h-5 w-5 text-blue-900" /> Backend & Base de données
                </h3>
                {technicalSkills.filter(s => s.category === "backend" || s.category === "database").map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-900 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Cpu className="h-5 w-5 text-blue-900" /> IoT & Embarqué
            </h3>
            {technicalSkills.filter(s => s.category === "iot").map((skill, index) => (
              <div key={index} className="mb-4 w-full md:w-1/2">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-900 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}

            <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-4 flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-900" /> Langues
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {languages.map((lang, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p className="font-semibold text-gray-900">{lang.name}</p>
                  <div className="mt-2 flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i < Math.round(lang.levelValue / 20) ? "bg-blue-900" : "bg-gray-300"}`}></div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certifications */}
      {activeTab === "certifications" && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
              <Award className="h-6 w-6 text-blue-900" />
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
                  <div className="text-4xl mb-3">{cert.icon}</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{cert.name}</h3>
                  <p className="text-sm text-gray-500">{cert.issuer}</p>
                  <p className="text-xs text-gray-400 mt-2">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projets */}
      {activeTab === "projects" && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
              <Rocket className="h-6 w-6 text-blue-900" />
              Projets réalisés
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {personalProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{project.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{project.date}</p>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-900 text-sm hover:underline">
                      Voir le site →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projets IoT */}
      {activeTab === "iot" && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
              <Cpu className="h-6 w-6 text-blue-900" />
              Projets IoT (Simulations Arduino)
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {iotProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{project.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Événements */}
            <div className="mt-12 bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Star className="h-5 w-5" />
                Événements et concours
              </h3>
              {events.map((event, index) => (
                <div key={index} className="mb-2">
                  <p className="font-medium">{event.name}</p>
                  <p className="text-sm text-gray-600">{event.organizer} - {event.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact rapide */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-2xl font-bold mb-4">Intéressé par mon profil ?</h3>
          <p className="mb-6">N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="px-6 py-2 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition">
              Me contacter
            </Link>
            <a href="/cv-mohamed-camara.pdf" download className="px-6 py-2 border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition">
              Télécharger mon CV
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}