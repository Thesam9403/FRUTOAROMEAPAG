"use client"

import { Button } from "@/components/ui/button"

export function PromoBanner() {
  return (
    <section className="bg-yellow-600 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-6
                      flex flex-col md:flex-row
                      items-center justify-between gap-4">
        
        <p className="text-center md:text-left font-medium">
          🌿 ¡Compra 2 cafés y recibe 10% de descuento en frutas deshidratadas!
        </p>

        <Button
          className="bg-white text-primary hover:bg-white/90"
          asChild
        >
          <a href="#tienda">
            Ver productos
          </a>
        </Button>
      </div>
    </section>
  )
}
