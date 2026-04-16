"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is this program for beginners or advanced athletes?",
    answer: "Both. The Jaxson Method is built on progressive principles that scale to your current fitness level. Whether you're just starting or you've been training for years, the program adapts. During your onboarding call, we assess your experience, mobility, and goals to create a truly personalized plan.",
  },
  {
    question: "What if I don't see results in 30 days?",
    answer: "I stand behind my method with a 100% money-back guarantee. If you follow the program as prescribed and don't see meaningful progress within 30 days, I'll refund every penny. No questions, no hassle. That's how confident I am in what we'll achieve together.",
  },
  {
    question: "How much time per week do I need to commit?",
    answer: "Plan for 4-5 hours per week of focused training, plus time for meal prep (which gets faster as you build habits). The program is designed for busy professionals—every minute is purposeful. No junk volume, no wasted time. Quality over quantity, always.",
  },
  {
    question: "Do I need a gym membership?",
    answer: "A gym with basic equipment (barbells, dumbbells, cables) is ideal for optimal results. However, I've successfully trained clients with home setups and limited equipment. During onboarding, we'll discuss your situation and adjust accordingly.",
  },
  {
    question: "What makes this different from other coaching programs?",
    answer: "Direct access to me—not an assistant, not a junior coach. You get 15+ years of experience distilled into a system that works for high-performers. Plus, the accountability and personalization level is unmatched. This isn't a course you forget about—it's a partnership.",
  },
  {
    question: "Can I do this program while traveling frequently?",
    answer: "Absolutely. Many of my clients are executives who travel 50%+ of the time. I provide travel workout alternatives, hotel gym protocols, and nutrition strategies for eating on the road. Your lifestyle is factored into every decision.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">
            Got Questions?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mt-4">
            FREQUENTLY ASKED
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border border-white/5 rounded-xl px-6 data-[state=open]:border-accent/40 data-[state=open]:shadow-[0_0_30px_rgba(204,255,0,0.1)] transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-medium text-white/90 hover:text-accent py-5 [&[data-state=open]>svg]:text-accent text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-white/50">
            Still have questions?{" "}
            <a href="mailto:coach@vaneperformance.com" className="text-accent hover:underline font-medium">
              Email me directly
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
