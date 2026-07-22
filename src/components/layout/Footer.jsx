import logo from "../../assets/Logo.png";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#081B33] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-5">

        <div className="flex flex-col lg:flex-row justify-between">

          {/* Left Section */}
          <div className="lg:w-[42%] mb-10 lg:mb-0">

            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="Perfect Building Construction"
                className="h-16 w-auto"
              />

              <div>
                <h2 className="text-xl font-bold leading-6">
                  PERFECT BUILDING
                </h2>

                <p className="text-sm tracking-widest text-gray-300">
                  CONSTRUCTION
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-7 max-w-md">
              Perfect Building Construction specializes in residential,
              commercial and infrastructure projects, delivering quality,
              innovation and excellence with complete customer satisfaction.
            </p>

            <div className="flex gap-3 mt-6">

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F4B400] hover:text-[#081B33] transition-all flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F4B400] hover:text-[#081B33] transition-all flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F4B400] hover:text-[#081B33] transition-all flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* Right Section */}
          <div className="lg:w-[54%] grid grid-cols-1 sm:grid-cols-3 gap-5">

            {/* Quick Links */}

            <div>

              <h3 className="text-lg font-semibold text-[#F4B400] mb-4">
                Quick Links
              </h3>

              <ul className="space-y-2">

                {[
                  "Home",
                  "About Us",
                  "Services",
                  "Projects",
                  "Gallery",
                  "Contact",
                ].map((item) => (

                  <li key={item}>

                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#F4B400] transition"
                    >
                      <ChevronRight size={15} />
                      {item}
                    </a>

                  </li>

                ))}

              </ul>

            </div>

            {/* Services */}

            <div>

              <h3 className="text-lg font-semibold text-[#F4B400] mb-4">
                Our Services
              </h3>

              <ul className="space-y-2">

                {[
                  "Construction",
                  "Architecture",
                  "Interior Design",
                  "Renovation",
                  "Consultancy",
                ].map((item) => (

                  <li key={item}>

                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#F4B400] transition"
                    >
                      <ChevronRight size={15} />
                      {item}
                    </a>

                  </li>

                ))}

              </ul>

            </div>

            {/* Contact */}

            <div>

              <h3 className="text-lg font-semibold text-[#F4B400] mb-4">
                Contact Us
              </h3>

              <div className="space-y-4 text-sm">

                <div className="flex gap-3">

                  <Phone
                    size={17}
                    className="text-[#F4B400] mt-1"
                  />

                  <a
                    href="tel:+919229451145"
                    className="text-gray-300 hover:text-[#F4B400]"
                  >
                    +91 9229451145
                  </a>

                </div>

                <div className="flex gap-3">

                  <Mail
                    size={17}
                    className="text-[#F4B400] mt-1"
                  />

                  <a
                    href="mailto:perfectbuildingconstruction86@gmail.com"
                    className="text-gray-300 hover:text-[#F4B400] break-all"
                  >
                    perfectbuildingconstruction86@gmail.com
                  </a>

                </div>

                <div className="flex gap-3">

                  <MapPin
                    size={17}
                    className="text-[#F4B400] mt-1"
                  />

                  <p className="text-gray-300">
                    Danapur, Patna,
                    <br />
                    Bihar 801105
                  </p>

                </div>

                <div className="flex gap-3">

                  <Clock
                    size={17}
                    className="text-[#F4B400] mt-1"
                  />

                  <p className="text-gray-300">
                    Mon - Sat
                    <br />
                    9:00 AM - 6:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-8 pt-5">

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-2">

            <p>
              © {new Date().getFullYear()} Perfect Building Construction.
              All Rights Reserved.
            </p>

            <p>
              Designed & Developed by Perfect Building Construction
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;