"use client";

import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  MessageCircle,
  Shirt,
  Sparkles,
  Bubbles,
  Truck,
} from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const visualY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 35]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-[#f8fbff] pt-[84px]"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[220px] top-[5%] h-[520px] w-[520px] rounded-full bg-[#dcefff] blur-[100px]" />
        <div className="absolute -right-[250px] bottom-[-80px] h-[650px] w-[650px] rounded-full bg-[#d8f8fb] blur-[110px]" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100svh-84px)] max-w-[1500px] items-center gap-14 px-5 pb-14 pt-10 md:px-8 md:pb-16 md:pt-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-12 xl:px-16">
        {/* LEFT */}
        <motion.div
          style={{
            y: textY,
            opacity,
          }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0755c7] opacity-20" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#0755c7]" />
            </span>

          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[900px] text-[clamp(3.4rem,10vw,8rem)] font-semibold leading-[0.84] tracking-[-0.07em] text-[#062b61]"
            >
              O seu
              <span className="block">parceiro de</span>

              <span className="relative inline-block text-[#0755c7]">
                excelência.
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ transformOrigin: "left" }}
                  className="absolute -bottom-2 left-1 h-[3px] w-[38%] rounded-full bg-[#74d4e8] md:-bottom-3"
                />
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 max-w-xl text-base leading-7 text-slate-600 md:text-lg md:leading-8"
          >
            Desde 2020, cuidamos da sua roupa com atenção, qualidade e
            profissionalismo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.38,
            }}
            className="mt-6 flex flex-wrap gap-x-5 gap-y-3"
          >
            {[
              "Lavandaria",
              "Limpeza a seco",
              "Engomadoria",
              "Recolhas e entregas",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-slate-500"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#eaf4ff] text-[#0755c7]">
                  <Check size={12} strokeWidth={2.5} />
                </span>
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.48,
            }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#servicos"
              className="group flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#CCD8EB] px-7 py-4 font-semibold text-white shadow-[0_15px_35px_rgba(7,85,199,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#064aaa] hover:shadow-[0_20px_45px_rgba(7,85,199,0.25)]"
            >
              Conhecer serviços
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="https://wa.me/351937533019"
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-14 items-center justify-center gap-3 rounded-full border border-slate-200 bg-white/70 px-7 py-4 font-semibold text-[#062b61] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#aacffb] hover:bg-white"
            >
              <MessageCircle size={18} className="text-[#0755c7]" />
              Falar connosco
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.7,
            }}
            className="mt-12 grid max-w-lg grid-cols-3 border-t border-slate-200 pt-6"
          >
            <div>
              <div className="text-lg font-semibold tracking-[-0.04em] text-[#062b61] md:text-2xl">
                2020
              </div>
              <div className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-400 md:text-xs">
                Desde
              </div>
            </div>

            <div className="border-l border-slate-200 pl-5">
              <div className="text-lg font-semibold tracking-[-0.04em] text-[#062b61] md:text-2xl">
                5
              </div>
              <div className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-400 md:text-xs">
                Serviços
              </div>
            </div>

            <div className="border-l border-slate-200 pl-5">
              <div className="text-lg font-semibold tracking-[-0.04em] text-[#062b61] md:text-2xl">
                Cascais
              </div>
              <div className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-400 md:text-xs">
                Vila Bicuda
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          style={{
            y: visualY,
            scale: visualScale,
            opacity,
          }}
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[620px] lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-[#0755c7] via-[#0967d8] to-[#073d91] shadow-[0_40px_100px_rgba(6,43,97,0.22)] md:aspect-[16/11] lg:aspect-[4/5] lg:rounded-[3.2rem]">
            {/* BLOBS */}
            <motion.div
              animate={{
                x: [0, 30, 0],
                y: [0, -25, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-[#74d4e8]/40 blur-[2px]"
            />

            <motion.div
              animate={{
                x: [0, -25, 0],
                y: [0, 25, 0],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-32 -left-24 h-[380px] w-[380px] rounded-full bg-white/[0.08]"
            />

            {/* BRAND */}
            <div className="absolute left-7 top-7 z-10 md:left-10 md:top-10">
              <div className="flex items-center gap-2">
                <Bubbles size={16} className="text-[#9be8f3]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  Lavandaria Bigblue
                </span>
              </div>
            </div>

            {/* CENTRAL MACHINE */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 0.7, 0, -0.7, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative aspect-square w-[67%] max-w-[390px] rounded-[2.5rem] bg-white shadow-[0_35px_70px_rgba(0,0,0,0.16)] md:rounded-[3rem]"
              >
                <div className="absolute left-[9%] right-[9%] top-[8%] flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#0755c7]" />
                  </div>

                  <div className="h-2.5 w-12 rounded-full bg-slate-100" />
                </div>

                <div className="absolute inset-x-0 bottom-[10%] mx-auto flex aspect-square w-[68%] items-center justify-center rounded-full bg-[#edf6ff] shadow-inner">
                  <div className="absolute inset-[9%] rounded-full border-[10px] border-white/70" />

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 22,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="relative h-[68%] w-[68%] overflow-hidden rounded-full bg-gradient-to-br from-[#0755c7] via-[#3f91e8] to-[#74d4e8]"
                  >
                    <motion.div
                      animate={{
                        x: [-20, 20, -20],
                        y: [15, -10, 15],
                        rotate: [0, 30, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute left-[15%] top-[20%] h-[55%] w-[65%] rounded-[50%_30%_60%_40%] bg-white/20"
                    />

                    <motion.div
                      animate={{
                        x: [15, -20, 15],
                        y: [-10, 15, -10],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute bottom-[10%] right-[10%] h-[45%] w-[55%] rounded-[40%_60%_40%_60%] bg-[#9ce7ef]/30"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* BOTTOM TEXT */}
            <div className="absolute bottom-8 left-8 right-8 z-10 md:bottom-10 md:left-10 md:right-10">
              <div className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/45">
                Cuidamos por si
              </div>

              <div className="mt-2 max-w-[360px] text-xl font-semibold tracking-[-0.035em] text-white md:text-2xl">
                Simples. Cuidado.
                <br />
                Impecável.
              </div>
            </div>

            {/* FLOATING CARD - CARE */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-4 top-20 z-20 flex items-center gap-3 rounded-2xl border border-white/50 bg-white/95 px-4 py-3 shadow-[0_20px_45px_rgba(6,43,97,0.12)] backdrop-blur sm:right-6 sm:top-24 md:right-8 md:top-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf4ff] text-[#0755c7]">
                <Shirt size={18} />
              </div>

              <div>
                <div className="text-sm font-semibold text-[#062b61]">
                  Cuidado profissional
                </div>

                <div className="mt-0.5 text-xs text-slate-400">
                  Peça a peça
                </div>
              </div>
            </motion.div>

            {/* FLOATING CARD - DELIVERY */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-4 left-4 z-20 flex items-center gap-3 rounded-2xl border border-white/50 bg-white/95 px-4 py-3 shadow-[0_20px_45px_rgba(6,43,97,0.14)] backdrop-blur sm:bottom-6 sm:left-6 md:bottom-8 md:left-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf4ff] text-[#0755c7] md:h-11 md:w-11">
                <Truck size={19} />
              </div>

              <div>
                <div className="text-sm font-semibold text-[#062b61]">
                  Recolhas & entregas
                </div>

                <div className="mt-0.5 text-xs text-slate-400">
                  Mais comodidade
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* SCROLL */}
      <motion.a
        href="#servicos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.1,
          duration: 0.8,
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-400 xl:flex"
      >
        Descobrir

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={15} />
        </motion.div>
      </motion.a>
    </section>
  );
}