import React from 'react';
import Button from './ui/Button';

interface FinalCtaSectionProps {
  onCtaClick: () => void;
}

const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 bg-gray-100 overflow-hidden relative border-t border-gray-200">
      {/* Padrão sutil de pontos para textura leve */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)', 
          backgroundSize: '24px 24px' 
        }} 
      />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-[40px] font-extrabold mb-10 leading-tight max-w-4xl mx-auto text-[#366569]">
          Precisa de um chiller industrial para manter sua operação ativa?
        </h2>
        
        <div className="flex flex-col items-center gap-10">
          <Button 
            onClick={onCtaClick} 
            className="px-14 py-6 rounded-[12px] text-xl font-bold hover:scale-105"
          >
            Falar com especialista agora
          </Button>

          <div className="space-y-3">
            <p className="text-gray-700 font-semibold text-lg">
              Atendimento técnico para locação temporária e emergencial.
            </p>
            <p className="text-[#366569] font-bold text-sm tracking-widest uppercase opacity-80">
              RS • SC • PR • SP
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;