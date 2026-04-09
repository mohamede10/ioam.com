"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { 
  GraduationCap, 
  Code2, 
  Wifi, 
  Cpu, 
  Laptop,
  Clock, 
  Award,
  CheckCircle,
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  BookOpen,
  Target,
  Star,
  Mail,
  Phone,
  User,
  X,
  Video,
  CalendarDays,
  Wallet,
  TrendingUp
} from "lucide-react";

// Données des formations avec TOUTES les infos
const formationsData = {
  "developpement-web-fullstack": {
    id: 1,
    title: "Développement Web Full-Stack",
    slug: "developpement-web-fullstack",
    icon: Code2,
    duration: "120 heures",
    price: "850 000 GNF",
    mode: ["presentiel", "en-ligne"],
    level: "Débutant à Avancé",
    places: 15,
    startDate: "15 Mai 2026",
    schedule: "Lundi - Vendredi (18h-21h)",
    description: "Devenez développeur web professionnel en maîtrisant les technologies les plus recherchées du marché.",
    fullDescription: "Cette formation complète vous permettra de maîtriser le développement web front-end et back-end. Vous apprendrez à créer des sites web et applications dynamiques de A à Z, avec une approche pratique et orientée projet.",
    program: [
      "HTML5, CSS3, JavaScript ES6",
      "React.js et Next.js",
      "Node.js et Express",
      "Bases de données (MongoDB, MySQL)",
      "API REST et GraphQL",
      "Git et Github",
      "Déploiement et hébergement"
    ],
    prerequisites: "Bases de l'informatique, logique de programmation",
    certification: "Certificat de formation reconnu",
    image: "/images/services/formation/study-group-african-people.jpg",
    teacher: {
      name: "M. Mamadou Diallo",
      bio: "Expert full-stack avec 8 ans d'expérience dans le développement web",
      image: "/images/teachers/teacher1.jpg"
    },
    objectives: [
      "Maîtriser les technologies front-end et back-end",
      "Créer des applications web complètes",
      "Utiliser les frameworks modernes",
      "Déployer des projets en production"
    ]
  },
  "reseaux-securite-informatique": {
    id: 2,
    title: "Réseaux & Sécurité Informatique",
    slug: "reseaux-securite-informatique",
    icon: Wifi,
    duration: "80 heures",
    price: "650 000 GNF",
    mode: ["presentiel", "en-ligne"],
    level: "Intermédiaire",
    places: 12,
    startDate: "10 Juin 2026",
    schedule: "Samedi (9h-17h)",
    description: "Maîtrisez l'infrastructure réseau et la sécurité des systèmes informatiques.",
    fullDescription: "Formation complète sur l'administration réseau, la configuration d'équipements Cisco, et la mise en place de solutions de sécurité pour protéger votre infrastructure.",
    program: [
      "Concepts réseau (TCP/IP, OSI)",
      "Configuration Cisco (routeurs, switches)",
      "Firewall et VPN",
      "Sécurité des systèmes",
      "Virtualisation (VMware)",
      "Surveillance et monitoring"
    ],
    prerequisites: "Connaissances de base en informatique",
    certification: "Certificat de formation reconnu",
    image: "/images/formations/reseau.jpg",
    teacher: {
      name: "Mme Aissatou Barry",
      bio: "Ingénieure réseau certifiée Cisco avec 10 ans d'expérience",
      image: "/images/teachers/teacher2.jpg"
    },
    objectives: [
      "Administrer un réseau d'entreprise",
      "Configurer des équipements Cisco",
      "Mettre en place une sécurité réseau",
      "Diagnostiquer et résoudre les pannes"
    ]
  },
  "iot-systemes-embarques": {
    id: 3,
    title: "IoT & Systèmes Embarqués",
    slug: "iot-systemes-embarques",
    icon: Cpu,
    duration: "60 heures",
    price: "550 000 GNF",
    mode: ["presentiel"],
    level: "Intermédiaire",
    places: 10,
    startDate: "5 Juillet 2026",
    schedule: "Mercredi et Vendredi (18h-21h)",
    description: "Créez des objets connectés avec Arduino et ESP32.",
    fullDescription: "Initiez-vous à l'Internet des Objets en construisant des projets concrets. Programmation, capteurs, actionneurs, et communication sans fil pour créer des solutions innovantes.",
    program: [
      "Introduction à l'IoT",
      "Arduino et ESP32",
      "Capteurs et actionneurs",
      "Communication MQTT",
      "Programmation embarquée",
      "Projets pratiques"
    ],
    prerequisites: "Bases de programmation",
    certification: "Certificat de formation reconnu",
    image: "/images/formations/iot.jpg",
    teacher: {
      name: "M. Ibrahima Camara",
      bio: "Spécialiste IoT et systèmes embarqués, 7 ans d'expérience",
      image: "/images/teachers/teacher3.jpg"
    },
    objectives: [
      "Programmer des microcontrôleurs",
      "Connecter des capteurs et actionneurs",
      "Créer des objets connectés",
      "Développer des applications IoT"
    ]
  },
  "bureautique-informatique-gestion": {
    id: 4,
    title: "Bureautique & Informatique de Gestion",
    slug: "bureautique-informatique-gestion",
    icon: Laptop,
    duration: "40 heures",
    price: "350 000 GNF",
    mode: ["presentiel", "en-ligne"],
    level: "Débutant",
    places: 20,
    startDate: "20 Mai 2026",
    schedule: "Lundi - Jeudi (9h-12h)",
    description: "Maîtrisez les outils bureautiques essentiels pour le monde professionnel.",
    fullDescription: "Formation pratique sur la suite Microsoft Office et les bases de l'informatique de gestion pour améliorer votre productivité au travail.",
    program: [
      "Word (traitement de texte)",
      "Excel (tableurs, formules)",
      "PowerPoint (présentations)",
      "Outlook (email)",
      "Gestion de fichiers",
      "Internet et sécurité"
    ],
    prerequisites: "Aucun prérequis",
    certification: "Certificat de formation reconnu",
    image: "/images/formations/bureautique.jpg",
    teacher: {
      name: "Mme Fatoumata Soumah",
      bio: "Formatrice certifiée Microsoft, 12 ans d'expérience",
      image: "/images/teachers/teacher4.jpg"
    },
    objectives: [
      "Maîtriser les outils Office",
      "Créer des documents professionnels",
      "Analyser des données avec Excel",
      "Gérer efficacement ses emails"
    ]
  }
};

