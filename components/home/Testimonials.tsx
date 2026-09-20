"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Minus, Plus, Star } from "lucide-react";

const testimonials = [
  {
    text: "Serviço impecável. A roupa veio perfeitamente tratada, muito bem apresentada e dentro do prazo combinado.",
    name: "Cliente Bigblue",
    role: "Cascais",
    image: "/avatar/human-1.jpg",
  },
  {
    text: "A recolha e entrega facilitam imenso o dia a dia. Todo o processo foi simples, rápido e muito profissional.",
    name: "Cliente Bigblue",
    role: "Cascais",
    image: "/avatar/human-2.jpg",
  },
  {
    text: "Tenho peças delicadas que exigem bastante cuidado e o resultado tem sido sempre excelente.",
    name: "Cliente Bigblue",
    role: "Cascais",
    image: "/avatar/human-3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-4 py-20 md:px-8 md:py-28 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1500px]">
        {/* HERO */}
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

          {/* OVERLAY */}
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

          {/* GLASS TESTIMONIAL */}
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

            {/* CLIENT */}
            <div className="mt-6 flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/40">
                <Image
                  src="/avatar/human-1.jpg"
                  alt="Cliente Bigblue"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>

              <div>
                <div className="text-sm font-semibold">
                  Cliente Bigblue
                </div>

                <div className="text-xs text-white/70">
                  Cascais
                </div>
              </div>
            </div>
          </motion.div>

          {/* RATING */}
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

        {/* TESTIMONIAL CARDS */}
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.35fr_0.65fr_0.65fr]">
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
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                group
                relative
                flex
                min-h-[290px]
                flex-col
                justify-between
                rounded-[2rem]
                border
                border-[#062b61]/5
                bg-[#f8f8f1]
                p-7
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_14px_40px_rgba(6,43,97,0.06)]
                md:p-8
                ${
                  index === 0
                    ? "lg:min-h-[320px]"
                    : ""
                }
              `}
            >
              {/* TOP */}
              <div>
                <div className="flex items-center justify-between">
                  {/* DOTS */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <span
                        key={dot}
                        className="h-2 w-2 rounded-full bg-[#74d4e8]"
                      />
                    ))}
                  </div>

                  {/* PLUS / MINUS */}
                  <div
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#062b61]/10
                      text-[#062b61]/60
                    "
                  >
                    {index === 0 ? (
                      <Minus size={14} />
                    ) : (
                      <Plus size={14} />
                    )}
                  </div>
                </div>

                {/* TESTIMONIAL */}
                <p
                  className={`
                    mt-6
                    tracking-[-0.025em]
                    text-[#062b61]
                    ${
                      index === 0
                        ? "text-xl leading-7 md:text-2xl md:leading-8"
                        : "text-sm leading-6 md:text-base"
                    }
                  `}
                >
                  “{testimonial.text}”
                </p>
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

                <div>
                  <div className="text-sm font-semibold text-[#062b61]">
                    {testimonial.name}
                  </div>

                  <div className="mt-0.5 text-xs text-slate-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}