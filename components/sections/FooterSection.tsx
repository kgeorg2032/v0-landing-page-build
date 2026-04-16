"use client"

import { motion } from "framer-motion"
import { CTAButton } from "@/components/common/CTAButton"
import { Instagram, Linkedin, Youtube } from "lucide-react"

interface FooterSectionProps {
  onOpenModal: () => void
}

const footerLinks = {
  about: [
    { label: "About Jaxson", href: "#" },
    { label: "The Method", href: "#" },
    { label: "Success Stories", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Disclaimer", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function FooterSection({ onOpenModal }: FooterSectionProps) {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      {/* Final CTA Section */}
      <div className="py-20 md:py-28 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
              READY TO START?
            </h2>
            <p className="text-white/50 text-lg mt-4">
              The clock is ticking. Your future self is waiting.
            </p>
            <div className="mt-8">
              <CTAButton onClick={onOpenModal} size="xl">
                Secure Your Spot - Limited Time
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl text-white tracking-wider">
                  VANE
                </span>
                <span className="text-white/40 text-sm">
                  PERFORMANCE
                </span>
              </div>
              <p className="text-white/40 text-sm mt-4 leading-relaxed">
                Elite personal coaching for ambitious professionals who refuse to settle.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/50 hover:text-accent hover:border-accent/30 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* About Links */}
            <div>
              <h3 className="font-display text-sm text-white uppercase tracking-[0.15em] mb-4">
                About
              </h3>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/40 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-display text-sm text-white uppercase tracking-[0.15em] mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/40 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display text-sm text-white uppercase tracking-[0.15em] mb-4">
                Contact
              </h3>
              <p className="text-white/40 text-sm">
                Questions? Reach out directly:
              </p>
              <a
                href="mailto:coach@vaneperformance.com"
                className="text-accent hover:underline text-sm mt-2 inline-block font-medium"
              >
                coach@vaneperformance.com
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/5 text-center">
            <p className="text-white/30 text-sm">
              &copy; {new Date().getFullYear()} VANE Performance. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
