'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const BRAND = 'TRI THỨC VIỆT';
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export function ScrambleBrand() {
  const pathname = usePathname();
  const [displayText, setDisplayText] = useState(BRAND);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(BRAND);
      return;
    }

    const characters = Array.from(BRAND);
    const startedAt = performance.now();
    const duration = 420;
    let animationFrameId = 0;

    const animate = (timestamp: number) => {
      const progress = Math.min(1, (timestamp - startedAt) / duration);
      const settledCharacters = Math.floor(progress * characters.length);
      const nextText = characters.map((character, index) => {
        if (character === ' ' || index < settledCharacters) return character;
        return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }).join('');

      setDisplayText(nextText);
      if (progress < 1) animationFrameId = requestAnimationFrame(animate);
      else setDisplayText(BRAND);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [pathname]);

  return (
    <span aria-label={BRAND} className="inline-block min-w-[8.6rem]">
      <span aria-hidden="true">{displayText}</span>
    </span>
  );
}
