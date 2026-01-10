import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {


    pt: {
        presentation: "Olá, eu sou:",
        follow: "Siga-me nas redes sociais:",
        resume: "Profissional de Tecnologia da Informação, com foco em desenvolvimento, suporte técnico, redes, manutenção de hardware e segurança da informação, sempre buscando soluções eficientes e aprendizado contínuo.",
        download_cv: "Baixar Currículo",
        about: "Sobre",
        home: "Início",
        skills: "Habilidades",
        technical_skills: "Habilidades Técnicas",
        projects: "Projetos",
        exp: "Experiência",
        objective: "Sou um profissional da área de Tecnologia da Informação, com experiência em suporte técnico, redes, monitoramento de sistemas e manutenção de celulares. Atuo diretamente na identificação e solução de problemas técnicos, sempre com foco em eficiência, organização e qualidade no atendimento.Tenho facilidade em lidar com o público, oferecendo atendimento claro, objetivo e humanizado, buscando sempre a melhor solução para cada necessidade. Possuo conhecimentos em hardware, software, sistemas operacionais e dispositivos móveis, além de interesse constante em aprender novas tecnologias e evoluir profissionalmente.Sou uma pessoa comprometida, proativa e focada em resultados, que acredita que a tecnologia deve simplificar processos e melhorar a experiência das pessoas. Este portfólio representa minha trajetória, minhas habilidades e minha dedicação à área de TI.",
        education: "Educação",
        infortel_role: "Operador de Rede de Teleprocessamento",
        dipcell_role: "Assistente Técnico e Vendedor",
        gelnex_role: "Assistente Administrativo",
        exp_desc_infortel: "Atuação com redes, monitoramento, suporte técnico e manutenção de celulares.",
        exp_desc_dipcell: "Atendimento ao cliente e suporte técnico em informática e celulares.",
        exp_desc_gelnex: "Rotinas administrativas, organização de documentos e apoio operacional.",
        graduation: "Graduação em Tecnologia da Informação",
        university: "Faculdades e Colégio Aphonsiano, Trindade - GO",
        graduation2: "Titulo Tecnico em Reparo de Celulares",
        university2: "Vision Crursos, Goiânia - GO",
        terminal_contact: "Iniciar conversa via WhatsApp...",
        terminal_email: "Enviar um Email",
        contact: "Contato",
        projects_ls: "ls projects/",
        projects_open: "abrir projeto",
        education_cmd: "cat education.txt"
    },
    es: {
        presentation: "Hola, soy:",
        follow: "Sígueme en las redes sociales:",
        resume: "Profesional de Tecnología de la Información, enfocado en desarrollo, soporte técnico, redes, mantenimiento de hardware y seguridad de la información, siempre buscando soluciones eficientes y aprendizaje continuo.",
        download_cv: "Descargar Currículo",
        about: "Sobre mí",
        home: "Inicio",
        skills: "Habilidades",
        technical_skills: "Habilidades Técnicas",
        projects: "Proyectos",
        exp: "Experiencia",
        objective: "Soy un profesional del área de Tecnología de la Información, con experiencia en soporte técnico, redes, monitoreo de sistemas y reparación de teléfonos móviles. Trabajo en la identificación y resolución de problemas técnicos, siempre enfocado en la eficiencia, la organización y la calidad del servicio.Tengo facilidad para el trato con clientes, ofreciendo una atención clara, objetiva y profesional, buscando siempre la mejor solución para cada situación. Cuento con conocimientos en hardware, software, sistemas operativos y dispositivos móviles, además de un interés constante en aprender nuevas tecnologías y crecer profesionalmente.Soy una persona comprometida, proactiva y orientada a resultados, que cree que la tecnología debe simplificar procesos y mejorar la experiencia de las personas. Este portafolio refleja mi trayectoria profesional, mis habilidades y mi pasión por el área de TI.",
        education: "Educación",
        infortel_role: "Operador de Red de Teleprocesamiento",
        dipcell_role: "Asistente Técnico y Vendedor",
        gelnex_role: "Asistente Administrativo",
        exp_desc_infortel: "Actuación con redes, monitoreo, soporte técnico y reparo de celulares.",
        exp_desc_dipcell: "Atención al cliente y soporte técnico en informática y celulares.",
        exp_desc_gelnex: "Rutinas administrativas, organización de documentos y apoyo operativo.",
        graduation: "Titulo en Tecnología de la Información",
        university: "Faculdades e Colégio Aphonsiano, Trindade - GO",
        graduation2: "Titulo Técnico en Reparo de Celulares",
        university2: "Vision Crursos, Goiânia - GO",
        terminal_contact: "Iniciar conversación vía WhatsApp...",
        terminal_email: "Enviar un Correo Electrónico",
        contact: "Contacto",
        projects_ls: "ls projects/",
        projects_open: "abrir proyecto",
        education_cmd: "cat education.txt"
    },
    en: {
        presentation: "Hello, I am:",
        follow: "Follow me on social media:",
        resume: "Information Technology professional, focused on development, technical support, networks, hardware maintenance, and information security, always seeking efficient solutions and continuous learning.",
        download_cv: "Download CV",
        about: "About",
        home: "Home",
        skills: "Skills",
        technical_skills: "Technical Skills",
        projects: "Projects",
        exp: "Experience",
        objective: "I am an Information Technology professional with experience in technical support, networks, system monitoring, and mobile phone repair. I work directly with troubleshooting and problem-solving, always focusing on efficiency, organization, and high-quality service.I have strong communication skills and provide clear, objective, and customer-focused support, always aiming to deliver the best solution for each situation. I have knowledge of hardware, software, operating systems, and mobile devices, along with a constant interest in learning new technologies and improving my skills.I am a committed, proactive, and results-driven professional who believes technology should simplify processes and enhance people’s experiences. This portfolio represents my journey, skills, and dedication to the IT field.",
        education: "education",
        infortel_role: "Teleprocessing Network Operator",
        dipcell_role: "Technical Assistant and Salesperson",
        gelnex_role: "Administrative Assistant",
        exp_desc_infortel: "Work with networks, monitoring, technical support, and mobile phone maintenance.",
        exp_desc_dipcell: "Customer service and technical support in IT and mobile devices.",
        exp_desc_gelnex: "Administrative routines, document organization, and operational support.",
        graduation: "Bachelor’s Degree in Information Technology",
        university: "Faculdades e Colégio Aphonsiano, Trindade - GO",
        graduation2: "Technical Degree in Mobile Phone Repair",
        university2: "Vision Crursos, Goiânia - GO",
        terminal_contact: "Start conversation via WhatsApp...",
        terminal_email: "Send an Email",
        contact: "Contact",
        projects_ls: "ls projects/",
        projects_open: "open project",
        education_cmd: "cat education.txt"
    }
};

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('pt');

    const colors = {
        pt: "#4af626",
        en: "#38bdf8",
        es: "#facc15",
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], colors, accent: colors[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);