"use client"

import { useEffect, useRef, useState } from "react"

interface NumberCounterProps {
  target: number
  duration?: number // in milliseconds
  suffix?: string
}

export function NumberCounter({ target, duration = 2000, suffix = "" }: NumberCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const animationFrameId = useRef<number | null>(null)
  const startTime = useRef<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startTime.current) {
            startTime.current = performance.now()
            const animate = (currentTime: number) => {
              const progress = Math.min((currentTime - (startTime.current || 0)) / duration, 1)
              setCount(Math.floor(progress * target))

              if (progress < 1) {
                animationFrameId.current = requestAnimationFrame(animate)
              } else {
                setCount(target) // Ensure it reaches the exact target
              }
            }
            animationFrameId.current = requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.5 }, // Trigger when 50% of the component is visible
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [target, duration])

  return (
    <span ref={ref} className="text-gradient-primary">
      {count}
      {suffix}
    </span>
  )
}
