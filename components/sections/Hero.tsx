
import React from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '../Button';
import { IMAGES } from '../../constants/images';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-screen bg-institutional-blue overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-[#004a7c] via-[#004a7c]/95 to-[#005a8f]/80 pointer-events-none" />
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: IMAGES.PATTERN_DOTS, backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        <div className="max-w-2xl text-left animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white leading-tight mb-6">
            Locação de Chiller Industrial para <span className="text-[#f58220]">Situações Críticas</span> e Temporárias
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-medium mb-4 max-w-[90%]">
            Solução técnica para emergências, manutenções e projetos de curto prazo em ambientes industriais.
          </p>
          <p className="text-base text-white/75 mb-10">
            Locação de chillers industriais para empresas que precisam manter a operação ativa sem investir na compra de um equipamento.
          </p>
          <Button onClick={onCtaClick}>
            Falar com especialista
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex justify-center lg:justify-end animate-fade-in-right">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#f58220]/20 rounded-2xl blur-2xl group-hover:bg-[#f58220]/30 transition-all duration-500" />
            <img 
              src={IMAGES.HERO_CHILLER} 
              alt="Chiller Industrial Qualiterme" 
              className="relative rounded-xl shadow-2xl w-full max-w-[600px] object-cover border-4 border-white/10"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 120L0 0L1200 120Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
