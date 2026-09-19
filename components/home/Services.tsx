"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Lavandaria",
    description:
      "Tratamento profissional da sua roupa, com atenção a cada detalhe e a cada tecido.",
    image: "/services/lavandaria.png",
    imageAlt: "Serviço de lavandaria Bigblue",
  },
  {
    number: "02",
    title: "Limpeza a seco",
    description:
      "Cuidados especializados para peças delicadas e tecidos que exigem tratamento específico.",
    image: "/services/limpeza-seco.png",
    imageAlt: "Serviço de limpeza a seco Bigblue",
  },
  {
    number: "03",
    title: "Engomadoria",
    description:
      "Roupa impecavelmente engomada, pronta a vestir e cuidada até ao último detalhe.",
    image: "/services/engomadoria.png",
    imageAlt: "Serviço de engomadoria Bigblue",
  },
  {
    number: "04",
    title: "Entregas e recolhas",
    description:
      "Recolhemos e entregamos a sua roupa para tornar todo o processo mais simples.",
    image: "/services/entregas.png",
    imageAlt: "Serviço de entregas e recolhas Bigblue",
  },
  {
    number: "05",
    title: "Costura",
    description:
      "Pequenos arranjos e reparações para prolongar a vida das suas peças favoritas.",
    image: "/services/costura.png",
    imageAlt: "Serviço de costura Bigblue",
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
              amount: 0.25,
            }}
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
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => {
              const isLast = index === services.length - 1;

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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className={`group relative ${
                    isLast ? "md:col-span-2" : ""
                  }`}
                >
                  {/* =================================================
                      IMAGE BACKGROUND
                  ================================================= */}

                  <div
                    className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#dff3ff] via-[#ccecff] to-[#8ed8ef] ${
                      isLast
                        ? "h-[280px] md:h-[330px]"
                        : "h-[280px] sm:h-[320px]"
                    }`}
                  >
                    {/* decorative background */}
                    <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/30" />

                    <div className="absolute -bottom-16 -left-12 h-44 w-44 rounded-full bg-[#0755c7]/10" />

                    <div className="absolute right-7 top-7 z-20">
                      <span className="text-xs font-bold tracking-[0.18em] text-[#0755c7]/55">
                        {service.number}
                      </span>
                    </div>

                    {/* IMAGE */}
                    <motion.div
                      className={`absolute inset-0 flex items-end ${
                        isLast
                          ? "justify-center md:justify-end md:pr-[10%]"
                          : "justify-center"
                      }`}
                      whileHover={{
                        scale: 1.035,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes={
                          isLast
                            ? "(max-width: 768px) 100vw, 65vw"
                            : "(max-width: 768px) 100vw, 35vw"
                        }
                        className="object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </motion.div>
                  </div>

                  {/* =================================================
                      CONTENT CARD
                      negative margin = overlapping effect
                  ================================================= */}

                  <div
                    className={`relative z-20 mx-3 -mt-8 rounded-[1.75rem] border border-slate-200/80 bg-white/95 p-6 shadow-[0_18px_55px_rgba(6,43,97,0.10)] backdrop-blur-xl transition-shadow duration-300 group-hover:shadow-[0_28px_70px_rgba(6,43,97,0.15)] md:mx-4 md:p-7 ${
                      isLast
                        ? "md:mx-6 md:-mt-12 md:grid md:grid-cols-[1fr_auto] md:items-end md:gap-12"
                        : ""
                    }`}
                  >
                    <div>
                      <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#0755c7]">
                        Serviço {service.number}
                      </span>

                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#062b61]">
                        {service.title}
                      </h3>

                      <p
                        className={`mt-3 text-sm leading-6 text-slate-600 md:text-base ${
                          isLast ? "max-w-xl" : "max-w-md"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* ARROW */}
                    <div
                      className={`mt-7 flex ${
                        isLast ? "md:mt-0" : "justify-end"
                      }`}
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-[#f8fbff] text-[#062b61] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#0755c7] group-hover:bg-[#0755c7] group-hover:text-white">
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