import Logo from "../../assets/images/logo.svg";
import { PhoneCall } from "lucide-react";
import "./Header.css";
export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-4 md:px-12 md:py-4">
      <div>
        <img src={Logo} alt="Whistle logo" className="w-35" />
      </div>

      <a
        href="tel:01169328350"
        className="call-button flex h-10 items-center overflow-hidden rounded-full bg-[#8F62D4] text-white shadow-md"
        aria-label="Call us"
      >
        <span className="phone-icon flex h-10 w-10 shrink-0 items-center justify-center">
          <PhoneCall size={18} />
        </span>

        <span className="call-number whitespace-nowrap pr-4 text-sm font-semibold">
          01169328350
        </span>
      </a>
    </header>
  );
}