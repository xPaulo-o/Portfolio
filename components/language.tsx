"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Language = "pt" | "en" | "es";

type Translation = {
  languageSwitcher: {
    label: string;
    change: string;
  };
  nav: {
    about: string;
    projects: string;
    skills: string;
    experience: string;
    education: string;
    certificates: string;
    contact: string;
  };
  hero: {
    role: string;
    description: string;
    viewProjects: string;
    contactMe: string;
    downloadResume: string;
    modalTitle: string;
    modalDescription: string;
    resume: {
      pt: string;
      en: string;
      es: string;
    };
    close: string;
  };
  projects: {
    title: string;
    repoLabel: string;
    ariaRepo: string;
    ariaDetails: string;
    items: Array<{
      title: string;
      tech: string;
      description: string;
      tags: string[];
      url: string;
    }>;
  };
  skills: {
    title: string;
    languages: Array<{
      name: string;
      level: string;
      percent: number;
      accent: string;
      cert: string;
    }>;
  };
  experience: {
    title: string;
    linkLabel: string;
    items: Array<{
      company: string;
      role: string;
      summary: string;
      period: string;
      location: string;
      tags: string[];
      url: string;
    }>;
  };
  education: {
    title: string;
    linkLabel: string;
    items: Array<{
      institution: string;
      course: string;
      summary: string;
      period: string;
      location: string;
      tags: string[];
      url: string;
    }>;
  };
  certificates: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    description: string;
    button: string;
    modalTitle: string;
    modalDescription: string;
    email: string;
    whatsapp: string;
    close: string;
  };
  footer: {
    backToTop: string;
    watermark: string;
  };
};

