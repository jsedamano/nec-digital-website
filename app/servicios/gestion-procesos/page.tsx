import Navbar from '../../components/Navbar';

export default function GestionProcesosPage() {
  return (
    <main className="min-h-screen bg-[#000] text-white">
      <Navbar />

      {/* Encabezado con imagen difuminada */}
      <section className="relative w-full h-[40vh] flex items-center justify-center bg-[url('/procesos.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-center">Gestión de Procesos</h1>
      </section>

      {/* Contenido */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <p>
          Optimizamos y rediseñamos los procesos de tu organización para mejorar la eficiencia, reducir costos y brindar valor sostenible.
        </p>

        <ul className="list-disc list-inside space-y-4 text-[#95d4dc]">
          <li>
            <strong>Mapa de Procesos:</strong> Identificación y priorización de procesos clave para el negocio.
          </li>
          <li>
            <strong>Rediseño y Optimización:</strong> Mejora continua y automatización de procesos con herramientas digitales.
          </li>
          <li>
            <strong>KPIs y Seguimiento:</strong> Definición de indicadores y mecanismos de control para monitorear desempeño.
          </li>
          <li>
            <strong>Transformación Lean:</strong> Aplicación de metodologías Lean para eliminar desperdicios y maximizar valor.
          </li>
        </ul>

        <p className="text-center mt-10">
          Impulsa procesos más ágiles y eficientes con NEC Digital. <br />
          <a href="mailto:necdigitalpe@outlook.com" className="text-[#95d4dc] underline hover:text-white">
            Escríbenos para empezar →
          </a>
        </p>
      </section>
    </main>
  );
}
