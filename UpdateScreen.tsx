import { motion } from "motion/react";
import { InsightCard } from "../InsightCard";
import { CalmButton } from "../CalmButton";
import { Sparkles } from "lucide-react";

interface UpdateScreenProps {
  onExplain: () => void;
  onBackToFlow: () => void;
}

const updates = [
  {
    title: "Claude 3.7 launched — here's what matters.",
    description: "Improved reasoning and longer context windows."
  },
  {
    title: "OpenAI added Memory Mode.",
    description: "ChatGPT now remembers conversations across sessions."
  },
  {
    title: "Best new Cursor trick this week.",
    description: "Auto-complete just got way smarter with context."
  }
];

export function UpdateScreen({ onExplain, onBackToFlow }: UpdateScreenProps) {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-[640px] w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center"
        >
          <Sparkles className="w-10 h-10 text-[var(--ai-flow-olive)] mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="text-[var(--ai-flow-text)] mb-4">
            You're up to date.
          </h2>
          <p className="text-[var(--ai-flow-text-secondary)]">
            Here's what changed since your last visit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="space-y-4 mb-12"
        >
          {updates.map((update, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
            >
              <InsightCard
                title={update.title}
                description={update.description}
                onClick={onExplain}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="space-y-6"
        >
          <CalmButton 
            variant="primary" 
            fullWidth
            onClick={onExplain}
          >
            Explain all in 60 seconds
          </CalmButton>
          
          <p className="text-center text-[var(--ai-flow-text-secondary)]">
            You've got this.
          </p>

          <div className="text-center pt-4">
            <button 
              onClick={onBackToFlow}
              className="text-[var(--ai-flow-text-secondary)] hover:text-[var(--ai-flow-text)] transition-colors duration-300"
            >
              ← Back to flow
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
