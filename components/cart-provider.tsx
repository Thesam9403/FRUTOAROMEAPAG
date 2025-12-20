"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

/* =======================
   TIPOS
======================= */

type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
  variation?: string
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string, variation?: string) => void
  updateQuantity: (
    id: string,
    variation: string | undefined,
    quantity: number
  ) => void
  clearCart: () => void
  total: number
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
}

/* =======================
   CONTEXTO
======================= */

const CartContext = createContext<CartContextType | undefined>(undefined)

/* =======================
   PROVIDER
======================= */

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [showNotification, setShowNotification] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  /* 🔄 CARGAR CARRITO AL INICIAR */
  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      setItems(JSON.parse(storedCart))
    }
  }, [])

  /* 💾 GUARDAR CARRITO CUANDO CAMBIA */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  /* ➕ AGREGAR PRODUCTO */
  const addItem = (newItem: CartItem) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === newItem.id && i.variation === newItem.variation
      )

      if (existing) {
        return prev.map((i) =>
          i.id === newItem.id && i.variation === newItem.variation
            ? { ...i, quantity: i.quantity + newItem.quantity }
            : i
        )
      }

      return [...prev, newItem]
    })

    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 2000)
  }

  /* ➕➖ ACTUALIZAR CANTIDAD */
  const updateQuantity = (
    id: string,
    variation: string | undefined,
    quantity: number
  ) => {
    setItems((prev) => {
      if (quantity < 1) {
        return prev.filter(
          (item) => !(item.id === id && item.variation === variation)
        )
      }

      return prev.map((item) =>
        item.id === id && item.variation === variation
          ? { ...item, quantity }
          : item
      )
    })
  }

  /* ❌ ELIMINAR PRODUCTO */
  const removeItem = (id: string, variation?: string) => {
    setItems((prev) =>
      prev.filter((item) => !(item.id === id && item.variation === variation))
    )
  }

  /* 🧹 LIMPIAR CARRITO */
  const clearCart = () => {
    setItems([])
    localStorage.removeItem("cart")
  }

  /* 💰 TOTAL */
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        total,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}

      {/* 🔔 NOTIFICACIÓN FLOTANTE */}
      {showNotification && (
        <div
          className="fixed top-6 right-6 z-50
                     bg-green-600 text-white
                     px-6 py-4 rounded-lg shadow-lg
                     flex items-center gap-4"
        >
          <span className="text-sm font-medium">
            ✅ Producto añadido
          </span>

          <button
            onClick={() => {
              setIsCartOpen(true)
              setShowNotification(false)
            }}
            className="bg-white text-green-700
                       px-3 py-1 rounded-md text-sm font-semibold
                       hover:bg-green-100 transition"
          >
            Ver carrito
          </button>
        </div>
      )}
    </CartContext.Provider>
  )
}

/* =======================
   HOOK
======================= */

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
