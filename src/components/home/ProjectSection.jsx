import ProjectCard from "./ProjectCard";

import project1 from "../../assets/projects/project1.jpeg";
import project2 from "../../assets/projects/project2.jpeg";
import project3 from "../../assets/projects/project3.jpeg";
import project4 from "../../assets/projects/project4.jpeg";

const projects = [
  {
    image: project1,
    category: "Residential",
    title: "Luxury Duplex Villa",
    location: "Patna, Bihar",
    area: "3200 Sq. Ft.",
  },
  {
    image: project2,
    category: "Commercial",
    title: "Office Building",
    location: "Patna, Bihar",
    area: "8500 Sq. Ft.",
  },
  {
    image: project3,
    category: "Residential",
    title: "Modern Bungalow",
    location: "Danapur, Bihar",
    area: "2800 Sq. Ft.",
  },
  {
    image: project4,
    category: "Commercial",
    title: "Shopping Complex",
    location: "Patna, Bihar",
    area: "12000 Sq. Ft.",
  },
];

const ProjectSection = () => {
  return (
    <section className="py-24 bg-[#081B33]">

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">

          <div>

            <p className="uppercase tracking-[3px] text-[#F4B400] font-semibold">

              OUR PROJECTS

            </p>

            <h2 className="text-5xl font-bold text-white mt-3">

              Our Recent Completed Projects

            </h2>

          </div>

          <button className="mt-6 lg:mt-0 border border-white text-white hover:bg-[#F4B400] hover:text-[#081B33] transition px-8 py-3 rounded-md font-semibold">

            VIEW ALL PROJECTS

          </button>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {projects.map((project, index) => (

            <ProjectCard
              key={index}
              image={project.image}
              category={project.category}
              title={project.title}
              location={project.location}
              area={project.area}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default ProjectSection;