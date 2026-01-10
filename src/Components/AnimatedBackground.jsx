import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";

export default function AnimatedBackground({ active }) {
    const { accent } = useLanguage();
    const [pos, setPos] = useState({ x: 50, y: 50 });
    const [glitch, setGlitch] = useState(false);


    useEffect(() => {
        const move = (e) => {
            if (window.innerWidth < 768) return;
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            setPos({ x, y });
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    useEffect(() => {
        let timeout;
        const onScroll = () => {
            setGlitch(true);
            clearTimeout(timeout);
            timeout = setTimeout(() => setGlitch(false), 120);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div
            className={`animated-bg ${glitch ? "glitch" : ""}`}
            style={{
                "--x": `${pos.x}%`,
                "--y": `${pos.y}%`,
                "--accent": accent,
                opacity: active ? 1 : 0,
            }}
        />
    );
}
