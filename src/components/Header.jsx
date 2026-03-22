import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Determinar si el link está activo
  const isActive = (path) => location.pathname === path;

  // Determinar el color del texto según la página y scroll
  const getTextColorClass = () => {
    // Con scroll: siempre blanco
    if (isScrolled) {
      return 'text-white';
    }
    // Sin scroll: depende de la página
    if (location.pathname === '/') {
      return 'text-white'; // Home: blanco
    }
    return 'text-[#314528]'; // Gallery, About, Contact: verde
  };

  // Determinar el color del texto activo según el contexto
  const getActiveColorClass = () => {
    // En Gallery, About o Contact sin scroll: fondo verde con texto blanco
    if ((location.pathname === '/gallery' || location.pathname === '/about' || location.pathname === '/contact') && !isScrolled) {
      return 'text-white bg-[#314528] px-3 py-1 rounded-md';
    }
    // En Home sin scroll: texto blanco (sin fondo especial)
    if (location.pathname === '/' && !isScrolled) {
      return 'text-white';
    }
    // Con scroll: texto blanco con borde inferior
    if (isScrolled) {
      return 'text-white border-b-2 border-white';
    }
    // Default
    return 'text-[#314528]';
  };

  const textColor = getTextColorClass();
  const activeColorClass = getActiveColorClass();

  return (
    <header 
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-[#314528]/90 backdrop-blur-md shadow-lg py-4' 
          : 'bg-transparent py-6'
        }
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo a la izquierda - Link a Home */}
          <Link 
            to="/" 
            className={`${textColor} hover:opacity-80 transition duration-300`}
          >
            <span className="text-xl md:text-2xl font-bold tracking-wider">
              MASTER SITEWORKS
            </span>
          </Link>

          {/* Menú de navegación - desktop */}
          <nav className={`hidden md:flex space-x-8 mr-12 transition-all duration-300 ${textColor}`}>
            <Link 
              to="/" 
              className={`
                text-lg font-medium transition-all duration-300
                ${isActive('/') ? activeColorClass : ''}
                ${!isActive('/') && (isScrolled ? 'hover:text-white/80' : 'hover:text-[#314528]/80')}
              `}
            >
              Home
            </Link>
            <Link 
              to="/gallery" 
              className={`
                text-lg font-medium transition-all duration-300
                ${isActive('/gallery') ? activeColorClass : ''}
                ${!isActive('/gallery') && (isScrolled ? 'hover:text-white/80' : 'hover:text-[#314528]/80')}
              `}
            >
              Gallery
            </Link>
            <Link 
              to="/about" 
              className={`
                text-lg font-medium transition-all duration-300
                ${isActive('/about') ? activeColorClass : ''}
                ${!isActive('/about') && (isScrolled ? 'hover:text-white/80' : 'hover:text-[#314528]/80')}
              `}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`
                text-lg font-medium transition-all duration-300
                ${isActive('/contact') ? activeColorClass : ''}
                ${!isActive('/contact') && (isScrolled ? 'hover:text-white/80' : 'hover:text-[#314528]/80')}
              `}
            >
              Contact
            </Link>
          </nav>

          {/* Botón de menú móvil */}
          <button 
            onClick={toggleMenu} 
            className={`
              md:hidden text-2xl focus:outline-none transition duration-300
              ${isScrolled 
                ? 'text-white hover:text-white/80' 
                : textColor === 'text-white' 
                  ? 'text-white hover:text-white/80' 
                  : 'text-[#314528] hover:text-[#314528]/80'
              }
            `}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-[#314528]/90 backdrop-blur-md rounded-lg p-4">
            <nav className="flex flex-col space-y-3 text-white">
              <Link 
                to="/" 
                className={`text-lg transition duration-300 py-2 ${isActive('/') && 'text-white/80 font-semibold'}`}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/gallery" 
                className={`text-lg transition duration-300 py-2 ${isActive('/gallery') && 'text-white/80 font-semibold'}`}
                onClick={toggleMenu}
              >
                Gallery
              </Link>
              <Link 
                to="/about" 
                className={`text-lg transition duration-300 py-2 ${isActive('/about') && 'text-white/80 font-semibold'}`}
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`text-lg transition duration-300 py-2 ${isActive('/contact') && 'text-white/80 font-semibold'}`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;