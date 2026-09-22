import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Phone } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import heroImage from "@/assets/cold-storage-warehouse.png";
import brandLogo from "@/assets/frioequipos-logo.png";
import coverageMap from "@/assets/coverage-map.png";
import roomInstallation from "@/assets/cold-room-installation.png";
import uatLogo from "@/assets/uat-logo.png";
import teneriasLogo from "@/assets/tenerias-logo.png";
import casonaLogo from "@/assets/casona-santa-lucia-logo.png";
import arenaLogo from "@/assets/arena-monterrey-logo.png";
import bonafontLogo from "@/assets/bonafont-logo.png";
import safiLogo from "@/assets/safi-logo.png";
import diagnosticoIcon from "@/assets/diagnostico-icon.png";
import cotizacionIcon from "@/assets/cotizacion-icon.png";
import construccionIcon from "@/assets/construccion-icon.png";
import entregaIcon from "@/assets/entrega-icon.png";

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

const clients = [
  { name: "SAFI Royal Luxury Hotels", src: safiLogo, size: "max-w-[150px]" },
  { name: "Bonafont", src: bonafontLogo, size: "max-w-[130px]" },
  { name: "Arena Monterrey", src: arenaLogo, size: "max-w-[170px]" },
  { name: "La Casona de Santa Lucía", src: casonaLogo, size: "max-w-[260px]" },
  { name: "Tenerías", src: teneriasLogo, size: "max-w-[150px]" },
  { name: "Universidad Autónoma de Tamaulipas", src: uatLogo, size: "max-w-[175px]" },
];

const steps = [
  {
    number: "1",
    title: "Diagnóstico",
    text: "Visitamos tu negocio, medimos y entendemos el volumen de tu producto y operación actual.",
    icon: diagnosticoIcon,
  },
  {
    number: "2",
    title: "Cotización",
    text: "Te entregamos una propuesta técnica con capacidad, materiales y costo de inversión.",
    icon: cotizacionIcon,
  },
  {
    number: "3",
    title: "Construcción",
    text: "Instalamos y construimos con las medidas y tiempos acordados en un inicio.",
    icon: construccionIcon,
  },
  {
    number: "4",
    title: "Entrega",
    text: "Dejamos el cuarto operando y capacitamos a tu equipo para usarlo desde el primer día.",
    icon: entregaIcon,
  },
];

const proofItems = [
  ["+50 años", "de experiencia en refrigeración industrial."],
  ["Grandes marcas confían en nosotros", "Universidades, hoteles, restaurantes y empresas ya operan con Frioequipos."],
  ["Diseño, obra y mantenimiento", "un mismo equipo encargándose de tu proyecto."],
  ["Estándares de calidad", "Instalaciones para la Certificación TIF o el Distintivo H."],
];

