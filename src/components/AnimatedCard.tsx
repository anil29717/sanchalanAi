import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export function AnimatedCard({ 
  children, 
  className = '', 
  delay = 0,
  hover = true 
}: AnimatedCardProps) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const hoverVariants = hover ? {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  } : {};

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={hoverVariants}
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}