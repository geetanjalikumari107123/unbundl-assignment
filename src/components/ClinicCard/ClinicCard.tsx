import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import CloveLogo from "../../assets/images/clove-logo.svg";
import FloatingInput from "../FloatingInput/FloatingInput";
import Button from "../Button/Button";

export default function ClinicCard() {
  const [showClinicForm, setShowClinicForm] = useState(false);
  const [formData, setFormData] = useState({
    clinicMobile: "",
    captcha: "",
  });
  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section className="bg-white px-5 py-10 md:px-50 md:py-16">
      <div className="mx-auto rounded-3xl bg-[#EAF5FB] px-8 py-8 md:px-16 md:py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <h3 className="max-w-195 text-[28px] font-semibold leading-[150%] text-[#111111] md:text-[28px]">
            Book a Free 3D Teeth Scan and Orthodontist Consult in a Clove Dental
            Clinic near you.
          </h3>

          <div className="flex flex-col items-center">
            <img src={CloveLogo} alt="Clove Dental" className="w-40" />

            <button
              type="button"
              onClick={() => setShowClinicForm(!showClinicForm)}
              className="mt-8 flex items-center gap-2 text-[20px] font-semibold text-[#8D62D9]"
            >
              Find Clinic
              {showClinicForm ? (
                <ChevronUp size={22} />
              ) : (
                <ChevronDown size={22} />
              )}
            </button>
          </div>
        </div>

        {showClinicForm && (
          <form className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-[1fr_1fr_0.45fr]">
            <FloatingInput
              id="clinic-mobile"
              label="Mobile number*"
              value={formData.clinicMobile}
              onChange={(value) => handleChange("clinicMobile", value)}
              prefix="+91"
              labelBgClass="bg-[#EAF5FB]"
              borderColor="border-[#C9D2D8]"
            />

            <FloatingInput
              id="captcha"
              label="Enter Captcha"
              value={formData.captcha}
              onChange={(value) => handleChange("captcha", value)}
              labelBgClass="bg-[#EAF5FB]"
              borderColor="border-[#C9D2D8]"
            />

            <div className="flex h-13 items-center rounded-xl bg-[#BFD8EA] px-5 text-[16px] font-medium text-[#111111]">
              234
            </div>

            <div className="relative">
              <select className="h-13 w-full appearance-none rounded-xl border border-[#C9D2D8] bg-white px-5 pr-12 text-[16px] font-medium text-[#7F8C8D] outline-none">
                <option>Select City</option>
                <option>Delhi</option>
                <option>Noida</option>
                <option>Gurugram</option>
              </select>

              <ChevronDown
                size={20}
                className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[#111111]"
              />
            </div>

            <div className="relative">
              <select className="h-13 w-full appearance-none rounded-xl border border-[#C9D2D8] bg-white px-5 pr-12 text-[16px] font-medium text-[#7F8C8D] outline-none">
                <option>Select Clinic</option>
                <option>Clove Dental - Delhi</option>
                <option>Clove Dental - Noida</option>
                <option>Clove Dental - Gurugram</option>
              </select>

              <ChevronDown
                size={20}
                className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[#111111]"
              />
            </div>

            <Button buttonHeight="h-12" type="submit">Submit</Button>
          </form>
        )}
      </div>
    </section>
  );
}
