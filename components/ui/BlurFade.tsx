"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  inView?: boolean;
  yOffset?: number;
  blur?: string;
}

export function BlurFade({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  inView = false,
  yOffset = 18,
  blur = "8px",
}: BlurFadeProps) {
  const animation = {
    hidden: {
      opacity: 0,
      y: yOffset,
      filter: `blur(${blur})`,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  };

  if (inView) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        variants={animation}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={animation}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}