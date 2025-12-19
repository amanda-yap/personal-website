import Image from "next/image";

const images = [
  "/images/image1.JPG",
  "/images/image2.JPG",
  "/images/image3.JPG",
  "/images/image4.JPG",
];

export function Gallery() {
  return (
    <div className="w-full mt-10">
      <h2 className="text-md mb-6">Photo Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <div key={idx} className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src={src}
              alt={`Photo ${idx + 1}`}
              fill
              className="object-cover hover:scale-103 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
