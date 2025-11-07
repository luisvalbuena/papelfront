import React from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { complementosData } from "./complementosData";

export default function ComplementosPage() {
  return (
    <>
      <header className="bg-brand-sand text-center py-20">
        <h1 className="font-serif text-5xl text-ink mb-4">Complementos</h1>
        <p className="text-lg text-ink-light max-w-2xl mx-auto">
          Cera lacre, cintas, forros y otros detalles que harán que tus
          invitaciones sean únicas y especiales.
        </p>
      </header>

      <ProductGrid
        data={complementosData}
        category="complementos"
        title="Complementos artesanales"
        subtitle="Detalles que transforman tus invitaciones en piezas únicas."
      />    
      </>
  );
}
