"use client";

import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FinalCTA() {
  return (
    <section className="bg-white px-5 py-8 md:px-8 md:py-12 lg:px-12 xl:px-16">
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
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
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          mx-auto
          max-w-[1500px]
          overflow-hidden
          rounded-[2.2rem]
          bg-[#062b61]
          px-6
          py-16
          text-white
          md:rounded-[3rem]
          md:px-12
          md:py-20
          lg:px-16
          lg:py-24
        "
      >
        {/* BACKGROUND ELEMENTS */}
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#0755c7]/50
            blur-[60px]
          "
        />

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -bottom-48
            left-[15%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#74d4e8]/15
            blur-[70px]
          "
        />

        <div className="relative z-10 grid items-end gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          {/* LEFT */}
          <div>
            <motion.span
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#74d4e8]"
            >
              Bigblue · Cascais
            </motion.span>

            <motion.h2
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
              }}
              transition={{
                duration: 0.8,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-5
                max-w-4xl
                text-[clamp(2.8rem,6vw,6rem)]
                font-semibold
                leading-[0.92]
                tracking-[-0.065em]
              "
            >
              A sua roupa merece
              <span className="block text-[#74d4e8]">
                o melhor cuidado.
              </span>
            </motion.h2>

            <motion.p
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
                delay: 0.15,
              }}
              className="mt-7 max-w-xl text-base leading-7 text-white/60 md:text-lg"
            >
              Fale connosco para saber mais sobre os nossos serviços,
              recolhas ou entregas.
            </motion.p>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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
              delay: 0.2,
            }}
            className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row"
          >
            <a
              href="https://wa.me/351937533019"
              target="_blank"
              rel="noreferrer"
              className="
                group
                flex
                min-h-14
                flex-1
                items-center
                justify-center
                gap-3
                rounded-full
                bg-white
                px-6
                py-4
                font-semibold
                text-[#062b61]
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <FaWhatsapp
                size={20}
                className="text-[#25D366]"
              />

              WhatsApp

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="tel:+351214860820"
              className="
                flex
                min-h-14
                flex-1
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-white/15
                bg-white/[0.07]
                px-6
                py-4
                font-semibold
                text-white
                backdrop-blur
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/[0.12]
              "
            >
              <Phone size={18} />

              214 860 820
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}