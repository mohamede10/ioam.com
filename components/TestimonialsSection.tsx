"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mamadou Diallo",
    position: "CEO, Entreprise X",
    text: "COTECH SERVICES a réalisé un excellent travail sur notre infrastructure réseau. Professionnalisme et réactivité au rendez-vous.",
    rating: 5,
    color: "from-blue-600 to-blue-800"
  },
  {
    name: "Aissatou Barry",
    position: "Directrice, ONG Y",
    text: "Le système GPS installé par COTECH nous permet désormais de suivre efficacement nos véhicules. Un service de qualité !",
    rating: 5,
    color: "from-blue-600 to-blue-800"
  },
  {
    name: "Ibrahima Camara",
    position: "Gérant, Commerce Z",
    text: "Notre site e-commerce est parfaitement fonctionnel. L'équipe est très à l'écoute et compétente.",
    rating: 5,
    color: "from-blue-600 to-blue-800"
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-gray-600">Ils nous ont fait confiance et témoignent</p>
        </div>

        <div className="relative">
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-blue-900 text-white rounded-full p-2">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-blue-900 text-white rounded-full p-2">
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center border-4 border-blue-900`}>
                <span className="text-white font-bold text-3xl">{testimonials[current].name.charAt(0)}</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-3">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-base md:text-lg italic">"{testimonials[current].text}"</p>
                <div className="mt-4">
                  <p className="font-bold text-blue-900">{testimonials[current].name}</p>
                  <p className="text-gray-500 text-xs">{testimonials[current].position}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button key={index} onClick={() => setCurrent(index)} className={`h-2 rounded-full transition ${index === current ? "w-8 bg-blue-900" : "w-2 bg-gray-300"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}