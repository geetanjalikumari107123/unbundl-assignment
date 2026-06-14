import { CheckCircle, ArrowRight } from "lucide-react";
import alignerImage from "../../assets/images/whistle-aligner.svg";

export default function DreamSmileSection() {
  return (
    <section className="bg-[#EAF5FB] px-5 py-16 md:px-50 md:py-25">
      <div className="mx-auto grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="text-[40px] font-bold leading-[120%] text-[#111111]">
            Dream smiles achieved secretly
          </h2>

          <p className="mt-6 max-w-117.5 text-[16px] font-medium leading-[150%] text-[#333333]">
            Experience the superior quality of our Whistle Aligners crafted with
            3-layer PU material. With 450+ clinics nationwide, enjoy comfortable
            treatment by expert orthodontists at House of Clove.
          </p>

          <p className="mt-5 max-w-117.5 text-[16px] font-medium leading-[150%] text-[#333333]">
            The pricing is different for every case. Cases with higher
            complexity requiring more aligners and additional time and effort
            from our dentists.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="text-[28px] font-bold leading-[130%] text-[#222222]">
                Whistle Aligners
              </h3>

              <p className="mt-6 text-[16px] text-[#555555] line-through">
                ₹84,000
              </p>

              <p className="mt-1 text-[16px] text-[#555555]">starting at</p>

              <p className="text-[24px] font-bold text-[#8D62D9]">₹47,999</p>

              <p className="mt-1 text-[14px] text-[#777777]">
                inc. of all taxes
              </p>
            </div>

            <img
              src={alignerImage}
              alt="Whistle aligners case"
              className="w-33 object-contain"
            />
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-2 text-[14px] font-medium text-[#333333]">
              <CheckCircle size={16} className="text-[#45C486]" />
              <span>Offer valid for a limited time</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[14px] font-medium text-[#333333]">
                <CheckCircle size={16} className="text-[#45C486]" />
                <span>Easy financing options</span>
              </div>

              <button
                type="button"
                className="flex items-center gap-1 text-[18px] font-semibold text-[#8D62D9]"
              >
                Learn more
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
