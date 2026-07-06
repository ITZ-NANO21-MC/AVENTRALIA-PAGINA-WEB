import { Hero } from "@/components/home/Hero"
import { Stats } from "@/components/home/Stats"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, Target, Lightbulb, TrendingUp } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function Home() {
  const showcaseImg = PlaceHolderImages.find(img => img.id === 'lookbook-1')

  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      
      {/* Brand Ethos Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group">
              <Image 
                src={showcaseImg?.imageUrl || ""}
                alt="Aventralia Filosofía"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                data-ai-hint="minimalist cinematic portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-10 left-10 space-y-2">
                <span className="text-accent text-xs font-bold uppercase tracking-widest">Identidad Aventralia</span>
                <h3 className="font-headline text-3xl font-bold uppercase">Vision. Action. Legacy.</h3>
              </div>
            </div>
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="font-headline text-4xl md:text-6xl font-black leading-tight uppercase">
                  MÁS QUE UNA MARCA, <br />
                  UNA <span className="text-gradient">MENTALIDAD</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed italic">
                  "No creas en lo que te dicen los demás. Cree en tu visión."
                </p>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Aventralia es una plataforma de inspiración para quienes deciden construir su propio camino. Representamos la valentía de emprender, la disciplina del aprendizaje constante y la determinación de convertir ideas en realidades tangibles.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Target, title: "Misión", text: "Inspirar a desarrollar el potencial y fortalecer la confianza." },
                  { icon: TrendingUp, title: "Visión", text: "Construir una comunidad global que actúe con determinación." },
                  { icon: Lightbulb, title: "Filosofía", text: "Las oportunidades no aparecen, se construyen con esfuerzo." }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2 text-accent">
                      <item.icon className="w-5 h-5" />
                      <h4 className="font-bold uppercase text-sm tracking-widest">{item.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>

              <Button size="lg" variant="link" className="px-0 text-accent group h-auto">
                Descubre nuestra historia <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Manifest Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <span className="text-accent text-xs font-bold uppercase tracking-widest">Nuestro Manifiesto</span>
          <blockquote className="font-headline text-3xl md:text-5xl font-black leading-tight">
            "NO SIGUIMOS TENDENCIAS PARA ENCAJAR. <span className="text-gradient">CREAMOS NUESTRO PROPIO CAMINO.</span> NO BUSCAMOS APROBACIÓN, BUSCAMOS CRECIMIENTO."
          </blockquote>
          <p className="text-muted-foreground text-lg italic">
            — Aventralia Manifesto
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="bg-card rounded-3xl p-12 md:p-24 text-center space-y-8 relative overflow-hidden border border-border">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent/5 blur-3xl rounded-full -z-10" />
            <h2 className="font-headline text-4xl md:text-7xl font-black uppercase">¿LISTO PARA <span className="text-gradient">CONSTRUIR</span>?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Únete a la comunidad que cree en la creatividad, la disciplina y el poder de una visión auténtica.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-10 bg-primary text-primary-foreground group font-bold tracking-widest uppercase text-xs">
                  Únete ahora <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full px-10 border-border font-bold tracking-widest uppercase text-xs">
                  Contacto Directo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}