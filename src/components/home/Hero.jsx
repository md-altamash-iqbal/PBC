import { ArrowRight, PhoneCall } from "lucide-react";
import heroImage from "../../assets/hero/hero-bg.png";

const Hero = () => {
  return (
    <section
      className="relative h-[620px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#081B33]/65"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-screen-2xl mx-auto h-full px-6 lg:px-12">
        <div className="flex h-full items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-white">
            <p className="uppercase tracking-wider text-[#F4B400] font-semibold text-lg mb-6">
              BUILDING SPACES, CREATING FUTURES
            </p>

            <h1 className="font-bold leading-tight text-4xl lg:text-6xl">
              We Design.
              <br />
              We Build.
              <br />
              You <span className="text-[#F4B400]">Live.</span> We Care.
            </h1>

            <p className="mt-5 text-base lg:text-lg text-gray-200 max-w-xl leading-7">
              Perfect Building Construction provides end-to-end consultancy and
              construction solutions with modern designs, premium quality
              materials and on-time project delivery.
            </p>

            {/* Buttons */}

            <div className="flex gap-4 mt-7 flex-wrap">
              <button className="bg-[#F4B400] hover:bg-[#dca000] text-[#081B33] font-semibold px-7 py-3 rounded-md flex items-center gap-3 transition duration-300">
                GET FREE CONSULTATION
                <ArrowRight size={18} />
              </button>

              <button className="border border-white hover:bg-white hover:text-[#081B33] text-white font-semibold px-8 py-4 rounded-md flex items-center gap-3 transition duration-300">
                EXPLORE PROJECTS
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

    {/* Floating Call Card */}

<div className="hidden lg:block absolute bottom-24 right-14 z-20">
  <div className="bg-[#081B33] border border-[#F4B400] rounded-xl shadow-2xl px-7 pt-8 pb-6 min-w-[360px]">

    <div className="flex items-center gap-5">

      {/* Icon */}
      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0">
        <PhoneCall size={24} className="text-[#081B33]" />
      </div>

      {/* Text */}
      <div>
        <p className="text-[#F4B400] font-medium text-sm">
          Call Us Anytime
        </p>

        <h2 className="text-4xl font-bold text-white mt-2">
          9229451145
        </h2>

        <p className="text-gray-300 text-sm mt-2">
          We are open 24/7
        </p>
      </div>

    </div>

  </div>
</div>

      {/* Blueprint Pattern */}

      <div
        className="absolute bottom-0 left-0 w-[420px] h-[220px] opacity-10 bg-no-repeat bg-contain"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/graphy.png')",
        }}
      ></div>
    </section>
  );
};

export default Hero;
