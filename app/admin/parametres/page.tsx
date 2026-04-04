"use client";
import Link from "next/link";
import { ArrowLeft, Settings } from "lucide-react";

export default function AdminParametres() {
  return (
    <div className="p-6">
      <Link href="/admin" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="h-4 w-4" /> Retour au tableau de bord
      </Link>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Paramètres</h1>
        <p className="text-gray-600">Page en construction. Configuration du site à venir.</p>
        <div className="mt-8 p-8 text-center border-2 border-dashed rounded-lg">
          <Settings className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500">Configuration générale du site</p>
        </div>
      </div>
    </div>
  );
}