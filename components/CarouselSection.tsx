"use client"

import { useState, useEffect, useRef } from "react"

const CarouselSection = () => {
  const images = [
    "/ai_ethic.jpeg",
    "/roundtables.jpeg",
    "/past.jpeg",
    "/speaker.jpeg",
    "/speaker2.jpeg",
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img9.jpg",
    "/img10.jpg",
    "/img11.jpg",
    "/img12.jpg",
    "/img13.jpg",
    "/img14.jpg",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-slide functionality
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 2500) // Change slide every 2.5 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovered, images.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Gallery</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our curated collection of memorable moments and experiences
        </p>
      </div>

      <div
        className="relative overflow-hidden rounded-sm"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Carousel Container */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
          {/* Three Image Layout */}
          <div className="flex items-center justify-center space-x-8 w-full">
            {/* Previous Image */}
            <div
              className="relative cursor-pointer transition-all duration-700 ease-in-out transform hover:scale-110"
              style={{ transform: "scale(0.7)" }}
              onClick={goToPrevious}
            >
              <div className="relative w-64 h-80 md:w-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
                <img
                  src={images[(currentIndex - 1 + images.length) % images.length] || "/placeholder.svg"}
                  alt="Previous"
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
              </div>
            </div>

            {/* Current Image (Center - Bigger) */}
            <div
              className="relative transition-all duration-700 ease-in-out transform"
              style={{ transform: "scale(1)" }}
            >
              <div className="relative w-80 h-96 md:w-96 md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
                <img
                  src={images[currentIndex] || "/placeholder.svg"}
                  alt="Current"
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>

            {/* Next Image */}
            <div
              className="relative cursor-pointer transition-all duration-700 ease-in-out transform hover:scale-110"
              style={{ transform: "scale(0.7)" }}
              onClick={goToNext}
            >
              <div className="relative w-64 h-80 md:w-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
                <img
                  src={images[(currentIndex + 1) % images.length] || "/placeholder.svg"}
                  alt="Next"
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 bg-gray-200 rounded-full h-1 overflow-hidden">
          <div
            className="h-full bg-[#0066FF] transition-all duration-300 ease-out"
            style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default CarouselSection
