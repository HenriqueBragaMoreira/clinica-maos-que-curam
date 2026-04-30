/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */

import { Star } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

type Testimonial = {
  stars: number;
  desc: string;
  name: string;
};

export function TestimonialsSection() {
  const testimonialsGroup1: Testimonial[] = [
    {
      stars: 5,
      desc: "Uma experiência única! Poder vivenciar a combinação completa de quiropraxia e massoterapia foi algo realmente inovador e renovador para o corpo e mente. Muito obrigado a toda a equipe, extremamente competente e atenciosa!",
      name: "Henrique Braga",
    },
    {
      stars: 5,
      desc: "Todos deviam fazer uma sequência desse tratamento para saúde do corpo, faço e sempre indico pois é sensacional!",
      name: "Cintia Kahil Ortiz",
    },
    {
      stars: 5,
      desc: "Simplesmente maravilhoso, ótimo atendimento, procedimento e ambiente",
      name: "Camila Miguel",
    },
  ];

  const testimonialsGroup2: Testimonial[] = [
    {
      stars: 5,
      desc: "Um local harmonioso de pessoas extremamente agradáveis. E profissionais dedicados",
      name: "Fabricio Barbosa",
    },
    {
      stars: 5,
      desc: "Atendimento incrível do início ao fim, me trouxe uma melhora surreal nas dores, indico de olhos fechados!!!",
      name: "Amanda Anjos",
    },
    {
      stars: 5,
      desc: "Sempre saio melhor do que chego! Lugar abençoado 🙏🏾🙌🏾",
      name: "Erick Torres",
    },
  ];

  const testimonialsGroup3: Testimonial[] = [
    {
      stars: 5,
      desc: "Achei top é ótimo atendimento.",
      name: "Dra Caren Silva",
    },
    {
      stars: 5,
      desc: "Excelência em atendimento",
      name: "milena argollo",
    },
    {
      stars: 5,
      desc: "Excelente, ótimos profissionais. Super recomendo!",
      name: "Arquitetura em Movimento",
    },
  ];

  const columns = [testimonialsGroup1, testimonialsGroup2, testimonialsGroup3];

  return (
    <section
      id="testimonials"
      className="flex justify-center items-center py-16 lg:py-[82px] bg-white"
    >
      <div className="flex flex-col items-center flex-1 gap-10 lg:gap-[52px] max-w-[1190px] px-5">
        <Reveal className="flex flex-col gap-5">
          <div className="flex items-center justify-center gap-2.5">
            <div className="rounded-full bg-title-topic size-2.5" />

            <h2 className="text-lg font-medium font-satoshi text-black tracking-[-0.54px]">
              Depoimentos
            </h2>
          </div>

          <p className="text-primary text-3xl lg:text-[46px] font-medium max-w-[550px] text-center tracking-[-1.61px] leading-tight lg:leading-[54.51px]">
            O que nossos pacientes dizem sobre o tratamento
          </p>
        </Reveal>

        <div className="flex flex-col lg:flex-row justify-center gap-5 lg:gap-6 w-full">
          {columns.map((group, columnIndex) => (
            <Stagger
              key={columnIndex}
              className="flex-1 flex flex-col gap-5 items-stretch"
            >
              {group.map((testimonial) => (
                <StaggerItem
                  key={testimonial.name}
                  whileHover={{ y: -4 }}
                  className="w-full flex flex-col items-start gap-6 bg-[#FFFCFA] border border-[#9C63491A] rounded-3xl py-8 px-7 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-center gap-1">
                    {Array.from({ length: testimonial.stars }).map(
                      (_, index) => (
                        <Star
                          size={17}
                          key={index}
                          className="fill-amber-500 text-amber-500"
                        />
                      ),
                    )}
                  </div>

                  <span
                    className="text-primary text-xl font-medium font-satoshi tracking-[-0.60px] leading-[32px] max-h-24 overflow-hidden line-clamp-3"
                    title={testimonial.desc}
                  >
                    {testimonial.desc}
                  </span>

                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-gray-500 size-12" />

                    <span className="text-primary text-[22px] font-medium font-satoshi tracking-[-0.66px] leading-[26.4px]">
                      {testimonial.name}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          ))}
        </div>
      </div>
    </section>
  );
}
