import { motion } from "framer-motion";
import { Button } from "../../../components/ui/Button";
import mimiLogo from "../../../assets/mimilogo.png";

export default function Hero() {
  return (
    <section className="relative bg-gray-50 overflow-hidden min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-invitaciones.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col items-center space-y-6">
        {/* LOGO grande */}
        <motion.img
          src={mimiLogo}
          alt="Logo MIMI Papelería"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-56 md:w-72 drop-shadow-sm"
        />

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl md:text-5xl text-gray-900"
        >
          Papelería de bodas hecha con amor
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 text-lg md:text-xl max-w-2xl"
        >
          Diseñamos invitaciones, sobres y detalles únicos para que tu boda sea inolvidable.
        </motion.p>

        {/* Botón */}
        <motion.div>
          <Button
            size="lg"
            className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-8 py-4 text-lg transition"
          >
            Ver invitaciones
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
