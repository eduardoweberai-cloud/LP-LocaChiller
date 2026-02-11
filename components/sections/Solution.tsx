
import React from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

const Solution: React.FC = () => {
  const criteria = [
    "O chiller da operação apresentou falha ou está em manutenção",
    "A capacidade atual é insuficiente temporariamente",
    "Existe a necessidade de manter a operação ativa durante reparos",
    "Projetos industriais de curto prazo",
    "Testes de expansão ou aumento pontual de produção",
    "Situações emergenciais que não permitem parada da planta"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-institutional-blue text-center mb-12">
          Quando a locação de chiller é a solução certa
        </h2>
        
        <div className="space-y-6 mb-12">
          {criteria.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
              <CheckCircle2 className="w-6 h-6 text-[#f58220] flex-shrink-0 mt-0.5" />
              <span className="text-lg text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 p-6 rounded-lg flex items-center gap-4 border-l-4 border-gray-400">
          <AlertTriangle className="w-6 h-6 text-gray-500" />
          <p className="text-sm text-gray-600">
            Se sua necessidade for permanente ou residencial, a locação não é a solução ideal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solution;
