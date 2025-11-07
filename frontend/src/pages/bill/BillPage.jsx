import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

export default function BillPage() {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    codigoPostal: "",
    metodoPago: "tarjeta",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.direccion) {
      alert("Por favor, completa los campos obligatorios.");
      return;
    }

    alert(
      `✅ Pedido realizado correctamente.\n\nGracias por tu compra, ${formData.nombre}!`
    );

    clearCart();
    navigate("/");
  };

  return (
    <section className="bg-brand-cream py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* --- Columna izquierda: Formulario --- */}
        <div>
          <h1 className="font-serif text-3xl text-ink mb-6">
            Finalizar pedido
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Datos personales */}
            <div>
              <h2 className="font-medium text-brand-olive mb-2">
                Datos personales
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre *"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="border border-brand-sand rounded-none p-2 w-full focus:ring-1 focus:ring-brand-olive outline-none"
                />
                <input
                  type="text"
                  name="apellidos"
                  placeholder="Apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                  className="border border-brand-sand rounded-none p-2 w-full focus:ring-1 focus:ring-brand-olive outline-none"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Correo electrónico *"
                value={formData.email}
                onChange={handleChange}
                className="border border-brand-sand rounded-none p-2 w-full mt-4 focus:ring-1 focus:ring-brand-olive outline-none"
              />

              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleChange}
                className="border border-brand-sand rounded-none p-2 w-full mt-4 focus:ring-1 focus:ring-brand-olive outline-none"
              />
            </div>

            {/* Dirección */}
            <div>
              <h2 className="font-medium text-brand-olive mb-2">Dirección</h2>
              <input
                type="text"
                name="direccion"
                placeholder="Dirección completa *"
                value={formData.direccion}
                onChange={handleChange}
                className="border border-brand-sand rounded-none p-2 w-full focus:ring-1 focus:ring-brand-olive outline-none"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <input
                  type="text"
                  name="ciudad"
                  placeholder="Ciudad"
                  value={formData.ciudad}
                  onChange={handleChange}
                  className="border border-brand-sand rounded-none p-2 w-full focus:ring-1 focus:ring-brand-olive outline-none"
                />
                <input
                  type="text"
                  name="codigoPostal"
                  placeholder="Código postal"
                  value={formData.codigoPostal}
                  onChange={handleChange}
                  className="border border-brand-sand rounded-none p-2 w-full focus:ring-1 focus:ring-brand-olive outline-none"
                />
              </div>
            </div>

            {/* Método de pago */}
            <div>
              <h2 className="font-medium text-brand-olive mb-2">
                Método de pago
              </h2>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="metodoPago"
                    value="tarjeta"
                    checked={formData.metodoPago === "tarjeta"}
                    onChange={handleChange}
                  />
                  Tarjeta de crédito / débito
                </label>
                {formData.metodoPago === "tarjeta" && (
                  <div className="mt-2 space-y-3">
                    <input
                      type="text"
                      name="numeroTarjeta"
                      placeholder="Número de tarjeta"
                      className="border border-brand-sand rounded-none p-2 w-full focus:ring-1 focus:ring-brand-olive outline-none"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="caducidad"
                        placeholder="MM/AA"
                        className="border border-brand-sand rounded-none p-2 w-full focus:ring-1 focus:ring-brand-olive outline-none"
                      />
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        className="border border-brand-sand rounded-none p-2 w-full focus:ring-1 focus:ring-brand-olive outline-none"
                      />
                    </div>
                  </div>
                )}
                <label className="flex items-center gap-2 mt-2">
                  <input
                    type="radio"
                    name="metodoPago"
                    value="transferencia"
                    checked={formData.metodoPago === "transferencia"}
                    onChange={handleChange}
                  />
                  Transferencia bancaria
                </label>
              </div>
            </div>

            {/* Botón de envío */}
            <Button
              type="submit"
              variant="primary"
              className="bg-brand-olive text-white rounded-none hover:bg-brand-olive-dark transition w-full sm:w-auto"
            >
              Confirmar pedido
            </Button>
          </form>
        </div>

        {/* --- Columna derecha: Resumen del pedido --- */}
        <div className="bg-white border border-brand-sand p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-ink mb-4">
            Resumen del pedido
          </h2>
          {cart.length === 0 ? (
            <p className="text-ink-light">Tu carrito está vacío</p>
          ) : (
            <ul className="space-y-3 mb-6">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between border-b border-brand-sand pb-2"
                >
                  <span className="text-ink">{item.title}</span>
                  <span className="text-ink-light">
                    x{item.quantity}
                  </span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex justify-between text-lg font-semibold text-ink">
            <span>Total</span>
            <span>€{total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
