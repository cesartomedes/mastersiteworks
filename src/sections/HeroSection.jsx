import { Link } from "react-router-dom";

const HeroSection = () => {
  // Construye la ruta correcta para la imagen, funcione en desarrollo y producción
  const backgroundImage = `url(${import.meta.env.BASE_URL}images/hero.JPG)`;
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start pt-40 md:pt-48 lg:pt-32"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* LOGO - MÁS ARRIBA EN MOBILE Y TABLET */}
        <Link to="/">
          <div className="flex justify-start mb-8 md:mb-16 lg:mb-32 -mt-32 -ml-4 md:-ml-8 lg:-ml-20">
            <img
              src={logoSrc}
              alt="Master Siteworks Logo"
              className="h-24 md:h-32 lg:h-60 w-auto object-cover"
            />
          </div>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* COLUMNA IZQUIERDA - ALINEADA A LA IZQUIERDA */}
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
