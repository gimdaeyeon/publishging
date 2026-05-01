import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "백운밸리 리젠시빌 란트 | RANTT",
  description: "더 빠를 강남, 더 누릴 가치. 백운밸리 리젠시빌 란트. 6월 오픈예정.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Fixed right-side CTA */}
        <div className="hidden md:flex fixed right-12 bottom-[8%] z-40 flex-col items-center gap-2.5">
          {/* 관심고객 등록 - pill button */}
          <a
            href="/interest"
            className="bg-black text-white flex flex-col items-center justify-center gap-1.5 px-3 py-4 rounded-[40px] shadow-xl hover:bg-neutral-800 transition-colors w-[62px]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <circle cx="12" cy="7" r="4" />
              <path d="M4 21c0-4 3.58-7 8-7s8 3 8 7" strokeLinecap="round" />
            </svg>
            <span className="font-bold text-[10px] leading-tight tracking-wide text-center whitespace-nowrap">
              관심고객<br />등록
            </span>
          </a>

          {/* 오시는 길 - circle button */}
          <a
            href="/location"
            aria-label="오시는 길"
            className="w-[52px] h-[52px] rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center text-black hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path d="M12 2C8.69 2 6 4.69 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.31-2.69-6-6-6z" strokeLinejoin="round" />
              <circle cx="12" cy="8" r="2" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  )
}
