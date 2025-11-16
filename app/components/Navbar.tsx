'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [showServicios, setShowServicios] = useState(false);
  const [showIndustrias, setShowIndustrias] = useState(false);
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
          {/* Servicios con submenú */}
          <div className="relative">
            <button
              onClick={() => {
                setShowServicios(!showServicios);
                setShowIndustrias(false);
              }}
              className="text-white font-medium hover:text-[#95d4dc] focus:outline-none"
            >
              Servicios ▾
            </button>
            {showServicios && (
              <div
                className="absolute left-0 mt-2 flex flex-col bg-white border rounded shadow-md py-2 z-20 min-w-[240px]"
                onMouseLeave={() => setShowServicios(false)}
              >
                <Link href="/servicios/transformacion" className="px-4 py-2 text-[#1a2734] hover:bg-[#e6eef5]">Transformación digital</Link>
                <Link href="/servicios/ciberseguridad" className="px-4 py-2 text-[#1a2734] hover:bg-[#e6eef5]">Ciberseguridad</Link>
                <Link href="/servicios/data-science" className="px-4 py-2 text-[#1a2734] hover:bg-[#e6eef5]">Data Science</Link>
                <Link href="/servicios/gestion-procesos" className="px-4 py-2 text-[#1a2734] hover:bg-[#e6eef5]">Gestión de Procesos</Link>
                <Link href="/servicios/gestion-riesgos" className="px-4 py-2 text-[#1a2734] hover:bg-[#e6eef5]">Gestión de Riesgos</Link>
                <Link href="/servicios/compliance" className="px-4 py-2 text-[#1a2734] hover:bg-[#e6eef5]">Compliance</Link>
              </div>
            )}
          </div>

          {/* Industrias con submenú */}
          <div className="relative">
            <button
              onClick={() => {
                setShowIndustrias(!showIndustrias);
                setShowServicios(false);
              }}
              className="text-white font-medium hover:text-[#95d4dc] focus:outline-none"
            >
              Industrias ▾
            </button>
            {showIndustrias && (
              <div
                className="absolute left-0 mt-2 flex flex-col bg-white border rounded shadow-md py-2 z-20 min-w-[220px]"
                onMouseLeave={() => setShowIndustrias(false)}
              >
                <span role="menuitem" aria-disabled="true" className="px-4 py-2 text-[#1a2734] hover:bg-[#e6eef5] cursor-default select-none">Bancos</span>
                <span role="menuitem" aria-disabled="true" className="px-4 py-2 text-[#1a2734] hover:bg-[#e6eef5] cursor-default select-none">Financieras</span>
                <span role="menuitem" aria-disabled="true" className="px-4 py-2 text-[#1a2734] hover:bg-[#e6eef5] cursor-default select-none">Cajas</span>
                <span role="menuitem" aria-disabled="true" className="px-4 py-2 text-[#1a2734] hover:bg-[#e6eef5] cursor-default select-none">Cooperativas</span>
                <span role="menuitem" aria-disabled="true" className="px-4 py-2 text-[#1a2734] hover:bg-[#e6eef5] cursor-default select-none">Fintech</span>
                <span role="menuitem" aria-disabled="true" className="px-4 py-2 text-[#1a2734] hover:bg-[#e6eef5] cursor-default select-none">Salud</span>
              </div>
            )}
          </div>

          {/* Clientes */}
          <Link href="/clientes" className="text-white font-medium hover:text-[#95d4dc]">
            Clientes
          </Link>

          {/* Sobre Nosotros */}
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
