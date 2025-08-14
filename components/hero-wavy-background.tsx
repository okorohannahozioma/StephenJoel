"use client"

export function HeroWavyBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#8b5ef6] opacity-20 animate-wavy-gradient"></div>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wavyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5ef6" />
          </linearGradient>
        </defs>
        <path
          fill="url(#wavyGradient)"
          opacity="0.1"
          d="M0,30 C20,50 40,10 60,30 80,50 100,10 100,30 L100,100 L0,100 Z"
        >
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="M0,30 C20,50 40,10 60,30 80,50 100,10 100,30 L100,100 L0,100 Z;
                    M0,40 C20,20 40,60 60,40 80,20 100,60 100,40 L100,100 L0,100 Z;
                    M0,30 C20,50 40,10 60,30 80,50 100,10 100,30 L100,100 L0,100 Z"
          />
        </path>
        <path
          fill="url(#wavyGradient)"
          opacity="0.05"
          d="M0,40 C20,60 40,20 60,40 80,60 100,20 100,40 L100,100 L0,100 Z"
        >
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="M0,40 C20,60 40,20 60,40 80,60 100,20 100,40 L100,100 L0,100 Z;
                    M0,50 C20,30 40,70 60,50 80,30 100,70 100,50 L100,100 L0,100 Z;
                    M0,40 C20,60 40,20 60,40 80,60 100,20 100,40 L100,100 L0,100 Z"
          />
        </path>
      </svg>
    </div>
  )
}
