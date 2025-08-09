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
    <motion.nav
      className="fixed top-5 left-5 z-50"
      initial={{ opacity: 0, x: -100 }}
      animate={animationStarted ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ delay: 8, duration: 0.8 }}
    >
      {/* Desktop Navigation (md 이상) */}
      <div className="hidden md:flex flex-row gap-5 px-6 py-2 backdrop-blur-sm rounded-lg shadow-lg">
        <button
          onClick={scrollToAboutMe}
          className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-blue-100 rounded-md group"
        >
          <span
            className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-300 rounded group-hover:-mr-4 group-hover:-mt-4"
          >
            <span
              className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
            ></span>
          </span>
          <span
            className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-300 rounded group-hover:-ml-4 group-hover:-mb-4"
          >
            <span
              className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
            ></span>
          </span>
          <span
            className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-blue-400 rounded-md group-hover:translate-x-0"
          ></span>
          <span
            className="relative w-full text-left text-slate-950 transition-colors duration-200 ease-in-out group-hover:text-slate-950"
            >About me</span>
        </button>
        <button
          onClick={scrollToEducation}
          className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-yellow-100 rounded-md group"
        >
          <span
            className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-yellow-300 rounded group-hover:-mr-4 group-hover:-mt-4"
          >
            <span
              className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
            ></span>
          </span>
          <span
            className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-yellow-300 rounded group-hover:-ml-4 group-hover:-mb-4"
          >
            <span
              className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
            ></span>
          </span>
          <span
            className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-yellow-300 rounded-md group-hover:translate-x-0"
          ></span>
          <span
            className="relative w-full text-left text-slate-950 transition-colors duration-200 ease-in-out group-hover:text-slate-950"
            >Education & License</span>
        </button>
        <button
          onClick={scrollToProject}
          className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-myPalette-200 rounded-md group"
        >
          <span
            className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4"
          >
            <span
              className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
            ></span>
          </span>
          <span
            className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-ml-4 group-hover:-mb-4"
          >
            <span
              className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
            ></span>
          </span>
          <span
            className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-myPalette-100 rounded-md group-hover:translate-x-0"
          ></span>
          <span
            className="relative w-full text-left text-slate-950 transition-colors duration-200 ease-in-out group-hover:text-slate-950"
            >Project</span>
        </button>
      </div>

      {/* Mobile Hamburger (md 미만) */}
      <div className="md:hidden">
        <button
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={toggleMenu}
          className="p-2 bg-white/80 rounded-md shadow-md backdrop-blur-sm"
        >
          {menuOpen ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>

        {/* 드롭다운 메뉴 */}
        {menuOpen && (
          <div id="mobile-navigation" role="menu" aria-label="모바일 네비게이션 메뉴">
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
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default FixedNavigation;
