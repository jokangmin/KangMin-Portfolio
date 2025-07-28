import React, { useState } from 'react';
import { motion } from 'framer-motion';
import bannerImage from '../../assets/banner2.webp';
import bannerMyImage from '../../assets/my1-remove.webp';
import bannerMyImage2 from '../../assets/my2-remove.webp';

interface IntroBannerProps {
    animationStarted: boolean;
    setAnimationStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

const IntroBanner: React.FC<IntroBannerProps> = ({ animationStarted, setAnimationStarted }) => {
  const [isBannerMyImageHovered, setIsBannerMyImageHovered] = useState<boolean>(false);

  const handleScreenClick = () => {
    if (!animationStarted) {
      setAnimationStarted(true);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 w-full h-screen overflow-hidden bg-[url(../../assets/banner2.webp)] text-slate-950 flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1, pointerEvents: 'auto' }}
      animate={animationStarted ? { opacity: 0, pointerEvents: 'none' } : { opacity: 1, pointerEvents: 'auto' }}
      transition={{ duration: 1.5, ease: 'easeInOut', delay: 1.5 }}
      onClick={handleScreenClick}
    >
      <motion.img
        src={bannerImage}
        alt="banner Image"
        className="w-full h-full object-cover rounded-xl fixed -translate-x-1/2"
        initial={{ x: '0%' }}
        animate={animationStarted ? { x: '-200%' } : { x: '0%' }}
        transition={{ duration: 3, ease: 'easeInOut' }}
      />

      <motion.p
        className="text-5xl font-bold text-slate-950 fixed left-[41%] top-1/3"
        initial={{ x: '0%', opacity: 1 }}
        animate={animationStarted ? { x: '-400%', opacity: 0 } : { x: '0%', opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        KangMin Portfolio
      </motion.p>

      <motion.img
        src={isBannerMyImageHovered ? bannerMyImage2 : bannerMyImage}
        alt="banner my Image"
        className="w-64 object-cover rounded-xl fixed left-[45%] top-[45%] -translate-x-1/2 -translate-y-1/2"
        initial={{ x: '0%' }}
        animate={animationStarted ? { x: '-400%', opacity: 0 } : { x: '0%', opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        onMouseEnter={() => setIsBannerMyImageHovered(true)}
        onMouseLeave={() => setIsBannerMyImageHovered(false)}
      />

      {/* "Click Screen */}
      <motion.p
        className="text-3xl font-semibold text-myPalette-500 fixed left-[47%] bottom-[25%] transform -translate-x-1/2"
        initial={{ opacity: 1 }}
        animate={animationStarted ? { x: '-400%', opacity: 0 } : { y: [-7, 7, -7] }}
        transition={
          animationStarted
            ? { duration: 1.3, ease: 'easeInOut' }
            : {
                duration: 3,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
              }
        }
      >
        Click Screen 🖤
      </motion.p>
    </motion.div>
  );
};

export default IntroBanner;