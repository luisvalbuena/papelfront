import React from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { regalosData } from "./regalosData";

export default function RegalosPage() {
  return (
    <>
      <header className="bg-brand-sand text-center py-20">
        <h1 className="font-serif text-5xl text-ink mb-4">Regalos</h1>
        <p className="text-lg text-ink-light max-w-2xl mx-auto">
          Descubre nuestros regalos personalizados y detalles únicos para
          agradecer a tus invitados con elegancia y estilo.
        </p>
      </header>
      <ProductGrid
        data={regalosData}
        category="regalos"
        title="Regalos y detalles"
        subtitle="Pequeños obsequios llenos de cariño, diseñados para agradecer con estilo."
      />
    </>
  );
}
