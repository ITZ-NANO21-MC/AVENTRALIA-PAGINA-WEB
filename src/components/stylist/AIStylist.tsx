"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BrainCircuit, Sparkles, Send, UserCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { aiPersonalStylistRecommendation, AIPersonalStylistRecommendationOutput } from "@/ai/flows/ai-personal-stylist-recommendation-flow"

export function AIStylist() {
  const [goals, setGoals] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] = React.useState<AIPersonalStylistRecommendationOutput | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!goals.trim()) return
    
    setLoading(true)
    setResult(null)
    try {
      const output = await aiPersonalStylistRecommendation({ personalDevelopmentGoals: goals })
      setResult(output)
    } catch (error) {
      console.error("Error calling AI Stylist:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-accent bg-accent/10 px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase">
            <BrainCircuit className="w-4 h-4" /> AI Personal Stylist
          </div>
          <h2 className="font-headline text-4xl md:text-6xl font-black">PROYECTA TU <span className="text-gradient">LIDERAZGO</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cuéntanos tus metas de crecimiento personal y nuestra IA diseñará un outfit de Aventralia que proyecte la confianza y evolución que necesitas.
          </p>
        </div>

        <Card className="glass-morphism overflow-hidden border-border/50">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  <UserCircle className="w-4 h-4" /> Tus Objetivos de Desarrollo
                </label>
                <Textarea 
                  placeholder="Ej: Quiero proyectar autoridad en reuniones, pero manteniendo una esencia creativa y moderna..."
                  className="min-h-[120px] bg-background/50 border-border focus:ring-accent resize-none"
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                />
              </div>
              <Button 
                disabled={loading}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full h-12 text-md font-bold transition-all group"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Analizando tu Perfil...
                  </>
                ) : (
                  <>
                    Obtener Recomendación <Sparkles className="ml-2 w-4 h-4 transition-transform group-hover:scale-110" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <AnimatePresence mode="wait">
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mt-12 space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {result.recommendations.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="h-full bg-card/40 border-border/50 overflow-hidden group">
                      <div className="p-6 space-y-4">
                        <h4 className="text-xl font-headline font-bold text-accent">{item.itemName}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        <div className="pt-4 border-t border-border/50">
                          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Alineación con tu meta:</p>
                          <p className="text-sm italic text-muted-foreground">"{item.alignmentExplanation}"</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}