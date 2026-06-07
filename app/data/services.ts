export const services = [
  {
    name: "Transformación Digital",
    slug: "transformacion-digital",
    image: "/services/transformacion-digital.png",
    description:
      "Estrategias y soluciones tecnológicas que modernizan la operación y aceleran el crecimiento.",
  },
  {
    name: "Ciberseguridad",
    slug: "ciberseguridad",
    image: "/services/ciberseguridad.png",
    description:
      "Protección integral para fortalecer activos críticos, información y continuidad operativa.",
  },
  {
    name: "Data Science",
    slug: "data-science",
    image: "/services/data-science.png",
    description:
      "Datos, analítica e inteligencia artificial convertidos en decisiones de negocio.",
  },
  {
    name: "Gestión de Procesos",
    slug: "gestion-de-procesos",
    image: "/services/procesos.png",
    description:
      "Procesos más ágiles, eficientes y alineados con los objetivos estratégicos.",
  },
  {
    name: "Gestión de Riesgos",
    slug: "gestion-de-riesgos",
    image: "/services/riesgos.png",
    description:
      "Identificación y gestión de riesgos para avanzar con control y resiliencia.",
  },
  {
    name: "Compliance",
    slug: "compliance",
    image: "/services/compliance.png",
    description:
      "Cumplimiento normativo y buenas prácticas integrados a la gestión empresarial.",
  },
] as const;

export function getServiceHref(slug: string) {
  return `/servicios/${slug}`;
}
