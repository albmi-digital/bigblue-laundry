"use client";

import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/351937533019"
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar Lavandaria Bigblue através do WhatsApp"
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        delay: 1.3,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.06,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        fixed
        bottom-5
        right-5
        z-40
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_12px_35px_rgba(0,0,0,0.18)]
        md:bottom-7
        md:right-7
        md:h-16
        md:w-16
      "
    >
      <FaWhatsapp className="text-[27px] md:text-[31px]" />

      {/* subtle pulse */}
      <motion.span
        animate={{
          scale: [1, 1.45, 1.45],
          opacity: [0.3, 0, 0],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute inset-0 rounded-full border border-white"
      />
    </motion.a>
  );
}