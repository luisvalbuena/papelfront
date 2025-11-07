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
    "inline-flex items-center justify-center font-sans font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-full disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-brand-olive text-white  focus-visible:ring-offset-2",
    secondary:
      "bg-brand-gold text-white  focus-visible:ring-offset-2",
    outline:
      "border border-brand-olive text-brand-olive hover:bg-brand-olive hover:text-white",
    ghost:
      "text-brand-olive  hover:text-brand-olive-dark",
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
