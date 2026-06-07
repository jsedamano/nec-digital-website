import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import servicesHero from "../../public/services.jpg";
import { SiteHeader } from "../components/site-header";
import { getServiceHref, services } from "../data/services";

export const metadata: Metadata = {
  title: "Servicios | NEC Digital",
  description:
    "Conoce los servicios de consultoría de NEC Digital en transformación digital, ciberseguridad, datos, procesos, riesgos y compliance.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-[#082231]">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-[#061a24] px-5 pb-14 pt-40 text-white sm:px-8 lg:pb-12 lg:pt-32">
        <Image
          src={servicesHero}
          alt=""
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover object-center opacity-[0.32]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,17,27,0.98)_0%,rgba(4,17,27,0.88)_48%,rgba(4,17,27,0.58)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#061a24] to-transparent" />
        <div className="absolute -right-24 top-20 -z-10 h-80 w-80 rounded-full bg-cyan-200/12 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan-100/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase text-cyan-50 shadow-[0_10px_40px_rgba(8,47,73,0.28)] backdrop-blur">
            Servicios
          </p>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Capacidades para transformar, proteger y hacer crecer tu negocio.
            </h1>

            <p className="max-w-2xl text-base leading-8 text-slate-100/82 sm:text-lg lg:ml-auto">
              Combinamos estrategia, tecnología y gestión especializada para
              convertir desafíos complejos en resultados sostenibles.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 pt-14 sm:px-8 lg:pb-24 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase text-cyan-700">
              Nuestras soluciones
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Experiencia especializada para cada etapa de tu evolución.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={getServiceHref(service.slug)}
                className="service-card group overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-cyan-200 hover:shadow-[0_24px_60px_rgba(8,47,73,0.14)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0b2734]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061a24]/35 via-transparent to-transparent opacity-80 transition group-hover:opacity-50" />
                  <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#061a24]/55 text-xl text-white opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    ↗
                  </span>
                </div>

                <div className="p-6">
                  <div className="mb-4 h-0.5 w-10 bg-cyan-600 transition-all duration-300 group-hover:w-16" />
                  <h3 className="text-xl font-semibold text-[#082231] sm:text-2xl">
                    {service.name}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
