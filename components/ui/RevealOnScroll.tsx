"use client"

import { useEffect, useRef, ReactNode } from "react"

interface Props {
  children: ReactNode
  className?: string
  delay?: number      // ms
  variant?: "slide" | "fade"
}

export default function RevealOnScroll({ children, className = "", delay = 0, variant = "slide" }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
          timerRef.current = setTimeout(() => {
            el.classList.add("visible")
          }, reduceMotion ? 0 : delay)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [delay])

  const baseClass = variant === "fade" ? "reveal-fade" : "reveal"

  return (
    <div ref={ref} className={`${baseClass} ${className}`}>
      {children}
    </div>
  )
}
