import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';

interface AnimationContextType {
  animationStarted: boolean;
  setAnimationStarted: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToAboutMe: () => void;
  scrollToEducation: () => void;
  scrollToProject: () => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

interface AnimationProviderProps {
  children: ReactNode;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
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

  // 스크롤 함수들 (useCallback으로 메모이제이션하여 불필요한 리렌더링 방지)
  const scrollToSection = useCallback((id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToAboutMe = useCallback(() => scrollToSection('about-me-section'), [scrollToSection]);
  const scrollToEducation = useCallback(() => scrollToSection('education-section'), [scrollToSection]);
  const scrollToProject = useCallback(() => scrollToSection('project-section'), [scrollToSection]);

  const contextValue = {
    animationStarted,
    setAnimationStarted,
    scrollToAboutMe,
    scrollToEducation,
    scrollToProject,
  };

  return (
    <AnimationContext.Provider value={contextValue}>
      {children}
    </AnimationContext.Provider>
  );
};

// Context를 편리하게 사용할 수 있는 커스텀 훅
export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};