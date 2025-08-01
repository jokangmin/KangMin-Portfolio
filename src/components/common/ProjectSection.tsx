// src/components/common/ProjectSection.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal.tsx';
import { projects, type ProjectData } from '../../data/projects.ts';

// React.memo로 컴포넌트를 감쌉니다.
const ProjectSection: React.FC = React.memo(() => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null); // 타입 지정

  // "상세 보기" 버튼 클릭 핸들러
  const handleOpenModal = (project: ProjectData) => { // 타입 지정
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // 모달 닫기 핸들러
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null); // 모달 닫을 때 선택된 프로젝트 초기화
  };

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-myPalette-100 text-myPalette-700 rounded-full px-2 py-1 text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-gray-500 text-xs">📅 {project.period}</p>
                <button
                  onClick={() => handleOpenModal(project)}
                  className="inline-block mt-4 bg-myPalette-500 hover:bg-myPalette-700 text-white font-bold py-2 px-4 rounded-full text-sm transition-colors"
                >
                  상세 보기
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </section>
  );
});

export default ProjectSection;