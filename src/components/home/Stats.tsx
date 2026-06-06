"use client"

import { motion } from "framer-motion"
import { Users, ShieldCheck, Zap, Globe } from "lucide-react"

const stats = [
  { label: "Miembros de la Comunidad", value: "+10k", icon: Users },
  { label: "Materiales Premium", value: "100%", icon: ShieldCheck },
  { label: "Potencial Ilimitado", value: "0", subValue: "Límites", icon: Zap },
  { label: "Presencia Global", value: "12", subValue: "Países", icon: Globe },
]

export function Stats() {
  return (
    <section className="py-24 border-y border-border bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-2">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="text-4xl md:text-5xl font-headline font-bold">
                  {stat.value}
                  {stat.subValue && <span className="text-xs uppercase ml-1 block text-muted-foreground">{stat.subValue}</span>}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}