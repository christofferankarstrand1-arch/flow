import { motion } from "motion/react";
import { FlowCard } from "../FlowCard";
import { Brain, Zap, Code2, Sparkles } from "lucide-react";

interface ExploreScreenProps {
  onBackToFlow: () => void;
  onExplain: () => void;
}

const topics = [
  {
    icon: Brain,
    title: "Understanding LLMs",
    description: "Show me how they work"
  },
  {
    icon: Zap,
    title: "Prompt Engineering",
    description: "Show me how to use this"
  },
  {
    icon: Code2,
    title: "AI for Coding",
    description: "Show me what's possible"
  },
  {
    icon: Sparkles,
    title: "Latest Breakthroughs",
    description: "Show me what's new"
  }
];

export function ExploreScreen({ onBackToFlow, onExplain }: ExploreScreenProps) {
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
          <h2 className="text-[var(--ai-flow-text)] mb-4">
            Discover more
          </h2>
          <p className="text-[var(--ai-flow-text-secondary)]">
            Explore topics at your own pace.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              >
                <FlowCard onClick={onExplain} className="p-8">
                  <div className="flex flex-col items-center text-center gap-4">
                    <Icon className="w-10 h-10 text-[var(--ai-flow-olive)]" strokeWidth={1.5} />
                    <div>
                      <p className="text-[var(--ai-flow-text)] mb-2">
                        {topic.title}
                      </p>
                      <p className="text-[var(--ai-flow-text-secondary)]">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </FlowCard>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="text-center"
        >
          <button 
            onClick={onBackToFlow}
            className="text-[var(--ai-flow-text-secondary)] hover:text-[var(--ai-flow-text)] transition-colors duration-300"
          >
            ← Back to flow
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
