import React from "react";
import { Button } from "../../../components/ui/Button";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-black/40"
        style={{
          backgroundImage: "url('/images/cta-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center text-white py-32 px-6 flex flex-col items-center justify-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-6 max-w-3xl">
          Crea invitaciones que cuenten tu historia
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl">
          Diseñamos cada detalle para reflejar vuestra esencia.  
          Personalización, materiales premium y amor en cada pieza.
        </p>
        <Button
          variant="primary"
          size="lg"
          className="rounded-none bg-brand-olive  text-white border-none"
        >
          Empieza tu diseño
        </Button>
      </div>

      {/* Degradado inferior suave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
    </section>
  );
}
