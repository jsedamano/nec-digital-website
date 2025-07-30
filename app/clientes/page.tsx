import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Clientes() {
  const logos = Array.from({ length: 11 }, (_, i) => `/clientes/cliente${i + 1}.png`);

  return (
    <main className="min-h-screen bg-white text-[#1a2734]">
      <Navbar />

      <section className="text-center py-12 px-6">
        <h1 className="text-4xl font-bold mb-4">Nuestros Clientes</h1>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          Grandes empresas confían en nosotros para impulsar su transformación digital y proteger su entorno tecnológico.
        </p>

        {/* Grid fija: 2 filas de 4 y 1 fila de 3 */}
        <div className="flex flex-col items-center gap-10">
          {/* Primeras 2 filas con 4 logos */}
          {[0, 4].map((start) => (
            <div key={start} className="flex flex-wrap justify-center gap-10">
              {logos.slice(start, start + 4).map((src, i) => (
                <div
                  key={i}
                  className="w-32 h-20 relative transition-transform transform hover:scale-110 duration-300"
                >
                  <Image src={src} alt={`Cliente ${start + i + 1}`} fill className="object-contain" />
                </div>
              ))}
            </div>
          ))}

          {/* Última fila con 3 logos centrados */}
          <div className="flex justify-center gap-10">
            {logos.slice(8, 11).map((src, i) => (
              <div
                key={i}
                className="w-32 h-20 relative transition-transform transform hover:scale-110 duration-300"
              >
                <Image src={src} alt={`Cliente ${8 + i + 1}`} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
