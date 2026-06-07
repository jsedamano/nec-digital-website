import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import transformationHero from "../../../public/services/transformacion-digital.png";
import { SiteHeader } from "../../components/site-header";

const capabilities = [
  {
    number: "01",
    title: "Diagnóstico de Capacidades Digitales",
    description:
      "Evaluamos la madurez digital de tu organización y detectamos brechas tecnológicas y culturales.",
  },
  {
    number: "02",
    title: "Backlog de Proyectos Digitales",
    description:
      "Priorizamos las iniciativas tecnológicas alineadas a tu estrategia de negocio.",
  },
  {
    number: "03",
    title: "Roadmap de Transformación",
    description:
      "Elaboramos una hoja de ruta para implementar los cambios de manera sostenible.",
  },
  {
    number: "04",
    title: "Monitoreo de KPIs",
    description:
      "Diseñamos indicadores clave para hacer seguimiento del impacto digital.",
  },
  {
    number: "05",
    title: "Gestión de Datos (Power BI)",
    description:
      "Implementamos dashboards estratégicos con visualizaciones útiles y efectivas.",
  },
  {
    number: "06",
    title: "Gestión del Cambio",
    description:
      "Acompañamos a tus equipos en el proceso de adopción tecnológica con metodologías ágiles.",
  },
];

const engagementPhases = [
  {
    number: "01",
    title: "Entender",
    description:
      "Analizamos el contexto, las capacidades actuales y los desafíos prioritarios del negocio.",
  },
  {
    number: "02",
    title: "Priorizar",
    description:
      "Convertimos oportunidades en iniciativas claras, ordenadas por impacto y viabilidad.",
  },
  {
    number: "03",
    title: "Implementar",
    description:
      "Acompañamos la ejecución con una hoja de ruta realista y equipos alineados.",
  },
  {
    number: "04",
    title: "Medir",
    description:
      "Monitoreamos resultados para sostener el avance y tomar mejores decisiones.",
  },
];

const outcomes = [
  "Una visión digital alineada al negocio",
  "Iniciativas priorizadas por impacto",
  "Adopción sostenible en toda la organización",
];

export const metadata: Metadata = {
  title: "Transformación Digital | NEC Digital",
  description:
    "Consultoría en transformación digital para diagnosticar capacidades, priorizar iniciativas, construir roadmaps y acelerar la adopción tecnológica.",
};

export default function DigitalTransformationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-[#082231]">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-[#061a24] px-5 pb-14 pt-40 text-white sm:px-8 lg:pb-16 lg:pt-28">
        <Image
          src={transformationHero}
          alt=""
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover object-center opacity-[0.38]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,17,27,0.98)_0%,rgba(4,17,27,0.90)_46%,rgba(4,17,27,0.56)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-[#061a24] to-transparent" />
        <div className="absolute -right-20 top-24 -z-10 h-80 w-80 rounded-full bg-cyan-200/14 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-cyan-100/80">
            <Link href="/servicios" className="transition hover:text-white">
              Servicios
            </Link>
            <span aria-hidden="true" className="text-white/35">
              /
            </span>
            <span className="text-white">Transformación Digital</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-5 inline-flex rounded-full border border-cyan-100/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase text-cyan-50 shadow-[0_10px_40px_rgba(8,47,73,0.28)] backdrop-blur">
                Consultoría en Transformación Digital
              </p>

              <h1 className="text-4xl font-semibold leading-[1.04] sm:text-5xl lg:text-6xl">
                De la estrategia digital a resultados que sí se sostienen.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100/84 sm:text-lg">
                Ayudamos a las organizaciones a entender dónde están, definir
                qué iniciativas generan mayor valor y construir una ruta de
                transformación conectada con sus objetivos de negocio.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#capacidades"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-200 px-6 py-3 text-sm font-bold text-[#082231] shadow-[0_18px_55px_rgba(103,232,249,0.28)] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Conocer capacidades
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/14"
                >
                  Conversar con un consultor
                </Link>
              </div>
            </div>

            <aside className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-white/8 p-6 shadow-[0_24px_80px_rgba(2,8,23,0.34)] backdrop-blur-md sm:p-8">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-200/14 blur-2xl" />
              <div className="relative">
                <p className="text-sm font-semibold uppercase text-cyan-100">
                  El resultado
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight">
                  Una transformación con foco, dirección y adopción.
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
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-cyan-700">
                Qué hacemos
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
                Capacidades para avanzar con claridad.
              </h2>
            </div>

            <p className="max-w-2xl leading-8 text-slate-600 lg:ml-auto">
              Integramos diagnóstico, priorización, datos y gestión del cambio
              para que la transformación digital deje de ser una colección de
              proyectos y se convierta en una capacidad del negocio.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <article
                key={capability.number}
                className="service-card group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_20px_55px_rgba(8,47,73,0.12)] sm:p-7"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-100/60 blur-2xl transition duration-300 group-hover:bg-cyan-200/80" />
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

                  <h3 className="mt-8 text-xl font-semibold leading-snug text-[#082231] sm:text-2xl">
                    {capability.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    {capability.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#061a24] px-5 pb-10 pt-10 text-white sm:px-8 lg:pb-12 lg:pt-12">
        <div className="absolute -left-24 top-1/3 -z-10 h-72 w-72 rounded-full bg-cyan-200/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-sky-300/10 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-cyan-200">
              Cómo acompañamos
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Una ruta práctica desde el diagnóstico hasta el impacto.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-100/76">
              Trabajamos junto a tus equipos para convertir la visión en
              decisiones, iniciativas y capacidades que puedan mantenerse en
              el tiempo.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {engagementPhases.map((phase) => (
              <article
                key={phase.number}
                className="rounded-[1.5rem] border border-white/12 bg-white/7 p-6 backdrop-blur-sm"
              >
                <p className="text-sm font-bold tracking-[0.18em] text-cyan-200">
                  {phase.number}
                </p>
                <h3 className="mt-8 text-2xl font-semibold">{phase.title}</h3>
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
          <div className="relative overflow-hidden rounded-[2rem] bg-[#dff6fa] p-7 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:p-12">
            <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-cyan-300/35 blur-3xl" />
            <div className="relative max-w-3xl">
              <p className="text-sm font-bold uppercase text-cyan-800">
                Próximo paso
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#082231] sm:text-4xl">
                Convirtamos tu visión digital en una ruta clara.
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-700">
                Podemos empezar por entender tus retos actuales, identificar
                oportunidades y definir las primeras decisiones de alto impacto.
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
