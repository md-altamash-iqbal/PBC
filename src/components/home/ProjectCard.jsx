import { MapPin, Ruler } from "lucide-react";

const ProjectCard = ({
  image,
  category,
  title,
  location,
  area,
}) => {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-2xl transition-all duration-500">

      {/* Image */}

      <div className="relative overflow-hidden h-64">

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute top-4 left-4">

          <span className="bg-[#F4B400] text-[#081B33] px-3 py-1 rounded text-sm font-semibold">

            {category}

          </span>

        </div>

      </div>

      {/* Content */}

      <div className="p-5">

        <h3 className="text-2xl font-bold text-[#081B33]">

          {title}

        </h3>

        <div className="flex justify-between mt-5 text-gray-600 text-sm">

          <div className="flex items-center gap-2">

            <MapPin
              size={16}
              className="text-[#F4B400]"
            />

            {location}

          </div>

          <div className="flex items-center gap-2">

            <Ruler
              size={16}
              className="text-[#F4B400]"
            />

            {area}

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;