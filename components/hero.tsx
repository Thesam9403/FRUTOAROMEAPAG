export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src="/coffee-farm-salgar-antioquia-landscape.jpg"
          alt="Cafetales de Salgar"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl mb-6">Rituales de Conexión</h1>
        <p className="text-lg md:text-xl font-light opacity-90 mb-8 text-pretty">
          Desde las montañas de Antioquia, traemos el alma del campo a tu taza. Café lavado y secado con la
          tradición de nuestra tierra.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#tienda" className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full transition-all">
            Explorar Productos
          </a>
          <a
            href="#nosotros"
            className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-8 py-3 rounded-full transition-all border border-white/30"
          >
            Nuestra Historia
          </a>
        </div>
      </div>
    </section>
  )
}
