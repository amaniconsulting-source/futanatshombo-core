// Shared by the contact page (server) and the form (client). Keep it out of the
// 'use client' file: a server component can't read values exported from one.
export const TOPICS = [
  { value: 'liste-attente', label: 'Être prévenu du lancement' },
  { value: 'marchand', label: 'Devenir marchand Futa' },
  { value: 'support', label: 'Question ou support' },
  { value: 'partenariat', label: 'Partenariat (banque, école, facturier)' },
] as const;

export type Topic = (typeof TOPICS)[number]['value'];
