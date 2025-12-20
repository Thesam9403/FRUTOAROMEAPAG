"use client"

import { useCart } from "./cart-provider"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { useState } from "react"

const PRODUCTS = {
  cafe: [
    { id: "c1", name: "Café Fruto Aromea 500g", price: 56000, img: "/coffee-bag-500g.jpg" },
    { id: "c2", name: "Café Fruto Aromea 250g", price: 31000, img: "/coffee-bag-250g.jpg" },
  ],
  infusiones: [
    {
      id: "i1",
      name: "Infusión Frutos Rojos",
      price: 15000,
      variations: ["Con Stevia", "Con Canela", "Original"],
      img: "/red-fruits-infusion.jpg",
    },
    {
      id: "i2",
      name: "Infusión Frutos Amarillos",
      price: 15000,
      variations: ["Con Canela", "Original"],
      img: "/yellow-fruits-infusion.jpg",
    },
  ],
  accesorios: [
    { id: "a1", name: "Molino Manual", price: 45000, img: "/manual-coffee-grinder.jpg" },
    { id: "a2", name: "Prensa Francesa 350ml (Plástica)", price: 23000, img: "/french-press-350ml.jpg" },
    { id: "a3", name: "Prensa Francesa 600ml (Plástica)", price: 28790, img: "/french-press-600ml.jpg" },
    { id: "a4", name: "Prensa Francesa 600ml (Metálica)", price: 38990, img: "/french-press-metal-600ml.jpg" },
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
        <img
          src={product.img || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-medium">{product.name}</CardTitle>
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
          className="w-full"
          onClick={() => onAdd({ ...product, quantity: 1, variation: selectedVar || product.variations?.[0] })}
        >
          Añadir al Carrito
        </Button>
      </CardFooter>
    </Card>
  )
}
