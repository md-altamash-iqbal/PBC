import { Link } from "react-router-dom";
import hero from "../../assets/about/banner.png";

const AboutHero = () => {
  return (
    <section
      className="relative h-[620px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081B33]/95 via-[#081B33]/75 to-transparent"></div>

      <div className="relative max-w-screen-2xl mx-auto w-full px-6 lg:px-12">
        <div className="max-w-2xl">

          {/* Breadcrumb */}

          <div className="flex items-center gap-2 text-sm text-gray-300 mb-10">
            <Link to="/" className="hover:text-[#F4B400]">
              Home
            </Link>

            <span>&gt;</span>

            <span className="text-white font-medium">
              About Us
            </span>
          </div>

          {/* Small Title */}

          <p className="uppercase tracking-[3px] text-[#F4B400] font-semibold">
            WHO WE ARE
          </p>

          {/* Heading */}

          <h1 className="mt-4 text-5xl lg:text-7xl font-bold leading-tight text-white">
            Building Trust Through
            <br />

            Engineering{" "}
            <span className="text-[#F4B400]">
              Excellence
            </span>
          </h1>

          {/* Description */}

          <p className="mt-8 text-lg text-gray-200 leading-8 max-w-xl">
            Perfect Building Construction is a leading construction
            and architectural consultancy firm dedicated to delivering
            exceptional spaces that inspire, endure and elevate life.
          </p>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;