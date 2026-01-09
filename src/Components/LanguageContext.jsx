import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
    pt: {
        about: "Sobre",
        projects: "Projetos",
        exp: "Experiência",
        objective: "Atuar na área de Tecnologia da Informação ou atendimento técnico, contribuindo com meus conhecimentos em informática, suporte técnico e atendimento ao cliente.",
        education: "Tecnologia da Informação - 5º Período ",
        infortel_role: "Operador de Rede de Teleprocessamento",
        dipcell_role: "Assistente Técnico e Vendedor",
        exp_desc_infortel: "Atuação com redes, monitoramento e suporte técnico.",
        exp_desc_dipcell: "Atendimento ao cliente e suporte técnico em informática."
    },
    es: {
        about: "Sobre mí",
        projects: "Proyectos",
        exp: "Experiencia",
        objective: "Actuar en el área de TI o soporte técnico, contribuyendo con mis conocimientos en informática y atención al cliente.",
        education: "Tecnología de la Información - 5º Semestre ",
        infortel_role: "Operador de Red de Teleprocesamiento",
        dipcell_role: "Asistente Técnico y Vendedor",
        exp_desc_infortel: "Actuación con redes, monitoreo y soporte técnico.",
        exp_desc_dipcell: "Atención al cliente y soporte técnico en informática."
    },
    en: {
        about: "About",
        projects: "Projects",
        exp: "Experience",
        objective: "Work in Information Technology or technical support, contributing with my knowledge in IT and customer service.",
        education: "Information Technology - 5th Semester ",
        infortel_role: "Teleprocessing Network Operator",
        dipcell_role: "Technical Assistant and Salesperson",
        exp_desc_infortel: "Network monitoring and technical support.",
        exp_desc_dipcell: "Customer service and IT technical support."
    }
};

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('pt');
    return (
        <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);