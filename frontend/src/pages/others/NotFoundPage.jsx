import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF9FA] text-center p-8">
      <h1
        className="text-7xl mb-4"
        style={{ fontFamily: `'Great Vibes', 'Allura', 'Lobster Two', cursive`, color: '#D9A3A9' }}
      >
        404
      </h1>

      <p className="text-lg text-ink-light max-w-md mb-8">
        Uy... la página que buscas no existe o ha sido movida.
      </p>

      <Link
        to="/"
        className="px-6 py-3 rounded-xl shadow-md text-white"
        style={{ backgroundColor: '#D9A3A9' }}
      >
        Volver al inicio
      </Link>
    </div>
  );
}