function Index() {
  const [status, setStatus] = useState("");

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const scrollToForm = () => {
    document.getElementById("cotizacion")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "013a4b67-8c00-4509-aeeb-8cd724e2b7df");
    formData.append("subject", "Solicitud de cotización desde frioequipos.com");

    setStatus("Enviando tu solicitud...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("¡Gracias! Tu solicitud fue enviada, te contactaremos pronto.");
        form.reset();
      } else {
        setStatus("Hubo un problema al enviar. Intenta de nuevo o contáctanos por WhatsApp.");
      }
    } catch (error) {
      setStatus("Hubo un problema al enviar. Intenta de nuevo o contáctanos por WhatsApp.");
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto grid min-h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:flex sm:justify-between sm:px-8 lg:px-10">
          <a href="#inicio" className="flex min-w-0 items-center gap-2" aria-label="Frioequipos inicio">
            <img src={brandLogo} alt="Frioequipos Cuartos Fríos" className="h-auto w-44 sm:w-52" />
          </a>

          <div className="flex shrink-0 items-center gap-3 sm:gap-8">
            <a
              href="tel:+528125947679"
              aria-label="Llamar a Frioequipos al 8125947679"
              className="flex items-center gap-2 text-sm font-extrabold text-brand-deep"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-brand-deep text-primary-foreground">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <span className="hidden min-[430px]:inline">8125947679</span>
            </a>
            <Button asChild variant="whatsapp" size="lg" className="px-3 text-xs sm:px-6 sm:text-sm">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <span className="hidden min-[430px]:inline">Cotización por Whatsapp</span>
                <span className="min-[430px]:hidden">Whatsapp</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main id="inicio">
        <section className="relative isolate min-h-[640px] overflow-hidden bg-brand-navy md:min-h-[500px] lg:min-h-[540px]">
          <img
            src={heroImage}
            alt="Almacén industrial refrigerado con puerta de cuarto frío"
            width={1600}
            height={900}
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-brand-navy/75" />
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-[minmax(0,1fr)_minmax(320px,40%)] md:items-center md:py-12 lg:gap-14 lg:px-10 lg:py-16">
            <div className="flex max-w-2xl flex-col justify-center text-primary-foreground">
              <p className="mb-4 max-w-md text-base font-medium leading-tight text-primary-foreground/90">
                Construcción de cuartos fríos para negocios en Monterrey y el norte del país.
              </p>
              <h1 className="max-w-3xl text-balance font-display text-5xl font-black leading-[0.94] md:text-[2.65rem] lg:text-6xl xl:text-7xl">
                Construimos el cuarto frío que tu producto necesita.
              </h1>
              <p className="mt-4 max-w-xl text-lg font-medium leading-tight text-primary-foreground/95">
                Diseñamos y construimos cuartos de conservación y congelación a la medida de tu
                espacio, tu volumen de producto y operación diaria.
              </p>
              <div className="mt-9 flex flex-col gap-5 lg:flex-row lg:items-end">
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
              className="w-full self-center rounded-2xl bg-card p-6 shadow-cold-lg lg:p-8"
            >
              <h2 className="text-3xl font-black leading-tight text-brand-navy">
                Solicita tu cotización
              </h2>
              <p className="mt-2 text-base font-medium text-card-foreground">
                ¿Listo para transformar el futuro de tu negocio?
              </p>
              <div className="mt-7 space-y-3 lg:mt-9 lg:space-y-4">
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

        <section className="bg-brand-deep py-5 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <p className="text-[11px] font-semibold leading-none text-primary-foreground">
              Negocios que ya operan con cuartos fríos construidos por nosotros.
            </p>
            <div className="mt-4 grid grid-cols-2 items-center gap-x-6 gap-y-5 sm:grid-cols-3 md:grid-cols-6 md:gap-x-5 lg:gap-x-7">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center justify-center"
                >
                  <img
                    src={client.src}
                    alt={client.name}
                    loading="lazy"
                    className={`h-auto w-full object-contain ${client.size}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-panel py-12 sm:py-14">
          <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
            <div className="mb-7">
              <h2 className="text-balance text-[1.7rem] font-black leading-none text-brand-navy sm:text-[2rem]">
                Así se construye tu cuarto frío
              </h2>
              <p className="mt-2 text-sm font-medium leading-none text-brand-navy sm:text-base">
                Cuatro simples pasos para transformar tu negocio a uno más fuerte y confiable
              </p>
            </div>
            <div className="grid border border-brand-line bg-card sm:grid-cols-2 md:grid-cols-4">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="flex min-h-[288px] flex-col border-b border-brand-line px-5 py-6 last:border-b-0 sm:min-h-[248px] sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(-n+2)]:border-b md:min-h-[288px] md:border-b-0 md:border-r md:[&:nth-child(odd)]:border-r md:[&:nth-child(-n+2)]:border-b-0 md:last:border-r-0"
                >
                  <p className="text-base font-black leading-none text-brand-deep">{step.number}</p>
                  <h3 className="mt-2 text-base font-extrabold leading-none text-brand-navy">{step.title}</h3>
                  <p className="mt-5 max-w-[14rem] text-xs font-medium leading-[0.95] text-card-foreground sm:min-h-[3.5rem]">
                    {step.text}
                  </p>
                  <img
                    src={step.icon}
                    alt=""
                    className="mt-auto h-[88px] w-[88px] self-center object-contain"
                    aria-hidden="true"
                  />
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
            <img
              src={coverageMap}
              alt="Cobertura de Frioequipos en el norte de México"
              width={285}
              height={482}
              loading="lazy"
              className="mx-auto h-auto w-full max-w-[285px] object-contain"
            />
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
              src={heroImage}
              alt="Cuarto frío con puertas dobles instalado"
              width={928}
              height={720}
              loading="lazy"
              className="h-full min-h-[350px] w-full object-cover"
            />
            <img
              src={roomInstallation}
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
