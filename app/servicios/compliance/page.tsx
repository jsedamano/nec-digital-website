import Navbar from '../../components/Navbar';

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-[#000] text-white">
      <Navbar />

      {/* Encabezado con imagen difuminada */}
      <section className="relative w-full h-[40vh] flex items-center justify-center bg-[url('/compliance.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-center">Compliance</h1>
      </section>

      {/* Contenido */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <p>
          Aseguramos el cumplimiento normativo, ético y regulatorio en tu organización mediante soluciones integrales de compliance adaptadas a tu sector.
        </p>

        <ul className="list-disc list-inside space-y-4 text-[#95d4dc]">
          <li>
            <strong>Diagnóstico de Cumplimiento:</strong> Evaluación del estado actual respecto a normativas nacionales e internacionales.
          </li>
          <li>
            <strong>Diseño de Programas de Compliance:</strong> Políticas, procedimientos y códigos de conducta que alinean a la empresa con estándares éticos.
          </li>
          <li>
            <strong>Capacitación y Cultura:</strong> Formación a colaboradores y generación de cultura de integridad.
          </li>
          <li>
            <strong>Monitoreo y Mejora:</strong> Auditorías internas, seguimiento y actualización de políticas según cambios regulatorios.
          </li>
        </ul>

        <p className="text-center mt-10">
          Fortalece la confianza y credibilidad de tu organización. <br />
          <a href="mailto:necdigitalpe@outlook.com" className="text-[#95d4dc] underline hover:text-white">
            Escríbenos y comencemos →
          </a>
        </p>
      </section>
    </main>
  );
}
