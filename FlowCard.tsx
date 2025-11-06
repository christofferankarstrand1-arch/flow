import { motion } from "motion/react";
import { ReactNode } from "react";

interface FlowCardProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function FlowCard({ children, onClick, className = "" }: FlowCardProps) {
  return (
    <motion.div
      className={`bg-white border border-[var(--ai-flow-border)] rounded-[16px] p-12 cursor-pointer ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      whileHover={{ 
        y: -2,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)"
      }}
    >
      {children}
    </motion.div>
  );
}
