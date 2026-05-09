import { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
}

const TypingEffect = ({ text, speed = 150, delay = 1000 }: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, delay]);

  return (
    <span className="text-az-orange font-bold">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingEffect;
