"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShoppingCart, 
  Laptop, 
  Server, 
  HardDrive, 
  Printer, 
  Search,
  Star,
  Truck,
  Shield,
  Package,
  Zap,
  X,
  Plus,
  Minus,
  CheckCircle,
  Cpu,
  Microchip,
  Bot,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Glasses,
  Watch,
  Headphones
} from "lucide-react";

// Types de produits
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  description: string;
  features: string[];
  image: string;
  brand: string;
  rating: number;
  inStock: boolean;
  warranty: string;
}

export default function EShop() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Produits disponibles avec images en ligne
  const products: Product[] = [
    // ==================== LUNETTES PHARMACEUTIQUES ====================
    {
      id: 58,
      name: "Lunettes de vue classiques - Monture métal",
      category: "lunettes",
      price: 85000,
      oldPrice: 120000,
      description: "Lunettes de vue élégantes avec monture métal légère",
      features: ["Monture métal léger", "Verres correcteurs", "Anti-reflet", "Protection UV", "Étui inclus"],
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop",
      brand: "Optique Plus",
      rating: 5,
      inStock: true,
      warranty: "6 mois"
    },
    {
      id: 59,
      name: "Lunettes de vue tendance - Monture plastique",
      category: "lunettes",
      price: 65000,
      description: "Lunettes modernes et colorées pour tous les jours",
      features: ["Monture plastique résistante", "Verres correcteurs", "Design tendance", "Léger et confortable"],
      image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=400&h=300&fit=crop",
      brand: "Optique Plus",
      rating: 4,
      inStock: true,
      warranty: "6 mois"
    },
    {
      id: 60,
      name: "Lunettes de vue - Monture acetate",
      category: "lunettes",
      price: 120000,
      oldPrice: 160000,
      description: "Lunettes haut de gamme en acétate de cellulose",
      features: ["Acétate italien", "Charnières renforcées", "Verres haute définition", "Design exclusif"],
      image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop",
      brand: "Optique Luxe",
      rating: 5,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 61,
      name: "Lunettes de lecture - Prêt à porter",
      category: "lunettes",
      price: 35000,
      description: "Lunettes de lecture avec différentes corrections",
      features: ["Correction +1 à +3", "Monture légère", "Anti-fatigue", "Étui de protection"],
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37c0b?w=400&h=300&fit=crop",
      brand: "EasyRead",
      rating: 4,
      inStock: true,
      warranty: "3 mois"
    },
    {
      id: 62,
      name: "Lunettes pour écran - Anti-lumière bleue",
      category: "lunettes",
      price: 75000,
      oldPrice: 95000,
      description: "Protégez vos yeux de la lumière bleue des écrans",
      features: ["Filtre lumière bleue 40%", "Monture confort", "Verres transparents", "Idéal pour bureautique"],
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37c0b?w=400&h=300&fit=crop",
      brand: "BlueBlock",
      rating: 5,
      inStock: true,
      warranty: "6 mois"
    },
    {
      id: 63,
      name: "Lunettes de vue - Monture sans branche",
      category: "lunettes",
      price: 95000,
      description: "Lunettes innovantes sans branches pour un confort maximal",
      features: ["Sans branches", "Maintien par pression", "Idéal pour sport", "Design unique"],
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop",
      brand: "Optique Plus",
      rating: 4,
      inStock: true,
      warranty: "6 mois"
    },

    // ==================== LUNETTES PHOTOCHROMIQUES ====================
    {
      id: 64,
      name: "Lunettes photochromiques - Transition 7",
      category: "lunettes",
      price: 150000,
      oldPrice: 200000,
      description: "Verres qui s'assombrissent automatiquement au soleil",
      features: ["Transition 7", "Devient sombre en extérieur", "Clair en intérieur", "Protection UV 100%", "Anti-rayures"],
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop",
      brand: "Transitions",
      rating: 5,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 65,
      name: "Lunettes photochromiques sport",
      category: "lunettes",
      price: 125000,
      description: "Lunettes adaptées au sport avec verres photochromiques",
      features: ["Verres qui s'assombrissent", "Monture sport", "Anti-choc", "Caoutchouc antidérapant"],
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop",
      brand: "Transitions",
      rating: 5,
      inStock: true,
      warranty: "1 an"
    },

    // ==================== SMARTPHONES ====================
    {
      id: 41,
      name: "Samsung Galaxy A04s",
      category: "smartphones",
      price: 180000,
      description: "Smartphone Android économique pour usage quotidien",
      features: ["6.5 pouces HD+", "3Go RAM", "32Go stockage", "Batterie 5000mAh", "Android 12"],
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",
      brand: "Samsung",
      rating: 4,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 42,
      name: "iPhone 13 128Go",
      category: "smartphones",
      price: 680000,
      oldPrice: 850000,
      description: "Excellent équilibre prix/performance",
      features: ["6.1 pouces Super Retina XDR", "OLED", "4Go RAM", "A15 Bionic", "Double appareil"],
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
      brand: "Apple",
      rating: 5,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 43,
      name: "iPhone 15 128Go",
      category: "smartphones",
      price: 1050000,
      oldPrice: 1200000,
      description: "Le dernier iPhone avec USB-C",
      features: ["6.1 pouces Dynamic Island", "6Go RAM", "A16 Bionic", "USB-C", "48MP principal"],
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
      brand: "Apple",
      rating: 5,
      inStock: true,
      warranty: "2 ans"
    },
    {
      id: 44,
      name: "Xiaomi Redmi Note 12",
      category: "smartphones",
      price: 320000,
      oldPrice: 380000,
      description: "Excellent rapport qualité-prix",
      features: ["6.67 pouces AMOLED", "6Go RAM", "128Go stockage", "Snapdragon 685", "50MP appareil"],
      image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400&h=300&fit=crop",
      brand: "Xiaomi",
      rating: 5,
      inStock: true,
      warranty: "1 an"
    },

    // ==================== ORDINATEURS ====================
    {
      id: 1,
      name: "Ordinateur Portable HP Pavilion 15",
      category: "ordinateurs",
      price: 450000,
      oldPrice: 550000,
      description: "Ordinateur portable performant pour le travail et les loisirs",
      features: ["Intel Core i5", "8Go RAM", "256Go SSD", "Windows 11"],
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
      brand: "HP",
      rating: 5,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 2,
      name: "Dell XPS 13",
      category: "ordinateurs",
      price: 850000,
      oldPrice: 950000,
      description: "Ultrabook haut de gamme, léger et puissant",
      features: ["Intel Core i7", "16Go RAM", "512Go SSD", "Écran 4K"],
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
      brand: "Dell",
      rating: 5,
      inStock: true,
      warranty: "2 ans"
    },
    {
      id: 3,
      name: "MacBook Air M2",
      category: "ordinateurs",
      price: 1200000,
      oldPrice: 1400000,
      description: "Puissant et léger avec puce Apple M2",
      features: ["Apple M2", "8Go RAM", "256Go SSD", "macOS"],
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&h=300&fit=crop",
      brand: "Apple",
      rating: 5,
      inStock: true,
      warranty: "1 an"
    },

    // ==================== ARDUINO & IoT ====================
    {
      id: 6,
      name: "Kit Arduino Uno R3 Officiel",
      category: "arduino",
      price: 85000,
      description: "Carte officielle Arduino Uno R3 avec câble USB",
      features: ["ATmega328P", "14 ports numériques", "6 ports analogiques", "USB-B"],
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=300&fit=crop",
      brand: "Arduino",
      rating: 5,
      inStock: true,
      warranty: "6 mois"
    },
    {
      id: 8,
      name: "ESP32 DevKit V1",
      category: "arduino",
      price: 35000,
      description: "Microcontrôleur avec WiFi et Bluetooth intégrés",
      features: ["Dual-core", "WiFi 802.11 b/g/n", "Bluetooth 4.2", "20 ports GPIO"],
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=300&fit=crop",
      brand: "Espressif",
      rating: 5,
      inStock: true,
      warranty: "6 mois"
    },
    {
      id: 11,
      name: "Raspberry Pi 4 Model B 8Go",
      category: "arduino",
      price: 180000,
      description: "Mini-ordinateur puissant pour projets avancés",
      features: ["ARM Cortex-A72", "8Go RAM", "4Kp60", "Bluetooth 5.0"],
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=300&fit=crop",
      brand: "Raspberry Pi",
      rating: 5,
      inStock: true,
      warranty: "1 an"
    },

    // ==================== ROBOTIQUE ====================
    {
      id: 16,
      name: "Kit Robotique Arduino 4WD",
      category: "robotique",
      price: 125000,
      oldPrice: 160000,
      description: "Kit complet pour construire un robot mobile",
      features: ["4 moteurs DC", "Châssis acrylique", "Capteur ultrason", "Piles incluses"],
      image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=400&h=300&fit=crop",
      brand: "Generic",
      rating: 5,
      inStock: true,
      warranty: "6 mois"
    },
    {
      id: 21,
      name: "Kit Bras Robotique 6 axes",
      category: "robotique",
      price: 350000,
      oldPrice: 450000,
      description: "Bras robotique complet avec servos",
      features: ["6 degrés de liberté", "Structure métallique", "Servos inclus", "Contrôle Arduino"],
      image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=400&h=300&fit=crop",
      brand: "Generic",
      rating: 5,
      inStock: true,
      warranty: "1 an"
    },

    // ==================== PÉRIPHÉRIQUES ====================
    {
      id: 32,
      name: "Souris Gaming Logitech G502",
      category: "peripheriques",
      price: 65000,
      description: "Souris gaming haute performance",
      features: ["25 600 DPI", "11 boutons", "RGB", "Poids ajustables"],
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
      brand: "Logitech",
      rating: 5,
      inStock: true,
      warranty: "2 ans"
    },
    {
      id: 33,
      name: "Clavier Mécanique RGB",
      category: "peripheriques",
      price: 85000,
      oldPrice: 120000,
      description: "Clavier mécanique avec switches bleus",
      features: ["Switches mécaniques", "Rétroéclairage RGB", "Anti-ghosting", "Repose-poignet"],
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
      brand: "Generic",
      rating: 4,
      inStock: true,
      warranty: "1 an"
    },

    // ==================== STOCKAGE ====================
    {
      id: 26,
      name: "SSD Samsung 970 EVO Plus 1To",
      category: "stockage",
      price: 120000,
      description: "SSD NVMe ultra-rapide pour PC",
      features: ["NVMe M.2", "Lecture 3500MB/s", "Écriture 3300MB/s", "5 ans garantie"],
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop",
      brand: "Samsung",
      rating: 5,
      inStock: true,
      warranty: "5 ans"
    },
    {
      id: 27,
      name: "Disque dur externe 2To",
      category: "stockage",
      price: 85000,
      oldPrice: 110000,
      description: "Disque dur portable USB 3.0",
      features: ["2To", "USB 3.0", "Plug & Play", "Design compact"],
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop",
      brand: "WD",
      rating: 4,
      inStock: true,
      warranty: "2 ans"
    },

    // ==================== SERVEURS ====================
    {
      id: 24,
      name: "Serveur HP ProLiant ML30",
      category: "serveurs",
      price: 1250000,
      description: "Serveur entrée de gamme pour PME",
      features: ["Intel Xeon E-2234", "16Go RAM", "2x1To HDD", "RAID"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      brand: "HP",
      rating: 5,
      inStock: true,
      warranty: "3 ans"
    },
    {
      id: 25,
      name: "NAS Synology DS220+",
      category: "stockage",
      price: 350000,
      description: "Solution de stockage réseau pour vos données",
      features: ["2 baies", "4Go RAM", "Synchronisation cloud", "Sauvegarde auto"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      brand: "Synology",
      rating: 5,
      inStock: true,
      warranty: "2 ans"
    },

    // ==================== COMPOSANTS ====================
    {
      id: 36,
      name: "Carte MicroSD 64Go",
      category: "composants",
      price: 18000,
      description: "Carte mémoire haute vitesse",
      features: ["64Go", "Classe 10", "UHS-I", "Adaptateur inclus"],
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop",
      brand: "Sandisk",
      rating: 5,
      inStock: true,
      warranty: "2 ans"
    },
    {
      id: 37,
      name: "Module GPS NEO-6M",
      category: "arduino",
      price: 22000,
      description: "Module GPS pour projets de localisation",
      features: ["NEO-6M", "Antenne active", "Taux 5Hz", "EEPROM"],
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=300&fit=crop",
      brand: "u-blox",
      rating: 5,
      inStock: true,
      warranty: "6 mois"
    }
  ];

  // Catégories
  const categories = [
    { id: "all", name: "Tous les produits", icon: ShoppingCart },
    { id: "ordinateurs", name: "Ordinateurs", icon: Laptop },
    { id: "smartphones", name: "Smartphones", icon: Smartphone },
    { id: "lunettes", name: "Lunettes", icon: Glasses },
    { id: "serveurs", name: "Serveurs", icon: Server },
    { id: "stockage", name: "Stockage", icon: HardDrive },
    { id: "peripheriques", name: "Périphériques", icon: Printer },
    { id: "composants", name: "Composants", icon: HardDrive },
    { id: "arduino", name: "Arduino & IoT", icon: Microchip },
    { id: "robotique", name: "Robotique", icon: Bot }
  ];

  // Filtrer les produits
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handleFilterChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.product.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.product.id === product.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { product, quantity }]);
    }
    setQuantity(1);
    setShowModal(false);
    setShowCart(true);
    setTimeout(() => setShowCart(false), 3000);
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart(cart.map(item =>
      item.product.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const formatPrice = (price: number) => {
    return price.toLocaleString('fr-FR') + ' GNF';
  };

  return (
    <main>
      {/* Hero Section avec image en ligne */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/images/services/vente/vente_cotech.png"
          alt="E-shop COTECH SERVICES"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <div className="bg-blue-900/20 backdrop-blur-sm inline-block p-3 rounded-full mb-4">
            <ShoppingCart className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            E-shop COTECH SERVICES
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Smartphones, lunettes, matériel informatique, électronique et robotique
          </p>
        </div>
      </section>

      {/* Barre de recherche et filtres */}
      <section className="py-8 bg-white border-b sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleFilterChange(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition ${
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
        </div>
      </section>

      {/* Grille des produits */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm text-gray-500 mb-4">
            {filteredProducts.length} produit(s) trouvé(s) - Page {currentPage} sur {totalPages || 1}
          </p>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Aucun produit ne correspond à votre recherche.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {paginatedProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition duration-500"
                        unoptimized
                      />
                      {product.oldPrice && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                          -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-500">{product.brand}</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1 line-clamp-2 text-sm">{product.name}</h3>
                      <div className="flex items-center justify-between mt-2">
                        <div>
                          <span className="text-lg font-bold text-blue-900">{formatPrice(product.price)}</span>
                          {product.oldPrice && (
                            <span className="text-xs text-gray-400 line-through ml-2">{formatPrice(product.oldPrice)}</span>
                          )}
                        </div>
                        <button
                          onClick={() => {
                            setSelectedProduct(product);
                            setShowModal(true);
                          }}
                          className="px-3 py-1 bg-blue-900 text-white rounded-lg text-sm hover:bg-blue-800 transition"
                        >
                          Voir
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-lg border transition ${
                      currentPage === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-blue-900 hover:bg-blue-50"
                    }`}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <div className="flex gap-1">
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-10 h-10 rounded-lg transition ${
                            currentPage === pageNum
                              ? "bg-blue-900 text-white"
                              : "bg-white text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-lg border transition ${
                      currentPage === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-blue-900 hover:bg-blue-50"
                    }`}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Modal produit */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold text-blue-900">Détails du produit</h3>
              <button onClick={() => setShowModal(false)} className="p-1 hover:bg-gray-100 rounded-full">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-contain p-4"
                    unoptimized
                  />
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-500">{selectedProduct.brand}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{selectedProduct.rating}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h2>
                  <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-900">{formatPrice(selectedProduct.price)}</span>
                    {selectedProduct.oldPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">{formatPrice(selectedProduct.oldPrice)}</span>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-semibold mb-2">Caractéristiques :</p>
                    <ul className="space-y-1">
                      {selectedProduct.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-1 border rounded hover:bg-gray-100"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-12 text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-1 border rounded hover:bg-gray-100"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => addToCart(selectedProduct)}
                      className="flex-1 bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Ajouter au panier
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Truck className="h-4 w-4" /> Livraison rapide</span>
                    <span className="flex items-center gap-1"><Shield className="h-4 w-4" /> Garantie {selectedProduct.warranty}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Panier flottant */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 z-40">
          <button
            onClick={() => setShowCart(!showCart)}
            className="bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition relative"
          >
            <ShoppingCart className="h-6 w-6" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
          
          {showCart && cart.length > 0 && (
            <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border overflow-hidden">
              <div className="p-3 bg-blue-900 text-white font-semibold">Mon panier</div>
              <div className="max-h-96 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.product.id} className="p-3 border-b flex gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        width={48}
                        height={48}
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm line-clamp-1">{item.product.name}</p>
                      <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-0.5 border rounded hover:bg-gray-100"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-0.5 border rounded hover:bg-gray-100"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="text-sm font-semibold">{formatPrice(item.product.price * item.quantity)}</span>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 bg-gray-50 border-t">
                <div className="flex justify-between mb-2">
                  <span>Total</span>
                  <span className="font-bold text-blue-900">{formatPrice(totalPrice)}</span>
                </div>
                <Link
                  href="/contact"
                  className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition block text-center"
                >
                  Passer commande
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  );
}