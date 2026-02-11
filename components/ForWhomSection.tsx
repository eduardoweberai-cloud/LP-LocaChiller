import React from 'react';
import { Warehouse, Hospital, Beer, Settings } from 'lucide-react';
import Button from './ui/Button';

interface ForWhomSectionProps {
  onCtaClick: () => void;
}

const ForWhomSection: React.FC<ForWhomSectionProps> = ({ onCtaClick }) => {
  const segments = [
    { label: "Laticínios", Icon: Warehouse },
    { label: "Hospitais e clínicas", Icon: Hospital },
    { label: "Cervejarias", Icon: Beer },
    { label: "Indústrias plásticas e injetoras", Icon: Settings }
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[42px] font-extrabold text-[#366569] mb-6 leading-tight">
            Para quem é a LocaChiller
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Atendemos empresas que precisam de soluções de refrigeração industrial confiáveis e rápidas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto">
          {segments.map((segment, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-md border border-white flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300">
              <div className="p-4 bg-gray-50 rounded-full mb-4 text-[#366569] group-hover:bg-[#366569] group-hover:text-white transition-colors">
                <segment.Icon className="w-9 h-9" />
              </div>
              <h3 className="font-bold text-gray-800 leading-tight text-base md:text-lg">{segment.label}</h3>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center gap-8">
          <Button 
            onClick={onCtaClick}
            className="px-10 py-5 rounded-xl text-lg hover:scale-105"
          >
            Verificar disponibilidade para meu setor
          </Button>

          <p className="text-[#366569] font-bold text-sm tracking-widest uppercase">
            Atendimento exclusivo para uso industrial e corporativo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;