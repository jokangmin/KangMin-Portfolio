import React from 'react';
import { motion } from 'framer-motion';
import myImage from '../../assets/my_imo.png';
import { SiAmazonwebservices, SiCss3, SiDocker, SiFigma, SiGithubactions, SiHtml5, SiJavascript, SiMysql, SiNaver, SiNodedotjs, SiNotion, SiOracle, SiReact, SiSpringboot, SiTypescript } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const AboutMeSection: React.FC = () => {
  return (
    <section
      id="about-me-section"
      className="relative z-40 h-screen flex items-center justify-center bg-center bg-cover bg-no-repeat bg-fixed py-10 px-4"
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('../src/assets/note.png')]"></div>

      <div className="relative z-10 w-[33%] h-[82%] max-w-4xl mx-auto p-4 sm:p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-2xl text-slate-950 flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-8 2xl:right-[2%] 2xl:bottom-[3%]">
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
            JPA
          </li>
          <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
            <SiDocker size={24} className="text-blue-700" /> Docker
          </li>
          <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
            <SiAmazonwebservices size={24} className="text-orange-400" /> AWS
          </li>
          <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
            <SiNaver size={24} className='text-green-400' /> NCP
          </li>
          <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
            <SiGithubactions size={24} className="text-blue-500" /> Github Action
          </li>
          <li className="flex items-center gap-1 bg-myPalette-100 text-myPalette-700 px-3 py-1.5 rounded-full shadow-md">
            Slack
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
  );
};

export default AboutMeSection;