import Navbar from '../../components/Navbar';

export default function GestionRiesgosPage() {
  return (
    <main className="min-h-screen bg-[#000] text-white">
      <Navbar />

      {/* Encabezado con imagen difuminada */}
      <section className="relative w-full h-[40vh] flex items-center justify-center bg-[url('/about-us.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-center">Gestión de Riesgos</h1>
      </section>

      {/* Contenido */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <p>
          Brindamos soluciones para identificar, evaluar y mitigar riesgos operativos, estratégicos y tecnológicos que puedan afectar a tu organización.
        </p>

        <ul className="list-disc list-inside space-y-4 text-[#95d4dc]">
          <li>
            <strong>Diagnóstico de Riesgos:</strong> Identificación y clasificación de los principales riesgos de la organización.
          </li>
          <li>
            <strong>Planes de Mitigación:</strong> Estrategias para reducir la probabilidad e impacto de los riesgos.
          </li>
          <li>
            <strong>Modelo de Gobierno:</strong> Definición de estructuras, roles y responsabilidades para la gestión de riesgos.
          </li>
          <li>
            <strong>Monitoreo y Control:</strong> Implementación de métricas y alertas para seguimiento continuo.
          </li>
        </ul>

        <p className="text-center mt-10">
          Prepárate ante lo inesperado con un enfoque estratégico. <br />
          <a href="mailto:necdigitalpe@outlook.com" className="text-[#95d4dc] underline hover:text-white">
            Escríbenos para comenzar →
          </a>
        </p>
      </section>
    </main>
  );
}
