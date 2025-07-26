'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-sm bg-[#12252d] text-white relative">
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
        <div className="flex space-x-6 items-center">
          {/* Servicios con submenú (con clic) */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="text-white font-medium hover:text-[#95d4dc] focus:outline-none"
            >
              Servicios ▾
            </button>
            {showDropdown && (
              <div
                className="absolute left-0 mt-2 flex flex-col bg-white border rounded shadow-md py-2 z-20 min-w-[220px]"
                onMouseLeave={() => setShowDropdown(false)}
              >
                <Link href="/servicios/transformacion" className="px-4 py-2 text-[#1a2734] hover:bg-[#e6eef5]">
                  Transformación digital
                </Link>
                <Link href="/servicios/desarrollo" className="px-4 py-2 text-[#1a2734] hover:bg-[#e6eef5]">
                  Desarrollo tecnológico
                </Link>
                <Link href="/servicios/estrategia" className="px-4 py-2 text-[#1a2734] hover:bg-[#e6eef5]">
                  Estrategia
                </Link>
              </div>
            )}
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

        {/* Dropdown Idioma (clic) */}
        <div className="relative">
          <button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            className="text-white hover:text-[#95d4dc] focus:outline-none"
          >
            🌐 ES ▾
          </button>
          {showLanguageDropdown && (
            <div
              className="absolute right-0 mt-2 bg-white border rounded shadow-md py-2 z-20 min-w-[180px]"
              onMouseLeave={() => setShowLanguageDropdown(false)}
            >
              <span className="block px-4 py-2 text-sm text-gray-500">Español (actual)</span>
              <button disabled className="block w-full text-left px-4 py-2 text-gray-400 text-sm cursor-not-allowed">
                English (próximamente)
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
