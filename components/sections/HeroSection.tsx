"use client"

import Image from "next/image"
import { CTAButton } from "@/components/common/CTAButton"
import { CountdownTimer } from "@/components/common/CountdownTimer"
import { AnimatedOrbs } from "@/components/common/AnimatedOrbs"
import { motion } from "framer-motion"

interface HeroSectionProps {
  onOpenModal: () => void
}

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Animated Orbs Background */}
      <AnimatedOrbs />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-trainer.jpg"
          alt="Elite personal training"
          fill
          className="object-cover object-center opacity-40"
          priority
          quality={90}
        />
        {/* Dark Overlay - Much heavier for premium look */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/70 to-[#0a0a0a]" />
        {/* Orange accent glow - subtle corner glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-transparent to-transparent" />
        {/* Lime accent glow from bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-sm text-white/50 uppercase tracking-[0.2em] font-medium">
                Launch Offer Ends In
              </span>
              <CountdownTimer />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-none tracking-wide text-balance max-w-5xl"
          >
            TRANSFORM YOUR BODY.
            <br />
            <span className="text-accent drop-shadow-[0_0_30px_rgba(204,255,0,0.5)]">
              TRANSFORM YOUR LIFE.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
          >
            Join elite professionals getting results with the Jaxson Method.
            Science-backed training designed for busy achievers who refuse to settle.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10"
          >
            <CTAButton onClick={onOpenModal} size="xl">
              Start Your Transformation
            </CTAButton>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex items-center gap-4 text-sm text-white/40"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(204,255,0,0.8)]" />
              <span className="text-white/60">Limited to 50 Clients</span>
            </span>
            <span className="w-px h-4 bg-white/20" />
            <span>Science-Backed Method</span>
            <span className="w-px h-4 bg-white/20 hidden sm:block" />
            <span className="hidden sm:inline">Results Guaranteed</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/30 uppercase tracking-[0.2em]">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(204,255,0,0.8)]" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
