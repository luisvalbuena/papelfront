import React from "react";
import { Button } from "../../../components/ui/Button";

export default function HighlightSection() {
  return (
    <section className="bg-gray-100 text-center py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
          Papelería de bodas
        </h2>

        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Personalización a medida, sobres y detalles <br />
          <span className="font-semibold text-pink-600">
            TODO INCLUIDO
          </span>
        </p>

        <Button
          variant="outline"
          size="md"
          className="border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition"
        >
          Ver colecciones
        </Button>
      </div>
    </section>
  );
}
