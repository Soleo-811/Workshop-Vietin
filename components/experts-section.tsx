export default function ExpertsSection() {
  const experts = [
    {
      image: "/images/gen-h-chuyengia1.jpg",
      name: "Mr. Đặng Phước Huy Nhựt",
      role: "Founder - CEO AICI Global",
      color: "bg-blue-900 border-cyan-400",
      bio: [
        "07 năm đảm nhiệm vai trò Partner phát triển thị trường, chiến lược và vận hành tại các công ty quốc tế",
        "03 năm nghiên cứu và phát triển giải pháp AI ứng dụng cho doanh nghiệp",
        "Coach & Trainer tại AICI Global, chuyên tư vấn và triển khai AI ứng dụng",
      ],
      quote: '"Chúng tôi khẳng định rằng người Việt hoàn toàn có thể sáng tạo và đưa các giải pháp AI ra thế giới."',
    },
    {
      image: "/images/gen-h-chuyengia2.jpg",
      name: "Ms. Đoàn Khánh Phương",
      role: "AI Business Solution Experts - CAIO AICI Global",
      color: "bg-blue-900 border-cyan-400",
      bio: [
        "5 năm Trainer/Tư vấn AI ứng dụng & chiến lược tăng trưởng cho doanh nghiệp",
        "Giám đốc Tăng trưởng – Co-founder AICI Global",
        "Cố vấn Growth Marketing tại ONEADS Digital",
        "Giảng viên tại FPT chuyên đào tạo AI ứng dụng",
      ],
      quote: '"Bài toán của AI không chỉ nằm ở công nghệ, mà là ở cách Leadership nhìn nhận và triển khai nó."',
    },
    {
      image: "/images/gen-h-chuyengia3.jpg",
      name: "Lê Phụng Hào",
      role: "Chuyên gia & Cố vấn",
      color: "bg-blue-900 border-cyan-400",
      bio: [
        "Chuyên gia với nhiều năm kinh nghiệm trong lĩnh vực Quản trị và Công nghệ",
        "Từng giữ vai trò lãnh đạo tại các tập đoàn lớn như Bitis, Kinh Đô",
        "Nhà sáng lập & CEO Global AAA Consulting",
        "Doctoral Researcher về Generative AI tại Golden Gate University tại Mỹ",
      ],
      quote:
        '"Công nghệ AI không chỉ là công cụ, mà là cơ hội để doanh nghiệp Việt Nam thay đổi cách quản trị và phát triển."',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
          <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-white">
            Trainer - Expert đồng hành xuyên suốt
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {experts.map((expert, idx) => (
            <div key={idx} className={`p-8 rounded-2xl shadow-lg border-l-4 ${expert.color}`}>
              <div className="flex gap-4 mb-6 text-right items-center flex-row">
                <img
                  src={expert.image || "/placeholder.svg"}
                  alt={expert.name}
                  className="rounded-full object-cover border-cyan-400 flex-shrink-0 h-[300px] w-[300px] text-center border-8 mx-0"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white text-center">{expert.name}</h3>
                <p className="text-cyan-300 font-semibold text-sm text-center mb-8">{expert.role}</p>
              </div>

              <div className="space-y-2 mb-6">
                {expert.bio.map((item, idx) => (
                  <p key={idx} className="text-gray-100 text-xl leading-relaxed">
                    • {item}
                  </p>
                ))}
              </div>

              <blockquote className="border-l-4 border-cyan-400 pl-4 italic text-sm text-gray-200">
                {expert.quote}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
