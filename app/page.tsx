import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "./components/site-header";

const capabilities = [
  "Estrategia digital",
  "Cloud e infraestructura",
  "Datos y automatización",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#061a24] text-white">
      <Image
        src="/costa-verde.jpg"
        alt="Vista panorámica de la Costa Verde de Lima al atardecer"
        fill
        preload
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,17,27,0.92)_0%,rgba(4,17,27,0.76)_36%,rgba(4,17,27,0.36)_68%,rgba(4,17,27,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_34%,rgba(56,189,248,0.28),transparent_30%),linear-gradient(180deg,rgba(4,17,27,0.50)_0%,rgba(4,17,27,0.10)_42%,rgba(4,17,27,0.82)_100%)]" />

      <SiteHeader />

      <section
        id="inicio"
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-40 sm:px-8 sm:pt-36 lg:pt-24"
      >
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan-100/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase text-cyan-50 shadow-[0_10px_40px_rgba(8,47,73,0.28)] backdrop-blur">
            Consultoría IT para empresas
          </p>

          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.04] text-white sm:text-5xl lg:text-6xl">
            Transformación digital con visión estratégica.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100/86 sm:text-lg">
            Acompañamos a organizaciones que buscan modernizar su operación,
            integrar tecnología con propósito y convertir sus datos en mejores
            decisiones de negocio.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-cyan-200 px-6 py-3 text-sm font-bold text-[#082231] shadow-[0_18px_55px_rgba(103,232,249,0.28)] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Conecta con nosotros
            </Link>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/14"
            >
              Ver servicios
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-cyan-50/90">
            {capabilities.map((capability) => (
              <span
                key={capability}
                className="rounded-full border border-white/16 bg-white/10 px-4 py-2 backdrop-blur"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
