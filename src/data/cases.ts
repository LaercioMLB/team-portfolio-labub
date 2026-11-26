// src/data/cases.ts
// Formato Desafio / Solução / Resultado (home v2). O Resultado diz o que foi entregue,
// sem métrica inventada. Textos em rascunho: ver DESIGN.md › Open questions.
export type Case = {
  name: string
  client: string
  initials: string
  sector: string
  challenge: string
  solution: string
  result: string
  stack: string[]
  logo: string
  // Ícone quadrado da marca (favicon/símbolo oficial), mostrado no lugar das iniciais.
  icon: string
  url: string
}

export const cases: Case[] = [
  {
    name: 'SOS CONSTRUIR',
    client: 'SOS Construir',
    initials: 'SC',
    sector: 'Construção civil · Web, backend e DevOps',
    challenge: 'Vender material e serviço de obra num lugar só, com fornecedores diferentes.',
    solution: 'Plataforma de integração entre lojas, prestadores e clientes, com painel para a operação.',
    result: 'Sistema no ar na AWS, com deploy automatizado.',
    stack: ['AWS', 'Node.js', 'UX'],
    logo: '/cases/sosconstruir.svg',
    icon: '/cases/icons/sosconstruir.svg',
    url: 'https://www.sosconstruir.com.br/',
  },
  {
    name: 'FixeCRM',
    client: 'FixeCRM',
    initials: 'FX',
    sector: 'Fidelidade de pontos · Mobile, web e DevOps',
    challenge: 'Um programa de pontos que as empresas conectam aos sistemas que já usam.',
    solution: 'App, painel administrativo e integrações com sistemas de terceiros, em Kubernetes na AWS.',
    result: 'Plataforma no ar, com segurança revisada e deploy contínuo.',
    stack: ['Node.js', 'AWS', 'k8s'],
    logo: '/cases/fixe-crm.png',
    icon: '/cases/icons/fixecrm.png',
    url: 'https://fixecrm.com/',
  },
  {
    name: 'Organizadin',
    client: 'Organizadin',
    initials: 'OR',
    sector: 'Fintech · Mobile, web e DevOps',
    challenge: 'Juntar as finanças de pessoa física e jurídica num app só.',
    solution: 'App com Open Finance e integração com bancos e meios de pagamento.',
    result: 'App publicado, rodando em AWS e Azure com deploy contínuo.',
    stack: ['React Native', 'AWS', 'Azure'],
    logo: '/cases/organizadin.svg',
    icon: '/cases/icons/organizadin.svg',
    url: 'https://organizadin.com/',
  },
]
