"use client"
import { ShoppingCart, X } from "lucide-react"
import { useCart } from "./cart-provider"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"

export function Navbar() {
  const { items, total, removeItem } = useCart()

  const finishOrder = () => {
    const phone = "+573117956313"
    const text = items
      .map(
        (i) => `- ${i.name} (${i.variation || "Estándar"}) x${i.quantity}: $${(i.price * i.quantity).toLocaleString()}`,
      )
      .join("%0A")
    const message = `Hola Fruto Aromea, quiero realizar un pedido:%0A%0A${text}%0A%0ATotal: $${total.toLocaleString()}`
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-serif font-bold text-primary">Fruto Aromea</h1>

        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="relative">
                <ShoppingCart className="w-6 h-6" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-serif">Tu Carrito de Conexión</SheetTitle>
              </SheetHeader>
              <div className="mt-8 space-y-4">
                {items.length === 0 ? (
                  <p className="text-muted-foreground text-center italic">Aún no hay rituales en tu carrito.</p>
                ) : (
                  <>
                    {items.map((item) => (
                      <div
                        key={`${item.id}-${item.variation}`}
                        className="flex justify-between items-center border-b pb-2"
                      >
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.variation}</p>
                          <p className="text-sm">
                            x{item.quantity} - ${(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => removeItem(item.id, item.variation)}>
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                    <div className="pt-4 space-y-4">
                      <div className="flex justify-between font-bold">
                        <span>Total:</span>
                        <span>${total.toLocaleString()}</span>
                      </div>
                      <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white" onClick={finishOrder}>
                        Finalizar por WhatsApp
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
