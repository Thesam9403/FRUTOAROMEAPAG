export function About() {
  return (
    <section id="nosotros" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl mb-4">Quienes Somos</h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Fruto Aromea nace en el corazón de Salgar, Antioquia, como un tributo a la tierra que nos vio nacer. Somos
              más que café e infusiones; somos el puente entre la labor del campesino y el ritual diario de miles de
              hogares que buscan conectar con lo esencial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-muted/50 p-6 rounded-2xl border border-accent/20">
              <h3 className="text-xl font-serif mb-2">Misión</h3>
              <p className="text-sm text-muted-foreground">
                Ofrecer productos de origen que transformen la rutina diaria en un ritual de bienestar, garantizando
                procesos honestos desde la plantación hasta la taza.
              </p>
            </div>
            <div className="bg-muted/50 p-6 rounded-2xl border border-accent/20">
              <h3 className="text-xl font-serif mb-2">Visión</h3>
              <p className="text-sm text-muted-foreground">
                Para el 2030, ser la marca líder en rituales de conexión natural en Colombia, reconocida por nuestra
                calidad y respeto por la biodiversidad.
              </p>
            </div>
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
