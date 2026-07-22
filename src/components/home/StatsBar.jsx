import {
  Building2,
  UsersRound,
  HardHat,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    icon: <Building2 size={42} strokeWidth={1.6} />,
    number: "50+",
    title: "Projects Completed",
  },
  {
    icon: <UsersRound size={42} strokeWidth={1.6} />,
    number: "100+",
    title: "Happy Clients",
  },
  {
    icon: <HardHat size={42} strokeWidth={1.6} />,
    number: "10+",
    title: "Expert Engineers",
  },
  {
    icon: <BadgeCheck size={42} strokeWidth={1.6} />,
    number: "5+",
    title: "Years Experience",
  },
];

const StatsBar = () => {
  return (
    <section className="relative z-30 -mt-6">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">

        <div className="bg-white rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,0.12)] overflow-hidden">

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {stats.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-center gap-5 py-8 px-6
                ${
                  index !== stats.length - 1
                    ? "border-b lg:border-b-0 lg:border-r border-gray-200"
                    : ""
                }`}
              >

                {/* Icon */}

                <div className="text-[#081B33]">
                  {item.icon}
                </div>

                {/* Text */}

                <div>

                  <h2 className="text-[44px] leading-none font-bold text-[#081B33]">
                    {item.number}
                  </h2>

                  <p className="text-gray-600 text-lg mt-2">
                    {item.title}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default StatsBar;