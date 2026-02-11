
import React from 'react';
import Button from '../Button';

interface FinalCTAProps {
  onCtaClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onCtaClick }) => {
  return (
    <section className="py-20 bg-institutional-orange text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundPosition: '0 0, 16px 16px', backgroundSize: '32px 32px' }} />
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight max-w-4xl mx-auto">
          Precisa de um chiller industrial para manter sua operação ativa?
        </h2>
        <div className="flex flex-col items-center gap-6">
          <Button variant="secondary" onClick={onCtaClick} className="text-lg py-5 px-12">
            Falar com especialista agora
          </Button>
          <p className="text-white/80 font-medium">
            Atendimento técnico para locação temporária e emergencial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
