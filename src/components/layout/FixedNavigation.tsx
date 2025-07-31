import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

interface FixedNavigationProps {
  animationStarted: boolean;
  scrollToAboutMe: () => void;
  scrollToEducation: () => void;
  scrollToProject: () => void;
}

const FixedNavigation: React.FC<FixedNavigationProps> = ({
  animationStarted,
  scrollToAboutMe,
  scrollToEducation,
  scrollToProject,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleClick = (action: () => void) => {
    action();
    setMenuOpen(false);
  };

  return (
    <motion.div
      className="fixed top-5 left-5 z-50"
      initial={{ opacity: 0, x: -100 }}
      animate={animationStarted ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ delay: 8, duration: 0.8 }}
    >
      {/* Desktop Navigation (md 이상) */}
      <div className="hidden md:flex flex-row gap-5 px-6 py-2 backdrop-blur-sm rounded-lg shadow-lg bg-white/80">
        <button
          onClick={scrollToAboutMe}
          className="text-lg font-semibold text-myPalette-700 px-3 py-1 rounded-md hover:bg-myPalette-100 transition-colors duration-200"
        >
          About me
        </button>
        <button
          onClick={scrollToEducation}
          className="text-lg font-semibold text-myPalette-700 px-3 py-1 rounded-md hover:bg-myPalette-100 transition-colors duration-200"
        >
          Education & License
        </button>
        <button
          onClick={scrollToProject}
          className="text-lg font-semibold text-myPalette-700 px-3 py-1 rounded-md hover:bg-myPalette-100 transition-colors duration-200"
        >
          Project
        </button>
      </div>

      {/* Mobile Hamburger (md 미만) */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 bg-white/80 rounded-md shadow-md backdrop-blur-sm"
        >
          {menuOpen ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>

        {/* 드롭다운 메뉴 */}
        {menuOpen && (
          <div className="mt-2 flex flex-col gap-2 bg-white/90 p-3 rounded-md shadow-lg backdrop-blur-sm">
            <button
              onClick={() => handleClick(scrollToAboutMe)}
              className="text-base text-myPalette-700 font-semibold hover:bg-myPalette-100 rounded px-3 py-2"
            >
              About me
            </button>
            <button
              onClick={() => handleClick(scrollToEducation)}
              className="text-base text-myPalette-700 font-semibold hover:bg-myPalette-100 rounded px-3 py-2"
            >
              Education & License
            </button>
            <button
              onClick={() => handleClick(scrollToProject)}
              className="text-base text-myPalette-700 font-semibold hover:bg-myPalette-100 rounded px-3 py-2"
            >
              Project
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FixedNavigation;
