import { motion } from 'framer-motion';
import type React from 'react';

const EducationLicenseSection: React.FC = () => {
  return (
    <section
      id="education-section"
      className="relative z-40 h-screen flex items-center justify-center bg-center bg-cover bg-no-repeat bg-fixed py-10 px-4"
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[center_45%] bg-no-repeat bg-[url('../src/assets/book.png')]"></div>

      <div className="relative z-10 w-[80%] h-[85%] max-w-7xl mx-auto p-4 sm:p-8 backdrop-blur-sm rounded-lg text-slate-950 flex flex-col md:flex-row gap-8">
        {/* LICENSE 섹션 (왼쪽) */}
        <motion.div
          className="flex-1 p-6 bg-myPalette-50 rounded-lg flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold text-myPalette-700 mb-6 border-b-2 border-myPalette-500 pb-2">
            LICENSE
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
  );
};

export default EducationLicenseSection;