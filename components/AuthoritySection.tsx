import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../constants/images';

const AuthoritySection: React.FC = () => {
  const points = [
    "Know-how técnico real",
    "Conhecimento profundo das aplicações",
    "Soluções pensadas por quem entende do equipamento",
    "Segurança na tomada de decisão"
  ];

  return (
    <section className="py-24 bg-[#366569] text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="max-w-xl lg:mx-auto">
          <h2 className="text-3xl md:text-[38px] font-bold mb-8 leading-tight">
            Autoridade e lastro técnico
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
            A LocaChiller faz parte do ecossistema <span className="text-white font-bold">Qualiterme</span>, empresa com ampla experiência na fabricação e fornecimento de chillers industriais.
          </p>

          <div className="grid gap-6">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="w-6 h-6 rounded-full bg-[#f58220] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-white/90 text-lg">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-[#f58220] font-bold text-xl">
            Mais do que locar, entendemos o contexto da sua operação.
          </div>
        </div>

        <div className="flex justify-center lg:justify-end relative">
          <div className="absolute inset-0 bg-cyan-400/10 blur-[100px] rounded-full" />
          <img 
            src={IMAGES.AUTHORITY_CHILLER} 
            alt="Autoridade Técnica LocaChiller" 
            className="relative rounded-2xl shadow-2xl border border-white/10 w-full max-w-md lg:max-w-lg z-10 transform hover:scale-[1.02] transition-transform duration-500"
            onError={(e) => { e.currentTarget.src = IMAGES.FALLBACK_AUTHORITY; }}
          />
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;