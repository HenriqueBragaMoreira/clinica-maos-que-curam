"use client";

import { type HTMLMotionProps, motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children?: ReactNode;
  /** Delay em segundos antes da animação começar. */
  delay?: number;
  /** Deslocamento vertical inicial (px). Use 0 para entrar só pela lateral. */
  y?: number;
  /** Deslocamento horizontal inicial (px). Negativo entra pela esquerda. */
  x?: number;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "children">;

/**
 * Revela o conteúdo (fade + deslocamento) quando ele entra na viewport.
 * Anima apenas `opacity` e `transform` e dispara uma única vez.
 * Respeita `prefers-reduced-motion`: sem movimento, aparece instantaneamente.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  x = 0,
  className,
  ...props
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
