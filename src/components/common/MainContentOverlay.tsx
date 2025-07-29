import React, { useState } from 'react';
import { motion } from 'framer-motion';
import myImage from '../../assets/my_imo.webp';
import rabbitImage from '../../assets/pen_rocket.webp';
import rocketImage from '../../assets/pen_rocket.webp';
import cowImage from '../../assets/pen_rocket.webp';

interface MainContentOverlayProps {
  animationStarted: boolean;
  scrollToAboutMe: () => void;
  scrollToEducation: () => void;
  scrollToProject: () => void;
}

const MainContentOverlay: React.FC<MainContentOverlayProps> = ({ animationStarted, scrollToAboutMe, scrollToEducation, scrollToProject }) => {
  const [isFoxHovered, setIsFoxHovered] = useState<boolean>(false); // useState에 타입 명시
  const [isRabbitHovered, setIsRabbitHovered] = useState<boolean>(false); // useState에 타입 명시
  const [isCowHovered, setIsCowHovered] = useState<boolean>(false); // useState에 타입 명시

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
      {/* 텍스트 영역 */}
      <div className="text-right space-y-4 pointer-events-auto">
        <motion.h1
          className="text-6xl text-right font-bold"
          initial={{ opacity: 0, y: 0 }}
          animate={animationStarted ? { opacity: [0, 1, 1, 0], y: [0, 0, 0, -30] } : {}}
          transition={{ delay: 2, duration: 2.5, times: [0, 0.2, 0.8, 1] }}
        >
          안녕하세요.
        </motion.h1>

        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, x: 0 }}
          animate={animationStarted ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 5, duration: 1 }}
        >
          Full-stack 개발자 <span className="text-myPalette-500">조강민</span>입니다.
        </motion.h1>

        <motion.div
          initial="hidden"
          animate={animationStarted ? "visible" : "hidden"}
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
            className="text-xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            AI부터 배포까지 경험한 문제 해결형 개발자,
          </motion.p>
          <motion.p
            className="text-xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            사용자와 팀의 연결 고리를 만듭니다.
          </motion.p>
        </motion.div>
      </div>

      {/* 오른쪽 이미지 */}
      <motion.img
        src={myImage}
        alt="Profile"
        className="w-64 h-auto rounded-2xl object-cover ms-7 pointer-events-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={animationStarted ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 6.5, duration: 1 }}
        loading="lazy"
      />

      {/* fox - project 이미지 및 호버 애니메이션 */}
      <motion.div
        className="fixed bottom-[7%] left-[8%] z-30 p-4 flex flex-col items-center justify-center pointer-events-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={animationStarted ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 7.5, duration: 1 }}
        onMouseEnter={() => setIsFoxHovered(true)}
        onMouseLeave={() => setIsFoxHovered(false)}
        onClick={scrollToProject}
      >
        <motion.h2
          className="text-2xl text-slate-900 font-bold mb-2"
          animate={{ opacity: isFoxHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          Project
        </motion.h2>
        <motion.img
          src={rocketImage}
          alt="Fox Icon"
          className="w-96"
          animate={{ scale: isFoxHovered ? 0.95 : 1, y: isFoxHovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
        />
      </motion.div>

      {/* rabbit - about me 이미지 및 호버 애니메이션 */}
      <motion.div
        className="fixed top-[27%] left-[10%] z-30 p-4 flex flex-col items-center justify-center pointer-events-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={animationStarted ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 7.5, duration: 1 }}
        onMouseEnter={() => setIsRabbitHovered(true)}
        onMouseLeave={() => setIsRabbitHovered(false)}
        onClick={scrollToAboutMe}
      >
        <motion.h2
          className="text-2xl text-slate-900 font-bold mb-2"
          animate={{ opacity: isRabbitHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          About me
        </motion.h2>
        <motion.img
          src={rabbitImage}
          alt="Rabbit Icon"
          className="w-80"
          animate={{ scale: isRabbitHovered ? 0.95 : 1, y: isRabbitHovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
        />
      </motion.div>

      {/* cow - education & License 이미지 및 호버 애니메이션 */}
      <motion.div
        className="fixed bottom-[22%] right-[7%] z-30 p-4 flex flex-col items-center justify-center pointer-events-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={animationStarted ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 7.5, duration: 1 }}
        onMouseEnter={() => setIsCowHovered(true)}
        onMouseLeave={() => setIsCowHovered(false)}
        onClick={scrollToEducation}
      >
        <motion.h2
          className="text-2xl text-slate-900 font-bold mb-2"
          animate={{ opacity: isCowHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          Education & License
        </motion.h2>
        <motion.img
          src={cowImage}
          alt="Cow Icon"
          className="w-96"
          animate={{ scale: isCowHovered ? 0.95 : 1, y: isCowHovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

export default MainContentOverlay;