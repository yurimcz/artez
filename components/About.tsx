import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-y-8 border-black scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="border-4 border-black p-2 bg-gray-200">
               <img 
                src="https://picsum.photos/seed/artist/500/500" 
                alt="Foto do Artista"
                className="w-full"
              />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-6xl font-bangers text-black tracking-wider mb-4">O Artista</h2>
            <div className="w-24 h-2 bg-yellow-400 border-2 border-black mx-auto md:mx-0 mb-6"></div>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Olá! Sou um artista digital apaixonado por contar histórias através de imagens. Desde criança, o desenho é a minha forma de expressão, e hoje me especializo na criação de ilustrações vibrantes e quadrinhos cheios de personalidade usando o Photoshop.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Meu objetivo é capturar a essência de cada ideia e transformá-la em uma arte única e memorável. Se você tem um projeto em mente ou quer uma ilustração exclusiva, vamos conversar!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
