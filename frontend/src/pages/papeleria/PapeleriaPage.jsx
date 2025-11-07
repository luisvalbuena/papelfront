import React from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { papeleriaData } from "./papeleriaData";

export default function PapeleriaPage() {
  return (
    <>
      <header className="bg-gray-100 text-center py-20">
        <h1 className="font-serif text-5xl text-gray-900 mb-4">Papelería</h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Menús, etiquetas, tarjetas, números de mesa y otros detalles para
          acompañar tus invitaciones con coherencia y estilo.
        </p>
      </header>

      <ProductGrid
        data={papeleriaData}
        category="papeleria"
        title="Papelería de boda"
        subtitle="Completa tu conjunto con papelería coordinada: menús, tarjetas y más."
      />
    </>
  );
}
