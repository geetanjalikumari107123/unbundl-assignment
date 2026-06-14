type MarqueeItem = {
  bold?: string;
  text: string;
};

export default function Marquee() {
  const items: MarqueeItem[] = [
    { text: "Our inaugural launch benefit" },
    { bold: "Free teeth scan", text: " worth ₹500" },
    { bold: "Free orthodontic consultation", text: " worth ₹1500" },
    { text: "Our inaugural launch benefit" },
    { bold: "Free teeth scan", text: " worth ₹500" },
    { bold: "Free orthodontic consultation", text: " worth ₹1500" },
    { text: "Our inaugural launch benefit" },
    { bold: "Free teeth scan", text: " worth ₹500" },
    { bold: "Free orthodontic consultation", text: " worth ₹1500" },
  ];

  return (
    <div className="h-10 overflow-hidden bg-[linear-gradient(90deg,#CFF0C4_0%,#C7E0F2_100%)]">
      <div className="marquee-track flex h-full items-center whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="mx-7 flex shrink-0 items-center text-[18px] font-medium leading-[130%] text-[#111111]"
          >
            {item.bold && <span className="font-semibold">{item.bold} </span>}
             <span className="ml-1">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}