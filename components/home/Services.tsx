"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Scissors,
  Shirt,
  Sparkles,
  Truck,
  WashingMachine,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Lavandaria",
    description:
      "Tratamento profissional da sua roupa, com atenção a cada detalhe e a cada tecido.",
    icon: WashingMachine,
  },
  {
    number: "02",
    title: "Limpeza a seco",
    description:
      "Cuidados especializados para peças delicadas e tecidos que exigem tratamento específico.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Engomadoria",
    description:
      "Roupa impecavelmente engomada, pronta a vestir e cuidada até ao último detalhe.",
    icon: Shirt,
  },
  {
    number: "04",
    title: "Entregas e recolhas",
    description:
      "Recolhemos e entregamos a sua roupa para tornar todo o processo mais simples.",
    icon: Truck,
  },
  {
    number: "05",
    title: "Costura",
    description:
      "Pequenos arranjos e reparações para prolongar a vida das suas peças favoritas.",
    icon: Scissors,
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-white px-5 py-24 md:px-8 md:py-32 lg:px-12 xl:px-16"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0755c7]">
              Os nossos serviços
            </span>

            <h2 className="mt-5 max-w-xl text-[clamp(2.7rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-[#062b61]">
              Tudo o que a sua roupa precisa.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-slate-600 md:text-lg">
              Um serviço completo de tratamento de roupa, pensado para combinar
              qualidade, cuidado e conveniência.
            </p>

            <div className="mt-8 hidden lg:block">
              <div className="h-px w-full max-w-xs bg-slate-200" />

              <p className="mt-5 max-w-xs text-sm leading-6 text-slate-500">
                Desde 2020, em Cascais.
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
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
                    duration: 0.7,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className={`group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f8fbff] p-7 transition-shadow duration-300 hover:shadow-[0_25px_60px_rgba(6,43,97,0.10)] md:p-8 ${
                    index === services.length - 1 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#e5f3ff] transition-transform duration-700 group-hover:scale-125" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex h-13 w-13 items-center justify-center rounded-full bg-white text-[#0755c7] shadow-sm">
                        <Icon size={21} />
                      </div>

                      <span className="text-xs font-semibold tracking-[0.15em] text-slate-400">
                        {service.number}
                      </span>
                    </div>

                    <div className="mt-16 md:mt-20">
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#062b61]">
                        {service.title}
                      </h3>

                      <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 md:text-base">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#062b61] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#0755c7] group-hover:bg-[#0755c7] group-hover:text-white">
                        <ArrowUpRight size={17} />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}