"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 md:py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white">
            READY TO TRANSFORM?
          </h2>
          <p className="text-white/50 mt-4 max-w-md mx-auto">
            Take the first step. Apply now and let&apos;s discuss how the Jaxson Method can work for you.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.3)]"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Application Received</h3>
                <p className="text-white/50">
                  Thank you for applying. I&apos;ll review your information and get back to you within 24-48 hours.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className={cn(
                      "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10",
                      "text-white placeholder:text-white/30",
                      "focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30",
                      "transition-all duration-300"
                    )}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={cn(
                      "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10",
                      "text-white placeholder:text-white/30",
                      "focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30",
                      "transition-all duration-300"
                    )}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your goals..."
                    className={cn(
                      "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10",
                      "text-white placeholder:text-white/30 resize-none",
                      "focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30",
                      "transition-all duration-300"
                    )}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full flex items-center justify-center gap-2",
                    "bg-accent text-background font-bold py-4 px-6 rounded-lg",
                    "hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] hover:scale-[1.02]",
                    "active:scale-[0.98] transition-all duration-300",
                    "disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Apply Now</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
