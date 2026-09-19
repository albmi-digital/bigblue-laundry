"use client";

import AccordionGallery from "../ui/AccordionGallery";

const items = [
  {
    image: "/gallery/gallery-1.jpg",
    alt: "Lavandaria Bigblue",
  },
  {
    image: "/gallery/gallery-2.jpg",
    alt: "Tratamento de roupa",
  },
  {
    image: "/gallery/gallery-3.jpg",
    alt: "Serviço de lavandaria",
  },
  {
    image: "/gallery/gallery-4.jpg",
    alt: "Roupa cuidada",
  },
  {
    image: "/gallery/gallery-5.jpg",
    alt: "Lavagem profissional",
  },
  {
    image: "/gallery/gallery-6.jpg",
    alt: "Serviço Bigblue",
  },
  {
    image: "/gallery/gallery-7.jpg",
    alt: "Tratamento profissional",
  },
  {
    image: "/gallery/gallery-8.jpg",
    alt: "Recolhas e entregas",
  },
];

export default function Gallery() {
  return (
    <section className="w-full overflow-hidden bg-[#041f47]">
      <AccordionGallery
        items={items}
        defaultIndex={2}
        expandRatio={0.05}
        trigger="hover"
        accentColor="#ffffff"
        overlayColor="#041f47"
        textColor="#ffffff"
        grayscale={false}
        showLabels={false}
        duration={0.6}
        ease="power3.out"
        parallax={0.5}
        tilt={5}
        stagger={0.06}
        height={500}
        gap={3}
        radius={0}
        orientation="horizontal"
        className="w-full"
      />
    </section>
  );
}