export default function FormationDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const formation = formationsData[slug as keyof typeof formationsData];
  
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    mode: "presentiel",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!formation) {
    notFound();
  }

  const Icon = formation.icon;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setShowModal(false);
        setFormData({ nom: "", email: "", telephone: "", mode: "presentiel", message: "" });
      }, 2000);
    }, 1500);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center text-center">
        <Image
          src={formation.image}
          alt={formation.title}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <div className="bg-blue-900/20 backdrop-blur-sm inline-block p-3 rounded-full mb-4">
            <Icon className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            {formation.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            {formation.description}
          </p>
        </div>
      </section>

      {/* Informations clés - TOUTES les infos ici */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
            <div className="text-center p-3">
              <Clock className="h-6 w-6 text-blue-900 mx-auto mb-2" />
              <p className="font-semibold text-sm">Durée</p>
              <p className="text-xs text-gray-600">{formation.duration}</p>
            </div>
            <div className="text-center p-3">
              <TrendingUp className="h-6 w-6 text-blue-900 mx-auto mb-2" />
              <p className="font-semibold text-sm">Niveau</p>
              <p className="text-xs text-gray-600">{formation.level}</p>
            </div>
            <div className="text-center p-3">
              <CalendarDays className="h-6 w-6 text-blue-900 mx-auto mb-2" />
              <p className="font-semibold text-sm">Début</p>
              <p className="text-xs text-gray-600">{formation.startDate}</p>
            </div>
            <div className="text-center p-3">
              <Clock className="h-6 w-6 text-blue-900 mx-auto mb-2" />
              <p className="font-semibold text-sm">Horaire</p>
              <p className="text-xs text-gray-600">{formation.schedule}</p>
            </div>
            <div className="text-center p-3">
              <MapPin className="h-6 w-6 text-blue-900 mx-auto mb-2" />
              <p className="font-semibold text-sm">Modes</p>
              <div className="flex flex-wrap justify-center gap-1 mt-1">
                {formation.mode.includes("presentiel") && (
                  <span className="bg-green-100 text-green-800 text-xs px-1 py-0.5 rounded">Présentiel</span>
                )}
                {formation.mode.includes("en-ligne") && (
                  <span className="bg-purple-100 text-purple-800 text-xs px-1 py-0.5 rounded">En ligne</span>
                )}
              </div>
            </div>
            <div className="text-center p-3">
              <Users className="h-6 w-6 text-blue-900 mx-auto mb-2" />
              <p className="font-semibold text-sm">Places</p>
              <p className="text-xs text-gray-600">{formation.places}</p>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <Wallet className="h-6 w-6 text-blue-900 mx-auto mb-2" />
              <p className="font-semibold text-sm">Prix</p>
              <p className="text-xs font-bold text-blue-900">{formation.price}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Colonne gauche - Description */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed">{formation.fullDescription}</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Programme de la formation</h2>
                <ul className="grid md:grid-cols-2 gap-3">
                  {formation.program.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Objectifs de la formation</h2>
                <ul className="grid md:grid-cols-2 gap-3">
                  {formation.objectives.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Target className="h-5 w-5 text-blue-900 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Prérequis</h2>
                <p className="text-gray-700">{formation.prerequisites}</p>
              </div>
            </div>

            {/* Colonne droite - Inscription */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow sticky top-24">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Inscription</h3>
                
                <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">Prix de la formation</p>
                  <p className="text-2xl font-bold text-blue-900">{formation.price}</p>
                </div>

                <div className="mb-4">
                  <p className="font-semibold mb-2">Modes disponibles</p>
                  <div className="flex flex-wrap gap-2">
                    {formation.mode.includes("presentiel") && (
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> Présentiel
                      </span>
                    )}
                    {formation.mode.includes("en-ligne") && (
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        <Video className="h-3 w-3" /> En ligne
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="font-semibold mb-2">Formateur</p>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-blue-900" />
                    </div>
                    <div>
                      <p className="font-medium">{formation.teacher.name}</p>
                      <p className="text-xs text-gray-500">{formation.teacher.bio}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setShowModal(true)}
                  className="w-full py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition"
                >
                  S'inscrire maintenant
                </button>

                <p className="text-xs text-gray-400 text-center mt-4">
                  Places limitées à {formation.places} participants
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal d'inscription */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold text-blue-900">Inscription à la formation</h3>
              <button onClick={() => setShowModal(false)} className="p-1 hover:bg-gray-100 rounded-full">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold text-blue-900">{formation.title}</h4>
                <div className="flex flex-wrap gap-4 mt-2 text-sm">
                  <span>📅 {formation.startDate}</span>
                  <span>⏱️ {formation.duration}</span>
                  <span>💰 {formation.price}</span>
                </div>
              </div>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-400 text-green-700 p-6 rounded-lg text-center">
                  <CheckCircle className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="text-xl font-bold mb-2">Inscription envoyée !</h3>
                  <p>Nous vous contacterons dans les plus brefs délais pour finaliser votre inscription.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-900"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-900"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                    <input
                      type="tel"
                      required
                      className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-900"
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mode de formation *</label>
                    <div className="flex gap-4">
                      {formation.mode.includes("presentiel") && (
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            value="presentiel"
                            checked={formData.mode === "presentiel"}
                            onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                            className="text-blue-900"
                          />
                          <span>Présentiel</span>
                        </label>
                      )}
                      {formation.mode.includes("en-ligne") && (
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            value="en-ligne"
                            checked={formData.mode === "en-ligne"}
                            onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                            className="text-blue-900"
                          />
                          <span>En ligne</span>
                        </label>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message (optionnel)</label>
                    <textarea
                      rows={3}
                      className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-900"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Questions ou remarques..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition disabled:opacity-50"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma candidature"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}