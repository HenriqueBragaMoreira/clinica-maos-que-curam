/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonialsGroup1 = [
    {
      stars: 5,
      desc: "A truly rejuvenating experience! The aromatherapy massage",
      name: "Sarah Thompson",
    },
    {
      stars: 4,
      desc: "The detox body scrub left my skin feeling soft and refreshed. I loved every moment of the experience!",
      name: "Rachel Brown",
    },
    {
      stars: 5,
      desc: "I’ve never felt more pampered. The facial was so relaxing, and my skin feels amazing.",
      name: "Linda Harris",
    },
  ];

  const testimonialsGroup2 = [
    {
      stars: 5,
      desc: "The luxury facial treatment was amazing. My skin feels smoother and looks brighter.",
      name: "Emily Richardson",
    },
    {
      stars: 5,
      desc: "Such a wonderful experience from start to finish. The detox scrub left my skin glowing, and I feel so rejuvenated easily!",
      name: "David Lee",
    },
    {
      stars: 4,
      desc: "An exceptional spa experience. The staff was professional, and the atmosphere was so calming.",
      name: "Olivia King",
    },
  ];

  const testimonialsGroup3 = [
    {
      stars: 4,
      desc: "Hot stone therapy was exactly what I needed. My muscles feel so much more relaxed.",
      name: "Jennifer Miller",
    },
    {
      stars: 5,
      desc: "Reflexology was a game-changer! I feel more energized and balanced. It’s the perfect way to unwind.",
      name: "Mark Williams",
    },
    {
      stars: 5,
      desc: "Reflexology was a game-changer! I feel more energized and balanced. It’s the perfect way to unwind.",
      name: "Andrew Peterson",
    },
  ];
  return (
    <section
      id="testimonials"
      className="flex justify-center items-center py-[82px] bg-white"
    >
      <div className="flex flex-col items-center flex-1 gap-[52px] max-w-[1150px]">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-center gap-2.5">
            <div className="rounded-full bg-title-topic size-2.5" />

            <h2 className="text-lg font-medium font-satoshi text-black tracking-[-0.54px]">
              Testimonials
            </h2>
          </div>

          <p className="text-primary text-[46px] font-medium max-w-[550px] text-center tracking-[-1.61px] leading-[54.51px]">
            What our clients say about their experience
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <div className="flex-1 flex flex-col gap-5 items-center">
            {testimonialsGroup1.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col items-start gap-6 bg-[#FFFCFA] border border-[#9C63491A] rounded-3xl py-8 px-7"
              >
                <div className="flex items-center justify-center gap-1">
                  {Array.from({ length: testimonial.stars }).map((_, index) => (
                    <Star
                      size={17}
                      key={`sarah-star-${index}`}
                      className="fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>

                <span className="text-primary text-xl font-medium font-satoshi tracking-[-0.60px] leading-[32px]">
                  {testimonial.desc}
                </span>

                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gray-500 size-12" />

                  <span className="text-primary text-[22px] font-medium font-satoshi tracking-[-0.66px] leading-[26.4px]">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 flex flex-col gap-5 items-center">
            {testimonialsGroup2.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col items-start gap-6 bg-[#FFFCFA] border border-[#9C63491A] rounded-3xl py-8 px-7"
              >
                <div className="flex items-center justify-center gap-1">
                  {Array.from({ length: testimonial.stars }).map((_, index) => (
                    <Star
                      size={17}
                      key={`sarah-star-${index}`}
                      className="fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>

                <span className="text-primary text-xl font-medium font-satoshi tracking-[-0.60px] leading-[32px]">
                  {testimonial.desc}
                </span>

                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gray-500 size-12" />

                  <span className="text-primary text-[22px] font-medium font-satoshi tracking-[-0.66px] leading-[26.4px]">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 flex flex-col gap-5 items-center">
            {testimonialsGroup3.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col items-start gap-6 bg-[#FFFCFA] border border-[#9C63491A] rounded-3xl py-8 px-7"
              >
                <div className="flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      size={17}
                      key={`sarah-star-${index}`}
                      className="fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>

                <span className="text-primary text-xl font-medium font-satoshi tracking-[-0.60px] leading-[32px]">
                  {testimonial.desc}
                </span>

                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gray-500 size-12" />

                  <span className="text-primary text-[22px] font-medium font-satoshi tracking-[-0.66px] leading-[26.4px]">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
