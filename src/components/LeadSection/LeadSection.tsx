import { useState } from "react";
import FloatingInput from "../FloatingInput/FloatingInput";
import Button from "../Button/Button";

type TeethAnswer = "yes" | "no" | "";

export default function LeadSection() {
  const [answer, setAnswer] = useState<TeethAnswer>("yes");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <section className="bg-white px-5 py-10 md:px-50 md:pt-10 md:pb-16">
      <div className="mx-auto">
        <h2 className="text-center text-[24px] font-semibold leading-8 text-[#111111]">
          Do you have Teeth Gaps or Crooked Teeth?
        </h2>

        <div className="mt-5 flex items-center justify-center gap-16">
          <label className="flex cursor-pointer items-center gap-2 text-[18px] font-semibold leading-6.5 text-[#111111]">
            <input
              type="radio"
              name="teethIssue"
              value="yes"
              checked={answer === "yes"}
              onChange={() => setAnswer("yes")}
              className="h-4 w-4 accent-[#8D62D9]"
            />
            Yes
          </label>

          <label className="flex cursor-pointer items-center gap-2 text-[18px] font-semibold leading-6.5 text-[#111111]">
            <input
              type="radio"
              name="teethIssue"
              value="no"
              checked={answer === "no"}
              onChange={() => setAnswer("no")}
              className="h-4 w-4 accent-[#8D62D9]"
            />
            No
          </label>
        </div>

        {answer === "yes" ? (
          <>
            <form className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-[1fr_1fr_1fr]">
              <FloatingInput
                id="fullName"
                label="Full Name*"
                value={name}
                onChange={setName}
                labelBgClass="bg-white"
                borderColor="border-gray-800"
              />

              <FloatingInput
                id="mobile"
                label="Mobile number*"
                type="tel"
                value={mobile}
                onChange={setMobile}
                prefix="+91"
                labelBgClass="bg-white"
                borderColor="border-gray-800"
              />

              <Button buttonHeight="h-13" type="submit">Book a Free Scan</Button>
            </form>

            <label className="mt-5 flex items-center gap-3 text-[14px] leading-[140%] text-[#5F6368]">
              <input type="checkbox" className="h-5 w-5 accent-[#8D62D9]" />
              <span>
                I hereby consent to receive calls / messages from Whistle and
                its partners and override DND settings.
              </span>
            </label>
          </>
        ) : (
          <div className="mt-20 text-center">
            <p className="text-[24px] font-medium text-[#111111]">
              Thank you for reaching out.
            </p>
            <p className="mt-2 text-[24px] font-medium text-[#111111]">
              Please contact us incase you have any dental alignment problems.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
