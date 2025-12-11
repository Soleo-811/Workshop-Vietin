interface Section {
  day: string
  title: string
  color: string
  highlight?: boolean
  session1?: {
    title: string
    content: string
    outcome?: string
  }
  session2?: {
    title: string
    content: string
    outcome?: string
  }
  session3?: {
    title: string
    content: string
    outcome?: string
  }
}

interface ExpandedAgendaViewProps {
  section: Section
}

export default function ExpandedAgendaView({ section }: ExpandedAgendaViewProps) {
  const getSessionIndex = (): number => {
    if (!section?.day) return 1
    // Match "BUỔI SÁNG" -> 1, "BUỔI CHIỀU" -> 2
    if (section.day.includes("SÁNG")) return 1
    if (section.day.includes("CHIỀU")) return 2
    return 1
  }

  const sessionIndex = getSessionIndex()

  // Map images by session (morning/afternoon)
  const imageMap: Record<number, string[]> = {
    1: ["/Image_module/anh1.jpg", "/Image_module/anh2.jpg"], // Buổi sáng
    2: ["/Image_module/anh3.jpg", "/Image_module/anh4.jpg"], // Buổi chiều
  }

  const images = imageMap[sessionIndex] ?? imageMap[1] ?? []

  const formatContentAsList = (content?: string) => {
    if (!content) return []
    // Split by newlines first, then by periods, dashes, or bullet points
    const lines = content
      .split(/\n/)
      .map((line) => line.trim())
      .filter((line) => line.length > 0)

    const result: string[] = []
    lines.forEach((line) => {
      // If line already has bullet points or dashes, split by them
      if (line.includes("•") || line.match(/^\s*-\s+/)) {
        line.split(/•|-/).forEach((item) => {
          const trimmed = item.trim()
          if (trimmed) result.push(trimmed)
        })
      } else {
        // Split by periods and keep each sentence
        line.split(".").forEach((sentence) => {
          const trimmed = sentence.trim()
          if (trimmed) result.push(trimmed)
        })
      }
    })

    return result
  }

  return (
    <div className="mt-0 mb-6 rounded-b-2xl shadow-lg overflow-hidden bg-white">
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{section.session1?.title}</h3>
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-blue-600 mb-2">Nội dung chính:</h4>
              <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                {formatContentAsList(section.session1?.content).map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {section.session1?.outcome && (
              <div>
                <h4 className="text-sm font-semibold text-green-600 mb-2">Kết quả đạt được:</h4>
                <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                  {formatContentAsList(section.session1?.outcome).map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{section.session2?.title}</h3>
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-blue-600 mb-2">Nội dung chính:</h4>
              <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                {formatContentAsList(section.session2?.content).map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {section.session2?.outcome && (
              <div>
                <h4 className="text-sm font-semibold text-green-600 mb-2">Kết quả đạt được:</h4>
                <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                  {formatContentAsList(section.session2?.outcome).map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{section.session3?.title}</h3>
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-blue-600 mb-2">Nội dung chính:</h4>
              <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                {formatContentAsList(section.session3?.content).map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {section.session3?.outcome && (
              <div>
                <h4 className="text-sm font-semibold text-green-600 mb-2">Kết quả đạt được:</h4>
                <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                  {formatContentAsList(section.session3?.outcome).map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-gray-300 mb-12"></div>

        {/* IMAGES — 2 images side-by-side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden">
              <div className="w-full aspect-video bg-gray-200">
                <img src={src || "/placeholder.svg"} alt="" className="w-full h-full object-cover block" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
