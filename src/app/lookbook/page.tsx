"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, Maximize2 } from "lucide-react"

const images = Array.from({ length: 14 }).map((_, i) => ({
  id: i,
  url: `https://picsum.photos/seed/look-${i + 20}/800/1200`,
  title: `Estilo Vanguardista #${i + 1}`,
  description: "Una muestra de evolución y liderazgo personal a través del estilo."
}))

export default function LookbookPage() {
  const [selectedId, setSelectedId] = React.useState<number | null>(null)

  const selectedImage = images.find(img => img.id === selectedId)

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="container mx-auto space-y-16">
        <header className="text-center space-y-4">
          <span className="text-accent text-xs font-bold uppercase tracking-widest">Inspiración</span>
          <h1 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter">EL LOOKBOOK</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Visualiza tu futuro yo. Una exploración visual de la sinergia entre el minimalismo y el alto impacto.
          </p>
        </header>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl break-inside-avoid"
              onClick={() => setSelectedId(img.id)}
            >
              <Image
                src={img.url}
                alt={img.title}
                width={600}
                height={800}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint="fashion model photography"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <Maximize2 className="w-8 h-8 text-white scale-75 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId !== null && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedId(null)}
          >
            <button 
              className="absolute top-10 right-10 text-primary hover:rotate-90 transition-transform duration-300 z-[101]"
              onClick={() => setSelectedId(null)}
            >
              <X className="w-10 h-10" />
            </button>
            
            <motion.div
              layoutId={`look-${selectedId}`}
              className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <span className="text-accent text-xs font-bold uppercase tracking-widest">Outfit Conceptual</span>
                <h3 className="font-headline text-4xl font-black">{selectedImage.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{selectedImage.description}</p>
                <div className="pt-8 border-t border-border flex gap-4">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Colección</p>
                    <p className="text-sm font-medium">Essential Leadership</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Enfoque</p>
                    <p className="text-sm font-medium">Poder & Minimalismo</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}