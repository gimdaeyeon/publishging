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
        <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3">
          <a
            href="/interest"
            className="bg-gradient-to-b from-[#1a2d5a] to-[#0f1d3d] text-white flex items-center justify-center px-3.5 py-5 rounded-full shadow-lg hover:from-[#0f1d3d] hover:to-[#0a1530] transition-colors"
          >
            <span
              className="font-extrabold text-[16px] leading-tight tracking-wide whitespace-nowrap"
              style={{ writingMode: "vertical-rl" }}
            >
              관심고객 등록
            </span>
          </a>
          <a
            href="/location"
            aria-label="오시는 길"
            className="w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-[#1a2d5a] hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  )
}
