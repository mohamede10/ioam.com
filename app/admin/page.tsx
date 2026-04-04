"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  MessageSquare, 
  Settings,
  Package,
  ShoppingCart,
  DollarSign,
  Eye,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  MoreVertical,
  Download,
  Plus,
  Edit,
  Trash2,
  Star,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  LogOut
} from "lucide-react";

interface Order {
  id: number;
  customer: string;
  email: string;
  products: { name: string; quantity: number; price: number }[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  date: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "active" | "inactive";
  image: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [adminName, setAdminName] = useState("Administrateur");

  // Données de démonstration
  const stats = [
    { title: "Chiffre d'affaires", value: "12 450 000 GNF", change: "+15%", icon: DollarSign, color: "bg-green-500" },
    { title: "Commandes", value: "156", change: "+8%", icon: ShoppingCart, color: "bg-blue-500" },
    { title: "Clients", value: "342", change: "+12%", icon: Users, color: "bg-purple-500" },
    { title: "Produits", value: "68", change: "+5", icon: Package, color: "bg-orange-500" }
  ];

  const recentOrders: Order[] = [
    {
      id: 1001,
      customer: "Mamadou Diallo",
      email: "mamadou@email.com",
      products: [{ name: "iPhone 13", quantity: 1, price: 680000 }],
      total: 680000,
      status: "delivered",
      date: "2024-03-15"
    },
    {
      id: 1002,
      customer: "Aissatou Barry",
      email: "aissatou@email.com",
      products: [{ name: "Lunettes photochromiques", quantity: 2, price: 150000 }],
      total: 300000,
      status: "shipped",
      date: "2024-03-14"
    },
    {
      id: 1003,
      customer: "Ibrahima Camara",
      email: "ibrahima@email.com",
      products: [{ name: "HP Pavilion 15", quantity: 1, price: 450000 }],
      total: 450000,
      status: "processing",
      date: "2024-03-14"
    },
    {
      id: 1004,
      customer: "Fatoumata Soumah",
      email: "fatou@email.com",
      products: [{ name: "Kit Arduino Uno", quantity: 3, price: 85000 }],
      total: 255000,
      status: "pending",
      date: "2024-03-13"
    }
  ];

  const products: Product[] = [
    { id: 1, name: "iPhone 13", category: "Smartphones", price: 680000, stock: 12, status: "active", image: "/images/products/iphone-13.jpg" },
    { id: 2, name: "Lunettes photochromiques", category: "Lunettes", price: 150000, stock: 25, status: "active", image: "/images/products/lunettes-photo.jpg" },
    { id: 3, name: "HP Pavilion 15", category: "Ordinateurs", price: 450000, stock: 5, status: "active", image: "/images/products/hp-pavilion.jpg" },
    { id: 4, name: "Kit Arduino Uno", category: "Arduino", price: 85000, stock: 30, status: "active", image: "/images/products/arduino-uno.jpg" }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { label: "En attente", color: "bg-yellow-100 text-yellow-800" },
      processing: { label: "En traitement", color: "bg-blue-100 text-blue-800" },
      shipped: { label: "Expédié", color: "bg-purple-100 text-purple-800" },
      delivered: { label: "Livré", color: "bg-green-100 text-green-800" },
      cancelled: { label: "Annulé", color: "bg-red-100 text-red-800" }
    };
    const config = statusConfig[status as keyof typeof statusConfig];
    return <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>{config.label}</span>;
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('fr-FR') + ' GNF';
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('fr-FR');
  };

  const handleLogout = () => {
    // Supprimer les cookies
    document.cookie = "admin_logged_in=; path=/; max-age=0";
    document.cookie = "admin_token=; path=/; max-age=0";
    // Supprimer le localStorage
    localStorage.removeItem("adminLoggedIn");
    localStorage.removeItem("adminToken");
    // Rediriger vers la page de connexion
    router.push("/admin/login");
  };

