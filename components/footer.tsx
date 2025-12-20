import { Instagram, Facebook, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Marca */}
        <div className="space-y-4">
          <h2 className="text-2xl font-serif">Fruto Aromea</h2>
          <p className="text-sm opacity-80 font-light">
            Rituales de conexión desde Antioquia. <br />
            Llevando lo natural a cada rincón.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-serif text-lg mb-4">Contacto</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>📍 Medellín, Antioquia, Colombia</li>

            <li>
              📱{" "}
              <a
                href="https://wa.me/573117956313"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                +57 311 795 6313
              </a>
            </li>

            <li>
              ✉️{" "}
              <a
                href="mailto:contacto@frutoaromea.com"
                className="hover:text-accent transition-colors"
              >
                contacto@frutoaromea.com
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="font-serif text-lg mb-4">Síguenos</h3>

          <div className="flex gap-6 items-center">
            {/* Instagram */}
            <a
              href="https://instagram.com/frutoaromea/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Fruto Aromea"
              className="text-pink-500 hover:text-pink-400 transition-all duration-300 ease-out hover:scale-110"
            >
              <Instagram size={24} />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/tu_pagina"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Fruto Aromea"
              className="text-blue-500 hover:text-blue-400 transition-all duration-300 ease-out hover:scale-110"
            >
              <Facebook size={24} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/573117956313?text=Hola%20quiero%20más%20información%20🌿"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Fruto Aromea"
              className="text-green-500 hover:text-green-400 transition-all duration-300 ease-out hover:scale-110"
            >
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-xs opacity-60">
        © 2025 Fruto Aromea. Todos los derechos reservados. Diseñado para conectar.
      </div>
    </footer>
  )
}
