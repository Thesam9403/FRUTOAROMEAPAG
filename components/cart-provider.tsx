"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

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
  clearCart: () => void
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (newItem: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === newItem.id && i.variation === newItem.variation)
      if (existing) {
        return prev.map((i) =>
          i.id === newItem.id && i.variation === newItem.variation
            ? { ...i, quantity: i.quantity + newItem.quantity }
            : i,
        )
      }
      return [...prev, newItem]
    })
  }

  const removeItem = (id: string, variation?: string) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.variation === variation)))
  }

  const clearCart = () => setItems([])

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, total }}>{children}</CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within CartProvider")
  return context
}
