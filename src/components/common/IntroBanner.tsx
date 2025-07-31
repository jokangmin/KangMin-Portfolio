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
        className="sm:text-3xl sm:left-[32%] sm:top-[39%] md:left-[37%] md:top-[38%] lg:left-[37%] lg:top-[37%] lg:text-4xl xl:left-[42%] xl:text-4xl 2xl:text-5xl 2xl:left-[41%] 2xl:top-1/3
         text-slate-950 font-bold fixed phone:left-[32%] phone:top-[40%] phone:text-2xl left-[28%] text-2xl top-[35%]"
        initial={{ x: '0%', opacity: 1 }}
        animate={animationStarted ? { x: '-400%', opacity: 0 } : { x: '0%', opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        KangMin Portfolio
      </motion.p>

      <motion.img
        src={isBannerMyImageHovered ? bannerMyImage2 : bannerMyImage}
        alt="banner my Image"
        className="phone:left-[28%] phone:top-[46%] sm:left-[32%] md:left-[37%] lg:left-[40%] xl:left-[43%] 2xl:left-[45%]
        left-[22%] top-[42%] w-64 object-cover rounded-xl fixed -translate-x-1/2 -translate-y-1/2"
        initial={{ x: '0%' }}
        animate={animationStarted ? { x: '-400%', opacity: 0 } : { x: '0%', opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        onMouseEnter={() => setIsBannerMyImageHovered(true)}
        onMouseLeave={() => setIsBannerMyImageHovered(false)}
      />

      {/* "Click Screen */}
      <motion.p
        className="phone:left-[34%] phone:bottom-[25%] sm:left-[37%] sm:bottom-[26%] md:left-[41%] md:bottom-[25%] md:text-2xl lg:left-[43%] lg:bottom-[25%] xl:left-[46%] xl:bottom-[25%] 2xl:left-[47%] 2xl:bottom-[25%]
        left-[31%] bottom-[28%] text-2xl font-semibold text-myPalette-500 fixed transform -translate-x-1/2"
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