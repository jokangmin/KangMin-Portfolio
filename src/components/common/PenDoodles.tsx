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
      {/* pen1 */}
      <motion.img
        src={pen1}
        alt="Pen doodle 1"
        className="fixed z-20
          w-[26%] top-[34%] right-[-1%]
          phone:w-[26%] phone:top-[27%] phone:right-[-1%]
          sm:w-[26%] sm:top-[24%] sm:right-[0%]
          md:w-[24%] md:top-[22%] md:right-[0%]
          lg:w-[24%] lg:top-[22%] lg:right-[2.5%]
          xl:w-[24%] xl:top-[18%] xl:right-[4.5%]
          2xl:w-[24%] 2xl:top-[14%] 2xl:right-[8%]
          h-auto"
        initial={{ opacity: 0 }}
        animate={animationStarted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />

      {/* pen2 */}
      <motion.img
        src={pen2}
        alt="Pen doodle 2"
        className="fixed z-20
          w-[95%] top-[23%] left-[4%]
          phone:w-[80%] phone:top-[20%] phone:left-[10%]
          sm:w-[75%] sm:top-[20%] sm:left-[5%]
          md:w-[70%] md:top-[18%] md:left-[7%]
          lg:w-[65%] lg:top-[16%] lg:left-[9%]
          xl:w-[56%] xl:top-[14%] xl:left-[9.5%]
          2xl:w-[52%] 2xl:top-[12%] 2xl:left-[10%]
          h-auto"
        initial={{ opacity: 0 }}
        animate={animationStarted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />

      {/* pen3 */}
      <motion.img
        src={pen3}
        alt="Pen doodle boom"
        className="fixed z-20
          w-[16%] bottom-[34%] left-[5%]
          phone:w-[14%] phone:bottom-[37%] phone:left-[4%]
          sm:w-[12%] sm:bottom-[35%] sm:left-[5%]
          md:w-[10%] md:bottom-[32%] md:left-[11%]
          lg:w-[9%] lg:bottom-[34%] lg:left-[10%]
          xl:w-[9%] xl:bottom-[36%] xl:left-[9%]
          2xl:w-[9%] 2xl:bottom-[29%] 2xl:left-[7%]
          h-auto"
        initial={{ opacity: 0 }}
        animate={animationStarted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />

      {/* pen4 */}
      <motion.img
        src={pen4}
        alt="Pen doodle 4"
        className="fixed z-20
          w-[20%] bottom-[13%] right-[31%]
          phone:w-[17%] phone:bottom-[15%] phone:right-[26%]
          sm:w-[14%] sm:bottom-[15%] sm:right-[25%]
          md:w-[12%] md:bottom-[13%] md:right-[23%]
          lg:w-[11%] lg:bottom-[12%] lg:right-[20%]
          xl:w-[11%] xl:bottom-[14%] xl:right-[17%]
          2xl:w-[11%] 2xl:bottom-[14%] 2xl:right-[18%]
          h-auto"
        initial={{ opacity: 0 }}
        animate={animationStarted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />

      {/* pen5 (scroll 애니메이션) */}
      <motion.img
        src={pen5}
        alt="Pen doodle 5 - scroll"
        className="fixed z-20
          w-[40%] bottom-[4%] left-[31%]
          phone:w-[38%] phone:bottom-[3%] phone:left-[31%]
          sm:w-[32%] sm:bottom-[4%] sm:left-[35%]
          md:w-[25%] md:bottom-[5%] md:left-[38%]
          lg:w-[20%] lg:bottom-[5%] lg:left-[42%]
          xl:w-[18%] xl:bottom-[6%] xl:left-[42.5%]
          2xl:w-[15%] 2xl:bottom-[6%] 2xl:left-[43%]
          h-auto"
        initial={{ opacity: 0 }}
        animate={
          animationStarted
            ? { opacity: [1, 1, 1], y: [-5, 5, -5] }
            : { opacity: 0 }
        }
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          repeat: animationStarted ? Infinity : 0,
        }}
      />
    </>
  );
};

export default PenDoodles;
