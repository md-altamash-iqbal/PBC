import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}

          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="PBC Logo"
              className="h-24 w-auto object-contain"
            />
            <div>
              <h2 className="text-2xl font-bold leading-tight text-[#081B33]">
                PERFECT BUILDING
              </h2>

              <p className="text-base tracking-wide text-gray-600">
                CONSTRUCTION
              </p>
            </div>
          </div>

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-10 font-medium text-[15px]">
            {navLinks.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `transition duration-300 ${
                      isActive
                        ? "text-[#F4B400] font-semibold"
                        : "hover:text-[#F4B400]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-[#F4B400]">
                Services
                <ChevronDown size={16} />
              </div>

              <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-lg w-60 top-10">
                <a href="#" className="block px-5 py-3 hover:bg-gray-100">
                  Architectural Consultancy
                </a>

                <a href="#" className="block px-5 py-3 hover:bg-gray-100">
                  Construction Services
                </a>

                <a href="#" className="block px-5 py-3 hover:bg-gray-100">
                  Interior Design
                </a>
              </div>
            </li>

            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-[#F4B400]">
                Pages
                <ChevronDown size={16} />
              </div>

              <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-lg w-52 top-10">
                <a href="#" className="block px-5 py-3 hover:bg-gray-100">
                  Testimonials
                </a>

                <a href="#" className="block px-5 py-3 hover:bg-gray-100">
                  FAQ
                </a>
              </div>
            </li>
          </ul>

          {/* Quote Button */}

          <div className="hidden lg:flex w-1/4 justify-end">
            <button className="bg-[#F4B400] hover:bg-[#e6a700] text-[#081B33] font-semibold px-7 py-3 rounded-md transition duration-300">
              GET A QUOTE
            </button>
          </div>

          {/* Mobile */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {mobileMenu && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="flex flex-col px-6 py-5 gap-5">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenu(false)}
                className={({ isActive }) =>
                  isActive ? "text-[#F4B400] font-semibold" : ""
                }
              >
                {item.name}
              </NavLink>
            ))}

            <button className="bg-[#F4B400] py-3 rounded-md font-semibold">
              GET A QUOTE
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
