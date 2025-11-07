import React from "react";
import { Heart, PenTool, Package, Globe } from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      id: 1,
      icon: <PenTool className="w-8 h-8 text-brand-olive mb-4" />,
      title: "Diseños únicos",
      text: "Cada invitación se crea desde cero, cuidando el estilo y la historia de cada pareja.",
    },
    {
      id: 2,
      icon: <Heart className="w-8 h-8 text-brand-olive mb-4" />,
      title: "Hecho con amor",
      text: "Nuestros productos se elaboran de forma artesanal, uno a uno, con mimo y dedicación.",
    },
    {
      id: 3,
      icon: <Package className="w-8 h-8 text-brand-olive mb-4" />,
      title: "Envíos seguros",
      text: "Empaquetamos cada pedido con cuidado para que llegue perfecto a cualquier punto de España.",
    },
    {
      id: 4,
      icon: <Globe className="w-8 h-8 text-brand-olive mb-4" />,
      title: "Atención personalizada",
      text: "Te acompañamos durante todo el proceso, adaptándonos a tus necesidades.",
    },
  ];

  return (
    <section className="bg-brand-sand py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-ink mb-4">
          Nuestros valores
        </h2>
        <p className="text-ink-light text-lg">
          Detalles que nos definen y hacen única cada pieza de papelería.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {values.map((value) => (
          <div
            key={value.id}
            className="bg-white py-10 px-6 shadow-[0_3px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:scale-[1.03]"
          >
            {value.icon}
            <h3 className="font-serif text-xl text-ink mb-3">{value.title}</h3>
            <p className="text-sm text-ink-light leading-relaxed">
              {value.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
