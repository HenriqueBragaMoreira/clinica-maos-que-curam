/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */

import { Button } from "@/components/button";
import { Star } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="flex justify-center items-center pt-[148px] pb-14"
    >
      <div className="flex flex-col items-center flex-1 gap-[72px] max-w-[1150px]">
        <div className="space-y-7 max-w-[600px]">
          <div className="flex items-start justify-center gap-4">
            <div className="flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  size={17}
                  key={index}
                  className="fill-title-topic text-title-topic"
                />
              ))}
            </div>

            <span className="text-primary text-[15px] tracking-[0.45px] leading-[18px] font-inter font-medium uppercase">
              Trusted by 1000+ Partners
            </span>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col gap-4 items-center">
              <h1 className="text-[56px]/16.5 tracking-[-1.96px] text-center font-medium">
                Luxury yoga rituals for a serene escape
              </h1>

              <p className="text-lg tracking-[-0.54px] text-center text-secondary font-medium font-satoshi max-w-[500px]">
                Experience a peaceful retreat with our luxurious spa treatments,
                crafted to refresh your senses and restore harmony
              </p>
            </div>

            <div className="flex items-center justify-center gap-4">
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

        <div className="w-full h-[725px] bg-title-topic rounded-3xl" />

        <div className="flex items-center justify-around w-full">
          <div className="flex flex-col gap-1.5 *:font-medium text-center">
            <span className="text-title-topic text-5xl tracking-[-1.61px]">
              100+
            </span>

            <span className="text-description-topic text-lg tracking-[-0.54px]">
              Treatments offered
            </span>
          </div>

          <div className="flex flex-col gap-1.5 *:font-medium text-center">
            <span className="text-title-topic text-5xl tracking-[-1.61px]">
              50+
            </span>

            <span className="text-description-topic text-lg tracking-[-0.54px]">
              Certified therapists
            </span>
          </div>

          <div className="flex flex-col gap-1.5 *:font-medium text-center">
            <span className="text-title-topic text-5xl tracking-[-1.61px]">
              2000+
            </span>

            <span className="text-description-topic text-lg tracking-[-0.54px]">
              Satisfied clients
            </span>
          </div>

          <div className="flex flex-col gap-1.5 *:font-medium text-center">
            <span className="text-title-topic text-5xl tracking-[-1.61px]">
              300+
            </span>

            <span className="text-description-topic text-lg tracking-[-0.54px]">
              Unique wellness
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
