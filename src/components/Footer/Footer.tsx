import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-[#181C1C] px-5 py-16 text-white md:px-25 md:py-25">
      <div className="mx-auto grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr_1fr_1fr]">
        <div>
          <h3 className="text-[20px] font-bold leading-[130%]">Quick Links</h3>

          <ul className="mt-8 space-y-5 text-[14px] font-medium text-white/90">
            <li>Home</li>
            <li>Book a Free Scan</li>
            <li>How it Works</li>
            <li>Range of Aligners</li>
            <li>Aligners vs Braces</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[20px] font-bold leading-[130%]">
            Get in Touch Now!
          </h3>

          <div className="mt-8 space-y-5 text-[14px] font-medium text-white/90">
            <p className="flex items-center gap-3">
              <Phone size={18} />
              011-6932-8350
            </p>

            <p className="flex items-center gap-3">
              <Mail size={18} />
              support@whistle.in
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-[20px] font-bold leading-[130%]">Follow us on</h3>

          <div className="mt-8 flex items-center gap-6">
            <a href="#" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>

            <a href="#" aria-label="Facebook">
              <FaFacebookF size={24} />
            </a>

            <a href="#" aria-label="Twitter X">
              <FaXTwitter size={24} />
            </a>
          </div>
        </div>

        <div className="space-y-6 text-[14px] font-medium text-white/90">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
