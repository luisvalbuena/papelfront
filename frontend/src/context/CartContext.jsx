// src/context/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

// Parser robusto: "2,50 €" -> 2.50  |  "1.200,75 €" -> 1200.75
const parsePrice = (val) => {
  if (val == null) return 0;
  if (typeof val === "number") return val;
  let s = String(val);
  // quita todo menos dígitos, puntos, comas
  s = s.replace(/[^\d.,]/g, "");
  // si hay ambos, elimina separadores de miles (puntos),
  // y usa la coma como decimal
  if (s.includes(",") && s.includes(".")) {
    s = s.replace(/\./g, "");     // 1.200,50 -> 1200,50
    s = s.replace(",", ".");      // 1200,50 -> 1200.50
  } else {
    // si solo hay comas, úsalas como decimal
    s = s.replace(",", ".");      // 2,50 -> 2.50
  }
  const n = parseFloat(s);
  return isNaN(n) ? 0 : n;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const unitPrice = parsePrice(product.priceFrom ?? product.price ?? 0);

    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, unitPrice, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, quantity: Math.max(0, Number(newQuantity) || 0) } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  // Si algún item no tiene unitPrice (añadido antes del fix), cálculalo al vuelo
  const computedTotal = cart.reduce((acc, i) => {
    const price = typeof i.unitPrice === "number" ? i.unitPrice : parsePrice(i.priceFrom ?? i.price);
    return acc + price * (i.quantity || 0);
  }, 0);

  const total = Number.isFinite(computedTotal) ? computedTotal : 0;

  // Persistencia opcional
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
