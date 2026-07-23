import { Target, Eye, Gem } from "lucide-react";
import story from "../../assets/about/story.jpg";

const CompanyStory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <div>

            <p className="uppercase tracking-[3px] text-[#F4B400] font-semibold">
              Our Story
            </p>

            <h2 className="text-5xl font-bold text-[#081B33] mt-4 leading-tight">
              We Build More Than
              <br />
              Structures,
              <span className="text-[#F4B400]"> We Build Trust</span>
            </h2>

            <p className="text-gray-600 leading-8 mt-8">
              Founded with a vision to redefine the standards of
              construction and architectural consultancy,
              Perfect Building Construction has grown into a trusted
              company known for quality, transparency, and innovation.
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              Our commitment is to transform ideas into reality using
              modern engineering, skilled professionals, and premium
              construction materials.
            </p>

            <div className="grid md:grid-cols-2 gap-10 mt-12">

              <div>
                <Target className="text-[#F4B400]" size={34} />

                <h3 className="font-bold text-xl mt-4">
                  Our Mission
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  Deliver innovative, cost-effective and sustainable
                  construction solutions.
                </p>
              </div>

              <div>
                <Eye className="text-[#F4B400]" size={34} />

                <h3 className="font-bold text-xl mt-4">
                  Our Vision
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  Become the most trusted construction company known
                  for quality and customer satisfaction.
                </p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="relative">

            <img
              src={story}
              alt=""
              className="rounded-xl shadow-xl"
            />

            <div className="absolute right-0 top-0 h-full w-[42%] bg-[#081B33] text-white rounded-r-xl p-8">

              <div className="flex items-center gap-3">

                <Gem className="text-[#F4B400]" />

                <h3 className="font-bold text-xl">
                  Our Values
                </h3>

              </div>

              <ul className="space-y-5 mt-10">

                <li>✓ Integrity & Transparency</li>

                <li>✓ Quality & Excellence</li>

                <li>✓ Innovation</li>

                <li>✓ Safety First</li>

                <li>✓ Timely Delivery</li>

                <li>✓ Customer Satisfaction</li>

              </ul>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyStory;