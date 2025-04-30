import Header from "@/components/header"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Catalog() {
  const products = [
    {
      id: 1,
      name: "Оправа Ray-Ban Classic",
      price: "2500 грн",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 2,
      name: "Сонцезахисні окуляри Polaroid",
      price: "1800 грн",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 3,
      name: "Контактні лінзи Acuvue",
      price: "650 грн",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 4,
      name: "Оправа Vogue",
      price: "2200 грн",
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  return (
    <div className="flex flex-col">
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Каталог товарів</h1>

        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-[#1d2649] rounded-lg overflow-hidden">
              <div className="relative h-40 w-full bg-[#2a3158]">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm">{product.name}</h3>
                <p className="text-[#f6b73c] font-bold mt-1">{product.price}</p>
                <Button className="w-full mt-2 text-xs py-1 h-8" variant="outline">
                  Детальніше
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
