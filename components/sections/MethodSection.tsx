"use client"

import { motion } from "framer-motion"
import { Award, Clock, Users, Zap } from "lucide-react"
import { CTAButton } from "@/components/common/CTAButton"

interface MethodSectionProps {
  onOpenModal: () => void
}

const credentials = [
  { icon: Award, label: "Certified Strength Coach" },
  { icon: Clock, label: "15+ Years Experience" },
  { icon: Users, label: "500+ Transformations" },
  { icon: Zap, label: "Science-Backed Methods" },
]

export function MethodSection({ onOpenModal }: MethodSectionProps) {
  return (
    <section id="method" className="py-24 md:py-32 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background accent glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">
              The Philosophy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mt-4 leading-none">
              THE JAXSON METHOD
            </h2>
            <p className="text-white/60 text-lg mt-6 leading-relaxed">
              No gimmicks. No shortcuts. Just proven, science-backed training protocols 
              refined over 15 years of working with high-performers who demand results.
            </p>
            <p className="text-white/50 mt-4 leading-relaxed">
              The Jaxson Method combines progressive resistance training, metabolic 
              conditioning, and precision nutrition to deliver transformations that 
              last. This is not a program for everyone, it is for those ready to 
              commit to excellence.
            </p>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {credentials.map((cred, index) => (
                <motion.div
                  key={cred.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl glass-card glass-card-hover transition-all duration-300"
                >
                  <cred.icon className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-sm text-white/90">{cred.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <CTAButton onClick={onOpenModal} variant="outline" size="lg">
                Learn the Method
              </CTAButton>
            </div>
          </motion.div>

          {/* Right Column - Coach Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden border border-white/10 hover:border-accent/30 transition-all duration-500">
              {/* Accent glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
              
              {/* Avatar Placeholder */}
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 border-2 border-accent/50 flex items-center justify-center shadow-[0_0_30px_rgba(204,255,0,0.3)]">
                  <span className="font-display text-3xl text-accent">JV</span>
                </div>
              </div>

              <h3 className="font-display text-2xl text-white mt-6">
                JAXSON VANE
              </h3>
              <p className="text-accent text-sm uppercase tracking-[0.15em] mt-1 font-medium">
                Founder & Head Coach
              </p>

              <blockquote className="mt-6 text-white/60 italic border-l-2 border-accent pl-4">
                &quot;Your body is capable of more than your mind believes. 
                My job is to bridge that gap with science, discipline, 
                and unwavering commitment to your success.&quot;
              </blockquote>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-white/50">
                  Featured in major fitness publications and trusted by CEOs, 
                  athletes, and high-performers worldwide.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
