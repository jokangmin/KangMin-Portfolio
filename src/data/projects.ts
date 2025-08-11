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
import interview_talk_project_img5 from '../assets/interview_my.webp';
import interview_talk_project_img6 from '../assets/System.webp';
//project 3
import moivo_project_img from '../assets/project3.webp';
import moivo_project_img_system from '../assets/moivo_system.webp';
import moivo_project_img_erd from '../assets/moivo_erd.webp';
import moivo_project_gif_main from '../assets/moivo_main_web_point1.webp';
import moivo_project_gif_main2 from '../assets/moivo_main_point2.webp';
import moivo_project_today1 from '../assets/today1.webp';
import moivo_project_today2 from '../assets/today2.webp';
import moivo_project_mypage1 from '../assets/moivo2_1.webp';
import moivo_project_mypage2 from '../assets/moivo2_3.webp';
import moivo_project_mypage3 from '../assets/moivo2_2.webp';
import moivo_project_pay from '../assets/moivo2_4.webp';
import moivo_project_mail from '../assets/moivo2_7.webp';
import moivo_project_qna from '../assets/moivo2_5.webp';
import moivo_project_product1 from '../assets/moivo_product.webp';
import moivo_project_product2 from '../assets/moivo_product2.webp';
import moivo_project_admin from '../assets/moivo_admin.webp';
//project 4
import book_project_img from '../assets/project4.webp';
import book_project_gif from '../assets/booboobook_main.webp';
import book_project_gif2 from '../assets/booboobook_book detail.webp';
//project 5
import odiga_project_img from '../assets/project5.webp';
import odiga_project_img2 from '../assets/odiga2.webp';
import odiga_project_img3 from '../assets/odiga3.webp';

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
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Router Dom', 'React Icons', 'react-helmet-async'],
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
      '컴포넌트 리렌더링 최적화: 성능 최적화를 위해 `React.memo, useCallback, useMemo`를 사용하여 불필요한 리렌더링을 방지했습니다. 최적화 전에는 `LCP(Largest Contentful Paint)`가 3.2초였으나, 최적화 후 1.8초로 약 43% 개선되었습니다. 특히, 전역 상태 관리로 인한 성능 저하를 최소화하기 위해 Context API를 기능별로 분리하여 컴포넌트의 렌더링 범위를 제한했습니다. 이로써 `INP(Interaction to Next Paint)`도 350ms에서 120ms로 개선되어, 애플리케이션의 사용자 경험을 크게 향상시켰습니다.',
      '이미지 최적화: `차세대 이미지 포맷(WebP), 지연 로딩(Lazy Loading), 반응형 이미지(srcset)`를 적용하여 웹 성능을 최적화했습니다. 이를 통해 이미지 파일 크기를 50% 줄이고 초기 로딩 시 불필요한 리소스 요청을 방지했습니다. 결과적으로 이미지 리소스가 많은 페이지의 `LCP(Largest Contentful Paint)`를 1.8초에서 1.2초로 약 33% 개선하여 사용자 경험을 크게 향상시켰습니다.',
      '코드 스플리팅 (Lazy Loading): `React.lazy`와 `Suspense`를 활용한 코드 스플리팅을 적용하여 초기 로딩 시 필요한 코드만 다운로드하도록 구현했습니다. 이를 통해 초기 자바스크립트 번들 크기를 최대 40% 감소시켰습니다. 결과적으로 페이지 로딩 시간을 1.2초에서 0.8초로 약 33% 단축하여 사용자 경험을 크게 개선했습니다.',
      'SEO 최적화: `react-helmet-async` 라이브러리를 사용하여 동적으로 meta 태그와 시맨틱 태그 관리를 구현했고, alt 속성, h1 태그 하나 사용 등 SEO 친화적인 구조를 적용했습니다.',
    ],
    contribution: [
      '포트폴리오 제작 의도를 파악하고 기획 및 구체화 작업',
      '자기 소개, 경력, 프로젝트, 교육 등 간결하면서도 효과적인 순서로 배치',
      '사용자들에게 원하는 정보를 쉽게 전달할 수 있도록 UI/UX 고려',
      'PC, Mobile 반응형 UI/UX 디자인',
      '웹 표준 / 접근성 고려 및 인터랙션 작업 (Framer Motion 활용)',
      'React Router Dom을 이용한 SPA 라우팅 구현 및 페이지 전환 최적화',
      'Context API를 활용한 전역 상태 관리 및 리렌더링 최적화',
      '`react-helmet-async`를 활용하여 SEO 최적화 및 동적 meta 태그 관리 구현',
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
    detailedDescription: `
    AI 면접 코치 웹은 사용자가 실제 면접 환경과 유사한 조건에서 AI와의 대화를 통해 면접 연습을 할 수 있도록 돕는 서비스입니다. 
    주요 기능으로는 상황에 맞는 질문 생성 및 AI 피드백 제공, 면접 데이터 분석 등이 있습니다. 사용자 친화적인 UI와 AI 피드백 시스템을 구축하는 데 중점을 두었습니다.`,
    githubLink: 'https://github.com/jokangmin/TalkTalkInterview_Ai',
    deployLink: 'https://www.ai-interview.store/',
    screenshots: [
      { src: interview_talk_project_img1, alt: '메인 페이지 1' },
      { src: interview_talk_project_img2, alt: '메인 페이지 2' },
      { src: interview_talk_project_img3, alt: 'interview 페이지 1' },
      { src: interview_talk_project_img4, alt: 'interview 페이지 2' },
      { src: interview_talk_project_img5, alt: '나의 질문 페이지' },
      { src: interview_talk_project_img6, alt: 'System Architecture' },
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
      {
        problem: '해결했던 CORS 에러가 동일하게 발생하는 문제 (Java 프로세스 미실행)',
        solution: 'RDS 데이터베이스의 보안 그룹에 IP 주소 대신 EC2 인스턴스의 보안 그룹 ID를 직접 소스로 지정하는 인바운드 규칙(MYSQL/Aurora, 포트 3306)을 추가'
      },
    ],
  },
  {
    id: 3,
    title: 'Moivo 프로젝트',
    description: '현대 소비자들의 요구에 맞춘 전자상거래 플랫폼 개발',
    period: '2024년 11월 15일 - 2025년 1월 3일',
    skills: ['React / JS', 'Redux', 'RESTful API', 'Node.js', 'Spring Boot / Java', 'JWT', 'MySQL'],
    imageUrl: moivo_project_img,
    numberOfDevelopers: 7,
    detailedDescription: `
    Moivo 프로젝트는 사용자 및 판매자 모두에게 편리한 환경이 구축된 전자상거래 플랫폼입니다. React + js 를 사용하여 개발했으며, Node.js와 Spring Boot를 백엔드로 활용했습니다. 직관적인 탐색과 날씨 및 상황별 맞춤 상품 추천 제공, 결제 및 마이 페이지 등을 제공합니다.`,
    features: [
      '깔끔한 사용자 경험 제공: 세련되고 직관적인 UI/UX로 고객 만족 극대화',
      '개인화 서비스 제공: 날씨 및 사용자 데이터를 활용한 맞춤 추천 시스템',
      '사용자 편의성 향상: 간편 로그인, 간소화된 결제, 장바구니 및 좋아요 시스템',
      '기능 통합: 쇼핑, 리뷰, 결제 등 전자상거래 필수 기능 일원화',
      '효율적 관리 지원: 관리자에게 상품 및 사용자 데이터 관리 도구 제공',
    ],
    performanceOptimizations: [
      'SPA 라우터 최적화: `react-router-dom`을 사용하여 싱글 페이지 애플리케이션(SPA) 라우팅을 구현했습니다. 이를 통해 페이지 이동 시 전체 페이지를 다시 로드하지 않아도 되므로, 사용자에게 더 빠르고 매끄러운 페이지 전환 경험을 제공합니다.',
      '렌더링 최적화: React.memo, useCallback, useMemo 사용한 스크롤 인터랙션이나 무한 슬라이드처럼 이벤트가 많은 UI에서 불필요한 리렌더링 방지',
      'DB 성능 최적화: 불필요한 SELECT * 제거, 필요한 컬럼만 조회해 쿼리 최적화, JOIN을 최소화하고 인덱스(Index) 적용',
      'API 최적화: 결제 승인과 페이지 응답을 분리하여 관리',
    ],
    contribution: [
      '프론트엔드 React 컴포넌트 설계 및 전역 상태 관리 개발',
      '스크롤 인터랙티브 메인 페이지 - 무한 슬라이드',
      'React Router를 활용한 SPA 구조 구현',
      '오늘의 추천 상품 페이지 (Front, Back)',
      '토스 결제 및 SMTP, 마이 페이지 (Front. Back)',
      'DOM 조작, 데이터 관리 및 출력, 비동기 처리',
      '주요 페이지 반응형(@media) 웹 구현',
      '관리자 현황 페이지',
    ],
    troubleShooting: [
      {
        problem: '로그인 실패 시 404 에러 출력 및 빈 화면',
        solution: 'AuthContext의 navigate(`/login`)을 /user로 변경 (디버깅 우선순위 설정) 이뷰 발생 시 기본적인 주소 값 확인이 필수적'
      },
      {
        problem: '회원가입 실패 (Spring Security 추가 후), 엔터티 이름 설정 불일치로 DB 컬럼이 중복 생성됨',
        solution: '엔터티 필드 이름을 isAdmin으로 통일, SnakeCase 자동 매핑 규칙으로 인한 중복 생성 방지'
      },
      {
        problem: '메인 페이지 및 라우터 Context 처리 문제, 상위 라우터의 Context가 하위 모든 정보 간섭 발생',
        solution: 'App.jsx에서 Context를 페이지별로 분리하여 관리, Context 간의 간섭 최소화'
      },
      {
        problem: '배포 후 MySQL 서버 오류 및 로컬 서버 실행 불가, MySQL 스케줄러의 락 타임 문제로 테이블 접근 충돌',
        solution: '스케줄러 처리 분리 및 컬럼별 개별 트랜잭션으로 설계 변경, DB에 과도한 부하가 발생하지 않도록 초기에 효율적인 설계 필요'
      },
    ],
    githubLink: 'https://github.com/jokangmin/Moivo_project',
    screenshots: [
      { src: moivo_project_gif_main, alt: '메인 구동 시연 1' },
      { src: moivo_project_gif_main2, alt: '메인 구동 시연 2' },
      { src: moivo_project_today2, alt: '오늘의 추천 페이지 1' },
      { src: moivo_project_today1, alt: '오늘의 추천 페이지 2' },
      { src: moivo_project_product1, alt: '상품 페이지 1' },
      { src: moivo_project_product2, alt: '상품 페이지 2' },
      { src: moivo_project_mypage1, alt: '마이 페이지' },
      { src: moivo_project_mypage2, alt: '마이 - 구매 및 배송 현황 페이지' },
      { src: moivo_project_mypage3, alt: '마이 - 구매 목록 상세 페이지' },
      { src: moivo_project_pay, alt: '구매 페이지' },
      { src: moivo_project_mail, alt: '구매 메일 발송' },
      { src: moivo_project_qna, alt: '문의 페이지' },
      { src: moivo_project_admin, alt: '관리자 페이지' },
      { src: moivo_project_img_system, alt: 'System Architecture' },
      { src: moivo_project_img_erd, alt: 'ERD' },
    ],
  },
  {
    id: 4,
    title: 'BooBooBook 프로젝트',
    description: '효율적인 도서 정보 제공 및 관리 플랫폼',
    period: '2024년 9월 30일 - 2024년 10월 21일',
    skills: ['React / JS', 'Spring / Java', 'JQuery', 'ORACLE'],
    imageUrl: book_project_img,
    numberOfDevelopers: 3,
    detailedDescription: `
    BooBooBook은 독서 커뮤니티의 수요 증가, 독자들의 독서 경험 공유 및 소통 강화 플랫폼입니다. React를 사용하여 직관적인 프론트엔드를 구축했으며, Spring과 Oracle을 활용하여 백엔드 로직과 데이터 관리를 처리했습니다.`,
    features: [
      '사용자 친화적인 회원 관리 시스템: 사용자가 쉽고 빠르게 가입, 로그인, 정보 수정, 탈퇴 등을 할 수 있도록 설계된 회원 관리 기능',
      '다양한 도서 정보 및 리뷰 플랫폼: 다양한 책의 기본 정보와 함께 사용자 리뷰를 공유하고 평가할 수 있는 공간입니다.',
      '책 목록 및 상세 정보 제공: 사용자에게 전체 도서 목록과 각 도서의 상세 정보를 제공하는 기능입니다.',
      '문의 게시판: 사용자가 서비스 이용 중 발생한 문의 사항을 등록하고 답변을 받을 수 있는 게시판입니다.',
    ],
    performanceOptimizations: [
      '폼 검증 클라이언트 처리:  비밀번호 규칙, 이메일 형식 검증을 프론트에서 수행해 서버 부하 감소.',
      'WT 토큰 사용: 세션 저장소 부하 감소, 인증 속도 향상',
      'DB 인덱스: 이메일/아이디 컬럼에 인덱스 추가로 로그인·중복 검사 속도 개선',
      '페이지네이션: 대량 데이터 조회 시 속도 개선',
      '@Async 비동기 처리: 답변 알림 메일 발송 시 API 응답 지연 방지',
    ],
    contribution: [
      'JWT 기반 인증 구현, 로그인 시 발급된 토큰으로 세션 없이 인증 유지',
      '소셜 로그인 연동, 카카오 API를 활용한 간편 로그인',
      'UX 최적화 - 입력 오류 실시간 검증, 반응형 디자인 지원',
      '도서 데이터 관리, 도서 검색 및 정보 저장 (정렬 및 필터링)',
      '평점 및 리뷰 작성·수정·삭제 - 로그인한 사용자만 작성 가능',
      '목록 페이지 디자인 및 페이지네이션, 상세 페이지 디자인',
      'CRUD 구현함, 게시글 작성, 수정, 삭제, 조회 가능',
      '관리자 답변 기능 - 관리자 전용 답변 작성 UI 제공',
    ],
    githubLink: 'https://github.com/BOOBOO-BOOK/BBOOK',
    screenshots: [
      { src: book_project_gif, alt: '메인 동적 화면' },
      { src: book_project_gif2, alt: '상품 및 디테일 동적 화면' },
    ],
  },
  {
    id: 5,
    title: 'ODIGA 프로젝트',
    description: '여행을 위한 예약 및 추천 서비스',
    period: '2024년 8월 30일 - 2024년 9월 27일',
    skills: ['Eclipse / Java', 'MyBatis', 'ORACLE', 'JQuery', 'Tomcat'],
    imageUrl: odiga_project_img,
    numberOfDevelopers: 4,
    detailedDescription: `
    "ODIGA" 라는 여행 관련 사이트 개발 프로젝트 항공, 숙박, 투어, 맛집 게시판 등을 이용할 수 있으며, 사용자에게 여행에 관한 편의와 여러 정보들을 제공하기 위해 개발`,
    features: [
      '회원가입 및 수정: 사용자가 쉽고 빠르게 가입, 로그인, 정보 수정, 탈퇴 기능',
      '맛집 리뷰 게시판: 사용자들이 쉽게 소통할 수 있는 리뷰 게시판',
      '호텔 및 항공권 예약 페이지: 가독성이 좋은 예매 검색 및 정보 페이지',
      '메인 페이지 배너 및 인기 여행지 추천: 여행사 디자인 참고해 제작'
    ],
    contribution: [
      '전체적인 웹사이트 디자인 및 개발',
      '회원가입 및 수정 페이지 ( Front & Back )',
      'jQuery, MyBatis를 이용한 예외 처리 및 Oracle DB 연동',
      '로그인 기능 및 로그인 시, 쿠키를 활용한 일정 시간 동안 ID 저장 기능 구현',
      '게시물의 페이징, 좋아요, 댓글 수, 조회수, 별점, 신고 기능',
      '세션 값을 이용한 회원 전용, 게시글 CRUD',
      '게시물 댓글 마다 대댓글 구현'
    ],
    githubLink: 'https://github.com/jokangmin/Mini_project2',
    screenshots: [
      { src: odiga_project_img , alt: '시작 페이지' },
      { src: odiga_project_img2 , alt: '호텔 페이지' },
      { src: odiga_project_img3 , alt: '항공권 페이지' },
    ],

  },
];