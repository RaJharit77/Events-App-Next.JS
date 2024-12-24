'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-black shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between">
                <div>
                    <Link href="/" className="text-2xl font-bold">
                        Événement
                    </Link>
                </div>
                <div>
                    <Link href="/events" className="text-gray-200 hover:text-gray-800">
                        Mes Événements
                    </Link>
                </div>
            </div>
        </nav>
    );
}
