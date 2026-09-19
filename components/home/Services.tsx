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
    imageAlt: "Serviço de lavandaria",
    bg: "from-[#dff3ff] via-[#c9ecff] to-[#a8dfff]",
    imageClass: "w-[220px] sm:w-[250px] md:w-[270px]",
    imageWrapClass: "justify-center",
  },
  {
    number: "02",
    title: "Limpeza a seco",
    description:
      "Cuidados especializados para peças delicadas e tecidos que exigem tratamento específico.",
    image: "/services/limpeza-seco.png",
    imageAlt: "Serviço de limpeza a seco",
    bg: "from-[#eaf7ff] via-[#dff3ff] to-[#bde6ff]",
    imageClass: "w-[220px] sm:w-[250px] md:w-[270px]",
    imageWrapClass: "justify-center",
  },
  {
    number: "03",
    title: "Engomadoria",
    description:
      "Roupa impecavelmente engomada, pronta a vestir e cuidada até ao último detalhe.",
    image: "/services/engomadoria.png",
    imageAlt: "Serviço de engomadoria",
    bg: "from-[#edf8ff] via-[#d9f1ff] to-[#bae8ff]",
    imageClass:
      "w-[300px] sm:w-[330px] md:w-[360px] -translate-y-8 md:-translate-y-10",
    imageWrapClass: "justify-center",
  },
  {
    number: "04",
    title: "Entregas e recolhas",
    description:
      "Recolhemos e entregamos a sua roupa para tornar todo o processo mais simples.",
    image: "/services/entregas.png",
    imageAlt: "Serviço de recolhas e entregas",
    bg: "from-[#dff4ff] via-[#cbeaff] to-[#aee0f4]",
    imageClass:
      "w-[210px] sm:w-[230px] md:w-[250px] -translate-y-1 md:-translate-y-2",
    imageWrapClass: "justify-center",
  },
  {
    number: "05",
    title: "Costura",
    description:
      "Pequenos arranjos e reparações para prolongar a vida das suas peças favoritas.",
    image: "/services/costura.png",
    imageAlt: "Serviço de costura",
    bg: "from-[#e8f7ff] via-[#d8f0ff] to-[#b7e6ff]",
    imageClass:
      "w-[300px] sm:w-[350px] md:w-[440px] -translate-y-4 md:-translate-y-8",
    imageWrapClass: "justify-center",
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
          <div className="grid gap-8 md:grid-cols-2">
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
                  className={`group relative overflow-visible ${
                    isLast ? "md:col-span-2" : ""
                  }`}
                >
                  {/* VISUAL AREA */}
                  <div
                    className={`relative ${
                      isLast ? "h-[320px] md:h-[360px]" : "h-[320px]"
                    }`}
                  >
                    {/* BACK CARD */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-[78%] rounded-[2rem] bg-gradient-to-br ${service.bg}`}
                    >
                      {/* CIRCLE LEFT */}
                      <div className="absolute bottom-6 left-4 h-24 w-24 rounded-full bg-[#0755c7]/10 md:bottom-6 md:left-6 md:h-28 md:w-28" />

                      {/* CIRCLE RIGHT */}
                      <div className="absolute right-4 top-4 h-24 w-24 rounded-full bg-white/20 md:right-6 md:top-6 md:h-28 md:w-28" />

                      {/* NUMBER */}
                      <div className="absolute right-6 top-6 z-20">
                        <span className="text-xs font-bold tracking-[0.16em] text-[#0755c7]/70">
                          {service.number}
                        </span>
                      </div>
                    </div>

                    {/* IMAGE COMING OUT */}
                    <motion.div
                      whileHover={{
                        y: -4,
                        scale: 1.02,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`absolute inset-x-0 bottom-0 z-20 flex ${service.imageWrapClass}`}
                    >
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={460}
                        height={460}
                        className={`
                          h-auto
                          object-contain
                          drop-shadow-[0_18px_40px_rgba(6,43,97,0.16)]
                          transition-transform
                          duration-700
                          group-hover:scale-[1.03]
                          ${service.imageClass}
                        `}
                        priority={index < 2}
                      />
                    </motion.div>
                  </div>

                  {/* CONTENT CARD */}
                  <div
                    className={`relative z-30 mx-4 -mt-4 rounded-[1.8rem] border border-slate-200/80 bg-white p-6 shadow-[0_18px_55px_rgba(6,43,97,0.10)] transition-shadow duration-300 group-hover:shadow-[0_28px_70px_rgba(6,43,97,0.16)] md:p-7 ${
                      isLast ? "md:mx-6 md:-mt-8" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#0755c7]">
                          Serviço {service.number}
                        </span>

                        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#062b61]">
                          {service.title}
                        </h3>
                      </div>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-[#f8fbff] text-[#062b61] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#0755c7] group-hover:bg-[#0755c7] group-hover:text-white">
                        <ArrowUpRight size={17} />
                      </div>
                    </div>

                    <p
                      className={`mt-4 text-sm leading-6 text-slate-600 md:text-base ${
                        isLast ? "max-w-2xl" : "max-w-md"
                      }`}
                    >
                      {service.description}
                    </p>
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