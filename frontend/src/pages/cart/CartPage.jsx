import { useCart } from "../../context/CartContext";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const euro = (n) => `€${(Number(n) || 0).toFixed(2)}`;

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();
  const navigate = useNavigate();

  return (
    <section className="max-w-4xl mx-auto py-24 px-6">
      <h1 className="font-serif text-3xl mb-8 text-gray-900">Tu carrito</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío</p>
      ) : (
        <div className="space-y-6">
          {/* --- Productos del carrito --- */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-gray-300 pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover bg-gray-100"
                />
                <div>
                  <h3 className="font-serif text-lg text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Cantidad: {item.quantity}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="border px-2 text-gray-900 hover:text-pink-600"
                >
                  −
                </button>

                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="border px-2 text-gray-900 hover:text-pink-600"
                >
                  +
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-pink-600 underline text-sm hover:text-pink-700"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          {/* --- Total y botones --- */}
          <div className="text-right mt-8 space-y-4">
            <p className="text-lg font-semibold text-gray-900">
              Total: {euro(total)}
            </p>

            <div className="flex justify-end gap-4">
              {/* Botón volver a comprar */}
              <Button
                variant="outline"
                className="rounded-none border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition"
                onClick={() => navigate("/")}
              >
                Seguir comprando
              </Button>

              {/* Botón ir a pagar */}
              <Button
                variant="primary"
                className="rounded-none"
                onClick={() => navigate("/bill")}
              >
                Ir a pagar
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
