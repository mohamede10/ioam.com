"use client";
import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";
import Link from "next/link";
import { 
  Palette, 
  Layout, 
  Video, 
  Image as ImageIcon,
  PenTool,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Award,
  Smartphone,
  FileText
} from "lucide-react";

export default function ServiceInfographieDetail() {
  const services = [
    {
      title: "Identité Visuelle",
      description: "Créez une image de marque forte et reconnaissable",
      icon: Palette,
      features: ["Création de logo", "Charte graphique complète", "Design d'icônes", "Packaging produit"]
    },
    {
      title: "Design Print",
      description: "Supports de communication imprimés professionnels",
      icon: Layout,
      features: ["Affiches et flyers", "Cartes de visite", "Brochures et catalogues", "Bannières et rollups"]
    },
    {
      title: "Montage Vidéo",
      description: "Vidéos professionnelles pour votre communication",
      icon: Video,
      features: ["Montage vidéo", "Motion design", "Animation 2D/3D", "Sous-titrage"]
    },
    {
      title: "Retouche Photo",
      description: "Améliorez et valorisez vos images",
      icon: ImageIcon,
      features: ["Retouche professionnelle", "Correction couleur", "Suppression d'éléments", "Optimisation web"]
    }
  ];

  const outils = [
    { name: "Adobe Photoshop", level: "Expert", color: "bg-blue-100 text-blue-800" },
    { name: "Adobe Illustrator", level: "Expert", color: "bg-green-100 text-green-800" },
    { name: "Adobe Premiere Pro", level: "Avancé", color: "bg-purple-100 text-purple-800" },
    { name: "Adobe After Effects", level: "Avancé", color: "bg-red-100 text-red-800" },
    { name: "Adobe InDesign", level: "Intermédiaire", color: "bg-cyan-100 text-cyan-800" },
    { name: "Figma", level: "Avancé", color: "bg-orange-100 text-orange-800" }
  ];

  const etapes = [
    { 
      num: "1", 
      title: "Brief", 
      description: "Analyse de vos besoins",
      icon: Users
    },
    { 
      num: "2", 
      title: "Conception", 
      description: "Création et propositions",
      icon: PenTool
    },
    { 
      num: "3", 
      title: "Validation", 
      description: "Retours et ajustements",
      icon: Globe
    },
    { 
      num: "4", 
      title: "Livraison", 
      description: "Fichiers finaux",
      icon: Zap
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/images/services/infographie/photoshop.webp"
          alt="Infographie & Design"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <div className="bg-blue-900/20 backdrop-blur-sm inline-block p-3 rounded-full mb-4">
            <Palette className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Infographie & Design
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Créations visuelles professionnelles pour votre communication
          </p>
        </div>
      </section>

      {/* Description principale */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Donnez vie à vos idées
              </h2>
              <p className="text-gray-600 mb-4">
                Chez <span className="font-semibold text-blue-900">COTECH SERVICES</span>, nous créons des designs 
                percutants qui captent l'attention et renforcent votre image de marque.
              </p>
              <p className="text-gray-600 mb-6">
                Que vous ayez besoin d'un logo, d'une charte graphique complète, ou de supports 
                de communication variés, notre équipe de designers vous accompagne pour donner 
                vie à vos projets créatifs.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition">
                  Demander un devis
                </Link>
                <Link href="#services" className="px-6 py-3 border border-blue-900 text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Découvrir nos créations
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/services/infographie/photoshop.webp"
                alt="Infographie et design"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section id="services" className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Nos prestations créatives
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des solutions graphiques adaptées à tous vos supports
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition group">
                  <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-900 transition">
                    <Icon className="h-7 w-7 text-blue-900 group-hover:text-white transition" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
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

      {/* Outils utilisés */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Outils professionnels
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous utilisons les meilleurs logiciels du marché
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {outils.map((outil, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition">
                <span className="font-semibold text-gray-900">{outil.name}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${outil.color}`}>
                  {outil.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-10 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Notre processus créatif
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Une méthodologie collaborative pour des résultats sur mesure
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
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Pourquoi choisir COTECH SERVICES ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PenTool className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Créativité</h3>
              <p className="text-gray-600">Designs uniques et originaux</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Adaptabilité</h3>
              <p className="text-gray-600">Supports optimisés pour tous les médias</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Réactivité</h3>
              <p className="text-gray-600">Livraison dans les délais</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Donnez vie à vos idées créatives ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour concrétiser vos projets graphiques
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Demander un devis
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