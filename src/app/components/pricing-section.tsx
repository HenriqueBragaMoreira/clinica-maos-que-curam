import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

type Plan = {
  name: string;
  description: string;
  prefix?: string;
  price: string;
};

const plans: Plan[] = [
  {
    name: "Ajuste Quiroprático",
    description:
      "Sessão individual de realinhamento da coluna e alívio de dores.",
    prefix: "A partir de",
    price: "R$___",
  },
  {
    name: "Massoterapia",
    description:
      "Massagem terapêutica para liberar tensões e relaxar a musculatura.",
    prefix: "A partir de",
    price: "R$___",
  },
  {
    name: "Avaliação Postural",
    description:
      "Avaliação completa de postura e coluna com plano de tratamento.",
    price: "R$___",
  },
  {
    name: "Plano Mensal",
    description: "Pacote de sessões programadas com valor reduzido por sessão.",
    prefix: "A partir de",
    price: "R$___",
  },
  {
    name: "Sessão Combinada",
    description:
      "Quiropraxia + massoterapia: tratamento completo numa só visita.",
    prefix: "A partir de",
    price: "R$___",
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="flex justify-center items-center py-16 lg:py-[82px]"
    >
      <div className="flex flex-col items-center flex-1 gap-10 lg:gap-[52px] max-w-[1190px] px-5">
        <Reveal className="flex flex-col gap-5">
          <div className="flex items-center justify-center gap-2.5">
            <div className="rounded-full bg-title-topic size-2.5" />

            <h2 className="text-lg font-medium font-satoshi text-black tracking-[-0.54px]">
              Preços
            </h2>
          </div>

          <p className="text-primary text-3xl lg:text-[46px] font-medium max-w-[550px] text-center tracking-[-1.61px] leading-tight lg:leading-[54.51px]">
            Preços acessíveis para um cuidado quiroprático
          </p>
        </Reveal>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 w-full">
          <Reveal
            x={-40}
            y={0}
            className="w-full min-h-[300px] lg:w-auto lg:min-w-[550px] lg:min-h-[550px] rounded-3xl bg-title-topic"
          />

          <Stagger className="flex flex-col w-full lg:flex-1 gap-8 lg:gap-12">
            {plans.map((plan) => (
              <StaggerItem
                key={plan.name}
                className="group flex flex-col gap-2"
              >
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-4 gap-y-1">
                  <h3 className="text-xl lg:text-2xl text-nowrap font-medium text-primary tracking-[-0.60px]">
                    {plan.name}
                  </h3>

                  <div className="h-px w-full bg-black/20 group-hover:bg-title-topic/50 transition-colors" />

                  <div className="flex items-center gap-1 font-medium font-satoshi">
                    {plan.prefix && (
                      <span className="truncate text-primary">
                        {plan.prefix}
                      </span>
                    )}
                    <span className="text-[22px] text-primary group-hover:text-title-topic transition-colors">
                      {plan.price}
                    </span>
                  </div>
                </div>

                <p className="text-secondary font-medium">{plan.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
