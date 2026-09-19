import Image from "next/image";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#062b61] px-3 py-3 sm:px-5 sm:py-5 lg:px-8 lg:py-8">
      <div
        className="
          relative
          mx-auto
          max-w-[1700px]
          overflow-hidden
          rounded-[2rem]
          bg-[#f7f6ed]
          px-6
          pb-8
          pt-10
          text-[#062b61]
          sm:rounded-[2.5rem]
          sm:px-10
          lg:px-16
          lg:pb-10
          lg:pt-16
          xl:px-24
        "
      >
        {/* TOP */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* LEFT */}
          <div>
            {/* LOGO */}
            <a
              href="#inicio"
              aria-label="Lavandaria Bigblue"
              className="inline-flex"
            >
              <Image
                src="/logo/Bigbluelogo.png"
                alt="Lavandaria Bigblue"
                width={220}
                height={80}
                className="h-auto w-[150px] object-contain sm:w-[175px]"
              />
            </a>

            {/* TITLE */}
            <h2
              className="
                mt-10
                max-w-md
                text-[clamp(2.2rem,4vw,4rem)]
                font-semibold
                leading-[0.98]
                tracking-[-0.055em]
              "
            >
              O seu parceiro
              <span className="block text-[#0755c7]">
                de excelência.
              </span>
            </h2>

            {/* WHATSAPP CTA */}
            <div className="mt-8">
              <a
                href="https://wa.me/351937533019"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#0755c7]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#0648a8]
                "
              >
                <FaWhatsapp size={17} />

                Falar connosco

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:pt-5">
            <p
              className="
                max-w-xl
                text-[clamp(1.7rem,3vw,3rem)]
                font-medium
                leading-[1.08]
                tracking-[-0.045em]
              "
            >
              Lavandaria, limpeza a seco, engomadoria, costura e recolhas.
              <span className="text-[#0755c7]">
                {" "}
                Cuidamos de tudo por si.
              </span>
            </p>

            {/* CONTACTS */}
            <div className="mt-10 space-y-5">
              <a
                href="tel:+351214860820"
                className="group flex w-fit items-center gap-3"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0755c7] text-white">
                  <Phone size={15} />
                </span>

                <span className="text-sm font-medium transition-colors group-hover:text-[#0755c7]">
                  214 860 820
                </span>
              </a>

              <a
                href="tel:+351937533019"
                className="group flex w-fit items-center gap-3"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0755c7] text-white">
                  <FaWhatsapp size={16} />
                </span>

                <span className="text-sm font-medium transition-colors group-hover:text-[#0755c7]">
                  937 533 019
                </span>
              </a>

              <a
                href="mailto:bigbluelaundry@gmail.com"
                className="group flex w-fit items-center gap-3"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0755c7] text-white">
                  <Mail size={15} />
                </span>

                <span className="text-sm font-medium transition-colors group-hover:text-[#0755c7]">
                  bigbluelaundry@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* SOCIAL + LOCATION */}
        <div className="mt-16 grid gap-12 border-t border-[#062b61]/10 pt-10 sm:grid-cols-2 lg:mt-20">
          {/* SOCIAL */}
          <div>
            <div className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#062b61]/40">
              Redes sociais
            </div>

            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/bigblue.ls/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#0755c7]
                  hover:text-white
                "
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="https://wa.me/351937533019"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#0755c7]
                  hover:text-white
                "
              >
                <FaWhatsapp size={17} />
              </a>
            </div>
          </div>

          {/* LOCATION */}
          <div>
            <div className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#062b61]/40">
              Localização
            </div>

            <a
              href="https://maps.app.goo.gl/EaVboE8rvSYPjt7y5"
              target="_blank"
              rel="noreferrer"
              className="group mt-5 flex max-w-[280px] items-start gap-3"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0755c7] text-white">
                <MapPin size={15} />
              </span>

              <span className="text-sm leading-6 transition-colors group-hover:text-[#0755c7]">
                Aldeamento Vila Bicuda, Rua dos Faisões, Loja 81.07, Cascais
              </span>
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 border-t border-[#062b61]/10 pt-6">
          <div className="flex flex-col gap-2 text-xs text-[#062b61]/50 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} BigBlue. Todos os direitos reservados.
            </span>

            <span>
              Website desenvolvido por{" "}
              <strong className="font-semibold text-[#0755c7]">
                Albmi
              </strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}