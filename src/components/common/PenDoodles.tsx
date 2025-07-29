import React from 'react';
import { motion } from 'framer-motion';
import pen1 from '../../assets/pen1-Photoroom.webp';
import pen2 from '../../assets/pen2-2.webp';
import pen3 from '../../assets/pen_boom.webp';
import pen4 from '../../assets/pen_click.webp';
import pen5 from '../../assets/pen_scroll.webp';

interface PenDoodlesProps {
    animationStarted: boolean;
}

const PenDoodles: React.FC<PenDoodlesProps> = ({ animationStarted }) => {
  return (
    <>
      <motion.img
        src={pen1}
        alt="Pen doodle 1"
        className="fixed w-[24%] h-auto z-40 right-[6%] top-[8%]"
        initial={{ opacity: 0 }}
        animate={animationStarted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
      <motion.img
        src={pen2}
        alt="Pen doodle 2"
        className="fixed w-[52%] h-auto z-40 left-[10%] top-[12%]"
        initial={{ opacity: 0 }}
        animate={animationStarted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
      <motion.img
        src={pen3}
        alt="Pen doodle boom"
        className="fixed w-[9%] h-auto z-40 left-[7%] bottom-[29%]"
        initial={{ opacity: 0 }}
        animate={animationStarted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
      <motion.img
        src={pen4}
        alt="Pen doodle 4"
        className="fixed w-[11%] h-auto z-40 right-[18%] bottom-[14%]"
        initial={{ opacity: 0 }}
        animate={animationStarted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
      <motion.img
        src={pen5}
        alt="Pen doodle 5 - scroll"
        className="fixed w-[15%] h-auto z-40 left-[43%] bottom-[6%]"
        initial={{ opacity: 0 }}
        animate={animationStarted ? { opacity: [1, 1, 1], y: [-5, 5, -5] } : { opacity: 0 }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          repeat: animationStarted ? Infinity : 0
        }}
      />
    </>
  );
};

export default PenDoodles;