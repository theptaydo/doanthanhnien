"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type Direction = "left" | "right" | "up" | "down";

type MotionRevealProps = {
  children: ReactNode;
  direction?: Direction;
  delayMs?: number;
  className?: string;
};

const offsetByDirection: Record<Direction, string> = {
  left: "translateX(-32px)",
  right: "translateX(32px)",
  up: "translateY(32px)",
  down: "translateY(-32px)",
};

export function MotionReveal({
  children,
  direction = "up",
  delayMs = 0,
  className = "",
}: MotionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translate(0, 0)" : offsetByDirection[direction],
        transitionProperty: "opacity, transform",
        transitionDuration: "700ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delayMs}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
