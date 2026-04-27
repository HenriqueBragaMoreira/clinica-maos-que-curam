import { Reveal } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section id="faq" className="flex justify-center items-center py-[82px]">
      <div className="flex flex-1 gap-[54px] max-w-[1150px]">
        <Reveal x={-40} y={0} className="flex flex-col flex-1 gap-6">
          <div className="flex items-center gap-2.5">
            <div className="rounded-full bg-title-topic size-2.5" />

            <h2 className="text-lg font-medium font-satoshi text-black tracking-[-0.54px]">
              FAQ
            </h2>
          </div>

          <span className="text-primary text-[46px] font-medium tracking-[-1.61px] leading-[54.51px] max-w-[440px]">
            Perguntas frequentes sobre quiropraxia
          </span>
        </Reveal>

        <Reveal x={40} y={0} delay={0.1} className="max-w-lg">
          <Accordion type="single" collapsible defaultValue="shipping">
            <AccordionItem value="shipping">
              <AccordionTrigger>
                Quais tipos de serviços vocês oferecem?
              </AccordionTrigger>
              <AccordionContent>
                Oferecemos ajustes quiropráticos, massagens terapêuticas,
                avaliações posturais e muito mais. Cada tratamento é
                desenvolvido para aliviar dores e promover bem-estar real
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="returns">
              <AccordionTrigger>
                Como faço para agendar uma consulta?
              </AccordionTrigger>
              <AccordionContent>
                Você pode agendar facilmente pelo nosso site ou nos ligando
                diretamente pelo (11) 91421-5301. O processo é rápido e simples
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support">
              <AccordionTrigger>
                O que esperar durante minha primeira consulta?
              </AccordionTrigger>
              <AccordionContent>
                Na sua primeira visita, nossa equipe fará uma avaliação completa
                da sua coluna e postura para indicar o tratamento mais adequado
                às suas necessidades
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support1">
              <AccordionTrigger>
                Os tratamentos são personalizados?
              </AccordionTrigger>
              <AccordionContent>
                Sim! Cada paciente é avaliado individualmente. Adaptamos as
                técnicas quiropráticas de acordo com o seu histórico de saúde,
                dores e objetivos de bem-estar
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support2">
              <AccordionTrigger>
                Vocês oferecem planos de tratamento?
              </AccordionTrigger>
              <AccordionContent>
                Sim, temos planos de acompanhamento quiroprático com sessões
                programadas para garantir melhores resultados ao longo do tempo
                e de forma mais acessível
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support3">
              <AccordionTrigger>
                Qual é a política de cancelamento?
              </AccordionTrigger>
              <AccordionContent>
                Solicitamos que cancelamentos sejam feitos com pelo menos 24h de
                antecedência. Entre em contato pelo telefone ou WhatsApp para
                remarcar sua consulta sem nenhum custo adicional
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
