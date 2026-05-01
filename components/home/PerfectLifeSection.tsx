"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react"

// 6개 개별 피처 (모바일: 하나씩, 데스크톱: 2개씩 묶음)
const allFeatures = [
  {
    num: "01",
    title: "청계 IC 바로 앞,\n과천봉담도시고속화도로로\n강남까지 20분대 생활권",
    description:
      "청계 IC 바로 앞, 과천봉담도시고속화도로\n인접으로 강남까지 20분대 진입.\nGTX-C(예정), 월곶판교선(예정)으로\n더 강력해지는 쾌속 교통망.",
    image: "/images/section/1_1.png",
  },
  {
    num: "02",
    title: "백운호수공원과 백운산,\n모락산으로 둘러싸인\n리조트형 힐링라이프",
    description:
      "백운호수공원, 백운산, 바라산, 모락산이\n감싸 안은 천혜의 자연환경 속 리조트형\n힐링 라이프 구현.",
    image: "/images/section/1_2.png",
  },
  {
    num: "03",
    title: "차로 5분 거리에 만나는\n롯데프리미엄 아울렛, 종합병원,\n도보권 초·중학교 다 갖춘 생활 인프라",
    description:
      "쇼핑, 의료, 교육 시설이 가까이 위치해 생활의\n편리함을 극대화. 자녀의 안전한 통학 환경과\n다양한 문화·여가 시설까지 갖춰져 있어 일상\n에 필요한 모든 요소를 가까운 거리에서 누릴\n수 있는 완성형 인프라 자랑",
    image: "/images/section/2_1.png",
  },
  {
    num: "04",
    title: "GTX-C(2030년 예정),\n월곶판교선(예정), 청계 4차선 확충,\n인덕원 동탄선(예정) 등 어디든 빠른 교통 호재",
    description:
      "다양한 광역 교통망 확충 계획으로 미래 가치\n가 기대되는 핵심 입지. 수도권 주요 지역을 빠\n르게 연결하는 교통 호재는 이동 편의성뿐 아\n니라 성장성과 자산 가치 상승에도 긍정적인\n영향을 미칠 것으로 전망",
    image: "/images/section/2_2.png",
  },
  {
    num: "05",
    title: "남향위주 배치, 59/74 인기 평형\n구성과 혁신적인 4Bay 판상형\n설계로 여유로운 생활의 완성",
    description:
      "채광과 통풍을 극대화한 남향위주 배치로 쾌적한 주거\n환경을 제공, 효율적인 공간 활용과 가족 중심\n의 동선 설계까지 반영되어 실용성과 편안함을\n동시에 만족시키는 공간으로 일상의 만족도를\n한층 높임",
    image: "/images/section/3_1.png",
  },
  {
    num: "06",
    title: "교통·생활·자연 모든 것을\n다 갖춘 의왕 백운밸리\n프리미엄에 오른 마지막 기회",
    description:
      "이미 완성된 인프라와 미래 가치를 동시에\n누릴 수 있는 희소성 높은 기회로, 지금 선택이\n곧 프리미엄으로 이어지는 입지. 살거주는\n물론 투자 관점에서도 높은 만족도를 기대",
    image: "/images/section/3_2.png",
  },
]

// 데스크톱: 2개씩 묶은 3슬라이드
const desktopSlides = [
  { features: [allFeatures[0], allFeatures[1]] },
  { features: [allFeatures[2], allFeatures[3]] },
  { features: [allFeatures[4], allFeatures[5]] },
]

const MOBILE_TOTAL = allFeatures.length   // 6
const DESKTOP_TOTAL = desktopSlides.length // 3

