"use client"

import { cn } from "@/lib/utils"
import { type ButtonHTMLAttributes, forwardRef } from "react"

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg" | "xl"
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "font-display uppercase tracking-wider transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#0a0a0a]",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          // Variants
          variant === "primary" && [
            "bg-accent text-[#0a0a0a] font-bold",
            "hover:bg-[#d9ff33] hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] hover:scale-[1.02]",
            "active:bg-[#b3e600] active:scale-[0.98]",
          ],
          variant === "secondary" && [
            "bg-white/5 text-white border border-white/10",
            "hover:bg-white/10 hover:border-accent/50",
            "active:bg-white/5",
          ],
          variant === "outline" && [
            "bg-transparent text-accent border-2 border-accent",
            "hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(204,255,0,0.3)]",
            "active:bg-accent/20",
          ],
          // Sizes
          size === "sm" && "px-4 py-2 text-sm rounded-md",
          size === "md" && "px-6 py-3 text-base rounded-lg",
          size === "lg" && "px-8 py-4 text-lg rounded-lg",
          size === "xl" && "px-10 py-5 text-xl rounded-xl",
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

CTAButton.displayName = "CTAButton"

export { CTAButton }
