import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "../components/site-header";

const clientLogos = [
  { src: "/clients/cliente1.png", width: 222, height: 227 },
  { src: "/clients/cliente2.png", width: 309, height: 163 },
  { src: "/clients/cliente3.png", width: 225, height: 225 },
  { src: "/clients/cliente4.png", width: 225, height: 224 },
  { src: "/clients/cliente5.png", width: 400, height: 138 },
  { src: "/clients/cliente6.png", width: 387, height: 130 },
  { src: "/clients/cliente7.png", width: 200, height: 200 },
  { src: "/clients/cliente8.png", width: 1200, height: 1201 },
  { src: "/clients/cliente9.png", width: 1939, height: 629 },
  { src: "/clients/cliente10.png", width: 500, height: 444 },
  { src: "/clients/cliente11.png", width: 225, height: 225 },
  { src: "/clients/cliente12.jpeg", width: 200, height: 200 },
  { src: "/clients/cliente13.jpeg", width: 200, height: 200 },
];

export const metadata: Metadata = {
  title: "Clientes | NEC Digital",
  description:
    "Empresas y organizaciones que han confiado en NEC Digital para impulsar iniciativas de transformación digital, tecnología y gestión de riesgos.",
};

export default function ClientsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-[#082231]">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-[#061a24] px-5 pb-14 pt-40 text-white sm:px-8 lg:pb-12 lg:pt-32">
        <Image
          src="/clientes.jpg"
          alt="Personas revisando información de negocio en una reunión"
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover object-center opacity-[0.42]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,17,27,0.96)_0%,rgba(4,17,27,0.84)_45%,rgba(4,17,27,0.50)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-52 bg-gradient-to-t from-[#061a24] to-transparent" />
        <div className="absolute -right-24 top-24 -z-10 h-72 w-72 rounded-full bg-cyan-200/12 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan-100/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase text-cyan-50 shadow-[0_10px_40px_rgba(8,47,73,0.28)] backdrop-blur">
            Clientes
          </p>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Organizaciones que confían en nuestra experiencia.
            </h1>

            <p className="max-w-2xl text-base leading-8 text-slate-100/82 sm:text-lg lg:ml-auto">
              Acompañamos a empresas e instituciones que buscan modernizar sus
              procesos, fortalecer sus capacidades tecnológicas y avanzar con
              una visión clara de transformación digital.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 pt-12 sm:px-8 lg:pb-20 lg:pt-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase text-cyan-700">
                Red de clientes
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
                Marcas que han elegido avanzar con NEC Digital.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-slate-600">
              Cada proyecto parte de una necesidad distinta, pero todos
              comparten el mismo objetivo: crear tecnología útil, segura y
              alineada al negocio.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {clientLogos.map((logo, index) => (
              <div
                key={logo.src}
                className="client-logo-card group flex min-h-40 items-center justify-center rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_20px_55px_rgba(8,47,73,0.12)]"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <Image
                  src={logo.src}
                  alt={`Logo cliente NEC Digital ${index + 1}`}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-20 w-auto max-w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
