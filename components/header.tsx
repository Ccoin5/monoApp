import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-[#151c3b] sticky top-0 z-10">
      <Link href="/">
        <div className="flex items-center">
          <Image src="/monoptica-logo.png" alt="Monoptica" width={150} height={40} className="h-8 w-auto" />
        </div>
      </Link>
      <Button variant="outline" className="text-white border-[#f6b73c] hover:bg-[#f6b73c] hover:text-[#151c3b]">
        Записатися
      </Button>
    </header>
  )
}
