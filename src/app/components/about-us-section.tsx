import {
  BadgeCheck,
  CheckIcon,
  Flower,
  Gem,
  HeartHandshake,
  Leaf,
  Pipette,
  User,
} from "lucide-react";
import { Button } from "@/components/button";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

const checklist = [
  "Profissionais habilitados e registrados",
  "Avaliação individual para cada paciente",
  "Tratamentos sem remédios ou cirurgia",
  "+10 mil pacientes atendidos",
];

const featureIconClassName =
  "text-title-topic transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110";

export function AboutUsSection() {
  return (
    <section
      id="about-us"
      className="flex justify-center items-center py-16 lg:py-[82px]"
    >
      <div className="flex flex-col items-center flex-1 gap-14 lg:gap-[78px] max-w-[1190px] px-5">
        <Reveal className="flex flex-col items-center gap-8">
          <Flower className="text-title-topic" size={58} />

          <p className="text-primary text-center text-xl lg:text-2xl font-medium tracking-[-0.60px] leading-[32px] lg:leading-[38px] max-w-[675px]">
            Nossas manipulações e tratamentos quiropráticos visam liberar tensão
            muscular, melhorar a circulação, estimular o sistema nervoso e
            restaurar o equilíbrio natural do seu corpo
          </p>
        </Reveal>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          <Reveal
            x={-40}
            y={0}
            className="w-full min-h-[280px] lg:w-auto lg:min-h-[445px] lg:min-w-[550px] rounded-3xl bg-title-topic"
          />

          <Reveal
            x={40}
            y={0}
            className="flex flex-col gap-5 items-center lg:items-start text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-2.5">
              <div className="rounded-full bg-title-topic size-2.5" />

              <h2 className="text-lg font-medium font-satoshi text-black tracking-[-0.54px]">
                Sobre Nós
              </h2>
            </div>

            <p className="text-3xl lg:text-5xl text-primary font-medium tracking-[-1.61px] leading-tight lg:leading-[54.5px]">
              Conheça nosso compromisso com a sua saúde
            </p>

            <span className="text-secondary font-medium font-satoshi text-lg tracking-[-0.54px] max-w-[500px]">
              Com uma equipe experiente, oferecemos tratamentos quiropráticos
              que valorizam seu bem-estar natural. Com foco em terapias não
              invasivas, atendemos pacientes que buscam alívio e qualidade de
              vida de verdade
            </span>

            <Button className="mt-3.5 max-w-fit">Agendar agora</Button>
          </Reveal>
        </div>

        <Stagger className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-6 w-full px-4">
          <StaggerItem className="group flex flex-col flex-1 items-center gap-8">
            <Pipette
              className={featureIconClassName}
              size={54}
              strokeWidth={1.5}
            />

            <div className="flex flex-col items-center gap-3 *:font-satoshi *:font-medium *:text-center">
              <h3 className="text-primary text-[22px] tracking-[-0.66px] leading-[26.4px]">
                Tratamentos Personalizados
              </h3>
              <p className="text-lg text-secondary tracking-[-0.54px]">
                Cada paciente recebe um atendimento individual, desenvolvido
                para tratar sua necessidade específica
              </p>
            </div>
          </StaggerItem>

          <div className="h-px w-full lg:h-auto lg:w-px lg:self-stretch bg-title-topic/30" />

          <StaggerItem className="group flex flex-col flex-1 items-center gap-8">
            <User
              className={featureIconClassName}
              size={54}
              strokeWidth={1.5}
            />

            <div className="flex flex-col items-center gap-3 *:font-satoshi *:font-medium *:text-center">
              <h3 className="text-primary text-[22px] tracking-[-0.66px] leading-[26.4px]">
                Quiropraxistas Experientes
              </h3>
              <p className="text-lg text-secondary tracking-[-0.54px]">
                Nossos profissionais são formados e oferecem tratamentos de alta
                qualidade e resultados reais
              </p>
            </div>
          </StaggerItem>

          <div className="h-px w-full lg:h-auto lg:w-px lg:self-stretch bg-title-topic/30" />

          <StaggerItem className="group flex flex-col flex-1 items-center gap-8">
            <Gem className={featureIconClassName} size={54} strokeWidth={1.5} />

            <div className="flex flex-col items-center gap-3 *:font-satoshi *:font-medium *:text-center">
              <h3 className="text-primary text-[22px] tracking-[-0.66px] leading-[26.4px]">
                Ambiente Acolhedor
              </h3>
              <p className="text-lg text-secondary tracking-[-0.54px]">
                Desfrute de um espaço tranquilo e aconchegante que favorece a
                recuperação e o bem-estar
              </p>
            </div>
          </StaggerItem>
        </Stagger>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          <div className="flex flex-col gap-5">
            <Reveal
              x={-40}
              y={0}
              className="flex flex-col gap-5 items-center lg:items-start text-center lg:text-left"
            >
              <div className="flex items-center gap-2.5">
                <div className="rounded-full bg-title-topic size-2.5" />

                <h2 className="text-lg font-medium font-satoshi text-black tracking-[-0.54px]">
                  Por que nos escolher
                </h2>
              </div>

              <p className="text-3xl lg:text-5xl text-primary font-medium tracking-[-1.61px] leading-tight lg:leading-[54.5px]">
                A combinação ideal de técnica e cuidado real
              </p>

              <span className="text-secondary font-medium font-satoshi text-lg tracking-[-0.54px] max-w-[500px]">
                Nossa equipe de especialistas oferece tratamentos personalizados
                e não invasivos para você se sentir e viver muito melhor
              </span>
            </Reveal>

            <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3 mx-auto lg:mx-0">
              {checklist.map((item) => (
                <StaggerItem
                  key={item}
                  x={-12}
                  y={0}
                  className="flex items-center gap-3.5"
                >
                  <CheckIcon className="text-title-topic shrink-0" size={20} />

                  <p className="text-primary text-lg font-medium font-satoshi tracking-[-0.54px]">
                    {item}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal
            x={40}
            y={0}
            className="w-full min-h-[280px] lg:w-auto lg:min-h-[445px] lg:min-w-[550px] rounded-3xl bg-title-topic"
          />
        </div>

        <Stagger className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-6 w-full px-4">
          <StaggerItem className="group flex flex-col flex-1 items-center gap-8">
            <Leaf
              className={featureIconClassName}
              size={54}
              strokeWidth={1.5}
            />

            <div className="flex flex-col items-center gap-3 *:font-satoshi *:font-medium *:text-center">
              <h3 className="text-primary text-[22px] tracking-[-0.66px] leading-[26.4px]">
                Técnicas Não Invasivas
              </h3>
              <p className="text-lg text-secondary tracking-[-0.54px]">
                Tratamentos sem medicamentos ou cirurgias, respeitando o ritmo
                natural do seu corpo
              </p>
            </div>
          </StaggerItem>

          <div className="h-px w-full lg:h-auto lg:w-px lg:self-stretch bg-title-topic/30" />

          <StaggerItem className="group flex flex-col flex-1 items-center gap-8">
            <BadgeCheck
              className={featureIconClassName}
              size={54}
              strokeWidth={1.5}
            />

            <div className="flex flex-col items-center gap-3 *:font-satoshi *:font-medium *:text-center">
              <h3 className="text-primary text-[22px] tracking-[-0.66px] leading-[26.4px]">
                Resultados Comprovados
              </h3>
              <p className="text-lg text-secondary tracking-[-0.54px]">
                Milhares de pacientes atendidos e avaliações cinco estrelas que
                confirmam nossa qualidade
              </p>
            </div>
          </StaggerItem>

          <div className="h-px w-full lg:h-auto lg:w-px lg:self-stretch bg-title-topic/30" />

          <StaggerItem className="group flex flex-col flex-1 items-center gap-8">
            <HeartHandshake
              className={featureIconClassName}
              size={54}
              strokeWidth={1.5}
            />

            <div className="flex flex-col items-center gap-3 *:font-satoshi *:font-medium *:text-center">
              <h3 className="text-primary text-[22px] tracking-[-0.66px] leading-[26.4px]">
                Atendimento Humanizado
              </h3>
              <p className="text-lg text-secondary tracking-[-0.54px]">
                Escuta atenta e cuidado real em cada sessão, do primeiro contato
                ao acompanhamento
              </p>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
