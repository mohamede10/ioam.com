"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
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
        {/* Logo + texte ensemble, bien alignés */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="Logo IOAM"
            width={45}
            height={45}
          />
 <span className="font-bold text-blue-900 text-xs sm:text-base">
  Institut Ouest Africain de Mathématiques
</span>

        </Link>

        {/* Bouton burger */}
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
          <Link href="/programmes" className={navLinkClass("/programmes")}>
            Programmes
          </Link>
          <Link href="/admissions" className={navLinkClass("/admissions")}>
            Admissions
          </Link>

          {/* Menu déroulant */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdown(true)}
            onMouseLeave={() => setIsDropdown(false)}
          >
            <button
              className={`flex items-center gap-1 ${
                [
                  "/recherche",
                  "/enseignants",
                  "/etudiants",
                  "/actualites",
                  "/ressources",
                  "/contact",
                ].includes(pathname)
                  ? "text-blue-900 font-semibold border-b-2 border-blue-900"
                  : "text-gray-700 hover:text-blue-900"
              }`}
            >
              Plus ▾
            </button>
            {isDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200">
                <Link href="/recherche" className={dropdownLinkClass("/recherche")}>
                  Recherche
                </Link>
                <Link href="/enseignants" className={dropdownLinkClass("/enseignants")}>
                  Enseignants
                </Link>
                <Link href="/etudiants" className={dropdownLinkClass("/etudiants")}>
                  Étudiants
                </Link>
                <Link href="/actualites" className={dropdownLinkClass("/actualites")}>
                  Actualités
                </Link>
                <Link href="/ressources" className={dropdownLinkClass("/ressources")}>
                  Ressources
                </Link>
                <Link href="/contact" className={dropdownLinkClass("/contact")}>
                  Contact
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Menu mobile en modal (inchangé) */}
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
              <Link href="/programmes" className={navLinkClass("/programmes")} onClick={() => setIsOpen(false)}>
                Programmes
              </Link>
              <Link href="/admissions" className={navLinkClass("/admissions")} onClick={() => setIsOpen(false)}>
                Admissions
              </Link>
              <Link href="/recherche" className={navLinkClass("/recherche")} onClick={() => setIsOpen(false)}>
                Recherche
              </Link>
              <Link href="/enseignants" className={navLinkClass("/enseignants")} onClick={() => setIsOpen(false)}>
                Enseignants
              </Link>
              <Link href="/etudiants" className={navLinkClass("/etudiants")} onClick={() => setIsOpen(false)}>
                Étudiants
              </Link>
              <Link href="/actualites" className={navLinkClass("/actualites")} onClick={() => setIsOpen(false)}>
                Actualités
              </Link>
              <Link href="/ressources" className={navLinkClass("/ressources")} onClick={() => setIsOpen(false)}>
                Ressources
              </Link>
              <Link href="/contact" className={navLinkClass("/contact")} onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
