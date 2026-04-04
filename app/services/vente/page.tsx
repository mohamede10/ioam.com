"use client";
import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";
import Link from "next/link";
import { 
  ShoppingCart, 
  Laptop, 
  Server, 
  HardDrive, 
  Printer, 
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Award,
  Package,
  Truck,
  Shield
} from "lucide-react";

export default function ServiceVenteDetail() {
  const categories = [
    {
      title: "Ordinateurs & Portables",
      description: "Des PC performants pour tous vos besoins",
      icon: Laptop,
      features: ["Ordinateurs de bureau", "Ordinateurs portables", "PC tout-en-un", "Stations de travail"]
    },
    {
      title: "Serveurs & Stockage",
      description: "Infrastructures robustes pour votre entreprise",
      icon: Server,
      features: ["Serveurs HP/Dell/Lenovo", "NAS de stockage", "Baies de disques", "Solutions de sauvegarde"]
    },
    {
      title: "Périphériques",
      description: "Accessoires et équipements complémentaires",
      icon: Printer,
      features: ["Imprimantes", "Scanners", "Onduleurs", "Claviers/souris"]
    },
    {
      title: "Composants",
      description: "Pièces détachées pour maintenance et upgrade",
      icon: HardDrive,
      features: ["Disques SSD/HDD", "Mémoire RAM", "Cartes mères", "Alimentations"]
    }
  ];

  const marques = [
    { name: "HP", level: "Premium", color: "bg-blue-100 text-blue-800" },
    { name: "Dell", level: "Premium", color: "bg-green-100 text-green-800" },
    { name: "Lenovo", level: "Premium", color: "bg-purple-100 text-purple-800" },
    { name: "Acer", level: "Standard", color: "bg-red-100 text-red-800" },
    { name: "Asus", level: "Premium", color: "bg-cyan-100 text-cyan-800" },
    { name: "Epson", level: "Standard", color: "bg-orange-100 text-orange-800" },
    { name: "Brother", level: "Standard", color: "bg-indigo-100 text-indigo-800" },
    { name: "APC", level: "Premium", color: "bg-pink-100 text-pink-800" }
  ];

  const etapes = [
    { 
      num: "1", 
      title: "Conseil", 
      description: "Analyse de vos besoins",
      icon: Users
    },
    { 
      num: "2", 
      title: "Devis", 
      description: "Proposition personnalisée",
      icon: Package
    },
    { 
      num: "3", 
      title: "Livraison", 
      description: "Rapidité et sécurité",
      icon: Truck
    },
    { 
      num: "4", 
      title: "Installation", 
      description: "Configuration et mise en service",
      icon: Zap
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center text-center">
        <Image
          src="/images/services/vente-hero.jpg"
          alt="Vente d'Équipements"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <div className="bg-blue-900/20 backdrop-blur-sm inline-block p-3 rounded-full mb-4">
            <ShoppingCart className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Vente d'Équipements
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Matériel informatique de qualité au meilleur prix
          </p>
        </div>
      </section>

      {/* Description principale */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Équipez-vous avec les meilleures marques
              </h2>
              <p className="text-gray-600 mb-4">
                Chez <span className="font-semibold text-blue-900">COTECH SERVICES</span>, nous vous proposons une large 
                gamme d'équipements informatiques des plus grandes marques.
              </p>
              <p className="text-gray-600 mb-6">
                Que vous soyez un particulier, une PME ou une grande entreprise, 
                nous vous conseillons et vous accompagnons dans le choix du matériel 
                adapté à vos besoins et à votre budget. Livraison rapide et installation possible.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition">
                  Demander un devis
                </Link>
                <Link href="#categories" className="px-6 py-3 border border-blue-900 text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Voir nos produits
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/services/vente-detail.jpg"
                alt="Vente d'équipements"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Catégories de produits */}
      <section id="categories" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Nos catégories de produits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un large choix d'équipements pour tous vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition group">
                  <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-900 transition">
                    <Icon className="h-7 w-7 text-blue-900 group-hover:text-white transition" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.features.map((feature, idx) => (
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

      {/* Marques partenaires */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Nos marques partenaires
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des produits certifiés des plus grandes marques
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {marques.map((marque, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition">
                <span className="font-semibold text-gray-900">{marque.name}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${marque.color}`}>
                  {marque.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Pourquoi acheter chez COTECH SERVICES ?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Garantie 1 an</h3>
              <p className="text-gray-600 text-sm">Sur tous nos produits</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Livraison rapide</h3>
              <p className="text-gray-600 text-sm">À Conakry et environs</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Installation incluse</h3>
              <p className="text-gray-600 text-sm">Configuration à votre bureau</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Paiement sécurisé</h3>
              <p className="text-gray-600 text-sm">Plusieurs modes de paiement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Processus d'achat */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Processus d'achat simplifié
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              De la commande à la livraison, on s'occupe de tout
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

      {/* Offres spéciales */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Offres spéciales entreprises</h3>
              <p className="text-blue-100 mb-6">
                Remises sur volume et conditions préférentielles pour les professionnels
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Demander un devis personnalisé <ArrowRight className="h-4 w-4" />
              </Link>
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
                  "Nous avons équipé toute notre entreprise chez COTECH SERVICES. 
                  Des prix compétitifs, une livraison rapide et une installation parfaite. 
                  Le service après-vente est également irréprochable."
                </p>
                <p className="font-bold text-blue-900">Mamadou Diallo</p>
                <p className="text-gray-500 text-sm">CEO, Entreprise X</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Besoin d'équipements informatiques ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour un devis gratuit et personnalisé
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