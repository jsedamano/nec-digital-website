import Navbar from './components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000]">
      {/* Navbar */}
      <Navbar />

      {/* Hero section con imagen de fondo y blur lateral */}
      <section className="relative w-full h-[90vh] flex items-center justify-start text-white">
        {/* Imagen de fondo */}
        <Image
          src="/landing.png"
          alt="Fondo hero NEC"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />

        {/* Capa de gradiente oscura en el lado izquierdo */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent z-0" />

        {/* Texto encima de la imagen */}
        <div className="relative z-10 px-10 max-w-2xl">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Transformación Digital
            <br />
          </h1>
          <p className="mt-6 text-xl text-gray-200">
            Impulsamos el cambio digital con un enfoque centrado en el cliente, los datos, la innovación y las personas.
          </p>
          <Link href="/contacto" className="inline-block mt-6 px-6 py-3 bg-[#95d4dc] text-[#1a2734] font-semibold rounded hover:bg-[#719ec3] transition-colors">
            Conecta con nosotros →
          </Link>
        </div>
      </section>
    </main>
  );
}
