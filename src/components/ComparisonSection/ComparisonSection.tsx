import { useState } from "react";
import { Check, ChevronDown, ChevronUp, X } from "lucide-react";
import Logo from "../../assets/images/logo.svg";

const comparisonData = [
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

  return (
    <section className="bg-white px-5 py-25">
      <h2 className="text-center text-[40px] font-bold leading-[130%] text-[#111111]">
        What sets Whistle apart?
      </h2>

      <div className="mx-auto mt-12.5 max-w-210 overflow-hidden rounded-2xl border border-[#D9D9D9]">
        <div className="grid grid-cols-[1.7fr_0.8fr_0.9fr]">
          <div className="px-6 py-5 text-[18px] font-semibold">Features</div>

          <div className="bg-[#EAF5FB] px-4 py-4 flex justify-center">
            <img src={Logo} alt="Logo" className="w-27" />
          </div>

          <div className="px-4 py-5 text-center text-[18px] font-bold">
            Other Brands
          </div>
        </div>

        {comparisonData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={item.title}>
              <div className="grid min-h-18 grid-cols-[1.7fr_0.8fr_0.9fr]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between px-6 text-left text-[16px] font-medium text-[#111111]"
                >
                  {item.title}
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                <div className="flex items-center justify-center bg-[#EAF5FB] px-4 text-center text-[16px] font-medium">
                  {"whistle" in item && item.whistle ? (
                    item.whistle
                  ) : item.whistleAvailable ? (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00A86B] text-white">
                      <Check size={16} />
                    </span>
                  ) : null}
                </div>

                <div className="flex items-center justify-center px-4 text-center text-[16px] font-medium">
                  {"otherBrands" in item && item.otherBrands ? (
                    item.otherBrands
                  ) : item.otherAvailable === false ? (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E0212D] text-white">
                      <X size={16} />
                    </span>
                  ) : null}
                </div>
              </div>

              {isOpen && (
                <div className="bg-[#EAF5FB] px-8 py-6">
                  <p className="text-[18px] font-medium leading-[150%] text-[#3D3D3D]">
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
