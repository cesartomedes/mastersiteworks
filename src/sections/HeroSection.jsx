import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HeroSection = () => {
  // Construye la ruta correcta para la imagen, funcione en desarrollo y producción
  const backgroundImage = `url(${import.meta.env.BASE_URL}images/hero.JPG)`;
  const logoSrc = `${import.meta.env.BASE_URL}logo1.PNG`;
  
  // Detectar tamaño de pantalla
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determinar backgroundPosition según dispositivo
  const getBackgroundPosition = () => {
    if (isMobile) return "center 40%"; // En mobile, muestra la parte media-superior
    if (isTablet) return "center 35%"; // En tablet, posición media
    return "center"; // En desktop, centrado
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start pt-40 md:pt-48 lg:pt-32"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: getBackgroundPosition(),
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* LOGO - ENORMEMENTE MÁS GRANDE */}
        <Link to="/">
          <div className="flex justify-start mb-4 md:mb-8 lg:mb-20 -mt-44 -ml-4 md:-ml-8 lg:-ml-20">
            <img
              src={logoSrc}
              alt="Master Siteworks Logo"
              className="h-56 md:h-80 lg:h-[32rem] w-auto object-contain"
            />
          </div>
        </Link>

        {/* TEXTO - MÁS ABAJO EN MÓVIL, IGUAL EN TABLET Y DESKTOP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start -mt-20 md:-mt-40 lg:-mt-16">
          {/* COLUMNA IZQUIERDA */}
          <div className="text-white">
            {/* Contenedor flexible para barra + texto */}
            <div className="flex items-stretch mb-6">
              {/* Barra vertical */}
              <div className="w-1.5 bg-[#314528] mr-6 self-stretch"></div>

              {/* Bloque de texto */}
              <div className="flex flex-col">
                <div>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-white">
                    Master
                  </h1>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-white">
                    Siteworks
                  </h1>
                </div>

                <div className="mt-4">
                  <div className="w-16 h-0.5 bg-[#314528] mt-2"></div>
                </div>
              </div>
            </div>

            {/* BOTÓN ABOUT US */}
            <div className="ml-0">
              <Link
                to="/about"
                className="group relative inline-block px-8 py-4 bg-transparent border-2 border-[#314528] text-white hover:bg-[#314528] hover:text-white transition-all duration-300 font-semibold uppercase tracking-wider overflow-hidden rounded-lg"
              >
                <span className="relative z-10">About us</span>
                <div className="absolute inset-0 bg-[#314528] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </div>
          </div>

          {/* COLUMNA DERECHA */}
          <div className="text-white hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;