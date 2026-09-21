import { createFileRoute } from "@tanstack/react-router";
import {
  ClipboardCheck,
  FileText,
  Linkedin,
  MapPin,
  Phone,
  Search,
  Snowflake,
  Wrench,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroImage from "@/assets/frio-hero.jpg";
import roomDoors from "@/assets/frio-room-doors.jpg";
import roomUnits from "@/assets/frio-room-units.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Frioequipos | Construcción de cuartos fríos" },
      {
        name: "description",
        content:
          "Cotiza cuartos fríos para negocios en Monterrey y el norte del país con Frioequipos.",
      },
      { property: "og:title", content: "Frioequipos | Construcción de cuartos fríos" },
      {
        property: "og:description",
        content:
          "Diseño, obra, instalación y mantenimiento de cuartos fríos para negocios mexicanos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const whatsappNumber = "528125947679";
const whatsappText = encodeURIComponent(
  "Hola, quiero cotizar un cuarto frío para mi negocio.",
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

const clients = ["SAFI", "BONAFONT", "ARENA MONTERREY", "SANTA LUCÍA", "TENERÍAS", "UAT"];

const steps = [
  {
    number: "1",
    title: "Diagnóstico",
    text: "Visitamos tu negocio, medimos y entendemos el volumen de tu producto y operación actual.",
    icon: Search,
  },
  {
    number: "2",
    title: "Cotización",
    text: "Te entregamos una propuesta técnica con capacidad, materiales y costo de inversión.",
    icon: FileText,
  },
  {
    number: "3",
    title: "Construcción",
    text: "Instalamos y construimos con las medidas y tiempos acordados en un inicio.",
    icon: Wrench,
  },
  {
    number: "4",
    title: "Entrega",
    text: "Dejamos el cuarto operando y capacitamos a tu equipo para usarlo desde el primer día.",
    icon: ClipboardCheck,
  },
];

const proofItems = [
  ["+50 años", "de experiencia en refrigeración industrial."],
  ["Grandes marcas confían en nosotros", "Universidades, hoteles, restaurantes y empresas ya operan con Frioequipos."],
  ["Diseño, obra y mantenimiento", "un mismo equipo encargándose de tu proyecto."],
  ["Estándares de calidad", "Instalaciones para la Certificación TIF o el Distintivo H."],
];

const mapPoints = [
  "top-[14%] left-[46%]",
  "top-[27%] left-[54%]",
  "top-[39%] left-[44%]",
  "top-[51%] left-[57%]",
  "top-[63%] left-[49%]",
  "top-[75%] left-[58%]",
  "top-[86%] left-[51%]",
];

function Index() {
  const [status, setStatus] = useState("");

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const scrollToForm = () => {
    document.getElementById("cotizacion")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const need = String(formData.get("need") ?? "").trim();

    const subject = encodeURIComponent("Solicitud de cotización desde frioequipos.com");
    const body = encodeURIComponent(
      [`Nombre: ${name}`, `Correo: ${email}`, `Necesidad: ${need}`].join("\n"),
    );

    window.location.href = `mailto:contacto@frioequipos.com?subject=${subject}&body=${body}`;
    setStatus("Tu solicitud está lista para enviarse a contacto@frioequipos.com.");
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <a href="#inicio" className="flex items-center gap-2" aria-label="Frioequipos inicio">
            <span className="flex size-5 items-center justify-center border border-brand-line text-xs font-black text-brand-deep">
              F
            </span>
            <span>
              <span className="block font-logo text-xl font-bold leading-none logo-spacing text-brand-navy sm:text-2xl">
                RIOEQUIPOS
              </span>
              <span className="block text-center text-[0.56rem] font-medium uppercase tracking-[0.32em] text-brand-deep">
                cuartos fríos
              </span>
            </span>
          </a>

          <div className="flex items-center gap-3 sm:gap-8">
            <a
              href="tel:+528125947679"
              className="hidden items-center gap-2 text-sm font-extrabold text-brand-deep sm:flex"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-brand-deep text-primary-foreground">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              8125947679
            </a>
            <Button asChild variant="whatsapp" size="lg" className="px-4 text-xs sm:px-6 sm:text-sm">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Cotización por Whatsapp
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main id="inicio">
        <section className="relative isolate min-h-[640px] overflow-hidden bg-brand-navy lg:min-h-[630px]">
          <img
            src={heroImage}
            alt="Almacén industrial refrigerado con puerta de cuarto frío"
            width={1600}
            height={900}
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-brand-navy/75" />
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_480px] lg:px-10 lg:py-28">
            <div className="flex max-w-2xl flex-col justify-center text-primary-foreground">
              <p className="mb-4 max-w-md text-base font-medium leading-tight text-primary-foreground/90">
                Construcción de cuartos fríos para negocios en Monterrey y el norte del país.
              </p>
              <h1 className="max-w-3xl text-balance font-display text-5xl font-black leading-[0.94] sm:text-6xl lg:text-7xl">
                Construimos el cuarto frío que tu producto necesita.
              </h1>
              <p className="mt-4 max-w-xl text-lg font-medium leading-tight text-primary-foreground/95">
                Diseñamos y construimos cuartos de conservación y congelación a la medida de tu
                espacio, tu volumen de producto y operación diaria.
              </p>
              <div className="mt-12 flex flex-col gap-7 sm:flex-row sm:items-end">
                <Button asChild variant="whatsapp" size="xl" className="w-fit px-10 font-extrabold">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    Cotiza por Whatsapp
                  </a>
                </Button>
                <p className="max-w-md text-base font-medium text-primary-foreground/95">
                  Cotización sin costo. Te responderemos en menos de 24 horas hábiles.
                </p>
              </div>
            </div>

            <form
              id="cotizacion"
              onSubmit={handleSubmit}
              className="self-center rounded-2xl bg-card p-7 shadow-cold-lg sm:p-8"
            >
              <h2 className="text-3xl font-black leading-tight text-brand-navy">
                Solicita tu cotización
              </h2>
              <p className="mt-2 text-base font-medium text-card-foreground">
                ¿Listo para transformar el futuro de tu negocio?
              </p>
              <div className="mt-9 space-y-4">
                <Input
                  name="name"
                  required
                  placeholder="Nombre"
                  aria-label="Nombre"
                  className="h-12 rounded-xl bg-input text-base shadow-none placeholder:text-muted-foreground"
                />
                <Input
                  type="email"
                  name="email"
                  required
                  placeholder="Correo"
                  aria-label="Correo"
                  className="h-12 rounded-xl bg-input text-base shadow-none placeholder:text-muted-foreground"
                />
                <Textarea
                  name="need"
                  required
                  placeholder="¿Qué necesitas construir?"
                  aria-label="Qué necesitas construir"
                  className="min-h-24 rounded-xl bg-input text-base shadow-none placeholder:text-muted-foreground"
                />
              </div>
              <Button variant="frio" size="xl" className="mt-7 px-7 text-base font-black" type="submit">
                ENVIAR COTIZACIÓN
              </Button>
              {status ? <p className="mt-4 text-sm font-semibold text-brand-deep">{status}</p> : null}
            </form>
          </div>
        </section>

        <section className="bg-brand-deep py-9 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <p className="text-sm font-medium text-primary-foreground/90">
              Negocios que ya operan con cuartos fríos construidos por nosotros.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
              {clients.map((client, index) => (
                <div
                  key={client}
                  className="flex h-16 items-center justify-center border border-primary-foreground/10 bg-brand-navy px-3 text-center text-sm font-bold text-primary-foreground shadow-cold"
                >
                  <span className={index === 1 ? "text-accent" : undefined}>{client}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-panel py-18 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-8">
              <h2 className="text-balance text-3xl font-black text-brand-navy sm:text-4xl">
                Así se construye tu cuarto frío
              </h2>
              <p className="mt-2 text-lg font-medium text-brand-navy">
                Cuatro simples pasos para transformar tu negocio a uno más fuerte y confiable
              </p>
            </div>
            <div className="grid border border-brand-line bg-card md:grid-cols-4">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="min-h-64 border-b border-brand-line p-5 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <p className="text-xl font-black text-brand-deep">{step.number}</p>
                  <h3 className="mt-2 text-xl font-extrabold text-brand-navy">{step.title}</h3>
                  <p className="mt-6 text-sm font-medium leading-tight text-card-foreground">
                    {step.text}
                  </p>
                  <step.icon className="mt-8 size-16 stroke-[1.5] text-brand-deep" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card py-18 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_560px] lg:px-10">
            <div>
              <p className="text-2xl font-medium text-card-foreground">
                Una empresa mexicana con más de
              </p>
              <h2 className="text-balance text-5xl font-black leading-[0.92] text-brand-navy sm:text-6xl">
                50 años de experiencia
              </h2>
              <p className="max-w-xl text-2xl font-medium leading-tight text-brand-navy">
                Expertos en instalar y dar mantenimiento a cuartos fríos.
              </p>
              <div className="mt-10 max-w-xl space-y-5 text-xl font-medium leading-tight text-muted-foreground">
                <p>Somos una empresa que opera desde Monterrey, N.L., con equipo propio de instalación.</p>
                <p>
                  Todo con una misma empresa, sin subcontratar, ni gastar tiempo buscando más proveedores.
                </p>
              </div>
            </div>
            <div className="grid border border-brand-line bg-brand-panel sm:grid-cols-2">
              {proofItems.map(([title, copy]) => (
                <article key={title} className="min-h-36 border-b border-brand-line p-6 sm:border-r sm:even:border-r-0 [&:nth-last-child(-n+2)]:sm:border-b-0">
                  <h3 className="text-2xl font-black leading-none text-brand-navy">{title}</h3>
                  <p className="mt-3 text-base font-medium leading-tight text-card-foreground">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-deep py-6 text-primary-foreground">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <div>
              <h2 className="text-xl font-black">
                Cotización sin costo, te responderemos en menos de 24 horas.
              </h2>
              <p className="mt-4 max-w-2xl text-sm font-medium text-primary-foreground/95">
                Cuéntanos lo que tu negocio necesita y empieza a generar más con espacios de calidad
                para tu producto.
              </p>
            </div>
            <Button variant="frio" size="xl" className="w-fit px-10 font-extrabold" onClick={scrollToForm}>
              Solicitar cotización
            </Button>
          </div>
        </section>

        <section className="bg-brand-panel py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[360px_1fr]">
            <div className="relative mx-auto h-[430px] w-[250px]">
              <div className="absolute left-4 top-4 h-[390px] w-[160px] rotate-[-7deg] rounded-[45%_55%_48%_52%] bg-brand-deep" />
              <div className="absolute left-16 top-0 h-[410px] w-[150px] rotate-[9deg] rounded-[46%_54%_42%_58%] bg-brand-steel" />
              <div className="absolute left-26 top-24 h-[230px] w-[90px] rotate-[-14deg] rounded-[44%_55%_50%_48%] bg-brand-steel" />
              {mapPoints.map((point) => (
                <Snowflake
                  key={point}
                  className={`absolute ${point} size-9 text-brand-deep drop-shadow-sm`}
                  aria-hidden="true"
                />
              ))}
            </div>
            <div className="text-center md:text-left">
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-black leading-[0.9] text-brand-navy sm:text-5xl md:mx-0">
                Contamos con servicio en todo el norte del país
              </h2>
              <p className="mx-auto mt-14 max-w-md text-base font-medium leading-loose text-card-foreground md:mx-0 md:text-center">
                Apoyamos a tu empresa a preservar la excelencia de tus productos y reducir su consumo
                de energía con equipo y mantenimiento de la mejor calidad.
              </p>
            </div>
          </div>
        </section>

        <section className="grid bg-brand-navy text-primary-foreground lg:grid-cols-2">
          <div className="flex min-h-[350px] flex-col justify-center px-5 py-14 sm:px-10 lg:px-16">
            <h2 className="max-w-xl text-balance text-4xl font-black leading-[0.92] sm:text-5xl">
              ¿Listo para llevar tu operación al siguiente nivel?
            </h2>
            <p className="mt-8 max-w-lg text-base font-medium leading-relaxed text-primary-foreground/95">
              Cuéntanos tu proyecto y te cotizaremos con datos reales y confiables el cuarto frío que tu
              empresa necesita.
            </p>
            <div className="mt-12 flex flex-col gap-5 sm:flex-row">
              <Button asChild variant="whatsapp" size="xl" className="px-10 font-extrabold">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Cotiza por Whatsapp
                </a>
              </Button>
              <Button variant="frio" size="xl" className="px-10 font-extrabold" onClick={scrollToForm}>
                Solicitar cotización
              </Button>
            </div>
          </div>
          <div className="grid min-h-[350px] grid-cols-2">
            <img
              src={roomDoors}
              alt="Cuarto frío con puertas dobles instalado"
              width={928}
              height={720}
              loading="lazy"
              className="h-full min-h-[350px] w-full object-cover"
            />
            <img
              src={roomUnits}
              alt="Interior de cuarto frío con unidades de refrigeración"
              width={928}
              height={720}
              loading="lazy"
              className="h-full min-h-[350px] w-full object-cover"
            />
          </div>
        </section>
      </main>

      <footer className="bg-brand-deep py-7 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm font-medium sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>Copyright © {currentYear} Frioequipos</p>
          <div className="flex items-center gap-4">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Frioequipos">
              <Phone className="size-6 text-accent" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn Frioequipos">
              <Linkedin className="size-6 text-primary-foreground" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
