import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-[1400px] mx-auto px-10 lg:px-16 py-8">

        {/* 상단 행: 로고 + 회사 정보 */}
        <div className="flex items-center justify-between">
          <Image
            src="/images/logo.svg"
            alt="RANTT"
            width={100}
            height={28}
            className="brightness-0 invert"
          />
          <div className="flex items-center gap-5 text-sm text-white/80">
            <span>
              <span className="text-white mr-1.5">시행</span>(주)리젠시빌주택
            </span>
            <span className="text-white/30">|</span>
            <span>
              <span className="text-white mr-1.5">시공</span>(주)리젠시빌건설&nbsp;&nbsp;(주)리젠시빌주택
            </span>
            <span className="text-white/30">|</span>
            <span>
              <span className="text-white mr-1.5">온라인사</span>디지털 우주대작전
            </span>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-white/20 my-5" />

        {/* 주소 행 */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/70 mb-4">
          <span>
            <span className="font-bold text-white mr-2">견본주택</span>경기도 의왕시 학의동 1181
          </span>
          <span className="text-white/30">|</span>
          <span>
            <span className="font-bold text-white mr-2">현장</span>경기도 의왕시 백운밸리 A 1BL
          </span>
          <span className="text-white/30">|</span>
          <span>
            <span className="font-bold text-white mr-2">TEL</span>1599-0757
          </span>
        </div>

        {/* 면책 문구 */}
        <p className="text-xs text-white/45 leading-relaxed">
          본 사이트에 사용된 이미지는 소비자의 이해를 돕기 위한 이미지컷으로 실제와 다를 수 있습니다.
        </p>
        <p className="text-xs text-white/45 leading-relaxed mb-6">
          본 사이드는 편집 과정상 오류가 있을 수 있으니 자세한 사항은 견본주택으로 문의해 주시기 바랍니다.
        </p>

        {/* 저작권 */}
        <p className="text-xs text-white/35">
          © 2026 백운밸리리젠시빌란트 CO., LTD. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  )
}
