// src/data/projects.ts
import portfolio_project_img from '../assets/project1.webp';
import interview_talk_project_img from '../assets/project2.webp';
import moivo_project_img from '../assets/project3.webp';
import book_project_img from '../assets/project4.webp';
import odiga_project_img from '../assets/project5.webp';

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  period: string;
  skills: string[];
  imageUrl: string;
  numberOfDevelopers?: number;
  githubLink?: string;
  deployLink?: string;
  detailedDescription?: string;
  features?: string[]; // <<-- 주요 기능 및 특징 필드 추가
  performanceOptimizations?: string[]; // <<-- 성능 최적화 필드 추가
  troubleShooting?: { problem: string; solution: string }[];
  contribution?: string[];
  teamReview?: string;
  screenshots?: { src: string; alt: string }[];
}

export const projects: ProjectData[] = [
  {
    id: 1,
    title: '포트폴리오 프로젝트',
    description: '나만의 웹 사이트 포트폴리오',
    period: '2025년 7월 19일 - 진행중',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Router Dom', 'React Icons'],
    imageUrl: portfolio_project_img,
    numberOfDevelopers: 1, // 개인 프로젝트
    detailedDescription: `
      이 프로젝트는 저의 기술 스택과 작업물을 소개하는 개인 포트폴리오 웹사이트입니다.
      기획부터 디자인까지 제가 직접 작업했으며, 노션이나 템플릿 소스 대신 저만의 개성을 담은 사이트를 만들고 싶어 제작하게 되었습니다.
      주요 색상인 파스텔톤들을 활용해 전체적으로 심플하고 귀여운 느낌을 주었으며,
      사용자 경험(UX)과 내용 구성을 최우선으로 고려하며 제작하고 있습니다.
      현재도 피드백을 수용하고 지속적으로 개선하며 고도화 작업을 진행할 예정입니다.
    `,
    features: [
      '인터랙티브한 환영 페이지: 초기 로드 시 배경은 고정되어 있으며, 로딩 및 페이지 클릭 시 애니메이션 이미지들이 등장합니다. 전체적으로 귀여운 스타일, 사용자 클릭에 반응하는 애니메이션 배경 이미지와 텍스트, 그리고 시각적으로 흥미로운 첫인상을 제공합니다.',
      '직관적인 탐색: GitHub, Velog, 이메일 등 외부 링크에 쉽게 접근할 수 있는 고정된 상단 버튼과, 페이지 어디에서든 최상단으로 이동할 수 있는 "위로 가기" 버튼을 제공합니다.',
      '호버 인터랙션: 페이지 위치한 캐릭터들을 통해 목차 이동을 제공 ("Project" 아이콘(여우 이미지)에 마우스를 올리면 `Project` 텍스트가 나타나고 아이콘이 살짝 움직이는 재밌는 인터랙션을 제공합니다.)',
      '반응형 디자인: 다양한 화면 크기에서도 최적의 사용자 경험을 제공하도록 설계되었습니다.',
      '부드러운 페이지 전환: `react-router-dom`을 사용하여 싱글 페이지 애플리케이션(SPA) 내에서 매끄러운 페이지 전환을 구현했습니다. 이를 통해 사용자는 페이지 전체가 새로고침되는 느낌 없이 빠르게 다른 섹션으로 이동할 수 있습니다.',
      '모듈화된 프로젝트 정보: 프로젝트 데이터는 별도의 `projects.ts` 파일로 분리하여 관리하고 있습니다. 이를 통해 컴포넌트의 가독성을 높이고 데이터의 유지보수성을 향상시켰습니다.'
    ],
    performanceOptimizations: [
      '컴포넌트 리렌더링 최적화: `React.memo`와 `useCallback`, `useMemo` 훅을 활용하여 함수 컴포넌트의 불필요한 리렌더링을 방지하고, Context API를 효율적으로 사용하여 전역 상태 변경으로 인한 성능 저하를 최소화했습니다.',
      '이미지 최적화: 차세대 이미지 포맷 변환 (WebP), 지연 로딩 (Lazy Loading), 반응형 이미지 (`srcset`)를 적용하여 파일 크기를 줄이고 로딩 속도를 개선했습니다.',
      '코드 스플리팅 (Lazy Loading): `React.lazy`를 이용하여 초기 화면에 바로 보이지 않는 섹션의 코드를 필요할 때만 로드하도록 분할하여 초기 로딩 시간을 단축했습니다.'
    ],
    contribution: [
      '포트폴리오 제작 의도를 파악하고 기획 및 구체화 작업',
      '자기 소개, 경력, 프로젝트, 교육 등 간결하면서도 효과적인 순서로 배치',
      '사용자들에게 원하는 정보를 쉽게 전달할 수 있도록 UI/UX 고려',
      'PC, Mobile 반응형 UI/UX 디자인',
      '웹 표준 / 접근성 고려 및 인터랙션 작업 (Framer Motion 활용)',
      'React Router Dom을 이용한 SPA 라우팅 구현 및 페이지 전환 최적화',
      'Context API를 활용한 전역 상태 관리 및 리렌더링 최적화'
    ],
    troubleShooting: [
      {
        problem: '초기 화면이 시선 집중되지 않음',
        solution: 'framer-motion 라이브러리를 활용하여 매끄러운 애니메이션 효과를 구현하고 배경 이미지를 추가하여 사용자의 시선을 효과적으로 이끌어냄.'
      },
      {
        problem: '지속적인 개선 중 사용자 편의성 저하',
        solution: 'Tab Menu를 추가하여 원하는 프로젝트 리스트를 쉽게 찾을 수 있도록 수정하고, [About Me] 섹션을 Interview 형식으로 변경하여 정보 전달 용이성 개선.'
      },
      {
        problem: '모달 창 스크롤 및 이미지 표시 문제',
        solution: '모달이 열릴 때 `body` 스크롤을 방지하고 닫힐 때 복원하도록 `useEffect`를 사용했습니다. 또한, 메인 이미지를 모달 상단에 크게 배치하고, 다른 스크린샷들은 별도의 섹션에서 그리드 형태로 보여주도록 구조를 재조정하여 시각적 통일성과 사용자 경험을 개선했습니다.'
      },
      {
        problem: '데이터 관리의 복잡성',
        solution: '프로젝트 데이터를 `src/data/projects.ts` 파일로 분리하고 `ProjectData` 인터페이스를 정의하여 타입 안정성과 유지보수성을 향상시켰습니다.'
      }
    ],
    screenshots: [
      { src: portfolio_project_img, alt: '메인 화면' },
      { src: 'https://via.placeholder.com/800x600/fedcba/ffffff?text=소개+화면+이미지', alt: '나에 대한 소개 화면' }, // 실제 스크린샷 이미지로 교체 필요
    ],
    githubLink: 'https://github.com/jokangmin/KangMin-Portfolio',
    deployLink: 'https://your-portfolio.com', // 실제 배포 링크가 있다면 업데이트
  },
  {
    id: 2,
    title: 'TalkTalk Ai Interview 프로젝트',
    description: 'AI 면접 시뮬레이션 웹 애플리케이션 개발',
    period: '2025년 2월 15일 - 2025년 6월 15일 (리팩토링)',
    skills: ['React', 'Spring Boot / Java', 'OpenAI API', 'JavaScript', 'MySQL', 'Node.js'],
    imageUrl: interview_talk_project_img,
    numberOfDevelopers: 4, // 예시
    detailedDescription: `AI 면접 시뮬레이션 웹 애플리케이션은 사용자가 실제 면접 환경과 유사한 조건에서 AI와의 대화를 통해 면접 연습을 할 수 있도록 돕는 서비스입니다. 주요 기능으로는 음성 인식 기반의 질문 응답, AI 피드백 제공, 면접 데이터 분석 등이 있습니다. 현재 개발 마무리 단계이며, 사용자 친화적인 UI와 강력한 AI 피드백 시스템을 구축하는 데 중점을 두었습니다.`,
    githubLink: 'https://github.com/your-repo/talktalk-ai',
    screenshots: [
      { src: 'https://via.placeholder.com/800x600/aaddff/ffffff?text=AI+면접+시뮬레이션+화면', alt: 'AI 면접 시뮬레이션' },
    ],
    contribution: [
      '프론트엔드 React 컴포넌트 설계 및 개발',
      '백엔드 Spring Boot API 엔드포인트 구축 및 DB 연동',
      'OpenAI API 연동 및 인터페이스 구현'
    ],
    troubleShooting: [
      {
        problem: '음성 인식 정확도 및 반응 속도 문제',
        solution: 'Web Speech API 및 외부 STT 서비스 연동 최적화, 비동기 처리 개선.'
      }
    ],
  },
  {
    id: 3,
    title: 'Moivo 프로젝트',
    description: '모바일 기반의 영화 정보 및 예매 플랫폼 개발',
    period: '2024년 11월 15일 - 2025년 1월 3일',
    skills: ['React / JS', 'Node.js', 'Spring Boot / Java', 'JWT', 'MySQL'],
    imageUrl: moivo_project_img,
    numberOfDevelopers: 3, // 예시
    detailedDescription: `Moivo 프로젝트는 모바일 환경에 최적화된 영화 정보 및 예매 플랫폼입니다. React Native(혹은 React로 모바일 웹)를 사용하여 개발했으며, Node.js와 Spring Boot를 백엔드로 활용했습니다. 실시간 영화 정보, 상영 시간표 조회, 간편 예매 기능 등을 제공합니다.`,
    githubLink: 'https://github.com/your-repo/moivo',
    screenshots: [
      { src: 'https://via.placeholder.com/800x600/bbddff/ffffff?text=영화+목록+화면', alt: '영화 목록' },
    ],
    teamReview: '조강민님은 복잡한 문제 해결에 탁월하며, 팀원들과의 소통을 통해 프로젝트의 완성도를 높이는 데 크게 기여했습니다.'
  },
  {
    id: 4,
    title: 'BooBooBook 프로젝트',
    description: '그림책 기반의 사용자 참여형 스토리텔링 플랫폼',
    period: '2024년 9월 30일 - 2024년 10월 21일',
    skills: ['React / JS', 'Spring / Java', 'JQuery', 'ORACLE'],
    imageUrl: book_project_img,
    numberOfDevelopers: 5, // 예시
    detailedDescription: `BooBooBook은 사용자들이 그림책을 직접 만들고, 스토리를 이어가는 참여형 플랫폼입니다. React를 사용하여 직관적이고 반응성이 뛰어난 프론트엔드를 구축했으며, Spring과 Oracle을 활용하여 백엔드 로직과 데이터 관리를 처리했습니다.`,
    githubLink: 'https://github.com/your-repo/booboo-book',
    screenshots: [
      { src: 'https://via.placeholder.com/800x600/ccddff/ffffff?text=그림책+만들기+화면', alt: '그림책 만들기' },
    ],
  },
  {
    id: 5,
    title: 'ODIGA 프로젝트',
    description: '여행 계획 및 공유를 위한 맞춤형 추천 서비스',
    period: '2024년 8월 30일 - 2024년 9월 27일',
    skills: ['React / JS', 'Spring / Java', 'MyBatis', 'ORACLE'],
    imageUrl: odiga_project_img,
    numberOfDevelopers: 2, // 예시
    detailedDescription: `ODIGA 프로젝트는 사용자의 여행 취향과 과거 기록을 기반으로 맞춤형 여행 코스를 추천하고, 이를 다른 사용자들과 공유할 수 있는 서비스입니다. React를 사용하여 대규모 애플리케이션에 적합한 구조를 설계하고, Spring과 Oracle로 안정적인 백엔드 시스템을 구축했습니다.`,
    githubLink: 'https://github.com/your-repo/odiga',
    screenshots: [
      { src: 'https://via.placeholder.com/800x600/ddeeff/ffffff?text=여행+계획+화면', alt: '여행 계획' },
    ],
    teamReview: '조강민님은 분석적 사고로 어려운 기술적 난제를 해결하고, 팀의 생산성을 높이는 데 크게 기여했습니다.'
  },
];