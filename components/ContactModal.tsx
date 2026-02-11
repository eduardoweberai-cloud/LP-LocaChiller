import React from 'react';
import Modal from './ui/Modal';
import Button from './ui/Button';
import { FormLead, NecessidadeType } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  formData: FormLead;
  setFormData: React.Dispatch<React.SetStateAction<FormLead>>;
}

const ContactModal: React.FC<ContactModalProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  formData, 
  setFormData 
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-institutional-blue leading-tight mb-2">
          Vamos entender sua necessidade rapidamente.
        </h2>
        <p className="text-sm text-gray-500">
          Preencha os dados para iniciar o atendimento técnico.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="modal-nome" className="text-xs font-bold text-gray-500 uppercase px-1">Nome</label>
          <input 
            id="modal-nome"
            required
            type="text" 
            placeholder="Seu nome"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#f58220] outline-none transition-all"
            value={formData.nome}
            onChange={(e) => setFormData({...formData, nome: e.target.value})}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="modal-telefone" className="text-xs font-bold text-gray-500 uppercase px-1">Telefone</label>
          <input 
            id="modal-telefone"
            required
            type="tel" 
            placeholder="(00) 00000-0000"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#f58220] outline-none transition-all"
            value={formData.telefone}
            onChange={(e) => setFormData({...formData, telefone: e.target.value})}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="modal-necessidade" className="text-xs font-bold text-gray-500 uppercase px-1">Tipo de necessidade</label>
          <select 
            id="modal-necessidade"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#f58220] outline-none transition-all bg-white"
            value={formData.necessidade}
            onChange={(e) => setFormData({...formData, necessidade: e.target.value})}
          >
            <option value="">Selecione uma necessidade</option>
            {Object.values(NecessidadeType).map(v => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>

        <Button variant="primary" fullWidth type="submit" className="mt-6">
          Continuar no WhatsApp
        </Button>

        <p className="text-center text-[11px] text-gray-400 mt-4 leading-snug">
          Atendimento técnico. Uso exclusivamente industrial.<br />
          Ao continuar, você concorda com nossos termos de privacidade.
        </p>
      </form>
    </Modal>
  );
};

export default ContactModal;