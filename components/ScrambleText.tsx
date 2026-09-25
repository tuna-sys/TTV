'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

type ScrambleTextProps = {
  text: string;
  className?: string;
  duration?: number;
};

export function ScrambleText({ text, className = '', duration = 420 }: ScrambleTextProps) {
  const pathname = usePathname();
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setDisplayText(text);
      setIsScrambling(false);
      return;
    }

    const characters = Array.from(text);
    const startedAt = performance.now();
    let animationFrameId = 0;
    setIsScrambling(true);

    const animate = (timestamp: number) => {
      const progress = Math.min(1, (timestamp - startedAt) / duration);
      const settledCharacters = Math.floor(progress * characters.length);
      const nextText = characters.map((character, index) => {
        if (/\s|[–—&]/u.test(character) || index < settledCharacters) return character;
        return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }).join('');

      setDisplayText(nextText);
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayText(text);
        setIsScrambling(false);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [duration, pathname, text]);

  return (
    <span className={`relative block ${className}`} data-scramble-text={text} data-scrambling={isScrambling}>
      <span className={isScrambling ? 'text-transparent' : undefined}>{text}</span>
      {isScrambling && (
        <span className="absolute inset-0" aria-hidden="true">{displayText}</span>
      )}
    </span>
  );
}
