import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import VideoSection from "../sections/VideoSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <VideoSection />
      
      {/* Sección Contact - Temporal mientras creas la página completa */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#314528] mb-4">Contact Us</h2>
          <p className="text-gray-600 text-lg mb-8">
            Get in touch with us for your next project
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#314528] mb-2">Phone</h3>
              <p className="text-gray-600">(704) 555-5555</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#314528] mb-2">Email</h3>
              <p className="text-gray-600">info@mastersiteworks.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#314528] mb-2">Address</h3>
              <p className="text-gray-600">North Carolina, USA</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;