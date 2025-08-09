import React, { useState } from 'react';
import { motion } from 'framer-motion';
import myImage from '../../assets/my_imo.webp';
import catImage from '../../assets/pen_cat_temp.webp';
import rocketImage from '../../assets/pen_rocket.webp';
import bookImage from '../../assets/pen_book_temp.webp';

interface MainContentOverlayProps {
  animationStarted: boolean;
  scrollToAboutMe: () => void;
  scrollToEducation: () => void;
  scrollToProject: () => void;
}

const MainContentOverlay: React.FC<MainContentOverlayProps> = ({
  animationStarted,
  scrollToAboutMe,
  scrollToEducation,
  scrollToProject,
}) => {
  const [isFoxHovered, setIsFoxHovered] = useState<boolean>(false);
  const [isRabbitHovered, setIsRabbitHovered] = useState<boolean>(false);
  const [isCowHovered, setIsCowHovered] = useState<boolean>(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none bg-[url('../src/assets/banner2.webp')]">
      <div className="text-right space-y-4 pointer-events-auto">
        <motion.p
          className="font-bold
            text-3xl phone:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl"
          initial={{ opacity: 0, y: 0 }}
          animate={
            animationStarted
              ? { opacity: [0, 1, 1, 0], y: [0, 0, 0, -30] }
              : {}
          }
          transition={{ delay: 2, duration: 2.5, times: [0, 0.2, 0.8, 1] }}
        >
          안녕하세요.
        </motion.p>
        
        {/* 핵심 주제 */}
        <motion.h1
          className="font-bold
            text-xl phone:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl"
          initial={{ opacity: 0, x: 0 }}
          animate={animationStarted ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 5, duration: 1 }}
        >
          Full-stack 개발자 <span className="text-myPalette-500">조강민</span>입니다.
        </motion.h1>

        <motion.div
          initial="hidden"
          animate={animationStarted ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.5,
                delayChildren: 6,
              },
            },
          }}
          className="space-y-0.5"
        >
          <motion.p
            className="text-sm phone:text-base sm:text-lg md:text-xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            AI부터 배포까지 경험한 문제 해결형 개발자,
          </motion.p>
          <motion.p
            className="text-sm phone:text-base sm:text-lg md:text-xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            사용자와 팀의 연결 고리를 만듭니다.
          </motion.p>
        </motion.div>
      </div>

      {/* 프로필 이미지 */}
      <motion.img
        src={myImage}
        alt="개발자 조강민의 프로필 사진"
        className="pointer-events-auto rounded-2xl object-cover
          w-36 phone:w-44 sm:w-48 md:w-56 lg:w-60 xl:w-60 2xl:w-64
          h-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={animationStarted ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 6.5, duration: 1 }}
        loading="lazy"
      />

      {/* Project - rocket */}
      <motion.div
        className="fixed z-30 p-2 sm:p-3 md:p-4 flex flex-col items-center justify-center pointer-events-auto
          bottom-[8rem] phone:bottom-[10rem] sm:bottom-[9rem] md:bottom-[7rem] xl:bottom-[6rem] 2xl:bottom-[4rem]
          left-[-1.5rem] sm:left-[1rem] md:left-[3rem] xl:left-[5rem] 2xl:left-[9rem]"
        initial={{ opacity: 0, y: 20 }}
        animate={animationStarted ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 7.5, duration: 1 }}
        onMouseEnter={() => setIsFoxHovered(true)}
        onMouseLeave={() => setIsFoxHovered(false)}
        onClick={scrollToProject}
      >
        <motion.h2
          className="text-lg sm:text-xl md:text-2xl text-slate-900 font-bold mb-2"
          animate={{ opacity: isFoxHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          Project
        </motion.h2>
        <motion.img
          src={rocketImage}
          alt="프로젝트 섹션으로 이동하는 로켓 아이콘"
          className="w-52 sm:w-60 md:w-72 lg:w-80 xl:w-96"
          animate={{ scale: isFoxHovered ? 0.95 : 1, y: isFoxHovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
        />
      </motion.div>

      {/* About me - cat */}
      <motion.div
        className="fixed z-30 p-2 sm:p-3 md:p-4 flex flex-col items-center justify-center pointer-events-auto
          top-[28%] phone:top-[24%] sm:top-[23%] md:top-[21%] 2xl:top-[25%]
          left-[5%] phone:left-[2%] sm:left-[2%] md:left-[7%] 2xl:left-[12%]"
        initial={{ opacity: 0, y: 20 }}
        animate={animationStarted ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 7.5, duration: 1 }}
        onMouseEnter={() => setIsRabbitHovered(true)}
        onMouseLeave={() => setIsRabbitHovered(false)}
        onClick={scrollToAboutMe}
      >
        <motion.h2
          className="text-lg sm:text-xl md:text-2xl text-slate-900 font-bold mb-2"
          animate={{ opacity: isRabbitHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          About me
        </motion.h2>
        <motion.img
          src={catImage}
          alt="자기소개 섹션으로 이동하는 고양이 아이콘"
          className="w-36 phone:w-44 sm:w-52 md:w-56 lg:w-60 xl:w-72"
          animate={{ scale: isRabbitHovered ? 0.95 : 1, y: isRabbitHovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
        />
      </motion.div>

      {/* Education - book */}
      <motion.div
        className="fixed z-30 p-2 sm:p-3 md:p-4 flex flex-col items-center justify-center pointer-events-auto
          bottom-[13%] phone:bottom-[16%] sm:bottom-[16%] md:bottom-[13%] xl:bottom-[18%] 2xl:bottom-[19%]
          right-[5%] phone:right-[5%] sm:right-[6%] md:right-[6.5%] 2xl:right-[7%]"
        initial={{ opacity: 0, y: 20 }}
        animate={animationStarted ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 7.5, duration: 1 }}
        onMouseEnter={() => setIsCowHovered(true)}
        onMouseLeave={() => setIsCowHovered(false)}
        onClick={scrollToEducation}
      >
        <motion.h2
          className="text-lg sm:text-xl md:text-2xl text-slate-900 font-bold mb-2 text-center"
          animate={{ opacity: isCowHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          Education & License
        </motion.h2>
        <motion.img
          src={bookImage}
          alt="교육 및 자격증 섹션으로 이동하는 책 아이콘"
          className="w-40 phone:w-52 sm:w-56 md:w-60 lg:w-64 xl:w-72"
          animate={{ scale: isCowHovered ? 0.95 : 1, y: isCowHovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

export default MainContentOverlay;