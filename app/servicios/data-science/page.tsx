import Navbar from '../../components/Navbar';

export default function DataAnalyticsPage() {
  return (
    <main className="min-h-screen bg-[#000] text-white">
      <Navbar />

      {/* Encabezado con imagen difuminada */}
      <section className="relative w-full h-[40vh] flex items-center justify-center bg-[url('/about-us.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-center">Data Science</h1>
      </section>

      {/* Contenido */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <p>
          Ayudamos a las organizaciones a aprovechar el valor de sus datos mediante soluciones de analítica avanzada que transforman la información en decisiones estratégicas.
        </p>

        <ul className="list-disc list-inside space-y-4 text-[#95d4dc]">
          <li>
            <strong>Madurez Analítica:</strong> Diagnóstico del nivel de uso de datos y definición de hoja de ruta analítica.
          </li>
          <li>
            <strong>Modelos de Datos:</strong> Diseño e implementación de modelos de datos robustos y eficientes.
          </li>
          <li>
            <strong>Visualización:</strong> Dashboards interactivos que facilitan el monitoreo de KPIs y métricas de negocio.
          </li>
          <li>
            <strong>Machine Learning:</strong> Aplicación de modelos predictivos para optimizar procesos y anticiparse al futuro.
          </li>
        </ul>

        <p className="text-center mt-10">
          Potencia tus decisiones con el poder de los datos. <br />
          <a href="mailto:necdigitalpe@outlook.com" className="text-[#95d4dc] underline hover:text-white">
            Escríbenos para iniciar →
          </a>
        </p>
      </section>
    </main>
  );
}
