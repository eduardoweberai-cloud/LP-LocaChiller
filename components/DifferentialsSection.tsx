import React from 'react';
import { Warehouse, Clock, Headphones, Truck, Wrench, MapPin } from 'lucide-react';

const DifferentialsSection: React.FC = () => {
  const diffs = [
    { title: "Estoque próprio de chillers industriais", Icon: Warehouse },
    { title: "Locação temporária e emergencial", Icon: Clock },
    { title: "Atendimento técnico especializado", Icon: Headphones },
    { title: "Logística regional eficiente", Icon: Truck },
    { title: "Experiência prática em aplicações industriais", Icon: Wrench },
    { title: "Atuação focada em RS, SC, PR e SP", Icon: MapPin }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-[42px] font-extrabold text-[#366569] text-center mb-16 leading-tight">
          Diferenciais Operacionais
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diffs.map((diff, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-6 p-7 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-4 rounded-xl bg-[#f58220]/10 text-[#f58220] group-hover:bg-[#f58220] group-hover:text-white transition-colors duration-300">
                <diff.Icon className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-gray-800 leading-tight text-lg md:text-xl">
                {diff.title}
              </h4>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
            Aqui, a locação não é genérica. É técnica, planejada e <br className="hidden md:block" /> alinhada à realidade da operação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;