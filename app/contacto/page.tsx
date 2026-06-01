import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "../components/site-header";

const contactEmail = "necdigitalpe@outlook.com";
const mailtoHref = `mailto:${contactEmail}?subject=Consulta%20NEC%20Digital`;

const conversationTopics = [
  {
    title: "Diagnóstico",
    text: "Revisamos dónde está tu operación y qué oportunidades digitales conviene priorizar.",
  },
  {
    title: "Arquitectura",
    text: "Ordenamos sistemas, datos e infraestructura para que el crecimiento sea sostenible.",
  },
  {
    title: "Ejecución",
    text: "Acompañamos la implementación con foco en impacto, adopción y continuidad.",
  },
];

export const metadata: Metadata = {
  title: "Contacto | NEC Digital",
  description:
    "Conversemos sobre consultoría IT, transformación digital, datos, automatización e infraestructura.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#061a24] text-white">
      <SiteHeader />

      <section className="relative isolate min-h-screen overflow-hidden px-5 pb-20 pt-36 sm:px-8 lg:pt-28">
        <Image
          src="/contacto.jpg"
          alt="Equipo de tecnología colaborando alrededor de una mesa"
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover object-center opacity-[0.42]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,17,27,0.96)_0%,rgba(4,17,27,0.86)_42%,rgba(4,17,27,0.54)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#061a24] to-transparent" />

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-cyan-100/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase text-cyan-50 shadow-[0_10px_40px_rgba(8,47,73,0.28)] backdrop-blur">
              Contacto
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Conversemos sobre tu próximo movimiento digital.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100/86 sm:text-lg">
              Si tienes una idea, un reto operativo o una decisión tecnológica
              importante por delante, escríbenos. Podemos ayudarte a convertir
              esa conversación en una ruta clara.
            </p>

            <div
              id="correo"
              className="mt-8 border-l-2 border-cyan-200/70 pl-5"
            >
              <p className="text-sm font-semibold text-cyan-100">
                Correo directo
              </p>
              <a
                href={mailtoHref}
                className="mt-2 inline-flex break-all text-2xl font-semibold text-white transition hover:text-cyan-100 sm:text-3xl"
              >
                {contactEmail}
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={mailtoHref}
                className="inline-flex items-center justify-center rounded-full bg-cyan-200 px-6 py-3 text-sm font-bold text-[#082231] shadow-[0_18px_55px_rgba(103,232,249,0.28)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Escribir ahora
              </a>
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-white/8 p-6 shadow-[0_24px_80px_rgba(2,8,23,0.34)] backdrop-blur-md sm:p-8 lg:ml-auto lg:max-w-xl">
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-200/14 blur-2xl" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase text-cyan-100">
                Qué podemos explorar contigo
              </p>

              <div className="mt-6 divide-y divide-white/12">
                {conversationTopics.map((topic) => (
                  <div key={topic.title} className="py-5 first:pt-0 last:pb-0">
                    <h2 className="text-xl font-semibold text-white">
                      {topic.title}
                    </h2>
                    <p className="mt-2 leading-7 text-slate-100/78">
                      {topic.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
