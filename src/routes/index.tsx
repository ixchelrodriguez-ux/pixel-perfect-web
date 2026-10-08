import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import heroImage from "@/assets/cold-storage-warehouse.png";
import brandLogo from "@/assets/frioequipos-logo.png";
import uatLogo from "@/assets/uat-logo.png";
import teneriasLogo from "@/assets/tenerias-logo.png";
import casonaLogo from "@/assets/casona-santa-lucia-logo.png";
import boruLogo from "@/assets/boru-logo.jpg";
import bonafontLogo from "@/assets/bonafont-logo.png";
import safiLogo from "@/assets/safi-logo.png";
import diagnosticoIcon from "@/assets/diagnostico-icon.png";
import cotizacionIcon from "@/assets/cotizacion-icon.png";
import construccionIcon from "@/assets/construccion-icon.png";
import entregaIcon from "@/assets/entrega-icon.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const trackConversion = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-18445447810",
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={brandLogo} alt="Frioequipos Logo" className="h-12 w-auto" />
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/528181126887?text=Hola,%20busco%20cotización%20para%20un%20cuarto%20frío"
              target="_blank"
              rel="noreferrer"
              onClick={trackConversion}
            >
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow">
                WhatsApp Directo
              </Button>
            </a>
          </div>
        </div>
      </header>

      <section className="relative bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={heroImage} alt="Cold Storage Warehouse" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-sm font-medium mb-4">
              Líderes en Refrigeración Industrial en Monterrey
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Diseño e Instalación de <span className="text-sky-400">Cuartos Fríos</span> a la Medida
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              Garantizamos la máxima eficiencia energética y conservación para tu negocio. Proyectos industriales y comerciales en todo Nuevo León.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#cotizar">
                <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white font-bold w-full sm:w-auto">
                  Solicitar Cotización Gratuita
                </Button>
              </a>
              <a
                href="https://wa.me/528181126887?text=Hola,%20me%20interesa%20una%20cotización"
                target="_blank"
                rel="noreferrer"
                onClick={trackConversion}
              >
                <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800 w-full sm:w-auto">
                  Contactar por WhatsApp
                </Button>
              </a>
            </div>
          </div>

          <div id="cotizar" className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-100">
            <h3 className="text-2xl font-bold mb-2">Cotiza tu Proyecto Hoy</h3>
            <p className="text-slate-600 text-sm mb-6">Recibe respuesta inmediata de nuestros ingenieros especialistas.</p>

            <form onSubmit={(e) => { e.preventDefault(); trackConversion(); alert("Gracias por tu mensaje."); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                <Input required placeholder="Ej. Juan Pérez" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Empresa / Negocio</label>
                <Input placeholder="Ej. Comercializadora Monterrey" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                  <Input required type="tel" placeholder="81 1234 5678" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
                  <Input required type="email" placeholder="correo@empresa.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Detalles de tu Necesidad</label>
                <Textarea rows={3} placeholder="Dimensiones estimadas, temperatura requerida..." />
              </div>
              <Button type="submit" size="lg" className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3">
                Enviar Solicitud de Cotización
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-8">
            Empresas e Instituciones que Confían en Nosotros
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all">
            <img src={uatLogo} alt="UAT" className="h-10 w-auto object-contain" />
            <img src={teneriasLogo} alt="Tenerias" className="h-10 w-auto object-contain" />
            <img src={casonaLogo} alt="Casona Santa Lucia" className="h-10 w-auto object-contain" />
            <img src={boruLogo} alt="Boru" className="h-10 w-auto object-contain" />
            <img src={bonafontLogo} alt="Bonafont" className="h-10 w-auto object-contain" />
            <img src={safiLogo} alt="Safi" className="h-10 w-auto object-contain" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Proceso Llave en Mano</h2>
            <p className="text-slate-600">Nos encargamos de todo el ciclo para garantizar un rendimiento óptimo de tu inversión.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
              <img src={diagnosticoIcon} alt="Diagnóstico" className="h-12 w-12 mx-auto mb-4" />
              <h4 className="font-bold mb-2">1. Diagnóstico</h4>
              <p className="text-sm text-slate-600">Evaluamos tus necesidades operativas y requerimientos térmicos.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
              <img src={cotizacionIcon} alt="Cotización" className="h-12 w-12 mx-auto mb-4" />
              <h4 className="font-bold mb-2">2. Propuesta Tecno-Comercial</h4>
              <p className="text-sm text-slate-600">Diseño a la medida con propuesta clara y sin costos ocultos.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
              <img src={construccionIcon} alt="Instalación" className="h-12 w-12 mx-auto mb-4" />
              <h4 className="font-bold mb-2">3. Instalación</h4>
              <p className="text-sm text-slate-600">Suministro de paneles, equipos e instalación profesional.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
              <img src={entregaIcon} alt="Entrega" className="h-12 w-12 mx-auto mb-4" />
              <h4 className="font-bold mb-2">4. Puesta en Marcha</h4>
              <p className="text-sm text-slate-600">Pruebas de temperatura, entrega de garantías y pólizas de mantenimiento.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={brandLogo} alt="Frioequipos" className="h-8 w-auto brightness-200" />
            <span className="text-sm font-semibold text-slate-300">Frioequipos Monterrey</span>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} Frioequipos. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
