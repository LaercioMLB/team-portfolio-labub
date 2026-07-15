// src/data/team.ts
export type TeamMember = {
  area: string;
  lead: string;
  photo: string; // path to image in public/
  linkedinUrl: string;
  portfolioUrl?: string;
  tagline: string;
  tags: string[];
};

export const team: TeamMember[] = [
  {
    area: "DevOps | Cloud Infrastructure",
    lead: "Laercio Bubiak",
    photo: "/team/laercio-novo.png",
    linkedinUrl: "https://www.linkedin.com/in/laercio-bubiak/",
    portfolioUrl: "https://www.laercio.me/",
    tagline: "Deixo a conta da Cloud mais barata e automatizo deploys pra ninguém dormir com medo de subir errado.",
    tags: ["Kubernetes", "Docker", "Terraform", "AWS", "CI/CD", "Serverless"," Cloud Security"," Cloud Architecture", "Cloud Cost Optimization"],
  },
  {
    area: "Frontend Engineer",
    lead: "Dionei Bianchati",
    photo: "/team/dionei-novo-1x1.png",
    linkedinUrl: "https://www.linkedin.com/in/dionbiancha",
    portfolioUrl: "https://dionei.com/",
    tagline: "Deixa qualquer interface rápida mesmo em conexão fraca.",
    tags: ["React", "Next.js", "React Native"],
  },

  {
    area: "Fullstack Engineer",
    lead: "Vinicios Engelage",
    photo: "/team/vinicios-novo.png",
    linkedinUrl: "https://www.linkedin.com/in/viniengelage/",
    portfolioUrl: "https://www.viniengelage.com/",
    tagline: "Resolvo bugs para não me estressar e me estresso corrigindo bugs.",
    tags: ["Javascript", "Web", "Mobile", "React", "NextJS", "React Native"," Docker"," Expo"],
  },
    {
    area: "Fullstack Engineer",
    lead: "Riad Younes",
    photo: "/team/riad-novo.png",
    linkedinUrl: "",
    portfolioUrl: "",
    tagline: "Transformando problemas em soluções modernas",
    tags: ["Automation AI", "Type Script", "Node", "React","Integration API"],
  },
      {
    area: "DevOps | Security Engineer",
    lead: "Donizeti Junior",
    photo: "/team/doni-novo.png",
    linkedinUrl: "https://www.linkedin.com/in/donizetijunior/",
    portfolioUrl: "",
    tagline: "Automatizamos com inteligencia do básico ao avançado",
    tags: ["Docker", "AWS", "Security", "SOC","Pentesting","Cloud Security"],
  },

  {
    area: "Backend Engineer",
    lead: "Gregory Xavier Fleury Torres",
    photo: "/team/gregory-novo.png",
    linkedinUrl: "",
    portfolioUrl: "",
    tagline: "Transformando ideias em algoritmos.",
    tags: ["MySQL", "Postgresql", "Fast API", "Java", "ORM", "C#","Docker","Integração"],
  },

    {
    area: "Systems Architect | SRE",
    lead: "Willian Zibikoski",
    photo: "/team/willian-novo-1x1.png",
    linkedinUrl: "",
    portfolioUrl: "",
    tagline: "Projetando arquiteturas tão resilientes que resistem até a usuário tentando derrubar o banco de dados na sexta-feira às 17:59.",
    tags: ["Docker ", "Terraform ", "Ansible ", "Azure ", "Python ", "SQL ","NoSQL","Cloud Architeture","API Security"],
  },
];
