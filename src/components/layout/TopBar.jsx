import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function TopBar() {
  return (
    <div className="bg-[#081B33] text-white text-[13px]">
      <div className="w-full px-12 h-9 flex items-center justify-between">
        
        {/* Left */}
        <div className="hidden lg:flex items-center divide-x divide-white/20">

          <div className="flex items-center gap-2 pr-5">
            <Phone size={14} className="text-[#F4B400]" />
            <span>9229451145</span>
          </div>

          <div className="flex items-center gap-2 px-5">
            <Mail size={14} className="text-[#F4B400]" />
            <span>perfectbuildingconstruction86@gmail.com</span>
          </div>

          <div className="flex items-center gap-2 pl-5">
            <MapPin size={14} className="text-[#F4B400]" />
            <span>Danapur, Patna, Bihar 801105</span>
          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-3 ml-auto">

          <span className="hidden md:block text-gray-300">
            Follow Us:
          </span>

          <a href="#" className="hover:text-[#F4B400] duration-300">
            <FaFacebookF size={13} />
          </a>

          <a href="#" className="hover:text-[#F4B400] duration-300">
            <FaInstagram size={13} />
          </a>

          <a href="#" className="hover:text-[#F4B400] duration-300">
            <FaLinkedinIn size={13} />
          </a>

        </div>

      </div>
    </div>
  );
}

export default TopBar;