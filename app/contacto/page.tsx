import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Contacto() {
  return (
    <main className="min-h-screen bg-white text-[#1a2734]">
      <Navbar />

      {/* Hero con fondo difuminado */}
      <section className="relative w-full h-[50vh] flex flex-col items-center justify-center text-white text-center">
        {/* Imagen de fondo con blur */}
        <Image
          src="/contacto.png"
          alt="Sobre Nosotros Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0 blur-sm"
        />
      
        {/* Capa semitransparente oscura para mayor contraste */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 px-6">
          <h1 className="text-4xl font-bold mb-2">Conversemos</h1>
          <p className="text-lg max-w-2xl">
            Estamos aquí para ayudarte a transformar digitalmente tu negocio. Escríbenos y descubre cómo podemos colaborar.
          </p>
        </div>
      </section>

      {/* Formulario o enlace de contacto */}
      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#446177] mb-4">Contáctanos</h2>
        <p className="text-lg text-gray-700 mb-8">
          Puedes escribirnos directamente al correo <span className="font-semibold">necdigitalpe@outlook.com</span> o completar el siguiente formulario.
        </p>

        {/* Caja de mensaje simulada */}
        <div className="bg-[#f4f7fa] rounded-lg shadow-md p-8">
          <form action="mailto:necdigitalpe@outlook.com" method="post" encType="text/plain">
            <div className="mb-4 text-left">
              <label htmlFor="name" className="block mb-1 font-medium">Nombre</label>
              <input type="text" name="name" id="name" className="w-full px-4 py-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="email" className="block mb-1 font-medium">Correo electrónico</label>
              <input type="email" name="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-6 text-left">
              <label htmlFor="message" className="block mb-1 font-medium">Mensaje</label>
              <textarea name="message" id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded" required></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-[#95d4dc] text-[#1a2734] font-semibold rounded hover:bg-[#719ec3] transition-colors"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
