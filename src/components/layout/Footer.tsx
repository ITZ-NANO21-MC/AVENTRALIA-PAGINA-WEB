"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Twitter, Linkedin, Github, ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export function Footer() {
  const [mounted, setMounted] = useState(false)
  const [year, setYear] = useState<number | string>("...")

  useEffect(() => {
    setMounted(true)
    setYear(new Date().getFullYear())
  }, [])

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-background border-t border-border pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 border border-primary rotate-45 rounded-sm" />
                <span className="font-headline font-bold text-sm tracking-tighter relative">A</span>
              </div>
              <span className="font-headline font-bold text-lg tracking-widest">AVENTRALIA</span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Evoluciona, crece y lidera tu camino. Aventralia es más que ropa; es un símbolo de tu propio proceso de transformación y liderazgo personal.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-accent transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline font-bold text-sm uppercase tracking-widest">Explorar</h4>
            <ul className="space-y-4">
              {[
                { name: "Colecciones", href: "/collections" },
                { name: "Lookbook", href: "/lookbook" },
                { name: "Catálogo", href: "/catalog" },
                { name: "Contacto", href: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {year} Aventralia Vanguard. Todos los derechos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Volver arriba
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  )
}
