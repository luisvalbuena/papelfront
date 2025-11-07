import React from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { sobresData } from "./sobresData";

export default function SobresPage() {
  return (
    <>
      <header className="bg-brand-sand text-center py-20">
        <h1 className="font-serif text-5xl text-ink mb-4">Sobres</h1>
        <p className="text-lg text-ink-light max-w-2xl mx-auto">
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
