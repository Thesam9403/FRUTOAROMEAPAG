import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Shop } from "@/components/shop"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/components/cart-provider"

export default function Home() {
  return (
    <CartProvider>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Shop />
        <Footer />
      </main>
    </CartProvider>
  )
}
