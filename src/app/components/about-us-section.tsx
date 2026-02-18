/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */

import { Button } from "@/components/button";
import { CheckIcon, Flower, Gem, Pipette, User } from "lucide-react";

export function AboutUsSection() {
  return (
    <section
      id="about-us"
      className="flex justify-center items-center py-[82px]"
    >
      <div className="flex flex-col items-center flex-1 gap-[78px] max-w-[1150px]">
        <div className="flex flex-col items-center gap-8">
          <Flower className="text-title-topic" size={58} />

          <p className="text-primary text-center text-2xl font-medium tracking-[-0.60px] leading-[38px] max-w-[675px]">
            Our deep tissue and therapeutic massages are designed to ease muscle
            tension, improve circulation, boost lymphatic flow, and restore a
            natural sense of calm and balance to your body
          </p>
        </div>

        <div className="flex items-center justify-center gap-12">
          <div className="min-h-[445px] min-w-[550px] rounded-3xl bg-title-topic" />

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <div className="rounded-full bg-title-topic size-2.5" />

              <h2 className="text-lg font-medium font-satoshi text-black tracking-[-0.54px]">
                About Us
              </h2>
            </div>

            <p className="text-5xl text-primary font-medium tracking-[-1.61px] leading-[54.5px]">
              Discover our spa’s commitment to wellness
            </p>

            <span className="text-secondary font-medium font-satoshi text-lg tracking-[-0.54px] max-w-[500px]">
              Under the guidance of our experienced team, we offer revitalizing
              spa treatments designed to enhance your natural beauty. With a
              focus on non-invasive therapies, our spa attracts clients from
              around the world seeking rejuvenation and relaxation
            </span>

            <Button className="mt-3.5 max-w-fit">Schedule now</Button>
          </div>
        </div>

        <div className="flex justify-center gap-6 w-full px-4">
          <div className="flex flex-col flex-1 items-center gap-8">
            <Pipette className="text-title-topic" size={54} strokeWidth={1.5} />

            <div className="flex flex-col items-center gap-3 *:font-satoshi *:font-medium *:text-center">
              <h3 className="text-primary text-[22px] tracking-[-0.66px] leading-[26.4px]">
                Customized Treatments
              </h3>
              <p className="text-lg text-secondary tracking-[-0.54px]">
                Every guest enjoys a tailored experience, carefully designed to
                address
              </p>
            </div>
          </div>

          <div className="w-px self-stretch bg-title-topic/30" />

          <div className="flex flex-col flex-1 items-center gap-8">
            <User className="text-title-topic" size={54} strokeWidth={1.5} />

            <div className="flex flex-col items-center gap-3 *:font-satoshi *:font-medium *:text-center">
              <h3 className="text-primary text-[22px] tracking-[-0.66px] leading-[26.4px]">
                Expert Therapists
              </h3>
              <p className="text-lg text-secondary tracking-[-0.54px]">
                Our skilled professionals provide high-quality treatments
              </p>
            </div>
          </div>

          <div className="w-px self-stretch bg-title-topic/30" />

          <div className="flex flex-col flex-1 items-center gap-8">
            <Gem className="text-title-topic" size={54} strokeWidth={1.5} />

            <div className="flex flex-col items-center gap-3 *:font-satoshi *:font-medium *:text-center">
              <h3 className="text-primary text-[22px] tracking-[-0.66px] leading-[26.4px]">
                Luxurious Ambience
              </h3>
              <p className="text-lg text-secondary tracking-[-0.54px]">
                Indulge in a serene & calming environment that promotes
                relaxation
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-12">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <div className="rounded-full bg-title-topic size-2.5" />

              <h2 className="text-lg font-medium font-satoshi text-black tracking-[-0.54px]">
                Why choose us
              </h2>
            </div>

            <p className="text-5xl text-primary font-medium tracking-[-1.61px] leading-[54.5px]">
              Experience the perfect blend of luxury & spa
            </p>

            <span className="text-secondary font-medium font-satoshi text-lg tracking-[-0.54px] max-w-[500px]">
              Our team of skilled professionals provides personalized,
              non-invasive treatments to help you look and feel your best
            </span>

            <div className="grid grid-cols-2 gap-3.5 pt-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex items-center gap-3.5">
                  <CheckIcon className="text-title-topic" size={20} />

                  <p className="text-primary text-lg font-medium font-satoshi tracking-[-0.54px]">
                    Skilled Professionals
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="min-h-[445px] min-w-[550px] rounded-3xl bg-title-topic" />
        </div>

        <div className="flex justify-center gap-6 w-full px-4">
          <div className="flex flex-col flex-1 items-center gap-8">
            <Pipette className="text-title-topic" size={54} strokeWidth={1.5} />

            <div className="flex flex-col items-center gap-3 *:font-satoshi *:font-medium *:text-center">
              <h3 className="text-primary text-[22px] tracking-[-0.66px] leading-[26.4px]">
                Customized Treatments
              </h3>
              <p className="text-lg text-secondary tracking-[-0.54px]">
                Every guest enjoys a tailored experience, carefully designed to
                address
              </p>
            </div>
          </div>

          <div className="w-px self-stretch bg-title-topic/30" />

          <div className="flex flex-col flex-1 items-center gap-8">
            <User className="text-title-topic" size={54} strokeWidth={1.5} />

            <div className="flex flex-col items-center gap-3 *:font-satoshi *:font-medium *:text-center">
              <h3 className="text-primary text-[22px] tracking-[-0.66px] leading-[26.4px]">
                Expert Therapists
              </h3>
              <p className="text-lg text-secondary tracking-[-0.54px]">
                Our skilled professionals provide high-quality treatments
              </p>
            </div>
          </div>

          <div className="w-px self-stretch bg-title-topic/30" />

          <div className="flex flex-col flex-1 items-center gap-8">
            <Gem className="text-title-topic" size={54} strokeWidth={1.5} />

            <div className="flex flex-col items-center gap-3 *:font-satoshi *:font-medium *:text-center">
              <h3 className="text-primary text-[22px] tracking-[-0.66px] leading-[26.4px]">
                Luxurious Ambience
              </h3>
              <p className="text-lg text-secondary tracking-[-0.54px]">
                Indulge in a serene & calming environment that promotes
                relaxation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
