"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contactos", href: "#contactos" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 md:px-8 lg:px-12 xl:px-16">
          {/* LOGO */}
          <a
            href="#inicio"
            className="relative z-[60] flex items-center"
            onClick={() => setMenuOpen(false)}
            aria-label="Lavandaria Bigblue"
          >
            <Image
              src="/logo/Bigblue.png"
              alt="Lavandaria Bigblue"
              width={260}
              height={90}
              priority
              className="h-auto w-[145px] object-contain sm:w-[165px] lg:w-[185px]"
            />
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-9 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-[#0755c7]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <a
            href="https://wa.me/351937533019"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#0755c7] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#063f98] hover:shadow-lg lg:flex"
          >
            <MessageCircle size={17} />
            WhatsApp
          </a>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-[#062b61] backdrop-blur lg:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#f8fbff] lg:hidden"
          >
            <div className="flex h-full flex-col px-5 pb-8 pt-28">
              <nav className="flex flex-1 flex-col justify-center gap-2">
                {links.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: 0.05 + index * 0.06,
                    }}
                    className="border-b border-slate-200 py-5 text-[2rem] font-semibold tracking-[-0.04em] text-[#062b61]"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <motion.a
                href="https://wa.me/351937533019"
                target="_blank"
                rel="noreferrer"
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="flex items-center justify-center gap-2 rounded-full bg-[#0755c7] px-6 py-4 font-semibold text-white"
              >
                <MessageCircle size={19} />
                Falar connosco
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}