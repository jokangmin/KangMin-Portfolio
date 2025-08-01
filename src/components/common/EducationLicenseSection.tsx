// EducationLicenseSection.tsx

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { sections } from '../../data/sectionsData.tsx';

const EducationLicenseSection: React.FC = React.memo(() => {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newIndex = (activeIndex + newDirection + sections.length) % sections.length;
    setActiveIndex([newIndex, newDirection]);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500, opacity: 0, scale: 0.8
    }),
    center: {
      zIndex: 1, x: 0, opacity: 1, scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0, x: direction < 0 ? 500 : -500, opacity: 0, scale: 0.8
    }),
  };

  return (
    <section
      id="education-section"
      className="relative z-40 h-screen flex items-center justify-center py-10 px-4 font-doodle bg-myDoodlePalette-bg"
    >
      <div className="relative z-10 w-[90%] md:w-[80%] h-[85%] max-w-5xl mx-auto flex items-center justify-center">
        <div className="absolute h-full w-full transform rounded-2xl bg-myDoodlePalette-card border-2 border-myDoodlePalette-border -rotate-6 scale-95 transition-transform duration-300"></div>

        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            className="absolute p-6 sm:p-8 w-full h-full bg-myDoodlePalette-card rounded-2xl border-2 border-myDoodlePalette-border shadow-doodle
                       flex flex-col items-center text-center overflow-y-auto"
          >
            <div className="text-myDoodlePalette-text w-full">
              {sections[activeIndex].content} 
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* 네비게이션 버튼 부분은 그대로 유지 */}
        <button
          onClick={() => paginate(-1)}
          className="absolute top-1/2 -left-4 md:-left-12 z-20 -translate-y-1/2 rounded-full bg-myDoodlePalette-card border-2 border-myDoodlePalette-border p-2 shadow-doodle transition-transform hover:scale-110 active:scale-95"
        >
          <svg className="w-6 h-6 text-myDoodlePalette-text" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4C14.2816 7.38206 12.0385 10.3398 9.99999 12C12.0385 13.6602 14.2816 16.618 16 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          onClick={() => paginate(1)}
          className="absolute top-1/2 -right-4 md:-right-12 z-20 -translate-y-1/2 rounded-full bg-myDoodlePalette-card border-2 border-myDoodlePalette-border p-2 shadow-doodle transition-transform hover:scale-110 active:scale-95"
        >
          <svg className="w-6 h-6 text-myDoodlePalette-text" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 20C9.71844 16.618 11.9615 13.6602 14 12C11.9615 10.3398 9.71844 7.38206 8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

      </div>
    </section>
  );
});

export default EducationLicenseSection;