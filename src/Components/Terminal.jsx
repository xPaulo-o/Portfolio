import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Terminal.css';

const Terminal = ({ onComplete }) => {
  const [displayText, setDisplayText] = useState([]);
  const [isExiting, setIsExiting] = useState(false);

  const sequence = [
    { text: 'npm install portfolio', type: 'command' },
    { text: '> Resolving dependencies...', type: 'output' },
    { text: '+ Added 42 packages in 2.4s', type: 'output' },
    { text: 'npm run build', type: 'command' }
  ];

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let currentLinesContent = [];

    function type() {
      if (currentLine < sequence.length) {
        const line = sequence[currentLine];
        
        if (line.type === 'output') {
          currentLinesContent.push(line);
          setDisplayText([...currentLinesContent]);
          currentLine++;
          setTimeout(type, 400);
        } else {
          if (currentChar === 0) {
            currentLinesContent.push({ ...line, text: '' });
          }

          if (currentChar < line.text.length) {
            currentLinesContent[currentLine].text += line.text[currentChar];
            setDisplayText([...currentLinesContent]);
            currentChar++;
            setTimeout(type, 50); // Velocidade da digitação
          } else {
            currentLine++;
            currentChar = 0;
            setTimeout(type, 600); // Pausa após terminar a linha
          }
        }
      } else {
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onComplete, 800); // Tempo para a animação de saída sumir
        }, 1000);
      }
    }

    type();
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div 
          className="terminal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="terminal-window"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="close"></span>
                <span className="minimize"></span>
                <span className="maximize"></span>
              </div>
              <div className="terminal-title">Paulo@portfolio ~</div>
            </div>
            <div className="terminal-body">
              {displayText.map((line, index) => (
                <div key={index} className={`line ${line.type}`}>
                  {line.type === 'command' && <span className="prompt">$ </span>}
                  {line.text}
                </div>
              ))}
              <span className="cursor">_</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Terminal;