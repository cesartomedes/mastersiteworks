import { useState } from "react";
import { FaPhone, FaEnvelope, FaClock, FaMapMarker } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío (aquí conectarías con un backend)
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  // Nueva dirección
  const address = "901 White Store Rd, Wadesboro, NC 28170";
  const phoneNumber = "980-427-3530";
  const email = "info@siteworks.com";

  // Mapa de Google Maps con la nueva dirección
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.1234567890123!2d-80.076543!3d34.968765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a1234567890b%3A0x1234567890abcdef!2s901%20White%20Store%20Rd%2C%20Wadesboro%2C%20NC%2028170!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#314528] mb-4">Contact Us</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Feel free to give us a call or fill out the form 
            below and we can discuss your upcoming project.
          </p>
          <div className="w-20 h-1 bg-[#314528] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* COLUMNA IZQUIERDA - Formulario */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#314528] mb-2">Questions & Estimates</h3>
            <p className="text-gray-500 mb-6">Fill out the form and we'll get back to you within 24 hours.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#314528] focus:ring-2 focus:ring-[#314528]/20 transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#314528] focus:ring-2 focus:ring-[#314528]/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#314528] focus:ring-2 focus:ring-[#314528]/20 transition-all"
                  placeholder={phoneNumber}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  What are the dates and details of your project?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#314528] focus:ring-2 focus:ring-[#314528]/20 transition-all resize-none"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-3 rounded-lg font-semibold text-white transition-all duration-300
                  ${isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-[#314528] hover:bg-[#314528]/80 transform hover:scale-[1.02] shadow-lg hover:shadow-xl'
                  }
                `}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === "success" && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
                  ✓ Message sent successfully! We'll contact you soon.
                </div>
              )}
            </form>
          </div>
          
          {/* COLUMNA DERECHA - Información y Mapa */}
          <div className="space-y-8">
            
            {/* Información de contacto - ACTUALIZADA */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#314528] mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                {/* Dirección */}
                <div className="flex items-start gap-4">
                  <FaMapMarker className="text-2xl text-[#314528] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Master Site Works</p>
                    <p className="text-gray-600">901 White Store Rd</p>
                    <p className="text-gray-600">Wadesboro, NC 28170</p>
                    <p className="text-gray-600">United States</p>
                  </div>
                </div>
                
                {/* Teléfono */}
                <div className="flex items-center gap-4">
                  <FaPhone className="text-2xl text-[#314528] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <a href={`tel:${phoneNumber.replace(/-/g, '')}`} className="text-gray-600 hover:text-[#314528] transition">
                      {phoneNumber}
                    </a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-2xl text-[#314528] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <a href={`mailto:${email}`} className="text-gray-600 hover:text-[#314528] transition">
                      {email}
                    </a>
                  </div>
                </div>
                
                {/* Horarios - ACTUALIZADOS */}
                <div className="flex items-start gap-4">
                  <FaClock className="text-2xl text-[#314528] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Hours</p>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 8:00 AM - 12:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Maps - ACTUALIZADO */}
            <div className="bg-gray-50 rounded-2xl p-4 shadow-lg">
              <h3 className="text-xl font-bold text-[#314528] mb-4">Find Us</h3>
              <div className="rounded-xl overflow-hidden shadow-md">
                <iframe
                  title="Master Site Works Location"
                  src={mapSrc}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">
                901 White Store Rd, Wadesboro, NC 28170
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;