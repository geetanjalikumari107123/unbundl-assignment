import doctorImage from "../../assets/images/direct-to-customers.svg";
import Button from "../Button/Button";

export default function DoctorLedSection() {
  return (
    <section className="bg-[#EAF5FB]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="order-1 h-80 lg:order-2 lg:h-auto">
          <img
            src={doctorImage}
            alt="Doctor-led aligner treatment"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="order-2 flex items-center px-5 py-10 md:px-12 lg:order-1 lg:px-25 lg:py-30">
          <div className="max-w-130">
            <h2 className="text-[28px] font-bold leading-[130%] text-[#111111] md:text-[40px]">
              We are Doctor-led, not direct-to-customers
            </h2>

            <p className="mt-6 text-[16px] font-medium leading-[150%] text-[#333333]">
              We don't offer direct-to-customer invisible aligners. We treat you
              in a Dental clinic with an Orthodontist. Aligners are just the
              beginning; we ensure comprehensive treatment in over 450+ clinics
              nationwide.
            </p>

            <Button
              className="mt-8 h-13 w-full md:w-auto md:min-w-55"
              type="button" buttonHeight="h-13"
            >
              Get a Callback
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
