"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, Instagram, Send, CheckCircle2, MessageCircle, Youtube, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const { toast } = useToast()
  const [nombre, setNombre] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [asunto, setAsunto] = React.useState("")
  const [mensaje, setMensaje] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: nombre,
          from_email: email,
          subject: asunto,
          message: mensaje,
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      )
      setSubmitted(true)
      toast({
        title: "Mensaje Enviado",
        description: "Gracias por contactar con Aventralia. Te responderemos pronto.",
      })
    } catch {
      toast({
        title: "Error al enviar",
        description: "No se pudo enviar el mensaje. Intenta de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <header className="space-y-6">
              <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">Hablemos de tu visión</span>
              <h1 className="font-headline text-6xl md:text-8xl font-black uppercase tracking-tighter">CONTACTO</h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md font-light">
                ¿Tienes una idea, quieres colaborar o simplemente necesitas un impulso creativo? Estamos listos para escucharte.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {[
                { icon: Mail, label: "Email", value: "aventralia@gmail.com", href: "mailto:aventralia@gmail.com" },
                { icon: Phone, label: "Teléfono", value: "04122520721", href: "tel:04122520721" },
                { icon: Instagram, label: "Instagram", value: "@aven_tralia", href: "https://instagram.com/aven_tralia" },
                { icon: Youtube, label: "YouTube", value: "@Aven_tralia", href: "https://youtube.com/@Aven_tralia" }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-2 text-accent">
                    <item.icon className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{item.label}</span>
                  </div>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-accent transition-colors">
                    {item.value}
                  </a>
                </div>
              ))}
            </div>

            <Card className="bg-white/5 border-white/10 rounded-3xl overflow-hidden group">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="font-headline font-bold text-xl uppercase">Lema Oficial</h4>
                <p className="text-muted-foreground italic font-light">"No creas en lo que te dicen los demás. Cree en tu visión."</p>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-morphism border-white/5 rounded-3xl">
            <CardContent className="p-10">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Nombre</label>
                        <Input required placeholder="Tu nombre" className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-accent" value={nombre} onChange={e => setNombre(e.target.value)} />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Email</label>
                        <Input required type="email" placeholder="tu@email.com" className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-accent" value={email} onChange={e => setEmail(e.target.value)} />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Asunto</label>
                        <Input required placeholder="¿Sobre qué quieres hablar?" className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-accent" value={asunto} onChange={e => setAsunto(e.target.value)} />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Mensaje</label>
                        <Textarea required placeholder="Escribe aquí los detalles..." className="min-h-[160px] bg-white/5 border-white/10 rounded-xl focus:border-accent resize-none" value={mensaje} onChange={e => setMensaje(e.target.value)} />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground font-bold rounded-full h-14 group uppercase tracking-[0.2em] text-xs"
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
                    className="py-24 text-center space-y-8"
                  >
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/10 text-accent mb-4">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-headline text-4xl font-black uppercase">¡RECIBIDO!</h3>
                      <p className="text-muted-foreground font-light">Tu visión ha llegado a nosotros. Te contactaremos pronto.</p>
                    </div>
                    <Button variant="outline" className="rounded-full px-10 border-white/10 uppercase tracking-widest text-[10px] font-bold" onClick={() => setSubmitted(false)}>Enviar otro</Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating WhatsApp Action */}
      <motion.a
        href="https://wa.me/584122520721"
        target="_blank"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)] z-[60]"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.a>
    </div>
  )
}
