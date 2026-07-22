import {
  MessageCircleMore,
  ClipboardList,
  Calculator,
  HardHat,
  KeyRound,
  ArrowRight,
} from "lucide-react";

const process = [
  {
    id: 1,
    icon: <MessageCircleMore size={26} />,
    title: "Consultation",
    description: "Understanding your needs and project requirements.",
  },
  {
    id: 2,
    icon: <ClipboardList size={26} />,
    title: "Planning",
    description: "Designing and planning every project carefully.",
  },
  {
    id: 3,
    icon: <Calculator size={26} />,
    title: "Estimation",
    description: "Transparent cost estimation and budgeting.",
  },
  {
    id: 4,
    icon: <HardHat size={26} />,
    title: "Construction",
    description: "Quality construction with expert supervision.",
  },
  {
    id: 5,
    icon: <KeyRound size={26} />,
    title: "Handover",
    description: "On-time project delivery and customer satisfaction.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="mb-16">

          <p className="uppercase text-[#F4B400] tracking-[3px] font-semibold">

            OUR PROCESS

          </p>

          <h2 className="text-5xl font-bold text-[#081B33] mt-2">

            Our Working Process

          </h2>

        </div>

        {/* Process */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {process.map((item, index) => (

            <div
              key={item.id}
              className="relative group"
            >

              {/* Connector */}

              {index !== process.length - 1 && (
                <div className="hidden lg:block absolute top-9 left-[72%] w-full">

                  <ArrowRight
                    className="text-[#F4B400]"
                    size={22}
                  />

                </div>
              )}

              {/* Circle */}

              <div className="w-18 h-18">

                <div className="w-18 h-18 rounded-full border-2 border-[#F4B400] bg-white flex items-center justify-center text-[#F4B400] group-hover:bg-[#F4B400] group-hover:text-white transition-all duration-300 shadow-md">

                  {item.icon}

                </div>

              </div>

              {/* Title */}

              <h3 className="mt-6 font-bold text-lg text-[#081B33]">

                {item.title}

              </h3>

              {/* Description */}

              <p className="text-gray-600 text-sm leading-6 mt-3">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ProcessSection;