import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import bannerImage from '../assets/banner.png';
import profileImage from '../assets/profile.jpg';
import myImage from '../assets/my_imo.png';
import foxImage from '../assets/fox.png';
import rabbitImage from '../assets/rabbit.png';
import cowImage from '../assets/cow.png';
import { FaGithub, FaArrowUp } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const HomePage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [animationStarted, setAnimationStarted] = useState(false);
  const [isFoxHovered, setIsFoxHovered] = useState(false);
  const [isRabbitHovered, setIsRabbitHovered] = useState(false);
  const [isCowHovered, setIsCowHovered] = useState(false);

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

      {/* 배너 이미지 */}
      <motion.img
        src={bannerImage}
        alt="banner Image"
        className="w-full h-full object-cover rounded-xl z-50 fixed -translate-x-1/2"
        initial={{ x: '0%' }}
        animate={{ x: '-100%' }}
        transition={{ delay: 1 ,duration: 6, ease: 'easeInOut' }}
      />

      {/* ---------- 메인 콘텐츠 ----------- */}

      {/* 배경 이미지를 위한 div (스크롤 시 고정) */}
      <div className="h-screen bg-center bg-cover bg-no-repeat bg-fixed bg-[url('../src/assets/green2.jpg')] z-10"></div>

      {/* 텍스트 및 프로필 이미지를 위한 div (스크롤 시 고정) */}
      <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
        {/* 텍스트 영역 */}
        <div className="text-right space-y-4 pointer-events-auto">
          <motion.h1
            className="text-6xl text-right font-bold"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 1, 0], y: [0, 0, 0, -30] }}
            transition={{ delay: 4.5, duration: 2.5, times: [0, 0.2, 0.8, 1] }}
          >
            안녕하세요.
          </motion.h1>

          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 7, duration: 1 }}
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
                  delayChildren: 7.5,
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
          src={profileImage}
          alt="Profile"
          className="w-64 h-auto rounded-2xl shadow-xl object-cover ms-7 pointer-events-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 7, duration: 1 }}
        />

        {/* fox - project 이미지 및 호버 애니메이션 */}
        <motion.div
          className="fixed bottom-32 left-52 z-30 p-4 flex flex-col items-center justify-center pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 8, duration: 1 }}
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

        {/* rabbit - about me 이미지 및 호버 애니메이션 */}
        <motion.div
          className="fixed bottom-16 left-1/3 z-30 p-4 flex flex-col items-center justify-center pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 8, duration: 1 }} 
          onMouseEnter={() => setIsRabbitHovered(true)}
          onMouseLeave={() => setIsRabbitHovered(false)}
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
            className="w-56"
            animate={{ scale: isRabbitHovered ? 0.95 : 1, y: isRabbitHovered ? -10 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* cow - education & License 이미지 및 호버 애니메이션 */}
        <motion.div
          className="fixed bottom-64 right-48 z-30 p-4 flex flex-col items-center justify-center pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 8, duration: 1 }} 
          onMouseEnter={() => setIsCowHovered(true)}
          onMouseLeave={() => setIsCowHovered(false)}
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
            className="w-64"
            animate={{ scale: isCowHovered ? 0.95 : 1, y: isCowHovered ? -10 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      {/* --- 메인 콘텐츠 끝 --- */}

      <section
        id="about-me-section"
        className="relative z-40 h-screen flex items-center justify-center bg-center bg-cover bg-no-repeat bg-fixed py-10 px-4"
      >
        <div className="absolute inset-0 bg-myPalette-200"></div>
        <div className="relative z-10 w-full max-w-4xl mx-auto p-4 sm:p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-2xl text-slate-950 flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-8">
          {/* 왼쪽: 프로필 이미지 및 소셜 링크 */}
          <motion.div
            className="flex-shrink-0 flex flex-col items-center text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={myImage}
              alt="조강민 Profile"
              className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full border-2 sm:border-4 border-myPalette-500 shadow-lg mb-2 sm:mb-4"
            />
            <h3 className="text-xl sm:text-3xl font-bold text-myPalette-700 mb-1 sm:mb-2">조강민</h3>
            <p className="text-base sm:text-lg text-gray-700 mb-2 sm:mb-4">Full-stack Developer</p>
          </motion.div>

          {/* About Me */}
          <div className="flex-grow text-center md:text-left mt-4 md:mt-0">
            <motion.h2
              className="text-3xl sm:text-5xl font-extrabold text-slate-950 mb-6 sm:mb-6 border-b-2 border-myPalette-500 pb-2 sm:pb-2"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              About Me
            </motion.h2>

            <motion.div
              className="text-base sm:text-xl text-gray-800 leading-relaxed space-y-3 sm:space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p>
                안녕하세요! <span className='font-bold'>AI 프로젝트 개발 및 다양한 프로젝트에서 서비스 배포까지의 전 과정을 깊이 있게 경험</span>하며, 다양한 문제에 대한 해결 능력을 키워온 <span className='font-bold'>풀스택 개발자 조강민</span>입니다. 저는 기술이 단순히 코드를 넘어, 사용자에게 <span className='font-bold'>실질적인 가치를 전달하고 팀의 효율성을 극대화</span>하는 강력한 도구가 될 수 있다고 믿습니다.
              </p>
              <p>
                새로운 기술 트렌드를 끊임없이 학습하고 프로젝트에 적용하는 것을 즐기며, 특히 <span className='font-bold'>안정적인 시스템과 자동화</span>에 깊은 관심을 가지고 있습니다. 복잡한 문제를 단순하고 효율적인 솔루션으로 풀어내는 것에 보람을 느낍니다.
              </p>
              <p>
                개발자로서 저의 목표는 아이디어를 현실로 만들고, 사람들의 일상에 긍정적인 변화를 가져오는 것입니다. 저의 기술과 경험이 멋진 프로젝트에 기여할 수 있기를 기대합니다.
              </p>
            </motion.div>

            {/* Optional: Skills or Interests section */}
            <motion.div
              className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-myPalette-700 mb-2 sm:mb-4">What I Love Doing</h3>
              <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg">
                <li>데이터 기반의 인사이트 도출 및 활용</li>
                <li>새로운 기술 스택 탐구 및 적용</li>
                <li>효율적인 아키텍처 설계</li>
                <li>사용자 경험을 개선하는 UI/UX 구현</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      {/* --- About me 섹션 끝 --- */}

      {/* Placeholder for Project Section */}
      <section
        id="education-section"
        className="h-screen z-40 flex items-center justify-center bg-gray-100"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-slate-700">Education & License Section (Coming Soon!)</h2>
      </section>

      {/* Placeholder for Education & License Section */}
      <section
        id="project-section"
        className="h-screen z-40 flex items-center justify-center bg-myPalette-200"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-slate-700">Project Section (Coming Soon!)</h2>
      </section>

    </div>
  );
};

export default HomePage;