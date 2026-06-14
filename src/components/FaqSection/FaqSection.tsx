import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What are Aligners?",
    answer:
      "Aligners are Orthodontic devices that are a transparent, plastic form of dental braces used to adjust teeth to make your smile more beautiful!",
  },
  {
    question: "How do Aligners work?",
    answer:
      "Whistle aligners, constructed from thin plastic shells, gently guide your teeth into position. In contrast to conventional metal braces, these invisible aligners are clear, discreet, and less bothersome. Remarkable results can be achieved in as few as six weeks, all while providing the flexibility to remove the aligners whenever needed.",
  },
  {
    question: "Can any dentist do irregular teeth treatment?",
    answer:
      "An Orthodontist is a dental specialist who prevents, diagnoses and treats facial irregularities. For best results from Invisible Aligners, one must consult with an Orthodontist.",
  },
  {
    question: "Are there any restriction on eating or drinking?",
    answer:
      'No restrictions as such. The "snapon/snapoff" feature makes Aligners comfortable and easy to use in all social situations.',
  },
  {
    question: "How long does the treatment take?",
    answer:
      "Typically, it may take 6-12 months for correcting the social six front teeth. For more complex cases such as crowded teeth, the treatment time could be 12-24 months or slightly longer.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white px-5 py-20 md:px-25 md:py-25">
      <h2 className="text-center text-[40px] font-bold leading-[130%] text-gray-900 md:text-[40px]">
        <span className="text-[#8D62D9]">Got Questions?</span> We’ve got answers
      </h2>

      <div className="mx-auto mt-12">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className={`${
                index !== faqs.length - 1 ? "border-b border-[#D9D9D9]" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between py-6 text-left text-[18px] font-bold text-gray-900"
              >
                {faq.question}
                {isOpen ? <Minus size={22} /> : <Plus size={22} />}
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-6 text-[16px] font-medium leading-[150%] text-[#444444]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
