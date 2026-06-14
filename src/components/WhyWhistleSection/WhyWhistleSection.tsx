import choose1 from "../../assets/images/why-choose/choose1.svg";
import choose2 from "../../assets/images/why-choose/choose2.svg";
import choose3 from "../../assets/images/why-choose/choose3.svg";
import choose4 from "../../assets/images/why-choose/choose4.svg";

const whyWhistleItems = [
  {
    image: choose1,
    title: "Custom-made & invisible",
    description:
      "Tailored for your teeth and smile with a clear, discreet appearance.",
  },
  {
    image: choose2,
    title: "Predictable results",
    description:
      "Advanced 3D modeling and AI-technology for precise planning and predictable results.",
  },
  {
    image: choose3,
    title: "Partnership with Clove Dental",
    description:
      "Led by highly experienced Orthodontists of Clove Dental and Whistle that have corrected over 2 lakh smiles.",
  },
  {
    image: choose4,
    title: "Unlimited Aligners*",
    description:
      "Unlimited aligners and doctor consults at no extra cost.",
  },
];

export default function WhyWhistleSection() {
  return (
    <section className="bg-white px-5 py-5 md:px-25 md:pb-25">
      <h2 className="text-center text-[40px] font-bold leading-[130%] text-[#111111]">
        Why Whistle?
      </h2>

      <div className="no-scrollbar mx-auto mt-8 flex gap-4 overflow-x-auto scroll-smooth pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
        {whyWhistleItems.map((item, index) => (
          <article
            key={index}
            className="w-80 shrink-0 overflow-hidden rounded-xl bg-[#EEF9FF] lg:min-w-0 lg:shrink"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-62.5 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="text-[18px] font-bold leading-[130%] text-[#111111]">
                {item.title}
              </h3>

              <p className="mt-2 text-[16px] font-medium text-[#333333]">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}