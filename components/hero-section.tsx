import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <header className="relative min-h-auto px-4 sm:px-6 lg:px-48 overflow-hidden pb-0 lg:pr-0 lg:pl-0 pt-4 my-0 leading-8 border-0 tracking-normal">
      <div className="max-w-6xl mx-auto text-center relative z-10 tracking-normal leading-10">
        {/* Tagline */}
        <p className="text-2xl font-semibold uppercase tracking-widest text-cyan-400 mt-2.5 mb-5">
          AI WORKSHOP FOR BUSINESS
        </p>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight text-white [text-shadow:_0_0_50px_#00E5FF,0_0_15px_#0033AA] lg:text-5xl mt-0">
          GEN AI CHO LÃNH ĐẠO TRONG <br/> NGÀNH TÀI CHÍNH | CHỨNG KHOÁN
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl font-light text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
          Trại huấn luyện AI thực chiến <br />
          Dành cho <strong className="font-black text-cyan-300">LÃNH ĐẠO & ĐỘI NGŨ LÕI</strong>
        </p>

        <a 
          href="#registration-form" 
          className="inline-block mb-8"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('registration-form')?.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
          }}
        >
          <Button className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-500 hover:to-pink-500 text-white font-black py-8 px-14 text-2xl uppercase tracking-wider rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-600/50 transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-3">
            GỬI CHƯƠNG TRÌNH CHO TÔI!        
          </Button>
        </a>

        {/* Key Info */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12 text-base sm:text-lg font-semibold text-gray-100">
          {/* Ngày + Giờ */}
          <div className="flex items-start gap-2">
            <span className="text-red-400 text-2xl mt-1">📅</span>
            <div className="flex flex-col leading-tight">
              <span>12, 13, 14.12.2025</span>
              <span className="text-sm sm:text-base font-normal text-gray-300">8:30 AM – 17:00 PM</span>
            </div>
          </div>

          {/* Địa điểm */}
          <div className="flex items-start gap-2">
            <span className="text-red-400 text-2xl mt-1">📍</span>
            <div className="flex flex-col leading-tight">
              <span>
                92 Yên Thế <br />
                Tân Sơn Hoà, TP. HCM
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
