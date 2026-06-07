import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import cybersecurityHero from "../../../public/services/ciberseguridad.png";
import { SiteHeader } from "../../components/site-header";

const capabilities = [
  {
    number: "01",
    title: "Assessment de Ciberseguridad",
    description:
      "Evaluamos integralmente el nivel de madurez en seguridad de la información con referencia en estándares internacionales.",
    detail:
      "Identificamos brechas, riesgos prioritarios y oportunidades para fortalecer controles y capacidades.",
  },
  {
    number: "02",
    title: "Despliegue y Monitoreo de Soluciones",
    description:
      "Implementamos herramientas y controles para prevenir ciberataques y mejorar la visibilidad sobre amenazas.",
    detail:
      "Acompañamos la puesta en marcha y el seguimiento para sostener una postura de seguridad activa.",
  },
  {
    number: "03",
    title: "Capacitación y Sensibilización",
    description:
      "Diseñamos programas para fomentar una cultura de seguridad en todos los niveles de la organización.",
    detail:
      "Convertimos a las personas en una línea de defensa informada frente a riesgos y amenazas digitales.",
  },
  {
    number: "04",
    title: "Ethical Hacking",
    description:
      "Realizamos simulaciones controladas para detectar vulnerabilidades antes que los atacantes.",
    detail:
      "Validamos la efectividad de los controles y entregamos hallazgos accionables para reducir la exposición.",
  },
];

const protectionPhases = [
  {
    number: "01",
    title: "Evaluar",
    description:
      "Entendemos los activos críticos, amenazas, controles existentes y nivel de madurez.",
  },
  {
    number: "02",
    title: "Fortalecer",
    description:
      "Priorizamos brechas y desplegamos medidas de protección alineadas al riesgo.",
  },
  {
    number: "03",
    title: "Validar",
    description:
      "Probamos controles y capacidades mediante ejercicios y simulaciones controladas.",
  },
  {
    number: "04",
    title: "Monitorear",
    description:
      "Damos seguimiento a indicadores y amenazas para sostener la mejora continua.",
  },
];

const outcomes = [
  "Mayor visibilidad sobre riesgos y vulnerabilidades",
  "Controles priorizados según el impacto al negocio",
  "Equipos preparados para responder ante amenazas",
];

const priorities = [
  "Activos e información crítica",
  "Continuidad de la operación",
  "Personas y cultura de seguridad",
  "Cumplimiento y confianza digital",
];

export const metadata: Metadata = {
  title: "Ciberseguridad | NEC Digital",
  description:
    "Consultoría en ciberseguridad para evaluar la madurez, fortalecer controles, sensibilizar equipos y detectar vulnerabilidades.",
};

