import React from "react";
import { Button } from "../../../components/ui/Button";

export default function HighlightSection() {
  return (
    <section className="bg-brand-sand text-center py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-ink mb-6">
          Papelería de bodas
        </h2>

        <p className="text-lg md:text-xl text-ink-light mb-10">
          Personalización a medida, sobres y detalles <br />
          <span className="font-semibold text-brand-olive">
            TODO INCLUIDO
          </span>
        </p>

        <Button
          variant="outline"
          size="md"
          className="border-brand-olive text-brand-olive hover:bg-brand-olive hover:text-white transition"
        >
          Ver colecciones
        </Button>
      </div>
    </section>
  );
}
