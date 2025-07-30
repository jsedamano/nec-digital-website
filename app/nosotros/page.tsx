import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Nosotros() {
  return (
    <main className="bg-[#f9fafb] text-[#1a2734]">
      <Navbar />
      {/* Hero con fondo difuminado */}
      <section className="relative w-full h-[50vh] flex flex-col items-center justify-center text-white text-center">
        {/* Imagen de fondo con blur */}
        <Image
          src="/about-us.png"
          alt="Sobre Nosotros Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0 blur-sm"
        />

        {/* Capa semitransparente oscura para mayor contraste */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Contenido del hero */}
        <div className="relative z-10 px-6">
          <h1 className="text-4xl font-bold mb-2">Sobre Nosotros</h1>
          <p className="text-lg">Transformamos negocios mediante innovación digital, gestión de datos,
          <p className="text-lg">uso de inteligencia artificial y gestión de riesgos</p>
          </p>
        </div>
      </section>

      {/* Sección de misión y visión */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <div>
          <h2 className="text-3xl font-semibold text-[#446177] mb-4">Nuestra Misión</h2>
          <p className="text-lg leading-relaxed">
            Impulsar la Transformación Digital y Gestión Integral del Riesgo en los Modelos de Negocios de organizaciones a través de soluciones tecnológicas innovadoras, consultoría estratégica y desarrollo de capacidades, alineando la tecnología con los objetivos estratégicos para lograr mayor eficiencia, competitividad y sostenibilidad.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-[#446177] mb-4">Nuestra Visión</h2>
          <p className="text-lg leading-relaxed">
            Ser la empresa referente en transformación digital en América Latina, reconocida por su impacto en la evolución digital de las organizaciones, generando valor, crecimiento sostenible e innovación en cada sector donde opera.
          </p>
        </div>
      </section>

      {/* Equipo Consultor */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#1a2734] mb-12">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-[#e6eef5] p-6 rounded shadow">
              <h3 className="text-xl font-semibold text-[#1a2734]">Yesika Neyra Espinoza</h3>
              <p className="text-sm mt-2 text-[#446177]">MSc en Gestión de Riesgos y Gobierno de Datos</p>
              <p className="mt-4 text-sm">+15 años de experiencia en el sistema financiero. Experta en transformación digital, normativas regulatorias y modelamiento de riesgos.</p>
            </div>
            <div className="bg-[#e6eef5] p-6 rounded shadow">
              <h3 className="text-xl font-semibold text-[#1a2734]">Edith Cordova</h3>
              <p className="text-sm mt-2 text-[#446177]">MBA en Transformación Digital</p>
              <p className="mt-4 text-sm">Más de 15 años en proyectos estratégicos digitales. Especialista en procesos, tecnologías emergentes y modelos de madurez digital.</p>
            </div>
            <div className="bg-[#e6eef5] p-6 rounded shadow">
              <h3 className="text-xl font-semibold text-[#1a2734]">Isabel Avila Arosemena</h3>
              <p className="text-sm mt-2 text-[#446177]">MFRM y Coach Empresarial</p>
              <p className="mt-4 text-sm">Experta en ISO 9001, optimización de procesos con Kaizen, BPM y metodologías ágiles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto rápido */}
      <section className="text-center py-16 px-6 bg-[#f0f4f8]">
        <h2 className="text-3xl font-bold mb-4">¿Quieres saber más?</h2>
        <p className="text-lg mb-6">Conecta con nosotros para impulsar la transformación digital de tu negocio</p>
        <a
          href="/contacto"
          className="inline-block px-6 py-3 bg-[#95d4dc] text-[#1a2734] font-semibold rounded hover:bg-[#719ec3] transition"
        >
          Contáctanos →
        </a>
      </section>
    </main>
  );
}
