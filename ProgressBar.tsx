import { motion } from "motion/react";

interface ProgressBarProps {
  progress: number; // 0-100
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full h-[2px] bg-[var(--ai-flow-sand)]">
      <motion.div
        className="h-full bg-[var(--ai-flow-olive)]"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </div>
  );
}
