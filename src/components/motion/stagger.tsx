"use client";

import {
  type HTMLMotionProps,
  motion,
  type TargetAndTransition,
  useReducedMotion,
  type Variants,
} from "motion/react";
import type { ReactNode } from "react";
import { useIsDesktop } from "@/hooks/use-is-desktop";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

type StaggerProps = {
  children: ReactNode;
  className?: string;
  /** Quanto do container precisa estar visível para disparar (0-1). */
  amount?: number;
};

/**
 * Container que revela os filhos (`StaggerItem`) em cascata ao entrar na tela.
 */
export function Stagger({ children, className, amount = 0.2 }: StaggerProps) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  /** Deslocamento horizontal inicial (px). Use para entrar pela lateral. */
  x?: number;
  /** Deslocamento vertical inicial (px). */
  y?: number;
  whileHover?: TargetAndTransition;
} & Omit<HTMLMotionProps<"div">, "variants" | "children" | "whileHover">;

/**
 * Item individual de um `Stagger`. Anima apenas `opacity`/`transform`.
 * Com `prefers-reduced-motion` aparece sem movimento.
 */
export function StaggerItem({
  children,
  className,
  x = 0,
  y = 24,
  whileHover,
  ...props
}: StaggerItemProps) {
  const reduce = useReducedMotion();
  const isDesktop = useIsDesktop();
  const offsetX = isDesktop ? x : 0;

  const item: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, x: offsetX, y },
    show: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      className={className}
      variants={item}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={reduce ? undefined : whileHover}
      {...props}
    >
      {children}
    </motion.div>
  );
}
