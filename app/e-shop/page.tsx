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
  Filter,
  Star,
  TrendingUp,
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
  Glasses
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

  // Produits disponibles
  const products: Product[] = [
    // ==================== LUNETTES PHARMACEUTIQUES ====================
    // Lunettes à verres correcteurs
    {
      id: 58,
      name: "Lunettes de vue classiques - Monture métal",
      category: "lunettes",
      price: 85000,
      oldPrice: 120000,
      description: "Lunettes de vue élégantes avec monture métal légère",
      features: ["Monture métal léger", "Verres correcteurs", "Anti-reflet", "Protection UV", "Étui inclus"],
      image: "/images/products/lunettes-metal.jpg",
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
      image: "/images/products/lunettes-plastique.jpg",
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
      image: "/images/products/lunettes-acetate.jpg",
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
      image: "/images/products/lunettes-lecture.jpg",
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
      image: "/images/products/lunettes-ecran.jpg",
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
      image: "/images/products/lunettes-sans-branche.jpg",
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
      image: "/images/products/lunettes-photochromique.jpg",
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
      image: "/images/products/lunettes-sport-photo.jpg",
      brand: "Transitions",
      rating: 5,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 66,
      name: "Lunettes photochromiques élégantes",
      category: "lunettes",
      price: 180000,
      oldPrice: 230000,
      description: "Lunettes élégantes avec technologie photochromique",
      features: ["Design raffiné", "Verres Transition", "S'assombrit en 30 secondes", "Retour rapide en intérieur"],
      image: "/images/products/lunettes-elegantes-photo.jpg",
      brand: "Transitions",
      rating: 5,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 67,
      name: "Lunettes photochromiques polarisées",
      category: "lunettes",
      price: 195000,
      description: "Verres photochromiques + polarisés pour une protection maximale",
      features: ["Photochromique + Polarisé", "Anti-éblouissement", "Conduite idéale", "Protection UV 400"],
      image: "/images/products/lunettes-polaire-photo.jpg",
      brand: "Transitions",
      rating: 5,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 68,
      name: "Lunettes photochromiques pour enfants",
      category: "lunettes",
      price: 85000,
      description: "Lunettes adaptées aux enfants avec verres photochromiques",
      features: ["Monture flexible", "Verres qui s'assombrissent", "Anti-choc", "Protection UV totale"],
      image: "/images/products/lunettes-enfant-photo.jpg",
      brand: "Transitions Kids",
      rating: 4,
      inStock: true,
      warranty: "6 mois"
    },

    // ==================== SMARTPHONES ANDROID ====================
    {
      id: 41,
      name: "Samsung Galaxy A04s",
      category: "smartphones",
      price: 180000,
      description: "Smartphone Android économique pour usage quotidien",
      features: ["6.5 pouces HD+", "3Go RAM", "32Go stockage", "Batterie 5000mAh", "Android 12"],
      image: "/images/products/samsung-a04s.jpg",
      brand: "Samsung",
      rating: 4,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 42,
      name: "Tecno Spark 10C",
      category: "smartphones",
      price: 165000,
      oldPrice: 195000,
      description: "Smartphone abordable avec bonnes performances",
      features: ["6.6 pouces HD+", "4Go RAM", "64Go stockage", "Batterie 5000mAh", "Android 13"],
      image: "/images/products/tecno-spark.jpg",
      brand: "Tecno",
      rating: 4,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 43,
      name: "Infinix Hot 30i",
      category: "smartphones",
      price: 170000,
      description: "Smartphone avec grand écran et bonne autonomie",
      features: ["6.6 pouces HD+", "4Go RAM", "128Go stockage", "Batterie 5000mAh", "Android 12"],
      image: "/images/products/infinix-hot.jpg",
      brand: "Infinix",
      rating: 4,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 44,
      name: "Xiaomi Redmi Note 12",
      category: "smartphones",
      price: 320000,
      oldPrice: 380000,
      description: "Excellent rapport qualité-prix",
      features: ["6.67 pouces AMOLED", "6Go RAM", "128Go stockage", "Snapdragon 685", "50MP appareil"],
      image: "/images/products/redmi-note12.jpg",
      brand: "Xiaomi",
      rating: 5,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 45,
      name: "Samsung Galaxy A14",
      category: "smartphones",
      price: 280000,
      description: "Smartphone fiable avec mise à jour garantie",
      features: ["6.6 pouces PLS LCD", "4Go RAM", "64Go stockage", "Batterie 5000mAh", "Android 13"],
      image: "/images/products/samsung-a14.jpg",
      brand: "Samsung",
      rating: 4,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 46,
      name: "Tecno Camon 20",
      category: "smartphones",
      price: 310000,
      oldPrice: 360000,
      description: "Smartphone photo avec bon appareil",
      features: ["6.6 pouces AMOLED", "8Go RAM", "256Go stockage", "64MP appareil", "Android 13"],
      image: "/images/products/tecno-camon.jpg",
      brand: "Tecno",
      rating: 4,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 47,
      name: "Oppo A78",
      category: "smartphones",
      price: 290000,
      description: "Design élégant et performances équilibrées",
      features: ["6.56 pouces", "8Go RAM", "128Go stockage", "Batterie 5000mAh", "Charge rapide 33W"],
      image: "/images/products/oppo-a78.jpg",
      brand: "Oppo",
      rating: 4,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 48,
      name: "Samsung Galaxy A54 5G",
      category: "smartphones",
      price: 550000,
      oldPrice: 650000,
      description: "Smartphone premium avec 5G",
      features: ["6.4 pouces Super AMOLED", "8Go RAM", "128Go stockage", "50MP OIS", "IP67", "5G"],
      image: "/images/products/samsung-a54.jpg",
      brand: "Samsung",
      rating: 5,
      inStock: true,
      warranty: "2 ans"
    },
    {
      id: 49,
      name: "Xiaomi 13 Lite",
      category: "smartphones",
      price: 580000,
      description: "Design premium et performances élevées",
      features: ["6.55 pouces AMOLED", "8Go RAM", "256Go stockage", "Snapdragon 7 Gen 1", "Charge 67W"],
      image: "/images/products/xiaomi-13-lite.jpg",
      brand: "Xiaomi",
      rating: 5,
      inStock: true,
      warranty: "2 ans"
    },
    {
      id: 50,
      name: "Google Pixel 7a",
      category: "smartphones",
      price: 620000,
      oldPrice: 720000,
      description: "Le meilleur rapport qualité-prix photo",
      features: ["6.1 pouces OLED", "8Go RAM", "128Go stockage", "Google Tensor G2", "IP67", "Photo exceptionnelle"],
      image: "/images/products/pixel-7a.jpg",
      brand: "Google",
      rating: 5,
      inStock: true,
      warranty: "2 ans"
    },
    {
      id: 51,
      name: "OnePlus Nord 3",
      category: "smartphones",
      price: 600000,
      description: "Performance et fluidité garanties",
      features: ["6.74 pouces AMOLED 120Hz", "16Go RAM", "256Go stockage", "Dimensity 9000", "Charge 80W"],
      image: "/images/products/oneplus-nord3.jpg",
      brand: "OnePlus",
      rating: 5,
      inStock: true,
      warranty: "2 ans"
    },

    // ==================== SMARTPHONES iOS ====================
    {
      id: 52,
      name: "iPhone 11 64Go",
      category: "smartphones",
      price: 450000,
      oldPrice: 550000,
      description: "iPhone d'entrée de gamme, fiable et performant",
      features: ["6.1 pouces Liquid Retina", "4Go RAM", "64Go stockage", "A13 Bionic", "iOS 17", "Dual SIM"],
      image: "/images/products/iphone-11.jpg",
      brand: "Apple",
      rating: 5,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 53,
      name: "iPhone 12 128Go",
      category: "smartphones",
      price: 550000,
      oldPrice: 680000,
      description: "Le premier iPhone 5G d'Apple",
      features: ["6.1 pouces Super Retina XDR", "OLED", "4Go RAM", "A14 Bionic", "5G", "MagSafe"],
      image: "/images/products/iphone-12.jpg",
      brand: "Apple",
      rating: 5,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 54,
      name: "iPhone 13 128Go",
      category: "smartphones",
      price: 680000,
      oldPrice: 850000,
      description: "Excellent équilibre prix/performance",
      features: ["6.1 pouces Super Retina XDR", "OLED", "4Go RAM", "A15 Bionic", "Double appareil", "Batterie améliorée"],
      image: "/images/products/iphone-13.jpg",
      brand: "Apple",
      rating: 5,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 55,
      name: "iPhone 14 128Go",
      category: "smartphones",
      price: 850000,
      oldPrice: 990000,
      description: "Dernière génération avec détection d'accident",
      features: ["6.1 pouces Super Retina XDR", "6Go RAM", "A15 Bionic", "Détection d'accident", "Action mode vidéo"],
      image: "/images/products/iphone-14.jpg",
      brand: "Apple",
      rating: 5,
      inStock: true,
      warranty: "2 ans"
    },
    {
      id: 56,
      name: "iPhone 15 128Go",
      category: "smartphones",
      price: 1050000,
      oldPrice: 1200000,
      description: "Le dernier iPhone avec USB-C",
      features: ["6.1 pouces Dynamic Island", "6Go RAM", "A16 Bionic", "USB-C", "48MP principal", "Batterie longue durée"],
      image: "/images/products/iphone-15.jpg",
      brand: "Apple",
      rating: 5,
      inStock: true,
      warranty: "2 ans"
    },
    {
      id: 57,
      name: "iPhone 15 Pro 256Go",
      category: "smartphones",
      price: 1450000,
      oldPrice: 1650000,
      description: "Le meilleur d'Apple, titanium et A17 Pro",
      features: ["6.1 pouces ProMotion 120Hz", "8Go RAM", "256Go stockage", "A17 Pro", "Titanium", "USB-C 3.0", "Action Button"],
      image: "/images/products/iphone-15-pro.jpg",
      brand: "Apple",
      rating: 5,
      inStock: true,
      warranty: "2 ans"
    },

    // ==================== PRODUITS EXISTANTS (suite) ====================
    // Ordinateurs (5)
    {
      id: 1,
      name: "Ordinateur Portable HP Pavilion 15",
      category: "ordinateurs",
      price: 450000,
      oldPrice: 550000,
      description: "Ordinateur portable performant pour le travail et les loisirs",
      features: ["Intel Core i5", "8Go RAM", "256Go SSD", "Windows 11"],
      image: "/images/products/hp-pavilion.jpg",
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
      image: "/images/products/dell-xps.jpg",
      brand: "Dell",
      rating: 5,
      inStock: true,
      warranty: "2 ans"
    },
    {
      id: 3,
      name: "Lenovo ThinkPad E14",
      category: "ordinateurs",
      price: 550000,
      description: "PC professionnel robuste et fiable",
      features: ["Intel Core i5", "8Go RAM", "256Go SSD", "TPM 2.0"],
      image: "/images/products/lenovo-thinkpad.jpg",
      brand: "Lenovo",
      rating: 4,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 4,
      name: "MacBook Air M2",
      category: "ordinateurs",
      price: 1200000,
      oldPrice: 1400000,
      description: "Puissant et léger avec puce Apple M2",
      features: ["Apple M2", "8Go RAM", "256Go SSD", "macOS"],
      image: "/images/products/macbook-air.jpg",
      brand: "Apple",
      rating: 5,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 5,
      name: "Acer Aspire 5",
      category: "ordinateurs",
      price: 380000,
      description: "Excellent rapport qualité-prix",
      features: ["AMD Ryzen 5", "8Go RAM", "512Go SSD", "Windows 11"],
      image: "/images/products/acer-aspire.jpg",
      brand: "Acer",
      rating: 4,
      inStock: true,
      warranty: "1 an"
    },

    // Arduino & Électronique (10)
    {
      id: 6,
      name: "Kit Arduino Uno R3 Officiel",
      category: "arduino",
      price: 85000,
      description: "Carte officielle Arduino Uno R3 avec câble USB",
      features: ["ATmega328P", "14 ports numériques", "6 ports analogiques", "USB-B"],
      image: "/images/products/arduino-uno.jpg",
      brand: "Arduino",
      rating: 5,
      inStock: true,
      warranty: "6 mois"
    },
    {
      id: 7,
      name: "Kit Arduino Mega 2560",
      category: "arduino",
      price: 120000,
      oldPrice: 150000,
      description: "Carte Arduino Mega pour projets complexes",
      features: ["ATmega2560", "54 ports numériques", "16 analogiques", "Plus de mémoire"],
      image: "/images/products/arduino-mega.jpg",
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
      image: "/images/products/esp32.jpg",
      brand: "Espressif",
      rating: 5,
      inStock: true,
      warranty: "6 mois"
    },
    {
      id: 9,
      name: "ESP8266 NodeMCU",
      category: "arduino",
      price: 25000,
      description: "Module WiFi pas cher pour projets IoT",
      features: ["ESP8266", "WiFi intégré", "USB", "4Mo Flash"],
      image: "/images/products/esp8266.jpg",
      brand: "Espressif",
      rating: 4,
      inStock: true,
      warranty: "6 mois"
    },
    {
      id: 10,
      name: "Kit de capteurs Arduino (37 modules)",
      category: "composants",
      price: 45000,
      oldPrice: 65000,
      description: "Pack complet de 37 capteurs pour Arduino",
      features: ["Capteur ultrason", "Capteur de température", "Détecteur de mouvement", "Écran LCD"],
      image: "/images/products/sensor-kit.jpg",
      brand: "Generic",
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
      image: "/images/products/raspberry-pi4.jpg",
      brand: "Raspberry Pi",
      rating: 5,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 12,
      name: "Raspberry Pi Pico W",
      category: "arduino",
      price: 25000,
      description: "Microcontrôleur avec WiFi de Raspberry Pi",
      features: ["RP2040", "WiFi", "26 ports GPIO", "USB-C"],
      image: "/images/products/pico-w.jpg",
      brand: "Raspberry Pi",
      rating: 4,
      inStock: true,
      warranty: "6 mois"
    },
    {
      id: 13,
      name: "Breadboard 830 points",
      category: "composants",
      price: 8000,
      description: "Planche de prototypage pour circuits électroniques",
      features: ["830 points", "Amovible", "Auto-adhésif", "4 colonnes d'alimentation"],
      image: "/images/products/breadboard.jpg",
      brand: "Generic",
      rating: 4,
      inStock: true,
      warranty: "3 mois"
    },
    {
      id: 14,
      name: "Câbles Dupont (120 pièces)",
      category: "composants",
      price: 6000,
      description: "Lot de câbles pour connexions sur breadboard",
      features: ["40 Mâle-Mâle", "40 Mâle-Femelle", "40 Femelle-Femelle", "Longueur 20cm"],
      image: "/images/products/dupont-cables.jpg",
      brand: "Generic",
      rating: 4,
      inStock: true,
      warranty: "3 mois"
    },
    {
      id: 15,
      name: "Alimentation 5V 3A pour Arduino",
      category: "composants",
      price: 12000,
      description: "Alimentation secteur pour Arduino et ESP",
      features: ["5V", "3A", "USB", "Protection surtension"],
      image: "/images/products/power-supply.jpg",
      brand: "Generic",
      rating: 4,
      inStock: true,
      warranty: "6 mois"
    },

    // Robotique (8)
    {
      id: 16,
      name: "Kit Robotique Arduino 4WD",
      category: "robotique",
      price: 125000,
      oldPrice: 160000,
      description: "Kit complet pour construire un robot mobile",
      features: ["4 moteurs DC", "Châssis acrylique", "Capteur ultrason", "Piles incluses"],
      image: "/images/products/robot-4wd.jpg",
      brand: "Generic",
      rating: 5,
      inStock: true,
      warranty: "6 mois"
    },
    {
      id: 17,
      name: "Servomoteur SG90",
      category: "robotique",
      price: 5000,
      description: "Micro servo pour robots et projets de domotique",
      features: ["Angle 180°", "Poids 9g", "Tension 4.8-6V", "Couple 1.8kg/cm"],
      image: "/images/products/servo-sg90.jpg",
      brand: "Tower Pro",
      rating: 5,
      inStock: true,
      warranty: "3 mois"
    },
    {
      id: 18,
      name: "Servomoteur MG995",
      category: "robotique",
      price: 15000,
      description: "Servo puissant pour robots plus lourds",
      features: ["Angle 180°", "Métallique", "Couple 10kg/cm", "Tension 4.8-7.2V"],
      image: "/images/products/servo-mg995.jpg",
      brand: "Tower Pro",
      rating: 5,
      inStock: true,
      warranty: "6 mois"
    },
    {
      id: 19,
      name: "Moteur DC 6V avec réducteur",
      category: "robotique",
      price: 8000,
      description: "Moteur à courant continu avec réducteur de vitesse",
      features: ["Vitesse 200rpm", "Couple élevé", "Arbre de 6mm", "Bruit réduit"],
      image: "/images/products/dc-motor.jpg",
      brand: "Generic",
      rating: 4,
      inStock: true,
      warranty: "3 mois"
    },
    {
      id: 20,
      name: "Driver moteur L298N",
      category: "robotique",
      price: 12000,
      description: "Pont en H pour contrôler 2 moteurs DC",
      features: ["2A par canal", "Alimentation 5-35V", "Radiateur inclus", "Logique 5V"],
      image: "/images/products/l298n.jpg",
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
      image: "/images/products/robot-arm.jpg",
      brand: "Generic",
      rating: 5,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 22,
      name: "Shield Moteur Arduino",
      category: "robotique",
      price: 25000,
      description: "Shield pour contrôler jusqu'à 4 moteurs",
      features: ["4 moteurs DC", "2 servos", "Piles 9V", "Ports analogiques libres"],
      image: "/images/products/motor-shield.jpg",
      brand: "Generic",
      rating: 4,
      inStock: true,
      warranty: "6 mois"
    },
    {
      id: 23,
      name: "Module Bluetooth HC-05",
      category: "composants",
      price: 10000,
      description: "Module Bluetooth pour contrôle à distance",
      features: ["Bluetooth 2.0", "Portée 10m", "Alimentation 3.6-6V", "Configuration AT"],
      image: "/images/products/hc05.jpg",
      brand: "Generic",
      rating: 5,
      inStock: true,
      warranty: "6 mois"
    },

    // Serveurs & Stockage (5)
    {
      id: 24,
      name: "Serveur HP ProLiant ML30",
      category: "serveurs",
      price: 1250000,
      description: "Serveur entrée de gamme pour PME",
      features: ["Intel Xeon E-2234", "16Go RAM", "2x1To HDD", "RAID"],
      image: "/images/products/hp-server.jpg",
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
      image: "/images/products/synology.jpg",
      brand: "Synology",
      rating: 5,
      inStock: true,
      warranty: "2 ans"
    },
    {
      id: 26,
      name: "SSD Samsung 970 EVO Plus 1To",
      category: "composants",
      price: 120000,
      description: "SSD NVMe ultra-rapide pour PC",
      features: ["NVMe M.2", "Lecture 3500MB/s", "Écriture 3300MB/s", "5 ans garantie"],
      image: "/images/products/samsung-ssd.jpg",
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
      image: "/images/products/external-hdd.jpg",
      brand: "WD",
      rating: 4,
      inStock: true,
      warranty: "2 ans"
    },
    {
      id: 28,
      name: "Carte SD 32Go Classe 10",
      category: "composants",
      price: 12000,
      description: "Carte mémoire pour Raspberry Pi et ESP32",
      features: ["32Go", "Classe 10", "Haute vitesse", "Compatible IoT"],
      image: "/images/products/sd-card.jpg",
      brand: "Sandisk",
      rating: 5,
      inStock: true,
      warranty: "2 ans"
    },

    // Périphériques (7)
    {
      id: 29,
      name: "Imprimante Brother DCP-L2550DW",
      category: "peripheriques",
      price: 250000,
      oldPrice: 300000,
      description: "Imprimante laser multifonction",
      features: ["Impression recto-verso", "Scanner", "Wi-Fi", "Mobile Print"],
      image: "/images/products/brother.jpg",
      brand: "Brother",
      rating: 4,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 30,
      name: "Onduleur APC Back-UPS 650VA",
      category: "peripheriques",
      price: 95000,
      description: "Protection contre les coupures de courant",
      features: ["650VA", "6 prises", "Protection surtension", "Autonomie 15min"],
      image: "/images/products/apc-ups.jpg",
      brand: "APC",
      rating: 4,
      inStock: true,
      warranty: "2 ans"
    },
    {
      id: 31,
      name: "Écran Asus ProArt 27\"",
      category: "peripheriques",
      price: 450000,
      description: "Écran professionnel pour graphistes",
      features: ["27 pouces", "4K", "100% sRGB", "Calibré usine"],
      image: "/images/products/asus-screen.jpg",
      brand: "Asus",
      rating: 5,
      inStock: false,
      warranty: "3 ans"
    },
    {
      id: 32,
      name: "Souris Gaming Logitech G502",
      category: "peripheriques",
      price: 65000,
      description: "Souris gaming haute performance",
      features: ["25 600 DPI", "11 boutons", "RGB", "Poids ajustables"],
      image: "/images/products/logitech-mouse.jpg",
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
      image: "/images/products/mechanical-keyboard.jpg",
      brand: "Generic",
      rating: 4,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 34,
      name: "Webcam HD 1080p",
      category: "peripheriques",
      price: 45000,
      description: "Webcam Full HD pour visioconférence",
      features: ["1080p", "Micro intégré", "Autofocus", "Fixation écran"],
      image: "/images/products/webcam.jpg",
      brand: "Logitech",
      rating: 4,
      inStock: true,
      warranty: "1 an"
    },
    {
      id: 35,
      name: "Casque Gaming avec Micro",
      category: "peripheriques",
      price: 55000,
      description: "Casque audio surround 7.1",
      features: ["Son surround 7.1", "Micro flexible", "LED RGB", "Confort rembourré"],
      image: "/images/products/gaming-headset.jpg",
      brand: "Generic",
      rating: 4,
      inStock: true,
      warranty: "1 an"
    },

    // Composants supplémentaires (5)
    {
      id: 36,
      name: "Carte MicroSD 64Go",
      category: "composants",
      price: 18000,
      description: "Carte mémoire haute vitesse",
      features: ["64Go", "Classe 10", "UHS-I", "Adaptateur inclus"],
      image: "/images/products/microsd.jpg",
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
      image: "/images/products/gps-module.jpg",
      brand: "u-blox",
      rating: 5,
      inStock: true,
      warranty: "6 mois"
    },
    {
      id: 38,
      name: "Écran LCD 16x2",
      category: "composants",
      price: 8000,
      description: "Écran LCD pour affichage de données",
      features: ["16 caractères", "2 lignes", "Rétroéclairage", "Interface I2C"],
      image: "/images/products/lcd16x2.jpg",
      brand: "Generic",
      rating: 4,
      inStock: true,
      warranty: "6 mois"
    },
    {
      id: 39,
      name: "Module Relais 4 canaux",
      category: "arduino",
      price: 15000,
      description: "Module relais pour contrôler des appareils 220V",
      features: ["4 relais 10A", "Optocoupleur", "Tension 5V", "LED indicateur"],
      image: "/images/products/relay-module.jpg",
      brand: "Generic",
      rating: 5,
      inStock: true,
      warranty: "6 mois"
    },
    {
      id: 40,
      name: "Caméra ESP32-CAM",
      category: "arduino",
      price: 28000,
      description: "Module ESP32 avec caméra intégrée",
      features: ["ESP32-S", "Caméra OV2640", "Carte microSD", "WiFi/Bluetooth"],
      image: "/images/products/esp32-cam.jpg",
      brand: "Espressif",
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

  // Réinitialiser la page quand les filtres changent
  const handleFilterChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // Ajouter au panier
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

  // Supprimer du panier
  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.product.id !== productId));
  };

  // Mettre à jour la quantité
  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart(cart.map(item =>
      item.product.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  // Calculer le total
  const totalPrice = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  // Format prix
  const formatPrice = (price: number) => {
    return price.toLocaleString('fr-FR') + ' GNF';
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center text-center">
        <Image
          src="/images/e-shop-banner.jpg"
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
            E-shop
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Smartphones, lunettes, matériel informatique, électronique et robotique
          </p>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-blue-900">{products.length}</p>
              <p className="text-xs text-gray-500">Produits disponibles</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-900">10</p>
              <p className="text-xs text-gray-500">Catégories</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-900">25+</p>
              <p className="text-xs text-gray-500">Marques</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-900">Livraison</p>
              <p className="text-xs text-gray-500">À Conakry</p>
            </div>
          </div>
        </div>
      </section>

      {/* Notification panier */}
      {showCart && (
        <div className="fixed bottom-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          Produit ajouté au panier !
        </div>
      )}

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
            <div className="flex flex-wrap gap-2">
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

      {/* Grille des produits avec pagination */}
      <section className="py-16 bg-gray-50">
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
                      />
                      {product.oldPrice && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                          -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                        </div>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">Rupture</span>
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
                      <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                      <p className="text-gray-600 text-xs mb-2 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="text-xl font-bold text-blue-900">{formatPrice(product.price)}</span>
                          {product.oldPrice && (
                            <span className="text-xs text-gray-400 line-through ml-2">{formatPrice(product.oldPrice)}</span>
                          )}
                        </div>
                        <span className="text-xs text-green-600">Stock: {product.inStock ? "✓" : "✗"}</span>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedProduct(product);
                          setShowModal(true);
                        }}
                        disabled={!product.inStock}
                        className={`w-full py-2 rounded-lg font-semibold text-sm transition flex items-center justify-center gap-2 ${
                          product.inStock
                            ? "bg-blue-900 text-white hover:bg-blue-800"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        <ShoppingCart className="h-4 w-4" />
                        Voir détails
                      </button>
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
                    <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                      <ShoppingCart className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.product.name}</p>
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