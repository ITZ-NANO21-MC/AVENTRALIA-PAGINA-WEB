"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ""}
          alt="Aventralia Vanguard"
          fill
          className="object-cover opacity-50 grayscale"
          priority
          data-ai-hint="cinematic urban minimalist background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto space-y-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-accent text-[10px] font-bold uppercase tracking-[0.3em]">
            <Sparkles className="w-3 h-3" />
            Vision • Action • Legacy
          </div>
          
          <div className="space-y-4">
            <h1 className="font-headline text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase">
              CREE EN TU <br />
              <span className="text-gradient">VISIÓN</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
              Incluso cuando nadie más pueda verla. Creando oportunidades, evolucionando ideas y construyendo identidad.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="rounded-full px-10 bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 font-bold uppercase tracking-widest text-xs">
              Explorar <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 border-white/20 hover:bg-white/10 transition-all duration-300 font-bold uppercase tracking-widest text-xs">
              Manifiesto
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Aesthetic Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-white to-transparent hidden md:block"
      />
    </section>
  )
}
