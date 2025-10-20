import React from 'react';
import { InstagramIcon, BehanceIcon, MailIcon } from './icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-200 scroll-mt-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-6xl font-bangers text-black tracking-wider mb-4">Vamos Criar Algo Incrível?</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Estou sempre procurando por novos desafios e projetos. Me mande uma mensagem!
        </p>
        <div className="flex justify-center items-center space-x-8">
          <a href="mailto:seuemail@example.com" className="text-black group transition-transform transform hover:-translate-y-2">
            <div className="bg-yellow-400 p-4 rounded-full border-4 border-black">
              <MailIcon className="w-12 h-12" />
            </div>
            <span className="block mt-3 font-bold text-lg">Email</span>
          </a>
          <a href="#" className="text-black group transition-transform transform hover:-translate-y-2">
            <div className="bg-yellow-400 p-4 rounded-full border-4 border-black">
              <InstagramIcon className="w-12 h-12" />
            </div>
            <span className="block mt-3 font-bold text-lg">Instagram</span>
          </a>
          <a href="#" className="text-black group transition-transform transform hover:-translate-y-2">
            <div className="bg-yellow-400 p-4 rounded-full border-4 border-black">
              <BehanceIcon className="w-12 h-12" />
            </div>
            <span className="block mt-3 font-bold text-lg">Behance</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
