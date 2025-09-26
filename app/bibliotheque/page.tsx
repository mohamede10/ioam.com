import Image from "next/image";

export default function Bibliotheque() {
  const books = [
    {
      id: 1,
      title: "Algèbre linéaire avancée",
      author: "Gilbert Strang",
      cover: "/images/book1.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Analyse réelle et complexe",
      author: "Walter Rudin",
      cover: "/images/book2.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Introduction aux probabilités",
      author: "Sheldon Ross",
      cover: "/images/book3.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Équations différentielles",
      author: "Paul Blanchard",
      cover: "/images/book4.jpg",
      link: "#",
    },
    {
      id: 5,
      title: "Topologie générale",
      author: "John Kelley",
      cover: "/images/book5.jpg",
      link: "#",
    },
    {
      id: 6,
      title: "Statistique mathématique",
      author: "Morris H. DeGroot",
      cover: "/images/book6.jpg",
      link: "#",
    },
    {
      id: 7,
      title: "Algorithmes et structures de données",
      author: "Thomas H. Cormen",
      cover: "/images/book7.jpg",
      link: "#",
    },
    {
      id: 8,
      title: "Calcul différentiel et intégral",
      author: "Michael Spivak",
      cover: "/images/book8.jpg",
      link: "#",
    },
    {
      id: 9,
      title: "Théorie des nombres",
      author: "G. H. Hardy & E. M. Wright",
      cover: "/images/book9.jpg",
      link: "#",
    },
  ];

  const resources = [
    { name: "Khan Academy", url: "https://www.khanacademy.org/" },
    { name: "Coursera Mathématiques", url: "https://www.coursera.org/browse/math-and-logic" },
    { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu/courses/mathematics/" },
    { name: "Springer Mathematics", url: "https://link.springer.com/search?facet-discipline=%22Mathematics%22" },
    { name: "arXiv Mathématiques", url: "https://arxiv.org/archive/math" },
    { name: "Project Euclid", url: "https://projecteuclid.org/" },
    { name: "Numdam", url: "https://www.numdam.org/" },
    { name: "OpenStax", url: "https://openstax.org/subjects/math" },
    { name: "Wolfram MathWorld", url: "https://mathworld.wolfram.com/" },
    { name: "AMS Math", url: "https://www.ams.org/" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-8">
        Bibliothèque numérique
      </h1>
      <p className="text-lg text-gray-700 mb-12">
        Accédez à une sélection d’ouvrages, de cours et de publications
        scientifiques pour approfondir vos connaissances.
      </p>

      {/* Livres */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden"
          >
            <Image
              src={book.cover}
              alt={book.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-900">
                {book.title}
              </h3>
              <p className="text-sm text-gray-600">par {book.author}</p>
              <a
                href={book.link}
                className="mt-3 inline-block text-sm text-blue-900 font-medium hover:underline"
              >
                Lire / Télécharger →
              </a>
            </div>
          </div>
        ))}
      </div>

     {/* Ressources externes avec vidéo */}
{/* Ressources externes avec vidéo */}
<section className="bg-gray-50 p-6 rounded-lg shadow">
  <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
    Ressources externes
  </h2>

  <div className="grid md:grid-cols-2 gap-8 items-start">
    {/* Liste des ressources */}
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      {resources.map((res, index) => (
        <li key={index}>
          <a
            href={res.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 font-medium hover:underline"
          >
            {res.name}
          </a>
        </li>
      ))}
    </ul>

    {/* Vidéo YouTube */}
    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.youtube.com/embed/GvIZ9Y91vbc"
        title="Comment se passe le doctorat ?"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  </div>
</section>


    </div>
  );
}
