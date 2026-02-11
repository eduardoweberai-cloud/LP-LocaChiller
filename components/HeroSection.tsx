import React from 'react';
import Button from './ui/Button';
import { IMAGES } from '../constants/images';

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[95vh] md:min-h-screen bg-[#366569] overflow-hidden flex items-center justify-center">
      {/* Camada de Fundo Base com Gradiente Profundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#366569] via-[#366569] to-[#2c5255] pointer-events-none" />
      
      {/* Padrão de Sinais de "+" Sutis e Espaçados */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none" 
        style={{ 
          backgroundImage: `
            linear-gradient(white 2px, transparent 2px), 
            linear-gradient(90deg, white 2px, transparent 2px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center',
          maskImage: 'radial-gradient(circle, black 2px, transparent 2.5px)',
          WebkitMaskImage: 'radial-gradient(circle, black 2px, transparent 2.5px)',
          backgroundRepeat: 'repeat'
        }} 
      />

      {/* Brilho Central para profundidade */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-400/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-4 items-center py-12 md:py-16">
          
          {/* Bloco de Texto (Esquerda) - Mais Largo */}
          <div className="w-full max-w-3xl text-left animate-fade-in-up order-1 lg:order-1 flex flex-col justify-center lg:pr-4">
            <h1 className="text-[30px] md:text-[40px] lg:text-[48px] font-extrabold text-white leading-[1.15] mb-10 tracking-normal">
              Locação de Chiller <br /> 
              Industrial para <br />
              Situações Críticas <br />
              e Temporárias
            </h1>
            
            <div className="space-y-6 mb-12 max-w-[90%] lg:max-w-[85%]">
              <p className="text-lg md:text-[20px] text-white/95 font-medium leading-relaxed">
                Solução técnica para emergências, manutenções e projetos de curto prazo em ambientes industriais.
              </p>
              <p className="text-base md:text-lg text-white/60 font-normal leading-relaxed">
                Locação de chillers industriais para empresas que precisam manter a operação ativa sem investir na compra de um equipamento.
              </p>
            </div>

            <div className="flex justify-start">
              <Button 
                onClick={onCtaClick} 
                className="px-12 py-6 rounded-[12px] text-xl font-bold hover:scale-105"
              >
                Falar com especialista
              </Button>
            </div>
          </div>

          {/* Imagem - Mantida Centralizada e Aproximada */}
          <div className="flex justify-center lg:justify-center animate-fade-in-right order-2 lg:order-2 relative">
            <div className="relative w-full max-w-[320px] md:max-w-[440px] lg:max-w-[580px] lg:-ml-8">
              <div className="absolute inset-0 bg-cyan-300/10 rounded-full blur-[100px] scale-110 pointer-events-none" />
              
              <img 
                src={IMAGES.HERO_CHILLER} 
                alt="Chiller Industrial Qualiterme" 
                className="relative w-full h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
                onError={(e) => { e.currentTarget.src = IMAGES.FALLBACK_HERO; }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ondulação Curva Inferior */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[50px] md:h-[90px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 120L0 0C300 120 900 120 1200 0L1200 120Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;