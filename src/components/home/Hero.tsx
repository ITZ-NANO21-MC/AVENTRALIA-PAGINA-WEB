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
          className="object-cover opacity-40"
          priority
          data-ai-hint="streetwear fashion background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3 h-3" />
            Nueva Colección: Vanguar Leadership
          </div>
          
          <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tight leading-[0.9]">
            EVOLUCIONA, CRECE Y <br />
            <span className="text-gradient">LIDERA TU CAMINO</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            No diseñamos ropa, diseñamos herramientas para la mente líder. 
            Prendas técnicas de alto impacto para quienes no conocen límites.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:scale-105 transition-transform">
              Ver Colección <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-border hover:bg-muted/50 transition-colors">
              Explorar Lookbook
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Aesthetic Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary/50 to-transparent hidden md:block"
      />
    </section>
  )
}