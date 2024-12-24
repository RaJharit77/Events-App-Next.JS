'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between">
                <div>
                    <Link href="/">
                        <a className="text-2xl font-bold">Événements</a>
                    </Link>
                </div>
                <div>
                    <Link href="/events">
                        <a className="text-gray-600 hover:text-gray-800">Mes Événements</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
