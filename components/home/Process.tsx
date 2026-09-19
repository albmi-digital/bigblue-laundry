"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  Check,
  PackageCheck,
  Shirt,
  Sparkles,
  Truck,
} from "lucide-react";
import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Recolhemos",
    shortTitle: "Recolha",
    description:
      "Pode entregar a sua roupa diretamente na Bigblue ou falar connosco sobre o serviço de recolha.",
    icon: Truck,
  },
  {
    number: "02",
    title: "Tratamos",
    shortTitle: "Tratamento",
    description:
      "Cada peça é analisada e tratada de acordo com o tecido, tipo de roupa e cuidados necessários.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Cuidamos",
    shortTitle: "Cuidado",
    description:
      "Lavamos, limpamos a seco, engomamos ou fazemos pequenos arranjos, conforme o serviço solicitado.",
    icon: Shirt,
  },
  {
    number: "04",
    title: "Entregamos",
    shortTitle: "Entrega",
    description:
      "A sua roupa fica pronta, cuidada e preparada para levantamento ou entrega.",
    icon: PackageCheck,
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const ActiveIcon = steps[activeStep].icon;

  return (
    <section className="relative bg-[#f3f8ff]">
      <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-8 md:py-32 lg:px-12 xl:px-16">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 md:mb-24"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0755c7]">
            Como funciona
          </span>

          <h2 className="mt-5 max-w-4xl text-[clamp(2.8rem,7vw,6rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-[#062b61]">
            Simples para si.
            <span className="block text-[#0755c7]">
              Cuidado por nós.
            </span>
          </h2>
        </motion.div>

        {/* DESKTOP */}
        <div className="hidden grid-cols-[0.9fr_1.1fr] gap-20 lg:grid">
          {/* STEPS */}
          <div>
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  onViewportEnter={() => setActiveStep(index)}
                  viewport={{
                    amount: 0.55,
                  }}
                  className="flex min-h-[55vh] items-center border-t border-[#d7e3f1]"
                >
                  <div className="grid w-full grid-cols-[70px_1fr] gap-5 py-16">
                    <div className="text-sm font-semibold text-[#0755c7]">
                      {step.number}
                    </div>

                    <div>
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0755c7] shadow-sm">
                        <Icon size={20} />
                      </div>

                      <h3 className="text-4xl font-semibold tracking-[-0.05em] text-[#062b61] xl:text-5xl">
                        {step.title}
                      </h3>

                      <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* STICKY VISUAL */}
          <div className="relative">
            <div className="sticky top-28 flex h-[calc(100vh-9rem)] items-center">
              <div className="relative aspect-[4/5] max-h-[720px] w-full overflow-hidden rounded-[3rem] bg-[#0755c7] shadow-[0_35px_100px_rgba(6,43,97,0.18)]">
                {/* BLOBS */}
                <motion.div
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[#6bd6e8]/35"
                />

                <motion.div
                  animate={{
                    x: [0, -20, 0],
                    y: [0, 25, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/10"
                />

                {/* TOP */}
                <div className="absolute left-10 right-10 top-10 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                    Processo Bigblue
                  </span>

                  <span className="text-sm font-semibold text-white/80">
                    {steps[activeStep].number} / 04
                  </span>
                </div>

                {/* CENTER */}
                <div className="absolute inset-0 flex items-center justify-center px-12">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{
                        opacity: 0,
                        scale: 0.92,
                        y: 30,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.96,
                        y: -20,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="relative flex h-52 w-52 items-center justify-center rounded-full bg-white shadow-2xl xl:h-64 xl:w-64">
                        <motion.div
                          animate={{
                            scale: [1, 1.06, 1],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-5 rounded-full bg-[#eaf4ff]"
                        />

                        <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-[#0755c7] text-white">
                          <ActiveIcon size={42} strokeWidth={1.6} />
                        </div>
                      </div>

                      <h3 className="mt-10 text-5xl font-semibold tracking-[-0.06em] text-white">
                        {steps[activeStep].shortTitle}
                      </h3>

                      <div className="mt-5 flex items-center gap-2 text-sm text-white/70">
                        <Check size={15} />
                        Cuidado profissional
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* PROGRESS */}
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex gap-2">
                    {steps.map((step, index) => (
                      <div
                        key={step.number}
                        className="h-1 flex-1 overflow-hidden rounded-full bg-white/20"
                      >
                        <motion.div
                          animate={{
                            width: index <= activeStep ? "100%" : "0%",
                          }}
                          transition={{
                            duration: 0.4,
                          }}
                          className="h-full rounded-full bg-white"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE + TABLET */}
        <div className="space-y-4 lg:hidden">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_15px_50px_rgba(6,43,97,0.06)] md:p-8"
              >
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#edf6ff]" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0755c7] text-white">
                      <Icon size={20} />
                    </div>

                    <span className="text-xs font-semibold tracking-[0.15em] text-[#0755c7]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-10 text-3xl font-semibold tracking-[-0.05em] text-[#062b61]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-slate-600 md:max-w-xl md:text-base">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}