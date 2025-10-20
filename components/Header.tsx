import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" className="text-4xl text-gray-800 hover:text-yellow-500 transition-colors font-bangers tracking-wider">
          Meu Portfólio
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <a href="#portfolio" className="text-gray-700 hover:text-yellow-500 transition-colors font-bold text-lg">Trabalhos</a>
          <a href="#about" className="text-gray-700 hover:text-yellow-500 transition-colors font-bold text-lg">O Artista</a>
          <a href="#contact" className="text-gray-700 hover:text-yellow-500 transition-colors font-bold text-lg">Contato</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none" aria-label="Abrir menu">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t-2 border-gray-800">
          <a href="#portfolio" onClick={handleLinkClick} className="block py-4 px-6 text-center text-gray-700 hover:bg-yellow-400 hover:text-black transition-colors font-bold">Trabalhos</a>
          <a href="#about" onClick={handleLinkClick} className="block py-4 px-6 text-center text-gray-700 hover:bg-yellow-400 hover:text-black transition-colors font-bold">O Artista</a>
          <a href="#contact" onClick={handleLinkClick} className="block py-4 px-6 text-center text-gray-700 hover:bg-yellow-400 hover:text-black transition-colors font-bold">Contato</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
