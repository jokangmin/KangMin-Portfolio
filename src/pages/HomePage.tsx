import React, { useEffect, useState } from 'react';
import HeaderFixedButtons from '../components/layout/HeaderFixedButtons.tsx';
import FixedNavigation from '../components/layout/FixedNavigation.tsx';
import ScrollToTopButton from '../components/layout/ScrollToTopButton.tsx';
import IntroBanner from '../components/common/IntroBanner.tsx';
import PenDoodles from '../components/common/PenDoodles.tsx';
import MainContentOverlay from '../components/common/MainContentOverlay.tsx';
import AboutMeSection from '../components/common/AboutMeSection.tsx';
import EducationLicenseSection from '../components/common/EducationLicenseSection.tsx';
import ProjectSection from '../components/common/ProjectSection.tsx';

const HomePage: React.FC = () => {
  const [animationStarted, setAnimationStarted] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!animationStarted) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [animationStarted]);

  // 스크롤 함수들
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
    <div className="relative w-full min-h-screen overflow-hidden bg-myPalette-300 text-slate-950 flex flex-col">
      {/* 초기 애니메이션 배너 */}
      <IntroBanner animationStarted={animationStarted} setAnimationStarted={setAnimationStarted} />

      {/* 배경 이미지를 위한 div (스크롤 시 고정) - IntroBanner 아래로 이동하여 스크롤 활성화 시 보이도록 */}
      <div className="h-screen bg-center bg-cover bg-no-repeat bg-fixed bg-[url('../src/assets/banner2.png')] z-10"></div>

      {/* 고정된 UI 요소들 */}
      <HeaderFixedButtons />
      <FixedNavigation
        animationStarted={animationStarted}
        scrollToAboutMe={scrollToAboutMe}
        scrollToEducation={scrollToEducation}
        scrollToProject={scrollToProject}
      />
      <ScrollToTopButton />

      {/* 펜 낙서 이미지 */}
      <PenDoodles animationStarted={animationStarted} />

      {/* 메인 콘텐츠 오버레이 (텍스트, 프로필, 동물 아이콘) */}
      <MainContentOverlay
        animationStarted={animationStarted}
        scrollToAboutMe={scrollToAboutMe}
        scrollToEducation={scrollToEducation}
        scrollToProject={scrollToProject}
      />

      {/* About Me 섹션 */}
      <AboutMeSection />

      {/* Education & License 섹션 */}
      <EducationLicenseSection />

      {/* Project Section */}
      <ProjectSection /> 
    </div>
  );
};

export default HomePage;