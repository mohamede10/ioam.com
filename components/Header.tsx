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

  // Réseaux sociaux avec icônes SVG
  const socialLinks = [
    { 
      name: "Facebook", 
      url: "https://facebook.com/cotechservices", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
        </svg>
      )
    },
    { 
      name: "WhatsApp", 
      url: "https://wa.me/224610093485?text=Bonjour%20COTECH%20SERVICES%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20services", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.032 2.001c-5.516 0-10 4.484-10 10 0 1.852.504 3.588 1.385 5.084L2.04 21.96l4.93-1.342a9.979 9.979 0 0 0 5.062 1.383c5.516 0 10-4.484 10-10s-4.484-10-10-10zm0 18.364c-1.542 0-2.978-.43-4.21-1.172l-.3-.18-2.91.792.79-2.868-.185-.306A8.138 8.138 0 0 1 4.032 12c0-4.422 3.598-8 8-8s8 3.578 8 8-3.598 8-8 8z"/>
          <path d="M16.434 14.043c-.206-.103-1.218-.601-1.408-.67-.19-.068-.328-.103-.467.103-.139.206-.537.67-.658.808-.12.137-.24.154-.447.051-.206-.103-.87-.32-1.656-1.022-.612-.547-1.025-1.222-1.146-1.428-.12-.206-.012-.318.09-.42.09-.09.206-.24.308-.36.103-.12.138-.206.206-.343.068-.137.034-.257-.017-.36-.051-.103-.467-1.124-.64-1.54-.168-.4-.338-.344-.466-.35-.12-.006-.257-.006-.395-.006-.137 0-.36.051-.548.257-.188.206-.719.703-.719 1.714 0 1.011.736 1.988.84 2.125.102.137 1.44 2.203 3.496 3.077.489.208.872.332 1.17.424.492.156.94.134 1.295.082.395-.055 1.218-.497 1.39-.977.171-.48.171-.892.12-.978-.052-.086-.19-.137-.395-.24z"/>
        </svg>
      )
    },
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com/company/cotechservices", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.204 0 22.225 0z"/>
        </svg>
      )
    },
    { 
      name: "Twitter", 
      url: "https://twitter.com/cotechservices", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    { 
      name: "Instagram", 
      url: "https://instagram.com/cotechservices", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      )
    },
    { 
      name: "TikTok", 
      url: "https://tiktok.com/@cotechservices", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      )
    },
    { 
      name: "YouTube", 
      url: "https://youtube.com/@cotechservices", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

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
            </nav>
            
            {/* Réseaux sociaux avec icônes SVG */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center mb-3">Suivez-nous</p>
              <div className="flex flex-wrap justify-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-100 hover:bg-blue-200 p-2 rounded-full transition-all duration-300 hover:scale-110 text-blue-700"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="mt-4 text-center text-xs text-blue-900 space-y-1">
                <p>+224 628 811 827 / +224 610 093 485</p>
                <p>cotechservices.gn@gmail.com</p>
                <p>Conakry, Guinée</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}