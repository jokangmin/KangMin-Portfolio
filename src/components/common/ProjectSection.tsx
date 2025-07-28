import React from 'react';
import { motion } from 'framer-motion';
import portfolio_project from '../../assets/project1.webp';
import interview_talk_project from '../../assets/project2.webp';
import moivo_project from '../../assets/project3.webp';
import book_project from '../../assets/project4.webp';
import odiga_project from '../../assets/project5.webp';

const ProjectSection: React.FC = React.memo(() => {
  return (
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
                src={portfolio_project}
                alt="KangMin Portfolio"
                className="w-full h-48 object-cover"
                loading="lazy"
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
                src={interview_talk_project}
                alt="TalkTalk Ai Interview Project"
                className="w-full h-48 object-cover"
                loading="lazy"
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
                src={moivo_project}
                alt="Moivo Project"
                className="w-full h-48 object-cover"
                loading="lazy"
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
                src={book_project}
                alt="BooBooBook Project"
                className="w-full h-48 object-cover"
                loading="lazy"
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
                src={odiga_project}
                alt="ODIGA Project"
                className="w-full h-48 object-cover"
                loading="lazy"
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
  );
});

export default ProjectSection;