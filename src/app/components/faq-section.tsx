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
        <div className="flex flex-col flex-1 gap-6">
          <div className="flex items-center gap-2.5">
            <div className="rounded-full bg-title-topic size-2.5" />

            <h2 className="text-lg font-medium font-satoshi text-black tracking-[-0.54px]">
              FAQ
            </h2>
          </div>

          <span className="text-primary text-[46px] font-medium tracking-[-1.61px] leading-[54.51px] max-w-[440px]">
            Frequently asked questions about spa
          </span>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="shipping"
          className="max-w-lg"
        >
          <AccordionItem value="shipping">
            <AccordionTrigger>
              What types of services do you offer?
            </AccordionTrigger>
            <AccordionContent>
              We offer a variety of services including massages, facials, body
              treatments, reflexology, and more. Each treatment is designed to
              help you relax and rejuvenate
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="returns">
            <AccordionTrigger>How do I book an appointment?</AccordionTrigger>
            <AccordionContent>
              You can easily book an appointment online through our website or
              by calling us directly at [Phone Number]
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="support">
            <AccordionTrigger>
              What should I expect during my first visit?
            </AccordionTrigger>
            <AccordionContent>
              During your first visit, you’ll be greeted by our friendly staff
              who will guide you through the service menu and help you select
              the best treatment for your needs
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="support1">
            <AccordionTrigger>
              Are your treatments customizable?
            </AccordionTrigger>
            <AccordionContent>
              During your first visit, you’ll be greeted by our friendly staff
              who will guide you through the service menu and help you select
              the best treatment for your needs
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="support2">
            <AccordionTrigger>Do you offer gift cards?</AccordionTrigger>
            <AccordionContent>
              During your first visit, you’ll be greeted by our friendly staff
              who will guide you through the service menu and help you select
              the best treatment for your needs
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="support3">
            <AccordionTrigger>
              What is your cancellation policy?
            </AccordionTrigger>
            <AccordionContent>
              During your first visit, you’ll be greeted by our friendly staff
              who will guide you through the service menu and help you select
              the best treatment for your needs
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
