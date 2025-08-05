// src/data/projects.ts
//project 1
import portfolio_project_img1 from '../assets/project1.webp';
import portfolio_project_img2 from '../assets/main_screen.webp';
import portfolio_project_img3 from '../assets/about me.webp';
import portfolio_project_img4 from '../assets/education.webp';
import portfolio_project_img5 from '../assets/project_screen.webp';
//project 2
import interview_talk_project_img1 from '../assets/project2.webp';
import interview_talk_project_img2 from '../assets/interview_main.webp';
import interview_talk_project_img3 from '../assets/interview_interview.webp';
import interview_talk_project_img4 from '../assets/interview_interview2.webp';
//project 3
import moivo_project_img from '../assets/project3.webp';
//project 4
import book_project_img from '../assets/project4.webp';
//project 5
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
    imageUrl: portfolio_project_img1,
    numberOfDevelopers: 1,
    detailedDescription: `
      이 프로젝트는 저의 기술 스택과 작업물을 소개하는 개인 포트폴리오 웹사이트입니다.
      기획부터 디자인까지 제가 직접 작업했으며, 노션이나 템플릿 소스 대신 저만의 개성을 담은 사이트를 만들고 싶어 제작하게 되었습니다.
      두들 스타일과 주요 색상인 파스텔톤들을 활용해 전체적으로 심플하고 차분한 느낌을 주었으며,
      사용자 경험(UX)과 내용 구성을 최우선으로 고려하며 제작하고 있습니다.
      현재도 피드백을 수용하고 지속적으로 개선하며 고도화 작업을 진행할 예정입니다.
    `,
    features: [
      '인터랙티브한 환영 페이지: 초기 로드 시 배경은 고정되어 있으며, 로딩 및 페이지 클릭 시 애니메이션 이미지들이 등장합니다. 전체적으로 귀여운 스타일, 사용자 클릭에 반응하는 애니메이션 배경 이미지와 텍스트, 그리고 시각적으로 흥미로운 첫인상을 제공합니다.',
      '직관적인 탐색: GitHub, Velog, 이메일 등 외부 링크에 쉽게 접근할 수 있는 고정된 상단 버튼과, 페이지 어디에서든 최상단으로 이동할 수 있는 "위로 가기" 버튼을 제공합니다.',
      '호버 인터랙션: 페이지 위치한 캐릭터들을 통해 목차 이동을 제공',
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
      { src: portfolio_project_img1, alt: '섬네일 화면' },
      { src: portfolio_project_img2, alt: 'main screen' },
      { src: portfolio_project_img3, alt: 'about me screen' },
      { src: portfolio_project_img4, alt: 'education & license screen' },
      { src: portfolio_project_img5, alt: 'project screen' },
    ],
    githubLink: 'https://github.com/jokangmin/KangMin-Portfolio',
    deployLink: 'https://your-portfolio.com',
  },
  {
    id: 2,
    title: 'TalkTalk Ai Interview 프로젝트',
    description: 'AI 면접 시뮬레이션 웹 애플리케이션 개발',
    period: '2025년 2월 15일 - 리팩토링 진행중',
    skills: ['React / js', 'Spring Boot / Java', 'OpenAI API', 'MySQL', 'Node.js', 'AWS'],
    imageUrl: interview_talk_project_img1,
    numberOfDevelopers: 1,
    detailedDescription: `AI 면접 코치 웹은 사용자가 실제 면접 환경과 유사한 조건에서 AI와의 대화를 통해 면접 연습을 할 수 있도록 돕는 서비스입니다. 주요 기능으로는 상황에 맞는 질문 생성 및 AI 피드백 제공, 면접 데이터 분석 등이 있습니다. 사용자 친화적인 UI와 AI 피드백 시스템을 구축하는 데 중점을 두었습니다.`,
    githubLink: 'https://github.com/jokangmin/TalkTalkInterview_Ai',
    deployLink: 'https://www.ai-interview.store/',
    screenshots: [
      { src: interview_talk_project_img1, alt: '메인 페이지 1' },
      { src: interview_talk_project_img2, alt: '메인 페이지 2' },
      { src: interview_talk_project_img3, alt: 'interview 페이지 1' },
      { src: interview_talk_project_img4, alt: 'interview 페이지 2' },
    ],
    features: [
      '직종 및 유형별 맞춤형 면접 질문 제공: 사용자가 선택한 직종과 면접 유형에 맞춰 OpenAI API를 활용하여 최적화된 면접 질문을 생성합니다. 신입부터 경력자까지, 수준별로 맞춤화된 질문을 제공하여 실전 대비 능력을 극대화합니다.',
      '실시간 AI 평가 및 피드백: 사용자가 제출한 텍스트 답변을 AI가 즉시 분석하여 논리성, 내용의 적합성 등을 평가합니다. `면접관의 관점`에서 구체적인 개선점을 제시하여 답변의 질을 향상시킬 수 있도록 돕습니다.',
      '면접 질문 및 피드백 저장: 모든 면접 연습 기록(질문, 답변, AI 피드백)을 체계적으로 저장합니다. 이 기능은 사용자가 자신의 발전 과정을 확인하고 취약한 부분을 효율적으로 복습할 수 있는 핵심적인 학습 도구입니다.',
      '나만의 면접 질문 카드: 사용자는 연습 중 중요하다고 생각하는 질문들을 `즐겨찾기`에 추가할 수 있습니다. 개인화된 질문 카드를 통해 핵심 질문만 모아 집중적으로 연습하고, 불필요한 질문은 손쉽게 삭제할 수 있습니다.',
      '안전한 보안: JWT(JSON Web Token) 기반 인증, Spring Security를 통한 접근 제어, 그리고 BCrypt 해싱을 이용한 비밀번호 암호화로 사용자 데이터를 안전하게 보호합니다. 최고 수준의 보안 기술을 적용하여 신뢰할 수 있는 서비스를 제공합니다.'
    ],
    performanceOptimizations: [
      '라우터 최적화: `react-router-dom`을 사용하여 싱글 페이지 애플리케이션(SPA) 라우팅을 구현했습니다. 이를 통해 페이지 이동 시 전체 페이지를 다시 로드하지 않아도 되므로, 사용자에게 더 빠르고 매끄러운 페이지 전환 경험을 제공합니다.',
      '전역 상태 관리: 전역 상태를 관리하기 위해 Context API를 사용했습니다. 이를 통해 props drilling(컴포넌트 트리를 따라 데이터를 전달하는 과정)을 방지하고, 필요한 컴포넌트에서만 상태에 접근하도록 하여 불필요한 리렌더링을 최소화합니다.',
      '코드 리팩토링: 불필요한 반복문을 줄이거나, 알고리즘을 개선하여 코드의 효율성을 꾸준히 높이고 있습니다. 메모리 누수(Memory Leak)를 방지합니다.',
      '인덱싱(Indexing): 자주 조회되는 컬럼에 인덱스를 생성해 쿼리 속도를 높였습니다.',
    ],
    contribution: [
      '프론트엔드 React 컴포넌트 설계 및 개발',
      '백엔드 Spring Boot API 엔드포인트 구축 및 DB 연동',
      'OpenAI API 연동 및 인터페이스 구현',
      'JWT(JSON Web Token) 기반 인증 시스템을 설계하고 구현',
      'Spring Security를 도입하여 사용자 인증, 권한 관리, 데이터 접근 제어를 관리',
      '데이터베이스 인덱싱 및 효율적인 쿼리 최적화를 통해 API 응답 속도를 개선',
      'RESTful API를 설계하고 개발, CORS 설정을 통해 프론트엔드와의 안전한 교차 출처 통신 환경을 구축',

    ],
    troubleShooting: [
      {
        problem: '프론트와 백엔드를 배포하고 이용중, 혼합컨텐츠 차단 정책 에러 이슈',
        solution: '프론트엔드 쪽에서는 https로 처리하는 반면, 백엔드로 보내질 때 http 주소를 통해 보내지는게 보안상의 문제로 EC2 서버에 SSL 인증서(Let’s Encrypt 등)를 적용'
      },
      {
        problem: '질문-답변-피드백 흐름에서 적절한 AI temperature 수치 조정 이슈',
        solution: '기술적 설명보다는 정서적 위로 등 전반적으로 칭찬 위주, 내용 반복이 있어 temperature 및 top_p, max_tokens, presence_penalty 수정'
      },
      {
        problem: 'AWS RDS MySQL 데이터베이스에 연결하지 못하고 Communications link failure 오류를 발생시키는 상황',
        solution: 'GitHub Actions Secrets (EC2_HOST) 수정, EC2 인스턴스 재부팅, DB 비밀번호 재설정 및 재배포'
      },
      {
        problem: '질문 불러오기 POST 403 (Forbidden) 및 GET 401 (Unauthorized) 에러',
        solution: 'JWT 인증 필터 추가 후, 세션 기반으로 모두 처리되고있던 코드를 JWT 기반 인증으로 리팩토링'
      },
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