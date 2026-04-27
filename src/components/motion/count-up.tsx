"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

type CountUpProps = {
  /** Valor final do contador. */
  to: number;
  prefix?: string;
  suffix?: string;
  /** Duração da contagem em segundos. */
  duration?: number;
  className?: string;
};

/**
 * Anima um número de 0 até `to` quando entra na viewport.
 * Atualiza o texto direto no DOM (sem re-render por frame).
 * Com `prefers-reduced-motion` mostra o valor final imediatamente.
 */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1.6,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;

    if (reduce) {
      node.textContent = `${prefix}${to.toLocaleString("pt-BR")}${suffix}`;
      return;
    }

    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        node.textContent = `${prefix}${Math.round(latest).toLocaleString("pt-BR")}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [inView, to, prefix, suffix, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
