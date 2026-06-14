import { Play } from "lucide-react";
import stepVideoImage from "../../assets/images/perfect-smile.svg";

const steps = [
  {
    number: "1",
    title: "Scan",
    description:
      "We use an AI-powered scanner to take a detailed 3D image of your teeth.",
  },
  {
    number: "2",
    title: "Plan",
    description:
      "Our Orthodontists design your customized smile enhancement plan using highly advanced software.",
  },
  {
    number: "3",
    title: "Fabricate",
    description:
      "We manufacture your custom aligners leveraging 3D printing & laser technology.",
  },
  {
    number: "4",
    title: "Wear",
    description:
      "Your Whistle Aligners and expert Clove Dental Orthodontists monitor your progress across the journey.",
  },
];

export default function PerfectSmileSteps() {
  return (
    <section className="bg-[#EAF5FB] px-5 py-25 md:px-25">
      <div className="mx-auto rounded-3xl bg-[#F9F9F9] p-8 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[7fr_5fr]">
          {/* Left */}
          <div className="order-2 lg:order-1">
            <h2 className="text-[32px] font-bold leading-[130%] text-[#111111] md:text-[48px]">
              Get your perfect smile in four simple steps
            </h2>

            <div className="relative mt-10 lg:mt-12">
              

              <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2">
                {steps.map((step, index) => (
                  <div key={step.number} className="relative flex gap-4">
                    <div className="relative">
                      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-[#CFE3F3] bg-white text-[20px] font-bold text-[#111111]">
                        {step.number}
                      </div>

                      {index !== steps.length - 1 && (
                        <div className="absolute left-1/2 top-12 h-32 -translate-x-1/2 border-l-2 border-dashed border-[#CFE3F3] lg:hidden" />
                      )}
                    </div>

                    <div>
                      <h3 className="text-[22px] font-bold leading-[130%] text-[#111111]">
                        {step.title}
                      </h3>

                      <p className="mt-1 text-[18px] leading-[140%] text-[#222222] lg:text-[14px] lg:leading-[150%] lg:text-[#444444]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto h-70 w-full max-w-[320px] lg:h-105 lg:max-w-105">
              <img
                src={stepVideoImage}
                alt="Smile process"
                className="absolute bottom-0 left-1/2 h-65 w-65 -translate-x-1/2 rounded-2xl object-cover sm:h-75 sm:w-75 lg:left-auto lg:right-0 lg:h-95 lg:w-95 lg:translate-x-0"
              />

              <button
                type="button"
                className="absolute left-1/2 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg lg:h-14 lg:w-14"
              >
                <Play
                  size={24}
                  fill="#8D62D9"
                  className="ml-1 text-[#8D62D9] lg:size-7"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
