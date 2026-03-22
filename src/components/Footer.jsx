const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-[#314528] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            
            {/* Nombre de la empresa */}
            <h3 className="text-2xl font-bold mb-4">Master Siteworks</h3>
            
            {/* Derechos de autor */}
            <p className="text-gray-200 mb-2">
              Copyright © {currentYear} Master Siteworks Inc. - All Rights Reserved.
            </p>
            
            {/* Línea decorativa */}
            <div className="w-16 h-0.5 bg-white/50 my-4"></div>
            
            {/* Disclaimer simple (opcional) */}
            <p className="text-sm text-gray-300">
              Licensed • Bonded • Insured
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;