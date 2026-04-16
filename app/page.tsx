"use client"

import { useState } from "react"
import { Header } from "@/components/common/Header"
import { PaymentModal } from "@/components/common/PaymentModal"
import { HeroSection } from "@/components/sections/HeroSection"
import { MethodSection } from "@/components/sections/MethodSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { ResultsSection } from "@/components/sections/ResultsSection"
import { PricingSection } from "@/components/sections/PricingSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { CTASection } from "@/components/sections/CTASection"
import { FooterSection } from "@/components/sections/FooterSection"

export default function VanePerformancePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      {/* Sticky Header */}
      <Header onOpenModal={openModal} />

      {/* Main Content */}
      <main>
        {/* Hero Section - CTA #1 */}
        <HeroSection onOpenModal={openModal} />

        {/* The Jaxson Method - CTA #2 */}
        <MethodSection onOpenModal={openModal} />

        {/* Program Features */}
        <FeaturesSection />

        {/* Results & Social Proof */}
        <ResultsSection />

        {/* Pricing - CTA #3 */}
        <PricingSection onOpenModal={openModal} />

        {/* FAQ */}
        <FAQSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Final CTA Section */}
        <CTASection onOpenModal={openModal} />

        {/* Footer */}
        <FooterSection onOpenModal={openModal} />
      </main>

      {/* Payment Modal */}
      <PaymentModal open={isModalOpen} onOpenChange={closeModal} />
    </>
  )
}
