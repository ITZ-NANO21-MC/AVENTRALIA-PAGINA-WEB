"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Youtube, Mail, Phone, ArrowUp } from "lucide-react"
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
    <footer className="bg-background border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div className="md:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 border border-white rotate-45 rounded-sm transition-transform group-hover:rotate-90" />
                <span className="font-headline font-bold text-lg tracking-tighter relative">A</span>
              </div>
              <span className="font-headline font-bold text-2xl tracking-[0.2em]">AVENTRALIA</span>
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed text-sm">
              Aventralia es una marca personal enfocada en el crecimiento, la creatividad y la construcción de proyectos con propósito. Inspira a confiar en tu visión y actuar para hacerla realidad.
            </p>
            <div className="flex items-center gap-5">
              {[
                { icon: Instagram, href: "https://www.instagram.com/aven_tralia" },
                { icon: Youtube, href: "https://www.youtube.com/@Aven_tralia" },
                { icon: Mail, href: "mailto:aventralia@gmail.com" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 hover:border-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="font-headline font-bold text-xs uppercase tracking-[0.4em] text-accent">Navegación</h4>
            <ul className="space-y-4">
              {[
                { name: "Inicio", href: "/" },
                { name: "Colecciones", href: "/collections" },
                { name: "Lookbook", href: "/lookbook" },
                { name: "Catálogo", href: "/catalog" },
                { name: "Contacto", href: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted-foreground hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
            © {mounted ? year : "..."} AVENTRALIA Vision. Action. Legacy.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-white transition-colors font-bold"
          >
            Volver arriba
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  )
}
