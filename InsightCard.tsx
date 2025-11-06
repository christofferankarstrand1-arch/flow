import { motion } from "motion/react";

interface InsightCardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

export function InsightCard({ title, description, onClick }: InsightCardProps) {
  return (
    <motion.div
      className="bg-white border border-[var(--ai-flow-border)] rounded-[12px] p-6 cursor-pointer hover:border-[var(--ai-flow-olive)]/50 transition-all duration-300"
      onClick={onClick}
      whileHover={{ 
        x: 4,
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.05)"
      }}
    >
      <p className="text-[var(--ai-flow-text)] mb-2">{title}</p>
      <p className="text-[var(--ai-flow-text-secondary)]">{description}</p>
    </motion.div>
  );
}
