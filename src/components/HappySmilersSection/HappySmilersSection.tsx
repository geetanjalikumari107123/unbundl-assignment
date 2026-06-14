import happyCustomerGif from "../../assets/images/happy-customer.gif";

export default function HappySmilersSection() {
  return (
    <section className="bg-white px-5 py-18 md:px-25">
      <h2 className="text-center text-[40px] font-bold leading-[130%] text-[#111111] md:text-[48px]">
        Happy Smilers!
      </h2>

      <div className="no-scrollbar mt-8 overflow-x-auto [-ms-overflow-style:none] [scrollbar-none]">
        <div className="w-max">
          <img
            src={happyCustomerGif}
            alt="Happy Smilers"
            className="h-auto w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
