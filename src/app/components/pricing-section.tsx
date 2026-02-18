/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */
export function PricingSection() {
  return (
    <section
      id="pricing"
      className="flex justify-center items-center py-[82px]"
    >
      <div className="flex flex-col items-center flex-1 gap-[52px] max-w-[1150px]">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-center gap-2.5">
            <div className="rounded-full bg-title-topic size-2.5" />

            <h2 className="text-lg font-medium font-satoshi text-black tracking-[-0.54px]">
              Pricing
            </h2>
          </div>

          <p className="text-primary text-[46px] font-medium max-w-[550px] text-center tracking-[-1.61px] leading-[54.51px]">
            Affordable pricing for premium spa experiences
          </p>
        </div>

        <div className="flex items-center justify-center gap-10 w-full">
          <div className="min-w-[550px] min-h-[550px] rounded-3xl bg-title-topic" />

          <div className="flex flex-col flex-1 gap-12">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl text-nowrap font-medium text-primary tracking-[-0.60px]">
                    Aromatherapy Massage
                  </h3>

                  <div className="h-px w-full bg-black/20" />

                  <div className="flex items-center gap-1 *:font-medium *:font-satoshi *:text-primary">
                    <span className="">From</span>
                    <span className="text-[22px]">$60</span>
                  </div>
                </div>

                <p className="text-secondary font-medium">
                  Essential oils, soothing music, heated towels.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
