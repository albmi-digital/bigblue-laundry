"use client";

import { motion } from "motion/react";
import { Heart, ShieldCheck, Sparkles, Timer } from "lucide-react";

const values = [
  {
    title: "Cuidado",
    description: "Cada peça recebe o tratamento adequado.",
    icon: Heart,
  },
  {
    title: "Qualidade",
    description: "Um serviço pensado para resultados consistentes.",
    icon: Sparkles,
  },
  {
    title: "Confiança",
    description: "Uma relação próxima com cada cliente.",
    icon: ShieldCheck,
  },
  {
    title: "Comodidade",
    description: "Soluções que ajudam a simplificar o seu dia.",
    icon: Timer,
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-[#062b61] px-5 py-24 text-white md:px-8 md:py-32 lg:px-12 lg:py-40 xl:px-16"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#0755c7]/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-60 -left-40 h-[550px] w-[550px] rounded-full bg-[#74d4e8]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px]">
        {/* INTRO */}
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#74d4e8]">
              Sobre a Bigblue
            </span>

            <div className="mt-8 flex items-end gap-3">
              <span className="text-7xl font-semibold tracking-[-0.07em] text-white md:text-8xl">
                2020
              </span>

              <span className="mb-3 text-sm uppercase tracking-[0.15em] text-white/50">
                Desde
              </span>
            </div>
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-5xl text-[clamp(3rem,6.5vw,6.7rem)] font-semibold leading-[0.94] tracking-[-0.065em]"
            >
              Cuidamos da sua roupa para que tenha mais tempo
              <span className="text-[#74d4e8]"> para o que importa.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: 0.1,
              }}
              className="mt-10 max-w-2xl text-base leading-8 text-white/65 md:text-lg"
            >
              Desde 2020, a Lavandaria Bigblue presta em Cascais um serviço
              completo de tratamento de roupa. Da lavagem à limpeza a seco,
              passando pela engomadoria, costura, recolhas e entregas,
              procuramos tornar todo o processo mais simples para os nossos
              clientes.
            </motion.p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-20 h-px bg-white/10 md:my-28" />

        {/* VALUES */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.title}
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
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur transition-colors duration-300 hover:bg-white/[0.08]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#74d4e8]">
                  <Icon size={20} />
                </div>

                <div className="mt-14 text-xs font-medium tracking-[0.15em] text-white/35">
                  0{index + 1}
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  {value.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}