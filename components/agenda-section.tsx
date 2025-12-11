"use client"

import { useState } from "react"
import AgendaCard from "./agenda-card"
import ExpandedAgendaView from "./expanded-agenda-view"

export default function AgendaSection() {
  const [expandedSession, setExpandedSession] = useState<string | null>(null)

  const agenda = [
    {
      day: "BUỔI SÁNG",
      title: "NỀN TẢNG AI & TƯ DUY CHIẾN LƯỢC",
      items: [
        "Module 1: Tổng quan Gen AI – Làn sóng cách mạng",
        "Module 2: Case Study thành công trong ngành – Bài học kinh nghiệm",
        "Module 3: Framework tích hợp AI vào vận hành – Ứng dụng AI trong tổ chức",
      ],
      color: "blue",
      session1: {
        title: "Module 1: TỔNG QUAN GEN AI – LÀN SÓNG CÁCH MẠNG",
        content:
          "Khái niệm AI và AI tạo sinh, cùng các ứng dụng thực tế hiện tại ở Việt Nam và Thế giới. Phân tích cách Gen AI thay đổi bản chất vận hành, thay đổi cơ cấu nhân sự và cải tổ quy trình vận hành truyền thống của các doanh nghiệp truyền thống.",
        outcome:
          "Hiểu rõ khái niệm và sự khác biệt cốt lõi của AI và Gen AI. Nhận diện tác động mang tính cách mạng của AI và Gen AI đến kinh tế toàn cầu và Việt Nam. Thấy được cách Gen AI thay đổi bản chất vận hành của doanh nghiệp truyền thống.",
      },
      session2: {
        title: "Module 2: CASE STUDY THÀNH CÔNG TRONG NGÀNH – BÀI HỌC KINH NGHIỆM",
        content:
          "Nghiên cứu chuyên sâu các case study thành công trong ngành tài chính/chứng khoán, bao gồm: JPMorgan Chase (thúc đẩy tăng trưởng doanh số 20%), AlphaSense (lợi nhuận cao hơn 12% so với chuẩn), BofA Erica (Xử lý 70% yêu cầu KH, tiết kiệm 300 triệu USD/năm), và ứng dụng tại nhóm ngân hàng ở Việt Nam (Tối ưu hóa nguồn lực Back-Office). Phân tích các Yếu tố thành công và Thách thức thực tế cần đối mặt.",
        outcome:
          "Thấy được những giá trị tiềm năng thực tế của Gen AI trong ngành tài chính, chứng khoán. Nhận diện được các cơ hội chiến lược. Thấy được các yếu tố thành công, các thách thức phải đối mặt, có tâm thái sẵn sàng ở thế chủ động. Gợi mở tầm nhìn chiến lược cho việc triển khai AI thành công trong doanh nghiệp.",
      },
      session3: {
        title: "Module 3: FRAMEWORK TÍCH HỢP AI VÀO VẬN HÀNH – ỨNG DỤNG AI TRONG TỔ CHỨC",
        content:
          "Bài học rút ra từ các doanh nghiệp thành công (theo Nghiên cứu từ McKinsey & Bain) về việc chuyển đổi các thử nghiệm ban đầu thành các hoạt động cốt lõi. Nắm vững 5 BƯỚC TÍCH HỢP AI THÀNH CÔNG: 1. Đánh giá (mức độ sẵn sàng AI); 2. Chuẩn bị (đào tạo nâng cao nhận thức & kỹ năng); 3. Thử nghiệm (xác định các use case ưu tiên); 4. Mở rộng (quy trình 'start small, fail fast, learn quickly, scale wisely'); 5. Hoàn thiện (Xây dựng chính sách nội bộ và quản lý thay đổi).",
        outcome:
          "Nắm được lộ trình triển khai AI bài bản trong doanh nghiệp, bao gồm đánh giá hiện trạng, phát triển con người, chọn lọc ứng dụng, quản trị và mở rộng, nhằm đảm bảo chuyển đổi AI hiệu quả và bền vững.",
      },
    },
    {
      day: "BUỔI CHIỀU",
      title: "PHÁT TRIỂN KỸ NĂNG AI & XÂY DỰNG KẾ HOẠCH HÀNH ĐỘNG",
      items: [
        "Module 4: Kỹ năng AI dành cho lãnh đạo - Ứng dụng AI cá nhân",
        "Module 5: Workshop - Xây dựng tầm nhìn, chủ trương, mục tiêu với AI",
        "Tổng kết: Đúc kết bài học và chia sẻ",
      ],
      color: "purple",
      session1: {
        title: "Module 4: KỸ NĂNG AI DÀNH CHO LÃNH ĐẠO - ỨNG DỤNG AI CÁ NHÂN",
        content: " - Hướng dẫn sử dụng AI cho lãnh đạo: Phát triển tư duy sử dụng AI tạo sinh không phụ thuộc công cụ.\n - Các phương pháp khai thác AI để nghiên cứu sâu và hỗ trợ chiến lược cho lãnh đạo.\n - Hướng dẫn thực thi các công cụ AI quan trọng cho lãnh đạo: ChatGPT - Perplexity - Notebooklm - deepseek,...",
        outcome:
          "Thành thạo sử dụng bộ công cụ AI đắc lực cho vai trò lập chiến lược, nghiên cứu và ra quyết định. Nắm được các phương pháp khai thác AI dành riêng cho lãnh đạo.",
      },
      session2: {
        title: "Module 5: WORKSHOP - XÂY DỰNG TẦM NHÌN, CHỦ TRƯƠNG, MỤC TIÊU VỚI AI",
        content:
          "Thực hành xác định mục tiêu AI chiến lược (dựa trên các tiêu chí: Phù hợp với chiến lược doanh nghiệp, Dữ liệu đủ, Tác động rõ ràng, Kiểm soát rủi ro). Xác định điểm xuất phát, chọn 1 'điểm đau/nút thắt' mà GenAI có thể giải quyết. Xây dựng các phương pháp kiểm soát rủi ro, và đề xuất 2-3 KPI cụ thể để đo lường hiệu quả. Xây dựng Kế hoạch Hành động (template).",
        outcome:
          "Chuyển từ ý tưởng sang hành động cụ thể bằng cách xây dựng kế hoạch triển khai thí điểm (pilot) AI tại tổ chức/phòng ban của mình. Xác định rõ các bước đi ban đầu, cách thức kiểm soát rủi ro và đo lường hiệu quả. Thúc đẩy cam kết hành động từ các nhà lãnh đạo.",
      },
      session3: {
        title: "TỔNG KẾT",
        content: "Đúc kết bài học và chia sẻ từ các nhà lãnh đạo về kế hoạch triển khai AI tại tổ chức của mình.",
        outcome:
          "Có dự thảo chiến lược tích hợp AI cho tổ chức. Các nhà lãnh đạo cam kết hành động và bắt đầu triển khai AI ngay sau khóa học.",
      },
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-extrabold text-white text-center mb-12 mt-0 leading-15 ml-5 mr-5 text-5xl">
          KẾT QUẢ & GIÁ TRỊ SAU KHÓA HỌC <br/> DÀNH CHO LÃNH ĐẠO
        </h2>

        <div className="space-y-6">
          {agenda.map((section) => (
            <div key={section.day}>
              <AgendaCard
                section={section}
                isExpanded={expandedSession === section.day}
                onToggle={() => setExpandedSession(expandedSession === section.day ? null : section.day)}
              />

              {expandedSession === section.day && <ExpandedAgendaView section={section} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
