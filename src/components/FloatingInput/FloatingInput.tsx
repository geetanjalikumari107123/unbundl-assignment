interface FloatingInputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  prefix?: string;
  className?: string;
  labelBgClass?: string;
  borderColor: string;
}

export default function FloatingInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  prefix,
  labelBgClass,
  borderColor,
}: FloatingInputProps) {
  return (
    <div className="relative">
      <div className={`flex h-13 items-center rounded-xl border ${borderColor} px-5`}>
        {prefix && (
          <span className="mr-2 text-[16px] font-medium text-[#111111]">
            {prefix}
          </span>
        )}

        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=" "
          className="peer w-full text-[16px] font-medium outline-none"
        />

        <label
          htmlFor={id}
          className={`absolute top-1/2 -translate-y-1/2 px-2 text-[16px] text-[#5F6368] transition-all
          peer-focus:top-0 peer-focus:left-4 peer-focus:translate-y-[-50%] peer-focus:text-[14px]
          peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:left-4 peer-not-placeholder-shown:translate-y-[-50%] peer-not-placeholder-shown:text-[14px]
          ${prefix ? "left-11" : "left-5"}
          ${labelBgClass}
          `}
          
        >
          {label}
        </label>
      </div>
    </div>
  );
}