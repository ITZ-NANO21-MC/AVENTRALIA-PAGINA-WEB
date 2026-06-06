"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const collections = [
  {
    title: "Essential Leadership",
    tagline: "Streetwear de alto impacto para el día a día.",
    priceRange: "desde $85",
    imgId: "collection-1",
    accent: "bg-accent/10"
  },
  {
    title: "Urban Sport Pro",
    tagline: "Rendimiento técnico con estética vanguardista.",
    priceRange: "desde $120",
    imgId: "collection-2",
    accent: "bg-blue-500/10"
  },
  {
    title: "Minimalist Armor",
    tagline: "Capas de protección contra el ruido exterior.",
    priceRange: "desde $150",
    imgId: "lookbook-2",
    accent: "bg-primary/10"
  },
  {
    title: "Growth Accessories",
    tagline: "Complementos que potencian tu mensaje.",
    priceRange: "desde $45",
    imgId: "product-2",
    accent: "bg-accent/10"
  },
  {
    title: "Night Vanguard",
    tagline: "Diseños reflectantes para liderar la noche.",
    priceRange: "desde $95",
    imgId: "lookbook-3",
    accent: "bg-purple-500/10"
  },
  {
    title: "Custom Evolution",
    tagline: "Prendas personalizadas de edición limitada.",
    priceRange: "Precio bajo consulta",
    imgId: "hero",
    accent: "bg-emerald-500/10"
  }
]

export default function CollectionsPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="container mx-auto space-y-20">
        <header className="max-w-3xl space-y-4">
          <span className="text-accent text-xs font-bold uppercase tracking-widest">Nuestras Líneas</span>
          <h1 className="font-headline text-5xl md:text-7xl font-black">LAS COLECCIONES</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Cada línea de Aventralia responde a una etapa diferente de tu camino. 
            Desde lo esencial para el inicio del viaje hasta lo más avanzado para el liderazgo consolidado.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, i) => {
            const img = PlaceHolderImages.find(p => p.id === collection.imgId)
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[500px] overflow-hidden rounded-3xl cursor-pointer"
              >
                <Image
                  src={img?.imageUrl || ""}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                  data-ai-hint="fashion clothing collection"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${collection.accent} text-accent border border-accent/20`}>
                      {collection.priceRange}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-headline text-3xl font-bold uppercase tracking-tight">{collection.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">{collection.tagline}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}