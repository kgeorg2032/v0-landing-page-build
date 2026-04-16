"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { CTAButton } from "./CTAButton"
import { Check, Shield } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface PaymentModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PaymentModal({ open, onOpenChange }: PaymentModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<"full" | "installment">("full")

  const plans = {
    full: {
      price: "$997",
      description: "One-time payment",
      savings: "Save $128",
    },
    installment: {
      price: "3x $375",
      description: "Payment plan",
      total: "$1,125 total",
    },
  }

  const features = [
    "12-week personalized program",
    "Weekly 1-on-1 coaching calls",
    "Custom nutrition plan",
    "24/7 messaging support",
    "Progress tracking dashboard",
    "Lifetime access to resources",
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0f0f0f] border-white/10 max-w-lg p-0 gap-0 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        {/* Header */}
        <DialogHeader className="p-6 pb-4 border-b border-white/10">
          <DialogTitle className="font-display text-2xl text-white">
            SECURE YOUR SPOT
          </DialogTitle>
          <DialogDescription className="text-white/50">
            Limited to 50 clients this launch
          </DialogDescription>
        </DialogHeader>

        {/* Plan Selection */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setSelectedPlan("full")}
              className={cn(
                "p-4 rounded-xl transition-all text-left glass-card",
                selectedPlan === "full"
                  ? "border-2 border-accent bg-accent/10 shadow-[0_0_20px_rgba(204,255,0,0.2)]"
                  : "border border-white/10 hover:border-accent/50"
              )}
            >
              <div className="font-display text-xl text-white">{plans.full.price}</div>
              <div className="text-sm text-white/50">{plans.full.description}</div>
              <div className="text-xs text-accent mt-1 font-medium">{plans.full.savings}</div>
            </button>
            <button
              onClick={() => setSelectedPlan("installment")}
              className={cn(
                "p-4 rounded-xl transition-all text-left glass-card",
                selectedPlan === "installment"
                  ? "border-2 border-accent bg-accent/10 shadow-[0_0_20px_rgba(204,255,0,0.2)]"
                  : "border border-white/10 hover:border-accent/50"
              )}
            >
              <div className="font-display text-xl text-white">{plans.installment.price}</div>
              <div className="text-sm text-white/50">{plans.installment.description}</div>
              <div className="text-xs text-white/40 mt-1">{plans.installment.total}</div>
            </button>
          </div>

          {/* Features List */}
          <div className="space-y-3 pt-4">
            <p className="text-sm font-medium text-white mb-3">What&apos;s included:</p>
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3 text-accent" />
                </div>
                <span className="text-sm text-white/70">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <CTAButton size="lg" className="w-full mt-6">
            Complete Purchase
          </CTAButton>

          {/* Guarantee */}
          <div className="flex items-center justify-center gap-2 pt-4 text-sm text-white/50">
            <Shield className="h-4 w-4 text-accent" />
            <span>30-day money-back guarantee</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
