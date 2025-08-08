import React, { useState, useEffect } from 'react';
import {
  FaTimes,
  FaCode,
  FaBug,
  FaUsers,
  FaLaptopCode,
  FaHandsHelping,
  FaRegLightbulb,
  FaChevronDown,
  FaChevronRight,
  FaBookOpen,
  FaCog
} from 'react-icons/fa';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    period: string;
    skills: string[];
    imageUrl: string;
    numberOfDevelopers?: number;
    githubLink?: string;
    deployLink?: string;
    detailedDescription?: string;
    features?: string[];
    performanceOptimizations?: string[];
    troubleShooting?: { problem: string; solution: string }[];
    contribution?: string[];
    teamReview?: string;
    screenshots?: { src: string; alt: string }[];
  };
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const [openFeatures, setOpenFeatures] = useState<number[]>([]);
  const [openOptimizations, setOpenOptimizations] = useState<number[]>(
    project.performanceOptimizations ? [...Array(project.performanceOptimizations.length).keys()] : []
  );
  const [openTroubleShooting, setOpenTroubleShooting] = useState<number[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen || selectedImage ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, selectedImage]);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (selectedImage) {
          setSelectedImage(null);
        } else {
          onClose();
        }
      }
    };
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose, selectedImage]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      if (selectedImage) {
        setSelectedImage(null);
      } else {
        onClose();
      }
    }
  };

  // 아코디언 토글 핸들러
  const toggleAccordion = (index: number, type: 'features' | 'optimizations' | 'troubleShooting') => {
    if (type === 'features') {
      setOpenFeatures((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else if (type === 'optimizations') {
      setOpenOptimizations((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else if (type === 'troubleShooting') {
      setOpenTroubleShooting((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    }
  };

  if (!isOpen) return null; // 모달이 닫힌 상태면 렌더링하지 않음

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-16 bg-black/30 backdrop-blur-sm"
        onClick={handleOverlayClick}
      >
        {/* Modal Box */}
        <div
          className="relative bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh]
                     flex flex-col text-gray-800 border border-gray-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 닫기 버튼 */}
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl p-1 rounded-full transition-colors z-10"
          >
            <FaTimes />
          </button>

          {/* 상단 고정 콘텐츠 영역 (제목, 기간, 기술 스택, 외부 링크) */}
          <div className="relative p-6 md:p-8 pb-4 border-b border-gray-200">
            <div className="flex items-baseline mb-2">
              <h2 className="text-2xl phone:text-3xl font-bold text-slate-900 mr-2">
                {project.title}
              </h2>
              {project.numberOfDevelopers && (
                <p className="text-sm phone:text-base text-gray-500 font-medium">
                  (개발 인원 : {project.numberOfDevelopers}인)
                </p>
              )}
            </div>
            <p className="text-gray-600 text-base mb-4">{project.description}</p>

            <div className="flex justify-between items-center mb-4">
              <p className="text-xs phone:text-sm text-gray-500 font-medium">📅 기간: {project.period}</p>
              <div className="flex space-x-2">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center gap-1"
                  >
                    GitHub
                  </a>
                )}
                {project.deployLink && (
                  <a
                    href={project.deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center gap-1"
                  >
                    배포 링크
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* 스크롤 가능한 콘텐츠 영역 */}
          <div className="overflow-y-auto flex-grow px-6 md:px-8 pt-4 pb-6 md:pb-8">
            {/* 사용 기술 및 언어 */}
            <section className="mb-6 bg-myDoodlePalette-bg p-4 rounded-lg">
              <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover" />

              <h3 className="text-xl font-bold text-myPalette-700 mb-3 pt-6 flex items-center gap-2">
                <FaCode className="text-myPalette-500" /> 사용 기술 및 언어
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-myPalette-100 text-myPalette-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {project.detailedDescription && (
              <section className="mb-6">
                <h3 className="text-xl font-bold text-myPalette-700 flex items-center gap-2">
                  <FaRegLightbulb className="text-myPalette-500" /> 상세 설명
                </h3>
                <p className="text-gray-800 leading-relaxed whitespace-pre-line">{project.detailedDescription}</p>
              </section>
            )}

            {/* 주요 기능 및 특징 섹션 (아코디언) */}
            {Array.isArray(project.features) && project.features.length > 0 && (
              <section className="mb-6">
                <h3 className="text-xl font-bold text-myPalette-700 mb-3 flex items-center gap-2">
                  <FaBookOpen className="text-myPalette-500" /> 주요 기능 및 특징
                </h3>
                <div className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg">
                      <button
                        className="flex justify-between items-center w-full p-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                        onClick={() => toggleAccordion(idx, 'features')}
                      >
                        <span>{feature.split(':')[0]}</span>
                        {openFeatures.includes(idx) ? <FaChevronDown /> : <FaChevronRight />}
                      </button>
                      {openFeatures.includes(idx) && (
                        <div className="p-4 pt-0 text-gray-700">
                          {feature.split(':')[1] ? feature.split(':')[1].trim() : ''}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 성능 최적화 섹션 (아코디언) */}
            {Array.isArray(project.performanceOptimizations) && project.performanceOptimizations.length > 0 && (
              <section className="mb-6">
                <h3 className="text-xl font-bold text-myPalette-700 mb-3 flex items-center gap-2">
                  <FaCog className="text-myPalette-500" /> 성능 최적화
                </h3>
                <div className="space-y-2">
                  {project.performanceOptimizations.map((optimization, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg">
                      <button
                        className="flex justify-between items-center w-full p-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                        onClick={() => toggleAccordion(idx, 'optimizations')}
                      >
                        <span>{optimization.split(':')[0]}</span>
                        {openOptimizations.includes(idx) ? <FaChevronDown /> : <FaChevronRight />}
                      </button>
                      {openOptimizations.includes(idx) && (
                        <div className="p-4 pt-0 text-gray-700">
                          {optimization.split(':')[1] ? optimization.split(':')[1].trim() : ''}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {Array.isArray(project.contribution) && project.contribution.length > 0 && (
              <section className="mb-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-myPalette-700 mb-3 flex items-center gap-2">
                  <FaHandsHelping className="text-myPalette-500" /> 작업 기여도
                </h3>
                <ul className="list-disc list-inside text-gray-800 space-y-1 ml-4">
                  {project.contribution.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Trouble Shooting 섹션 (아코디언) */}
            {Array.isArray(project.troubleShooting) && project.troubleShooting.length > 0 && (
              <section className="mb-6">
                <h3 className="text-xl font-bold text-myPalette-700 mb-3 flex items-center gap-2">
                  <FaBug className="text-myPalette-500" /> Trouble Shooting
                </h3>
                <div className="space-y-2">
                  {project.troubleShooting.map((ts, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg">
                      <button
                        className="flex justify-between items-center w-full p-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                        onClick={() => toggleAccordion(idx, 'troubleShooting')}
                      >
                        <span>[문제점] {ts.problem}</span>
                        {openTroubleShooting.includes(idx) ? <FaChevronDown /> : <FaChevronRight />}
                      </button>
                      {openTroubleShooting.includes(idx) && (
                        <div className="p-4 pt-0 text-gray-700">
                          <p className="font-semibold text-blue-600">[해결] {ts.solution}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {Array.isArray(project.screenshots) && project.screenshots.length > 0 && (
              <section className="mb-6">
                <h3 className="text-xl font-bold text-myPalette-700 mb-3 flex items-center gap-2">
                  <FaLaptopCode className="text-myPalette-500" /> 작업 화면
                </h3>
                <p className="text-sm text-gray-600 mb-4">(이미지를 클릭하면 크게 볼 수 있어요.)</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.screenshots.map((shot, idx) => (
                    <div key={idx} className="relative group aspect-video">
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        className="absolute inset-0 w-full h-full rounded-lg border border-gray-200 shadow-md object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                        onClick={() => setSelectedImage(shot.src)}
                      />
                      <p className="text-center text-gray-600 text-sm mt-2">{shot.alt}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.teamReview && (
              <section className="mb-2 bg-blue-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-myPalette-700 mb-3 flex items-center gap-2">
                  <FaUsers className="text-myPalette-500" /> 팀원 리뷰
                </h3>
                <p className="italic text-gray-700 leading-relaxed">
                  “{project.teamReview}”
                </p>
              </section>
            )}
          </div>
        </div>
      </div>

      {/* 이미지 확대 모달 */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged Project Screenshot"
            className="max-w-[90vw] max-h-[90vh] object-contain" // cursor-pointer 제거
            onClick={(e) => e.stopPropagation()}
          />
          {/* 이미지 확대 모달 닫기 버튼 */}
          <button
            onClick={() => setSelectedImage(null)}
            aria-label="Close Image"
            className="absolute top-5 left-10 text-amber-400 hover:text-gray-800 text-2xl p-1 rounded-full transition-colors z-10"
          >
            <FaTimes />
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectModal;