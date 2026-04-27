"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { Button } from "./button";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <header
      className={cn(
        "flex justify-center fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md animate-slide-down transition-[padding,background-color] duration-300",
        scrolled
          ? "py-3 bg-background/70 shadow-[0_1px_24px_-16px_rgba(0,0,0,0.6)]"
          : "py-5 bg-background",
      )}
    >
      <div className="flex items-center justify-between flex-1 max-w-[1150px]">
        <div>
          <Link className="font-semibold font-playwrite" href="/#hero">
            Quiropraxia Mãos que Curam
          </Link>
        </div>

        <div className="flex items-center gap-6 *:text-primary *:tracking-[-0.40px] *:leading-[25.6px] *:font-medium *:font-satoshi *:hover:text-primary/70 *:duration-150 *:transition">
          <Link href="#services">Serviços</Link>
          <Link href="#about-us">Sobre nós</Link>
          <Link href="#pricing">Preços</Link>
          <Link href="#testimonials">Depoimentos</Link>
        </div>

        <div>
          <Button>Agendar agora</Button>
        </div>
      </div>
    </header>
  );
}
