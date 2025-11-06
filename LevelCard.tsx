import { motion } from "motion/react";
import { ReactNode } from "react";

interface LevelCardProps {
  icon: ReactNode;
  title: string;
  onClick: () => void;
  isSelected: boolean;
}

export function LevelCard({ icon, title, onClick, isSelected }: LevelCardProps) {
  return (
    <motion.div
      className={`bg-white border-2 rounded-[16px] p-8 cursor-pointer transition-all duration-300 ${
        isSelected 
          ? "border-[var(--ai-flow-olive)] bg-[var(--ai-flow-mint)]/20" 
          : "border-[var(--ai-flow-border)] hover:border-[var(--ai-flow-olive)]/50"
      }`}
      onClick={onClick}
      whileHover={{ 
        y: -4,
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)"
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="text-[var(--ai-flow-olive)]">
          {icon}
        </div>
        <p className="text-[var(--ai-flow-text)]">{title}</p>
      </div>
    </motion.div>
  );
}
