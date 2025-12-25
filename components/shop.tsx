"use client"

import { useCart } from "@/components/cart-provider"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { useState } from "react"
import { ProductImage } from "@/components/product-image"

const PRODUCTS = {
  cafe: [
    { id: "c1", 
      name: "Café Fruto Aromea 500g tostion media",
      price: 56000 ,
      benefit: "Granos de café 100% colombiano, cultivados en Salgar, Antioquia, con notas de chocolate y frutos amarillos.", 
      variations: ["En grano", "Molido"],
      images: ["/products/coffee/cafe-500g-1.jpg", 
        "/products/coffee/cafe-500g-2.jpg"] },
    { id: "c2", 
      name: "Café Fruto Aromea 250g tostion media",
      benefit: "Perfecto para disfrutar de una taza fresca y aromática en cualquier momento del día.", 
      price: 31000, 
      variations: ["Molido"],
      images: ["/products/coffee/cafe-250g-1.jpg", "/products/coffee/cafe-250g-2.jpg"] },
      { id: "c3", 
      name: "Aromea Café 250g tostion media",
      benefit: "Perfecto para disfrutar de una taza fresca y aromática en cualquier momento del día.", 
      price: 31000, 
      variations: ["Molido"],
      images: ["/products/coffee/arome-cafe-250g-1.jpg"] },
  ],
  infusiones: [
    {
      id: "i1",
      name: "Infusión Frutos Rojos",
      price: 19500,
      benefit: "Antioxidante natural que ayuda a fortalecer el sistema inmunológico.",
      variations: ["Con Stevia", "Con Canela", "Con flor de jamaica"],
      images: ["/products/infusions/frutos-rojos-1.jpg", "/products/infusions/frutos-rojos-2.jpg"],
    },
    {
      id: "i2",
      name: "Infusión Frutos Amarillos",
      price: 19500,
      benefit: "Fuente natural de vitamina C que contribuye al bienestar general.",
      variations: ["Con Canela", "Con limoncillo"],
      images: ["/products/infusions/frutos-amarillos-1.jpg", "/products/infusions/frutos-amarillos-2.jpg"],
    },
  ],
  accesorios: [

    { id: "a1", name: "Prensa Francesa 350ml (Plástica)", 
      price: 23000,
      benefit: "Ideal para preparar una taza individual de café o infusión, perfecta para tus momentos de conexión.",
      images: ["/products/accessories/prensa-350-1.jpg", "/products/accessories/prensa-350-2.jpg"] }, 
    { id: "a2", 
      name: "Prensa Francesa 600ml (Plástica)"
      , price: 31000, 
      benefit: "Perfecta para preparar café para compartir en tus momentos de conexión.",
      images: ["/products/accessories/prensa-600-1.jpg", 
        "/products/accessories/prensa-600-2.jpg", 
        "/products/accessories/prensa-600-3.jpg"] },
  ],
}

export function Shop() {
  const { addItem } = useCart()
  const [selectedVars, setSelectedVars] = useState<Record<string, string>>({})

  return (
    <section id="tienda" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-center mb-16">Nuestros Productos</h2>

        <div className="space-y-20">
          <div>
            <h3 className="text-2xl mb-8 border-l-4 border-primary pl-4">Café de Origen (Salgar, Antioquia)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS.cafe.map((p) => (
                <ProductCard key={p.id} product={p} onAdd={addItem} />
              ))}
            </div>
            <p className="mt-6 text-sm italic text-muted-foreground">
              Variedad: Colombia y Caturra | Notas: Chocolate, Frutos Amarillos y Panela.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-8 border-l-4 border-primary pl-4">Infusiones Naturales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS.infusiones.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onAdd={addItem}
                  selectedVar={selectedVars[p.id]}
                  onVarChange={(v) => setSelectedVars({ ...selectedVars, [p.id]: v })}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl mb-8 border-l-4 border-primary pl-4">Accesorios para tu Ritual</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRODUCTS.accesorios.map((p) => (
                <ProductCard key={p.id} product={p} onAdd={addItem} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, onAdd, selectedVar, onVarChange }: any) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-background">
      <div className="aspect-square overflow-hidden">
  {product.images ? (
    <ProductImage images={product.images} name={product.name} />
  ) : (
    <img
      src={product.img || "/placeholder.svg"}
      alt={product.name}
      className="w-full h-full object-cover
                 transition-all duration-500
                 hover:scale-105"
    />
  )}
</div>

      <CardHeader>
        <CardTitle className="text-xl font-medium line-clamp-2 h-14">
  {product.name}
</CardTitle>
<p className="text-sm text-muted-foreground mt-1 line-clamp-2 min-h-[40px]">
  {product.benefit}
</p>
        <p className="text-primary font-bold text-lg">${product.price.toLocaleString()}</p>
      </CardHeader>
      <CardContent>
        {product.variations && (
          <Select onValueChange={onVarChange} defaultValue={product.variations[0]}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona variación" />
            </SelectTrigger>
            <SelectContent>
              {product.variations.map((v: string) => (
                <SelectItem key={v} value={v}>
                  {v}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </CardContent>
      <CardFooter>
        <Button
  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold
             transition-all duration-300 ease-out
             hover:scale-[1.03] active:scale-[0.97]
             shadow-md hover:shadow-lg"
  onClick={() =>
    onAdd({
      ...product,
      quantity: 1,
      variation: selectedVar || product.variations?.[0],
    })
  }
>
  🛒 Agregar a mi ritual
</Button>

      </CardFooter>
    </Card>
  )
}
