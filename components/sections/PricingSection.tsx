"use client"

import { motion } from "framer-motion"
import { Check, Shield, Clock } from "lucide-react"
import { CTAButton } from "@/components/common/CTAButton"
import { CountdownTimer } from "@/components/common/CountdownTimer"

interface PricingSectionProps {
  onOpenModal: () => void
}

const included = [
  "12-week personalized training program",
  "Weekly 1-on-1 video coaching calls",
  "Custom macro-optimized nutrition plan",
  "24/7 messaging support with Jaxson",
  "Progress tracking dashboard access",
  "HD exercise video library",
  "Lifetime access to program materials",
]

export function PricingSection({ onOpenModal }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">
            Investment In Yourself
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mt-4">
            SECURE YOUR TRANSFORMATION
          </h2>
          <p className="text-white/50 text-lg mt-4">
            Limited launch pricing ends when the timer hits zero
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden">
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-transparent to-transparent opacity-50" />
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />
            
            <div className="relative glass-card rounded-2xl border border-accent/30 overflow-hidden">
              {/* Badge */}
              <div className="bg-accent text-[#0a0a0a] text-center py-3 font-display text-sm tracking-[0.15em] font-bold">
                LAUNCH SPECIAL - LIMITED SPOTS
              </div>

              <div className="p-8">
                {/* Timer */}
                <div className="flex justify-center mb-4">
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <Clock className="h-4 w-4 text-accent" />
                    <span>Offer expires in:</span>
                  </div>
                </div>
                <div className="flex justify-center mb-8">
                  <CountdownTimer variant="compact" />
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-white/40 line-through text-2xl">$1,497</span>
                    <span className="font-display text-5xl md:text-6xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">$997</span>
                  </div>
                  <p className="text-white/50 mt-3">
                    or 3 payments of <span className="text-accent font-semibold">$375</span>
                  </p>
                </div>

                {/* What&apos;s Included */}
                <div className="space-y-4 mb-8">
                  {included.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-accent" />
                      </div>
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <CTAButton onClick={onOpenModal} size="xl" className="w-full">
                  Secure Your Spot Now
                </CTAButton>

                {/* Guarantee */}
                <div className="flex items-center justify-center gap-2 mt-6 text-sm text-white/50">
                  <Shield className="h-5 w-5 text-accent" />
                  <span>30-day money-back guarantee. No questions asked.</span>
                </div>

                {/* Spots remaining */}
                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <p className="text-sm text-white/50">
                    <span className="text-accent font-semibold">38 spots remaining</span> of 50 this launch
                  </p>
                  <div className="mt-3 h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent to-accent/70 w-[24%] rounded-full shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
