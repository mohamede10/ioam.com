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
          <Image src="/images/logo/logo.png" alt="Logo COTECH SERVICES" width={75} height={75} />
          <div className="flex-col hidden sm:block">
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
          className="sm:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
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

          {/* Menu déroulant Plus */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 ${
                [
                  "/solutions-iot",
                  "/infrastructure-reseau",
                  "/maintenance",
                  "/ventes-equipements",
                  "/gps",
                  "/formations",
                  "/contact",
                ].includes(pathname)
                  ? "text-blue-900 font-semibold border-b-2 border-blue-900"
                  : "text-gray-700 hover:text-blue-900"
              }`}
            >
              Plus ▾
            </button>

            {/* Contenu du menu */}
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/solutions-iot" className={dropdownLinkClass("/solutions-iot")}>
                Solutions IoT
              </Link>
              <Link href="/infrastructure-reseau" className={dropdownLinkClass("/infrastructure-reseau")}>
                Infrastructures Réseau
              </Link>
              <Link href="/maintenance" className={dropdownLinkClass("/maintenance")}>
                Maintenance IT
              </Link>
              <Link href="/ventes-equipements" className={dropdownLinkClass("/ventes-equipements")}>
                Vente d'Équipements
              </Link>
              <Link href="/gps" className={dropdownLinkClass("/gps")}>
                Systèmes GPS
              </Link>
              <Link href="/formations" className={dropdownLinkClass("/formations")}>
                Formations
              </Link>
              <Link href="/contact" className={dropdownLinkClass("/contact")}>
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Menu mobile (modal) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-5/6 max-w-sm p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 text-2xl"
            >
              ✕
            </button>
            <nav className="flex flex-col gap-4 text-lg font-medium text-gray-700 mt-6">
              <Link href="/" className={navLinkClass("/")} onClick={() => setIsOpen(false)}>
                Accueil
              </Link>
              <Link href="/about" className={navLinkClass("/about")} onClick={() => setIsOpen(false)}>
                À propos
              </Link>
              <Link
                href="/services"
                className={navLinkClass("/services")}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/projets"
                className={navLinkClass("/projets")}
                onClick={() => setIsOpen(false)}
              >
                Projets
              </Link>
              <Link
                href="/solutions-iot"
                className={navLinkClass("/solutions-iot")}
                onClick={() => setIsOpen(false)}
              >
                Solutions IoT
              </Link>
              <Link
                href="/infrastructure-reseau"
                className={navLinkClass("/infrastructure-reseau")}
                onClick={() => setIsOpen(false)}
              >
                Infrastructures Réseau
              </Link>
              <Link
                href="/maintenance"
                className={navLinkClass("/maintenance")}
                onClick={() => setIsOpen(false)}
              >
                Maintenance IT
              </Link>
              <Link
                href="/ventes-equipements"
                className={navLinkClass("/ventes-equipements")}
                onClick={() => setIsOpen(false)}
              >
                Vente d'Équipements
              </Link>
              <Link
                href="/gps"
                className={navLinkClass("/gps")}
                onClick={() => setIsOpen(false)}
              >
                Systèmes GPS
              </Link>
              <Link
                href="/formations"
                className={navLinkClass("/formations")}
                onClick={() => setIsOpen(false)}
              >
                Formations
              </Link>
              <Link
                href="/contact"
                className={navLinkClass("/contact")}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
            
            {/* Informations de contact rapides dans le menu mobile */}
            <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-500">
              <p>📞 +224 627 421 722</p>
              <p>✉️ cotechservices.gn@gmail.com</p>
              <p>📍 Conakry, Guinée</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}