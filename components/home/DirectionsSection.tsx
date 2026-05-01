"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"

export default function DirectionsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const revealedRef = useRef(false)
  const [isRevealed, setIsRevealed] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const patternY = useTransform(scrollYProgress, [0, 1], ["-18px", "18px"])
  const shouldReveal = shouldReduceMotion || isRevealed
  const revealHidden = shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }
  const revealVisible = { opacity: 1, y: 0 }

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let frame = 0
    const reveal = () => {
      if (revealedRef.current) return
      revealedRef.current = true
      setIsRevealed(true)
    }

    const revealIfNearViewport = () => {
      const rect = section.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      if (rect.top < viewportHeight * 0.9 && rect.bottom > viewportHeight * 0.08) {
        reveal()
      }
    }

    const requestRevealCheck = () => {
      if (frame) cancelAnimationFrame(frame)
      frame = requestAnimationFrame(revealIfNearViewport)
    }

    if (shouldReduceMotion) {
      frame = requestAnimationFrame(reveal)
      return () => cancelAnimationFrame(frame)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal()
      },
      { threshold: 0.01 }
    )

    observer.observe(section)
    window.addEventListener("scroll", requestRevealCheck, { passive: true })
    window.addEventListener("resize", requestRevealCheck)
    requestRevealCheck()
    const fallbackTimer = window.setTimeout(reveal, 1200)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", requestRevealCheck)
      window.removeEventListener("resize", requestRevealCheck)
      if (frame) cancelAnimationFrame(frame)
      clearTimeout(fallbackTimer)
    }
  }, [shouldReduceMotion])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-5 py-[40px] sm:py-16 lg:min-h-0 lg:py-[64px]"
    >
      <motion.div
        className="absolute inset-0 bg-[url('/images/pattern.png')] bg-[length:1440px_692px] bg-repeat bg-center"
        style={shouldReduceMotion ? undefined : { y: patternY }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1472px]">
        <motion.div
          className="mb-[28px] text-center sm:mb-[34px]"
          initial={revealHidden}
          animate={shouldReveal ? revealVisible : revealHidden}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <h2 className="mb-[18px] text-[38px] font-black leading-none text-black sm:text-[48px] lg:text-[50px]">
            오시는 길
          </h2>
          <p className="text-[18px] font-black leading-[1.35] text-black sm:text-[24px]">
            더 빠른 강남, 더 깊은 자연. 의왕 백운밸리의 중심
          </p>
        </motion.div>

        <motion.div
          className="mb-[32px] space-y-[10px] text-center sm:mb-[26px]"
          initial={revealHidden}
          animate={shouldReveal ? revealVisible : revealHidden}
          transition={{ duration: 0.65, delay: shouldReduceMotion ? 0 : 0.12, ease: "easeOut" }}
        >
          <p className="text-[18px] font-bold leading-[1.4] text-[#6d6d6d] sm:text-[22px]">
            <span className="font-black">견본주택</span> 경기도 의왕시 학의동 1181번지
          </p>
          <p className="text-[18px] font-bold leading-[1.4] text-[#6d6d6d] sm:text-[22px]">
            <span className="font-black">현장</span> 경기도 의왕시 백운밸리 A 1BL
          </p>
        </motion.div>

        <motion.div
          className="mx-auto h-[280px] w-full max-w-[856px] overflow-hidden bg-white px-0 py-4 shadow-[0_0_12px_rgba(0,0,0,0.04)] sm:h-[393px] sm:py-6"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 36, clipPath: "inset(10% 0% 0% 0%)" }}
          animate={
            shouldReveal
              ? { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }
              : { opacity: 0, y: 36, clipPath: "inset(10% 0% 0% 0%)" }
          }
          transition={{ duration: 0.75, delay: shouldReduceMotion ? 0 : 0.22, ease: "easeOut" }}
        >
          <div className="relative h-full w-full">
            <motion.div
              className="absolute inset-0"
              initial={false}
              animate={shouldReveal && !shouldReduceMotion ? { scale: 1.025 } : { scale: 1 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            >
              <Image
                src="/images/map.png"
                alt="견본주택 및 현장 위치 안내 지도"
                fill
                sizes="(max-width: 900px) calc(100vw - 40px), 856px"
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
