import { motion, AnimatePresence } from "motion/react";
import { CalmButton } from "./CalmButton";
import { Compass } from "lucide-react";

interface ExplainModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export function ExplainModal({ isOpen, onClose, title, content }: ExplainModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-white/80 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-6">
            <motion.div
              className="bg-white border border-[var(--ai-flow-border)] rounded-[16px] p-12 max-w-[480px] w-full shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="flex justify-center mb-6"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Compass className="w-8 h-8 text-[var(--ai-flow-olive)]" strokeWidth={1.5} />
              </motion.div>
              
              <h3 className="text-[var(--ai-flow-text)] mb-6 text-center">
                {title}
              </h3>
              
              <p className="text-[var(--ai-flow-text)] mb-8 leading-[1.7]">
                {content}
              </p>
              
              <CalmButton 
                variant="primary" 
                fullWidth 
                onClick={onClose}
              >
                Got it → Next insight
              </CalmButton>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
