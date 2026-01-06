import { useState, useEffect } from 'react';

export const useTypewriter = (texts: string[], speed: number = 50, delay: number = 2000) => {
    const [displayText, setDisplayText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentFullText = texts[currentTextIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentFullText.substring(0, displayText.length + 1));
                if (displayText.length === currentFullText.length) {
                    setTimeout(() => setIsDeleting(true), delay);
                }
            } else {
                setDisplayText(currentFullText.substring(0, displayText.length - 1));
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentTextIndex, texts, speed, delay]);

    return displayText;
};
