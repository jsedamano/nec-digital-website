import Navbar from '../../components/Navbar';

export default function CiberseguridadPage() {
  return (
    <main className="min-h-screen bg-[#000] text-white">
      <Navbar />
      <section className="relative w-full h-[40vh] flex items-center justify-center bg-[url('/about-us.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-center">Ciberseguridad</h1>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <p>
          En un entorno cada vez más digitalizado, la protección de la información se convierte en una prioridad estratégica. Nuestro servicio de consultoría en ciberseguridad ofrece una cobertura completa para salvaguardar los activos digitales de tu organización.
        </p>

        <ul className="list-disc list-inside space-y-4 text-[#95d4dc]">
          <li>
            <strong>Assessment de Ciberseguridad:</strong> Evaluación integral del nivel de madurez en seguridad de la información basado en estándares internacionales.
          </li>
          <li>
            <strong>Despliegue y Monitoreo de Soluciones:</strong> Implementación de herramientas para prevenir ciberataques.
          </li>
          <li>
            <strong>Capacitación y Sensibilización:</strong> Programas para fomentar una cultura de seguridad en todos los niveles.
          </li>
          <li>
            <strong>Ethical Hacking:</strong> Simulaciones controladas para detectar vulnerabilidades antes que los atacantes.
          </li>
        </ul>

        <p className="text-center mt-10">
          ¿Estás listo para proteger tu organización de amenazas digitales? <br />
          <a href="mailto:necdigitalpe@outlook.com" className="text-[#95d4dc] underline hover:text-white">
            Escríbenos hoy →
          </a>
        </p>
      </section>
    </main>
  );
}
