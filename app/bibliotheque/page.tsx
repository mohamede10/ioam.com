"use client";
import Image from "next/image";
import { useState } from "react";
import { 
  Search, 
  BookOpen, 
  Code2, 
  Database, 
  Cpu, 
  Globe,
  ExternalLink,
  Download,
  Video,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function Bibliotheque() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAllBooks, setShowAllBooks] = useState(false);

  // Livres Informatique
  const books = [
    {
      id: 1,
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      category: "programming",
      cover: "/images/books/clean-code.jpg",
      description: "Les meilleures pratiques pour écrire du code propre et maintenable.",
      link: "#",
      level: "Intermédiaire"
    },
    {
      id: 2,
      title: "Introduction to Algorithms (CLRS)",
      author: "Thomas H. Cormen, Charles E. Leiserson",
      category: "algorithms",
      cover: "/images/books/clrs.jpg",
      description: "La référence absolue en algorithmique et structures de données.",
      link: "#",
      level: "Avancé"
    },
    {
      id: 3,
      title: "The Pragmatic Programmer",
      author: "David Thomas, Andrew Hunt",
      category: "programming",
      cover: "/images/books/pragmatic.jpg",
      description: "De votre apprenti à maître artisan du développement logiciel.",
      link: "#",
      level: "Intermédiaire"
    },
    {
      id: 4,
      title: "Design Patterns: Elements of Reusable OOP",
      author: "Erich Gamma, Richard Helm",
      category: "design-patterns",
      cover: "/images/books/design-patterns.jpg",
      description: "Les 23 patrons de conception essentiels pour les développeurs.",
      link: "#",
      level: "Avancé"
    },
    {
      id: 5,
      title: "You Don't Know JS Yet",
      author: "Kyle Simpson",
      category: "web",
      cover: "/images/books/you-dont-know-js.jpg",
      description: "Maîtrisez JavaScript en profondeur.",
      link: "#",
      level: "Débutant à Avancé"
    },
    {
      id: 6,
      title: "Database System Concepts",
      author: "Abraham Silberschatz, Henry F. Korth",
      category: "database",
      cover: "/images/books/database.jpg",
      description: "Les fondamentaux des systèmes de bases de données.",
      link: "#",
      level: "Intermédiaire"
    },
    {
      id: 7,
      title: "Operating System Concepts",
      author: "Abraham Silberschatz, Peter B. Galvin",
      category: "os",
      cover: "/images/books/os.jpg",
      description: "Les concepts clés des systèmes d'exploitation.",
      link: "#",
      level: "Avancé"
    },
    {
      id: 8,
      title: "Computer Networking: A Top-Down Approach",
      author: "James F. Kurose, Keith W. Ross",
      category: "networking",
      cover: "/images/books/networking.jpg",
      description: "Les fondamentaux des réseaux informatiques.",
      link: "#",
      level: "Intermédiaire"
    },
    {
      id: 9,
      title: "Structure and Interpretation of Computer Programs (SICP)",
      author: "Harold Abelson, Gerald Jay Sussman",
      category: "programming",
      cover: "/images/books/sicp.jpg",
      description: "Les principes fondamentaux de la programmation.",
      link: "#",
      level: "Avancé"
    },
    {
      id: 10,
      title: "The Mythical Man-Month",
      author: "Frederick P. Brooks Jr.",
      category: "management",
      cover: "/images/books/mythical.jpg",
      description: "Essais sur le génie logiciel et la gestion de projet.",
      link: "#",
      level: "Débutant"
    },
    {
      id: 11,
      title: "Refactoring: Improving the Design of Existing Code",
      author: "Martin Fowler",
      category: "programming",
      cover: "/images/books/refactoring.jpg",
      description: "Améliorez la qualité de votre code existant.",
      link: "#",
      level: "Intermédiaire"
    },
    {
      id: 12,
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell, Peter Norvig",
      category: "ai",
      cover: "/images/books/ai.jpg",
      description: "La référence en intelligence artificielle.",
      link: "#",
      level: "Avancé"
    }
  ];

  // Catégories
  const categories = [
    { id: "all", name: "Tous les livres", icon: BookOpen },
    { id: "programming", name: "Programmation", icon: Code2 },
    { id: "algorithms", name: "Algorithmes", icon: Cpu },
    { id: "web", name: "Développement Web", icon: Globe },
    { id: "database", name: "Bases de données", icon: Database },
    { id: "networking", name: "Réseaux", icon: Globe },
    { id: "ai", name: "IA & Machine Learning", icon: Cpu },
    { id: "design-patterns", name: "Design Patterns", icon: Code2 },
    { id: "management", name: "Gestion de projet", icon: BookOpen },
  ];

  // Ressources en ligne
 const resources = [
  { name: "MDN Web Docs", url: "https://developer.mozilla.org/", category: "web", description: "Documentation complète pour le développement web" },
  { name: "GitHub Learning Lab", url: "https://lab.github.com/", category: "devops", description: "Apprenez Git et GitHub gratuitement" },
  { name: "Stack Overflow", url: "https://stackoverflow.com/", category: "community", description: "Communauté de développeurs" },
  { name: "Coursera Informatique", url: "https://www.coursera.org/browse/computer-science", category: "courses", description: "Cours en ligne des meilleures universités" },
  { name: "MIT OpenCourseWare CS", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/", category: "courses", description: "Cours gratuits du MIT" },
  { name: "LeetCode", url: "https://leetcode.com/", category: "practice", description: "Entraînez-vous aux entretiens techniques" },
  { name: "HackerRank", url: "https://www.hackerrank.com/", category: "practice", description: "Défis de programmation" },
  { name: "W3Schools", url: "https://www.w3schools.com/", category: "web", description: "Tutoriels pour développeurs web" },
  { name: "FreeCodeCamp", url: "https://www.freecodecamp.org/", category: "courses", description: "Apprenez à coder gratuitement" },
  { name: "GitHub", url: "https://github.com/", category: "devops", description: "Plateforme de développement collaboratif" },
  { name: "Codecademy", url: "https://www.codecademy.com/", category: "courses", description: "Apprentissage interactif du code" },
  { name: "DevDocs", url: "https://devdocs.io/", category: "web", description: "Documentation API rapide pour développeurs" },
];

  // Vidéos recommandées
  const videos = [
    {
      id: 1,
      title: "Introduction au développement web moderne",
      channel: "COTECH Services",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "15:30"
    },
    {
      id: 2,
      title: "Les bases de l'algorithmique",
      channel: "COTECH Services",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "22:15"
    },
    {
      id: 3,
      title: "Découvrez React.js en 30 minutes",
      channel: "COTECH Services",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "28:45"
    }
  ];

  // Filtrer les livres
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const displayedBooks = showAllBooks ? filteredBooks : filteredBooks.slice(0, 6);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center text-center">
        <Image
          src="/images/bibliotheque-banner.jpg"
          alt="Bibliothèque Informatique COTECH SERVICES"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Bibliothèque Informatique
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Ressources gratuites pour apprendre et se perfectionner en informatique
          </p>
        </div>
      </section>

      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Barre de recherche et filtres */}
        <div className="mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Rechercher un livre ou un auteur..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Catégories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition ${
                    isActive
                      ? "bg-blue-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Livres */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Livres recommandés
            </h2>
            <p className="text-sm text-gray-500">{filteredBooks.length} livres trouvés</p>
          </div>
          
          {filteredBooks.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">Aucun livre ne correspond à votre recherche.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedBooks.map((book) => (
                  <div
                    key={book.id}
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden group"
                  >
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      {book.cover ? (
                        <Image
                          src={book.cover}
                          alt={book.title}
                          fill
                          className="object-cover group-hover:scale-105 transition duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-blue-100">
                          <BookOpen className="h-16 w-16 text-blue-300" />
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-blue-900 mb-1 line-clamp-2">
                        {book.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">par {book.author}</p>
                      <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                        {book.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {book.level}
                        </span>
                        <a
                          href={book.link}
                          className="inline-flex items-center gap-1 text-blue-900 font-medium hover:underline text-sm"
                        >
                          Consulter <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bouton Voir plus */}
              {filteredBooks.length > 6 && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowAllBooks(!showAllBooks)}
                    className="inline-flex items-center gap-2 px-6 py-2 border border-blue-900 text-blue-900 rounded-lg hover:bg-blue-900 hover:text-white transition"
                  >
                    {showAllBooks ? (
                      <>Voir moins <ChevronUp className="h-4 w-4" /></>
                    ) : (
                      <>Voir plus ({filteredBooks.length - 6} livres) <ChevronDown className="h-4 w-4" /></>
                    )}
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Vidéos éducatives */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
            <Video className="h-6 w-6" />
            Tutoriels vidéo
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative aspect-video bg-gray-900">
                  <iframe
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{video.title}</h3>
                  <p className="text-sm text-gray-500">{video.channel}</p>
                  <p className="text-xs text-gray-400 mt-1">Durée : {video.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ressources en ligne */}
        <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
            <Globe className="h-6 w-6" />
            Ressources en ligne gratuites
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((res, index) => (
              <a
                key={index}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-md transition group"
              >
                <div>
                  <p className="font-medium text-gray-900 group-hover:text-blue-900 transition">
                    {res.name}
                  </p>
                  <p className="text-xs text-gray-500">{res.description}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-900" />
              </a>
            ))}
          </div>
        </div>

        {/* Section téléchargements */}
        <div className="mt-12 p-6 bg-blue-900 text-white rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Besoin de plus de ressources ?</h3>
          <p className="text-blue-100 mb-4">
            Contactez-nous pour accéder à notre bibliothèque complète de ressources premium
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            <Download className="h-4 w-4" />
            Demander l'accès
          </a>
        </div>
      </div>
    </main>
  );
}