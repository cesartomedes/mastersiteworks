import {
  FaBuilding,
  FaWater,
  FaMountain,
  FaLeaf,
  FaDraftingCompass,
  FaBorderAll,
} from "react-icons/fa";
import { GiBrickWall, GiBulldozer } from "react-icons/gi";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaBuilding className="text-5xl text-[#314528]" />,
      title: "Demolition",
      description:
        "Professional demolition services for residential and commercial structures, ensuring safety and efficiency in every project.",
    },
    {
      icon: <FaWater className="text-5xl text-[#314528]" />,
      title: "Underground Utilities",
      description:
        "We specialize in underground Water Distribution, Sanitary Sewer and Storm Drainage Systems.",
    },
    {
      icon: <GiBulldozer className="text-5xl text-[#314528]" />,
      title: "Grading & Clearing",
      description:
        "We offer a full site package including clearing and grading, preparing your land for construction.",
    },
    {
      icon: <FaLeaf className="text-5xl text-[#314528]" />,
      title: "Erosion Control",
      description:
        "From Sand Filters to Silt Worms our Environmental Protection services are first class.",
    },
    {
      icon: <GiBrickWall className="text-5xl text-[#314528]" />,
      title: "Retaining Walls",
      description:
        "Expert design and installation of retaining walls for structural support and aesthetic enhancement.",
    },
    {
      icon: <FaBorderAll className="text-5xl text-[#314528]" />,
      title: "Curb and Gutter",
      description:
        "Provide full-service curb and gutter work, including site prep, grading, form setting, concrete pouring, finishing, and curing. We perform both new installations and replacement of damaged or deteriorated sections, ensuring durability and proper drainage.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* TEXTO DESCRIPTIVO (About) */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#314528] mb-6">
            About Master Siteworks
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Master Site Works, Inc. is a licensed, bonded, and fully insured
            general contractor specializing in site development and road
            construction. Areas of specialty include grading, storm drainage,
            erosion control, curb & gutter, stone bases, asphalt paving,
            concrete construction, pavement markings, and incidentals to land
            development, road construction, and pavement maintenance.
          </p>
        </div>

        {/* TÍTULO SERVICIOS */}
        <h3 className="text-3xl font-bold text-center text-[#314528] mb-12">
          Our Services
        </h3>

        {/* GRID DE SERVICIOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#314528] group hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icono */}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Título */}
                <h4 className="text-xl font-bold text-[#314528] mb-3">
                  {service.title}
                </h4>

                {/* Descripción */}
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
