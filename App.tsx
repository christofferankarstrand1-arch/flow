import { useState } from "react";
import { EntryScreen } from "./components/screens/EntryScreen";
import { FlowScreen } from "./components/screens/FlowScreen";
import { UpdateScreen } from "./components/screens/UpdateScreen";
import { ExploreScreen } from "./components/screens/ExploreScreen";
import { ExplainModal } from "./components/ExplainModal";
import { Confetti } from "./components/Confetti";
import { Menu } from "lucide-react";

type Screen = "entry" | "flow" | "update" | "explore";

const explanations = [
  {
    title: "GPT-5 in plain English",
    content: "GPT-5 represents a leap in AI's ability to reason through complex problems. Unlike previous versions, it can break down multi-step tasks, verify its own work, and explain its thinking. Think of it as moving from a quick answer machine to a thoughtful collaborator."
  },
  {
    title: "Here's what you need to know",
    content: "The latest updates focus on making AI more reliable and context-aware. Models now remember your preferences across sessions, understand nuance better, and can handle much longer conversations without losing track. It's all about making AI feel less like a tool and more like a natural extension of your workflow."
  },
  {
    title: "Understanding AI updates",
    content: "AI tools are evolving to be more intuitive and responsive. Recent improvements focus on understanding context better, providing more accurate responses, and integrating seamlessly into your daily work. The goal is simple: help you accomplish more with less friction."
  }
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("entry");
  const [modalOpen, setModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [explanationIndex, setExplanationIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStart = () => {
    setCurrentScreen("flow");
    setProgress(33);
  };

  const handleExplain = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    if (currentScreen === "flow" && progress < 100) {
      setProgress(prev => Math.min(prev + 33, 100));
      if (progress >= 67) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
    }
    setExplanationIndex((prev) => (prev + 1) % explanations.length);
  };

  const handleNext = () => {
    setProgress(prev => Math.min(prev + 33, 100));
    setExplanationIndex((prev) => (prev + 1) % explanations.length);
  };

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[var(--ai-flow-bg)] relative">
      {/* Navigation Menu */}
      {currentScreen !== "entry" && (
        <div className="fixed top-6 right-6 z-30">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-3 rounded-[12px] bg-white border border-[var(--ai-flow-border)] hover:border-[var(--ai-flow-olive)] transition-all duration-300 shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
          >
            <Menu className="w-5 h-5 text-[var(--ai-flow-text)]" strokeWidth={1.5} />
          </button>
          
          {menuOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white border border-[var(--ai-flow-border)] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden min-w-[180px]">
              <button
                onClick={() => navigateTo("flow")}
                className="w-full px-6 py-3 text-left text-[var(--ai-flow-text)] hover:bg-[var(--ai-flow-sand)] transition-colors duration-200"
              >
                Flow
              </button>
              <button
                onClick={() => navigateTo("update")}
                className="w-full px-6 py-3 text-left text-[var(--ai-flow-text)] hover:bg-[var(--ai-flow-sand)] transition-colors duration-200"
              >
                Updates
              </button>
              <button
                onClick={() => navigateTo("explore")}
                className="w-full px-6 py-3 text-left text-[var(--ai-flow-text)] hover:bg-[var(--ai-flow-sand)] transition-colors duration-200"
              >
                Explore
              </button>
            </div>
          )}
        </div>
      )}

      {/* Screens */}
      {currentScreen === "entry" && <EntryScreen onStart={handleStart} />}
      
      {currentScreen === "flow" && (
        <FlowScreen 
          onExplain={handleExplain} 
          onNext={handleNext}
          progress={progress}
        />
      )}
      
      {currentScreen === "update" && (
        <UpdateScreen 
          onExplain={handleExplain}
          onBackToFlow={() => navigateTo("flow")}
        />
      )}
      
      {currentScreen === "explore" && (
        <ExploreScreen 
          onBackToFlow={() => navigateTo("flow")}
          onExplain={handleExplain}
        />
      )}

      {/* Modal */}
      <ExplainModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title={explanations[explanationIndex].title}
        content={explanations[explanationIndex].content}
      />

      {/* Confetti */}
      {showConfetti && <Confetti />}
    </div>
  );
}
