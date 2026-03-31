import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaTrophy, FaUsers, FaClock, FaHardHat, FaBuilding, FaRoad, FaPaintRoller } from "react-icons/fa";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Animación al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("about-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Estadísticas de la empresa - ACTUALIZADAS
  const stats = [
    { icon: <FaTrophy />, value: "15+", label: "Years Experience" },
    { icon: <FaUsers />, value: "200+", label: "Projects Completed" },
    { icon: <FaCheckCircle />, value: "100%", label: "Client Satisfaction" },
    { icon: <FaClock />, value: "24/7", label: "Emergency Support" },
  ];

  // Servicios específicos - NUEVA LISTA
  const services = [
    { icon: <FaBuilding />, name: "Demolition" },
    { icon: <FaHardHat />, name: "Site Development" },
    { icon: <FaRoad />, name: "Asphalt Removal" },
    { icon: <FaPaintRoller />, name: "Pavement Markings" },
  ];

  // Construir ruta de la imagen
  const imageSrc = `${import.meta.env.BASE_URL}images/about.JPG`;

  // Función para ir a Home y hacer scroll a Contact
  const handleContactClick = (e) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA - Texto */}
          <div
            id="about-section"
            className={`transform transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Badge */}
            <div className="inline-block bg-[#314528]/10 text-[#314528] px-4 py-1 rounded-full text-sm font-semibold mb-6">
              About Us
            </div>

            {/* Título */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Excellence in{" "}
              <span className="text-[#314528]">Site Development</span>
            </h2>

            {/* Descripción principal - ACTUALIZADA */}
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Master Siteworks is a licensed, bonded, and fully insured general contractor 
              specializing in site development. With over 15 years of experience, we've built 
              a reputation for excellence, reliability, and superior craftsmanship.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our expertise spans demolition, site development, asphalt removal, and pavement markings. 
              We're committed to delivering projects on time, within budget, and to the highest quality 
              standards.
            </p>

            {/* Lista de servicios destacados - NUEVA */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-[#314528]/5 transition-all duration-300 group"
                >
                  <div className="text-2xl text-[#314528] group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{service.name}</span>
                </div>
              ))}
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-[#314528]/5 transition-all duration-300 group"
                >
                  <div className="text-3xl text-[#314528] group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Botón de contacto */}
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 bg-[#314528] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#314528]/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Contact Us
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* COLUMNA DERECHA - Imagen */}
          <div
            className={`transform transition-all duration-700 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative group">
              {/* Imagen principal */}
              <img
                src={imageSrc}
                alt="Master Site Works construction project"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                style={{ maxHeight: "500px" }}
              />

              {/* Borde decorativo */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#314528] rounded-tl-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#314528] rounded-br-2xl"></div>

              {/* Overlay con efecto hover */}
              <div className="absolute inset-0 bg-[#314528]/0 group-hover:bg-[#314528]/10 transition-all duration-500 rounded-2xl"></div>

              {/* Badge flotante */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white shadow-xl rounded-full px-6 py-3 flex items-center gap-2">
                <div className="w-3 h-3 bg-[#314528] rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium">Licensed • Bonded • Insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos adicionales para animaciones */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;