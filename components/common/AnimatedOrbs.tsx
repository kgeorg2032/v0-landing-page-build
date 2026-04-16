'use client'

import { useEffect, useState } from 'react'

export function AnimatedOrbs() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          50% { transform: translate(50px, -50px) scale(1.1); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          50% { transform: translate(-60px, 60px) scale(0.9); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          50% { transform: translate(40px, 80px) scale(1.05); }
        }
        
        .orb-1 {
          animation: float-1 20s ease-in-out infinite;
        }
        
        .orb-2 {
          animation: float-2 24s ease-in-out infinite;
          animation-delay: -8s;
        }
        
        .orb-3 {
          animation: float-3 28s ease-in-out infinite;
          animation-delay: -12s;
        }
      `}</style>

      {/* Orb 1 - Top Left */}
      <div
        className="orb-1 absolute top-10 left-10 w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(204, 255, 0, 0.4) 0%, rgba(204, 255, 0, 0.1) 50%, transparent 70%)',
        }}
      />

      {/* Orb 2 - Bottom Right */}
      <div
        className="orb-2 absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(204, 255, 0, 0.3) 0%, rgba(204, 255, 0, 0.05) 50%, transparent 70%)',
        }}
      />

      {/* Orb 3 - Center */}
      <div
        className="orb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(204, 255, 0, 0.2) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
