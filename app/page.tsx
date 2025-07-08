import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9fafb]">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-sm border-b border-[#ccc]">
        {/* Logo + Links */}
        <div className="flex items-center space-x-10">
          <Link href="/">
            <span className="text-2xl font-bold text-[#060606]">NEC DIGITAL</span>
          </Link>

          {/* Menú principal */}
          <div className="flex space-x-6">
            {/* Servicios con submenú */}
            <div className="relative group">
              <button className="text-[#1a2734] font-medium hover:text-[#446177] focus:outline-none">
                Servicios ▾
              </button>
              <div className="absolute hidden group-hover:block bg-white border rounded shadow-md mt-2 py-2 z-10">
                <Link href="/servicios/estrategia" className="block px-4 py-2 text-[#1a2734] hover:bg-[#e6eef5]">Estrategia</Link>
                <Link href="/servicios/desarrollo" className="block px-4 py-2 text-[#1a2734] hover:bg-[#e6eef5]">Desarrollo tecnológico</Link>
                <Link href="/servicios/transformacion" className="block px-4 py-2 text-[#1a2734] hover:bg-[#e6eef5]">Transformación digital</Link>
              </div>
            </div>

            {/* Sobre Nosotros */}
            <Link href="/nosotros" className="text-[#1a2734] font-medium hover:text-[#446177]">
              Sobre Nosotros
            </Link>
          </div>
        </div>

        {/* Idioma + Contacto */}
        <div className="flex items-center space-x-6">
          <Link href="/contacto" className="text-[#1a2734] font-medium hover:text-[#446177]">
            Contáctanos
          </Link>

          {/* Dropdown Idioma */}
          <div className="relative group">
            <button className="text-[#1a2734] hover:text-[#446177] focus:outline-none">
              🌐 ES ▾
            </button>
            <div className="absolute hidden group-hover:block bg-white border rounded shadow-md mt-2 py-2 z-10 right-0">
              <span className="block px-4 py-2 text-sm text-gray-500">Español (actual)</span>
              <button disabled className="block px-4 py-2 text-gray-400 text-sm cursor-not-allowed">English (próximamente)</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Landing page básica */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a2734] mb-4">
          Consultoría tecnológica para transformar tu empresa
        </h1>
        <p className="text-[#446177] text-lg max-w-xl">
          Te ayudamos a innovar, optimizar y liderar el cambio digital con soluciones adaptadas a tu negocio.
        </p>
      </section>
    </main>
  );
}
