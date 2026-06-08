import Image from "next/image";
import Link from "next/link";
import { getServiceHref, services } from "../data/services";

const navItems = [
  { label: "Clientes", href: "/clientes" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-[#071b25]/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-3 sm:px-8 lg:h-20 lg:flex-row lg:items-center lg:gap-8 lg:py-0">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
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
          </Link>

          <Link
            href="/contacto"
            className="rounded-full border border-cyan-200/35 bg-cyan-100/12 px-4 py-2 text-[15px] font-semibold text-cyan-50 transition hover:border-cyan-100/80 hover:bg-cyan-100/22 lg:hidden"
          >
            Contáctanos
          </Link>
        </div>

        <nav
          aria-label="Navegación principal"
          className="flex items-center gap-1 overflow-x-auto text-base font-semibold text-white/82 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-2 lg:overflow-visible"
        >
          <div className="group relative shrink-0">
            <Link
              href="/servicios"
              aria-haspopup="true"
              className="flex items-center gap-1 rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white sm:px-4"
            >
              Servicios
              <span className="h-1.5 w-1.5 rotate-45 border-b border-r border-cyan-100/80 transition group-hover:translate-y-0.5" />
            </Link>

            <div className="invisible absolute left-0 top-full z-50 hidden w-72 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 lg:block">
              <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2 text-[#082231] shadow-[0_22px_65px_rgba(2,8,23,0.22)]">
                <Link
                  href="/servicios"
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-cyan-800 transition hover:bg-cyan-50"
                >
                  Todos los servicios
                  <span aria-hidden="true">↗</span>
                </Link>

                <div className="my-1 border-t border-slate-100" />

                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={getServiceHref(service.slug)}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-cyan-800"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex shrink-0 items-center gap-1 rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white sm:px-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contacto"
          className="ml-auto hidden rounded-full border border-cyan-200/35 bg-cyan-100/12 px-5 py-2.5 text-[15px] font-semibold text-cyan-50 shadow-[0_14px_45px_rgba(14,165,233,0.18)] transition hover:border-cyan-100/80 hover:bg-cyan-100/22 lg:inline-flex"
        >
          Contáctanos
        </Link>
      </div>
    </header>
  );
}
