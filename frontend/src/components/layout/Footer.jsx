import React from "react";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-sand text-ink py-16 px-6 mt-24 border-t border-brand-cream">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo y descripción */}
        <div className="text-center md:text-left">
          <h2 className="font-serif text-2xl mb-3">Mimi Papelerías</h2>
          <p className="text-sm text-ink-light leading-relaxed max-w-xs mx-auto md:mx-0">
            Diseñamos papelería artesanal para bodas, invitaciones y momentos únicos,
            cuidando cada detalle con amor.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div className="text-center">
          <h3 className="font-semibold text-ink mb-4">Enlaces</h3>
          <ul className="space-y-2 text-sm text-ink-light">
            <li>
              <a href="/invitaciones" className="hover:text-brand-olive">
                Invitaciones
              </a>
            </li>
            <li>
              <a href="/sobres" className="hover:text-brand-olive">
                Sobres
              </a>
            </li>
            <li>
              <a href="/papeleria" className="hover:text-brand-olive">
                Papelería
              </a>
            </li>
            <li>
              <a href="/contacto" className="hover:text-brand-olive">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="text-center md:text-right">
          <h3 className="font-semibold text-ink mb-4">Síguenos</h3>
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-brand-olive transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-12 pt-6 border-t border-brand-cream text-center text-sm text-ink-light">
        © {new Date().getFullYear()} Mimi Papelerías — Todos los derechos reservados
      </div>
    </footer>
  );
}
