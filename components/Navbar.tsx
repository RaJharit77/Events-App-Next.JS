'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Image
                        src="/img/events.png"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <Link href="/" className="text-2xl font-bold text-white hover:underline">
                        RJ Events
                    </Link>
                </div>

                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="text-gray-200 hover:text-white transition">
                        Accueil
                    </Link>
                    <Link href="/events" className="text-gray-200 hover:text-white transition">
                        Événements
                    </Link>
                    <Link href="/reservations" className="text-gray-200 hover:text-white transition">
                        Réservations
                    </Link>
                    <Link href="/contacts" className="text-gray-200 hover:text-white transition">
                        Contact
                    </Link>
                </div>

                <div className="flex items-center space-x-2">
                    <Link href="/profile" className="text-gray-200 hover:text-white bg-transparent border border-gray-200 px-4 py-2 rounded-lg transition">
                    <FaUserCircle className="text-white text-2xl" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
