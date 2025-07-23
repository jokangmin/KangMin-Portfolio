import { motion } from 'framer-motion';
import { useState } from 'react';
import mongImage from '../assets/mong2.png';
import redImage from '../assets/red.jpg';
import profileImage from '../assets/profile.jpg';
import foxImage from '../assets/fox.png';
import { FaGithub, FaArrowUp } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const HomePage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [animationStarted, setAnimationStarted] = useState(false);
  const [isFoxHovered, setIsFoxHovered] = useState(false);

  const handleScreenClick = () => {
    if (!animationStarted) {
      setAnimationStarted(true);
    }
  };

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden bg-myPalette-300 text-slate-950 flex flex-col"
      onClick={handleScreenClick}
    >
      {/* 오른쪽 상단 고정 정보 버튼 */}
      <div className="fixed top-5 right-5 z-50 flex gap-3">
        <a
          href="https://github.com/jokangmin"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://velog.io/@jomin357/posts"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          <SiVelog size={30} />
        </a>
        <a
          href="mailto:jomin5151@gmail.com"
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          <MdEmail size={30} />
        </a>
      </div>

      {/* 위로 가기 버튼 */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-50 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
      >
        <FaArrowUp size={40} />
      </button>

      {/* 애니메이션 이미지들 */}
      <motion.img
        src={redImage}
        alt="red Image"
        className="w-full h-full object-cover rounded-xl z-50 fixed left-10 -translate-x-1/2"
        initial={{ x: '-2.1%' }}
        animate={animationStarted ? { x: '-100%' } : { x: '-2.1%' }}
        transition={{ duration: 4, ease: 'easeInOut' }}
      />

      <motion.img
        src={mongImage}
        alt="Mong Image"
        className="w-64 h-64 object-cover rounded-xl z-50 fixed left-1/4 -translate-x-1/2 -translate-y-1/2"
        initial={{ x: '350%', y: '292%' }}
        animate={animationStarted ? { x: '-200%' } : { x: '350%', y: '292%' }}
        transition={{ duration: 4, ease: 'easeInOut' }}
      />

      {/* ---------- 메인 콘텐츠 ----------- */}

      {/* 배경 이미지를 위한 div (스크롤 시 고정) */}
      <div className="h-screen bg-center bg-cover bg-no-repeat bg-fixed bg-[url('../src/assets/green2.jpg')] z-10"></div>

      {/* 텍스트 및 프로필 이미지를 위한 div (스크롤 시 고정) */}
      <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
        {/* 텍스트 영역 - pointer-events-auto로 클릭 가능하게 재설정 */}
        <div className="text-right space-y-4 pointer-events-auto">
          <motion.h1
            className="text-6xl text-right font-bold"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 1, 0], y: [0, 0, 0, -30] }}
            transition={{ delay: 3, duration: 2.5, times: [0, 0.2, 0.8, 1] }}
          >
            안녕하세요.
          </motion.h1>

          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 5.5, duration: 1 }}
          >
            Full-stack 개발자 <span className="text-myPalette-500">조강민</span>입니다.
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
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

        {/* 오른쪽 이미지 - pointer-events-auto로 클릭 가능하게 재설정 */}
        <motion.img
          src={profileImage}
          alt="Profile"
          className="w-64 h-auto rounded-2xl shadow-xl object-cover ms-7 pointer-events-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 6, duration: 1 }}
        />

        {/* fox - project 이미지 및 호버 애니메이션 */}
        <motion.div
          className="fixed bottom-0 left-0 z-30 p-4 flex flex-col items-center justify-center pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, x: '120%', y: '-30%' }}
          transition={{ delay: 7, duration: 1 }}
          onMouseEnter={() => setIsFoxHovered(true)}
          onMouseLeave={() => setIsFoxHovered(false)}
        >
          <motion.h2
            className="text-2xl text-slate-900 font-bold mb-2"
            animate={{ opacity: isFoxHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            Project
          </motion.h2>
          <motion.img 
            src={foxImage} 
            alt="Fox Icon" 
            className="w-56"
            animate={{ scale: isFoxHovered ? 0.95 : 1, y: isFoxHovered ? -10 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      {/* --- 메인 콘텐츠 끝 --- */}

      {/* about me 섹션 (이 섹션부터 스크롤 가능) */}
      <div className="w-full h-screen z-40 bg-myPalette-200 text-slate-950 flex items-center justify-center">
        <h2 className="text-5xl font-bold">내용 추가</h2>
      </div>
    </div>
  );
};

export default HomePage;