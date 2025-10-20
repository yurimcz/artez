import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-cover bg-center border-b-8 border-black" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(https://picsum.photos/seed/comic-splash/1920/1080)' }}>
      <div className="text-center text-white p-6">
        <h1 className="text-6xl md:text-8xl font-bangers tracking-wider mb-4" style={{ textShadow: '4px 4px 0px #000' }}>
          Arte que Salta das Páginas
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 font-bold" style={{ textShadow: '2px 2px 0px #000' }}>
          Quadrinhos, ilustrações e criações digitais com o poder do Photoshop.
        </p>
        <a 
          href="#portfolio"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-10 rounded-md text-xl transition-transform transform hover:scale-105 duration-300 inline-block border-4 border-black shadow-lg"
        >
          VEJA MEU TRABALHO!
        </a>
      </div>
    </section>
  );
};

export default Hero;
