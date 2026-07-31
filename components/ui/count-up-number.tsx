"use client";

import { useEffect, useRef, useState } from "react";

type CountUpNumberProps = {
  to: number;
  suffix?: string;
  durationMs?: number;
  className?: string;
};

export function CountUpNumber({
  to,
  suffix = "",
  durationMs = 1100,
  className = "",
}: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) {
      return;
    }

    const start = performance.now();
    let animationFrame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(to * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [durationMs, started, to]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString("vi-VN")}
      {suffix}
    </span>
  );
}
