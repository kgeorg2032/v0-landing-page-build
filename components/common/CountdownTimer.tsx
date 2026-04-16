"use client"

import { useCountdown, getLaunchDate } from "@/hooks/useCountdown"
import { cn } from "@/lib/utils"
import { useMemo } from "react"

interface CountdownTimerProps {
  className?: string
  variant?: "default" | "compact"
}

export function CountdownTimer({ className, variant = "default" }: CountdownTimerProps) {
  const launchDate = useMemo(() => getLaunchDate(), [])
  const { days, hours, minutes, seconds, isExpired } = useCountdown(launchDate)

  if (isExpired) {
    return (
      <div className={cn("text-accent font-display text-xl", className)}>
        OFFER EXPIRED
      </div>
    )
  }

  const timeUnits = [
    { value: days, label: "DAYS" },
    { value: hours, label: "HRS" },
    { value: minutes, label: "MIN" },
    { value: seconds, label: "SEC" },
  ]

  if (variant === "compact") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="font-display text-accent text-lg tabular-nums drop-shadow-[0_0_8px_rgba(204,255,0,0.5)]">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="text-white/40 text-xs">{unit.label}</span>
            </div>
            {index < timeUnits.length - 1 && (
              <span className="text-accent/30">:</span>
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div
      className={cn(
        "flex items-center gap-3 px-5 py-4 rounded-xl",
        "glass-card border border-accent/30",
        "shadow-[0_0_30px_rgba(204,255,0,0.15)]",
        className
      )}
    >
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <span className="font-display text-accent text-2xl md:text-3xl tabular-nums leading-none drop-shadow-[0_0_10px_rgba(204,255,0,0.5)]">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="text-white/40 text-[10px] md:text-xs mt-1 uppercase tracking-wider">
              {unit.label}
            </span>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="text-accent/20 text-xl font-light">|</span>
          )}
        </div>
      ))}
    </div>
  )
}
