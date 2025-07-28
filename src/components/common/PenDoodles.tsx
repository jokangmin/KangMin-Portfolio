import React from 'react';
import { motion } from 'framer-motion';
import pen1 from '../../assets/pen1-Photoroom.webp';
import pen2 from '../../assets/pen2-Photoroom.webp';
import pen3 from '../../assets/pen3-Photoroom.webp';
import pen4 from '../../assets/pen4-Photoroom.webp';
import pen5 from '../../assets/pen5-Photoroom.webp';
import pen6 from '../../assets/pen6-Photoroom.webp';

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
        className="fixed w-[52%] h-auto z-40 left-[9%] top-[10%]"
        initial={{ opacity: 0 }}
        animate={animationStarted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
      <motion.img
        src={pen3}
        alt="Pen doodle 3"
        className="fixed w-[9%] h-auto z-40 right-[2%] bottom-[38%]"
        initial={{ opacity: 0 }}
        animate={animationStarted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
      <motion.img
        src={pen4}
        alt="Pen doodle 4"
        className="fixed w-[21%] h-auto z-40 right-[20%] bottom-[7%]"
        initial={{ opacity: 0 }}
        animate={animationStarted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
      <motion.img
        src={pen5}
        alt="Pen doodle 5"
        className="fixed w-[15%] h-auto z-40 left-[39%] bottom-[2%]"
        initial={{ opacity: 0 }}
        animate={animationStarted ? { opacity: [1, 1, 1], y: [-5, 5, -5] } : { opacity: 0 }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          repeat: animationStarted ? Infinity : 0
        }}
      />
      <motion.img
        src={pen6}
        alt="Pen doodle 6"
        className="fixed w-[12%] h-auto z-40 left-[4%] bottom-[3%]"
        initial={{ opacity: 0 }}
        animate={animationStarted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
    </>
  );
};

export default PenDoodles;