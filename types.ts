
export interface FormLead {
  nome: string;
  telefone: string;
  email?: string;
  empresa?: string;
  necessidade: string;
}

export enum NecessidadeType {
  EMERGENCIA = 'Emergência ou falha no chiller',
  TEMPORARIA = 'Locação temporária',
  PROJETO = 'Projeto específico',
  AVALIANDO = 'Ainda estou avaliando'
}
