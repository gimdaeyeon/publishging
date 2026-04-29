import Link from "next/link"
import Image from "next/image"
import hero_bg from "@/public/images/hero-bg.png"
import hero_bg2 from "@/public/images/hero-bg2.png"

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[720px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        {/*<Image src={hero_bg} alt="" fill className="object-cover" priority />*/}
        <Image src={hero_bg2} alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Main content (좌측 정렬) */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-20 lg:px-28 w-full pt-[80px]">
        {/* "6월 오픈예정" — 코랄 텍스트 + 밑줄 */}
        <div className="inline-block mb-8">
          <span className="text-[#f4b6b0] text-xl sm:text-2xl font-semibold tracking-wide border-b-2 border-[#f4b6b0] pb-1">
            6월 오픈예정
          </span>
        </div>

        {/* Headline — 두 가지 굵기 혼합 */}
        <h1 className="text-white text-5xl sm:text-6xl lg:text-[88px] leading-[1.1] tracking-tight mb-6">
          <span className="font-thin">더 빠를 </span>
          <span className="font-extrabold">강남</span>
          <br />
          <span className="font-thin">더 누릴 </span>
          <span className="font-extrabold">가치</span>
        </h1>

        {/* Sub-brand */}
        <p className="text-white text-xl sm:text-2xl mb-12">
          <span className="font-light">백운밸리 </span>
          <span className="font-bold">리젠시빌 란트</span>
        </p>

        {/* CTA — 반투명 흰 배경 + 어두운 텍스트 */}
        <Link
          href="/business"
          className="inline-flex items-center gap-4 bg-white/60 text-gray-800 font-medium px-8 py-3.5 hover:bg-white/80 transition-colors text-sm tracking-wider"
        >
          About <span className="font-bold">RANTT</span>
        </Link>
      </div>
    </section>
  )
}
