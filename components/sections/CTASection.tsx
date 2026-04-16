"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap } from "lucide-react"
import { CTAButton } from "@/components/common/CTAButton"

interface CTASectionProps {
  onOpenModal: () => void
}

export function CTASection({ onOpenModal }: CTASectionProps) {
  return (
    <section className="py-20 md:py-28 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[200px]" />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-8"
          >
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Limited Spots Available</span>
          </motion.div>

          {/* Heading */}
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            YOUR TRANSFORMATION
            <br />
            <span className="text-accent drop-shadow-[0_0_30px_rgba(204,255,0,0.5)]">
              STARTS TODAY
            </span>
          </h2>

          {/* Supporting text */}
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
            Join the elite professionals who&apos;ve already unlocked their potential. 
            Don&apos;t wait for the perfect moment—create it.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton onClick={onOpenModal} size="lg">
              <span>Secure Your Spot Now</span>
              <ArrowRight className="w-5 h-5" />
            </CTAButton>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>30-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Secure Payment</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
