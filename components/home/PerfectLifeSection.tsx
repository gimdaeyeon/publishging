"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const slides = [
  {
    num: "01",
    features: [
      {
        title: "청계 IC 바로 앞,\n과천봉담도시고속화도로로\n강남까지 20분대 생활권",
        description:
          "청계 IC 바로 앞, 과천봉담도시고속화도로 인접으로 강남까지 20분대 진입. GTX-C(예정), 월곶판교선(예정)으로 더 강력해지는 폭속 교통망.",
        image: "/images/section/1_1.png",
      },
      {
        title: "백운호수공원과 백운산,\n모락산으로 둘러싸인\n리조트형 힐링라이프",
        description:
          "백운호수공원, 백운산, 바라산, 모락산이 감싸 안은 천혜의 자연환경 속 리조트형 힐링 라이프 구현.",
        image: "/images/section/1_2.png",
      },
    ],
  },
  {
    num: "02",
    features: [
      {
        title: "차로 5분 거리에 만나는\n롯데프리미엄 아울렛, 종합병원,\n도보권 초·중학교 다 갖춘 생활 인프라",
        description:
          "쇼핑, 의료, 교육 시설이 가까이 위치해 생활의 편리함을 극대화. 자녀의 안전한 통학 환경과 다양한 문화·여가 시설까지 갖추고 있어 일상의 활달한 요소들 가까운 거리에서 누릴 수 있는 완성형 인프라 자랑.",
        image: "/images/section/2_1.png",
      },
      {
        title: "GTX-C(2030년 예정),\n월곶판교선(예정), 청계 4차선 확충,\n인덕원 동탄선(예정) 등 어디든 빠른 교통 호재",
        description:
          "다양한 광역 교통망 확충 계획으로 미래 가치가 가파르게 핵심 입지. 수도권 주요 지역을 빠르게 연결하는 교통 호재는 이동 편리성뿐 아니라 성장성과 자산 가치 상승에도 긍정적인 영향을 미칠 것으로 전망.",
        image: "/images/section/2_2.png",
      },
    ],
  },
  {
    num: "03",
    features: [
      {
        title: "남향위주 배치, 59/74 인기 평형\n구성과 혁신적인 4Bay 판상형\n설계로 여유로운 생활의 완성",
        description:
          "채광과 통풍을 극대화한 남향위주 배치로 쾌적한 주거환경 제공. 효율적인 공간 활용과 가족 중심의 동선 설계까지 반영되어 실용성과 편안함을 동시에 만족시키는 공간으로 양방의 만족도를 최대 높임.",
        image: "/images/section/3_1.png",
      },
      {
        title: "교통·생활·자연 모든 것을\n다 갖춘 의왕 백운밸리\n프리미엄에 오른 마지막 기회",
        description:
          "이미 무성한 인프라와 미래 가치를 동시에 누릴 수 있는 희소성 높은 기회. 지금 상태이 곧 프리미엄으로 이어지는 입지. 살거주는 물론 투자 관점에서도 높은 만족도를 기대.",
        image: "/images/section/3_2.png",
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

        {/* PREMIUM 워터마크 — 우측 상단 */}
        <span
          className="pointer-events-none select-none absolute top-6 right-0 text-[clamp(48px,7vw,100px)] font-black text-[#f2f2f7] leading-none tracking-tight z-0"
          aria-hidden="true"
        >
          PREMIUM
        </span>

        {/* VALUE&FAST 워터마크 — 좌측 하단 */}
        <span
          className="pointer-events-none select-none absolute bottom-2 left-0 text-[clamp(44px,7.5vw,110px)] font-black leading-none tracking-tight z-0"
          style={{
            background: "linear-gradient(to right, #ADDAE1 0%, #D0D0DA 51%, #F6C6CF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          aria-hidden="true"
        >
          VALUE&amp;FAST
        </span>

        {/* 컨텐츠 영역 */}
        <div className="relative z-10 h-full">
          <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-16 h-full flex flex-col pt-[7vh] lg:pt-[10vh] pb-[6vh] lg:pb-[8vh]">

            {/* ── 상단: 헤딩 ── */}
            <div className="mb-6 lg:mb-8">
              <h2 className="text-3xl lg:text-4xl font-black text-black leading-snug">
                모든 것을 다 갖춘<br />PERFECT LIFE의 완성!
              </h2>
            </div>

            {/* ── 본문: 좌측 카운터 + 우측 스태거 카드 ── */}
            <div className="flex-1 min-h-0 flex gap-6 lg:gap-12 items-start">

              {/* 좌측 — 대각선 카운터 */}
              <div className="w-[150px] lg:w-[180px] shrink-0">
                <div className="relative w-[120px] h-[95px] lg:w-[150px] lg:h-[115px]">
                  <span
                    key={current}
                    className="absolute top-0 left-0 text-[38px] lg:text-[48px] font-black text-black leading-none tabular-nums"
                    style={{ animation: "fadeSlideUp 0.4s ease both" }}
                  >
                    {slides[current].num}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute left-[34px] bottom-[10px] lg:left-[42px] lg:bottom-[12px] w-[70px] lg:w-[100px] h-px bg-gray-300 origin-left -rotate-[50deg]"
                  />
                  <span className="absolute bottom-0 right-0 text-[38px] lg:text-[48px] font-bold text-gray-300 leading-none tabular-nums">
                    {String(TOTAL).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* 우측 — 슬라이드 카드 (스태거 배치) */}
              <div className="flex-1 min-w-0 relative h-full overflow-hidden">
                {slides.map((slide, idx) => {
                  const isActive = idx === current
                  const isPrev = idx < current
                  return (
                    <div
                      key={idx}
                      className="absolute inset-0 flex items-start"
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
                      <div className="flex gap-24 lg:gap-28 ml-[32%]">
                        {slide.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex flex-col w-[185px] lg:w-[260px]"
                            style={fIdx === 1 ? { marginTop: "clamp(28px, 6vh, 112px)" } : undefined}
                          >
                            {/* 이미지 */}
                            <div
                              className="relative w-[185px] lg:w-[260px] overflow-hidden rounded-sm shrink-0 max-h-[38vh] lg:max-h-[52vh]"
                              style={{ aspectRatio: "23/29" }}
                            >
                              <Image
                                src={feature.image}
                                alt={feature.title.replace(/\n/g, " ")}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 185px, 260px"
                              />
                            </div>
                            {/* 텍스트 */}
                            <div style={{ marginTop: "clamp(10px, 2vh, 40px)" }}>
                              <h3 className="text-base lg:text-lg font-bold text-black leading-snug mb-1 whitespace-pre-line">
                                {feature.title}
                              </h3>
                              <p className="text-xs text-gray-500 leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
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
