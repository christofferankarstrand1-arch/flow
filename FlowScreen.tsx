import { motion } from "motion/react";
import { ProgressBar } from "../ProgressBar";
import { FlowCard } from "../FlowCard";
import { CalmButton } from "../CalmButton";
import { ArrowRight } from "lucide-react";

interface FlowScreenProps {
  onExplain: () => void;
  onNext: () => void;
  progress: number;
}

const insights = [
  {
    title: "What GPT-5 really changed",
    subtitle: "And why everyone keeps mentioning it."
  },
  {
    title: "Why AI can't replace creativity",
    subtitle: "The one thing models still can't do."
  },
  {
    title: "Understanding context windows",
    subtitle: "The invisible limit behind every chat."
  }
];

export function FlowScreen({ onExplain, onNext, progress }: FlowScreenProps) {
  const currentInsight = insights[Math.floor(progress / 34) % insights.length];

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <ProgressBar progress={progress} />
      
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-[640px] w-full">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12 text-center"
          >
            <p className="text-[var(--ai-flow-text-secondary)] mb-2">
              Today's 30-second insight
            </p>
          </motion.div>

          <FlowCard>
            <div className="text-center space-y-6">
              <h2 className="text-[var(--ai-flow-text)]">
                {currentInsight.title}
              </h2>
              <p className="text-[var(--ai-flow-text-secondary)]">
                {currentInsight.subtitle}
              </p>
              <div className="pt-4">
                <CalmButton 
                  variant="primary" 
                  fullWidth
                  onClick={onExplain}
                >
                  Explain it in plain English
                </CalmButton>
              </div>
            </div>
          </FlowCard>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <button 
              onClick={onNext}
              className="text-[var(--ai-flow-text-secondary)] hover:text-[var(--ai-flow-text)] transition-colors duration-300 inline-flex items-center gap-2"
            >
              Show another topic
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
