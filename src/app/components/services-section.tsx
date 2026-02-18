/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */
import { Flower, HandHeart } from "lucide-react";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="flex justify-center items-center py-[72px]"
    >
      <div className="flex flex-col items-center flex-1 gap-[72px] max-w-[1100px]">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-center gap-2.5">
            <div className="rounded-full bg-title-topic size-2.5" />

            <h2 className="text-lg font-medium text-black tracking-[-0.54px]">
              Services
            </h2>
          </div>

          <p className="text-primary text-5xl font-medium max-w-[550px] text-center tracking-[-1.61px] leading-[54px]">
            Exclusive spa services for ultimate relaxation
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-white p-7 rounded-3xl h-[325px]"
            >
              <HandHeart className="text-title-topic" size={54} />

              <div className="flex flex-col gap-2 *:font-medium">
                <span className="text-2xl text-primary tracking-[-0.60px] leading-[38px]">
                  Relaxing massage
                </span>

                <span className="text-secondary font-satoshi tracking-[-0.40px]">
                  Indulge in a soothing massage using essential oils to ease
                  stress, promote relaxation & rejuvenate your body
                </span>
              </div>
            </div>
          ))}

          <div className="flex flex-col justify-between bg-title-topic p-7 rounded-3xl h-[325px]">
            <Flower className="text-white" size={54} />

            <span className="text-white text-[28px] font-semibold">
              Book your consultation call with us now!!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
