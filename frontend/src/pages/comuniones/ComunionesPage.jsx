import React from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { comunionesData } from "./comunionesData";

export default function ComunionesPage() {
  return (
    <>
      <header className="bg-gray-100 text-center py-20">
        <h1 className="font-serif text-5xl text-gray-900 mb-4">Comuniones</h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Invitaciones, recordatorios y papelería personalizada para celebrar
          la primera comunión con estilo, dulzura y dedicación.
        </p>
      </header>

      <ProductGrid
        data={comunionesData}
        category="comuniones"
        title="Colección de comuniones"
        subtitle="Invitaciones, recordatorios y detalles únicos para celebrar este día tan especial."
      />
    </>
  );
}
