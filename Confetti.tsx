import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface ConfettiDot {
  id: number;
  x: number;
  y: number;
  color: string;
}

export function Confetti() {
  const [dots, setDots] = useState<ConfettiDot[]>([]);

  useEffect(() => {
    const colors = ["var(--ai-flow-olive)", "var(--ai-flow-sand)", "var(--ai-flow-mint)"];
    const newDots: ConfettiDot[] = [];
    
    for (let i = 0; i < 20; i++) {
      newDots.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -20,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    setDots(newDots);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute w-3 h-3 rounded-full"
          style={{ 
            left: dot.x, 
            top: dot.y,
            backgroundColor: dot.color
          }}
          animate={{
            y: window.innerHeight + 50,
            x: dot.x + (Math.random() - 0.5) * 200,
            opacity: [1, 1, 0],
            scale: [1, 1.2, 0.8]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            ease: "easeIn"
          }}
        />
      ))}
    </div>
  );
}
