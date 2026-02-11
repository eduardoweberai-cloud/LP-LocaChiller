import React from 'react';
import { Warehouse, Factory, Hospital, Beer, FlaskConical } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const segments = [
    { label: "Laticínios", Icon: Warehouse },
    { label: "Indústrias de médio e grande porte", Icon: Factory },
    { label: "Hospitais e clínicas", Icon: Hospital },
    { label: "Cervejarias", Icon: Beer },
    { label: "Indústrias plásticas e injetoras", Icon: FlaskConical }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-institutional-blue mb-6">
            Para quem é a LocaChiller
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Atendemos empresas que precisam de soluções de refrigeração industrial confiáveis e rápidas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {segments.map((segment, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-md transition-all">
              <div className="p-4 bg-gray-50 rounded-full mb-4 text-institutional-blue group-hover:bg-institutional-blue group-hover:text-white transition-colors">
                <segment.Icon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-gray-800 leading-tight">{segment.label}</h3>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-institutional-blue font-bold text-sm tracking-wide uppercase">
            Atendimento exclusivo para uso industrial e corporativo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;