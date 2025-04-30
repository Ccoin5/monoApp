import { Eye, Glasses, BadgeCheck } from "lucide-react"

interface InfoBlockProps {
  title: string
  description: string
  icon: string
}

export default function InfoBlock({ title, description, icon }: InfoBlockProps) {
  const getIcon = () => {
    switch (icon) {
      case "eye":
        return <Eye className="h-6 w-6 text-[#f6b73c]" />
      case "glasses":
        return <Glasses className="h-6 w-6 text-[#ea5455]" />
      case "badge-check":
        return <BadgeCheck className="h-6 w-6 text-[#3498db]" />
      default:
        return <Eye className="h-6 w-6 text-[#f6b73c]" />
    }
  }

  return (
    <div className="bg-[#1d2649] p-4 rounded-lg flex items-start">
      <div className="mr-4 mt-1">{getIcon()}</div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  )
}
