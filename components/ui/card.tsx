import type { HTMLAttributes, ReactNode } from "react";

type CardTone = "white" | "blue" | "green" | "amber" | "muted";

type CardProps = {
  tone?: CardTone;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const toneClasses: Record<CardTone, string> = {
  white: "bg-white text-foreground",
  blue: "bg-blue-50 text-foreground",
  green: "bg-emerald-50 text-foreground",
  amber: "bg-amber-50 text-foreground",
  muted: "bg-muted text-foreground",
};

export function Card({ tone = "white", children, className = "", ...props }: CardProps) {
  return (
    <div
      className={[
        "group rounded-lg p-6 transition-all duration-200 hover:scale-[1.02]",
        toneClasses[tone],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
