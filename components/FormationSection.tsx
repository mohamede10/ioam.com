// components/FormationSection.jsx
"use client";
import { GraduationCap } from "lucide-react";

const formationData = {
  title: "Formation & Certification",
  subtitle: "Nous formons la prochaine génération d'experts en technologies numériques",
  buttonText: "Découvrir nos formations",
  buttonLink: "/formations",
  courses: [
    {
      title: "Bureautique & Internet",
      description: "Initiation à l'informatique, traitement de texte, tableurs, navigation web",
      icon: "💻"
    },
    {
      title: "Développement Web",
      description: "HTML/CSS, JavaScript, PHP, frameworks modernes",
      icon: "🌐"
    },
    {
      title: "Réseaux & IoT",
      description: "Administration réseau, Arduino, ESP32, capteurs intelligents",
      icon: "📡"
    },
    {
      title: "Design & Infographie",
      description: "Photoshop, Illustrator, création de logos, montage vidéo",
      icon: "🎨"
    },
    {
      title: "Maintenance & Support IT",
      description: "Dépannage matériel, installation système, sécurité informatique",
      icon: "🔧"
    }
  ]
};

export default function FormationSection({ 
  data = formationData,
  bgColor = "bg-blue-900",
  textColor = "text-white",
  variant = "default" // "default", "compact", "minimal"
}) {
  // Version compacte (pour les petites sections)
  if (variant === "compact") {
    return (
      <section className={`py-12 ${bgColor} ${textColor}`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="h-10 w-10" />
            <h2 className="text-2xl font-bold">{data.title}</h2>
          </div>
          <a
            href={data.buttonLink}
            className="inline-block px-6 py-2 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            {data.buttonText}
          </a>
        </div>
      </section>
    );
  }

  // Version minimaliste
  if (variant === "minimal") {
    return (
      <section className={`py-8 ${bgColor} ${textColor}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8" />
              <div>
                <h3 className="font-bold">{data.title}</h3>
                <p className="text-sm opacity-90">{data.subtitle}</p>
              </div>
            </div>
            <a
              href={data.buttonLink}
              className="px-4 py-2 bg-white text-blue-900 rounded-lg font-semibold text-sm hover:bg-gray-100 transition"
            >
              {data.buttonText}
            </a>
          </div>
        </div>
      </section>
    );
  }

  // Version par défaut (complète) - 5 formations par ligne sur desktop
  return (
    <section className={`py-10 ${bgColor} ${textColor}`}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <GraduationCap className="h-16 w-16 mx-auto mb-4" />
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          {data.title}
        </h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          {data.subtitle}
        </p>
        
        {/* Grille : 1 sur mobile, 2 sur tablette, 5 sur desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
          {data.courses.map((course, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg transition-transform hover:scale-105 ${
                bgColor === "bg-blue-900" ? "bg-blue-800" : "bg-opacity-20 bg-white"
              }`}
            >
              <div className="text-3xl mb-2">{course.icon}</div>
              <h4 className="font-semibold mb-2 text-sm lg:text-base">{course.title}</h4>
              <p className={`text-xs lg:text-sm ${
                textColor === "text-white" ? "text-blue-100" : "text-gray-600"
              }`}>
                {course.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <a
            href={data.buttonLink}
            className="px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            {data.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}