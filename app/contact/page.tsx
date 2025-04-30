import Header from "@/components/header"
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Контакти</h1>

        <div className="grid gap-6">
          <div className="bg-[#1d2649] p-4 rounded-lg flex items-start">
            <MapPin className="w-6 h-6 mr-3 text-[#f6b73c] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Адреса</h3>
              <p className="text-gray-300">вул. Хрещатик, 22, Київ, 01001</p>
              <p className="text-gray-300 mt-1">Пн-Пт: 9:00-20:00, Сб-Нд: 10:00-18:00</p>
            </div>
          </div>

          <div className="bg-[#1d2649] p-4 rounded-lg flex items-start">
            <Phone className="w-6 h-6 mr-3 text-[#ea5455] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Телефон</h3>
              <p className="text-gray-300">+380 44 123 4567</p>
              <p className="text-gray-300 mt-1">+380 67 987 6543</p>
            </div>
          </div>

          <div className="bg-[#1d2649] p-4 rounded-lg flex items-start">
            <Mail className="w-6 h-6 mr-3 text-[#3498db] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-gray-300">info@monoptica.com</p>
              <p className="text-gray-300 mt-1">support@monoptica.com</p>
            </div>
          </div>

          <div className="bg-[#1d2649] p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Зв'язатися з нами</h3>
            <Button className="w-full bg-[#665CAC] hover:bg-[#7d71c9]">
              <MessageSquare className="w-5 h-5 mr-2" />
              Написати у Viber
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
