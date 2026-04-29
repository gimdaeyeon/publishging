export default function DirectionsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8f8f8]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a2d5a] mb-3">오시는 길</h2>
          <p className="text-gray-500 text-base sm:text-lg">
            더 빠른 강남, 더 깊은 자연. 의왕 백운밸리의 중심
          </p>
        </div>

        {/* Address */}
        <div className="text-center mb-10 space-y-1">
          <p className="text-sm sm:text-base text-gray-700">
            <span className="font-semibold text-[#1a2d5a] mr-2">견본주택</span>
            경기도 의왕시 학의동 1181번지
          </p>
          <p className="text-sm sm:text-base text-gray-700">
            <span className="font-semibold text-[#1a2d5a] mr-2">현장</span>
            경기도 의왕시 백운밸리 A 1BL
          </p>
        </div>

        {/* Map image placeholder */}
        <div className="w-full max-w-4xl mx-auto aspect-[4/3] sm:aspect-[16/9] bg-gray-200 rounded overflow-hidden flex items-center justify-center text-gray-400 text-sm">
          {/* TODO: <Image src="/images/map.png" alt="오시는 길 지도" fill className="object-cover" /> */}
          <span>map.png 자리</span>
        </div>
      </div>
    </section>
  )
}
