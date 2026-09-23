"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Serviço impecável. A roupa veio perfeitamente tratada, muito bem apresentada e dentro do prazo combinado.",
    name: "João Ferreira",
    role: "Cascais",
    image: "/avatar/human-2.jpg",
  },
  {
    text: "A recolha e entrega facilitam imenso o dia a dia. Todo o processo foi simples, rápido e muito profissional.",
    name: "Miguel Santos",
    role: "Cascais",
    image: "/avatar/human-3.jpg",
  },
  {
    text: "Tenho peças delicadas que exigem bastante cuidado e o resultado tem sido sempre excelente.",
    name: "Ricardo Almeida",
    role: "Cascais",
    image: "/avatar/human-4.jpg",
  },
];

export default function Testimonials() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="bg-white px-4 py-20 md:px-8 md:py-28 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1500px]">
        {/* =========================================================
            HERO
        ========================================================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative min-h-[580px] overflow-hidden rounded-[2.5rem] md:min-h-[700px]"
        >
          {/* BACKGROUND */}
          <Image
            src="/gallery/gallery-8.jpg"
            alt="Cliente Lavandaria Bigblue"
            fill
            priority={false}
            className="object-cover"
          />

          {/* OVERLAYS */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#062b61]/65 via-[#062b61]/20 to-[#062b61]/10" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#062b61]/45 via-transparent to-transparent" />

          {/* TITLE */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-7
              top-10
              z-20
              text-[clamp(3.5rem,9vw,8.5rem)]
              font-medium
              leading-[0.9]
              tracking-[-0.07em]
              text-white
              md:left-12
              md:top-12
            "
          >
            Testemunhos
          </motion.h2>

          {/* =========================================================
              GLASS TESTIMONIAL
          ========================================================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              bottom-8
              left-5
              z-20
              w-[calc(100%-40px)]
              max-w-[390px]
              rounded-[2rem]
              border
              border-white/40
              bg-white/20
              p-6
              text-white
              shadow-[0_20px_60px_rgba(0,0,0,0.15)]
              backdrop-blur-xl
              md:bottom-auto
              md:left-12
              md:top-[205px]
              md:p-7
            "
          >
            {/* STARS */}
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={14}
                  className="fill-white text-white"
                />
              ))}
            </div>

            <p className="mt-5 text-xl font-semibold leading-snug tracking-[-0.03em] md:text-2xl">
              “Cuidado, qualidade e um serviço em que podemos confiar.”
            </p>

            <div className="my-6 h-px bg-white/35" />

            <p className="text-sm leading-6 text-white/85">
              Cuidamos de cada peça como se fosse nossa, com atenção ao detalhe
              em todas as etapas.
            </p>

            {/* MAIN CLIENT */}
            <div className="mt-6 flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/40">
                <Image
                  src="/avatar/human-1.jpg"
                  alt="Mariana Costa"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>

              <div>
                <div className="text-sm font-semibold">
                  Mariana Costa
                </div>

                <div className="text-xs text-white/70">
                  Cascais
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================================
              RATING
          ========================================================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="
              absolute
              bottom-8
              right-8
              z-20
              hidden
              text-right
              text-white
              md:block
              md:right-12
            "
          >
            <div className="flex items-end justify-end">
              <span className="text-[5.5rem] font-semibold leading-none tracking-[-0.07em]">
                4.9
              </span>

              <span className="mb-2 ml-2 text-xl font-semibold">
                /5
              </span>
            </div>

            <p className="mt-1 text-xs text-white/80">
              Avaliação dos nossos clientes
            </p>
          </motion.div>
        </motion.div>

        {/* =========================================================
            TESTIMONIAL CARDS
        ========================================================= */}
        <div
          className="
            mt-4
            grid
            gap-4
            lg:flex
            lg:h-[320px]
            lg:items-stretch
          "
          onMouseLeave={() => setHoveredCard(null)}
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={`${testimonial.name}-${index}`}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              animate={{
                flexGrow:
                  hoveredCard === null
                    ? 1
                    : hoveredCard === index
                      ? 1.65
                      : 0.68,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                opacity: {
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                },

                y: {
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                },

                flexGrow: {
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              onMouseEnter={() => setHoveredCard(index)}
              className="
                group
                relative
                flex
                min-h-[290px]
                flex-col
                justify-between
                overflow-hidden
                rounded-[2rem]
                border
                border-[#062b61]/5
                bg-[#f8f8f1]
                p-7
                md:p-8
                lg:h-full
                lg:min-h-0
                lg:min-w-0
                lg:basis-0
              "
            >
              {/* TOP */}
              <div>
                {/* DOTS */}
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <span
                      key={dot}
                      className="h-2 w-2 rounded-full bg-[#74d4e8]"
                    />
                  ))}
                </div>

                {/* TEXT */}
                <motion.p
                  animate={{
                    opacity:
                      hoveredCard === null || hoveredCard === index
                        ? 1
                        : 0.72,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    mt-6
                    text-base
                    leading-7
                    tracking-[-0.025em]
                    text-[#062b61]
                    md:text-lg
                  "
                >
                  “{testimonial.text}”
                </motion.p>
              </div>

              {/* USER */}
              <div className="mt-10 flex items-center gap-3">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>

                <motion.div
                  className="min-w-0"
                  animate={{
                    opacity:
                      hoveredCard === null || hoveredCard === index
                        ? 1
                        : 0.78,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <div className="truncate text-sm font-semibold text-[#062b61]">
                    {testimonial.name}
                  </div>

                  <div className="mt-0.5 text-xs text-slate-500">
                    {testimonial.role}
                  </div>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}