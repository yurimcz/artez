import React from 'react';

interface ArtPiece {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

const artPieces: ArtPiece[] = [
  { id: 1, title: 'Super-Herói Urbano', category: 'Quadrinhos', imageUrl: 'https://picsum.photos/seed/art1/600/800' },
  { id: 2, title: 'Vilão Cósmico', category: 'Photoshop', imageUrl: 'https://picsum.photos/seed/art2/600/800' },
  { id: 3, title: 'Aventura na Selva', category: 'Ilustração', imageUrl: 'https://picsum.photos/seed/art3/800/600' },
  { id: 4, title: 'Detetive Noir', category: 'Quadrinhos', imageUrl: 'https://picsum.photos/seed/art4/600/800' },
  { id: 5, title: 'Robô Gigante', category: 'Photoshop', imageUrl: 'https://picsum.photos/seed/art5/800/600' },
  { id: 6, title: 'Princesa Guerreira', category: 'Ilustração', imageUrl: 'https://picsum.photos/seed/art6/800/600' },
  { id: 7, title: 'Cenário Cyberpunk', category: 'Ilustração', imageUrl: 'https://picsum.photos/seed/art7/800/600' },
  { id: 8, title: 'Monstro do Pântano', category: 'Quadrinhos', imageUrl: 'https://picsum.photos/seed/art8/600/800' },
];

const ArtCard: React.FC<{ piece: ArtPiece }> = ({ piece }) => (
  <div className="group relative overflow-hidden rounded-none shadow-lg cursor-pointer border-4 border-black transition-transform transform hover:scale-105">
    <img src={piece.imageUrl} alt={piece.title} className="w-full h-full object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out border-t-4 border-black">
      <h3 className="text-xl font-bold text-black">{piece.title}</h3>
      <p className="text-yellow-600 font-semibold">{piece.category}</p>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-200 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bangers text-black tracking-wider mb-2">Meu Trabalho</h2>
          <p className="text-lg text-gray-600">Uma seleção de artes, painel por painel.</p>
          <div className="w-24 h-2 bg-yellow-400 border-2 border-black mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {artPieces.map(piece => (
            <ArtCard key={piece.id} piece={piece} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
