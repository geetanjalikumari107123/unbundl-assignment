import { useState } from "react";
import { Check, ChevronDown, ChevronUp, X } from "lucide-react";
import Logo from "../../assets/images/logo.svg";
import SectionHeading from "../SectionHeading/SectionHeading";

type ComparisonItem = {
  title: string;
  whistle?: string;
  otherBrands?: string;
  whistleAvailable?: boolean;
  otherAvailable?: boolean;
  description: string;
};

const comparisonData: ComparisonItem[] = [
  {
    title: "Easy to complex cases",
    whistle: "Yes, mild to complex",
    otherBrands: "No, only mild to moderate",
    description:
      "Whistle aligners are a superior choice, addressing all kinds of cases. From simple cases to complex issues, Whistle provides the best outcomes for your smile.",
  },
  {
    title: "Clear-cut Pricing",
    whistleAvailable: true,
    otherAvailable: false,
    description:
      "Whistle Aligners has transparent pricing and does not include any hidden costs. All expenses, including consultations and scans, are incorporated into a single fee, offering patients a hassle-free and clear financial experience.",
  },
  {
    title: "Aligner Change",
    whistle: "Every 10 days",
    otherBrands: "Every 2 weeks",
    description:
      "At Whistle, our advanced tech allows for aligner changes every 10 days. Our aligners ensure a comfortable fit and faster progress towards your perfect smile.",
  },
  {
    title: "Clinical Partnership",
    whistleAvailable: true,
    otherAvailable: false,
    description:
      "Whistle's partnership with Clove Dental Clinic, India's largest dental chain with 450+ clinics nationwide, guarantees in-person doctor care and comprehensive treatment within clinical facilities.",
  },
  {
    title: "Movement Between Cities",
    whistleAvailable: true,
    otherAvailable: false,
    description:
      "Unlike any other brand, Whistle Aligners redefines flexibility with Clove clinics present PAN India, which enables seamless transfer of your case between cities for ongoing treatments. We also ensure uninterrupted care for those relocating overseas by providing aligners in advance.",
  },
  {
    title: "Complimentary Teeth Scaling",
    whistleAvailable: true,
    otherAvailable: false,
    description:
      "At Whistle, we offer complimentary teeth scaling to all our customers so that their teeth aren't only aligned but also in their best health.",
  },
];

export default function ComparisonSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const renderValue = (
    text?: string,
    available?: boolean,
    iconType?: "check" | "cross",
  ) => {
    if (text) return text;

    if (available === true && iconType === "check") {
      return (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00A86B] text-white">
          <Check size={17} strokeWidth={3} />
        </span>
      );
    }

    if (available === false && iconType === "cross") {
      return (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E0212D] text-white">
          <X size={17} strokeWidth={3} />
        </span>
      );
    }

    return null;
  };

  return (
    <section className="bg-white px-5 py-16 md:py-25">
      <SectionHeading align="center">What sets Whistle apart?</SectionHeading>

      <div className="mx-auto mt-10 max-w-210 overflow-hidden rounded-2xl border border-[#D9D9D9] md:mt-12.5">
        <div className="grid grid-cols-[44%_28%_28%]">
          <div className="flex items-center px-4 py-5 font-semibold text-black md:px-6 md:text-[18px]">
            Features
          </div>

          <div className="flex items-center justify-center bg-[#EAF5FB] px-2 py-4">
            <img src={Logo} alt="Whistle logo" className="w-20 md:w-27" />
          </div>

          <div className="flex items-center justify-center px-2 py-5 text-center font-bold text-black md:text-[18px]">
            Other Brands
          </div>
        </div>

        {comparisonData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={item.title}>
              <div className="grid min-h-20 grid-cols-[44%_28%_28%] md:min-h-18">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between gap-2 px-4 py-4 text-left text-[15px] font-medium leading-[140%] text-[#111111] md:px-6 md:text-[16px]"
                  aria-expanded={isOpen}
                >
                  <span>{item.title}</span>

                  <span className="shrink-0">
                    {isOpen ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </span>
                </button>

                <div className="flex items-center justify-center bg-[#EAF5FB] px-2 py-4 text-center text-[15px] font-medium leading-[140%] text-black md:px-4 md:text-[16px]">
                  {renderValue(item.whistle, item.whistleAvailable, "check")}
                </div>

                <div className="flex items-center justify-center px-2 py-4 text-center text-[15px] font-medium leading-[140%] text-black md:px-4 md:text-[16px]">
                  {renderValue(item.otherBrands, item.otherAvailable, "cross")}
                </div>
              </div>

              {isOpen && (
                <div className="bg-[#EAF5FB] px-5 py-5 md:px-8 md:py-6">
                  <p className="text-[15px] font-medium leading-[150%] text-[#3D3D3D] md:text-[18px]">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}