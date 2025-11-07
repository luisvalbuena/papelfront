import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";

export default function ProductGrid({ data, category, title, subtitle }) {
  const navigate = useNavigate();

  if (!Array.isArray(data) || data.length === 0) {
    console.warn(`⚠️ ProductGrid: No hay datos para la categoría "${category}"`);
    return null;
  }

  return (
    <section className="bg-brand-cream py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        {title && <h2 className="font-serif text-4xl md:text-5xl text-ink mb-4">{title}</h2>}
        {subtitle && <p className="text-ink-light text-lg max-w-2xl mx-auto">{subtitle}</p>}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {data.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col items-center transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Imagen */}
            <div className="aspect-square bg-black w-full overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white">Imagen</div>
              )}
            </div>

            {/* Caja de texto */}
            <div className="bg-white text-center py-6 px-4 w-full mt-6 shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="font-serif text-lg text-ink mb-2">{item.title}</h3>
              <p className="text-sm text-ink-light mb-3">{item.description}</p>
              <p className="text-sm text-brand-olive">Desde {item.priceFrom}</p>
            </div>

            {/* Botón con categoría */}
            <div className="text-center mt-6">
              <Button
                variant="outline"
                size="sm"
                className="rounded-none border border-brand-olive text-brand-olive hover:bg-brand-olive hover:text-white transition"
                onClick={() => navigate(`/product/${category}/${item.id}`)}
              >
                Ver detalles
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


