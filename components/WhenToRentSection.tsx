import React from 'react';
import { AlertCircle } from 'lucide-react';

const WhenToRentSection: React.FC = () => {
  const criteria = [
    "O chiller da operação apresentou falha ou está em manutenção",
    "A capacidade atual é insuficiente temporariamente",
    "Existe a necessidade de manter a operação ativa durante reparos",
    "Projetos industriais de curto prazo",
    "Testes de expansão ou aumento pontual de produção",
    "Situações emergenciais que não permitem parada da planta"
  ];

  return (
    <section className="py-24 md:py-[100px] bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-[42px] font-extrabold text-[#366569] text-center mb-16 leading-tight">
          Quando a locação de chiller é a solução certa
        </h2>
        
        <div className="space-y-8">
          {criteria.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 group">
              <AlertCircle className="w-6 h-6 text-[#f58220] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <span className="text-lg md:text-xl text-gray-700 font-normal leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhenToRentSection;