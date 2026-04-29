"use client"

import { useEffect, useRef, useState } from "react"

const slides = [
  {
    num: "01",
    features: [
      {
        badge: { text: "청계IC\nCheonggye", color: "bg-[#4a7c59] text-white" },
        title: "청계 IC 바로 앞,\n과천봉담도시고속화도로로\n강남까지 20분대 생활권",
        description:
          "청계 IC 바로 앞, 과천봉담도시고속화도로 인접으로 강남까지 20분대 진입. GTX-C(예정), 월곶판교선(예정)으로 더 강력해지는 폭속 교통망.",
        imageLabel: "slide1-ic.jpg",
      },
      {
        badge: null,
        title: "백운호수공원과 백운산,\n모락산으로 둘러싸인\n리조트형 힐링라이프",
        description:
          "백운호수공원, 백운산, 바라산, 도막산이 감싸 안은 천혜의 자연환경 속 리조트형 힐링 라이프 구현.",
        imageLabel: "slide1-park.jpg",
      },
    ],
  },
  {
    num: "02",
    features: [
      {
        badge: null,
        title: "차로 5분 거리에 만나는\n롯데프리미엄 아울렛, 종합병원,\n도보권 초·중학교 다 갖춘 생활 인프라",
        description:
          "쇼핑, 의료, 교육 시설이 가까이 위치해 생활의 편리함을 극대화. 자녀의 안전한 통학 환경과 다양한 문화·여가 시설까지 갖추고 있어 일상의 활달한 요소들 가까운 거리에서 누릴 수 있는 완성형 인프라 자랑.",
        imageLabel: "slide2-mall.jpg",
      },
      {
        badge: null,
        title: "GTX-C(2030년 예정),\n월곶판교선(예정), 청계 4차선 확충,\n인덕원 동탄선(예정) 등 어디든 빠른 교통 호재",
        description:
          "다양한 광역 교통망 확충 계획으로 미래 가치가 가파르게 핵심 입지. 수도권 주요 지역을 빠르게 연결하는 교통 호재는 이동 편리성뿐 아니라 성장성과 자산 가치 상승에도 긍정적인 영향을 미칠 것으로 전망.",
        imageLabel: "slide2-gtx.jpg",
      },
    ],
  },
  {
    num: "03",
    features: [
      {
        badge: null,
        title: "남향위주 배치, 59/74 인기 평형\n구성과 혁신적인 4Bay 판상형\n설계로 여유로운 생활의 완성",
        description:
          "채광과 통풍을 극대화한 남향위주 배치로 쾌적한 주거환경 제공. 효율적인 공간 활용과 가족 중심의 동선 설계까지 반영되어 실용성과 편안함을 동시에 만족시키는 공간으로 양방의 만족도를 최대 높임.",
        imageLabel: "slide3-interior.jpg",
      },
      {
        badge: null,
        title: "교통·생활·자연 모든 것을\n다 갖춘 의왕 백운밸리\n프리미엄에 오른 마지막 기회",
        description:
          "이미 무성한 인프라와 미래 가치를 동시에 누릴 수 있는 희소성 높은 기회. 지금 상태이 곧 프리미엄으로 이어지는 입지. 살거주는 물론 투자 관점에서도 높은 만족도를 기대.",
        imageLabel: "slide3-aerial.jpg",
      },
    ],
  },
]

const TOTAL = slides.length

export default function PerfectLifeSection() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = wrapperRef.current
      if (!wrapper) return
      const rect = wrapper.getBoundingClientRect()
      const scrolled = -rect.top
      const scrollable = wrapper.offsetHeight - window.innerHeight
      if (scrolled <= 0) { setCurrent(0); return }
      if (scrolled >= scrollable) { setCurrent(TOTAL - 1); return }
      setCurrent(Math.min(Math.floor((scrolled / scrollable) * TOTAL), TOTAL - 1))
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const goToSlide = (idx: number) => {
    const wrapper = wrapperRef.current
    if (!wrapper) return
    const scrollable = wrapper.offsetHeight - window.innerHeight
    const target = wrapper.offsetTop + (idx / TOTAL) * scrollable
    window.scrollTo({ top: target, behavior: "smooth" })
  }

  return (
    <div ref={wrapperRef} style={{ height: `${TOTAL * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen bg-white overflow-hidden">

        {/* PREMIUM 워터마크 */}
        <span
          className="pointer-events-none select-none absolute -top-4 right-0 text-[clamp(80px,14vw,180px)] font-black text-[#f5d5d5]/40 leading-none tracking-tight z-0"
          aria-hidden="true"
        >
          PREMIUM
        </span>

        {/* 전체 컨텐츠 영역 — 수직 중앙 정렬 */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-16 pt-20">
            <div className="flex gap-8 lg:gap-14 items-start">

              {/* ── 왼쪽: 헤딩 + 카운터 + 화살표 ── */}
              <div className="w-[180px] lg:w-[220px] shrink-0 flex flex-col">
                <p className="text-gray-500 text-sm font-medium mb-1.5">모든 것을 다 갖춘</p>
                <h2 className="text-xl lg:text-2xl font-black text-[#1a2d5a] leading-snug mb-8">
                  PERFECT LIFE의<br />완성!
                </h2>

                {/* 카운터 */}
                <div className="flex items-baseline gap-0.5 mb-6">
                  <span
                    key={current}
                    className="text-[56px] lg:text-[72px] font-black text-[#1a2d5a] leading-none tabular-nums"
                    style={{ animation: "fadeSlideUp 0.4s ease both" }}
                  >
                    {slides[current].num}
                  </span>
                  <span className="text-lg lg:text-xl font-bold text-gray-300 leading-none ml-1">
                    /{String(TOTAL).padStart(2, "0")}
                  </span>
                </div>

                {/* 화살표 네비게이션 */}
                <div className="flex gap-3">
                  <button
                    onClick={() => goToSlide(Math.max(0, current - 1))}
                    disabled={current === 0}
                    className="w-10 h-10 rounded-full border-2 border-[#1a2d5a] text-[#1a2d5a] flex items-center justify-center hover:bg-[#1a2d5a] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="이전 슬라이드"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => goToSlide(Math.min(TOTAL - 1, current + 1))}
                    disabled={current === TOTAL - 1}
                    className="w-10 h-10 rounded-full border-2 border-[#1a2d5a] text-[#1a2d5a] flex items-center justify-center hover:bg-[#1a2d5a] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="다음 슬라이드"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* ── 오른쪽: 슬라이드 카드 ── */}
              <div className="flex-1 min-w-0 relative" style={{ height: "min(64vh, 540px)" }}>
                {slides.map((slide, idx) => {
                  const isActive = idx === current
                  const isPrev = idx < current
                  return (
                    <div
                      key={idx}
                      className="absolute inset-0 grid grid-cols-2 gap-5"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive
                          ? "translateY(0px)"
                          : isPrev
                          ? "translateY(-20px)"
                          : "translateY(20px)",
                        transition: "opacity 0.55s ease, transform 0.55s ease",
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      {slide.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex flex-col h-full">
                          {/* 이미지 */}
                          <div className="relative flex-1 min-h-0 overflow-hidden bg-gray-200 rounded-sm flex items-center justify-center">
                            <span className="text-gray-400 text-xs px-4 text-center">
                              {feature.imageLabel}
                            </span>
                            {feature.badge && (
                              <div
                                className={`absolute top-3 left-3 ${feature.badge.color} text-xs font-bold px-2.5 py-1.5 rounded leading-snug whitespace-pre-line`}
                              >
                                {feature.badge.text}
                              </div>
                            )}
                          </div>
                          {/* 텍스트 */}
                          <div className="mt-3 shrink-0">
                            <h3 className="text-sm lg:text-[15px] font-bold text-[#1a2d5a] leading-snug mb-1.5 whitespace-pre-line">
                              {feature.title}
                            </h3>
                            <p className="text-xs lg:text-sm text-gray-500 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                })}
              </div>

            </div>
          </div>
        </div>

        {/* VALUE&FAST 워터마크 */}
        <span
          className="pointer-events-none select-none absolute -bottom-6 left-0 text-[clamp(60px,10vw,140px)] font-black text-[#c8f0ed]/60 leading-none tracking-tight z-0"
          aria-hidden="true"
        >
          VALUE&amp;FAST
        </span>
      </div>
    </div>
  )
}
