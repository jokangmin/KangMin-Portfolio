import React from 'react';
import { motion } from 'framer-motion';

interface FixedNavigationProps{
    animationStarted: boolean;
    scrollToAboutMe: () => void;
    scrollToEducation: () => void;
    scrollToProject: () => void
}

const FixedNavigation: React.FC<FixedNavigationProps> = ({ animationStarted, scrollToAboutMe, scrollToEducation, scrollToProject }) => {
  return (
    <motion.div
      className="fixed top-5 right-52 z-50 flex flex-row gap-7 p-1 px-7 backdrop-blur-sm rounded-lg shadow-lg"
      initial={{ opacity: 0, x: -100 }}
      animate={animationStarted ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ delay: 8, duration: 0.8 }}
    >
      <button
        onClick={scrollToAboutMe}
        className="text-lg font-semibold text-myPalette-700 px-4 py-2 rounded-md hover:bg-myPalette-100 transition-colors duration-200"
      >
        About me
      </button>
      <button
        onClick={scrollToEducation}
        className="text-lg font-semibold text-myPalette-700 px-4 py-2 rounded-md hover:bg-myPalette-100 transition-colors duration-200"
      >
        Education & License
      </button>
      <button
        onClick={scrollToProject}
        className="text-lg font-semibold text-myPalette-700 px-4 py-2 rounded-md hover:bg-myPalette-100 transition-colors duration-200"
      >
        Project
      </button>
    </motion.div>
  );
};

export default FixedNavigation;