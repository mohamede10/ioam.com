"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  Award, 
  Star, 
  Calendar, 
  MapPin, 
  GraduationCap,
  ChevronRight,
  Search,
  Filter,
  Briefcase,
  Mail,
  Linkedin,
  Quote,
  Eye,
  X,
  Download,
  FileText
} from "lucide-react";

interface CertifiedStudent {
  id: number;
  name: string;
  formation: string;
  certificate: string;
  date: string;
  testimonial: string;
  rating: number;
  avatar: string;
  color: string;
  job?: string;
  linkedin?: string;
  certificateImage?: string;
  certificateNumber?: string;
}

export default function EtudiantsCertifies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFormation, setSelectedFormation] = useState("all");
  const [selectedStudent, setSelectedStudent] = useState<CertifiedStudent | null>(null);
  const [showModal, setShowModal] = useState(false);

  const certifiedStudents: CertifiedStudent[] = [
    {
      id: 1,
      name: "Mamadou Diallo",
      formation: "Développement Web Full-Stack",
      certificate: "Certifié Développeur Web",
      date: "Décembre 2024",
      testimonial: "Grâce à COTECH SERVICES, j'ai pu acquérir les compétences nécessaires pour devenir développeur web. Aujourd'hui, je travaille dans une entreprise de tech à Conakry. La formation était complète et les formateurs très compétents.",
      rating: 5,
      avatar: "M",
      color: "from-blue-600 to-blue-800",
      job: "Développeur Web chez Tech Guinée",
      linkedin: "#",
      certificateImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
      certificateNumber: "COTECH-2024-001"
    },
    {
      id: 2,
      name: "Aissatou Barry",
      formation: "Réseaux & Sécurité",
      certificate: "Certifiée Administratrice Réseau",
      date: "Novembre 2024",
      testimonial: "La formation était excellente ! Les formateurs sont très compétents et le programme est bien structuré. Je recommande vivement COTECH SERVICES à tous ceux qui veulent se lancer dans l'IT.",
      rating: 5,
      avatar: "A",
      color: "from-green-600 to-green-800",
      job: "Administratrice Réseau",
      linkedin: "#",
      certificateImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
      certificateNumber: "COTECH-2024-002"
    },
    {
      id: 3,
      name: "Ibrahima Camara",
      formation: "IoT & Systèmes Embarqués",
      certificate: "Certifié IoT Engineer",
      date: "Octobre 2024",
      testimonial: "Une formation pratique qui m'a permis de lancer mon propre projet de domotique. Le support après formation est également au rendez-vous. Je suis très satisfait.",
      rating: 5,
      avatar: "I",
      color: "from-purple-600 to-purple-800",
      job: "IoT Consultant",
      linkedin: "#",
      certificateImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
      certificateNumber: "COTECH-2024-003"
    },
    {
      id: 4,
      name: "Fatoumata Soumah",
      formation: "Informatique de base",
      certificate: "Certifiée Bureautique Avancée",
      date: "Septembre 2024",
      testimonial: "Avant la formation, je n'avais aucune notion d'informatique. Aujourd'hui, je maîtrise parfaitement les outils bureautiques. Merci à toute l'équipe pour leur patience.",
      rating: 5,
      avatar: "F",
      color: "from-red-600 to-red-800",
      job: "Assistante Administrative",
      linkedin: "#",
      certificateImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
      certificateNumber: "COTECH-2024-004"
    },
    {
      id: 5,
      name: "Sékou Touré",
      formation: "Développement Web Full-Stack",
      certificate: "Certifié Développeur Web",
      date: "Novembre 2024",
      testimonial: "Une formation de qualité avec des formateurs à l'écoute. J'ai pu décrocher un emploi juste après la certification.",
      rating: 5,
      avatar: "S",
      color: "from-orange-600 to-orange-800",
      job: "Freelance Web Developer",
      linkedin: "#",
      certificateImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
      certificateNumber: "COTECH-2024-005"
    },
    {
      id: 6,
      name: "Mariam Diallo",
      formation: "Réseaux & Sécurité",
      certificate: "Certifiée Sécurité Informatique",
      date: "Octobre 2024",
      testimonial: "La formation en sécurité informatique m'a ouvert beaucoup de portes. Les cours sont bien structurés et les TP très pertinents.",
      rating: 5,
      avatar: "M",
      color: "from-teal-600 to-teal-800",
      job: "Analyste Sécurité",
      linkedin: "#",
      certificateImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
      certificateNumber: "COTECH-2024-006"
    }
  ];

  const formations: string[] = ["all", ...Array.from(new Set(certifiedStudents.map(s => s.formation)))];
  
  const filteredStudents = certifiedStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          student.testimonial.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFormation = selectedFormation === "all" || student.formation === selectedFormation;
    return matchesSearch && matchesFormation;
  });

  const openCertificateModal = (student: CertifiedStudent) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedStudent(null);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/images/services/formation/cotech_design_salle.png"
          alt="Étudiants certifiés"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <div className="bg-blue-900/20 backdrop-blur-sm inline-block p-3 rounded-full mb-4">
            <Award className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Nos étudiants certifiés
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Découvrez les parcours de nos diplômés
          </p>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900">+120</div>
              <div className="text-gray-600">Étudiants certifiés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900">100%</div>
              <div className="text-gray-600">Taux de réussite</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900">4</div>
              <div className="text-gray-600">Programmes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900">98%</div>
              <div className="text-gray-600">Employabilité</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recherche et filtres */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un étudiant..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {formations.map((formation) => (
                <button
                  key={formation}
                  onClick={() => setSelectedFormation(formation)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                    selectedFormation === formation
                      ? "bg-blue-900 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {formation === "all" ? "Toutes les formations" : formation}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Liste des étudiants certifiés */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudents.map((student) => (
              <div key={student.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-4 text-white">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${student.color} flex items-center justify-center border-2 border-white`}>
                      <span className="text-white font-bold text-2xl">{student.avatar}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{student.name}</h3>
                      {student.job && (
                        <p className="text-sm text-blue-200 flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          {student.job}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="h-5 w-5 text-blue-900" />
                    <span className="font-semibold text-gray-900">{student.certificate}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <GraduationCap className="h-4 w-4" />
                    <span>{student.formation}</span>
                    <Calendar className="h-4 w-4 ml-2" />
                    <span>{student.date}</span>
                  </div>
                  
                  <div className="flex gap-1 mb-3">
                    {[...Array(student.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="relative mb-4">
                    <Quote className="absolute -top-2 -left-2 h-6 w-6 text-gray-200" />
                    <p className="text-gray-600 text-sm italic pl-4 line-clamp-3">
                      "{student.testimonial}"
                    </p>
                  </div>
                  
                  {/* Bouton Voir le certificat */}
                  <button
                    onClick={() => openCertificateModal(student)}
                    className="w-full mb-3 inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-100 text-blue-900 rounded-lg hover:bg-blue-200 transition text-sm font-medium"
                  >
                    <Eye className="h-4 w-4" />
                    Voir le certificat
                  </button>
                  
                  <div className="flex gap-3 pt-3 border-t">
                    {student.linkedin && (
                      <a href={student.linkedin} className="text-gray-400 hover:text-blue-900 transition">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    <a href={`mailto:${student.name.toLowerCase().replace(" ", ".")}@example.com`} className="text-gray-400 hover:text-blue-900 transition">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredStudents.length === 0 && (
            <div className="text-center py-12">
              <Award className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500">Aucun étudiant trouvé</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal - Affichage du certificat */}
      {showModal && selectedStudent && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-blue-900" />
                <h2 className="text-xl font-bold text-blue-900">Certificat de réussite</h2>
              </div>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              {/* Image du certificat */}
              <div className="relative mb-6 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src={selectedStudent.certificateImage || "/images/certificat-placeholder.jpg"}
                  alt={`Certificat de ${selectedStudent.name}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Informations du certificat */}
              <div className="space-y-4">
                <div className="text-center border-b pb-4">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">
                    {selectedStudent.certificate}
                  </h3>
                  <p className="text-gray-600">Délivré à <span className="font-semibold">{selectedStudent.name}</span></p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Numéro de certificat</p>
                    <p className="font-semibold text-gray-900">{selectedStudent.certificateNumber}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Date d'obtention</p>
                    <p className="font-semibold text-gray-900">{selectedStudent.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Formation suivie</p>
                    <p className="font-semibold text-gray-900">{selectedStudent.formation}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Note obtenue</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(selectedStudent.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800 text-center">
                    Ce certificat atteste que {selectedStudent.name} a suivi avec succès la formation 
                    "{selectedStudent.formation}" et a validé l'ensemble des compétences requises.
                  </p>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => window.print()}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50 transition"
                  >
                    <Download className="h-4 w-4" />
                    Imprimer
                  </button>
                  <button
                    onClick={closeModal}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-10 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Vous aussi, devenez certifié !
          </h2>
          <p className="text-lg mb-6">
            Rejoignez notre communauté d'étudiants certifiés
          </p>
          <Link
            href="/formations/inscription"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            S'inscrire maintenant <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}