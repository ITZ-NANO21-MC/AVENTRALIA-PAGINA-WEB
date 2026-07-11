"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const storyParagraphs = [
  "Mi nombre es Víctor Daniel Romero Hidalgo y esta historia comenzó en Santa Ana de Coro, estado Falcón, Venezuela, cuando tenía apenas 17 años.",
  "Aventralia no nació de una oficina, de una gran inversión ni de una idea de negocio cualquiera. Nació de una historia real, de una vida marcada por los desafíos, las pérdidas y la decisión de no rendirse.",
  "Crecí en una familia con muchas dificultades económicas. Desde muy pequeño entendí que la vida no siempre es justa y que muchas personas tienen que luchar el doble para conseguir oportunidades. Perdí a mi mamá siendo muy joven, una experiencia que cambió mi vida para siempre. Durante años vi a mi padre trabajar incansablemente como soldador para sacar adelante a nuestra familia. También vi a mi hermano crecer en medio de esas mismas dificultades.",
  "Con el tiempo llegué a vivir en Santa Ana de Coro, donde encontré un nuevo hogar. Allí estudié, aprendí y conocí muchas personas. Como ocurre con muchos jóvenes, también escuché críticas, dudas y comentarios que intentaban hacerme creer que no sería capaz de construir algo importante. Más de una vez sentí que las personas juzgaban mi forma de vestir, mi manera de pensar o mis sueños.",
  "Pero entendí algo que cambió mi forma de ver la vida: las opiniones de los demás no pueden definir nuestro futuro.",
  "Mientras muchas personas veían límites, yo veía oportunidades. Empecé a observar cómo las redes sociales estaban transformando la manera en que el mundo aprendía, trabajaba y se comunicaba. Descubrí que una sola idea podía inspirar a miles de personas y comprendí que la tecnología estaba cambiando la realidad más rápido de lo que muchos imaginaban.",
  "Fue entonces cuando decidí crear Aventralia.",
  "Aventralia no existe para vender falsas promesas ni para decirle a las personas que el éxito llega de la noche a la mañana. Existe porque creo que todos tenemos un potencial que muchas veces permanece oculto por el miedo, las críticas o la falta de oportunidades.",
]

export function FounderStoryModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0 max-w-[95vw] md:max-w-3xl lg:max-w-5xl overflow-hidden border-border/50">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="relative md:col-span-2 aspect-[4/3] md:aspect-auto md:h-full md:min-h-[550px]">
            <Image
              src="/fundador.png"
              alt="Víctor Daniel Romero - Fundador de Aventralia"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
            <div className="absolute bottom-4 left-4 md:hidden">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">Fundador</span>
              <p className="font-headline text-sm font-bold text-white">Víctor Daniel Romero</p>
            </div>
          </div>
          <div className="md:col-span-3 p-6 md:p-8 lg:p-10 overflow-y-auto max-h-[50vh] md:max-h-[550px] space-y-5">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Nuestra Historia</span>
              <h2 className="font-headline text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight">
                EL ORIGEN DE <span className="text-gradient">AVENTRALIA</span>
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              {storyParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
