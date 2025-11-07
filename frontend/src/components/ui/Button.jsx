import clsx from "clsx";

/**
 * Componente de botón reutilizable para Mimi Papelerías
 * Soporta variantes (estilos) y tamaños.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  as: Component = "button",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-600 rounded-full disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-pink-600 text-white hover:bg-pink-700 focus-visible:ring-offset-2",
    secondary:
      "bg-yellow-500 text-white hover:bg-yellow-600 focus-visible:ring-offset-2",
    outline:
      "border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white",
    ghost:
      "text-pink-600 hover:text-pink-700",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <Component
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
