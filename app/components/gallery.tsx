"use client";

import { useState } from "react";
import Image from "next/image";

const images: string[] = [
  "/images/image1.JPG",
  "/images/image2.JPG",
  "/images/image4.JPG",
  "/images/image6.JPG",
  "/images/image7.JPG",
  "/images/image17.JPG",
  "/images/image24.JPG",
  "/images/image25.JPG",
  "/images/image27.JPG",
  "/images/image28.JPG",
  "/images/image30.JPG",
  "/images/image31.JPG"
];

export function Gallery() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);

    const openModal = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    const nextImage = () =>
        setCurrentIndex((prev) => (prev + 1) % images.length);

    const prevImage = () =>
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // Touch events for mobile swipe
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextImage(); // swipe left → next
      else prevImage();          // swipe right → prev
    }
    setTouchStartX(null);
  };

  return (
    <div className="w-full mt-15">
        <h2 className="mb-6 text-xl">Photo Gallery</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
        {images.map((src: string, idx: number) => (
            <div
            key={idx}
            className="relative w-full aspect-[3/4] overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openModal(idx)}
            >
            <Image
                src={src}
                alt={`Photo ${idx + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
            />
            </div>
        ))}
        </div>

        {/* Modal */}
        {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
            {/* Close Button */}
            <button
                onClick={closeModal}
                className="absolute top-4 right-4 sm:right-10 text-white text-5xl font-bold cursor-pointer"
            >
                &times;
            </button>

            {/* Prev Button - only on lg+ */}
            <button
                onClick={prevImage}
                className="hidden lg:flex absolute top-1/2 left-10 -translate-y-1/2 text-white text-5xl font-bold cursor-pointer p-4"
            >
                &#10094;
            </button>

            {/* Next Button - only on lg+ */}
            <button
                onClick={nextImage}
                className="hidden lg:flex absolute top-1/2 right-10 -translate-y-1/2 text-white text-5xl font-bold cursor-pointer p-4"
            >
                &#10095;
            </button>

            {/* Image - swipeable on mobile */}
            <div
                className="relative w-full max-w-4xl h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <Image
                    src={images[currentIndex]}
                    alt={`Photo ${currentIndex + 1}`}
                    fill
                    className="object-contain"
                />
            </div>

            <div className="absolute bottom-2.25 w-full text-center text-white text-sm sm:text-base opacity-80 lg:hidden">
                Swipe left and right to navigate the gallery
            </div>
        </div>
      )}
    </div>
  );
}
