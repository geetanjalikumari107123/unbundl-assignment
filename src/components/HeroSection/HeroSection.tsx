import heroImage from "../../assets/images/hero.svg";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-[1.5fr_1fr] items-center overflow-hidden bg-[#F6F3FC] pt-5 md:px-50">
      <div className="mx-auto px-6 md:mx-0 md:text-left">
        <h1 className="text-[24px] font-bold leading-[130%] text-[#1f2937] sm:text-[32px] md:text-[40px]">
          Invisible Aligners for a dream smile
        </h1>

        <p className="mt-3 max-w-100 text-[14px] font-medium leading-[140%] text-gray-900 sm:text-[18px] md:mt-5 md:text-[24px]">
          Book a Scan and avail a free Orthodontist Consult{" "}
          <span className="text-[#8F62D4]">worth ₹1500</span>
        </p>
      </div>

      <div className="mt-6 flex items-end justify-center md:mt-0">
        <img
          src={heroImage}
          alt="Smiling woman with aligners"
          className="w-full object-contain md:max-w-76.5"
        />
      </div>
    </section>
  );
}
