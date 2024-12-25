'use client';

import { Button } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center">
      <div className="text-center" data-aos="fade-up">
        <h1 className="text-4xl font-extrabold text-white mb-4">
          Bienvenue sur <span className="text-indigo-400">Gestion des Événements</span>
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          Gérez vos événements, vos réservations, et vos invités facilement.
        </p>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="bg-indigo-600 hover:bg-indigo-800 transition"
        >
          Explorer les Événements
        </Button>
      </div>

      <div className="mt-10" data-aos="fade-up">
        <img
          src="/img/img_events.jpg" 
          alt="Gestion des événements"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </div>
  );
}
