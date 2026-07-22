import Hero from "../components/home/Hero";
import StatsBar from "../components/home/StatsBar";
import AboutSection from "../components/home/AboutSection";
import ServiceSection from "../components/home/ServiceSection";
import ProjectSection from "../components/home/ProjectSection";
import ProcessSection from "../components/home/ProcessSection";

const Home = () => {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <ProcessSection />
    </>
  );
};

export default Home;