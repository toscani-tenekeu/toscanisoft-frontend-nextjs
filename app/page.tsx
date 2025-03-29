import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Products from "@/components/products"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import BackgroundAnimation from "@/components/background-animation"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Products />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

