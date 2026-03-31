import { useState, useEffect } from "react";
import { FaSearchPlus, FaTimes } from "react-icons/fa";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");

  // Controlar el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (selectedImage) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedImage]);

  // Construir rutas de las imágenes locales
  const demoImage = `${import.meta.env.BASE_URL}images/demo.png`;
  const utilitiesImage = `${import.meta.env.BASE_URL}images/utilities.jpg`;
  const fenceImage = `${import.meta.env.BASE_URL}images/fence.jpg`;

  // Galería de imágenes - AHORA CON 3 IMÁGENES LOCALES
  const galleryImages = [
    {
      id: 1,
      src: demoImage,
      title: "Demolition",
      category: "demo",
      description: "Professional demolition services for residential and commercial structures, ensuring safety and efficiency in every project."
    },
    {
      id: 2,
      src: utilitiesImage,
      title: "Underground Utilities",
      category: "utilities",
      description: "We specialize in underground Water Distribution, Sanitary Sewer and Storm Drainage Systems."
    },
    {
      id: 3,
      src: fenceImage,
      title: "Silt Fence",
      category: "fence",
      description: "Erosion control and sediment management with professional silt fence installation for environmental protection."
    }
  ];

  // Filtros disponibles - SOLO 3 CATEGORÍAS
  const filters = [
    { id: "all", label: "All Projects" },
    { id: "demo", label: "Demolition" },
    { id: "utilities", label: "Underground Utilities" },
    { id: "fence", label: "Silt Fence" }
  ];

  // Filtrar imágenes según categoría
  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  // Abrir modal con imagen grande
  const openModal = (image) => {
    setSelectedImage(image);
  };

  // Cerrar modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Encabezado de la galería */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#314528] mb-4">Our Gallery</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our portfolio of completed projects showcasing our expertise 
            in demolition, underground utilities, and silt fence installation.
          </p>
          <div className="w-20 h-1 bg-[#314528] mx-auto mt-6"></div>
        </div>

        {/* Filtros - SOLO 3 BOTONES */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`
                px-6 py-2 rounded-full font-medium transition-all duration-300
                ${filter === item.id 
                  ? 'bg-[#314528] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Grid de imágenes - 3 tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(image)}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
                
                {/* Icono de búsqueda */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/90 p-3 rounded-full">
                    <FaSearchPlus className="text-2xl text-[#314528]" />
                  </div>
                </div>
                
                {/* Información de la imagen */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-xl font-bold">{image.title}</h3>
                  <p className="text-gray-200 text-sm line-clamp-2">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje si no hay imágenes */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No images found in this category.</p>
          </div>
        )}

        {/* Modal para imagen ampliada */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div
              className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden animate-fadeInUp"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón cerrar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full transition duration-300 shadow-lg"
              >
                <FaTimes className="text-2xl text-[#314528]" />
              </button>
              
              {/* Imagen */}
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Información */}
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-[#314528] mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Estilos adicionales para animación del modal y truncado de texto */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;