export default function CybersecurityPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-[#082231]">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-[#04131d] px-5 pb-14 pt-40 text-white sm:px-8 lg:pb-16 lg:pt-28">
        <Image
          src={cybersecurityHero}
          alt=""
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover object-center opacity-[0.42]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,14,24,0.99)_0%,rgba(3,14,24,0.92)_45%,rgba(3,14,24,0.62)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-[#04131d] to-transparent" />
        <div className="absolute -right-20 top-24 -z-10 h-80 w-80 rounded-full bg-blue-300/12 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-cyan-100/80">
            <Link href="/servicios" className="transition hover:text-white">
              Servicios
            </Link>
            <span aria-hidden="true" className="text-white/35">
              /
            </span>
            <span className="text-white">Ciberseguridad</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-5 inline-flex rounded-full border border-blue-100/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase text-cyan-50 shadow-[0_10px_40px_rgba(8,47,73,0.28)] backdrop-blur">
                Consultoría en Ciberseguridad
              </p>

              <h1 className="text-4xl font-semibold leading-[1.04] sm:text-5xl lg:text-6xl">
                Protege lo que hace posible tu negocio.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100/84 sm:text-lg">
                En un entorno cada vez más digitalizado, la protección de la
                información es una prioridad estratégica. Ofrecemos una
                cobertura integral para salvaguardar los activos digitales y
                fortalecer la resiliencia de tu organización.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#capacidades"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-200 px-6 py-3 text-sm font-bold text-[#082231] shadow-[0_18px_55px_rgba(103,232,249,0.24)] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Conocer capacidades
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/14"
                >
                  Evaluar nuestra seguridad
                </Link>
              </div>
            </div>

            <aside className="relative overflow-hidden rounded-[2rem] border border-blue-100/14 bg-[#071e2d]/72 p-6 shadow-[0_24px_80px_rgba(2,8,23,0.38)] backdrop-blur-md sm:p-8">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-300/14 blur-2xl" />
              <div className="relative">
                <p className="text-sm font-semibold uppercase text-cyan-100">
                  Seguridad con propósito
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight">
                  Más control, preparación y confianza.
                </h2>

                <div className="mt-6 divide-y divide-white/12">
                  {outcomes.map((outcome) => (
                    <p
                      key={outcome}
                      className="flex gap-3 py-4 text-sm font-semibold leading-6 text-slate-100/84 first:pt-0 last:pb-0"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200"
                      />
                      {outcome}
                    </p>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        id="capacidades"
        className="scroll-mt-28 px-5 pb-10 pt-8 sm:px-8 lg:pb-12 lg:pt-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-cyan-700">
                Qué protegemos
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
                Una defensa integral para riesgos reales.
              </h2>
            </div>

            <p className="max-w-2xl leading-8 text-slate-600 lg:ml-auto">
              Combinamos evaluación, tecnología, pruebas y cultura para reducir
              la exposición y fortalecer la capacidad de respuesta frente a un
              entorno de amenazas en constante evolución.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {capabilities.map((capability, index) => (
              <article
                key={capability.number}
                className="service-card group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_55px_rgba(8,47,73,0.12)] sm:p-7"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-100/70 blur-2xl transition duration-300 group-hover:bg-cyan-200/70" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-[0.18em] text-blue-700">
                      {capability.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-px w-10 bg-blue-600/45 transition-all duration-300 group-hover:w-16"
                    />
                  </div>

                  <h3 className="mt-7 text-xl font-semibold leading-snug text-[#082231] sm:text-2xl">
                    {capability.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-700">
                    {capability.description}
                  </p>
                  <p className="mt-3 border-l-2 border-cyan-500/45 pl-4 text-sm leading-6 text-slate-500">
                    {capability.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#04131d] px-5 pb-10 pt-10 text-white sm:px-8 lg:pb-12 lg:pt-12">
        <div className="absolute -left-24 top-1/3 -z-10 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan-300/8 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.65fr_1fr] lg:items-center">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase text-cyan-200">
              Enfoque de protección
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Seguridad conectada con la operación.
            </h2>
            <p className="mt-5 leading-8 text-slate-100/76">
              Priorizamos lo que más importa para proteger el negocio sin perder
              de vista la continuidad, las personas y la confianza.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {priorities.map((priority) => (
                <span
                  key={priority}
                  className="rounded-full border border-white/12 bg-white/7 px-4 py-2 text-sm font-semibold text-cyan-50/88"
                >
                  {priority}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {protectionPhases.map((phase) => (
              <article
                key={phase.number}
                className="rounded-[1.5rem] border border-white/12 bg-white/7 p-6 backdrop-blur-sm"
              >
                <p className="text-sm font-bold tracking-[0.18em] text-cyan-200">
                  {phase.number}
                </p>
                <h3 className="mt-6 text-2xl font-semibold">{phase.title}</h3>
                <p className="mt-3 leading-7 text-slate-100/72">
                  {phase.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pb-16 pt-8 sm:px-8 lg:pb-20 lg:pt-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#e3f3fb] p-7 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:p-12">
            <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-blue-300/30 blur-3xl" />
            <div className="relative max-w-3xl">
              <p className="text-sm font-bold uppercase text-blue-800">
                Próximo paso
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#082231] sm:text-4xl">
                Anticipemos las amenazas antes de que impacten tu negocio.
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-700">
                Podemos comenzar evaluando tu postura actual, identificando los
                riesgos prioritarios y definiendo una ruta concreta de
                fortalecimiento.
              </p>
            </div>

            <Link
              href="/contacto"
              className="relative mt-7 inline-flex shrink-0 items-center justify-center rounded-full bg-[#082231] px-6 py-3 text-sm font-bold text-white shadow-[0_18px_55px_rgba(8,34,49,0.20)] transition hover:-translate-y-0.5 hover:bg-blue-800 lg:mt-0"
            >
              Conversemos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
