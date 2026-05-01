"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import hero_bg2 from "@/public/images/hero-bg2.png"

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], ["0px", "-54px"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0.28])

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen min-h-[720px] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image src={hero_bg2} alt="" fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 bg-black/5" aria-hidden="true" />

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-[1400px] mx-auto px-20 lg:px-28 w-full pt-[80px]"
        style={shouldReduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
      >

        {/* "6월 오픈예정" */}
        <div
          className="inline-block mb-8"
          style={{ animation: "fadeSlideUpLarge 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both" }}
        >
          <span className="text-[#ffdbec] text-xl sm:text-2xl font-semibold tracking-wide border-b-2 border-[#ffdbec] pb-1">
            6월 오픈예정
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-white text-5xl sm:text-6xl lg:text-[88px] leading-[1.1] tracking-tight mb-6"
          style={{ animation: "fadeSlideUpLarge 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s both" }}
        >
          <span className="font-thin">더 빠를 </span>
          <span className="font-extrabold">강남</span>
          <br />
          <span className="font-thin">더 누릴 </span>
          <span className="font-extrabold">가치</span>
        </h1>

        {/* Sub-brand */}
        <p
          className="text-white text-xl sm:text-2xl mb-12"
          style={{ animation: "fadeSlideUpLarge 0.8s cubic-bezier(0.22,1,0.36,1) 0.5s both" }}
        >
          <span className="font-light">백운밸리 </span>
          <span className="font-bold">리젠시빌 란트</span>
        </p>

        {/* CTA */}
        <div style={{ animation: "fadeSlideUpLarge 0.8s cubic-bezier(0.22,1,0.36,1) 0.7s both" }}>
          <Link
            href="/business"
            className="border-2 border-white inline-flex items-center gap-4 bg-white/80 text-gray-800 font-medium px-8 py-3.5 hover:bg-white/80 transition-colors text-sm tracking-wider"
          >
            About <span className="font-bold">RANTT</span>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
