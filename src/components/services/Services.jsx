import React from "react";
import {
  Building2,
  ShieldCheck,
  BadgeDollarSign,
  Umbrella,
} from "lucide-react";

const services = [
  {
    icon: <Building2 className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Affordable Property",
    description:
      "Find premium homes at competitive prices with trusted real estate experts.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Guaranteed Quality",
    description:
      "Every property is verified to ensure safety, quality and long-term value.",
  },
  {
    icon: <BadgeDollarSign className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Fast and Easy Process",
    description:
      "Simple documentation and quick buying process with expert guidance.",
  },
  {
    icon: <Umbrella className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Property Insurance",
    description:
      "Protect your investment with reliable property insurance solutions.",
  },
];

const Services = () => {
  return (
    <section className="w-full bg-[#faf7f5] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Services
          </h2>

          <p className="mt-3 text-gray-900 text-sm sm:text-base max-w-2xl mx-auto leading-7">
            Enhance your property buying and selling experience with
            professional real estate solutions tailored to your needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#A96E4F] rounded-2xl shadow-lg p-5 sm:p-6 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Icon Box */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl flex items-center justify-center text-[#A96E4F] flex-shrink-0 shadow">
                {service.icon}
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-white text-lg sm:text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="text-white/80 text-xs sm:text-sm leading-6 mt-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;