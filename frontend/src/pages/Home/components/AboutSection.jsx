import React from "react";
import { Button } from "../../../components/ui/Button";

export default function AboutSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Imagen lateral izquierda */}
        <div className="w-full h-[480px] bg-black overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:scale-[1.02]">
          <img
            src="/images/about-papeleria.jpg"
            alt="Papelería artesanal de boda"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto lateral derecho */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="font-serif text-4xl md:text-5xl text-ink mb-6">
            Diseñamos papelería con alma
          </h2>
          <p className="text-lg text-ink-light leading-relaxed mb-8">
            En <span className="font-semibold text-brand-olive">Mimi Papelerías</span> 
            creemos que cada detalle cuenta. Creamos invitaciones, sobres y elementos 
            personalizados con materiales de alta calidad, pensados para reflejar 
            la esencia de cada pareja.
          </p>

          <Button
            variant="outline"
            size="md"
            className="w-fit mx-auto md:mx-0 rounded-none border border-brand-olive text-brand-olive hover:bg-brand-olive hover:text-white transition"
          >
            Conócenos
          </Button>
        </div>
      </div>
    </section>
  );
}
