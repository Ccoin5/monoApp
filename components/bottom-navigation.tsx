"use client"

import { Home, Phone, Info, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function BottomNavigation() {
  const pathname = usePathname()

  const navItems = [
    {
      label: "Головна",
      href: "/",
      icon: Home,
    },
    {
      label: "Контакти",
      href: "/contact",
      icon: Phone,
    },
    {
      label: "Про нас",
      href: "/about",
      icon: Info,
    },
    {
      label: "Каталог",
      href: "/catalog",
      icon: ShoppingBag,
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#151c3b] border-t border-[#2a3158] max-w-md mx-auto">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center py-2 px-3 text-xs",
                isActive ? "text-[#f6b73c]" : "text-gray-400 hover:text-gray-200",
              )}
            >
              <item.icon className="h-6 w-6 mb-1" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
