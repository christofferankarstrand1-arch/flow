import { useState } from "react";
import { motion } from "motion/react";
import { Compass, Sunrise, MessageCircle, Wrench } from "lucide-react";
import { LevelCard } from "../LevelCard";
import { CalmButton } from "../CalmButton";

interface EntryScreenProps {
  onStart: () => void;
}

export function EntryScreen({ onStart }: EntryScreenProps) {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[640px] w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mb-12"
        >
          <Compass className="w-12 h-12 text-[var(--ai-flow-olive)] mx-auto mb-6" strokeWidth={1.5} />
          <div className="flex items-center justify-center gap-2 mb-2">
            <h1 className="text-[var(--ai-flow-text)]">AI Flow</h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-[var(--ai-flow-text)] mb-4">
            Let's start where you are.
          </h2>
          <p className="text-[var(--ai-flow-text-secondary)]">
            Pick the option that feels closest to you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <LevelCard
            icon={<Sunrise className="w-12 h-12" strokeWidth={1.5} />}
            title="I'm just curious"
            onClick={() => setSelectedLevel(1)}
            isSelected={selectedLevel === 1}
          />
          <LevelCard
            icon={<MessageCircle className="w-12 h-12" strokeWidth={1.5} />}
            title="I use ChatGPT sometimes"
            onClick={() => setSelectedLevel(2)}
            isSelected={selectedLevel === 2}
          />
          <LevelCard
            icon={<Wrench className="w-12 h-12" strokeWidth={1.5} />}
            title="I build with AI tools"
            onClick={() => setSelectedLevel(3)}
            isSelected={selectedLevel === 3}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: selectedLevel ? 1 : 0.4 }}
          transition={{ duration: 0.3 }}
        >
          <CalmButton
            variant="primary"
            onClick={onStart}
            disabled={!selectedLevel}
            className="disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Begin my flow
          </CalmButton>
        </motion.div>
      </div>
    </motion.div>
  );
}
