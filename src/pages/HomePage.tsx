import React, { Suspense } from 'react';
import HeaderFixedButtons from '../components/layout/HeaderFixedButtons.tsx';
import FixedNavigation from '../components/layout/FixedNavigation.tsx';
import ScrollToTopButton from '../components/layout/ScrollToTopButton.tsx';
import IntroBanner from '../components/common/IntroBanner.tsx';
import PenDoodles from '../components/common/PenDoodles.tsx';
import MainContentOverlay from '../components/common/MainContentOverlay.tsx';

import { useAnimation } from '../context/AnimationContext.tsx';

const AboutMeSection = React.lazy(() => import('../components/common/AboutMeSection.tsx'));
const EducationLicenseSection = React.lazy(() => import('../components/common/EducationLicenseSection.tsx'));
const ProjectSection = React.lazy(() => import('../components/common/ProjectSection.tsx'));

const HomePage: React.FC = () => {
  const { animationStarted, setAnimationStarted, scrollToAboutMe, scrollToEducation, scrollToProject } = useAnimation();

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-slate-950 flex flex-col">
      {/* 초기 애니메이션 배너 */}
      <IntroBanner animationStarted={animationStarted} setAnimationStarted={setAnimationStarted} />

      {/* 배경 이미지를 위한 div (스크롤 시 고정) - IntroBanner 아래로 이동하여 스크롤 활성화 시 보이도록 */}
      <div className="h-screen bg-center bg-cover bg-no-repeat bg-fixed z-10"></div>

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

      {/* 코드 스플리팅 적용 */}
      <Suspense fallback={
        <div className="flex justify-center items-center h-48 text-gray-600">
          Loading sections...
        </div>
      }>
        {/* About Me 섹션 */}
        <AboutMeSection />

        {/* Education & License 섹션 */}
        <EducationLicenseSection />

        {/* Project Section */}
        <ProjectSection />
      </Suspense>
    </div>
  );
};

export default HomePage;