/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */

import { Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/button";
import { CountUp } from "@/components/motion/count-up";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="flex justify-center items-center pt-28 lg:pt-[148px] pb-14"
    >
      <div className="flex flex-col items-center flex-1 gap-12 lg:gap-[72px] max-w-[1190px] px-5">
        <div className="space-y-7 max-w-[600px]">
          <div className="flex items-start justify-center gap-3 animate-fade-up">
            <div className="flex items-center justify-center gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  size={17}
                  key={index}
                  className="fill-title-topic text-title-topic"
                />
              ))}
            </div>

            <span className="text-primary text-[15px] tracking-[0.45px] leading-[18px] font-inter font-medium uppercase">
              +10.000 Pacientes Atendidos
            </span>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col gap-4 items-center animate-fade-up [animation-delay:150ms]">
              <h1 className="text-[34px]/10 sm:text-4xl lg:text-[56px]/16.5 tracking-[-1.4px] lg:tracking-[-1.96px] text-center font-medium">
                Quiropraxia para uma vida livre de dores
              </h1>

              <p className="text-lg tracking-[-0.54px] text-center text-secondary font-medium font-satoshi max-w-[500px]">
                Experimente o alívio com nossos tratamentos quiropráticos,
                pensados para restaurar o equilíbrio e a saúde do seu corpo
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 animate-fade-up [animation-delay:300ms]">
              <Button>Agendar agora</Button>

              <Link
                className="text-lg text-primary font-satoshi font-medium hover:text-secondary duration-150 transition"
                href="#services"
              >
                Ver serviços
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full h-[360px] sm:h-[480px] lg:h-[725px] bg-title-topic rounded-3xl animate-fade-up [animation-delay:500ms]" />

        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-around w-full animate-fade-up [animation-delay:700ms]">
          <div className="flex flex-col gap-1.5 *:font-medium text-center">
            <CountUp
              to={7000}
              prefix="+"
              className="text-title-topic text-4xl lg:text-5xl tracking-[-1.61px]"
            />

            <span className="text-description-topic text-lg tracking-[-0.54px]">
              Tratamentos realizados
            </span>
          </div>

          <div className="flex flex-col gap-1.5 *:font-medium text-center">
            <CountUp
              to={9000}
              prefix="+"
              className="text-title-topic text-4xl lg:text-5xl tracking-[-1.61px]"
            />

            <span className="text-description-topic text-lg tracking-[-0.54px]">
              Pacientes satisfeitos
            </span>
          </div>

          <div className="flex flex-col gap-1.5 *:font-medium text-center">
            <CountUp
              to={400}
              prefix="+"
              className="text-title-topic text-4xl lg:text-5xl tracking-[-1.61px]"
            />

            <span className="text-description-topic text-lg tracking-[-0.54px]">
              Avaliações 5 estrelas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
