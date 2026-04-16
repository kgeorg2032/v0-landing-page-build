"use client"

import { useState, useEffect } from "react"
import { CTAButton } from "./CTAButton"
import { CountdownTimer } from "./CountdownTimer"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  onOpenModal: () => void
}

const navItems = [
  { label: "Method", href: "#method" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
]

export function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="font-display text-2xl md:text-3xl text-white tracking-wider">
              VANE
            </span>
            <span className="hidden sm:inline text-white/40 text-sm">
              PERFORMANCE
            </span>
          </div>

          {/* Desktop Navigation - Centered with spacing buffers */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-12 xl:mx-16">
            <div className="flex items-center gap-10 xl:gap-12">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "")
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 whitespace-nowrap",
                      isActive
                        ? "text-accent drop-shadow-[0_0_8px_rgba(204,255,0,0.6)]"
                        : "text-white/50 hover:text-accent hover:drop-shadow-[0_0_8px_rgba(204,255,0,0.4)]"
                    )}
                  >
                    {item.label}
                  </a>
                )
              })}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <CountdownTimer variant="compact" />
            <CTAButton onClick={onOpenModal} size="md">
              Secure Your Spot
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10 bg-[#0a0a0a]/98 backdrop-blur-md">
            <nav className="flex flex-col gap-4 mb-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "")
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "text-sm uppercase tracking-[0.15em] font-medium py-2 px-4 rounded-lg transition-all duration-300",
                      isActive
                        ? "text-accent bg-accent/10 drop-shadow-[0_0_8px_rgba(204,255,0,0.4)]"
                        : "text-white/60 hover:text-accent hover:bg-white/5"
                    )}
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>
            <div className="flex flex-col gap-4 px-4">
              <CountdownTimer variant="compact" className="justify-center" />
              <CTAButton onClick={onOpenModal} size="lg" className="w-full">
                Secure Your Spot
              </CTAButton>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
