"use client";

import { motion } from "motion/react";

import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

const schedule = [
  {
    day: "Segunda — Sexta",
    time: "08:00 — 18:00",
  },
  {
    day: "Sábado",
    time: "08:00 — 13:00",
  },
  {
    day: "Domingos e feriados",
    time: "Fechado",
  },
];

export default function Contact() {
  return (
    <section
      id="contactos"
      className="relative overflow-hidden bg-[#f8fbff] px-5 py-24 md:px-8 md:py-32 lg:px-12 lg:py-40 xl:px-16"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* HEADER */}
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0755c7]">
            Contactos
          </span>

          <h2 className="mt-5 max-w-4xl text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.93] tracking-[-0.065em] text-[#062b61]">
            Estamos em Cascais.
            <span className="block text-[#0755c7]">Fale connosco.</span>
          </h2>
        </motion.div>

        {/* CONTENT */}
        <div className="mt-16 grid gap-5 lg:mt-24 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT */}
          <div className="grid gap-5">
            {/* LOCATION */}
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
              }}
              transition={{
                duration: 0.7,
              }}
              className="rounded-[2rem] bg-white p-7 shadow-[0_15px_50px_rgba(6,43,97,0.06)] md:p-9"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eaf4ff] text-[#0755c7]">
                <MapPin size={20} />
              </div>

              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-[#062b61]">
                Visite-nos
              </h3>

              <p className="mt-4 max-w-md leading-7 text-slate-600">
                Aldeamento Vila Bicuda
                <br />
                Rua dos Faisões, Loja 81.07
                <br />
                2750-689 Cascais
              </p>

              <a
                href="https://maps.app.goo.gl/EaVboE8rvSYPjt7y5"
                target="_blank"
                rel="noreferrer"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#0755c7]"
              >
                Abrir no Google Maps

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </motion.div>

            {/* PHONE + EMAIL */}
            <div className="grid gap-5 sm:grid-cols-2">
              <motion.a
                href="tel:+351214860820"
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
                  delay: 0.05,
                }}
                className="group rounded-[2rem] bg-[#0755c7] p-7 text-white transition-transform duration-300 hover:-translate-y-1 md:p-8"
              >
                <Phone size={22} />

                <div className="mt-12 text-xs uppercase tracking-[0.15em] text-white/55">
                  Telefone
                </div>

                <div className="mt-2 text-xl font-semibold">
                  214 860 820
                </div>
              </motion.a>

              <motion.a
                href="mailto:bigbluelaundry@gmail.com"
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
                  delay: 0.1,
                }}
                className="group overflow-hidden rounded-[2rem] bg-[#062b61] p-7 text-white transition-transform duration-300 hover:-translate-y-1 md:p-8"
              >
                <Mail size={22} />

                <div className="mt-12 text-xs uppercase tracking-[0.15em] text-white/50">
                  Email
                </div>

                <div className="mt-2 break-all text-sm font-semibold md:text-base">
                  bigbluelaundry@gmail.com
                </div>
              </motion.a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid gap-5">
            {/* MAP */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.98,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative min-h-[370px] overflow-hidden rounded-[2rem] bg-slate-200 md:min-h-[450px]"
            >
              <iframe
                title="Lavandaria Bigblue - Cascais"
                src="https://www.google.com/maps?q=Aldeamento%20Vila%20Bicuda%20Rua%20dos%20Faisoes%202750-689%20Cascais&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* SCHEDULE + SOCIAL */}
            <div className="grid gap-5 md:grid-cols-2">
              {/* HORÁRIO */}
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
                }}
                className="rounded-[2rem] bg-white p-7 shadow-[0_15px_50px_rgba(6,43,97,0.05)] md:p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf4ff] text-[#0755c7]">
                    <Clock3 size={19} />
                  </div>

                  <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#062b61]">
                    Horário
                  </h3>
                </div>

                <div className="mt-7 divide-y divide-slate-100">
                  {schedule.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between gap-5 py-4"
                    >
                      <span className="text-sm text-slate-600">
                        {item.day}
                      </span>

                      <span
                        className={`text-right text-sm font-semibold ${
                          item.time === "Fechado"
                            ? "text-slate-400"
                            : "text-[#062b61]"
                        }`}
                      >
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* SOCIAL */}
              <div className="grid gap-5">
                {/* WHATSAPP */}
                <motion.a
                  href="https://wa.me/351937533019"
                  target="_blank"
                  rel="noreferrer"
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
                    duration: 0.7,
                    delay: 0.05,
                  }}
                  className="group flex items-center justify-between rounded-[2rem] bg-white p-6 shadow-[0_15px_50px_rgba(6,43,97,0.05)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf4ff] text-[#0755c7]">
                      <MessageCircle size={19} />
                    </div>

                    <div>
                      <div className="font-semibold text-[#062b61]">
                        WhatsApp
                      </div>

                      <div className="mt-1 text-sm text-slate-500">
                        937 533 019
                      </div>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </motion.a>

                {/* INSTAGRAM */}
                <motion.a
                  href="https://www.instagram.com/bigblue.ls/"
                  target="_blank"
                  rel="noreferrer"
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
                    duration: 0.7,
                    delay: 0.1,
                  }}
                  className="group flex items-center justify-between rounded-[2rem] bg-white p-6 shadow-[0_15px_50px_rgba(6,43,97,0.05)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf4ff] text-[#0755c7]">
                      <FaInstagram size={19} />
                    </div>

                    <div>
                      <div className="font-semibold text-[#062b61]">
                        Instagram
                      </div>

                      <div className="mt-1 text-sm text-slate-500">
                        @bigblue.ls
                      </div>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}