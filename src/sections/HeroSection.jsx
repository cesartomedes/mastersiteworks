const HeroSection = () => {
  // Construye la ruta correcta para la imagen, funcione en desarrollo y producción
  const backgroundImage = `url(${import.meta.env.BASE_URL}images/hero.JPG)`;

  return (
    <section
      id="home"
      className="relative h-[60vh] md:h-[80vh] lg:min-h-screen flex items-center"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          {/* COLUMNA IZQUIERDA */}
          <div className="text-white lg:mt-0">
            {/* Contenedor flexible para barra + texto */}
            <div className="flex items-stretch mb-6">
              {/* Barra vertical - se mantiene verde sólido */}
              <div className="w-1.5 bg-[#314528] mr-6 self-stretch"></div>

              {/* Bloque de texto - TODO EN BLANCO */}
              <div className="flex flex-col justify-between">
                <div>
                  {/* Master - ahora en blanco */}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
                    Master
                  </h1>
                  {/* Site Works - ahora en blanco (quitamos el texto verde) */}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
                    Siteworks
                  </h1>
                </div>

            
                <div className="mt-4">
                
                  
                  <div className="w-16 h-0.5 bg-[#314528] mt-2"></div>
                </div>
              </div>
            </div>

            {/* BOTÓN ABOUT US - borde verde, texto blanco, hover verde con texto blanco */}
            <div className="ml-[calc(1.5rem+1.5rem)]">
              <button className="group relative px-8 py-4 bg-transparent border-2 border-[#314528] text-white hover:bg-[#314528] hover:text-white transition-all duration-300 font-semibold uppercase tracking-wider overflow-hidden">
                <span className="relative z-10">About us</span>
                <div className="absolute inset-0 bg-[#314528] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>

          {/* COLUMNA DERECHA - Vacía por ahora */}
          <div className="text-white hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;