const translations: Record<Language, Translation> = {
  pt: {
    languageSwitcher: {
      label: "Idioma",
      change: "Alterar idioma",
    },
    nav: {
      about: "Sobre",
      projects: "Projetos",
      skills: "Habilidades",
      experience: "Experiencias",
      education: "Educacao",
      certificates: "Certificados",
      contact: "Contato",
    },
    hero: {
      role: "Desenvolvedor Full Stack",
      description:
        "Eu crio experiencias web interativas, unindo codigo limpo, performance e motion bem pensado.",
      viewProjects: "Ver Projetos",
      contactMe: "Fale Comigo",
      downloadResume: "Baixar Curriculo",
      modalTitle: "Escolha o idioma",
      modalDescription: "Selecione o curriculo para baixar.",
      resume: {
        pt: "Portugues (BR)",
        en: "English (EN)",
        es: "Espanol (ES)",
      },
      close: "Fechar",
    },
    projects: {
      title: "Projetos em Destaque",
      repoLabel: "Ver repo",
      ariaRepo: "Abrir repositorio de {title}",
      ariaDetails: "Abrir detalhes de {title}",
      items: [
        {
          title: "Typing Hero",
          tech: "Python - Pygame",
          description:
            "Um jogo de digitacao ritmica inspirado em Guitar Hero, com palavras caindo no BPM da musica.",
          tags: ["Loop de jogo", "Sincronia de audio", "UI/UX"],
          url: "https://github.com/xPaulo-o/typing_hero",
        },
        {
          title: "Sistema Dipcell",
          tech: "Java - Banco de Dados",
          description:
            "Sistema de OS para controle de ordens de servico e fluxo de atendimento.",
          tags: ["CRUD", "App desktop", "SQL"],
          url: "https://github.com/xPaulo-o/Sistema_Dipcell",
        },
      ],
    },
    skills: {
      title: "Habilidades",
      languages: [
        {
          name: "Portugues",
          level: "Fluente",
          percent: 100,
          accent: "bg-violet-400",
          cert: "Cert: Nativo",
        },
        {
          name: "Espanol",
          level: "Fluente",
          percent: 100,
          accent: "bg-violet-400",
          cert: "Cert: Nativo",
        },
        {
          name: "English",
          level: "Intermediario",
          percent: 65,
          accent: "bg-violet-400",
          cert: "Cert: Intermediario (estudos)",
        },
      ],
    },
    experience: {
      title: "Experiencias",
      linkLabel: "Ver empresa ->",
      items: [
        {
          company: "Gelnex LTDA",
          role: "Assistente Administrativo",
          summary:
            "Rotinas administrativas, organizacao de documentos e apoio operacional.",
          period: "2022 - 2023",
          location: "Nazario, GO",
          tags: ["Processos", "Organizacao", "Suporte"],
          url: "https://www.darlingii.com/pt-BR/rousselot/brands/our-gelatins",
        },
        {
          company: "Infortel Solucoes em Informatica",
          role: "Operador de rede de teleprocessamento",
          summary:
            "Atuacao com redes, monitoramento, suporte tecnico e manutencao de celulares.",
          period: "2024 - 2024",
          location: "Nazario, GO",
          tags: ["Redes", "Monitoramento", "Suporte"],
          url: "https://www.instagram.com/infortel.informatica/",
        },
        {
          company: "Dipcell",
          role: "Assistente Tecnico e Vendedor",
          summary:
            "Atendimento ao cliente e suporte tecnico em informatica e celulares.",
          period: "2025 - Atualmente",
          location: "Nazario, GO",
          tags: ["Atendimento", "Hardware", "Vendas"],
          url: "https://www.instagram.com/dip_cell_nzr_/",
        },
      ],
    },
    education: {
      title: "Educacao",
      linkLabel: "Ver instituicao ->",
      items: [
        {
          institution: "Aphonsiano",
          course: "Graduacao em Tecnologia da Informacao",
          summary:
            "Gerenciamento de redes, desenvolvimento web e seguranca da informacao.",
          period: "2023 - 2026",
          location: "Trindade, Go",
          tags: ["Redes", "Web", "Seguranca"],
          url: "https://aphonsiano.edu.br",
        },
        {
          institution: "Vision Cursos",
          course: "Curso tecnico em reparo de celulares",
          summary: "Reparo de placas e manutencao de celular.",
          period: "2024 - 2024",
          location: "Goiania, Go",
          tags: ["Micro-solda", "Hardware", "Diagnostico"],
          url: "https://instituicao.com",
        },
      ],
    },
    certificates: {
      title: "Certificados",
      description: "Toque para ver a lista completa de certificados.",
    },
    contact: {
      title: "Vamos Trabalhar Juntos",
      description:
        "Tem um projeto em mente? Estou aberto a colaboracoes e oportunidades freelance.",
      button: "Diga Ola",
      modalTitle: "Contato",
      modalDescription: "Escolha como voce quer falar comigo.",
      email: "Email",
      whatsapp: "WhatsApp",
      close: "Fechar",
    },
    footer: {
      backToTop: "Voltar ao topo",
      watermark: "(c) 2026 PAULO AUGUSTO - ALL SYSTEMS NOMINAL",
    },
  },
  en: {
    languageSwitcher: {
      label: "Language",
      change: "Change language",
    },
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      certificates: "Certificates",
      contact: "Contact",
    },
    hero: {
      role: "Full Stack Developer",
      description:
        "I build interactive web experiences, combining clean code, performance and thoughtful motion.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      downloadResume: "Download Resume",
      modalTitle: "Choose the language",
      modalDescription: "Select the resume to download.",
      resume: {
        pt: "Portuguese (BR)",
        en: "English (EN)",
        es: "Spanish (ES)",
      },
      close: "Close",
    },
    projects: {
      title: "Selected Projects",
      repoLabel: "View repo",
      ariaRepo: "Open {title} repository",
      ariaDetails: "Open {title} details",
      items: [
        {
          title: "Typing Hero",
          tech: "Python - Pygame",
          description:
            "A rhythm typing game inspired by Guitar Hero, with words falling to the music BPM.",
          tags: ["Game loop", "Audio sync", "UI/UX"],
          url: "https://github.com/xPaulo-o/typing_hero",
        },
        {
          title: "Sistema Dipcell",
          tech: "Java - Database",
          description:
            "Service order system to manage tickets and streamline the service flow.",
          tags: ["CRUD", "Desktop app", "SQL"],
          url: "https://github.com/xPaulo-o/Sistema_Dipcell",
        },
      ],
    },
    skills: {
      title: "Skills",
      languages: [
        {
          name: "Portuguese",
          level: "Fluent",
          percent: 100,
          accent: "bg-violet-400",
          cert: "Cert: Native",
        },
        {
          name: "Spanish",
          level: "Fluent",
          percent: 100,
          accent: "bg-violet-400",
          cert: "Cert: Native",
        },
        {
          name: "English",
          level: "Intermediate",
          percent: 65,
          accent: "bg-violet-400",
          cert: "Cert: Intermediate (studying)",
        },
      ],
    },
    experience: {
      title: "Experience",
      linkLabel: "View company ->",
      items: [
        {
          company: "Gelnex LTDA",
          role: "Administrative Assistant",
          summary:
            "Administrative routines, document organization, and operational support.",
          period: "2022 - 2023",
          location: "Nazario, GO",
          tags: ["Processes", "Organization", "Support"],
          url: "https://www.darlingii.com/pt-BR/rousselot/brands/our-gelatins",
        },
        {
          company: "Infortel Solucoes em Informatica",
          role: "Network Operations Operator",
          summary:
            "Worked with networks, monitoring, technical support, and phone maintenance.",
          period: "2024 - 2024",
          location: "Nazario, GO",
          tags: ["Networks", "Monitoring", "Support"],
          url: "https://www.instagram.com/infortel.informatica/",
        },
        {
          company: "Dipcell",
          role: "Technical Assistant and Sales",
          summary:
            "Customer service and technical support for computers and phones.",
          period: "2025 - Present",
          location: "Nazario, GO",
          tags: ["Customer service", "Hardware", "Sales"],
          url: "https://www.instagram.com/dip_cell_nzr_/",
        },
      ],
    },
    education: {
      title: "Education",
      linkLabel: "View institution ->",
      items: [
        {
          institution: "Aphonsiano",
          course: "Bachelor in Information Technology",
          summary:
            "Network management, web development, and information security.",
          period: "2023 - 2026",
          location: "Trindade, GO",
          tags: ["Networks", "Web", "Security"],
          url: "https://aphonsiano.edu.br",
        },
        {
          institution: "Vision Cursos",
          course: "Technical course in phone repair",
          summary: "Board repair and phone maintenance.",
          period: "2024 - 2024",
          location: "Goiania, GO",
          tags: ["Microsoldering", "Hardware", "Diagnostics"],
          url: "https://instituicao.com",
        },
      ],
    },
    certificates: {
      title: "Certificates",
      description: "Tap to see the full list of certificates.",
    },
    contact: {
      title: "Lets Work Together",
      description:
        "Have a project in mind? I am open to collaborations and freelance opportunities.",
      button: "Say Hello",
      modalTitle: "Contact",
      modalDescription: "Choose how you want to reach me.",
      email: "Email",
      whatsapp: "WhatsApp",
      close: "Close",
    },
    footer: {
      backToTop: "Back to top",
      watermark: "(c) 2026 PAULO AUGUSTO - ALL SYSTEMS NOMINAL",
    },
  },
  es: {
    languageSwitcher: {
      label: "Idioma",
      change: "Cambiar idioma",
    },
    nav: {
      about: "Sobre mi",
      projects: "Proyectos",
      skills: "Habilidades",
      experience: "Experiencia",
      education: "Educacion",
      certificates: "Certificados",
      contact: "Contacto",
    },
    hero: {
      role: "Desarrollador Full Stack",
      description:
        "Creo experiencias web interactivas, combinando codigo limpio, rendimiento y motion bien pensado.",
      viewProjects: "Ver Proyectos",
      contactMe: "Contactame",
      downloadResume: "Descargar Curriculum",
      modalTitle: "Elige el idioma",
      modalDescription: "Selecciona el curriculum para descargar.",
      resume: {
        pt: "Portugues (BR)",
        en: "English (EN)",
        es: "Espanol (ES)",
      },
      close: "Cerrar",
    },
    projects: {
      title: "Proyectos Destacados",
      repoLabel: "Ver repositorio",
      ariaRepo: "Abrir repositorio de {title}",
      ariaDetails: "Abrir detalles de {title}",
      items: [
        {
          title: "Typing Hero",
          tech: "Python - Pygame",
          description:
            "Un juego ritmico de mecanografia inspirado en Guitar Hero, con palabras cayendo al BPM de la musica.",
          tags: ["Bucle de juego", "Sincronia de audio", "UI/UX"],
          url: "https://github.com/xPaulo-o/typing_hero",
        },
        {
          title: "Sistema Dipcell",
          tech: "Java - Base de datos",
          description:
            "Sistema de ordenes de servicio para controlar el flujo de atencion.",
          tags: ["CRUD", "App de escritorio", "SQL"],
          url: "https://github.com/xPaulo-o/Sistema_Dipcell",
        },
      ],
    },
    skills: {
      title: "Habilidades",
      languages: [
        {
          name: "Portugues",
          level: "Fluido",
          percent: 100,
          accent: "bg-violet-400",
          cert: "Cert: Nativo",
        },
        {
          name: "Espanol",
          level: "Fluido",
          percent: 100,
          accent: "bg-violet-400",
          cert: "Cert: Nativo",
        },
        {
          name: "Ingles",
          level: "Intermedio",
          percent: 65,
          accent: "bg-violet-400",
          cert: "Cert: Intermedio (en estudio)",
        },
      ],
    },
    experience: {
      title: "Experiencia",
      linkLabel: "Ver empresa ->",
      items: [
        {
          company: "Gelnex LTDA",
          role: "Asistente Administrativo",
          summary:
            "Rutinas administrativas, organizacion de documentos y apoyo operativo.",
          period: "2022 - 2023",
          location: "Nazario, GO",
          tags: ["Procesos", "Organizacion", "Soporte"],
          url: "https://www.darlingii.com/pt-BR/rousselot/brands/our-gelatins",
        },
        {
          company: "Infortel Solucoes em Informatica",
          role: "Operador de red de teleprocesamiento",
          summary:
            "Trabajo con redes, monitoreo, soporte tecnico y mantenimiento de celulares.",
          period: "2024 - 2024",
          location: "Nazario, GO",
          tags: ["Redes", "Monitoreo", "Soporte"],
          url: "https://www.instagram.com/infortel.informatica/",
        },
        {
          company: "Dipcell",
          role: "Asistente Tecnico y Ventas",
          summary:
            "Atencion al cliente y soporte tecnico en informatica y celulares.",
          period: "2025 - Presente",
          location: "Nazario, GO",
          tags: ["Atencion", "Hardware", "Ventas"],
          url: "https://www.instagram.com/dip_cell_nzr_/",
        },
      ],
    },
    education: {
      title: "Educacion",
      linkLabel: "Ver institucion ->",
      items: [
        {
          institution: "Aphonsiano",
          course: "Grado en Tecnologia de la Informacion",
          summary:
            "Gestion de redes, desarrollo web y seguridad de la informacion.",
          period: "2023 - 2026",
          location: "Trindade, GO",
          tags: ["Redes", "Web", "Seguridad"],
          url: "https://aphonsiano.edu.br",
        },
        {
          institution: "Vision Cursos",
          course: "Curso tecnico en reparacion de celulares",
          summary: "Reparacion de placas y mantenimiento de celulares.",
          period: "2024 - 2024",
          location: "Goiania, GO",
          tags: ["Micro-soldadura", "Hardware", "Diagnostico"],
          url: "https://instituicao.com",
        },
      ],
    },
    certificates: {
      title: "Certificados",
      description: "Toca para ver la lista completa de certificados.",
    },
    contact: {
      title: "Trabajemos Juntos",
      description:
        "Tienes un proyecto en mente? Estoy abierto a colaboraciones y oportunidades freelance.",
      button: "Di Hola",
      modalTitle: "Contacto",
      modalDescription: "Elige como quieres hablar conmigo.",
      email: "Email",
      whatsapp: "WhatsApp",
      close: "Cerrar",
    },
    footer: {
      backToTop: "Volver arriba",
      watermark: "(c) 2026 PAULO AUGUSTO - ALL SYSTEMS NOMINAL",
    },
  },
};

const languageLabels: Array<{ id: Language; label: string; short: string }> = [
  { id: "pt", label: "Portugues", short: "PT" },
  { id: "en", label: "English", short: "EN" },
  { id: "es", label: "Espanol", short: "ES" },
];

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
  languages: typeof languageLabels;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "pt";

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "pt" || stored === "en" || stored === "es") {
      return stored;
    }

    return "pt";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    const html = document.documentElement;
    html.lang = language === "pt" ? "pt-BR" : language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: translations[language],
      languages: languageLabels,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider.");
  }
  return context;
}
