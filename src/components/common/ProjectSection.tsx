import React from 'react';
import { motion } from 'framer-motion';

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <h3 className="text-xl font-semibold text-slate-800 mb-2">TalkTalk Ai Interview Project (진행중)</h3>
              <p className="text-gray-600 text-sm mb-2">AI 면접 시뮬레이션 웹 애플리케이션 개발</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">React</span>
                <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">Spring Boot</span>
                <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">AI</span>
              </div>
              <p className="text-gray-500 text-xs">📅 2025년 2월 15일</p>
              <a href="#" className="inline-block mt-4 bg-myPalette-500 hover:bg-myPalette-700 text-white font-bold py-2 px-4 rounded-full text-sm transition-colors">
                웹 사이트 개발
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
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Moivo Project</h3>
              <p className="text-gray-600 text-sm mb-2">모바일 기반의 영화 정보 및 예매 플랫폼 개발</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">React Native</span>
                <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">Node.js</span>
                <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">MongoDB</span>
              </div>
              <p className="text-gray-500 text-xs">📅 2024년 11월 15일 → 2025년 1월 3일</p>
              <a href="#" className="inline-block mt-4 bg-myPalette-500 hover:bg-myPalette-700 text-white font-bold py-2 px-4 rounded-full text-sm transition-colors">
                웹 사이트 개발 및 배포
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
              <h3 className="text-xl font-semibold text-slate-800 mb-2">BooBooBook Project</h3>
              <p className="text-gray-600 text-sm mb-2">그림책 기반의 사용자 참여형 스토리텔링 플랫폼</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">Vue.js</span>
                <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">Firebase</span>
              </div>
              <p className="text-gray-500 text-xs">📅 2024년 9월 30일 → 2024년 10월 21일</p>
              <a href="#" className="inline-block mt-4 bg-myPalette-500 hover:bg-myPalette-700 text-white font-bold py-2 px-4 rounded-full text-sm transition-colors">
                웹 사이트 개발
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
              <h3 className="text-xl font-semibold text-slate-800 mb-2">ODIGA Project</h3>
              <p className="text-gray-600 text-sm mb-2">여행 계획 및 공유를 위한 맞춤형 추천 서비스</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">Angular</span>
                <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">Express.js</span>
                <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">MySQL</span>
              </div>
              <p className="text-gray-500 text-xs">📅 2024년 8월 30일 → 2024년 9월 27일</p>
              <a href="#" className="inline-block mt-4 bg-myPalette-500 hover:bg-myPalette-700 text-white font-bold py-2 px-4 rounded-full text-sm transition-colors">
                웹 사이트 개발
              </a>
            </div>
          </motion.div>

          {/* Project 5: New Project (추가된 프로젝트) */}
          <motion.div
            className="bg-white rounded-lg shadow-xl overflow-hidden mx-auto md:mx-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <img
              src="https://via.placeholder.com/500x300/dddddd/333333?Text=New+Project"
              alt="New Project"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">새로운 프로젝트</h3>
              <p className="text-gray-600 text-sm mb-2">새롭게 추가될 프로젝트 설명</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">기술 1</span>
                <span className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold">기술 2</span>
              </div>
              <p className="text-gray-500 text-xs">📅 진행 예정</p>
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