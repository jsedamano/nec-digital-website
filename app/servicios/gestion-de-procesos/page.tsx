import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import processesHero from "../../../public/services/procesos.png";
import { SiteHeader } from "../../components/site-header";

const capabilities = [
  {
    number: "01",
    title: "Mapa de Procesos",
    description:
      "Identificamos, documentamos y priorizamos los procesos clave para el negocio.",
    detail:
      "Hacemos visible cómo fluye el trabajo, dónde se genera valor y qué puntos requieren atención.",
  },
  {
    number: "02",
    title: "Rediseño y Optimización",
    description:
      "Impulsamos la mejora continua y la automatización de procesos con herramientas digitales.",
    detail:
      "Simplificamos actividades, reducimos fricciones y diseñamos operaciones preparadas para crecer.",
  },
  {
    number: "03",
    title: "KPIs y Seguimiento",
    description:
      "Definimos indicadores y mecanismos de control para monitorear el desempeño.",
    detail:
      "Conectamos métricas operativas con objetivos de negocio para sostener mejores decisiones.",
  },
  {
    number: "04",
    title: "Transformación Lean",
    description:
      "Aplicamos metodologías Lean para eliminar desperdicios y maximizar el valor.",
    detail:
      "Fortalecemos una cultura de mejora continua enfocada en eficiencia, calidad y experiencia.",
  },
];

const improvementPhases = [
  {
    number: "01",
    title: "Descubrir",
    description:
      "Entendemos el proceso actual, sus actores, resultados y principales fricciones.",
  },
  {
    number: "02",
    title: "Diseñar",
    description:
      "Definimos un proceso objetivo más simple, eficiente y orientado al valor.",
  },
  {
    number: "03",
    title: "Implementar",
    description:
      "Acompañamos cambios, automatizaciones y nuevas formas de trabajo.",
  },
  {
    number: "04",
    title: "Mejorar",
    description:
      "Medimos resultados y activamos ciclos continuos de optimización.",
  },
];

const outcomes = [
  "Procesos más simples y eficientes",
  "Mayor visibilidad sobre el desempeño",
  "Menores costos y tiempos operativos",
];

const priorities = [
  "Eficiencia operativa",
  "Experiencia del cliente",
  "Automatización",
  "Mejora continua",
];

export const metadata: Metadata = {
  title: "Gestión de Procesos | NEC Digital",
  description:
    "Consultoría en gestión de procesos, optimización, automatización, KPIs y transformación Lean para operaciones más eficientes.",
};

export default function ProcessManagementPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-[#082231]">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-[#071b25] px-5 pb-14 pt-40 text-white sm:px-8 lg:pb-16 lg:pt-28">
        <Image
          src={processesHero}
          alt=""
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover object-center opacity-[0.42]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,20,30,0.99)_0%,rgba(4,20,30,0.91)_46%,rgba(4,20,30,0.56)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-[#071b25] to-transparent" />
        <div className="absolute -right-20 top-24 -z-10 h-80 w-80 rounded-full bg-cyan-300/12 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-cyan-100/80">
            <Link href="/servicios" className="transition hover:text-white">
              Servicios
            </Link>
            <span aria-hidden="true" className="text-white/35">
              /
            </span>
            <span className="text-white">Gestión de Procesos</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-5 inline-flex rounded-full border border-cyan-100/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase text-cyan-50 shadow-[0_10px_40px_rgba(8,47,73,0.28)] backdrop-blur">
                Consultoría en Gestión de Procesos
              </p>

              <h1 className="text-4xl font-semibold leading-[1.04] sm:text-5xl lg:text-6xl">
                Procesos más ágiles, simples y orientados al valor.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100/84 sm:text-lg">
                Optimizamos y rediseñamos los procesos de tu organización para
                mejorar la eficiencia, reducir costos y brindar valor
                sostenible.
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
                  Optimizar nuestros procesos
                </Link>
              </div>
            </div>

            <aside className="relative overflow-hidden rounded-[2rem] border border-cyan-100/14 bg-[#0a2935]/72 p-6 shadow-[0_24px_80px_rgba(2,8,23,0.38)] backdrop-blur-md sm:p-8">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-300/14 blur-2xl" />
              <div className="relative">
                <p className="text-sm font-semibold uppercase text-cyan-100">
                  Operación con propósito
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight">
                  Más eficiencia, control y capacidad de adaptación.
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
                Qué hacemos
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
                Mejoramos cómo fluye el trabajo.
              </h2>
            </div>

            <p className="max-w-2xl leading-8 text-slate-600 lg:ml-auto">
              Combinamos análisis, rediseño, automatización e indicadores para
              construir procesos que respondan mejor a las necesidades del
              negocio y de sus clientes.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {capabilities.map((capability, index) => (
              <article
                key={capability.number}
                className="service-card group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_20px_55px_rgba(8,47,73,0.12)] sm:p-7"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-100/70 blur-2xl transition duration-300 group-hover:bg-teal-200/70" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-[0.18em] text-cyan-700">
                      {capability.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-px w-10 bg-cyan-600/45 transition-all duration-300 group-hover:w-16"
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

      <section className="relative isolate overflow-hidden bg-[#071b25] px-5 pb-10 pt-10 text-white sm:px-8 lg:pb-12 lg:pt-12">
        <div className="absolute -left-24 top-1/3 -z-10 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-teal-300/8 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.65fr_1fr] lg:items-center">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase text-cyan-200">
              Ciclo de mejora
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              De la operación actual a una mejor forma de trabajar.
            </h2>
            <p className="mt-5 leading-8 text-slate-100/76">
              Diseñamos mejoras con una visión integral para que los cambios
              generen valor y puedan sostenerse en el tiempo.
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
            {improvementPhases.map((phase) => (
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
          <div className="relative overflow-hidden rounded-[2rem] bg-[#dff6f5] p-7 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:p-12">
            <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-cyan-300/30 blur-3xl" />
            <div className="relative max-w-3xl">
              <p className="text-sm font-bold uppercase text-cyan-800">
                Próximo paso
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#082231] sm:text-4xl">
                Impulsa procesos más ágiles y eficientes.
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-700">
                Podemos comenzar identificando los procesos críticos, sus
                principales oportunidades y una ruta concreta de mejora.
              </p>
            </div>

            <Link
              href="/contacto"
              className="relative mt-7 inline-flex shrink-0 items-center justify-center rounded-full bg-[#082231] px-6 py-3 text-sm font-bold text-white shadow-[0_18px_55px_rgba(8,34,49,0.20)] transition hover:-translate-y-0.5 hover:bg-cyan-800 lg:mt-0"
            >
              Conversemos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
