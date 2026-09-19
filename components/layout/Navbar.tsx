"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
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
        <div className="mx-auto flex h-[84px] max-w-[1500px] items-center justify-between px-5 md:px-8 lg:px-12 xl:px-16">
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
          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-[#0755c7]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-[#062b61] backdrop-blur transition-colors hover:border-[#0755c7] lg:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
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
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-b border-slate-200 py-5 text-[2rem] font-semibold tracking-[-0.04em] text-[#062b61] transition-colors hover:text-[#0755c7]"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* MOBILE BOTTOM INFO */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                }}
                className="border-t border-slate-200 pt-6"
              >
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0755c7]">
                  Lavandaria Bigblue
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}