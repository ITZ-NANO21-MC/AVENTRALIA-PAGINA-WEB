"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Instagram, Twitter, Send, CheckCircle2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
    toast({
      title: "Mensaje Enviado",
      description: "Nuestro equipo de vanguardia se pondrá en contacto contigo pronto.",
    })
  }

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <header className="space-y-4">
              <span className="text-accent text-xs font-bold uppercase tracking-widest">Soporte & Alianzas</span>
              <h1 className="font-headline text-5xl md:text-7xl font-black">CONTÁCTANOS</h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                ¿Tienes dudas sobre tu pedido o quieres formar parte de nuestro programa de embajadores? Estamos listos para escucharte.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Mail, label: "Email", value: "vanguard@aventralia.com" },
                { icon: Phone, label: "Soporte WhatsApp", value: "+34 600 000 000" },
                { icon: MapPin, label: "Showroom Central", value: "C/ de la Innovación, 42, Madrid" },
                { icon: Instagram, label: "Social", value: "@aventralia.vanguard" }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-2 text-accent">
                    <item.icon className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                  </div>
                  <p className="font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Map Representation */}
            <div className="relative h-64 rounded-3xl overflow-hidden border border-border group">
              <div className="absolute inset-0 bg-card flex flex-col items-center justify-center p-8 text-center space-y-4">
                <MapPin className="w-10 h-10 text-accent group-hover:animate-bounce" />
                <div className="space-y-1">
                  <h4 className="font-headline font-bold">Showroom Madrid</h4>
                  <p className="text-xs text-muted-foreground">Abierto de Lunes a Sábado, 10:00 - 20:00</p>
                </div>
                <Button variant="outline" size="sm" className="rounded-full">Ver en Maps</Button>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent opacity-50 pointer-events-none" />
            </div>
          </div>

          <Card className="glass-morphism border-border/50">
            <CardContent className="p-10">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Nombre Completo</label>
                        <Input required placeholder="Tu nombre" className="bg-background/50 border-border" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                        <Input required type="email" placeholder="tu@email.com" className="bg-background/50 border-border" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Asunto</label>
                      <Input required placeholder="¿En qué podemos ayudarte?" className="bg-background/50 border-border" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Mensaje</label>
                      <Textarea required placeholder="Escribe aquí los detalles..." className="min-h-[150px] bg-background/50 border-border resize-none" />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-accent text-accent-foreground font-bold rounded-full h-14 group"
                    >
                      {isSubmitting ? "Enviando..." : (
                        <>Enviar Mensaje <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></>
                      )}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center space-y-6"
                  >
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-4">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-headline text-3xl font-bold">¡MENSAJE RECIBIDO!</h3>
                    <p className="text-muted-foreground">Hemos recibido tu mensaje. Nos pondremos en contacto contigo en un plazo de 24-48 horas.</p>
                    <Button variant="outline" className="rounded-full" onClick={() => setSubmitted(false)}>Enviar otro mensaje</Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.a
        href="https://wa.me/#"
        target="_blank"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-2xl z-[60]"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.a>
    </div>
  )
}