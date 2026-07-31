import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:scale-105 hover:bg-blue-600 focus-visible:ring-primary",
  secondary:
    "bg-muted text-foreground hover:scale-105 hover:bg-gray-200 focus-visible:ring-foreground",
  outline:
    "border-4 border-primary bg-transparent text-primary hover:scale-105 hover:bg-primary hover:text-white focus-visible:ring-primary",
};

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex h-14 items-center justify-center rounded-md px-6 text-sm font-semibold uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        variantClasses[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
