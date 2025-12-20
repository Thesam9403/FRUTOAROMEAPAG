"use client"

import { ShoppingCart, X } from "lucide-react"
import { useCart } from "./cart-provider"
import { Button } from "./ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

export function Navbar() {
  const {
    items,
    total,
    removeItem,
    updateQuantity,
    clearCart,
    isCartOpen,
    setIsCartOpen,
  } = useCart()

  const finishOrder = () => {
    const phone = "573117956313"
    const text = items
      .map(
        (i) =>
          `- ${i.name} (${i.variation || "Estándar"}) x${i.quantity}: $${(
            i.price * i.quantity
          ).toLocaleString()}`
      )
      .join("%0A")

    const message = `Hola Fruto Aromea, quiero realizar un pedido:%0A%0A${text}%0A%0ATotal: $${total.toLocaleString()}`
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* LOGO */}
        <h1 className="text-2xl font-serif font-bold text-primary">
          Fruto Aromea
        </h1>

        {/* CARRITO */}
        <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
          <SheetTrigger asChild>
            <Button
              className="relative w-11 h-11 rounded-full
                         bg-primary text-white
                         hover:bg-primary/90
                         transition-all duration-300
                         hover:scale-105"
            >
              <ShoppingCart size={22} />

              {items.length > 0 && (
                <span
                  className="absolute -top-1 -right-1
                             bg-red-500 text-white
                             text-xs font-bold
                             w-5 h-5 rounded-full
                             flex items-center justify-center"
                >
                  {items.length}
                </span>
              )}
            </Button>
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle className="font-serif">
                Tu Carrito de Conexión
              </SheetTitle>
            </SheetHeader>

            <div className="mt-8 space-y-4">
              {items.length === 0 ? (
                <p className="text-muted-foreground text-center italic">
                  Aún no hay rituales en tu carrito.
                </p>
              ) : (
                <>
                  {items.map((item) => (
                    <div
                      key={`${item.id}-${item.variation}`}
                      className="border-b pb-4 space-y-2"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          {item.variation && (
                            <p className="text-xs text-muted-foreground">
                              {item.variation}
                            </p>
                          )}
                        </div>

                        <button
                          onClick={() =>
                            removeItem(item.id, item.variation)
                          }
                          className="text-muted-foreground hover:text-red-500"
                        >
                          <X size={16} />
                        </button>
                      </div>

                      {/* CONTROLES + / - */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.variation,
                              item.quantity - 1
                            )
                          }
                          className="w-7 h-7 rounded-full border
                                     hover:bg-muted transition"
                        >
                          −
                        </button>

                        <span className="font-semibold w-6 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.variation,
                              item.quantity + 1
                            )
                          }
                          className="w-7 h-7 rounded-full border
                                     hover:bg-muted transition"
                        >
                          +
                        </button>
                      </div>

                      <p className="text-sm font-medium">
                        ${(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  ))}

                  {/* TOTAL + ACCIONES */}
                  <div className="pt-4 space-y-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${total.toLocaleString()}</span>
                    </div>

                    {/* 🧹 VACIAR CARRITO */}
                    <button
                      onClick={clearCart}
                      className="w-full border border-red-500 text-red-500
                                 rounded-md py-2 text-sm font-semibold
                                 hover:bg-red-500 hover:text-white
                                 transition"
                    >
                      Vaciar carrito
                    </button>

                    {/* 📲 FINALIZAR */}
                    <Button
                      className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
                      onClick={finishOrder}
                    >
                      Finalizar por WhatsApp
                    </Button>
                  </div>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