  const menuItems = [
    { id: "dashboard", name: "Tableau de bord", icon: LayoutDashboard, path: "/admin" },
    { id: "products", name: "Produits", icon: Package, path: "/admin/produits" },
    { id: "formations", name: "Formations", icon: GraduationCap, path: "/admin/formations" },
    { id: "orders", name: "Commandes", icon: ShoppingBag, path: "/admin/commandes" },
    { id: "customers", name: "Clients", icon: Users, path: "/admin/clients" },
    { id: "messages", name: "Messages", icon: MessageSquare, path: "/admin/messages" },
    { id: "settings", name: "Paramètres", icon: Settings, path: "/admin/parametres" }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full bg-blue-900 text-white transition-all duration-300 z-20 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-4 border-b border-blue-800 flex items-center justify-between">
          {sidebarOpen && <span className="font-bold text-lg">COTECH ADMIN</span>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 hover:bg-blue-800 rounded">
            <LayoutDashboard className="h-5 w-5" />
          </button>
        </div>
      
        <nav className="mt-6 py-10">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 transition ${
                activeTab === item.id ? "bg-blue-800" : "hover:bg-blue-800"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {sidebarOpen && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              {activeTab === "dashboard" && "Tableau de bord"}
              {activeTab === "products" && "Gestion des produits"}
              {activeTab === "formations" && "Gestion des formations"}
              {activeTab === "orders" && "Gestion des commandes"}
              {activeTab === "customers" && "Clients"}
              {activeTab === "messages" && "Messages"}
              {activeTab === "settings" && "Paramètres"}
            </h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input type="text" placeholder="Rechercher..." className="pl-10 pr-4 py-2 border rounded-lg w-64" />
              </div>
              
              {/* Menu utilisateur avec déconnexion */}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold hover:bg-blue-800 transition"
                >
                  {adminName.charAt(0)}
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border z-50">
                    <div className="p-3 border-b">
                      <p className="font-semibold text-gray-800">{adminName}</p>
                      <p className="text-xs text-gray-500">admin@cotechservices.com</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-3 text-red-600 hover:bg-gray-100 rounded-b-lg transition"
                    >
                      <LogOut className="h-4 w-4" />
                      Déconnexion
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard */}
        {activeTab === "dashboard" && (
          <div className="p-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${stat.color} p-3 rounded-lg text-white`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <span className="text-green-600 text-sm font-medium">{stat.change}</span>
                  </div>
                  <h3 className="text-gray-500 text-sm">{stat.title}</h3>
                  <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Commandes récentes</h2>
                <button 
                  onClick={() => setActiveTab("orders")}
                  className="text-blue-600 text-sm hover:underline"
                >
                  Voir toutes
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b">
                    <tr className="text-left text-gray-500 text-sm">
                      <th className="pb-3">ID</th>
                      <th className="pb-3">Client</th>
                      <th className="pb-3">Total</th>
                      <th className="pb-3">Statut</th>
                      <th className="pb-3">Date</th>
                      <th className="pb-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b hover:bg-gray-50">
                        <td className="py-3">#{order.id}</td>
                        <td className="py-3">{order.customer}</td>
                        <td className="py-3">{formatPrice(order.total)}</td>
                        <td className="py-3">{getStatusBadge(order.status)}</td>
                        <td className="py-3">{formatDate(order.date)}</td>
                        <td className="py-3">
                          <button 
                            onClick={() => {
                              setSelectedOrder(order);
                              setShowOrderModal(true);
                            }}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Actions rapides */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Link href="/admin/produits" className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-2">Gestion des produits</h3>
                <p className="mb-4">Ajoutez, modifiez ou supprimez des produits de votre catalogue.</p>
                <span className="inline-flex items-center gap-2 bg-white text-blue-900 px-4 py-2 rounded-lg hover:bg-gray-100">
                  Gérer les produits <Plus className="h-4 w-4" />
                </span>
              </Link>
              <Link href="/admin/formations" className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-6 text-white hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-2">Gestion des formations</h3>
                <p className="mb-4">Ajoutez, modifiez ou supprimez des formations de votre catalogue.</p>
                <span className="inline-flex items-center gap-2 bg-white text-purple-900 px-4 py-2 rounded-lg hover:bg-gray-100">
                  Gérer les formations <Plus className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        )}

        {/* Products Management - Aperçu */}
        {activeTab === "products" && (
          <div className="p-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Catalogue produits</h2>
                <Link href="/admin/produits" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Plus className="h-4 w-4" /> Gérer les produits
                </Link>
              </div>
              <div className="grid gap-4">
                {products.map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Package className="h-6 w-6 text-gray-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div>
                        <p className="text-sm text-gray-500">Prix</p>
                        <p className="font-semibold">{formatPrice(product.price)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Stock</p>
                        <p className="font-semibold">{product.stock}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Statut</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${product.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {product.status === 'active' ? 'Actif' : 'Inactif'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Formations Management - Aperçu */}
        {activeTab === "formations" && (
          <div className="p-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Catalogue formations</h2>
                <Link href="/admin/formations" className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  <Plus className="h-4 w-4" /> Gérer les formations
                </Link>
              </div>
              <div className="text-center py-12 text-gray-500">
                <GraduationCap className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                <p>Cliquez sur "Gérer les formations" pour ajouter vos formations</p>
              </div>
            </div>
          </div>
        )}

        {/* Messages */}
        {activeTab === "messages" && (
          <div className="p-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Messages des clients</h2>
              <div className="space-y-4">
                {[
                  { name: "Mamadou Diallo", email: "mamadou@email.com", subject: "Demande de devis", message: "Je souhaite obtenir un devis pour 5 iPhone 13...", date: "2024-03-15", status: "non lu" },
                  { name: "Aissatou Barry", email: "aissatou@email.com", subject: "Information produit", message: "Les lunettes photochromiques sont-elles disponibles en monture enfant ?", date: "2024-03-14", status: "lu" }
                ].map((msg, idx) => (
                  <div key={idx} className={`p-4 border rounded-lg ${msg.status === 'non lu' ? 'bg-blue-50 border-blue-200' : 'hover:bg-gray-50'}`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{msg.name}</h3>
                        <p className="text-sm text-gray-500">{msg.email}</p>
                        <p className="text-sm font-medium mt-1">{msg.subject}</p>
                        <p className="text-sm text-gray-600 mt-1">{msg.message}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400">{formatDate(msg.date)}</p>
                        {msg.status === 'non lu' && <span className="inline-block mt-1 px-2 py-1 bg-red-500 text-white text-xs rounded">Non lu</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Settings */}
        {activeTab === "settings" && (
          <div className="p-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Paramètres</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom du site</label>
                  <input type="text" defaultValue="COTECH SERVICES" className="w-full max-w-md border rounded-lg px-4 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email de contact</label>
                  <input type="email" defaultValue="cotechservices.gn@gmail.com" className="w-full max-w-md border rounded-lg px-4 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <input type="tel" defaultValue="+224 628 811 827" className="w-full max-w-md border rounded-lg px-4 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                  <input type="text" defaultValue="Conakry, Guinée" className="w-full max-w-md border rounded-lg px-4 py-2" />
                </div>
                <button className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800">Enregistrer les modifications</button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Modal Order Details */}
      {showOrderModal && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">Détails de la commande #{selectedOrder.id}</h2>
              <button onClick={() => setShowOrderModal(false)} className="p-1 hover:bg-gray-100 rounded-full">
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="font-semibold">{selectedOrder.customer}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-semibold">{selectedOrder.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-semibold">{formatDate(selectedOrder.date)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Statut</p>
                    <p>{getStatusBadge(selectedOrder.status)}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-2">Produits</p>
                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr className="text-left text-sm">
                          <th className="px-4 py-2">Produit</th>
                          <th className="px-4 py-2">Quantité</th>
                          <th className="px-4 py-2">Prix unitaire</th>
                          <th className="px-4 py-2">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedOrder.products.map((product, idx) => (
                          <tr key={idx} className="border-t">
                            <td className="px-4 py-2">{product.name}</td>
                            <td className="px-4 py-2">{product.quantity}</td>
                            <td className="px-4 py-2">{formatPrice(product.price)}</td>
                            <td className="px-4 py-2">{formatPrice(product.price * product.quantity)}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot className="bg-gray-50 border-t">
                        <tr>
                          <td colSpan={3} className="px-4 py-2 text-right font-semibold">Total :</td>
                          <td className="px-4 py-2 font-bold text-blue-900">{formatPrice(selectedOrder.total)}</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close user menu */}
      {showUserMenu && (
        <div className="fixed inset-0 z-40" onClick={() => setShowUserMenu(false)}></div>
      )}
    </div>
  );
}