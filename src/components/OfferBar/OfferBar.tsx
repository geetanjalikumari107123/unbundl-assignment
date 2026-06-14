export default function OfferBar() {
  return (
    <div className="flex h-9 items-center justify-center bg-[linear-gradient(90deg,#CFF0C4_0%,#C7E0F2_100%)]">
      <p className="text-center text-[14px] font-medium leading-[140%] text-[#1A1A1A]">
        Starting at{" "}
        <span className="text-[#8B8B8B] line-through">Rs 69,999</span> Rs
        47,999. Hurry! Offer ends soon.
      </p>
    </div>
  );
}
