import { motion } from "motion/react";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface CalmButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
}

export function CalmButton({ 
  children, 
  variant = "primary", 
  fullWidth = false,
  className = "",
  ...props 
}: CalmButtonProps) {
  const baseStyles = "px-8 py-4 rounded-[16px] transition-all duration-300 ease-in-out border";
  
  const variants = {
    primary: "bg-[var(--ai-flow-text)] text-[var(--ai-flow-bg)] border-[var(--ai-flow-text)] hover:bg-[var(--ai-flow-olive)] hover:border-[var(--ai-flow-olive)]",
    secondary: "bg-[var(--ai-flow-sand)] text-[var(--ai-flow-text)] border-[var(--ai-flow-border)] hover:bg-[var(--ai-flow-olive)] hover:text-[var(--ai-flow-bg)]",
    ghost: "bg-transparent text-[var(--ai-flow-text-secondary)] border-transparent hover:text-[var(--ai-flow-text)]"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
