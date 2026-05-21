export type Project = {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
  image?: string;
  featured?: boolean;
};

export type Category = {
  id: string;
  label: string;
  icon: string;
  color: string;
  bg: string;
};

export const categories: Category[] = [
  { id: "todos", label: "Todos", icon: "◈", color: "#6c63ff", bg: "#ede9ff" },
  { id: "sites", label: "Desenvolvimento de Sites", icon: "🌐", color: "#2563eb", bg: "#dbeafe" },
  { id: "google", label: "Google & SEO", icon: "🔍", color: "#059669", bg: "#d1fae5" },
  { id: "maps", label: "Google Maps", icon: "📍", color: "#dc2626", bg: "#fee2e2" },
  { id: "gestao", label: "Sistema de Gestão", icon: "📊", color: "#d97706", bg: "#fef3c7" },
  { id: "automacoes", label: "Automações", icon: "⚡", color: "#7c3aed", bg: "#ede9fe" },
];

export type ProjectItem = Project & { category: string };

export const projects: ProjectItem[] = [
  {
    id: "gs-destaque",
    category: "gestao",
    featured: true,
    title: "TenTech Gestão — Assistência Técnica",
    description:
      "Sistema completo de gestão para assistência técnica: controle de ordens de serviço, clientes, estoque, financeiro e relatórios em tempo real.",
    link: "https://assistencia-tecnica-app.vercel.app/",
    tags: ["Next.js", "Dashboard", "Gestão", "React"],
    image: "",
  },
  {
    id: "food-app",
    category: "sites",
    title: "FoodApp — Delivery",
    description: "Plataforma de delivery com busca, filtros por categoria e grid de restaurantes com avaliações.",
    link: "/projetos/food-app",
    tags: ["React", "Next.js", "UI/UX"],
    image: "",
  },
  {
    id: "travel",
    category: "sites",
    title: "Jadoo Travel — Agência de Viagens",
    description: "Landing page completa para agência de viagens com destinos, serviços, depoimentos e newsletter.",
    link: "/projetos/travel",
    tags: ["Next.js", "Landing Page", "Responsivo"],
    image: "",
  },
  {
    id: "burger",
    category: "sites",
    title: "Burger Heaven — Hamburgueria",
    description: "Site dark e moderno para hamburgueria com cardápio visual, marquee animado e CTA impactante.",
    link: "/projetos/burger-heaven",
    tags: ["Next.js", "Dark Theme", "Animação"],
    image: "/preview-burger.png",
  },
  {
    id: "s1",
    category: "sites",
    title: "Site Institucional",
    description: "Landing page moderna e responsiva para empresa do setor varejista.",
    link: "#",
    tags: ["Next.js", "React", "Tailwind"],
    image: "",
  },
  {
    id: "s2",
    category: "sites",
    title: "E-commerce Completo",
    description: "Loja virtual com carrinho, pagamento integrado e painel de controle.",
    link: "#",
    tags: ["Next.js", "Stripe", "MongoDB"],
    image: "",
  },
  {
    id: "s3",
    category: "sites",
    title: "Portfolio Profissional",
    description: "Site portfolio para fotógrafo com galeria dinâmica e formulário de contato.",
    link: "#",
    tags: ["React", "Framer Motion"],
    image: "",
  },
  {
    id: "g1",
    category: "google",
    title: "SEO Local — Clínica",
    description: "Otimização completa do perfil Google para clínica odontológica em SP.",
    link: "#",
    tags: ["SEO", "Google Business"],
    image: "",
  },
  {
    id: "g2",
    category: "google",
    title: "Ranqueamento Orgânico",
    description: "Estratégia de palavras-chave que levou loja ao top 3 do Google em 60 dias.",
    link: "#",
    tags: ["SEO", "Conteúdo"],
    image: "",
  },
  {
    id: "m1",
    category: "maps",
    title: "Cadastro Google Maps",
    description: "Criação e verificação de perfil no Google Maps para restaurante.",
    link: "#",
    tags: ["Google Maps", "Local SEO"],
    image: "",
  },
  {
    id: "m2",
    category: "maps",
    title: "Gestão de Avaliações",
    description: "Estratégia para aumentar avaliações positivas e responder feedbacks.",
    link: "#",
    tags: ["Google Maps", "Reputação"],
    image: "",
  },
  {
    id: "gs1",
    category: "gestao",
    title: "Sistema de Estoque",
    description: "Dashboard completo para controle de estoque com alertas automáticos.",
    link: "#",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "",
  },
  {
    id: "gs2",
    category: "gestao",
    title: "CRM de Vendas",
    description: "Sistema de gestão de clientes e pipeline de vendas para pequenas empresas.",
    link: "#",
    tags: ["CRM", "Dashboard"],
    image: "",
  },
  {
    id: "a1",
    category: "automacoes",
    title: "Bot WhatsApp",
    description: "Atendimento automatizado no WhatsApp com integração ao sistema de agendamentos.",
    link: "#",
    tags: ["WhatsApp API", "Node.js"],
    image: "",
  },
  {
    id: "a2",
    category: "automacoes",
    title: "Automação de Relatórios",
    description: "Geração e envio automático de relatórios semanais por e-mail.",
    link: "#",
    tags: ["Python", "API", "Email"],
    image: "",
  },
  {
    id: "a3",
    category: "automacoes",
    title: "Integração de Sistemas",
    description: "Integração entre ERP, planilhas e plataformas de venda.",
    link: "#",
    tags: ["Zapier", "API", "Integração"],
    image: "",
  },
];
