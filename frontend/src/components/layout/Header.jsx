import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import logo from "../../assets/mimiicon.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const links = [
    { label: "Invitaciones", href: "/invitaciones" },
    { label: "Sobres", href: "/sobres" },
    { label: "Papelería", href: "/papeleria" },
    { label: "Complementos", href: "/complementos" },
    { label: "Regalos", href: "/regalos" },
    { label: "Comuniones", href: "/comuniones" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Mimi Papelerías"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span
            className="text-xl font-normal"
            style={{ fontFamily: `'Great Vibes', 'Allura', 'Lobster Two', cursive`, color: '#D9A3A9' }}
          >
            Mimi Papelerías
          </span>
        </Link>

        {/* Menú desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-ink-light hover:text-brand-olive transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Iconos */}
        <div className="flex items-center gap-4">
          {/* Carrito */}
          <Link
            to="/cart"
            aria-label="Carrito"
            className="relative text-ink hover:text-brand-olive transition-colors flex items-center gap-1"
          >
            <span className="text-sm font-medium">Mi carrito</span>
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-brand-olive text-white text-xs px-1 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Botón menú móvil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-ink md:hidden transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-brand-sand shadow-inner"
          >
            <ul className="flex flex-col px-6 py-4 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="block text-ink-light hover:text-brand-olive py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3 border-t border-brand-sand">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Ver colecciones
                </Button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

