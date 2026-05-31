import Image from "next/image";

const navItems = [
  { label: "Servicios", href: "#servicios", hasMenu: true },
  { label: "Industrias", href: "#industrias", hasMenu: true },
  { label: "Clientes", href: "#clientes" },
  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
];

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

      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-[#071b25]/82 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-3 sm:px-8 lg:h-20 lg:flex-row lg:items-center lg:gap-8 lg:py-0">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#inicio"
              aria-label="NEC Digital"
              className="relative h-8 w-40 shrink-0 sm:h-9 sm:w-44"
            >
              <Image
                src="/nec-digital-horizontal.png"
                alt="NEC Digital"
                fill
                sizes="(max-width: 640px) 160px, 176px"
                className="object-contain"
              />
            </a>

            <a
              href="#contacto"
              className="rounded-full border border-cyan-200/35 bg-cyan-100/12 px-4 py-2 text-sm font-semibold text-cyan-50 transition hover:border-cyan-100/80 hover:bg-cyan-100/22 lg:hidden"
            >
              Contáctanos
            </a>
          </div>

          <nav
            aria-label="Navegación principal"
            className="flex items-center gap-1 overflow-x-auto text-sm font-medium text-white/82 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-2"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex shrink-0 items-center gap-1 rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white sm:px-4"
              >
                {item.label}
                {item.hasMenu ? (
                  <span className="h-1.5 w-1.5 rotate-45 border-b border-r border-cyan-100/80 transition group-hover:translate-y-0.5" />
                ) : null}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="ml-auto hidden rounded-full border border-cyan-200/35 bg-cyan-100/12 px-5 py-2.5 text-sm font-semibold text-cyan-50 shadow-[0_14px_45px_rgba(14,165,233,0.18)] transition hover:border-cyan-100/80 hover:bg-cyan-100/22 lg:inline-flex"
          >
            Contáctanos
          </a>
        </div>
      </header>

      <section
        id="inicio"
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-40 sm:px-8 sm:pt-36 lg:pt-24"
      >
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan-100/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-50 shadow-[0_10px_40px_rgba(8,47,73,0.28)] backdrop-blur">
            Consultoría IT para empresas
          </p>

          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Transformación digital con visión estratégica.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100/86 sm:text-lg">
            Acompañamos a organizaciones que buscan modernizar su operación,
            integrar tecnología con propósito y convertir sus datos en mejores
            decisiones de negocio.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-cyan-200 px-6 py-3 text-sm font-bold text-[#082231] shadow-[0_18px_55px_rgba(103,232,249,0.28)] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Conecta con nosotros
            </a>
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
