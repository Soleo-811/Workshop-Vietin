"use client"

import { Button } from "@/components/ui/button"
import { useRef } from "react"
import { Check } from "lucide-react"

export default function PricingSection() {
  const ctaFormRef = useRef<HTMLFormElement>(null)

  const handlePackageSelect = () => {
    const ctaSection = document.getElementById("cta")
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" })

      setTimeout(() => {
        const selectElement = document.querySelector('select[name="package"]') as HTMLSelectElement
        if (selectElement) {
          selectElement.value = "2-day"
        }
      }, 300)
    }
  }

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-center mb-6 leading-tight text-white [text-shadow:_0_0_50px_#00E5FF,0_0_15px_#0033AA]">
          THAM GIA
        </h2>

        {/* Subtitle with gradient text */}
        <p className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-white">
          2 NGÀY HUẤN LUYỆN AI THỰC CHIẾN
        </p>

        <div className="mb-8 overflow-x-auto rounded-3xl shadow-3xl">
          <table className="w-full text-white">
            <thead>
              <tr>
                <th className="px-6 py-6 text-center text-4xl font-black border-b-2 border-cyan-400/50">
                  Nội dung chi tiết
                </th>
                <th className="px-6 py-6 text-center text-lg font-black text-white border-b-2 border-gray-400">
                  GÓI "TƯ DUY"
                  <br />
                  
                </th>
              </tr>
            </thead>
            <tbody className="bg-slate-900/50 divide-y divide-purple-700/30">
              {/* Feature rows - all features now included in 2-day package */}
              <tr className="hover:bg-slate-800/50 transition">
                <td className="px-6 py-4 text-left font-semibold">
                  2 Ngày huấn luyện Tư duy &amp; Công cụ AI Thực Chiến
                </td>
                <td className="px-6 py-4 text-center text-white">
                  <Check className="w-6 h-6 text-white mx-auto" strokeWidth={3} />
                </td>
              </tr>

              <tr className="hover:bg-slate-800/50 transition">
                <td className="px-6 py-4 text-left font-semibold">Bộ Hướng Dẫn Công cụ &amp; Webinar hàng tháng </td>
                <td className="px-6 py-4 text-center text-white">
                  <Check className="w-6 h-6 text-white mx-auto" strokeWidth={3} />
                </td>
              </tr>

              <tr className="hover:bg-slate-800/50 transition">
                <td className="px-6 py-4 text-left font-semibold">
                  Bộ test năng lực AI cho toàn bộ nhân sự sau Chương trình
                </td>
                <td className="px-6 py-4 text-center text-white">
                  <Check className="w-6 h-6 text-white mx-auto" strokeWidth={3} />
                </td>
              </tr>

              <tr className="hover:bg-slate-800/50 transition">
                
                
              </tr>

              <tr className="hover:bg-slate-800/50 transition">
                <td className="px-6 py-4 text-left font-semibold">Coaching cho DN trước Workshop - 1 giờ với CEO</td>
                <td className="px-6 py-4 text-center text-white">
                  <Check className="w-6 h-6 text-white mx-auto" strokeWidth={3} />
                </td>
              </tr>

              <tr className="hover:bg-slate-800/50 transition">
                <td className="px-6 py-4 text-left font-semibold">1 buổi Follow-up trong 20 ngày sau chương trình</td>
                <td className="px-6 py-4 text-center text-white">
                  <Check className="w-6 h-6 text-white mx-auto" strokeWidth={3} />
                </td>
              </tr>

              <tr className="bg-slate-800/50 font-black text-lg">
                <td className="px-6 py-5 text-left">ĐĂNG KÝ NHÓM DOANH NGHIỆP (CEO + NHÂN SỰ)</td>
                <td className="px-6 py-5 text-center text-blue-300 line-through">15.000.000đ</td>
              </tr>

              <tr className="bg-slate-800/20 font-bold text-xl">
                <td className="px-6 py-5 text-left leading-7">Đăng ký sớm trước 30.11</td>
                <td className="px-6 py-5 text-center text-blue-600">10.00.000/ng</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-400/30 rounded-2xl p-8 mb-6 text-center mr-60 ml-60 px-2.5 py-2.5">
          
          <p className="text-lg text-gray-300 font-semibold mb-2">
            <span className="text-yellow-300 font-black text-2xl">⚡ Giới hạn 20&nbsp; Học viên</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button
            onClick={handlePackageSelect}
            className="bg-white hover:from-blue-600 hover:via-purple-500 hover:to-pink-500 text-blue-700 font-black py-4 px-10 text-lg uppercase tracking-widest rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-600/50 transform hover:-translate-y-1 transition-all duration-300"
          >
            ĐĂNG KÝ NHIỀU HƠN
          </Button>
          <Button
            onClick={handlePackageSelect}
            className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-500 hover:to-pink-500 text-white font-black py-4 px-10 text-lg uppercase tracking-widest rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-600/50 transform hover:-translate-y-1 transition-all duration-300"
          >
            TƯ VẤN NHANH: 0903 78 0128
          </Button>
        </div>
      </div>
    </section>
  )
}
