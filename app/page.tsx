'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-4" data-aos="fade-up">
        Bienvenue sur Gestion des Événements
      </h1>
      <p className="text-lg text-center text-gray-600 mb-6" data-aos="fade-up">
        Gérez vos événements, vos réservations, et vos invités facilement.
      </p>
    </div>
  );
}
