import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { useCart } from "../../context/CartContext";

// Importa datasets
import { invitationsData } from "../invitations/invitationsData";
import { sobresData } from "../sobres/sobresData";
import { papeleriaData } from "../papeleria/papeleriaData";
import { complementosData } from "../complementos/complementosData";
import { regalosData } from "../regalos/regalosData";
import { comunionesData } from "../comuniones/comunionesData";
import { productData } from "../Home/components/productData";

export default function ProductDetailPage() {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const { cart, addToCart, updateQuantity } = useCart();

  // Scroll al inicio al cargar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Mapa categoría → dataset
  const datasets = {
    invitaciones: invitationsData,
    sobres: sobresData,
    papeleria: papeleriaData,
    complementos: complementosData,
    regalos: regalosData,
    comuniones: comunionesData,
    colecciones: productData,
  };

  const selectedData = datasets[category] || [];
  const product = selectedData.find((p) => Number(p.id) === Number(id));

  // Cantidad actual en carrito
  const cartItem = cart.find((item) => item.id === product?.id);
  const quantity = cartItem?.quantity || 0;

  if (!product) {
    return (
      <section className="bg-gray-50 py-32 text-center">
        <h1 className="font-serif text-3xl text-gray-900 mb-4">
          Producto no encontrado
        </h1>
        <p className="text-gray-600 mb-8">
          El producto que buscas no existe o ha sido retirado.
        </p>
        <Button
          variant="outline"
          className="rounded-none border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white"
          onClick={() => navigate(-1)}
        >
          Volver atrás
        </Button>
      </section>
    );
  }

  // Manejar cambios en el input
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      updateQuantity(product.id, value);
    }
  };

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Imagen */}
        <div className="w-full h-[480px] bg-black shadow-[0_4px_16px_rgba(0,0,0,0.1)] overflow-hidden">
          {product.image ? (
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white">
              Sin imagen
            </div>
          )}
        </div>

        {/* Información */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="uppercase tracking-widest text-xs text-pink-600 mb-2">
            {category}
          </h2>

          <h1 className="font-serif text-4xl text-gray-900 mb-4">
            {product.title}
          </h1>

          <p className="text-gray-600 text-lg mb-6">
            {product.description}
          </p>

          {product.priceFrom && (
            <p className="text-pink-600 text-xl font-semibold mb-8">
              Precio desde {product.priceFrom}
            </p>
          )}

          {/* Bloque de acciones */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">

            {quantity === 0 ? (
              <Button
                variant="primary"
                className="bg-pink-600 text-white rounded-none hover:bg-pink-700 transition"
                onClick={() => addToCart(product)}
              >
                Añadir al carrito
              </Button>
            ) : (
              <div className="flex items-center gap-4 border border-pink-600 px-4 py-2 rounded-none bg-white">
                
                {/* Botón - */}
                <button
                  onClick={() => updateQuantity(product.id, quantity - 1)}
                  className="text-pink-600 text-xl font-semibold hover:text-pink-700 transition"
                >
                  −
                </button>

                {/* Input */}
                <input
                  type="number"
                  min="0"
                  value={quantity}
                  onChange={handleInputChange}
                  className="w-16 text-center border border-gray-300 rounded-none text-gray-900 font-medium 
                             focus:outline-none focus:ring-1 focus:ring-pink-600"
                />

                {/* Botón + */}
                <button
                  onClick={() => updateQuantity(product.id, quantity + 1)}
                  className="text-pink-600 text-xl font-semibold hover:text-pink-700 transition"
                >
                  +
                </button>

                {/* Link al carrito */}
                <Link
                  to="/cart"
                  className="ml-4 text-sm text-pink-600 underline hover:text-pink-700 transition"
                >
                  Ver carrito
                </Link>
              </div>
            )}

            {/* Volver atrás */}
            <Button
              variant="outline"
              className="rounded-none border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition"
              onClick={() => navigate(-1)}
            >
              Volver atrás
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
}
