import { Hero } from "@/components/home/Hero"
import { Stats } from "@/components/home/Stats"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
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
                alt="Aventralia Ethos"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint="leadership clothing fashion"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-10 left-10 space-y-2">
                <span className="text-accent text-xs font-bold uppercase tracking-widest">Manifiesto Aventralia</span>
                <h3 className="font-headline text-3xl font-bold">LIDERAZGO EN CADA FIBRA</h3>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="font-headline text-4xl md:text-6xl font-black leading-tight">
                MÁS QUE ROPA, <br />
                UNA <span className="text-gradient">DECLARACIÓN</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Aventralia nace de la necesidad de unificar el estilo urbano con la mentalidad de alto rendimiento. Cada prenda está diseñada para acompañarte en tu ascenso, ofreciendo comodidad técnica sin comprometer una estética sofisticada y minimalista.
              </p>
              <ul className="space-y-4">
                {[
                  "Materiales de grado técnico con durabilidad extrema.",
                  "Cortes ergonómicos que facilitan el movimiento dinámico.",
                  "Estética monocromática para una elegancia atemporal.",
                  "Sostenibilidad consciente en cada proceso de producción."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" variant="link" className="px-0 text-accent group">
                Leer nuestra historia <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="bg-card rounded-3xl p-12 md:p-24 text-center space-y-8 relative overflow-hidden border border-border">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent/5 blur-3xl rounded-full -z-10" />
            <h2 className="font-headline text-4xl md:text-6xl font-black">¿LISTO PARA TU <span className="text-gradient">EVOLUCIÓN</span>?</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Únete a la vanguardia del estilo y el crecimiento personal. Recibe acceso exclusivo a lanzamientos limitados.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 bg-primary text-primary-foreground group">
                Ir a la Tienda <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-border">
                  Conoce el Showroom
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