export default function PerfectLifeSection() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const touchStartX = useRef<number>(0)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.35 })
  const premiumY = useTransform(smoothProgress, [0, 1], ["24px", "-24px"])
  const valueY = useTransform(smoothProgress, [0, 1], ["18px", "-18px"])
  const valueOpacity = useTransform(smoothProgress, [0, 0.25, 0.85, 1], [0.35, 1, 1, 0.45])
  const slideTransition = shouldReduceMotion ? { duration: 0 } : { duration: 0.55, ease: "easeOut" as const }
  const cardTransition = shouldReduceMotion ? { duration: 0 } : { duration: 0.62, ease: "easeOut" as const }

  const goToMobileSlide = (idx: number) => {
    setCurrent(Math.max(0, Math.min(idx, MOBILE_TOTAL - 1)))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) < 40) return
    goToMobileSlide(delta > 0 ? current + 1 : current - 1)
  }

  // 모바일 감지
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  // 스크롤 → current 계산 (데스크톱 전용)
  useEffect(() => {
    if (isMobile) return
    const handleScroll = () => {
      const wrapper = wrapperRef.current
      if (!wrapper) return
      const rect = wrapper.getBoundingClientRect()
      const scrolled = -rect.top
      const scrollable = wrapper.offsetHeight - window.innerHeight
      let next = 0
      if (scrollable <= 0 || scrolled <= 0) {
        next = 0
      } else if (scrolled >= scrollable) {
        next = DESKTOP_TOTAL - 1
      } else {
        next = Math.min(Math.floor((scrolled / scrollable) * DESKTOP_TOTAL), DESKTOP_TOTAL - 1)
      }
      setCurrent((prev) => (prev === next ? prev : next))
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobile])

  return (
    <div
      ref={wrapperRef}
      style={{ height: isMobile ? "100vh" : `${DESKTOP_TOTAL * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen bg-white overflow-hidden">

        {/* PREMIUM 워터마크 — 모바일: 카운터 라인, 데스크톱: 우측 상단 */}
        <motion.span
          className="pointer-events-none select-none absolute top-[24vh] lg:top-6 right-0 text-[clamp(48px,7vw,100px)] font-black text-[#f2f2f7] leading-none tracking-tight z-0"
          style={shouldReduceMotion ? undefined : { y: premiumY }}
          aria-hidden="true"
        >
          PREMIUM
        </motion.span>

        {/* VALUE&FAST 워터마크 — 좌측 하단 */}
        <motion.span
          className="pointer-events-none select-none absolute bottom-2 left-0 text-[clamp(44px,7.5vw,110px)] font-black leading-none tracking-tight z-0"
          style={{
            ...(shouldReduceMotion ? {} : { y: valueY, opacity: valueOpacity }),
            background: "linear-gradient(to right, #ADDAE1 0%, #D0D0DA 51%, #F6C6CF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          aria-hidden="true"
        >
          VALUE&amp;FAST
        </motion.span>

        {/* 컨텐츠 영역 */}
        <div className="relative z-10 h-full">
          <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-16 h-full flex flex-col pt-[6vh] lg:pt-[8vh] pb-[4vh] lg:pb-[5vh]">

            {/* ── 상단: 헤딩 ── */}
            <motion.div
              className="mb-4 lg:mb-8"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.45 }}
            >
              <h2 className="text-3xl lg:text-4xl font-black text-black leading-snug">
                모든 것을 다 갖춘<br />PERFECT LIFE의 완성!
              </h2>
            </motion.div>

            {/* ════════════════════════════════════════
                모바일 레이아웃 (lg 미만)
                카운터 인라인 + 단일 카드 전환
            ════════════════════════════════════════ */}
            <div
              className="flex lg:hidden flex-col flex-1 min-h-0"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >

              {/* 모바일 카운터 */}
              <div className="mb-4 shrink-0">
                <div className="relative w-[90px] h-[90px]">
                  <span
                    key={`m-${current}`}
                    className="absolute top-0 left-0 text-[32px] font-black text-black leading-none tabular-nums"
                    style={{ animation: "fadeSlideUp 0.4s ease both" }}
                  >
                    {allFeatures[current]?.num}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 w-[110px] h-px bg-gray-300 -translate-x-1/2 -translate-y-1/2 -rotate-[60deg]"
                  />
                  <span className="absolute bottom-0 right-0 text-[32px] font-bold text-gray-300 leading-none tabular-nums">
                    {String(MOBILE_TOTAL).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* 모바일 슬라이드 (단일 카드) */}
              <div className="relative flex-1 min-h-0 overflow-hidden">
                {allFeatures.map((feature, idx) => {
                  const isActive = idx === current
                  const isPrev = idx < current
                  return (
                    <motion.div
                      key={idx}
                      className="absolute inset-0 flex items-start"
                      initial={false}
                      animate={
                        shouldReduceMotion
                          ? { opacity: isActive ? 1 : 0 }
                          : { x: isActive ? "0%" : isPrev ? "-100%" : "100%", opacity: isActive ? 1 : 0.98 }
                      }
                      transition={{ duration: shouldReduceMotion ? 0 : 0.42, ease: "easeOut" }}
                      style={{ pointerEvents: isActive ? "auto" : "none" }}
                    >
                      {/* 이미지 + 텍스트 세로 배치 */}
                      <div className="flex flex-col w-full">
                        {/* 이미지 */}
                        <motion.div
                          className="relative w-full overflow-hidden rounded-sm shrink-0"
                          style={{ aspectRatio: "4/3", maxHeight: "48vh" }}
                          initial={false}
                          animate={shouldReduceMotion ? { opacity: isActive ? 1 : 0 } : { scale: isActive ? 1 : 0.985 }}
                          transition={cardTransition}
                        >
                          <motion.div
                            className="absolute inset-0"
                            initial={false}
                            animate={shouldReduceMotion ? { scale: 1 } : { scale: isActive ? 1.025 : 1 }}
                            transition={{ duration: shouldReduceMotion ? 0 : 0.85, ease: "easeOut" }}
                          >
                            <Image
                              src={feature.image}
                              alt={feature.title.replace(/\n/g, " ")}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 45vw"
                            />
                          </motion.div>
                        </motion.div>
                        {/* 텍스트 */}
                        <motion.div
                          className="mt-4"
                          initial={false}
                          animate={shouldReduceMotion ? { opacity: isActive ? 1 : 0 } : { opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
                          transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: isActive ? 0.08 : 0, ease: "easeOut" }}
                        >
                          <h3 className="text-[17px] font-bold text-black leading-snug mb-2 whitespace-pre-line">
                            {feature.title}
                          </h3>
                          <p className="text-[13px] text-gray-500 leading-relaxed whitespace-pre-line">
                            {feature.description}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* ════════════════════════════════════════
                데스크톱 레이아웃 (lg 이상)
                좌측 카운터 열 + 우측 2-카드 스태거
            ════════════════════════════════════════ */}
            <div className="hidden lg:flex flex-1 min-h-0 gap-12 items-start">

              {/* 좌측 — 대각선 카운터 */}
              <div className="w-[210px] shrink-0">
                <div className="relative w-[180px] h-[180px]">
                  <span
                    key={`d-${current}`}
                    className="absolute top-0 left-0 text-[68px] font-black text-black leading-none tabular-nums"
                    style={{ animation: "fadeSlideUp 0.4s ease both" }}
                  >
                    {String(current + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 w-[210px] h-px bg-gray-300 -translate-x-1/2 -translate-y-1/2 -rotate-[60deg]"
                  />
                  <span className="absolute bottom-0 right-0 text-[68px] font-bold text-gray-300 leading-none tabular-nums">
                    {String(DESKTOP_TOTAL).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* 우측 — 슬라이드 카드 (스태거 배치) */}
              <div className="flex-1 min-w-0 relative h-full overflow-visible">
                {desktopSlides.map((slide, idx) => {
                  const isActive = idx === current
                  const isPrev = idx < current
                  return (
                    <motion.div
                      key={idx}
                      className="absolute inset-0 flex items-start"
                      initial={false}
                      animate={
                        shouldReduceMotion
                          ? { opacity: isActive ? 1 : 0 }
                          : { opacity: isActive ? 1 : 0, y: isActive ? 0 : isPrev ? -22 : 22 }
                      }
                      transition={slideTransition}
                      style={{ pointerEvents: isActive ? "auto" : "none" }}
                    >
                      <div className="flex gap-28 ml-[32%]">
                        {slide.features.map((feature, fIdx) => (
                          <motion.div
                            key={fIdx}
                            className="flex flex-col w-[260px]"
                            initial={false}
                            animate={
                              shouldReduceMotion
                                ? { opacity: isActive ? 1 : 0 }
                                : { opacity: isActive ? 1 : 0, y: isActive ? 0 : 18, scale: isActive ? 1 : 0.985 }
                            }
                            transition={{ ...cardTransition, delay: isActive && !shouldReduceMotion ? fIdx * 0.1 : 0 }}
                            style={fIdx === 1 ? { marginTop: "clamp(20px, 4vh, 64px)" } : undefined}
                          >
                            {/* 이미지 */}
                            <motion.div
                              className="relative w-[260px] overflow-hidden rounded-sm shrink-0 max-h-[38vh]"
                              style={{ aspectRatio: "23/29" }}
                              initial={false}
                              animate={shouldReduceMotion ? { opacity: isActive ? 1 : 0 } : { opacity: isActive ? 1 : 0.9 }}
                              transition={cardTransition}
                            >
                              <motion.div
                                className="absolute inset-0"
                                initial={false}
                                animate={shouldReduceMotion ? { scale: 1 } : { scale: isActive ? 1.035 : 1 }}
                                transition={{ duration: shouldReduceMotion ? 0 : 0.9, ease: "easeOut" }}
                              >
                                <Image
                                  src={feature.image}
                                  alt={feature.title.replace(/\n/g, " ")}
                                  fill
                                  className="object-cover"
                                  sizes="260px"
                                />
                              </motion.div>
                            </motion.div>
                            {/* 텍스트 */}
                            <motion.div
                              style={{ marginTop: "clamp(8px, 1.4vh, 20px)" }}
                              initial={false}
                              animate={shouldReduceMotion ? { opacity: isActive ? 1 : 0 } : { opacity: isActive ? 1 : 0, y: isActive ? 0 : 12 }}
                              transition={{ duration: shouldReduceMotion ? 0 : 0.48, delay: isActive && !shouldReduceMotion ? 0.12 + fIdx * 0.08 : 0, ease: "easeOut" }}
                            >
                              <h3 className="text-lg font-bold text-black leading-snug mb-1 whitespace-pre-line">
                                {feature.title}
                              </h3>
                              <p className="text-xs text-gray-500 leading-relaxed whitespace-pre-line">
                                {feature.description}
                              </p>
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )
                })}
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
