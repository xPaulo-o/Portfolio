import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
    pt: {
        about: "Sobre",
        projects: "Projetos",
        exp: "Experiência",
        objective: "Sou um profissional da área de Tecnologia da Informação, com experiência em suporte técnico, redes, monitoramento de sistemas e manutenção de celulares. Atuo diretamente na identificação e solução de problemas técnicos, sempre com foco em eficiência, organização e qualidade no atendimento.Tenho facilidade em lidar com o público, oferecendo atendimento claro, objetivo e humanizado, buscando sempre a melhor solução para cada necessidade. Possuo conhecimentos em hardware, software, sistemas operacionais e dispositivos móveis, além de interesse constante em aprender novas tecnologias e evoluir profissionalmente.Sou uma pessoa comprometida, proativa e focada em resultados, que acredita que a tecnologia deve simplificar processos e melhorar a experiência das pessoas. Este portfólio representa minha trajetória, minhas habilidades e minha dedicação à área de TI.",
        education: "Educação",
        infortel_role: "Operador de Rede de Teleprocessamento",
        dipcell_role: "Assistente Técnico e Vendedor",
        exp_desc_infortel: "Atuação com redes, monitoramento, suporte técnico e manutenção de celulares.",
        exp_desc_dipcell: "Atendimento ao cliente e suporte técnico em informática e celulares.",
        graduation: "Graduação em Tecnologia da Informação",
        university: "Faculdades e Colégio Aphonsiano, Trindade - GO",
        graduation2: "Titulo Tecnico em Reparo de Celulares",
        university2: "Vision Crursos, Goiânia - GO"
    },
    es: {
        about: "Sobre mí",
        projects: "Proyectos",
        exp: "Experiencia",
        objective: "Soy un profesional del área de Tecnología de la Información, con experiencia en soporte técnico, redes, monitoreo de sistemas y reparación de teléfonos móviles. Trabajo en la identificación y resolución de problemas técnicos, siempre enfocado en la eficiencia, la organización y la calidad del servicio.Tengo facilidad para el trato con clientes, ofreciendo una atención clara, objetiva y profesional, buscando siempre la mejor solución para cada situación. Cuento con conocimientos en hardware, software, sistemas operativos y dispositivos móviles, además de un interés constante en aprender nuevas tecnologías y crecer profesionalmente.Soy una persona comprometida, proactiva y orientada a resultados, que cree que la tecnología debe simplificar procesos y mejorar la experiencia de las personas. Este portafolio refleja mi trayectoria profesional, mis habilidades y mi pasión por el área de TI.",
        education: "Educación",
        infortel_role: "Operador de Red de Teleprocesamiento",
        dipcell_role: "Asistente Técnico y Vendedor",
        exp_desc_infortel: "Actuación con redes, monitoreo, soporte técnico y reparo de celulares.",
        exp_desc_dipcell: "Atención al cliente y soporte técnico en informática y celulares.",
        graduation: "Titulo en Tecnología de la Información",
        university: "Faculdades e Colégio Aphonsiano, Trindade - GO",
        graduation2: "Titulo Técnico en Reparo de Celulares",
        university2: "Vision Crursos, Goiânia - GO"
    },
    en: {
        about: "About",
        projects: "Projects",
        exp: "Experience",
        objective: "I am an Information Technology professional with experience in technical support, networks, system monitoring, and mobile phone repair. I work directly with troubleshooting and problem-solving, always focusing on efficiency, organization, and high-quality service.I have strong communication skills and provide clear, objective, and customer-focused support, always aiming to deliver the best solution for each situation. I have knowledge of hardware, software, operating systems, and mobile devices, along with a constant interest in learning new technologies and improving my skills.I am a committed, proactive, and results-driven professional who believes technology should simplify processes and enhance people’s experiences. This portfolio represents my journey, skills, and dedication to the IT field.",
        education: "education",
        infortel_role: "Teleprocessing Network Operator",
        dipcell_role: "Technical Assistant and Salesperson",
        exp_desc_infortel: "Work with networks, monitoring, technical support, and mobile phone maintenance.",
        exp_desc_dipcell: "Customer service and technical support in IT and mobile devices.",
        graduation: "Bachelor’s Degree in Information Technology",
        university: "Faculdades e Colégio Aphonsiano, Trindade - GO",
        graduation2: "Technical Degree in Mobile Phone Repair",
        university2: "Vision Crursos, Goiânia - GO"
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