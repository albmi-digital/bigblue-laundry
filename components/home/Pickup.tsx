"use client";

import { motion } from "motion/react";
import { ArrowRight, MapPin, PackageCheck, Truck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const marqueeItems = [
  "RECOLHEMOS",
  "CUIDAMOS",
  "ENTREGAMOS",
  "RECOLHEMOS",
  "CUIDAMOS",
  "ENTREGAMOS",
];

export default function Pickup() {
  return (
    <section className="relative overflow-hidden bg-[#0755c7] text-white">
      {/* ============================================================
          MARQUEE
      ============================================================ */}
      <div className="overflow-hidden border-b border-white/10 py-5 md:py-6">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 24,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex w-max whitespace-nowrap"
        >
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center"
            >
              <span className="px-5 text-2xl font-semibold tracking-[-0.04em] text-white md:px-8 md:text-4xl lg:text-5xl">
                {item}
              </span>

              <span className="h-2 w-2 rounded-full bg-[#74d4e8] md:h-3 md:w-3" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ============================================================
          BACKGROUND DECORATION
      ============================================================ */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-32 h-[500px] w-[500px] rounded-full bg-[#74d4e8]/20 blur-[80px]"
        />

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-56 -left-40 h-[550px] w-[550px] rounded-full bg-white/[0.08] blur-[60px]"
        />
      </div>

      {/* ============================================================
          CONTENT
      ============================================================ */}
      <div className="relative mx-auto max-w-[1500px] px-5 py-24 md:px-8 md:py-32 lg:px-12 lg:py-40 xl:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
          {/* LEFT */}
          <div>
            <motion.div
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
              }}
              className="flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Truck size={18} />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a7edf4]">
                Recolhas & Entregas
              </span>
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 45,
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
                duration: 0.9,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-4xl text-[clamp(3.2rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.07em]"
            >
              A sua roupa.
              <span className="block text-[#9be8f3]">
                Sem complicações.
              </span>
            </motion.h2>

            <motion.p
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
              }}
              className="mt-8 max-w-xl text-base leading-8 text-white/70 md:text-lg"
            >
              Precisa de mais comodidade? Fale connosco sobre o serviço de
              recolha e entrega e deixe o tratamento da sua roupa nas mãos da
              Bigblue.
            </motion.p>

            {/* CTA */}
            <motion.div
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
                delay: 0.25,
              }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="https://wa.me/351937533019"
                target="_blank"
                rel="noreferrer"
                className="flex min-h-14 items-center justify-center rounded-full border border-white/25 bg-white/[0.06] px-7 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/[0.12]"
              >
                <FaWhatsapp size={20} />

                 Pedir informação

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="tel:+351937533019"
                className="flex min-h-14 items-center justify-center rounded-full border border-white/25 bg-white/[0.06] px-7 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/[0.12]"
              >
                937 533 019
              </a>
            </motion.div>
          </div>

          {/* ============================================================
              RIGHT VISUAL
          ============================================================ */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[600px]"
          >
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/[0.08] p-6 backdrop-blur-md md:p-9 lg:rounded-[3rem]">
              {/* circles */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
              />

              <motion.div
                animate={{
                  scale: [1.05, 1, 1.05],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
              />

              {/* MAIN ICON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-36 w-36 items-center justify-center rounded-[2.5rem] bg-white text-[#0755c7] shadow-[0_30px_80px_rgba(0,0,0,0.18)] md:h-44 md:w-44"
                >
                  <Truck
                    size={56}
                    strokeWidth={1.5}
                  />
                </motion.div>
              </div>

              {/* TOP CARD */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-5 top-5 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-[#062b61] shadow-xl md:left-8 md:top-8"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf4ff] text-[#0755c7]">
                  <MapPin size={17} />
                </div>

                <div>
                  <div className="text-xs text-slate-400">
                    Localização
                  </div>

                  <div className="text-sm font-semibold">
                    Cascais
                  </div>
                </div>
              </motion.div>

              {/* BOTTOM CARD */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-5 right-5 flex items-center gap-3 rounded-2xl bg-[#062b61] px-4 py-3 shadow-xl md:bottom-8 md:right-8"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#74d4e8]">
                  <PackageCheck size={17} />
                </div>

                <div>
                  <div className="text-xs text-white/45">
                    Serviço
                  </div>

                  <div className="text-sm font-semibold text-white">
                    Recolha & entrega
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}