import {
  Building2,
  HardHat,
  Clock3,
  Smile,
  ArrowRight,
} from "lucide-react";

import building from "../../assets/about/building.jpg";
import design from "../../assets/about/design.jpg"
import interior from "../../assets/about/interior.jpg";

const features = [
  {
    icon: <Building2 size={22} />,
    title: "Quality Construction",
    text: "We use the best quality materials and modern construction techniques.",
  },
  {
    icon: <HardHat size={22} />,
    title: "Expert Engineers",
    text: "Our experienced engineers deliver safe and sustainable structures.",
  },
  {
    icon: <Clock3 size={22} />,
    title: "On Time Delivery",
    text: "We value your time and ensure timely completion of every project.",
  },
  {
    icon: <Smile size={22} />,
    title: "Customer Satisfaction",
    text: "Client satisfaction is our highest priority in every project.",
  },
];

const AboutSection = () => {
  return (
    <section className="pt-12 pb-24 bg-white">

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGES */}

          <div>

            <div className="grid grid-cols-2 gap-5">

              {/* Left Image */}

              <div className="relative">

                <img
                  src={building}
                  alt=""
                  className="rounded-lg object-cover h-[520px] w-full"
                />

                {/* Experience */}

                <div className="absolute bottom-6 left-6 bg-[#081B33] text-white px-8 py-6 rounded-lg shadow-xl">

                  <h2 className="text-5xl font-bold">
                    5+
                  </h2>

                  <p className="mt-2 text-lg">
                    Years of
                    <br />
                    Experience
                  </p>

                  <div className="w-12 h-1 bg-[#F4B400] mt-4 rounded"></div>

                </div>

              </div>

              {/* Right Images */}

              <div className="flex flex-col gap-5">

                <img
                  src={design}
                  alt=""
                  className="rounded-lg object-cover h-[300px] w-full"
                />

                <img
                  src={interior}
                  alt=""
                  className="rounded-lg object-cover h-[200px] w-full"
                />

              </div>

            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div>

            <p className="uppercase tracking-widest text-[#F4B400] font-semibold text-sm">

              ABOUT US

            </p>

            <h2 className="text-5xl font-bold text-[#081B33] mt-3 leading-tight">

              We Turn Ideas Into
              <br />
              Durable Structures

            </h2>

            <p className="mt-6 text-gray-600 leading-8">

              We are a trusted name in architectural consultancy and
              construction. Our mission is to deliver high-quality
              projects that are innovative, sustainable and built to
              last.

            </p>

            {/* FEATURES */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

              {features.map((item, index) => (

                <div
                  key={index}
                  className="flex gap-4"
                >

                  <div className="w-14 h-14 bg-[#081B33] rounded-lg flex items-center justify-center text-[#F4B400] flex-shrink-0">

                    {item.icon}

                  </div>

                  <div>

                    <h3 className="font-bold text-[#081B33]">

                      {item.title}

                    </h3>

                    <p className="text-gray-600 text-sm mt-2 leading-6">

                      {item.text}

                    </p>

                  </div>

                </div>

              ))}

            </div>

            {/* BUTTON */}

            <button className="mt-10 border-2 border-[#081B33] hover:bg-[#081B33] hover:text-white transition px-8 py-4 rounded-md flex items-center gap-3 font-semibold">

              MORE ABOUT US

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;