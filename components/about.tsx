export function About() {
  return (
    <section id="nosotros" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl mb-4">Quienes Somos</h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Fruto Aromea nace en el corazón de Antioquia, como un tributo a la tierra que nos vio nacer. Somos
              más que café e infusiones; somos el puente entre la labor del campesino y el ritual diario de miles de
              hogares que buscan conectar con lo esencial.
            </p>
          </div>
        </div>

        <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          <img src="/coffee-farmer-hands-antioquia.jpg" alt="Manos campesinas" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}
