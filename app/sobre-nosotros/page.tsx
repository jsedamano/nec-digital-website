import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "../components/site-header";

const mission =
  "Impulsar la Transformación Digital y Gestión Integral de Riesgo en los Modelos de Negocios de organizaciones a través de soluciones tecnológicas innovadoras, consultoría estratégica y desarrollo de capacidades, alineando la tecnología con los objetivos estratégicos para lograr mayor eficiencia, competitividad y sostenibilidad.";

const vision =
  "Ser la empresa referente en transformación digital en América Latina, reconocida por su impacto en la evolución digital de las organizaciones, generando valor, crecimiento sostenible e innovación en cada sector donde opera.";

const sharedExecutiveDescription =
  "Ejecutivo orientado hacia la innovación y mejoramiento de procesos mediante el uso de la tecnología de información, con más de 30 años de experiencia profesional, 25 de ellos en el sistema financiero. Amplia experiencia en Gestión de áreas de TI, Auditoria de Interna, Auditoria de Sistemas, Seguridad de la Información, gestión de riesgos de fraude, desarrollo e implementación de sistemas de información orientados a objetivos estratégicos del negocio, Administración de la producción de procesos de TI, automatización de procesos de TI y de auditoria, migración de sistemas de información a diferentes plataformas, Administración de Centros de Cómputo, Gestión de Riesgos Operativos, Riesgos Tecnológicos, Gestión de riesgos de continuidad del negocio; y Gestión de Proyectos, Gestión de Servicios de TI, Prevención y tratamiento del fraude. Asociado al Colegio de Ingenieros del Perú.";

const teamMembers = [
  {
    name: "Edith Cordova",
    title:
      "Lic. Ciencias de la Computación, MBA (ESAN-UCLA) y Mag. Transformación Digital (UNI)",
    description: sharedExecutiveDescription,
    image: "/team/edith-cordova.jpeg",
  },
  {
    name: "Isabel Avila Arosemena",
    title:
      "Ing. Economía (UNI), Mag. Gestión Integral de Riesgos, Coach Empresarial",
    description:
      "Experiencia de mas 15 años como consultor en empresas financieras, fondos de inversión y otros. Certificado en ISO 9001, reingeniería de procesos metodologías ágiles y tecnologías emergentes. Experto en modelos de optimización BPM, Kaizen, Design Thinking, Scrum.",
    image: "/team/isabel-avila.jpeg",
  },
  {
    name: "Yesika Neyra Espinoza",
    title:
      "Lic. Economía y Estadística, Mag. Gestión Cuantitativa de Riesgos Financieros y Gestión de Riesgos",
    description:
      "Más de 15 años de experiencia con empresas de Sistema Financiero, COOPAC, Fintech y Central de Riesgos. Especialización en Transformación Digital y Gobierno del Dato. Docente en Gestión Integral de Riesgos Financieros y Analítica Avanzada de Datos. Dominio de SPE/SPF y modelamiento de riesgos. Experta en normativas regulatorias en Gestión de Riesgos.",
    image: "/team/yesika-neyra.jpeg",
  },
  {
    name: "Antonio Venegas",
    title: "Licenciado en Gestión de Empresas",
    description: sharedExecutiveDescription,
    image: "/team/antonio-venegas.jpeg",
  },
  {
    name: "Joaquin Sedamano",
    title:
      "Ciencias de la Computación en Virginia Tech (USA). Ciberseguridad en BCP",
    description:
      "Perfil profesional en preparación. Próximamente se incorporará su descripción completa, experiencia y áreas de especialización dentro del equipo de NEC Digital.",
    image: "/team/joaquin-sedamano.png",
    featured: true,
  },
];

export const metadata: Metadata = {
  title: "Sobre Nosotros | NEC Digital",
  description:
    "Conoce la misión, visión y equipo de NEC Digital, consultora especializada en transformación digital, datos y gestión integral de riesgos.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#061a24] text-white">
      <SiteHeader />

      <section className="relative isolate overflow-hidden px-5 pb-14 pt-40 sm:px-8 lg:pb-12 lg:pt-28">
        <Image
          src="/nosotros.png"
          alt="Equipo uniendo manos como símbolo de colaboración"
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover object-center opacity-[0.48]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,17,27,0.96)_0%,rgba(4,17,27,0.84)_45%,rgba(4,17,27,0.50)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-52 bg-gradient-to-t from-[#061a24] to-transparent" />

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-cyan-100/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase text-cyan-50 shadow-[0_10px_40px_rgba(8,47,73,0.28)] backdrop-blur">
              Sobre Nosotros
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Tecnología, riesgo e innovación con criterio ejecutivo.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100/86 sm:text-lg">
              Somos un equipo que combina experiencia directiva, conocimiento
              técnico y visión estratégica para acompañar transformaciones
              digitales con impacto real en el negocio.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-white/8 p-7 shadow-[0_24px_80px_rgba(2,8,23,0.30)] backdrop-blur-md">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-200/16 blur-2xl" />
              <div className="relative">
                <p className="text-center text-base font-semibold uppercase text-cyan-100">
                  Misión
                </p>
                <p className="mt-4 leading-8 text-slate-100/82">{mission}</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-white/8 p-7 shadow-[0_24px_80px_rgba(2,8,23,0.30)] backdrop-blur-md">
              <div className="absolute -bottom-12 -left-10 h-32 w-32 rounded-full bg-sky-300/14 blur-2xl" />
              <div className="relative">
                <p className="text-center text-base font-semibold uppercase text-cyan-100">
                  Visión
                </p>
                <p className="mt-4 leading-8 text-slate-100/82">{vision}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 pb-20 pt-12 text-[#082231] sm:px-8 lg:pb-24 lg:pt-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-cyan-700">
              Nuestro equipo
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Perfiles que conectan estrategia, ejecución y tecnología.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className={`rounded-lg border border-slate-200 bg-white p-6 shadow-sm ${
                  member.featured ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-[#d9e8ef] shadow-sm">
                    <Image
                      src={member.image}
                      alt={`Foto de ${member.name}`}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase text-cyan-700">
                      Equipo NEC Digital
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-[#082231]">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold leading-6 text-cyan-700">
                      {member.title}
                    </p>

                    <p className="mt-5 leading-8 text-slate-700">
                      {member.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
