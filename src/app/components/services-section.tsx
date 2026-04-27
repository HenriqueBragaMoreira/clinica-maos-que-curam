import {
  CalendarCheck,
  Flower,
  Hand,
  type LucideIcon,
  PersonStanding,
  ScanLine,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: PersonStanding,
    title: "Ajuste Quiroprático",
    description:
      "Realinhamento da coluna com técnicas manuais precisas, aliviando dores e devolvendo mobilidade ao seu dia a dia.",
  },
  {
    icon: Hand,
    title: "Massoterapia",
    description:
      "Massagens terapêuticas que liberam a tensão muscular, melhoram a circulação e potencializam o tratamento quiroprático.",
  },
  {
    icon: ScanLine,
    title: "Avaliação Postural",
    description:
      "Análise completa da sua postura e coluna para identificar a origem das dores e traçar o tratamento ideal.",
  },
  {
    icon: CalendarCheck,
    title: "Plano de Acompanhamento",
    description:
      "Sessões programadas e contínuas para manter os resultados a longo prazo, com acompanhamento próximo da equipe.",
  },
  {
    icon: Sparkles,
    title: "Sessão Combinada",
    description:
      "Quiropraxia + massoterapia numa única sessão — tratamento completo para corpo e mente.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="flex justify-center items-center py-[72px]"
    >
      <div className="flex flex-col items-center flex-1 gap-[72px] max-w-[1100px]">
        <Reveal className="flex flex-col gap-5">
          <div className="flex items-center justify-center gap-2.5">
            <div className="rounded-full bg-title-topic size-2.5" />

            <h2 className="text-lg font-medium font-satoshi text-black tracking-[-0.54px]">
              Serviços
            </h2>
          </div>

          <p className="text-primary text-5xl font-medium max-w-[550px] text-center tracking-[-1.61px] leading-[54px]">
            Serviços quiropráticos para sua saúde total
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <StaggerItem
                key={service.title}
                whileHover={{ y: -6 }}
                className="flex flex-col justify-between bg-white p-7 rounded-3xl h-[325px] hover:shadow-lg transition-shadow"
              >
                <Icon className="text-title-topic" size={54} />

                <div className="flex flex-col gap-2 *:font-medium">
                  <span className="text-2xl text-primary tracking-[-0.60px] leading-[38px]">
                    {service.title}
                  </span>

                  <span className="text-secondary font-satoshi tracking-[-0.40px]">
                    {service.description}
                  </span>
                </div>
              </StaggerItem>
            );
          })}

          <StaggerItem
            whileHover={{ scale: 1.02 }}
            className="flex flex-col justify-between bg-title-topic p-7 rounded-3xl h-[325px]"
          >
            <Flower className="text-white" size={54} />

            <span className="text-white text-[28px] font-semibold">
              Agende sua sessão de quiropraxia
            </span>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
