import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dataScienceHero from "../../../public/services/data-science.png";
import { SiteHeader } from "../../components/site-header";

const capabilities = [
  {
    number: "01",
    title: "Madurez Analítica",
    description:
      "Diagnosticamos el nivel de uso de datos y definimos una hoja de ruta analítica alineada con los objetivos del negocio.",
    detail:
      "Evaluamos capacidades, gobierno, tecnología y cultura para priorizar las iniciativas de mayor valor.",
  },
  {
    number: "02",
    title: "Modelos de Datos",
    description:
      "Diseñamos e implementamos modelos de datos robustos, eficientes y preparados para crecer.",
    detail:
      "Organizamos la información para mejorar su calidad, disponibilidad y uso en decisiones estratégicas.",
  },
  {
    number: "03",
    title: "Visualización",
    description:
      "Creamos dashboards interactivos que facilitan el monitoreo de KPIs y métricas de negocio.",
    detail:
      "Convertimos información compleja en señales claras, oportunas y accionables para cada audiencia.",
  },
  {
    number: "04",
    title: "Machine Learning",
    description:
      "Aplicamos modelos predictivos para optimizar procesos, anticipar escenarios y descubrir oportunidades.",
    detail:
      "Diseñamos soluciones analíticas orientadas a resultados medibles y decisiones mejor informadas.",
  },
];

const analyticsPhases = [
  {
    number: "01",
    title: "Conectar",
    description:
      "Integramos las fuentes relevantes y entendemos el contexto de los datos.",
  },
  {
    number: "02",
    title: "Organizar",
    description:
      "Estructuramos información confiable y disponible para el análisis.",
  },
  {
    number: "03",
    title: "Analizar",
    description:
      "Aplicamos visualización, estadística y modelos para generar conocimiento.",
  },
  {
    number: "04",
    title: "Activar",
    description:
      "Convertimos hallazgos en decisiones, acciones y resultados de negocio.",
  },
];

const outcomes = [
  "Decisiones respaldadas por evidencia",
  "Indicadores claros y disponibles a tiempo",
  "Modelos analíticos enfocados en resultados",
];

const useCases = [
  "Predicción y pronóstico",
  "Segmentación de clientes",
  "Optimización de procesos",
  "Inteligencia de negocio",
];

export const metadata: Metadata = {
  title: "Data Science | NEC Digital",
  description:
    "Consultoría en Data Science, analítica avanzada, modelos de datos, visualización y machine learning para mejores decisiones de negocio.",
};

export default function DataSciencePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-[#082231]">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-[#031326] px-5 pb-14 pt-40 text-white sm:px-8 lg:pb-16 lg:pt-28">
        <Image
          src={dataScienceHero}
          alt=""
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover object-center opacity-[0.42]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,13,29,0.99)_0%,rgba(2,13,29,0.93)_46%,rgba(2,13,29,0.58)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-[#031326] to-transparent" />
        <div className="absolute -right-20 top-24 -z-10 h-80 w-80 rounded-full bg-blue-400/14 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-blue-100/80">
            <Link href="/servicios" className="transition hover:text-white">
              Servicios
            </Link>
            <span aria-hidden="true" className="text-white/35">
              /
            </span>
            <span className="text-white">Data Science</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-5 inline-flex rounded-full border border-blue-100/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase text-blue-50 shadow-[0_10px_40px_rgba(8,47,73,0.28)] backdrop-blur">
                Consultoría en Data Science
              </p>

              <h1 className="text-4xl font-semibold leading-[1.04] sm:text-5xl lg:text-6xl">
                Convierte tus datos en mejores decisiones.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100/84 sm:text-lg">
                Ayudamos a las organizaciones a aprovechar el valor de sus
                datos mediante soluciones de analítica avanzada que transforman
                la información en decisiones estratégicas.
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
                  Explorar nuestros datos
                </Link>
              </div>
            </div>

            <aside className="relative overflow-hidden rounded-[2rem] border border-blue-100/14 bg-[#071d38]/72 p-6 shadow-[0_24px_80px_rgba(2,8,23,0.38)] backdrop-blur-md sm:p-8">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-400/16 blur-2xl" />
              <div className="relative">
                <p className="text-sm font-semibold uppercase text-blue-100">
                  Datos con propósito
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight">
                  Más claridad, anticipación e impacto.
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
              <p className="text-sm font-bold uppercase text-blue-700">
                Qué hacemos
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
                Analítica conectada con decisiones reales.
              </h2>
            </div>

            <p className="max-w-2xl leading-8 text-slate-600 lg:ml-auto">
              Integramos estrategia, arquitectura de datos, visualización y
              modelos avanzados para desarrollar capacidades analíticas útiles,
              escalables y alineadas con el negocio.
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
                  <p className="mt-3 border-l-2 border-blue-500/45 pl-4 text-sm leading-6 text-slate-500">
                    {capability.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#031326] px-5 pb-10 pt-10 text-white sm:px-8 lg:pb-12 lg:pt-12">
        <div className="absolute -left-24 top-1/3 -z-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan-300/8 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.65fr_1fr] lg:items-center">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase text-blue-200">
              Ciclo de valor analítico
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              De la información a la acción.
            </h2>
            <p className="mt-5 leading-8 text-slate-100/76">
              Construimos soluciones que conectan datos confiables con análisis
              relevantes y decisiones que generan valor.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {useCases.map((useCase) => (
                <span
                  key={useCase}
                  className="rounded-full border border-white/12 bg-white/7 px-4 py-2 text-sm font-semibold text-blue-50/88"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {analyticsPhases.map((phase) => (
              <article
                key={phase.number}
                className="rounded-[1.5rem] border border-white/12 bg-white/7 p-6 backdrop-blur-sm"
              >
                <p className="text-sm font-bold tracking-[0.18em] text-blue-200">
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
          <div className="relative overflow-hidden rounded-[2rem] bg-[#e4f2ff] p-7 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:p-12">
            <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-blue-300/30 blur-3xl" />
            <div className="relative max-w-3xl">
              <p className="text-sm font-bold uppercase text-blue-800">
                Próximo paso
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#082231] sm:text-4xl">
                Potencia tus decisiones con el poder de los datos.
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-700">
                Podemos comenzar entendiendo tus fuentes de información,
                desafíos prioritarios y oportunidades para generar valor
                analítico.
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
