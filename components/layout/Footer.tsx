import Image from "next/image";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#041f47] px-5 pb-8 pt-20 text-white md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-14 border-b border-white/10 pb-16 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          {/* BRAND */}
          <div>
            <a
              href="#inicio"
              className="inline-flex rounded-2xl bg-white px-4 py-3"
              aria-label="Lavandaria Bigblue"
            >
              <Image
                src="/logo/Bigblue.png"
                alt="Lavandaria Bigblue"
                width={300}
                height={100}
                className="h-auto w-[190px] object-contain md:w-[220px]"
              />
            </a>

            <p className="mt-6 max-w-md text-base leading-7 text-white/55">
              O seu parceiro de excelência em lavandaria, limpeza a seco,
              engomadoria, recolhas, entregas e costura.
            </p>

            <div className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#74d4e8]">
              Cascais · Desde 2020
            </div>
          </div>

          {/* NAV */}
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/35">
              Navegação
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <a
                href="#inicio"
                className="text-sm text-white/65 transition-colors hover:text-white"
              >
                Início
              </a>

              <a
                href="#servicos"
                className="text-sm text-white/65 transition-colors hover:text-white"
              >
                Serviços
              </a>

              <a
                href="#sobre"
                className="text-sm text-white/65 transition-colors hover:text-white"
              >
                Sobre
              </a>

              <a
                href="#contactos"
                className="text-sm text-white/65 transition-colors hover:text-white"
              >
                Contactos
              </a>
            </div>
          </div>

          {/* CONTACTOS */}
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/35">
              Fale connosco
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <a
                href="https://wa.me/351937533019"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-white"
              >
                <MessageCircle size={16} />
                937 533 019
              </a>

              <a
                href="mailto:bigbluelaundry@gmail.com"
                className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-white"
              >
                <Mail size={16} />
                Email
              </a>

              <a
                href="https://www.instagram.com/bigblue.ls/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-white"
              >
                <FaInstagram size={16} />
                Instagram
              </a>

              <a
                href="https://maps.app.goo.gl/EaVboE8rvSYPjt7y5"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-white"
              >
                <MapPin size={16} />
                Vila Bicuda
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-3 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Lavandaria Bigblue</span>

          <span>O seu parceiro de excelência</span>
        </div>
      </div>
    </footer>
  );
}