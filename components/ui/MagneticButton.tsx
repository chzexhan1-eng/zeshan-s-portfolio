"use client";

import { useRef, useCallback } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export default function MagneticButton({
  children,
  strength = 0.3,
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (el) {
          el.style.transform = `translate(${dx}px, ${dy}px)`;
        }
      });
    },
    [strength]
  );

  const onMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    if (ref.current) {
      ref.current.style.transform = "translate(0px, 0px)";
      ref.current.style.transition = "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      setTimeout(() => {
        if (ref.current) ref.current.style.transition = "";
      }, 500);
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`inline-flex ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
