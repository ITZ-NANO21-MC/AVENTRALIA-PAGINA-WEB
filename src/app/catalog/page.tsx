"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Search, ShoppingBag, SlidersHorizontal, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  { id: 1, name: "Vanguard Tech Hoodie", category: "tops", price: "$145.00", rating: 4.9, imgId: "product-1", tag: "Best Seller" },
  { id: 2, name: "Leadership Oversized Tee", category: "tops", price: "$65.00", rating: 4.8, imgId: "product-2", tag: "Nuevo" },
  { id: 3, name: "Evolution Cargo Pants", category: "bottoms", price: "$180.00", rating: 4.9, imgId: "lookbook-2", tag: "Tech" },
  { id: 4, name: "Minimalist Windbreaker", category: "tops", price: "$210.00", rating: 5.0, imgId: "hero", tag: "Limited" },
  { id: 5, name: "Growth Utility Cap", category: "acc", price: "$45.00", rating: 4.7, imgId: "product-1", tag: "" },
  { id: 6, name: "Vanguard Shoulder Bag", category: "acc", price: "$85.00", rating: 4.8, imgId: "product-2", tag: "" },
  { id: 7, name: "Pro Joggers Stealth", category: "bottoms", price: "$130.00", rating: 4.9, imgId: "lookbook-3", tag: "" },
  { id: 8, name: "Leaders Beanie", category: "acc", price: "$35.00", rating: 4.6, imgId: "collection-1", tag: "" },
]

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = React.useState("all")
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="container mx-auto space-y-12">
        <header className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="text-accent text-xs font-bold uppercase tracking-widest">Tienda Oficial</span>
            <h1 className="font-headline text-5xl md:text-7xl font-black">CATÁLOGO</h1>
            <p className="text-muted-foreground text-lg">Explora nuestra selección curada de herramientas textiles para tu liderazgo personal.</p>
          </div>
          <div className="w-full md:w-auto flex items-center gap-4">
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar prenda..." 
                className="pl-10 bg-card/50 border-border"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon" className="shrink-0 border-border">
              <SlidersHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </header>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
          <TabsList className="bg-transparent border-b border-border w-full justify-start rounded-none h-auto p-0 mb-10 overflow-x-auto">
            {["all", "tops", "bottoms", "acc"].map((cat) => (
              <TabsTrigger 
                key={cat}
                value={cat}
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:text-accent px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all"
              >
                {cat === "all" ? "Todos" : cat === "tops" ? "Partes Superiores" : cat === "bottoms" ? "Partes Inferiores" : "Accesorios"}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group bg-card/40 border-border/50 overflow-hidden hover:border-accent/50 transition-all duration-500">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/${product.imgId}/600/600`}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint="product garment streetwear"
                    />
                    {product.tag && (
                      <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-bold tracking-widest text-[10px] uppercase">
                        {product.tag}
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <Button size="icon" className="rounded-full bg-white text-black hover:bg-accent transition-colors">
                        <ShoppingBag className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-headline font-bold text-lg leading-tight uppercase tracking-tight">{product.name}</h3>
                      <div className="flex items-center gap-1 text-accent">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-[10px] font-bold">{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-xl font-headline font-black text-primary">{product.price}</p>
                    <Button variant="link" className="px-0 h-auto text-accent text-xs font-bold uppercase tracking-widest group">
                      Ver Detalles <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
        </Tabs>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center space-y-4">
            <p className="text-muted-foreground italic">No encontramos productos que coincidan con tu búsqueda.</p>
            <Button variant="outline" onClick={() => {setSearchQuery(""); setActiveCategory("all")}}>
              Limpiar Filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}