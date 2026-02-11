
import React from 'react';
import Button from './ui/Button';
import { FormLead, NecessidadeType } from '../types';

interface FullFormSectionProps {
  onSubmit: (e: React.FormEvent) => void;
  formData: FormLead;
  setFormData: React.Dispatch<React.SetStateAction<FormLead>>;
}

const FullFormSection: React.FC<FullFormSectionProps> = ({ onSubmit, formData, setFormData }) => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[32px] font-bold text-institutional-blue mb-4 leading-tight">
            Prefere deixar seus dados para contato técnico?
          </h2>
          <p className="text-gray-500">
            Entraremos em contato para entender sua demanda e avaliar a melhor solução.
          </p>
        </div>

        <form onSubmit={onSubmit} className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label htmlFor="nome" className="text-sm font-semibold text-gray-700">Nome</label>
              <input 
                id="nome"
                required
                type="text" 
                placeholder="Seu nome completo" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#f58220] outline-none transition-all bg-white"
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700">E-mail</label>
              <input 
                id="email"
                type="email" 
                placeholder="seu@email.com" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#f58220] outline-none transition-all bg-white"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: (e.target.value)})}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="telefone" className="text-sm font-semibold text-gray-700">Telefone</label>
              <input 
                id="telefone"
                required
                type="tel" 
                placeholder="(00) 00000-0000" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#f58220] outline-none transition-all bg-white"
                value={formData.telefone}
                onChange={(e) => setFormData({...formData, telefone: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="empresa" className="text-sm font-semibold text-gray-700">Empresa</label>
              <input 
                id="empresa"
                type="text" 
                placeholder="Nome da empresa" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#f58220] outline-none transition-all bg-white"
                value={formData.empresa}
                onChange={(e) => setFormData({...formData, empresa: e.target.value})}
              />
            </div>
          </div>
          
          <div className="space-y-2 mb-10">
            <label htmlFor="necessidade" className="text-sm font-semibold text-gray-700">Tipo de necessidade</label>
            <select 
              id="necessidade"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#f58220] outline-none transition-all bg-white"
              value={formData.necessidade}
              onChange={(e) => setFormData({...formData, necessidade: e.target.value})}
            >
              <option value="">Selecione uma opção</option>
              {Object.values(NecessidadeType).map(v => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>

          <Button variant="primary" fullWidth type="submit">
            Solicitar contato técnico
          </Button>
        </form>
      </div>
    </section>
  );
};

export default FullFormSection;
