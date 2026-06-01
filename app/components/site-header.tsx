import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Servicios", href: "/#servicios", hasMenu: true },
  { label: "Industrias", href: "/#industrias", hasMenu: true },
  { label: "Clientes", href: "/#clientes" },
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
            className="rounded-full border border-cyan-200/35 bg-cyan-100/12 px-4 py-2 text-sm font-semibold text-cyan-50 transition hover:border-cyan-100/80 hover:bg-cyan-100/22 lg:hidden"
          >
            Contáctanos
          </Link>
        </div>

        <nav
          aria-label="Navegación principal"
          className="flex items-center gap-1 overflow-x-auto text-sm font-medium text-white/82 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-2"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex shrink-0 items-center gap-1 rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white sm:px-4"
            >
              {item.label}
              {item.hasMenu ? (
                <span className="h-1.5 w-1.5 rotate-45 border-b border-r border-cyan-100/80 transition group-hover:translate-y-0.5" />
              ) : null}
            </Link>
          ))}
        </nav>

        <Link
          href="/contacto"
          className="ml-auto hidden rounded-full border border-cyan-200/35 bg-cyan-100/12 px-5 py-2.5 text-sm font-semibold text-cyan-50 shadow-[0_14px_45px_rgba(14,165,233,0.18)] transition hover:border-cyan-100/80 hover:bg-cyan-100/22 lg:inline-flex"
        >
          Contáctanos
        </Link>
      </div>
    </header>
  );
}
