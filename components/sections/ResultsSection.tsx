"use client"

import { motion } from "framer-motion"
import { Quote, TrendingUp } from "lucide-react"

const testimonials = [
  {
    name: "Marcus T.",
    role: "Tech Executive, 42",
    result: "+18 lbs muscle, -12% body fat",
    quote: "I tried everything before finding Jaxson. 12 weeks later, I'm in the best shape of my life. The method works.",
    duration: "12 weeks",
  },
  {
    name: "Sarah K.",
    role: "Entrepreneur, 35",
    result: "-22 lbs, gained confidence",
    quote: "Finally a program that fits my insane schedule. Jaxson understood my life and designed around it.",
    duration: "16 weeks",
  },
  {
    name: "David L.",
    role: "Finance Director, 48",
    result: "Doubled strength, zero injuries",
    quote: "At 48, I was skeptical. Now I'm lifting more than I did at 25. The science-based approach made all the difference.",
    duration: "20 weeks",
  },
  {
    name: "Priya M.",
    role: "Surgeon, 39",
    result: "Marathon ready, leaner than ever",
    quote: "Between 60-hour weeks and family, I had zero time. Jaxson found a way. I just ran my first marathon.",
    duration: "24 weeks",
  },
]

const stats = [
  { value: "500+", label: "Transformations" },
  { value: "94%", label: "Goal Achievement" },
  { value: "4.9", label: "Client Rating" },
]

export function ResultsSection() {
  return (
    <section id="results" className="py-24 md:py-32 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px]" />
      
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
            Real People, Real Results
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mt-4">
            RESULTS SPEAK FOR THEMSELVES
          </h2>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-16 max-w-2xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 glass-card rounded-xl">
              <div className="font-display text-3xl md:text-5xl text-accent drop-shadow-[0_0_15px_rgba(204,255,0,0.5)]">
                {stat.value}
              </div>
              <div className="text-sm text-white/50 mt-2 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 border border-white/5 hover:border-accent/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(204,255,0,0.1)]"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-accent/40" />
              
              {/* Quote */}
              <p className="text-white/80 mt-4 leading-relaxed text-lg">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Result Badge */}
              <div className="flex items-center gap-2 mt-5 px-4 py-2 bg-accent/10 rounded-lg w-fit border border-accent/20">
                <TrendingUp className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-accent">
                  {testimonial.result}
                </span>
              </div>

              {/* Author */}
              <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/50">{testimonial.role}</div>
                </div>
                <div className="text-sm text-accent/70 font-medium">
                  {testimonial.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
