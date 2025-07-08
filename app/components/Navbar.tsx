'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-sm bg-[#12252d] text-white" style={{ borderBottom: 'none' }}>
      {/* Logo + Links */}
      <div className="flex items-center space-x-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/nec-digital-horizontal.png"
            alt="NEC Digital Logo"
            width={160}
            height={40}
            priority
          />
        </Link>

        {/* Menú principal */}
        <div className="flex space-x-6">
          {/* Servicios con submenú */}
          <div className="relative group">
            <button className="text-white font-medium hover:text-[#95d4dc] focus:outline-none">
              Servicios ▾
            </button>
            <div className="absolute hidden group-hover:block bg-white border rounded shadow-md mt-2 py-2 z-10">
              <Link href="/servicios/estrategia" className="block px-4 py-2 text-[#1a2734] hover:bg-[#e6eef5]">Estrategia</Link>
              <Link href="/servicios/desarrollo" className="block px-4 py-2 text-[#1a2734] hover:bg-[#e6eef5]">Desarrollo tecnológico</Link>
              <Link href="/servicios/transformacion" className="block px-4 py-2 text-[#1a2734] hover:bg-[#e6eef5]">Transformación digital</Link>
            </div>
          </div>

          <Link href="/nosotros" className="text-white font-medium hover:text-[#95d4dc]">
            Sobre Nosotros
          </Link>
        </div>
      </div>

      {/* Idioma + Contacto */}
      <div className="flex items-center space-x-6">
        <Link href="/contacto" className="text-white font-medium hover:text-[#95d4dc]">
          Contáctanos
        </Link>

        {/* Dropdown Idioma */}
        <div className="relative group">
          <button className="text-white hover:text-[#95d4dc] focus:outline-none">
            🌐 ES ▾
          </button>
          <div className="absolute hidden group-hover:block bg-white border rounded shadow-md mt-2 py-2 z-10 right-0">
            <span className="block px-4 py-2 text-sm text-gray-500">Español (actual)</span>
            <button disabled className="block px-4 py-2 text-gray-400 text-sm cursor-not-allowed">English (próximamente)</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
