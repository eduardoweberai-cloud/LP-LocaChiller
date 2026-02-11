
import React from 'react';
import { Warehouse, Clock, Settings, Truck, ShieldCheck, MapPin } from 'lucide-react';

const Differentials: React.FC = () => {
  const diffs = [
    { title: "Estoque próprio de chillers industriais", Icon: Warehouse, color: "bg-orange-50 text-orange-600" },
    { title: "Locação temporária e emergencial", Icon: Clock, color: "bg-blue-50 text-blue-600" },
    { title: "Atendimento técnico especializado", Icon: Settings, color: "bg-green-50 text-green-600" },
    { title: "Logística regional eficiente", Icon: Truck, color: "bg-purple-50 text-purple-600" },
    { title: "Experiência prática em aplicações", Icon: ShieldCheck, color: "bg-red-50 text-red-600" },
    { title: "Atuação focada em RS, SC, PR e SP", Icon: MapPin, color: "bg-teal-50 text-teal-600" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-institutional-blue text-center mb-16">
          Diferenciais Operacionais
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diffs.map((diff, idx) => (
            <div key={idx} className="flex items-center gap-6 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-all">
              <div className={`p-4 rounded-xl ${diff.color}`}>
                <diff.Icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-800 leading-tight text-lg">{diff.title}</h4>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-gray-500 italic">
            "Aqui, a locação não é genérica. É técnica, planejada e alinhada à realidade da operação."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
