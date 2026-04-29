"use client"

import { useState } from "react"

export default function InterestPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    size: "",
    agree: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: API 엔드포인트 연동
    alert("접수되었습니다. 담당자가 연락드리겠습니다.")
  }

  return (
    <div className="pt-[72px]">
      <section className="py-20 max-w-[600px] mx-auto px-6">
        <h1 className="text-3xl font-black text-[#1a2d5a] mb-2">관심고객 등록</h1>
        <p className="text-gray-500 text-sm mb-10">
          정보를 남겨주시면 담당자가 빠르게 연락드리겠습니다.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              이름 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="이름을 입력해주세요"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1a2d5a]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              연락처 <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="010-0000-0000"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1a2d5a]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">관심 평형</label>
            <select
              value={form.size}
              onChange={(e) => setForm({ ...form, size: e.target.value })}
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1a2d5a] bg-white"
            >
              <option value="">선택해주세요</option>
              <option value="59">59㎡</option>
              <option value="74">74㎡</option>
              <option value="84">84㎡</option>
              <option value="기타">기타</option>
            </select>
          </div>

          <div className="flex items-start gap-2 pt-1">
            <input
              type="checkbox"
              id="agree"
              required
              checked={form.agree}
              onChange={(e) => setForm({ ...form, agree: e.target.checked })}
              className="mt-0.5 accent-[#1a2d5a]"
            />
            <label htmlFor="agree" className="text-xs text-gray-500 leading-relaxed">
              개인정보 수집·이용에 동의합니다. 수집된 정보는 분양 상담 목적으로만 활용됩니다.
              <span className="text-red-500 ml-1">(필수)</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1a2d5a] text-white font-bold py-4 rounded hover:bg-[#0f1d3d] transition-colors text-sm mt-2"
          >
            등록하기
          </button>
        </form>
      </section>
    </div>
  )
}
