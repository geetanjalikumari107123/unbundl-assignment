import differenceImage from "../../assets/images/whistle-difference.svg";
import DifferenceIcon1 from "../../assets/images/difference-icon/1.svg";
import DifferenceIcon2 from "../../assets/images/difference-icon/2.svg";
import DifferenceIcon3 from "../../assets/images/difference-icon/3.svg";
import SectionHeading from "../SectionHeading/SectionHeading";

const features = [
  {
    image: DifferenceIcon1,
    title: "Next-Gen",
    description:
      "Crafted with top-notch 3D printing, laser tech, and Zendura FLX material.",
  },
  {
    image: DifferenceIcon2,
    title: "Hassle-Free",
    description:
      "Predictable, comfortable & lifestyle-friendly for an easy smile transformation.",
  },
  {
    image: DifferenceIcon3,
    title: "Transparent Pricing",
    description:
      "Everything's included – from scans to aligners, doctor consults, and retainers – no hidden costs.",
  },
];

export default function WhistleDifference() {
  return (
    <section className="bg-[#EAF5FB] px-5 py-16 md:px-50 md:py-20">
      <div className="mx-auto grid items-center gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl bg-white px-8 py-10 md:px-12">
          <SectionHeading>The Whistle Difference</SectionHeading>

          <div className="mt-10 space-y-10">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-6">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-20 w-20 shrink-0 object-contain"
                />

                <div>
                  <h3 className="text-[20px] font-bold leading-[130%] text-[#333333]">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-[16px] leading-[150%] text-[#333333]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <img
          src={differenceImage}
          alt="Whistle aligner manufacturing"
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}
