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
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        {title && (
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
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
                <div className="w-full h-full flex items-center justify-center text-white">
                  Imagen
                </div>
              )}
            </div>

            {/* Caja de texto */}
            <div className="bg-white text-center py-6 px-4 w-full mt-6 shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="font-serif text-lg text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              <p className="text-sm text-pink-600">
                Desde {item.priceFrom}
              </p>
            </div>

            {/* Botón */}
            <div className="text-center mt-6">
              <Button
                variant="outline"
                size="sm"
                className="rounded-none border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition"
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

