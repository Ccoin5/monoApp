"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Slide {
  id: number
  image: string
  title: string
  subtitle: string
}

interface ImageSliderProps {
  slides: Slide[]
}

export default function ImageSlider({ slides }: ImageSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth
      sliderRef.current.scrollLeft = slideWidth * index
      setCurrentSlide(index)
    }
  }

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % slides.length
    goToSlide(newIndex)
  }

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length
    goToSlide(newIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide])

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft
      const slideWidth = sliderRef.current.clientWidth
      const newIndex = Math.round(scrollLeft / slideWidth)
      if (newIndex !== currentSlide) {
        setCurrentSlide(newIndex)
      }
    }
  }

  return (
    <div className="relative">
      <div
        ref={sliderRef}
        className="flex overflow-x-auto slider hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={handleScroll}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="flex-shrink-0 w-full relative">
            <div className="relative h-64 w-full">
              <Image
                src={slide.image || "/placeholder.svg?height=256&width=384"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151c3b] to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h2 className="text-2xl font-bold gradient-text">{slide.title}</h2>
                <p className="text-white">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 rounded-full p-1 text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 rounded-full p-1 text-white"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              currentSlide === index ? "w-4 bg-[#f6b73c]" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
