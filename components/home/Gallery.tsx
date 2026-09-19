"use client";

import { BlurFade } from "@/components/ui/BlurFade";

const images = [
  {
    src: "/gallery/gallery-1.jpg",
    alt: "Lavandaria Bigblue",
  },
  {
    src: "/gallery/gallery-2.jpg",
    alt: "Tratamento de roupa",
  },
  {
    src: "/gallery/gallery-3.jpg",
    alt: "Serviço de lavandaria",
  },
  {
    src: "/gallery/gallery-4.jpg",
    alt: "Roupa cuidada",
  },
  {
    src: "/gallery/gallery-5.jpg",
    alt: "Lavagem profissional",
  },
  {
    src: "/gallery/gallery-6.jpg",
    alt: "Engomadoria Bigblue",
  },
  {
    src: "/gallery/gallery-7.jpg",
    alt: "Tratamento profissional",
  },
  {
    src: "/gallery/gallery-8.jpg",
    alt: "Recolhas e entregas",
  },
];

export default function Gallery() {
  return (
    <section
      id="photos"
      className="w-full overflow-hidden bg-white px-4 py-16 md:px-8 md:py-20 lg:px-12 xl:px-16"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="columns-2 gap-3 sm:columns-3 lg:columns-4 lg:gap-4">
          {images.map((image, idx) => (
            <BlurFade
              key={image.src}
              delay={0.15 + idx * 0.05}
              inView
            >
              <div className="group mb-3 overflow-hidden lg:mb-4">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}