"use client"

import { motion } from "framer-motion"
import { Target, MessageSquare, Apple, Dumbbell, BarChart3, Video } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Custom Training Plan",
    description: "Personalized program designed for your body, goals, and schedule. No cookie-cutter templates.",
  },
  {
    icon: MessageSquare,
    title: "Weekly 1-on-1 Calls",
    description: "Direct access to Jaxson every week for coaching, adjustments, and accountability.",
  },
  {
    icon: Apple,
    title: "Precision Nutrition",
    description: "Macro-optimized meal plans that fit your lifestyle. Eat well, perform better.",
  },
  {
    icon: Dumbbell,
    title: "Progressive Overload System",
    description: "Science-based progression ensuring continuous gains without plateaus.",
  },
  {
    icon: BarChart3,
    title: "Progress Dashboard",
    description: "Track every metric that matters. See your transformation unfold in real-time.",
  },
  {
    icon: Video,
    title: "Exercise Library",
    description: "HD video demonstrations with form cues for every movement in your program.",
  },
]

export function FeaturesSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle radial glow in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">
            Everything You Need
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mt-4">
            WHAT YOU GET
          </h2>
          <p className="text-white/50 text-lg mt-4">
            A complete transformation system, not just a workout plan.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-6 glass-card rounded-xl border border-white/5 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(204,255,0,0.15)]"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                <feature.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-display text-xl text-white mt-5">
                {feature.title}
              </h3>
              <p className="text-white/50 mt-3 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
