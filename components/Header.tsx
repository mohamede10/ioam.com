"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Style onglets dans la barre principale
  const navLinkClass = (path: string) =>
    pathname === path
      ? "text-blue-900 font-semibold border-b-2 border-blue-900"
      : "text-gray-700 hover:text-blue-900";

  // Style onglets dans le menu déroulant
  const dropdownLinkClass = (path: string) =>
    pathname === path
      ? "text-blue-900 font-semibold bg-gray-100 block px-4 py-2"
      : "text-gray-700 hover:text-blue-900 hover:bg-gray-50 block px-4 py-2";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + texte ensemble */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/images/logo/logo.png" 
            alt="Logo COTECH SERVICES" 
            width={100} 
            height={100} 
            className="w-auto h-auto"
          />
          <div className="flex-col hidden sm:flex">
            <span className="font-bold text-blue-900 text-sm sm:text-base">
              COTECH SERVICES
            </span>
            <span className="text-xs text-gray-500 hidden sm:block">
              Solutions IT & Systèmes Intelligents
            </span>
          </div>
        </Link>

        {/* Bouton burger (mobile) */}
        <button
          onClick={() => setIsOpen(true)}
          className="sm:hidden p-4 rounded-xl hover:bg-gray-100 text-3xl font-bold w-14 h-14 flex items-center justify-center"
          aria-label="Menu"
        >
          ☰
        </button>

        {/* Menu desktop */}
        <nav className="hidden sm:flex gap-6 text-sm font-medium relative items-center">
          <Link href="/" className={navLinkClass("/")}>
            Accueil
          </Link>
          <Link href="/about" className={navLinkClass("/about")}>
            À propos
          </Link>
          <Link href="/services" className={navLinkClass("/services")}>
            Services
          </Link>
          <Link href="/projets" className={navLinkClass("/projets")}>
            Projets
          </Link>
          <Link href="/formations" className={navLinkClass("/formations")}>
            Formation
          </Link>
          <Link href="/e-shop" className={navLinkClass("/e-shop")}>
            E-shop
          </Link>
          <Link href="/contact" className={navLinkClass("/contact")}>
            Contact
          </Link>

          {/* Menu déroulant Plus */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 ${
                [
                  "/services/web",
                  "/services/reseau",
                  "/services/iot",
                  "/services/maintenance",
                  "/services/vente-equipements",
                  "/services/gps",
                  "/services/infographie",
                  "/services/odoo",
                  "/services/automobile",
                  "/services/formation",
                  "/services/conseil",
                  "/services/cloud"
                ].includes(pathname)
                  ? "text-blue-900 font-semibold border-b-2 border-blue-900"
                  : "text-gray-700 hover:text-blue-900"
              }`}
            >
              Plus ▾
            </button>

            {/* Contenu du menu */}
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/services/web" className={dropdownLinkClass("/services/web")}>
                Développement Web
              </Link>
              <Link href="/services/reseau" className={dropdownLinkClass("/services/reseau")}>
                Réseaux & Sécurité
              </Link>
              <Link href="/services/iot" className={dropdownLinkClass("/services/iot")}>
                Solutions IoT
              </Link>
              <Link href="/services/maintenance" className={dropdownLinkClass("/services/maintenance")}>
                Maintenance IT
              </Link>
              <Link href="/services/vente-equipements" className={dropdownLinkClass("/services/vente-equipements")}>
                Vente d'Équipements
              </Link>
              <Link href="/services/gps" className={dropdownLinkClass("/services/gps")}>
                Systèmes GPS
              </Link>
              <Link href="/services/infographie" className={dropdownLinkClass("/services/infographie")}>
                Infographie & Design
              </Link>
              <Link href="/services/odoo" className={dropdownLinkClass("/services/odoo")}>
                Gestion ERP Odoo
              </Link>
              <Link href="/services/automobile" className={dropdownLinkClass("/services/automobile")}>
                Solutions Automobile
              </Link>
              <Link href="/services/formation" className={dropdownLinkClass("/services/formation")}>
                Formation IT
              </Link>
              <Link href="/services/conseil" className={dropdownLinkClass("/services/conseil")}>
                Conseil & Audit IT
              </Link>
              <Link href="/services/cloud" className={dropdownLinkClass("/services/cloud")}>
                Cloud & Hébergement
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Menu mobile (modal) - Version compacte */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-5/6 max-w-sm p-4 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-600 text-2xl hover:text-gray-900"
            >
              ✕
            </button>
            <nav className="flex flex-col gap-2 text-base font-medium text-gray-700 mt-4 max-h-[80vh] overflow-y-auto">
              <Link 
                href="/" 
                className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors" 
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/about" 
                className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors" 
                onClick={() => setIsOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="/services"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/projets"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projets
              </Link>
              <Link
                href="/formations"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Formation
              </Link>
              <Link
                href="/e-shop"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                E-shop
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {/* Séparateur */}
              <div className="border-t border-gray-200 my-2"></div>
              
              <Link
                href="/services/web"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                🔹 Développement Web
              </Link>
              <Link
                href="/services/reseau"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                🔹 Réseaux & Sécurité
              </Link>
              <Link
                href="/services/iot"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                🔹 Solutions IoT
              </Link>
              <Link
                href="/services/maintenance"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                🔹 Maintenance IT
              </Link>
              <Link
                href="/services/vente-equipements"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                🔹 Vente d'Équipements
              </Link>
              <Link
                href="/services/gps"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                🔹 Systèmes GPS
              </Link>
              <Link
                href="/services/infographie"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                🔹 Infographie & Design
              </Link>
              <Link
                href="/services/odoo"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                🔹 Gestion ERP Odoo
              </Link>
              <Link
                href="/services/automobile"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                🔹 Solutions Automobile
              </Link>
              <Link
                href="/services/formation"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                🔹 Formation IT
              </Link>
              <Link
                href="/services/conseil"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                🔹 Conseil & Audit IT
              </Link>
              <Link
                href="/services/cloud"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                🔹 Cloud & Hébergement
              </Link>
            </nav>
            
            {/* Informations de contact rapides dans le menu mobile - Version compacte */}
            <div className="mt-4 pt-3 border-t border-gray-200 text-xs text-gray-500 space-y-1">
              <p className="flex items-center gap-2">📞 +224 628 811 827 / +224 610 093 485</p>
              <p className="flex items-center gap-2">✉️ cotechservices.gn@gmail.com</p>
              <p className="flex items-center gap-2">📍 Conakry, Guinée</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}