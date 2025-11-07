import { useCart } from "../../context/CartContext";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const euro = (n) => `€${(Number(n) || 0).toFixed(2)}`;

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();
  const navigate = useNavigate();

  return (
    <section className="max-w-4xl mx-auto py-24 px-6">
      <h1 className="font-serif text-3xl mb-8 text-ink">Tu carrito</h1>

      {cart.length === 0 ? (
        <p className="text-ink-light">Tu carrito está vacío</p>
      ) : (
        <div className="space-y-6">
          {/* --- Productos del carrito --- */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-brand-sand pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover bg-brand-sand"
                />
                <div>
                  <h3 className="font-serif text-lg text-ink">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-light">
                    Cantidad: {item.quantity}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="border px-2 text-ink hover:text-brand-olive"
                >
                  −
                </button>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="border px-2 text-ink hover:text-brand-olive"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-brand-olive underline text-sm"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          {/* --- Total y botones --- */}
          <div className="text-right mt-8 space-y-4">
            <p className="text-lg font-semibold text-ink">
              Total: {euro(total)}
            </p>

            <div className="flex justify-end gap-4">
              {/* Botón volver a comprar */}
              <Button
                variant="outline"
                className="rounded-none border-brand-olive text-brand-olive hover:bg-brand-olive hover:text-white transition"
                onClick={() => navigate("/")}
              >
                Seguir comprando
              </Button>

              {/* 🧾 Botón ir a pagar */}
              <Button
                variant="primary"
                className="bg-brand-olive text-white rounded-none hover:bg-brand-olive-dark transition"
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
