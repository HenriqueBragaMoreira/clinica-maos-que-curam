"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/cn";
import { ChevronRight, Menu, Phone } from "lucide-react";
import { useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";

const links = [
  { href: "#services", label: "Serviços" },
  { href: "#about-us", label: "Sobre nós" },
  { href: "#pricing", label: "Preços" },
  { href: "#testimonials", label: "Depoimentos" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      <div className="flex items-center justify-between flex-1 max-w-[1190px] px-5">
        <div>
          <Link className="font-semibold font-playwrite" href="/#hero">
            Quiropraxia Mãos que Curam
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-6 *:text-primary *:tracking-[-0.40px] *:leading-[25.6px] *:font-medium *:font-satoshi *:hover:text-primary/70 *:duration-150 *:transition">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button>Agendar agora</Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Abrir menu"
            className="lg:hidden flex items-center justify-center text-primary cursor-pointer -mr-2 p-2"
          >
            <Menu size={28} />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[86%] max-w-sm gap-0 p-0 flex flex-col"
          >
            <SheetHeader className="gap-1 px-6 pt-6 pb-5 border-b border-title-topic/10">
              <SheetTitle className="font-playwrite text-lg text-primary leading-tight">
                Mãos que Curam
              </SheetTitle>
              <SheetDescription className="font-satoshi text-sm text-secondary">
                Quiropraxia &amp; bem-estar
              </SheetDescription>
            </SheetHeader>

            <nav className="flex flex-col gap-1 px-3 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-3 py-3.5 text-lg font-medium font-satoshi text-primary tracking-[-0.40px] transition-colors duration-200 hover:bg-title-topic/8 active:bg-title-topic/12"
                >
                  {link.label}
                  <ChevronRight
                    size={18}
                    aria-hidden
                    className="text-title-topic/50 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
              ))}
            </nav>

            <div className="mt-auto flex gap-2 border-t border-title-topic/10 px-6 py-6">
              <a
                href="tel:+5511914215301"
                className="group flex items-center gap-3 font-satoshi font-medium transition-colors duration-200"
              >
                <span className="flex size-[38px] shrink-0 items-center justify-center rounded-full bg-title-topic/10 text-title-topic transition-colors duration-200 group-hover:bg-title-topic/15">
                  <Phone size={16} />
                </span>
              </a>

              <Button className="w-full justify-center">Agendar agora</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
