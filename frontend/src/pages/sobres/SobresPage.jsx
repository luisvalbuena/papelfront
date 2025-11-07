import React from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { sobresData } from "./sobresData";

export default function SobresPage() {
  return (
    <>
      <header className="bg-gray-100 text-center py-20">
        <h1 className="font-serif text-5xl text-gray-900 mb-4">Sobres</h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Nuestros sobres están elaborados con papeles artesanales, pensados para
          complementar tus invitaciones con estilo y elegancia.
        </p>
      </header>

      <ProductGrid
        data={sobresData}
        category="sobres"
        title="Colección de sobres"
        subtitle="Texturas naturales, tonos cálidos y acabados elegantes para tus invitaciones."
      />
    </>
  );
}
