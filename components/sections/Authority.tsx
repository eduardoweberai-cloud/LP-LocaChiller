import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../../constants/images';

const Authority: React.FC = () => {
  const points = [
    "Know-how técnico real",
    "Conhecimento profundo das aplicações",
    "Soluções pensadas por quem entende do equipamento",
    "Segurança na tomada de decisão"
  ];

  return (
    <section className="py-24 bg-[#002d4b] text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Autoridade e lastro técnico
          </h2>
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            A LocaChiller faz parte do ecossistema Qualiterme, empresa com ampla experiência na fabricação e fornecimento de chillers industriais.
          </p>

          <div className="grid gap-6">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-[#f58220] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-white/90">{point}</span>
              </div>
            ))}
          </div>

          <p className="mt-12 text-[#f58220] font-bold text-lg">
            Mais do que locar, entendemos o contexto da sua operação.
          </p>
        </div>

        <div className="flex justify-center relative">
          <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full" />
          {/* Fix: Property 'AUTHORITY_CHILLER_IMG' was corrected to 'AUTHORITY_CHILLER' based on IMAGES definition */}
          <img 
            src={IMAGES.AUTHORITY_CHILLER} 
            alt="Engenharia Qualiterme" 
            className="relative rounded-2xl shadow-2xl border-2 border-white/5 w-full max-w-lg z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Authority;