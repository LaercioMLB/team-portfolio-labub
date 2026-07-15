// src/data/cases.ts
export type Case = {
  name: string
  tag: string
  description: string
  stack: string[]
  theme: 'blue' | 'dark' | 'green' | 'greenLight'
  logo: string
  url: string
}

export const cases: Case[] = [
  {
    name: 'SOS CONSTRUIR',
    tag: 'Construção Civil · Frontend + Backend + DevOps + AWS',
    description: 'Sistema de integração para vendas de materiais de construção e serviços de construção civil.',
    stack: ['AWS', 'Node.js', 'DevOps', 'UI/UX'],
    theme: 'greenLight',
    logo: '/cases/sosconstruir.svg',
    url: 'https://www.sosconstruir.com.br/',
  },
  {
    name: 'FixeCRM',
    tag: 'Fidelidade de pontos · Mobile + Web + DevOps + AWS',
    description: 'Sistema de fidelidade de pontos para empresas,com painel administrativo e integração com sistemas de terceiros.',
    stack: ['Node.js', 'Cibersegurança', 'AWS', 'k8s', 'DevOps'],
    theme: 'dark',
    logo: '/cases/fixe-crm.png',
    url: 'https://fixecrm.com/',
  },
  {
    name: 'Organizadin',
    tag: 'Fintech · Mobile + Web + DevOps + AWS',
    description: 'App de gestão financeira para pessoas físicas e jurídicas, com integração com OpenFinance, bancos e sistemas de pagamento.',
    stack: ['ReactNative', 'AWS/Azure', 'CI/CD', 'DevOps', 'UI/UX'],
    theme: 'greenLight',
    logo: '/cases/organizadin.svg',
    url: 'https://organizadin.com/',
  },
]
