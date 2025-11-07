import React from "react";
import { invitationsData } from "./invitationsData";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

export default function InvitationsPage() {
  return (
    <>
      <header className="bg-gray-100 text-center py-20">
        <h1 className="font-serif text-5xl text-gray-900 mb-4">
          Invitaciones de boda
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Elige entre nuestras colecciones artesanales, creadas con materiales de
          alta calidad y un diseño pensado para reflejar vuestro estilo.
        </p>
      </header>

      <ProductGrid
        data={invitationsData}
        category="invitaciones"
        title="Colección de invitaciones"
        subtitle="Elige entre nuestras colecciones de invitaciones artesanales y personalizadas."
      />
    </>
  );
}
