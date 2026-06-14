import gapBefore from "../../assets/images/result/gap-before.svg";
import gapAfter from "../../assets/images/result/gap-after.svg";
import crookedBefore from "../../assets/images/result/crooked-teeth-before.svg";
import crookedAfter from "../../assets/images/result/crooked-teeth-after.svg";
import overbiteBefore from "../../assets/images/result/overbite-before.svg";
import overbiteAfter from "../../assets/images/result/overbite-after.svg";
import protrudingBefore from "../../assets/images/result/protruding-teeth-before.svg";
import protrudingAfter from "../../assets/images/result/protruding-teeth-after.svg";

const results = [
  {
    before: gapBefore,
    after: gapAfter,
    concern: "Gaps",
    duration: "8 months",
  },
  {
    before: crookedBefore,
    after: crookedAfter,
    concern: "Crooked Teeth",
    duration: "8 months",
  },
  {
    before: overbiteBefore,
    after: overbiteAfter,
    concern: "Open Bite",
    duration: "8 months",
  },
  {
    before: protrudingBefore,
    after: protrudingAfter,
    concern: "Protruding Teeth",
    duration: "8 months",
  },
];

export default function ResultsSection() {
  return (
    <section className="bg-white px-5 py-5 md:px-25 md:py-20">
      <h2 className="text-center text-[40px] font-bold leading-[130%] text-gray-900">
        Results You’ll Love
      </h2>

      <div className="no-scrollbar mx-auto mt-8 flex gap-5 overflow-x-auto scroll-smooth px-1 pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0">
        {results.map((result, index) => (
          <div key={index} className="min-w-65 shrink-0 overflow-hidden bg-[#EEF9FF] p-2 rounded-md lg:min-w-0 lg:shrink">
            <div className="grid grid-cols-2 gap-1">
              <div>
                <img
                  src={result.before}
                  alt={`${result.concern} before`}
                  className="h-33.75 w-full object-cover rounded-md"
                />
                <p className="py-2 text-center text-[14px] font-medium text-gray-700">
                  Before
                </p>
              </div>

              <div>
                <img
                  src={result.after}
                  alt={`${result.concern} after`}
                  className="h-33.75 w-full object-cover rounded-md"
                />
                <p className="py-2 text-center text-[14px] font-medium text-gray-700">
                  After
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200">
              <div className="flex items-center justify-between px-4 py-3 text-[14px] font-medium text-gray-700">
                <span>Concern</span>
                <span>{result.concern}</span>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 text-[14px] font-medium text-gray-700">
                <span>Treatment Duration</span>
                <span>{result.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
