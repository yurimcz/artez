import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-6">
      <div className="container mx-auto px-6 text-center text-gray-300">
        <p className="font-bold">&copy; {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.</p>
        <p className="text-sm mt-1">Criado com o poder da imaginação!</p>
      </div>
    </footer>
  );
};

export default Footer;
