import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async'; 
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

  // JSON-LD 구조화된 데이터 정의
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "조강민",
    "url": "https://kang-min-portfolio-zeta.vercel.app/",
    "image": "https://kang-min-portfolio-zeta.vercel.app/my_imo.webp",
    "jobTitle": "풀스택 개발자",
    "sameAs": [
      "https://github.com/jokangmin",
      "https://velog.io/@jomin357/posts"
    ]
  };

  return (
    <main className="relative w-full min-h-screen overflow-hidden text-slate-950 flex flex-col">

      {/* SEO: 메타 태그와 JSON-LD 스크립트 삽입 */}
      <Helmet>
        <title>조강민 | 풀스택 개발자 웹 포트폴리오</title>
        <meta name="description" content="안녕하세요, AI 프로젝트 개발 및 서비스 배포까지 전 과정을 경험한 풀스택 개발자 조강민입니다. React, JavaScript, TypeScript, Spring Boot 등 기반의 다양한 프로젝트를 확인해보세요." />
        <meta name="keywords" content="프론트엔드, 백엔드, 개발자, 포트폴리오, 웹 포트폴리오, React, TypeScript, JavaScript, SpringBoot, 조강민" />
        <link rel="canonical" href="https://kang-min-portfolio-zeta.vercel.app/" />
        
        {/* Open Graph (소셜 미디어 공유 시 표시될 정보) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="조강민 | 풀스택 개발자 웹 포트폴리오" />
        <meta property="og:description" content="안녕하세요, AI 프로젝트 개발 및 서비스 배포까지 전 과정을 경험한 풀스택 개발자 조강민입니다." />
        <meta property="og:image" content="https://kang-min-portfolio-zeta.vercel.app/my_imo.webp" />
        <meta property="og:url" content="https://kang-min-portfolio-zeta.vercel.app/" />

        {/* Twitter 카드 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="조강민 | 풀스택 개발자 웹 포트폴리오" />
        <meta name="twitter:description" content="안녕하세요, AI 프로젝트 개발 및 서비스 배포까지 전 과정을 경험한 풀스택 개발자 조강민입니다." />
        <meta name="twitter:image" content="https://kang-min-portfolio-zeta.vercel.app/my_imo.webp" />

        {/* JSON-LD 스크립트 삽입 */}
        <script type="application/ld+json">
          {JSON.stringify(personJsonLd)}
        </script>
      </Helmet>

      {/* 헤더 고정된 UI 요소들 */}
      <header>
        <HeaderFixedButtons />
        <FixedNavigation
          animationStarted={animationStarted}
          scrollToAboutMe={scrollToAboutMe}
          scrollToEducation={scrollToEducation}
          scrollToProject={scrollToProject}
        />
      </header>

      {/* 초기 애니메이션 배너 */}
      <IntroBanner animationStarted={animationStarted} setAnimationStarted={setAnimationStarted} />

      {/* 배경 이미지를 위한 div (스크롤 시 고정) - IntroBanner 아래로 이동하여 스크롤 활성화 시 보이도록 */}
      <div className="h-screen bg-center bg-cover bg-no-repeat bg-fixed z-10"></div>

      {/* 스크롤 업 버튼 */}
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
        <section id="about-me" aria-labelledby="about-me-heading">
          <AboutMeSection />
        </section>

        {/* Education & License 섹션 */}
        <section id="education-license" aria-labelledby="education-license-heading">
          <EducationLicenseSection />
        </section>

        {/* Project Section */}
        <section id="projects" aria-labelledby="projects-heading">
          <ProjectSection />
        </section>
      </Suspense>
    </main>
  );
};

export default HomePage;