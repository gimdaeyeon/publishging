import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        {/* Logo row */}
        <div className="flex items-center gap-3 mb-8">
          <Image
            src="/images/logo.svg"
            alt="RANTT"
            width={100}
            height={28}
            className="brightness-0 invert"
          />
          <span className="text-white/80 text-sm">백운밸리 리젠시빌 란트</span>
        </div>

        {/* Company info */}
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-400 mb-4">
          <span><span className="text-gray-500 mr-1">사행</span>(주)리젠시빌주택</span>
          <span className="hidden sm:inline text-gray-600">|</span>
          <span><span className="text-gray-500 mr-1">시공</span>(주)리젠시빌건설</span>
          <span className="hidden sm:inline text-gray-600">|</span>
          <span><span className="text-gray-500 mr-1">운관리사</span>(주)리젠시빌주택</span>
          <span className="hidden sm:inline text-gray-600">|</span>
          <span><span className="text-gray-500 mr-1">온라인사</span>디지털 우주대작전</span>
        </div>

        {/* Address */}
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-400 mb-2">
          <span><span className="text-gray-500 mr-1">견본주택</span>경기도 의왕시 학의동 1181번지</span>
          <span className="hidden sm:inline text-gray-600">|</span>
          <span><span className="text-gray-500 mr-1">현장</span>경기도 의왕시 백운밸리 A 1BL</span>
          <span className="hidden sm:inline text-gray-600">|</span>
          <span><span className="text-gray-500 mr-1">TEL</span>1599-0757</span>
        </div>

        {/* Legal disclaimer */}
        <p className="text-xs text-gray-600 leading-relaxed mt-6 max-w-4xl">
          본 광고물은 사업주체의 사전에 인쇄된 광고로서 입주자모집공고 이전에 제작된 것으로 실제 내용과 다를 수 있으며, 계약 시에는 관련 법령에 따라 공급계약서 및 입주자 모집공고문의 내용을 확인하여 주시기 바랍니다. 투자에 따른 손실은 귀책에 귀속됩니다.
        </p>

        {/* Divider + Copyright */}
        <div className="border-t border-white/10 mt-8 pt-6">
          <p className="text-xs text-gray-600 text-center">
            © 2026 백운밸리리젠시빌란트 CO., LTD. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  )
}
