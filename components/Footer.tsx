import React from 'react';
import { Factory, MapPin, Phone, MessageCircle, Mail, Building2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#234244] text-white pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="text-xl font-bold mb-6 text-[#f58220]">LocaChiller</h3>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Locação de chillers industriais para situações planejadas, emergenciais ou temporárias. Parte do ecossistema Qualiterme.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6 flex items-center gap-2">
            <Factory className="w-5 h-5 text-[#f58220]" />
            Atendimento Industrial
          </h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li>Locação emergencial</li>
            <li>Locação temporária</li>
            <li>Projetos de curto prazo</li>
            <li>Suporte técnico especializado</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#f58220]" />
            Regiões Atendidas
          </h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li>Rio Grande do Sul (RS)</li>
            <li>Santa Catarina (SC)</li>
            <li>Paraná (PR)</li>
            <li>São Paulo (SP)</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 flex items-center gap-2">
            <Phone className="w-5 h-5 text-[#f58220]" />
            Contato
          </h4>
          <div className="space-y-4 text-white/60 text-sm">
            <p className="flex items-center gap-3">
              <MessageCircle className="w-4 h-4" />
              (51) 983046162
            </p>
            <p className="flex items-center gap-3">
              <Mail className="w-4 h-4" />
              contato@locachiller.com.br
            </p>
            <p className="flex items-center gap-3">
              <Building2 className="w-4 h-4" />
              Solução para uso industrial
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-lg text-white/40">
          Powered by <span className="font-bold text-white/60">Qualiterme</span>
        </p>
        <p className="text-xs text-white/40">
          © 2026 LocaChiller. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;