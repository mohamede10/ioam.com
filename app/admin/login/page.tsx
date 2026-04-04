"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("admin@cotechservices.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    // Simulation de connexion (à remplacer par votre API)
    if (email === "admin@cotechservices.com" && password === "admin123") {
      // Créer un token simple pour la session
      const fakeToken = btoa(JSON.stringify({ email, exp: Date.now() + 86400000 }));
      
      // Stocker dans localStorage
      localStorage.setItem("adminLoggedIn", "true");
      localStorage.setItem("adminToken", fakeToken);
      
      // Stocker dans un cookie pour le middleware
      document.cookie = "admin_logged_in=true; path=/; max-age=86400";
      document.cookie = `admin_token=${fakeToken}; path=/; max-age=86400`;
      
      // Rediriger vers le dashboard
      router.push("/admin");
    } else {
      setError("Email ou mot de passe incorrect");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
        <div className="text-center mb-8">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="h-10 w-10 text-blue-900" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Administration</h1>
          <p className="text-gray-500 text-sm mt-1">Connectez-vous pour accéder au tableau de bord</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                placeholder="admin@cotechservices.com"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
              </button>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition disabled:opacity-50"
          >
            {loading ? "Connexion en cours..." : "Se connecter"}
          </button>
        </form>
        
        <p className="text-center text-xs text-gray-400 mt-6">
          Email: admin@cotechservices.com | Mot de passe: admin123
        </p>
      </div>
    </div>
  );
}