import happyCustomerGif from "../../assets/images/happy-customer.gif";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function HappySmilersSection() {
  return (
    <section className="bg-white px-5 py-18 md:px-25">
      <SectionHeading align="center" size="large">
        Happy Smilers!
      </SectionHeading>

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
