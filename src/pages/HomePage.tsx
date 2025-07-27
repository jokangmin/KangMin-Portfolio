import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import bannerImage from '../assets/banner2.png';
import profileImage from '../assets/profile.jpg';
import myImage from '../assets/my_imo.png';
import bannerMyImage from '../assets/my1-remove.png';
import bannerMyImage2 from '../assets/my2-remove.png';
import foxImage from '../assets/fox2.png';
import rabbitImage from '../assets/rabbit2.png';
import cowImage from '../assets/cow2.png';
import pen1 from '../assets/pen1-Photoroom.png';
import pen2 from '../assets/pen2-Photoroom.png';
import pen3 from '../assets/pen3-Photoroom.png';
import pen4 from '../assets/pen4-Photoroom.png';
import pen5 from '../assets/pen5-Photoroom.png'; // pen5.png 파일 이름을 확인해주세요. 위에서 보낸 코드에서는 pen5-Photoroom.png 였는데, 만약 pen5.png가 올바르다면 이대로 사용하시면 됩니다.
import pen6 from '../assets/pen6-Photoroom.png';
import { FaGithub, FaArrowUp, FaJava } from 'react-icons/fa';
import { SiAmazonwebservices, SiCss3, SiDocker, SiFigma, SiGithubactions, SiHtml5, SiJavascript, SiMysql, SiNaver, SiNodedotjs, SiNotion, SiOracle, SiReact, SiSpringboot, SiTypescript, SiVelog } from 'react-icons/si';
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
  const [isBannerMyImageHovered, setIsBannerMyImageHovered] = useState(false);

  useEffect(() => {
    if (!animationStarted) {
      document.body.style.overflow = 'hidden'; // 스크롤 비활성화
    } else {
      document.body.style.overflow = 'auto'; // 스크롤 활성화
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [animationStarted]);

  const handleScreenClick = () => {
    if (!animationStarted) {
      setAnimationStarted(true);
    }
  };

  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById('about-me-section');
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToEducation = () => {
    const educationSection = document.getElementById('education-section');
    if (educationSection) {
      educationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProject = () => {
    const projectSection = document.getElementById('project-section');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
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

      {/* 왼쪽 상단 고정 내비게이션 메뉴 */}
      <motion.div
        className="fixed top-5 right-52
         z-50 flex flex-row gap-7 p-1 px-7 backdrop-blur-sm rounded-lg shadow-lg"
        initial={{ opacity: 0, x: -100 }}
        animate={animationStarted ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ delay: 8, duration: 0.8 }} // 애니메이션 시작 후 나타나도록 딜레이 조정
      >
        <button
          onClick={scrollToAboutMe}
          className="text-lg font-semibold text-myPalette-700 px-4 py-2 rounded-md hover:bg-myPalette-100 transition-colors duration-200"
        >
          About me
        </button>
        <button
          onClick={scrollToEducation}
          className="text-lg font-semibold text-myPalette-700 px-4 py-2 rounded-md hover:bg-myPalette-100 transition-colors duration-200"
        >
          Education & License
        </button>
        <button
          onClick={scrollToProject}
          className="text-lg font-semibold text-myPalette-700 px-4 py-2 rounded-md hover:bg-myPalette-100 transition-colors duration-200"
        >
          Project
        </button>
      </motion.div>

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
        animate={animationStarted ? { x: '-200%' } : { x: '0%'}}
        transition={{ duration: 3, ease: 'easeInOut' }}
      />

      <motion.p
        className="text-5xl font-bold text-slate-950 z-50 fixed left-[41%] top-1/3"
        initial={{ x: '0%', opacity: 1 }}
        animate={animationStarted ? { x: '-400%', opacity: 0 } : { x: '0%', opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        KangMin Portfolio
      </motion.p>

      <motion.img
        src={isBannerMyImageHovered ? bannerMyImage2 : bannerMyImage} // 호버 상태에 따라 이미지 교체
        alt="banner my Image"
        className="w-64 object-cover rounded-xl z-50 fixed left-[45%] top-[45%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto" // translate-x-[55%] 제거
        initial={{ x: '0%' }}
        animate={animationStarted ? { x: '-400%', opacity: 0 } : { x: '0%', opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        onMouseEnter={() => setIsBannerMyImageHovered(true)} // 호버 시작 시 상태 변경
        onMouseLeave={() => setIsBannerMyImageHovered(false)} // 호버 종료 시 상태 변경
      />

      {/* "Click Screen */}
      <motion.p
        className="text-3xl font-semibold text-myPalette-500 z-50 fixed left-[47%] bottom-[25%] transform -translate-x-1/2"
        initial={{ opacity: 1 }}
        animate={animationStarted ? { x: '-400%', opacity: 0 } : { y: [-7,7,-7] }} // 깜빡임 또는 사라짐
        transition={
          animationStarted
            ? { duration: 1.3, ease: 'easeInOut' } // 사라지는 애니메이션
            : {
                duration: 3, // 깜빡임 주기
                ease: 'easeInOut',
                repeat: Infinity, // 무한 반복
                repeatType: 'loop', // 반복 타입
              }
        }
      >
        Click Screen 🖤
      </motion.p>


      {/* ---------- 메인 콘텐츠 ----------- */}

      {/* 배경 이미지를 위한 div (스크롤 시 고정) */}
      <div className="h-screen bg-center bg-cover bg-no-repeat bg-fixed bg-[url('../src/assets/banner2.png')] z-10"></div>

      {/* pen doodle 이미지 */}
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



      {/* 텍스트 및 프로필 이미지를 위한 div (스크롤 시 고정) */}
      <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
        {/* 텍스트 영역 */}
        <div className="text-right space-y-4 pointer-events-auto">
          <motion.h1
            className="text-6xl text-right font-bold"
            // animationStarted가 true일 때만 애니메이션 실행
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
          src={profileImage}
          alt="Profile"
          className="w-64 h-auto rounded-2xl shadow-xl object-cover ms-7 pointer-events-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={animationStarted ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 6.5, duration: 1 }}
        />

        {/* fox - project 이미지 및 호버 애니메이션 */}
        <motion.div
          className="fixed bottom-[10%] left-[17%] z-30 p-4 flex flex-col items-center justify-center pointer-events-auto"
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
            src={foxImage}
            alt="Fox Icon"
            className="w-56"
            animate={{ scale: isFoxHovered ? 0.95 : 1, y: isFoxHovered ? -10 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* rabbit - about me 이미지 및 호버 애니메이션 */}
        <motion.div
          className="fixed top-[20%] left-[10%] z-30 p-4 flex flex-col items-center justify-center pointer-events-auto"
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
            className="w-56"
            animate={{ scale: isRabbitHovered ? 0.95 : 1, y: isRabbitHovered ? -10 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* cow - education & License 이미지 및 호버 애니메이션 */}
        <motion.div
          className="fixed bottom-[20%] right-48 z-30 p-4 flex flex-col items-center justify-center pointer-events-auto"
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
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('../src/assets/note.png')]"></div>

        <div className="relative z-10 w-[33%] h-[82%] max-w-4xl mx-auto p-4 sm:p-8 bg-white/80 backdrop-blur-sm 
        rounded-lg shadow-2xl text-slate-950 flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-8 2xl:right-[2%] 2xl:bottom-[3%]">
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

          </div>
        </div>

        {/* Optional: Skills or Interests section */}
        <motion.div
          className='relative w-[20%] right-[10%] bottom-[25%] pt-4 z-40'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="text-4xl font-bold text-myPalette-700 mb-2 sm:mb-4">🤎 Skill & Tools</h3>
          <ul className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-5 text-sm sm:text-base">
            <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
              <SiReact size={24} className="text-blue-500" /> React
            </li>
            <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
              <SiJavascript size={24} className="text-yellow-500" /> JavaScript
            </li>
            <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
              <SiTypescript size={24} className="text-blue-700" /> TypeScript
            </li>
            <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
              <SiHtml5 size={24} className="text-orange-600" /> HTML
            </li>
            <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
              <SiCss3 size={24} className="text-blue-600" /> CSS
            </li>
            <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
              <SiSpringboot size={24} className="text-green-600" /> Spring Boot
            </li>
            <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
              <FaJava size={24} className="text-red-700" /> Java
            </li>
            <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
              <SiMysql size={24} className="text-blue-800" /> MySQL
            </li>
            <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
              <SiOracle size={24} className="text-red-500" /> Oracle
            </li>
            <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
              <SiNodedotjs size={24} className="text-green-500" /> Node.js
            </li>
            <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
              JPA {/* JPA 아이콘은 react-icons에 없어 텍스트로 유지했습니다. */}
            </li>
            <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
              <SiDocker size={24} className="text-blue-700" /> Docker
            </li>
            <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
              <SiAmazonwebservices size={24} className="text-orange-400" /> AWS
            </li>
            <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
              <SiNaver size={24} className='text-green-400' /> NCP {/* SiNaver 아이콘을 NCP에 적용했습니다. */}
            </li>
            <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
              <SiGithubactions size={24} className="text-blue-500" /> Github Action
            </li>
            <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
              Slack {/* Slack 아이콘은 SiSlack으로 import되었으나, 위 리스트에는 notion과 figma 사이에 누락되어 텍스트로 유지합니다. 필요시 SiSlack을 추가하세요. */}
            </li>
            <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
              <SiNotion size={24} className="text-purple-600" /> Notion
            </li>
            <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
              <SiFigma size={24} className="text-red-500" /> Figma
            </li>
          </ul>
        </motion.div>
        
        <motion.div
          className='relative w-[16%] right-[31%] bottom-[-27%] pt-4 z-40'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="text-2xl sm:text-2xl font-bold text-myPalette-700 mb-2 sm:mb-4">What I Love Doing</h3>
          <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg">
            <li>데이터 기반의 인사이트 도출 및 활용</li>
            <li>새로운 기술 스택 탐구 및 적용</li>
            <li>효율적인 아키텍처 설계</li>
            <li>사용자 경험을 개선하는 UI/UX 구현</li>
          </ul>
        </motion.div>
      </section>
      {/* --- About me 섹션 끝 --- */}

      {/* Education & License Section */}
      <section
        id="education-section"
        className="relative z-40 h-screen flex items-center justify-center bg-center bg-cover bg-no-repeat bg-fixed py-10 px-4"
      >
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[center_45%] bg-no-repeat bg-[url('../src/assets/book.png')]"></div>

        <div className="relative z-10 w-[80%] h-[85%] max-w-7xl mx-auto p-4 sm:p-8 backdrop-blur-sm 
        rounded-lg text-slate-950 flex flex-col md:flex-row gap-8">
          {/* LICENCE 섹션 (왼쪽) */}
          <motion.div
            className="flex-1 p-6 bg-myPalette-50 rounded-lg flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-myPalette-700 mb-6 border-b-2 border-myPalette-500 pb-2">
              LICENCE
            </h2>
            <div className="space-y-6 w-full">
              <div className="bg-white p-4 rounded-md shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-myPalette-800">정보처리산업기사</h3>
                <p className="text-gray-700">발급처: 한국산업인력공단</p>
                <p className="text-sm text-gray-500">2023.09.01</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-myPalette-800">SQLD (SQL Developer)</h3>
                <p className="text-gray-700">발급처: 한국데이터산업진흥원</p>
                <p className="text-sm text-gray-500">2024.06.21</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-myPalette-800">NCP (Naver Cloud Professional)</h3>
                <p className="text-gray-700">발급처: 네이버클라우드플랫폼</p>
                <p className="text-sm text-gray-500">2024.12.25</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-myPalette-800">JLPT N4</h3>
                <p className="text-gray-700">발급처: 일본국제교류기금</p>
                <p className="text-sm text-gray-500">2025.08.25 예정</p>
              </div>
            </div>
          </motion.div>

          {/* EDUCATION 섹션 (오른쪽) */}
          <motion.div
            className="flex-1 p-6 bg-myPalette-50 rounded-lg flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-myPalette-700 mb-6 border-b-2 border-myPalette-500 pb-2">
              EDUCATION
            </h2>
            <div className="space-y-8 w-full">
              <div className="bg-white p-4 rounded-md shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-myPalette-800 mb-1">인덕대학교 졸업</h3>
                <p className="text-gray-700">📖 컴퓨터전자공학과 학사 2019.03 - 2024.02</p>
                <p className="text-sm text-gray-500 mb-4">평균 학점: 4.08 / 4.5</p>
                <div className="text-base text-gray-600 space-y-1">
                  <p>- 회로이론, 전자회로, 디지털공학 등 전자공학 기초 지식</p>
                  <p>- Python 및 C++을 이용한 알고리즘, 임베디드 시스템 설계 및 개발</p>
                  <p>- 캡스톤 디자인 프로젝트 참여를 통한 문제 해결 능력 향상</p>
                  <p>- 팀 프로젝트를 통해 협업 및 커뮤니케이션 능력 강화</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-myPalette-800 mb-1">네이버클라우드 비트캠프 AIaaS 9기</h3>
                <p className="text-gray-700">2024.07 - 2025.01</p>
                <div className="text-base text-gray-600 space-y-1 mt-3">
                  <p>- JAVA, 리눅스 기초 및 심화 </p>
                  <p>- React, JS, Spring Boot, JSP 등 풀스택 기반 수업 및 실습</p>
                  <p>- 클라우드 환경(AWS, NCP)에서 배포 및 관리 실습</p>
                  <p>- 데이터 처리 및 분석 기법 학습 (네트워크, 데이터베이스)</p>
                  <p>- 3-4회 팀 프로젝트 기획부터 구현, 배포, 운영까지 전 과정 경험 및 포트폴리오</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* --- Education & License 섹션 끝 --- */}

      {/* Placeholder for Project Section */}
      {/* Project Section */}
      <section
        id="project-section"
        className="relative z-40 py-10 px-4 bg-myPalette-200"
      >
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-center bg-repeat bg-[url('../src/assets/circuit.png')] opacity-20"></div>
        <div className="relative z-10 max-w-6xl mx-auto py-8">
          <motion.h2
            className="text-4xl font-extrabold text-slate-900 mb-8 text-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Projects
          </motion.h2>
          {/* 한 줄에 2개씩 표시되도록 grid-cols-2로 변경 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project: KangMin Portfolio */}
            <motion.div
              className="bg-white rounded-lg shadow-xl overflow-hidden mx-auto md:mx-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <img
                src="https://via.placeholder.com/500x300/dddddd/333333?Text=KangMin Portfolio"
                alt="KangMin Portfolio"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">포트폴리오 프로젝트</h3>
                <p className="text-gray-600 text-sm mb-2">나만의 웹 사이트 포트폴리오</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">React</span>
                  <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">TypeScript</span>
                  <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">Tailwind CSS</span>
                  <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">Framer Motion</span>
                </div>
                <p className="text-gray-500 text-xs">📅 2025년 7월 19일~ 진행중</p>
                <a href="#" className="inline-block mt-4 bg-myPalette-500 hover:bg-myPalette-700 text-white font-bold py-2 px-4 rounded-full text-sm transition-colors">
                  상세 보기
                </a>
              </div>
            </motion.div>
            {/* Project 1: TalkTalk Ai Interview Project */}
            <motion.div
              className="bg-white rounded-lg shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://via.placeholder.com/500x300/cccccc/ffffff?Text=TalkTalk+AI"
                alt="TalkTalk Ai Interview Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">TalkTalk Ai Interview 프로젝트</h3>
                <p className="text-gray-600 text-sm mb-2">AI 면접 시뮬레이션 웹 애플리케이션 개발</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">React</span>
                  <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">Spring Boot / java</span>
                  <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">OpenAi API</span>
                  <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">JavaScript</span>
                  <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">MySQL</span>
                  <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">Node.js</span>
                </div>
                <p className="text-gray-500 text-xs">📅 2025년 2월 15일 → 2025년 6월 15일 (리팩토링)</p>
                <a href="#" className="inline-block mt-4 bg-myPalette-500 hover:bg-myPalette-700 text-white font-bold py-2 px-4 rounded-full text-sm transition-colors">
                  상세 보기
                </a>
              </div>
            </motion.div>

            {/* Project 2: Moivo Project */}
            <motion.div
              className="bg-white rounded-lg shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src="https://via.placeholder.com/500x300/999999/ffffff?Text=Moivo+Project"
                alt="Moivo Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Moivo 프로젝트</h3>
                <p className="text-gray-600 text-sm mb-2">모바일 기반의 영화 정보 및 예매 플랫폼 개발</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">React / js</span>
                  <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">Node.js</span>
                  <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">Spring Boot / java</span>
                  <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">JWT</span>
                  <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">MySQL</span>
                </div>
                <p className="text-gray-500 text-xs">📅 2024년 11월 15일 → 2025년 1월 3일</p>
                <a href="#" className="inline-block mt-4 bg-myPalette-500 hover:bg-myPalette-700 text-white font-bold py-2 px-4 rounded-full text-sm transition-colors">
                  상세 보기
                </a>
              </div>
            </motion.div>

            {/* Project 3: BooBooBook Project */}
            <motion.div
              className="bg-white rounded-lg shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <img
                src="https://via.placeholder.com/500x300/f0f0f0/333333?Text=BooBooBook"
                alt="BooBooBook Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">BooBooBook 프로젝트</h3>
                <p className="text-gray-600 text-sm mb-2">그림책 기반의 사용자 참여형 스토리텔링 플랫폼</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">React / js</span>
                  <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">Spring / java</span>
                  <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">JQuery</span>
                  <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">ORACLE</span>
                </div>
                <p className="text-gray-500 text-xs">📅 2024년 9월 30일 → 2024년 10월 21일</p>
                <a href="#" className="inline-block mt-4 bg-myPalette-500 hover:bg-myPalette-700 text-white font-bold py-2 px-4 rounded-full text-sm transition-colors">
                  상세 보기
                </a>
              </div>
            </motion.div>

            {/* Project 4: ODIGA Project */}
            <motion.div
              className="bg-white rounded-lg shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <img
                src="https://via.placeholder.com/500x300/cceeff/003366?Text=ODIGA+Project"
                alt="ODIGA Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">ODIGA 프로젝트</h3>
                <p className="text-gray-600 text-sm mb-2">여행 계획 및 공유를 위한 맞춤형 추천 서비스</p>
                <div className="flex flex-wrap gap-2 mb-2">
                <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">React / js</span>
                  <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">Spring / java</span>
                  <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">MyBatis</span>
                  <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">ORACLE</span>
                </div>
                <p className="text-gray-500 text-xs">📅 2024년 8월 30일 → 2024년 9월 27일</p>
                <a href="#" className="inline-block mt-4 bg-myPalette-500 hover:bg-myPalette-700 text-white font-bold py-2 px-4 rounded-full text-sm transition-colors">
                  상세 보기
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;