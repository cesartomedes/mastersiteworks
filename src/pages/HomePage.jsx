import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import VideoSection from "../sections/VideoSection";
import { FaPhone, FaEnvelope, FaMapMarker, FaClock } from "react-icons/fa";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <VideoSection />
      
      {/* Sección Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#314528] mb-4">Contact Us</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get in touch with us for your next project. We're here to help!
            </p>
            <div className="w-20 h-1 bg-[#314528] mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Teléfono */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center group">
              <div className="w-16 h-16 bg-[#314528]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#314528] transition-colors duration-300">
                <FaPhone className="text-2xl text-[#314528] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#314528] mb-2">Phone</h3>
              <a href="tel:9804273530" className="text-gray-600 hover:text-[#314528] transition">
                980-427-3530
              </a>
            </div>
            
            {/* Email */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center group">
              <div className="w-16 h-16 bg-[#314528]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#314528] transition-colors duration-300">
                <FaEnvelope className="text-2xl text-[#314528] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#314528] mb-2">Email</h3>
              <a href="mailto:info@siteworks.com" className="text-gray-600 hover:text-[#314528] transition">
                info@siteworks.com
              </a>
            </div>
            
            {/* Dirección */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center group">
              <div className="w-16 h-16 bg-[#314528]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#314528] transition-colors duration-300">
                <FaMapMarker className="text-2xl text-[#314528] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#314528] mb-2">Address</h3>
              <p className="text-gray-600">901 White Store Rd</p>
              <p className="text-gray-600">Wadesboro, NC 28170</p>
            </div>
            
            {/* Horario - NUEVA TARJETA */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center group">
              <div className="w-16 h-16 bg-[#314528]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#314528] transition-colors duration-300">
                <FaClock className="text-2xl text-[#314528] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#314528] mb-2">Hours</h3>
              <p className="text-gray-600">Mon-Fri: 8am - 6pm</p>
              <p className="text-gray-600">Sat: 8am - 12pm</p>
              <p className="text-gray-600">Sun: Closed</p>
            </div>
          </div>
          
          {/* Botón para ir a la página de contacto completa */}
          <div className="text-center mt-12">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#314528] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#314528]/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contact Page
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
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;