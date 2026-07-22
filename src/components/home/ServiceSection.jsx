import {
  PencilRuler,
  Building2,
  House,
  HardHat,
  Sofa,
  Calculator,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <PencilRuler size={42} strokeWidth={1.5} />,
    title: "Architectural Consultancy",
    desc: "Innovative designs that are functional, aesthetic and future ready.",
  },
  {
    icon: <Building2 size={42} strokeWidth={1.5} />,
    title: "Structural Design",
    desc: "Safe, strong and cost-effective structural designs by experts.",
  },
  {
    icon: <House size={42} strokeWidth={1.5} />,
    title: "Construction Services",
    desc: "Residential, commercial and industrial construction with quality.",
  },
  {
    icon: <HardHat size={42} strokeWidth={1.5} />,
    title: "Site Supervision",
    desc: "Regular monitoring and quality checks to ensure perfect execution.",
  },
  {
    icon: <Sofa size={42} strokeWidth={1.5} />,
    title: "Interior Design",
    desc: "Beautiful and functional interior spaces for homes and offices.",
  },
  {
    icon: <Calculator size={42} strokeWidth={1.5} />,
    title: "Cost Estimation",
    desc: "Accurate estimation and budget planning for every project.",
  },
];

const ServiceSection = () => {
  return (
   <section className="pt-24 pb-36 bg-[#F8FAFC]">

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center mb-14">

          <p className="uppercase text-[#F4B400] tracking-[3px] font-semibold">

            OUR SERVICES

          </p>

          <h2 className="text-5xl font-bold text-[#081B33] mt-3">

            Our Construction & Consultancy Services

          </h2>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">

          {services.map((service, index) => (

            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >

              <div className="text-[#F4B400] mb-6 group-hover:scale-110 transition">

                {service.icon}

              </div>

              <h3 className="text-lg font-bold text-[#081B33] leading-7">

                {service.title}

              </h3>

              <p className="text-gray-600 text-sm mt-4 leading-7">

                {service.desc}

              </p>

            </div>

          ))}

        </div>

        {/* Button */}

        <div className="flex justify-center mt-12">

          <button className="bg-[#081B33] hover:bg-[#F4B400] hover:text-[#081B33] transition-all text-white px-10 py-4 rounded-md flex items-center gap-3 font-semibold">

            MORE ALL SERVICES

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </section>
  );
};

export default ServiceSection;