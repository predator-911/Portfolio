import dynamic from "next/dynamic"
import Navigation from "@/components/Navigation"
import Header from "@/components/Header"
import About from "@/components/About"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import Learning from "@/components/Learning"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

const DynamicBackground = dynamic(() => import("@/components/Background"), { ssr: false })

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <DynamicBackground />
      <Navigation />
      <Header />
      <About />
      <Services />
      <Projects />
      <Learning />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}

