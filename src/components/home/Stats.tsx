"use client"

import { motion } from "framer-motion"
import { Users, ShieldCheck, Zap, Globe } from "lucide-react"

const stats = [
  { label: "Impulso Creativo", value: "100%", icon: Zap },
  { label: "Comunidad Visionaria", value: "+5k", icon: Users },
  { label: "Propósito Real", value: "Activo", icon: ShieldCheck },
  { label: "Presencia Digital", value: "Global", icon: Globe },
]

export function Stats() {
  return (
    <section className="py-20 border-y border-white/5 bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center space-y-4 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-accent mb-2 transition-colors group-hover:bg-white/10">
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-4xl md:text-5xl font-headline font-black tracking-tighter uppercase">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">
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
