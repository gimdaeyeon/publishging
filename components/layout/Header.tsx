"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

const navItems = [
  {
    label: "사업안내",
    href: "/business",
    children: [
      { label: "사업개요", href: "/business" },
      { label: "브랜드 소개", href: "/business/brand" },
    ],
  },
  {
    label: "입지환경",
    href: "/location",
    children: [
      { label: "입지안내", href: "/location" },
      { label: "오시는 길", href: "/location/directions" },
    ],
  },
  {
    label: "프리미엄",
    href: "/premium",
    children: [
      { label: "민간 임대 특품", href: "/premium/rental" },
      { label: "PREMIUM6", href: "/premium/6" },
    ],
  },
  {
    label: "관심고객",
    href: "/interest",
    children: [
      { label: "관심 고객 등록", href: "/interest" },
    ],
  },
]

export default function Header() {
  const [hovered, setHovered] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const open = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current)
    setHovered(true)
  }
  const close = () => {
    leaveTimer.current = setTimeout(() => setHovered(false), 80)
  }

  const navTextColor = hovered ? "text-gray-800" : "text-white"
  const phoneTextColor = hovered ? "text-[#1a2d5a]" : "text-white"
  const subtitleColor = hovered ? "text-gray-600" : "text-white/90"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        hovered ? "bg-white" : "bg-transparent"
      }`}
      onMouseEnter={open}
      onMouseLeave={close}
    >
      {/* ── Desktop layout ── */}
      <div className="hidden md:flex w-full px-10 lg:px-16 items-start">

        {/* Logo — h-[80px] 고정 */}
        <Link href="/" className="w-[420px] shrink-0 h-[80px] flex items-center gap-3">
          <Image
            src="/images/logo.svg"
            alt="RANTT 백운밸리 리젠시빌 란트"
            width={140}
            height={36}
            priority
            className={`transition-[filter] duration-200 ${hovered ? "" : "brightness-0 invert"}`}
          />
          {/* TODO: 컬러판 로고 SVG (logo-color.svg) 준비되면 hovered 상태 swap */}
          <span className={`text-[20px] leading-snug whitespace-nowrap transition-colors duration-200 ${subtitleColor}`}>
            <span className="font-light">백운밸리 </span>
            <span className="font-bold">리젠시빌 란트</span>
          </span>
        </Link>

        {/* Nav — 상위 라벨 + 하위 메뉴가 같은 컬럼에 위치해 좌우 정렬 보장 */}
        <nav className="flex flex-1 justify-center gap-10">
          {navItems.map((item) => (
            <div key={item.href} className="flex flex-col">
              {/* 상위 메뉴 라벨 */}
              <div className="h-[80px] flex items-center">
                <Link
                  href={item.href}
                  className={`text-[15px] font-normal px-2 whitespace-nowrap transition-colors duration-200 hover:text-[#1a2d5a] ${navTextColor}`}
                >
                  {item.label}
                </Link>
              </div>
              {/* 하위 메뉴 — 같은 컬럼에서 펼쳐짐 */}
              <div
                className={`flex flex-col gap-2 px-2 overflow-hidden transition-all duration-200 ${
                  hovered ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"
                }`}
              >
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="text-[14px] text-gray-500 hover:text-[#1a2d5a] hover:font-medium transition-colors whitespace-nowrap"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Phone — h-[80px] 고정 */}
        <a
          href="tel:18990757"
          className={`w-[200px] shrink-0 h-[80px] flex items-center gap-2 justify-end font-semibold text-[20px] transition-colors duration-200 ${phoneTextColor}`}
        >
          <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
          </svg>
          1899-0757
        </a>
      </div>

      {/* 하단 구분선 — 드롭다운 영역 끝에만 */}
      <div className={`border-b border-gray-200 transition-opacity duration-200 ${hovered ? "opacity-100" : "opacity-0"}`} />

      {/* ── Mobile layout ── */}
      <div className="md:hidden max-w-[1400px] mx-auto px-6 h-[64px] flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.svg"
            alt="RANTT"
            width={100}
            height={28}
            priority
            className={hovered || mobileOpen ? "" : "brightness-0 invert"}
          />
        </Link>
        <button
          className="ml-auto p-2 flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          <span className={`block w-6 h-0.5 transition-all origin-center ${hovered || mobileOpen ? "bg-gray-800" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 transition-all ${hovered || mobileOpen ? "bg-gray-800" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 transition-all origin-center ${hovered || mobileOpen ? "bg-gray-800" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          {navItems.map((item) => (
            <div key={item.href} className="border-b border-gray-50">
              <div className="px-6 py-3 text-sm font-bold text-[#1a2d5a]">{item.label}</div>
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-8 py-2.5 text-sm text-gray-600 hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="px-6 py-4 border-t border-gray-100">
            <a href="tel:18990757" className="text-[#1a2d5a] font-bold">☎ 1899-0757</a>
          </div>
        </div>
      )}
    </header>
  )
}
