import { useEffect, useState } from "react";

export function TypingText({
  text,                 // Modo 1: Texto único
  words,                // Modo 2: Lista de palavras para alternar
  speed = 30,           // Velocidade de digitação
  deleteSpeed = 30,     // Velocidade de apagar (apenas modo words)
  delay = 1500,         // Tempo de espera antes de apagar
  loop = true,          // Se deve repetir o ciclo de palavras
  cursor = false,       // Mostrar cursor piscante (pode ser bool ou string ex: "_")
  start = true,         // Gatilho para iniciar a animação
  as: Tag = "span",     // Qual tag HTML renderizar (padrão span)
  className = ""        // Classes CSS adicionais
}) {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (start) setHasStarted(true);
  }, [start]);

  useEffect(() => {
    if (!hasStarted) return;

    // --- MODO 1: Texto Único (Digita e para) ---
    if (text !== undefined) {
      if (displayed.length < text.length) {
        const timeout = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      }
      return;
    }

    // --- MODO 2: Array de Palavras (Digita, espera, apaga, troca) ---
    if (words && words.length > 0) {
      const currentWord = words[wordIndex];
      const isComplete = !isDeleting && displayed === currentWord;
      const isCleared = isDeleting && displayed === "";

      if (isComplete) {
        if (loop || wordIndex < words.length - 1) {
          const timeout = setTimeout(() => setIsDeleting(true), delay);
          return () => clearTimeout(timeout);
        }
      } else if (isCleared) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        const timeout = setTimeout(() => {
          setDisplayed((prev) =>
            isDeleting
              ? prev.slice(0, -1)
              : currentWord.slice(0, prev.length + 1)
          );
        }, isDeleting ? deleteSpeed : speed);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayed, isDeleting, wordIndex, hasStarted, text, words, speed, deleteSpeed, delay, loop]);

  return (
    <Tag className={className}>
      {displayed}
      {cursor && (
        <span className="animate-pulse text-current ml-0.5 font-normal">
          {typeof cursor === "string" ? cursor : "|"}
        </span>
      )}
    </Tag>
  );
}
