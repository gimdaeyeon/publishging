import Image from "next/image"

export default function DirectionsSection() {
  return (
    <section className="bg-white bg-[url('/images/pattern.png')] bg-[length:1440px_692px] bg-repeat bg-center px-5 py-[40px] sm:py-16 lg:min-h-0 lg:py-[64px]">
      <div className="relative z-10 mx-auto max-w-[1472px]">
        <div className="mb-[28px] text-center sm:mb-[34px]">
          <h2 className="mb-[18px] text-[38px] font-black leading-none text-black sm:text-[48px] lg:text-[50px]">
            오시는 길
          </h2>
          <p className="text-[18px] font-black leading-[1.35] text-black sm:text-[24px]">
            더 빠른 강남, 더 깊은 자연. 의왕 백운밸리의 중심
          </p>
        </div>

        <div className="mb-[32px] space-y-[10px] text-center sm:mb-[26px]">
          <p className="text-[18px] font-bold leading-[1.4] text-[#6d6d6d] sm:text-[22px]">
            <span className="font-black">견본주택</span> 경기도 의왕시 학의동 1181번지
          </p>
          <p className="text-[18px] font-bold leading-[1.4] text-[#6d6d6d] sm:text-[22px]">
            <span className="font-black">현장</span> 경기도 의왕시 백운밸리 A 1BL
          </p>
        </div>

        <div className="mx-auto h-[280px] w-full max-w-[856px] overflow-hidden bg-white px-0 py-4 shadow-[0_0_12px_rgba(0,0,0,0.04)] sm:h-[393px] sm:py-6">
          <div className="relative h-full w-full">
            <Image
              src="/images/map.png"
              alt="견본주택 및 현장 위치 안내 지도"
              fill
              sizes="(max-width: 900px) calc(100vw - 40px), 856px"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
