import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../../assets/profile.webp';
import {
  SiAmazonwebservices, SiCss3, SiDocker, SiFigma, SiGithubactions,
  SiHtml5, SiJavascript, SiMysql, SiNaver, SiNodedotjs, SiNotion,
  SiOracle, SiReact, SiSpringboot, SiTypescript, SiSlack
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const AboutMeSection: React.FC = React.memo(() => {
  return (
    <section
      id="about-me-section"
      className="relative z-30 min-h-screen flex flex-col items-center justify-center bg-note-texture bg-repeat bg-fixed px-4 py-12"
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>

      <div className="relative z-10 max-w-6xl p-6 sm:p-10 rounded-[2rem] shadow-[6px_6px_0_0_#333]
         w-[90%] phone:w-[85%] sm:w-[85%] md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-full
       bg-white/90 font-doodle text-slate-900 border-[3px] border-dashed border-myPalette-300">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* 왼쪽: 프로필 */}
          <motion.div
            className="flex flex-col items-center text-center w-full md:w-[35%]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={profileImage}
              alt="조강민 프로필"
              className="w-36 h-36 sm:w-48 sm:h-48 object-cover rounded-full border-4 border-myPalette-500 shadow-md mb-3"
              loading="lazy"
            />
            <h3 className="text-3xl sm:text-4xl font-bold mb-1 text-myPalette-700">조강민 🧑‍💻</h3>
            <p className="text-lg sm:text-xl text-gray-800">Full-stack Developer</p>
          </motion.div>

          {/* 오른쪽: 소개 */}
          <motion.div
            className="w-full md:w-[55%] text-center md:text-left"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6 border-b-[3px] border-myPalette-500 pb-2">
              About Me
            </h2>
            <div className="text-lg sm:text-xl leading-relaxed space-y-4">
              <p>
                안녕하세요! <span className="font-bold">AI 프로젝트 개발 및 서비스 배포</span>까지 전 과정을 경험한
                <span className="font-bold"> 풀스택 개발자 조강민</span>입니다.
              </p>
              <p>
                기술을 통해 <span className="font-bold">사용자에게 실질적인 가치</span>를 제공하고,
                <span className="font-bold"> 팀의 효율성을 높이는 개발</span>에 집중합니다.
              </p>
              <p>
                <span className="font-bold">자동화, 안정성, UI/UX</span>에 관심이 많으며,
                새로운 기술을 배우고 프로젝트에 녹여내는 걸 좋아합니다.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skill 리스트 */}
        <motion.div
          className="text-center phone:text-center sm:text-center md:text-left lg:text-left xl:text-left 2xl:text-left
          ml-2 phone:ml-8 sm:ml-12 md:ml-8 lg:ml-16 xl:ml-20 2xl:ml-24 mt-12 w-[90%] phone:w-[85%] sm:w-[80%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="text-2xl phone:text-3xl font-bold text-myPalette-700 mb-6 phone:mb-8">
            📚 Skill & Tools
          </h3>
          <ul className="flex flex-wrap justify-center phone:justify-start gap-2 phone:gap-3 sm:gap-4 text-sm sm:text-base md:text-lg">
            {[
              [<SiReact className="text-blue-500" />, 'React'],
              [<SiJavascript className="text-yellow-400" />, 'JavaScript'],
              [<SiTypescript className="text-blue-700" />, 'TypeScript'],
              [<SiHtml5 className="text-orange-500" />, 'HTML'],
              [<SiCss3 className="text-blue-500" />, 'CSS'],
              [<SiSpringboot className="text-green-600" />, 'Spring Boot'],
              [<FaJava className="text-red-600" />, 'Java'],
              [<SiMysql className="text-blue-800" />, 'MySQL'],
              [<SiOracle className="text-red-500" />, 'Oracle'],
              [<SiNodedotjs className="text-green-500" />, 'Node.js'],
              ['🟢', 'JPA'],
              [<SiDocker className="text-blue-600" />, 'Docker'],
              [<SiAmazonwebservices className="text-orange-400" />, 'AWS'],
              [<SiNaver className="text-green-400" />, 'NCP'],
              [<SiGithubactions className="text-blue-500" />, 'Github Action'],
              [<SiSlack className="text-black" />, 'Slack'],
              [<SiNotion className="text-purple-600" />, 'Notion'],
              [<SiFigma className="text-pink-500" />, 'Figma'],
            ].map(([icon, label], idx) => (
              <li
                key={idx}
                className="flex items-center gap-1 phone:gap-2 bg-yellow-100 border-2 border-dashed border-yellow-400 px-2 phone:px-3 sm:px-4 py-1 phone:py-2 rounded-full shadow-[3px_3px_0_0_#333]"
              >
                {icon} {label}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 좋아하는 작업 */}
        <motion.div
          className="mt-12 -ml-3 phone:ml-0 sm:ml-8 md:ml-10 lg:ml-16 xl:ml-20 2xl:ml-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-2xl text-center sm:text-left phone:text-3xl sm:text-3xl font-bold text-myPalette-700 mb-3 phone:mb-5">
            💡 What I Love Doing
          </h3>
          <ul className="text-center text-md sm:text-left list-disc list-inside phone:text-base sm:text-lg text-gray-800 leading-relaxed">
            <li>📊 데이터 기반 인사이트 도출</li>
            <li>🧪 새로운 기술 스택 실험</li>
            <li>🧱 효율적인 아키텍처 설계</li>
            <li>🎨 사용자 중심 UI/UX 구현</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
});

export default AboutMeSection;
