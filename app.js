// 초기 데이터 세트
const buildingsData = [
  {
    id: "b1",
    title: "양평 서종면 패시브 목조주택 '소풍재'",
    category: "패시브하우스",
    location: "경기 양평군 서종면",
    area: "연면적 168㎡ (51평) / 지상 2층",
    completedDate: "2025.09 준공 (1년 경과 검증 완료)",
    openHouse: "2026.10.25 (토) 오후 2시 오프라인 오픈하우스 예약 가능",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)",
    scores: {
      owner: 4.9,
      peer: 4.8,
      longTerm: 5.0,
      public: 4.9
    },
    credits: [
      { role: "총괄목공/골조", techId: "t1", name: "김태호 명장" },
      { role: "기밀/단열방수", techId: "t2", name: "박진수 프로" },
      { role: "외장/타일마감", techId: "t3", name: "이정훈 명장" },
      { role: "시스템창호", techId: "t5", name: "최현우 프로" }
    ],
    materials: [
      { matId: "m1", name: "독일 프로클리마 인텔로 가변형 방습지" },
      { matId: "m3", name: "3중 로이 아르곤 패시브 시스템창호" },
      { matId: "m2", name: "고밀도 현무암 롱브릭 타일" }
    ],
    timeline: [
      { step: "1단계: 기초 및 철근 배근", date: "2025.04", status: "GPS·도면 검수 완료", desc: "기초 매트 복배근 간격 150mm 준수 및 지반 동결심도 이하 터파기 사진 인증 완료" },
      { step: "2단계: 중목구조 골조 정밀 시공", date: "2025.05", status: "수직·수평 오차 1mm 이내", desc: "프리컷(Pre-cut) 구조목 철물 결합 및 내진 홀다운 앵커 전수 사진 기록" },
      { step: "3단계: [은폐공정] 기밀 테이핑 & 셀룰로오스 단열", date: "2025.06", status: "품질인증 마크 획득 (0.45 ACH50)", desc: "블로어 도어 기밀 테스트 통과 및 열화상 카메라 단열 결손 0건 확인" },
      { step: "4단계: 외장 롱브릭 & 내부 원목/타일 마감", date: "2025.08", status: "건축주·감리 최종 승인", desc: "욕실 2차 탄성 도막방수 담수 테스트 48시간 완료 후 포세린 타일 졸리컷 마감" }
    ],
    reviews: [
      { type: "장기거주(1년 후)", author: "건축주 정OO님 (실계약 인증)", rating: 5.0, text: "사계절(여름 장마, 한겨울 영하 15도)을 다 보내고 남기는 1년 차 후기입니다. 결로나 누수 단 한 건도 없었고 겨울 난방비가 아파트의 절반 수준입니다." },
      { type: "동료교차평가", author: "설비/배관 강동원 프로 (현장출역 인증)", rating: 4.9, text: "김태호 목공 명장님이 설비 배관 지나갈 자리를 도면대로 정확히 타공·보강해 주셔서 후행 공정 작업이 정말 수월했습니다." }
    ]
  },
  {
    id: "b2",
    title: "성수동 적벽돌 노출콘크리트 근린상가 '아카이브 성수'",
    category: "상가주택",
    location: "서울 성동구 성수동2가",
    area: "연면적 495㎡ (150평) / 지하1층~지상4층",
    completedDate: "2026.03 준공 (6개월 경과 검증 완료)",
    openHouse: "3D VR 공간 투어 상시 오픈",
    gradient: "linear-gradient(135deg, #7c2d12 0%, #1e293b 100%)",
    scores: {
      owner: 4.8,
      peer: 4.9,
      longTerm: 4.8,
      public: 4.9
    },
    credits: [
      { role: "외장조적/타일", techId: "t3", name: "이정훈 명장" },
      { role: "우레탄/복합방수", techId: "t2", name: "박진수 프로" },
      { role: "설비/배관/냉난방", techId: "t4", name: "강동원 프로" }
    ],
    materials: [
      { matId: "m2", name: "고밀도 현무암 롱브릭 타일" },
      { matId: "m4", name: "폴리우레아 초속경 외벽/옥상 복합방수제" }
    ],
    timeline: [
      { step: "1단계: 지하 토류판 및 영구배수 방수", date: "2025.09", status: "은폐공정 인증 완료", desc: "지하층 외방수 + 내부 결정질 침투방수 2중 처리" },
      { step: "2단계: 노출콘크리트 거푸집 & 철근 골조", date: "2025.11", status: "콘크리트 압축강도 합격", desc: "유로폼 및 박리제 정밀 시공으로 기포 없는 노출면 확보" },
      { step: "3단계: 수제 적벽돌 & 현무암 롱브릭 공간쌓기", date: "2026.01", status: "벽돌 줄눈 및 앵커 고정 인증", desc: "스테인리스 긴결 철물 정량 시공 및 발수 코팅 2회 완료" }
    ],
    reviews: [
      { type: "건축주평가", author: "건축주 (주)성수스페이스", rating: 4.8, text: "상가 건물에서 가장 걱정했던 지하 누수와 외벽 백화 현상이 전혀 없습니다. 공정마다 에스크로 사진 검수로 기성금을 지급해 마음 편히 준공했습니다." }
    ]
  },
  {
    id: "b3",
    title: "제주 애월읍 현무암 & 적삼목 스테이 '바람의 결'",
    category: "단독주택",
    location: "제주 제주시 애월읍",
    area: "연면적 132㎡ (40평) / 단층 독채",
    completedDate: "2024.08 준공 (2년 경과 장기 무하자 인증)",
    openHouse: "2026.11.02 (일) 건축주·기술자 합동 토크 오픈하우스",
    gradient: "linear-gradient(135deg, #0f172a 0%, #3b82f6 100%)",
    scores: {
      owner: 5.0,
      peer: 4.9,
      longTerm: 4.9,
      public: 5.0
    },
    credits: [
      { role: "목구조/처마디테일", techId: "t1", name: "김태호 명장" },
      { role: "해풍차단 시스템창호", techId: "t5", name: "최현우 프로" },
      { role: "설비/바닥난방", techId: "t4", name: "강동원 프로" }
    ],
    materials: [
      { matId: "m3", name: "3중 로이 아르곤 패시브 시스템창호" },
      { matId: "m1", name: "독일 프로클리마 인텔로 가변형 방습지" }
    ],
    timeline: [
      { step: "1단계: 제주 강풍 대비 내풍압 골조 앵커링", date: "2024.03", status: "구조기술사 감리 인증", desc: "태풍 초속 45m/s 기준 홀다운 철물 보강 완료" },
      { step: "2단계: 염해 방지 외장 및 창호 기밀 시공", date: "2024.06", status: "수밀 테스트 통과", desc: "팽창형 방수 테이프 3중 기밀 시공으로 태풍 시 빗물 유입 원천 차단" }
    ],
    reviews: [
      { type: "장기거주(2년 후)", author: "건축주 한OO님 (실계약 인증)", rating: 5.0, text: "제주 태풍을 두 번 겪었는데 창틀 누수 하나 없이 뽀송뽀송합니다. 참여한 기술자분들 크레딧을 보고 게스트분들도 자기 집 지을 때 소개해달라고 합니다." }
    ]
  }
];

const techniciansData = [
  {
    id: "t1",
    name: "김태호",
    trade: "목공/골조",
    tier: "명장 (Master)",
    tierClass: "tier-master",
    exp: "경력 22년",
    projectsCount: 47,
    zeroDefectRate: "99.4%",
    dailyWage: "420,000원 (표준 명장 단가)",
    badges: ["🏆 3년 연속 무하자 명장", "🌍 일본 정밀 중목구조 적용 인증", "🎓 프로클리마 기밀 공인시공자"],
    scores: { quality: 4.9, schedule: 4.9, peer: 5.0, as: 4.9 },
    bio: "중목구조·경량목구조 골조 및 패시브하우스 정밀 목공 전문 팀장입니다. 레이저 레벨 오차 1mm 이내 시공을 원칙으로 하며 은폐 부위 전 과정을 사진 기록합니다."
  },
  {
    id: "t2",
    name: "박진수",
    trade: "단열/방수",
    tier: "프로 (Pro)",
    tierClass: "tier-pro",
    exp: "경력 14년",
    projectsCount: 63,
    zeroDefectRate: "98.8%",
    dailyWage: "320,000원 (표준 프로 단가)",
    badges: ["🛡️ 은폐공정 사진인증 100%", "🎓 독일 패시브 기밀시공 수료", "🔬 열화상/블로어도어 자체장비 보유"],
    scores: { quality: 4.9, schedule: 4.8, peer: 4.9, as: 5.0 },
    bio: "단열과 방수는 마감 후에는 다시 고칠 수 없습니다. 모든 현장에서 담수 테스트 및 열화상 카메라 리포트를 건축주께 직접 발행합니다."
  },
  {
    id: "t3",
    name: "이정훈",
    trade: "타일/미장",
    tier: "명장 (Master)",
    tierClass: "tier-master",
    exp: "경력 19년",
    projectsCount: 82,
    zeroDefectRate: "99.1%",
    dailyWage: "450,000원 (표준 명장 단가)",
    badges: ["🏆 2025 이달의 타일 명장", "🌍 유럽 박판 빅슬랩 공법 인증", "⚡ 레이저 배수구 구배 보증"],
    scores: { quality: 5.0, schedule: 4.8, peer: 4.8, as: 4.9 },
    bio: "대형 포세린 타일 졸리컷(45도 면치기), 에폭시 줄눈, 외장 롱브릭 타일 전문입니다. 욕실 물고임 0% 구배 시공을 보증합니다."
  },
  {
    id: "t4",
    name: "강동원",
    trade: "설비/전기",
    tier: "프로 (Pro)",
    tierClass: "tier-pro",
    exp: "경력 15년",
    projectsCount: 54,
    zeroDefectRate: "98.5%",
    dailyWage: "340,000원 (표준 프로 단가)",
    badges: ["🔧 이중배관 유지보수 특화", "🌍 북유럽 열회수환기장치(ERV) 전문"],
    scores: { quality: 4.8, schedule: 4.9, peer: 5.0, as: 4.8 },
    bio: "나중에 벽을 깨지 않고도 수리할 수 있는 헤베르(이중관) 급수 설비 및 패시브하우스 전열교환기 덕트 정밀 시공 전문입니다."
  },
  {
    id: "t5",
    name: "최현우",
    trade: "창호/금속",
    tier: "프로 (Pro)",
    tierClass: "tier-pro",
    exp: "경력 12년",
    projectsCount: 41,
    zeroDefectRate: "99.0%",
    dailyWage: "330,000원 (표준 프로 단가)",
    badges: ["🎓 독일 3중 시스템창호 공인시공팀", "🌍 RAL 기밀 테이핑 공법 적용"],
    scores: { quality: 4.9, schedule: 4.8, peer: 4.9, as: 4.9 },
    bio: "아무리 비싼 창호도 우레탄폼만 쏘면 결로가 생깁니다. 내외부 기밀 테이프와 팽창 밴드를 활용한 독일 RAL 표준 창호 시공을 준수합니다."
  }
];

const globalVideosData = [
  {
    id: "v1",
    country: "일본",
    type: "YouTube Shorts",
    title: "[일본 장인 쇼츠] 못을 쓰지 않는 전통 짜맞춤(츠기테) + 현대 내진 철물 하이브리드 목조 공법",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "0:58 (Shorts)",
    views: "조회수 4.2만회",
    bgGradient: "linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)",
    aiSummary: "AI 핵심 공법 번역: 일본 목수(다이쿠)가 CNC 프리컷 가공된 히노키 기둥에 내진 드리프트 핀(Drift Pin)과 전통 주먹장 맞춤을 결합하여 지진 진도 7에도 뒤틀림을 방지하는 기법입니다.",
    applicability: {
      climate: "94% (한국 사계절 습도 변화에 강함)",
      law: "98% (국내 구조안전 확인 기준 부합)",
      cost: "78% (프리컷 가공비 초기 상승 있으나 현장 인건비 30% 단축)"
    },
    linkedMaterialId: "m5",
    linkedMaterialName: "프리컷 내진 드리프트핀 & 홀다운 철물 세트",
    verifiedByTechs: ["김태호 명장 (양평 현장에 실제 적용 완료)"],
    comments: [
      { author: "김태호 명장 (목공/골조)", text: "국내에서도 프리컷 공장이 늘어나면서 이 방식이 대세가 되고 있습니다. 특히 2층 바닥 장선 연결부 소음 잡는 데 최고입니다." },
      { author: "예비건축주 이OO", text: "쇼츠로 보니까 구조가 한눈에 이해되네요! 내 집 지을 때 꼭 이 공법 가능한 기술자분께 맡기고 싶어요." }
    ]
  },
  {
    id: "v2",
    country: "독일",
    type: "YouTube 기술해설",
    title: "[독일 패시브 현장] 우레탄폼만 쏘지 마세요! 창호 결로·곰팡이 100% 막는 독일 RAL 3중 기밀 시공법",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "08:24",
    views: "조회수 6.8만회",
    bgGradient: "linear-gradient(135deg, #065f46 0%, #0f172a 100%)",
    aiSummary: "AI 핵심 공법 번역: 내부는 투습 저항이 높은 방습 테이프(기밀), 중앙은 팽창형 단열 폼, 외부는 빗물은 막고 내부 습기는 배출하는 투습방수 팽창밴드를 적용하는 3단계 창호 시공 표준입니다.",
    applicability: {
      climate: "99% (한국 겨울철 결로 및 여름 장마철 누수 완벽 차단)",
      law: "100% (국내 에너지절약설계기준 최우수 등급 부합)",
      cost: "85% (자재비 창호당 약 4~5만원 추가되나 하자 보수비 수백만원 절감)"
    },
    linkedMaterialId: "m1",
    linkedMaterialName: "독일 프로클리마 인텔로 가변형 방습지 & 기밀테이프",
    verifiedByTechs: ["박진수 프로", "최현우 프로 (제주·양평 현장 적용 인증)"],
    comments: [
      { author: "최현우 프로 (창호/금속)", text: "한국 현장에서 가장 시급하게 보급되어야 할 공법입니다. 우레탄폼을 칼로 도려내면 그 틈으로 습기가 다 들어갑니다." }
    ]
  },
  {
    id: "v3",
    country: "북미",
    type: "YouTube Shorts",
    title: "[미국 장비 쇼츠] 타일 줄눈·수평 작업 속도 3배 높이는 레이저 진동 석션 레벨러 실전 테스트",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "0:45 (Shorts)",
    views: "조회수 9.1만회",
    bgGradient: "linear-gradient(135deg, #7c2d12 0%, #b45309 100%)",
    aiSummary: "AI 핵심 공법 번역: 1200x600mm 이상 대형 포세린 타일 시공 시 고주파 진동 흡착판으로 타일 뒷면 압착시멘트 공극(빈 공간)을 제거하여 타일 깨짐 하자를 원천 방지하는 장비 시연입니다.",
    applicability: {
      climate: "95% (한국식 바닥 온돌 난방 수축·팽창 대응에 매우 유리)",
      law: "100% (제한 없음)",
      cost: "92% (장비 도입비 대비 작업 시간 단축 및 타일 파손율 0% 달성)"
    },
    linkedMaterialId: "m5",
    linkedMaterialName: "고주파 타일 진동 레벨러 & 레이저 구배 측정기",
    verifiedByTechs: ["이정훈 명장 (성수동·양평 현장 적용 인증)"],
    comments: [
      { author: "이정훈 명장 (타일/미장)", text: "작년부터 저희 팀 전원이 도입해서 쓰고 있습니다. 온돌 바닥 대형 타일 들뜸 하자가 아예 사라졌습니다." }
    ]
  },
  {
    id: "v4",
    country: "북유럽",
    type: "YouTube 다큐/쇼츠",
    title: "[스웨덴 모듈러 건축] 눈보라 치는 현장에서도 단 3일 만에 골조 완공하는 CLT(구조용 직교집성판) 크레인 조립",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "05:12",
    views: "조회수 3.4만회",
    bgGradient: "linear-gradient(135deg, #312e81 0%, #1e40af 100%)",
    aiSummary: "AI 핵심 공법 번역: 콘크리트 대신 고강도 공학목재 패널(CLT)을 공장에서 배관·전기 타공까지 마친 상태로 반입해 현장에서 레고처럼 조립하는 친환경 저탄소 건식 공법입니다.",
    applicability: {
      climate: "88% (우천 시 방수 양생 커버 필수)",
      law: "85% (국내 내화구조 인정 범위 지속 확대 중)",
      cost: "72% (자재 단가는 높으나 공사 기간 50% 단축으로 금융비용 절감)"
    },
    linkedMaterialId: "m3",
    linkedMaterialName: "3중 로이 아르곤 패시브 시스템창호",
    verifiedByTechs: ["김태호 명장"],
    comments: [
      { author: "건축주 김OO", text: "공사 기간이 짧아지니 민원 스트레스가 확 줄어들겠네요. 국내 도입 현장이 더 많아졌으면 좋겠습니다." }
    ]
  }
];

const materialsData = [
  {
    id: "m1",
    name: "독일 프로클리마 인텔로(INTELLO) 가변형 방습지 & 기밀 테이프",
    category: "단열/방수재",
    supplier: "(주)패시브자재코리아 (공식 수입원)",
    price: "롤당 245,000원 (기술자 도매가 별도)",
    spec: "습도 감응형 가변 투습 저항 (Sd값 0.25m ~ 25m 변화), 100년 내구성 인증",
    academy: "매월 셋째 주 토요일 '패시브 기밀 테이핑 실습 아카데미' 운영 (수료 시 공인 마크 부여)",
    appliedBuildings: ["양평 소풍재", "제주 바람의 결"],
    techRating: 4.9,
    reviews: [
      { author: "박진수 프로 (단열/방수)", text: "접착력이 일반 방습지와 차원이 다릅니다. 겨울철에는 습기를 막고 여름에는 구조목 습기를 실내로 말려줘서 목재 부후가 없습니다." }
    ]
  },
  {
    id: "m2",
    name: "고밀도 제주 현무암 롱브릭 외장 타일 (동파 방지 1등급)",
    category: "외장/벽돌",
    supplier: "브릭앤스톤 코리아",
    price: "㎡당 58,000원",
    spec: "흡수율 3% 미만 고압 소성, 크기 500×55×23mm, 백화 방지 처리",
    academy: "롱브릭 공간쌓기 & 에폭시 접착 시공 세미나 (온라인/오프라인)",
    appliedBuildings: ["양평 소풍재", "성수 아카이브 성수"],
    techRating: 4.8,
    reviews: [
      { author: "이정훈 명장 (타일/미장)", text: "치수 편차가 거의 없어 레이저 라인 맞추기가 좋고, 겨울 동파 테스트에서도 깨짐이 없었습니다." }
    ]
  },
  {
    id: "m3",
    name: "독일식 3중 로이 아르곤 패시브 시스템창호 (열관류율 0.72)",
    category: "창호/유리",
    supplier: "유로윈도우 테크",
    price: "㎡당 480,000원~ (맞춤 제작)",
    spec: "열관류율 0.72 W/㎡K, 기밀성 1등급, 43dB 차음, 틸트앤턴(Tilt & Turn) 하드웨어",
    academy: "RAL 3중 기밀 창호 시공 공인팀 자격 과정 운영",
    appliedBuildings: ["양평 소풍재", "제주 바람의 결"],
    techRating: 4.9,
    reviews: [
      { author: "최현우 프로 (창호/금속)", text: "하드웨어 유격 조정이 정밀해서 시공 후 3년이 지나도 창문 처짐 관련 A/S 요청이 거의 없습니다." }
    ]
  },
  {
    id: "m4",
    name: "폴리우레아 초속경 외벽/옥상 무이음 복합방수 시스템",
    category: "단열/방수재",
    supplier: "케미가드 방수솔루션",
    price: "㎡당 42,000원 (자재 단가)",
    spec: "경화시간 15초, 신장률 450%, 바탕면 균열 추종성 우수, 옥상 보행 가능",
    academy: "초속경 스프레이 장비 운용 및 하도 프라이머 공인 교육",
    appliedBuildings: ["성수 아카이브 성수"],
    techRating: 4.8,
    reviews: [
      { author: "박진수 프로 (단열/방수)", text: "일반 우레탄 방수처럼 2~3년 뒤 들뜨지 않고 코너 부위 이음매가 없어 상가 옥상 방수에 최고입니다." }
    ]
  },
  {
    id: "m5",
    name: "고주파 타일 진동 석션 레벨러 & 프리컷 내진 철물 패키지",
    category: "해외혁신공구",
    supplier: "글로벌빌드툴즈 (Global Build Tools)",
    price: "285,000원 (프로 기술자 전용 할인)",
    spec: "최대 흡착하중 120kg, 6단 진동 조절, 대용량 리튬배터리 2개 포함",
    academy: "빅슬랩 박판 타일 무파손 시공 장비 실습 과정",
    appliedBuildings: ["양평 소풍재", "성수 아카이브 성수"],
    techRating: 5.0,
    reviews: [
      { author: "이정훈 명장 (타일/미장)", text: "글로벌 기술 쇼츠 영상에서 보고 바로 도입했는데 손목 피로도가 절반으로 줄고 압착 밀실도가 완벽합니다." }
    ]
  }
];

const checklistsData = {
  "단열/기밀": [
    { id: "c1", text: "외벽 및 지붕 단열재 사이 틈새(열교 부위) 없이 밀실하게 충진되었는가?", done: true },
    { id: "c2", text: "가변형 방습지 이음매 및 타카 핀 자국에 전용 기밀 테이프가 누락 없이 부착되었는가?", done: true },
    { id: "c3", text: "전기 복스(콘센트) 및 설비 배관 관통부에 전용 기밀 패치(Gasket) 처리가 완료되었는가?", done: true },
    { id: "c4", text: "창호 프레임과 골조 사이 내부 방습 테이프 / 외부 투습방수 밴드가 시공되었는가?", done: false },
    { id: "c5", text: "석고보드 마감 전 열화상 카메라 또는 블로어도어 사전 점검 사진을 업로드했는가?", done: false }
  ],
  "방수/배수": [
    { id: "w1", text: "욕실 바닥 및 벽면 코너 부위에 부직포 보강재와 탄성 도막방수 2회 이상 도포했는가?", done: true },
    { id: "w2", text: "타일 시공 전 최소 24~48시간 동안 물을 채워 누수 여부를 확인하는 '담수 테스트'를 완료했는가?", done: true },
    { id: "w3", text: "레이저 레벨기 기준 트렌치 배수구 방향으로 물빠짐 구배(1/100 이상)가 확보되었는가?", done: false },
    { id: "w4", text: "옥상 파라펫(난간벽) 치켜올림 방수 높이가 300mm 이상 확보되었는가?", done: false }
  ],
  "골조/철근": [
    { id: "s1", text: "구조 도면상 철근 배근 간격(예: 150~200mm) 및 피복 두께 스페이서(고임재)가 정량 설치되었는가?", done: true },
    { id: "s2", text: "콘크리트 타설 시 가수(물 타기) 없이 레미콘 배합표 및 슬럼프 테스트 사진을 기록했는가?", done: true },
    { id: "s3", text: "목구조/철골 기둥과 기초를 연결하는 내진 홀다운 앵커 볼트가 정확히 체결되었는가?", done: true }
  ]
};

let currentChecklistCategory = "단열/기밀";

// 초기화
document.addEventListener("DOMContentLoaded", () => {
  renderBuildings("전체");
  renderTechs("전체");
  renderVideos("전체");
  renderMaterials("전체");
  renderChecklist(currentChecklistCategory);
});

// 탭 전환
function switchTab(tabId) {
  document.querySelectorAll(".nav-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });
  document.querySelectorAll(".section-view").forEach(sec => {
    sec.classList.toggle("active", sec.id === `view-${tabId}`);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function onRoleChange(role) {
  showToast(`접속 모드가 [${role}]로 변경되었습니다. 맞춤형 권한이 적용됩니다.`);
}

// 1. 완공 건축물 렌더링 & 필터
function filterBuildings(category, btnEl) {
  if (btnEl) {
    document.querySelectorAll("#buildingFilterBar .chip").forEach(c => c.classList.remove("active"));
    btnEl.classList.add("active");
  }
  renderBuildings(category);
}

function renderBuildings(category) {
  const grid = document.getElementById("buildingGrid");
  const filtered = category === "전체"
    ? buildingsData
    : buildingsData.filter(b => b.category === category);

  grid.innerHTML = filtered.map(b => `
    <article class="card">
      <div class="card-banner" style="background: ${b.gradient};">
        <div class="badge-row">
          <span class="badge badge-dark">🏛️ ${b.category}</span>
          <span class="badge badge-green">✔ 은폐공정 인증완료</span>
        </div>
        <div style="color:#fff;">
          <div style="font-size:12px; opacity:0.9;">📍 ${b.location} · ${b.area}</div>
          <div style="font-size:18px; font-weight:800; margin-top:3px;">${b.title}</div>
        </div>
      </div>

      <div class="card-body">
        <div class="eval-grid">
          <div class="eval-item">
            <div class="score">★ ${b.scores.owner.toFixed(1)}</div>
            <div class="lbl">건축주 평가</div>
          </div>
          <div class="eval-item">
            <div class="score">★ ${b.scores.peer.toFixed(1)}</div>
            <div class="lbl">동료 기술자</div>
          </div>
          <div class="eval-item">
            <div class="score" style="color:#047857;">★ ${b.scores.longTerm.toFixed(1)}</div>
            <div class="lbl">장기거주(1~3년)</div>
          </div>
          <div class="eval-item">
            <div class="score">★ ${b.scores.public.toFixed(1)}</div>
            <div class="lbl">대중 평점</div>
          </div>
        </div>

        <div class="credits-box">
          <div class="credits-box-title">
            <span>🎬 참여 기술자 엔딩 크레딧 (클릭 시 프로필)</span>
            <span style="color:var(--primary);">실명 출역 인증</span>
          </div>
          <div class="credit-tags">
            ${b.credits.map(c => `
              <span class="credit-tag" onclick="openTechDetailModal('${c.techId}')">
                👷 <strong>${c.role}</strong>: ${c.name}
              </span>
            `).join("")}
          </div>
        </div>

        <div class="credits-box">
          <div class="credits-box-title">
            <span>🧱 투입 핵심 자재 태그 (클릭 시 자재스펙)</span>
          </div>
          <div class="credit-tags">
            ${b.materials.map(m => `
              <span class="credit-tag" onclick="openMaterialDetailModal('${m.matId}')">
                🏷️ ${m.name}
              </span>
            `).join("")}
          </div>
        </div>

        <div style="font-size:12px; color:#b45309; background:#fef3c7; padding:7px 10px; border-radius:6px; font-weight:600;">
          🚪 ${b.openHouse}
        </div>

        <div style="display:flex; gap:8px; margin-top:auto;">
          <button class="btn btn-primary" style="flex:1; justify-content:center;" onclick="openBuildingDetailModal('${b.id}')">
            공정 타임라인 & 다면평가 보기
          </button>
          <button class="btn btn-outline" onclick="openOpenHouseModal('${b.id}')">
            오픈하우스 예약
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

// 건축물 상세 모달 (공정 타임라인 + 다면평가 작성)
function openBuildingDetailModal(buildingId) {
  const b = buildingsData.find(item => item.id === buildingId);
  if (!b) return;

  const html = `
    <div class="badge-row" style="margin-bottom:8px;">
      <span class="badge badge-blue">${b.category}</span>
      <span class="badge badge-green">${b.completedDate}</span>
    </div>
    <h2 style="font-size:21px; margin-bottom:6px;">${b.title}</h2>
    <p style="font-size:13.5px; color:var(--text-sub); margin-bottom:16px;">📍 ${b.location} | ${b.area}</p>

    <h3 style="font-size:15px; margin-bottom:10px; color:var(--primary);">📸 착공~준공 공정별 투명 타임라인 (은폐 공정 기록)</h3>
    <div class="timeline" style="margin-bottom:20px;">
      ${b.timeline.map(t => `
        <div class="timeline-step">
          <div style="display:flex; justify-content:space-between; font-weight:700; font-size:13.5px;">
            <span>${t.step} (${t.date})</span>
            <span style="color:#047857; font-size:12px;">✔ ${t.status}</span>
          </div>
          <p style="font-size:12.5px; color:var(--text-sub); margin-top:4px;">${t.desc}</p>
        </div>
      `).join("")}
    </div>

    <h3 style="font-size:15px; margin-bottom:10px; color:var(--primary);">⭐ 360° 다면 평가 & 장기 거주(1~3년 후) 검증 리뷰</h3>
    <div id="buildingReviewList" style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;">
      ${b.reviews.map(r => `
        <div style="background:#f8fafc; border:1px solid var(--border); padding:10px 12px; border-radius:8px;">
          <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:700; margin-bottom:4px;">
            <span class="badge badge-purple">${r.type}</span>
            <span>${r.author} · <strong style="color:#f59e0b;">★ ${r.rating}</strong></span>
          </div>
          <p style="font-size:13px;">${r.text}</p>
        </div>
      `).join("")}
    </div>

    <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:14px; border-radius:10px;">
      <strong style="font-size:13.5px; display:block; margin-bottom:8px;">✍️ 이 건축물 & 참여 기술자 평가 남기기</strong>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px; margin-bottom:8px;">
        <select id="newRevType" class="form-control">
          <option value="장기거주(1년 후)">장기거주 후기 (준공 6개월~3년 후)</option>
          <option value="건축주평가">건축주 시공 평가 (계약 인증)</option>
          <option value="동료교차평가">동료 기술자 교차 평가 (출역 인증)</option>
          <option value="대중큐레이션">건축 관심자 디자인/완성도 평가</option>
        </select>
        <input type="text" id="newRevAuthor" class="form-control" placeholder="작성자명 (예: 건축주 김OO)" />
      </div>
      <textarea id="newRevText" class="form-control" rows="2" placeholder="단열/방수 품질, 마감 완성도, 동료 협업도, 하자 보수 대응력 등을 구체적으로 남겨주세요."></textarea>
      <button class="btn btn-primary btn-sm" style="margin-top:8px;" onclick="addBuildingReview('${b.id}')">평가 등록하기</button>
    </div>
  `;
  openModal(html);
}

function addBuildingReview(buildingId) {
  const b = buildingsData.find(item => item.id === buildingId);
  const type = document.getElementById("newRevType").value;
  const author = document.getElementById("newRevAuthor").value.trim() || "익명 참여자";
  const text = document.getElementById("newRevText").value.trim();
  if (!text) {
    showToast("평가 내용을 입력해 주세요.");
    return;
  }
  b.reviews.unshift({ type, author, rating: 5.0, text });
  openBuildingDetailModal(buildingId);
  showToast("다면 평가가 성공적으로 등록되어 기술자 평판 점수에 반영되었습니다!");
}

function openOpenHouseModal(buildingId) {
  const b = buildingsData.find(item => item.id === buildingId);
  const html = `
    <span class="badge badge-amber">오프라인 현장 견학 & 3D VR 투어</span>
    <h2 style="font-size:20px; margin:8px 0;">🚪 [${b.title}] 오픈하우스 예약</h2>
    <p style="font-size:13.5px; color:var(--text-sub); margin-bottom:14px;">
      사진 보정 없는 실제 마감 디테일(타일 졸리컷, 창호 기밀 마감, 원목 단차)을 현장에서 직접 확인하고 시공 기술자와 1:1로 상담하세요. 참가비는 건축주와 참여 기술자에게 환원됩니다.
    </p>
    <div class="form-group">
      <label>일정 안내</label>
      <input type="text" class="form-control" value="${b.openHouse}" readonly />
    </div>
    <div class="form-group">
      <label>신청자 성함 및 연락처</label>
      <input type="text" id="ohName" class="form-control" placeholder="예: 홍길동 (010-1234-5678)" />
    </div>
    <div class="form-group">
      <label>현장에서 중점적으로 상담하고 싶은 공정</label>
      <select class="form-control">
        <option>패시브 단열·기밀 및 창호 시공 디테일</option>
        <option>목공 골조 및 내외장 타일 마감</option>
        <option>전체 건축 총공사비 및 자재 스펙 문의</option>
      </select>
    </div>
    <button class="btn btn-primary" style="width:100%; justify-content:center;" onclick="closeModal(); showToast('오픈하우스 현장 견학 예약이 완료되었습니다!')">
      오픈하우스 참석 예약 확정하기
    </button>
  `;
  openModal(html);
}

function openNewBuildingModal() {
  const html = `
    <h2 style="font-size:20px; margin-bottom:10px;">🏛️ 새 완공 건축물 & 참여 기술자 크레딧 등록</h2>
    <div class="form-group">
      <label>건축물 명칭</label>
      <input type="text" id="nbTitle" class="form-control" placeholder="예: 판교 운중동 패시브 모던하우스 '청연'" />
    </div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
      <div class="form-group">
        <label>건축 분류</label>
        <select id="nbCategory" class="form-control">
          <option value="단독주택">단독주택</option>
          <option value="패시브하우스">패시브하우스</option>
          <option value="상가주택">상가주택</option>
          <option value="리모델링">리모델링</option>
        </select>
      </div>
      <div class="form-group">
        <label>소재지 및 연면적</label>
        <input type="text" id="nbLoc" class="form-control" placeholder="예: 경기 성남시 분당구 / 185㎡" />
      </div>
    </div>
    <div class="form-group">
      <label>참여 기술자 크레딧 태그 (공정별 대표 기술자 선택)</label>
      <select id="nbTech" class="form-control">
        <option value="t1">김태호 명장 (목공/골조)</option>
        <option value="t2">박진수 프로 (단열/방수)</option>
        <option value="t3">이정훈 명장 (타일/미장)</option>
      </select>
    </div>
    <button class="btn btn-primary" style="width:100%; justify-content:center;" onclick="submitNewBuilding()">
      완공 건축물 아카이브 등재하기
    </button>
  `;
  openModal(html);
}

function submitNewBuilding() {
  const title = document.getElementById("nbTitle").value.trim() || "판교 운중동 모던하우스 '청연'";
  const category = document.getElementById("nbCategory").value;
  const loc = document.getElementById("nbLoc").value.trim() || "경기 성남시 분당구";
  buildingsData.unshift({
    id: "b" + (buildingsData.length + 1),
    title,
    category,
    location: loc,
    area: "연면적 185㎡ (56평)",
    completedDate: "2026.10 준공 (신규 크레딧 인증)",
    openHouse: "오픈하우스 일정 조율 중",
    gradient: "linear-gradient(135deg, #0f172a 0%, #4f46e5 100%)",
    scores: { owner: 5.0, peer: 4.9, longTerm: 5.0, public: 4.9 },
    credits: [
      { role: "총괄목공/골조", techId: "t1", name: "김태호 명장" },
      { role: "기밀/단열방수", techId: "t2", name: "박진수 프로" }
    ],
    materials: [
      { matId: "m1", name: "독일 프로클리마 인텔로 가변형 방습지" }
    ],
    timeline: [
      { step: "1단계: 기초 및 은폐 단열 검수", date: "2026.06", status: "AI 체크리스트 100% 통과", desc: "전 공정 사진 기록 및 스마트 에스크로 정산 완료" }
    ],
    reviews: [
      { type: "건축주평가", author: "신규 건축주 (실계약 인증)", rating: 5.0, text: "참여 기술자분들의 실명 크레딧이 걸려 있어 책임감 있게 마감해 주셨습니다." }
    ]
  });
  closeModal();
  renderBuildings("전체");
  showToast("새 완공 건축물과 참여 기술자 크레딧이 아카이브에 등재되었습니다!");
}

// 2. 기술자 스킬 패스포트 렌더링 & 모달
function filterTechs(trade, btnEl) {
  if (btnEl) {
    document.querySelectorAll("#techFilterBar .chip").forEach(c => c.classList.remove("active"));
    btnEl.classList.add("active");
  }
  renderTechs(trade);
}

function renderTechs(trade) {
  const grid = document.getElementById("techGrid");
  const filtered = trade === "전체"
    ? techniciansData
    : techniciansData.filter(t => t.trade === trade);

  grid.innerHTML = filtered.map(t => `
    <article class="card">
      <div class="card-body">
        <div class="tech-header">
          <div class="tech-avatar ${t.tierClass}">${t.name[0]}</div>
          <div>
            <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
              <strong style="font-size:18px;">${t.name}</strong>
              <span class="badge badge-amber">${t.tier}</span>
              <span class="badge badge-blue">${t.trade}</span>
            </div>
            <div style="font-size:12.5px; color:var(--text-sub); margin-top:2px;">
              ${t.exp} · 누적 인증현장 <strong>${t.projectsCount}건</strong> · 무하자율 <strong style="color:#047857;">${t.zeroDefectRate}</strong>
            </div>
          </div>
        </div>

        <p style="font-size:13px; color:var(--text-sub);">${t.bio}</p>

        <div class="eval-grid">
          <div class="eval-item">
            <div class="score">★ ${t.scores.quality}</div>
            <div class="lbl">시공품질</div>
          </div>
          <div class="eval-item">
            <div class="score">★ ${t.scores.schedule}</div>
            <div class="lbl">일정준수</div>
          </div>
          <div class="eval-item">
            <div class="score">★ ${t.scores.peer}</div>
            <div class="lbl">동료협업도</div>
          </div>
          <div class="eval-item">
            <div class="score">★ ${t.scores.as}</div>
            <div class="lbl">하자보수(A/S)</div>
          </div>
        </div>

        <div class="credit-tags">
          ${t.badges.map(b => `<span class="badge badge-green" style="font-size:11px;">${b}</span>`).join("")}
        </div>

        <div style="font-size:12.5px; background:#f8fafc; padding:8px 10px; border-radius:6px; border:1px solid var(--border); display:flex; justify-content:space-between;">
          <span>권장 표준 노임:</span>
          <strong style="color:var(--primary);">${t.dailyWage}</strong>
        </div>

        <div style="display:flex; gap:8px; margin-top:auto;">
          <button class="btn btn-primary" style="flex:1; justify-content:center;" onclick="openTechDetailModal('${t.id}')">
            스킬 패스포트 & 시공의뢰
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function openTechDetailModal(techId) {
  const t = techniciansData.find(item => item.id === techId);
  if (!t) return;

  const participated = buildingsData.filter(b => b.credits.some(c => c.techId === techId));

  const html = `
    <div class="tech-header" style="margin-bottom:14px;">
      <div class="tech-avatar ${t.tierClass}" style="width:68px; height:68px; font-size:28px;">${t.name[0]}</div>
      <div>
        <span class="badge badge-amber">${t.tier}</span>
        <span class="badge badge-blue">${t.trade}</span>
        <h2 style="font-size:22px; margin-top:4px;">${t.name} 기술자 스킬 패스포트</h2>
        <div style="font-size:13px; color:var(--text-sub);">${t.exp} | 크레딧 등재 현장 ${t.projectsCount}건 | 무하자 보증률 ${t.zeroDefectRate}</div>
      </div>
    </div>

    <div class="highlight-box" style="background:#f8fafc; border:1px solid var(--border); padding:12px; border-radius:8px; margin-bottom:14px;">
      <strong>자기소개 & 시공 원칙:</strong>
      <p style="font-size:13.5px; margin-top:4px;">${t.bio}</p>
    </div>

    <h3 style="font-size:14.5px; margin-bottom:8px;">🏅 보유 기술 인증 & 글로벌 신공법 뱃지</h3>
    <div class="credit-tags" style="margin-bottom:16px;">
      ${t.badges.map(b => `<span class="badge badge-green">${b}</span>`).join("")}
    </div>

    <h3 style="font-size:14.5px; margin-bottom:8px;">🏛️ 공식 크레딧 등재 완공 건축물</h3>
    <div style="display:flex; flex-direction:column; gap:6px; margin-bottom:18px;">
      ${participated.map(b => `
        <div style="padding:9px 12px; border:1px solid var(--border); border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
          <span><strong>${b.title}</strong> (${b.completedDate})</span>
          <button class="btn btn-outline btn-sm" onclick="openBuildingDetailModal('${b.id}')">현장 기록 보기</button>
        </div>
      `).join("")}
    </div>

    <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:14px; border-radius:10px;">
      <strong style="font-size:14px; display:block; margin-bottom:8px;">🤝 스마트 에스크로 시공 견적 요청 (안전 결제 연동)</strong>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="현장 위치 및 예정 시기 (예: 경기 양평 / 2026년 11월 예정)" />
      </div>
      <button class="btn btn-primary" style="width:100%; justify-content:center;" onclick="closeModal(); showToast('${t.name} 기술자에게 스마트 에스크로 시공 의뢰 메시지가 전송되었습니다!')">
        ${t.name} 기술자에게 시공 의뢰 보내기
      </button>
    </div>
  `;
  openModal(html);
}

function openApprenticeModal() {
  const html = `
    <span class="badge badge-amber">인재 양성 & 팀빌딩</span>
    <h2 style="font-size:20px; margin:8px 0;">🤝 명장-신진 기술자 도제 매칭 지원</h2>
    <p style="font-size:13.5px; color:var(--text-sub); margin-bottom:14px;">
      검증된 상위 티어(명장) 기술자의 현장에 팀원으로 합류하여 선진 공법을 배우고, 현장 종료 후 명장으로부터 공식 작업 성과 인증을 받아 스킬 패스포트 등급을 올리세요.
    </p>
    <div class="form-group">
      <label>희망 공정 및 멘토 명장 선택</label>
      <select class="form-control">
        <option>김태호 명장 팀 — 패시브 중목구조 및 정밀 목공 과정</option>
        <option>이정훈 명장 팀 — 박판 빅슬랩 타일 & 외장 롱브릭 과정</option>
        <option>박진수 프로 팀 — 독일식 3중 기밀 테이핑 & 복합방수 과정</option>
      </select>
    </div>
    <div class="form-group">
      <label>지원자 성함 및 보유 경력/자격</label>
      <input type="text" class="form-control" placeholder="예: 박청년 (목공 기능사 보유, 현장 경력 1년)" />
    </div>
    <button class="btn btn-accent" style="width:100%; justify-content:center;" onclick="closeModal(); showToast('도제 매칭 지원서가 명장 팀장에게 전달되었습니다!')">
      도제 팀원 지원서 제출하기
    </button>
  `;
  openModal(html);
}

// 3. 글로벌 건축 기술 미디어 허브 (YouTube & Shorts)
function filterVideos(country, btnEl) {
  if (btnEl) {
    document.querySelectorAll("#videoFilterBar .chip").forEach(c => c.classList.remove("active"));
    btnEl.classList.add("active");
  }
  renderVideos(country);
}

function renderVideos(country) {
  const grid = document.getElementById("videoGrid");
  const filtered = country === "전체"
    ? globalVideosData
    : globalVideosData.filter(v => v.country === country);

  grid.innerHTML = filtered.map(v => `
    <article class="card">
      <div class="video-player-box" onclick="openVideoDetailModal('${v.id}')" style="cursor:pointer;">
        <div class="video-thumb-bg" style="background: ${v.bgGradient};"></div>
        <div class="badge-row">
          <span class="badge badge-dark">🌍 ${v.country} 건축기술</span>
          <span class="badge" style="background:#ef4444; color:#fff;">▶ ${v.type} (${v.duration})</span>
        </div>
        <div class="play-overlay">▶</div>
        <div style="position:relative; z-index:2;">
          <div style="font-size:11.5px; color:#cbd5e1;">${v.views} · 클릭하여 영상 재생 및 기술 토론</div>
          <div style="font-size:15.5px; font-weight:800; line-height:1.35; margin-top:2px;">${v.title}</div>
        </div>
      </div>

      <div class="card-body">
        <div class="ai-summary-box">
          <strong>🤖 ${v.aiSummary}</strong>
        </div>

        <div class="credits-box">
          <div class="credits-box-title">
            <span>🇰🇷 국내 현직 기술자 '현장 적용성' 평가</span>
          </div>
          <div style="font-size:12px; display:flex; flex-direction:column; gap:3px;">
            <div>• <strong>한국 기후 적합성:</strong> ${v.applicability.climate}</div>
            <div>• <strong>국내 건축법 기준:</strong> ${v.applicability.law}</div>
            <div>• <strong>시공 경제성/효율:</strong> ${v.applicability.cost}</div>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; background:#eff6ff; padding:7px 10px; border-radius:6px;">
          <span>🔗 연관 자재·공구: <strong>${v.linkedMaterialName}</strong></span>
          <button class="btn btn-outline btn-sm" onclick="openMaterialDetailModal('${v.linkedMaterialId}')">자재 보기</button>
        </div>

        <div style="font-size:12px; color:#047857; font-weight:700;">
          ✔ 국내 현장 적용 인증(Try & Verify): ${v.verifiedByTechs.join(", ")}
        </div>

        <div style="display:flex; gap:8px; margin-top:auto;">
          <button class="btn btn-primary" style="flex:1; justify-content:center;" onclick="openVideoDetailModal('${v.id}')">
            영상 시청 & 기술자 토론 (${v.comments.length})
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function openVideoDetailModal(videoId) {
  const v = globalVideosData.find(item => item.id === videoId);
  if (!v) return;

  const html = `
    <div class="badge-row" style="margin-bottom:8px;">
      <span class="badge badge-blue">🌍 ${v.country} 선진 건축 공법</span>
      <span class="badge badge-amber">${v.type} · ${v.duration}</span>
    </div>
    <h2 style="font-size:19px; margin-bottom:12px;">${v.title}</h2>

    <!-- 인터랙티브 영상 시뮬레이터 플레이어 -->
    <div style="background:#0f172a; color:#fff; border-radius:12px; padding:28px 20px; text-align:center; margin-bottom:16px; border:2px solid #334155;">
      <div style="font-size:38px; margin-bottom:8px;">🎬</div>
      <div style="font-size:15px; font-weight:700; margin-bottom:6px;">유튜브 / 쇼츠 임베드 플레이어 (${v.duration})</div>
      <p style="font-size:12.5px; color:#cbd5e1; max-width:520px; margin:0 auto 12px;">
        원본 링크: <a href="${v.youtubeUrl}" target="_blank" style="color:#38bdf8;">${v.youtubeUrl}</a>
      </p>
      <div class="ai-summary-box" style="text-align:left; max-width:640px; margin:0 auto;">
        ${v.aiSummary}
      </div>
    </div>

    <div style="display:flex; justify-content:space-between; align-items:center; background:#f0fdf4; border:1px solid #86efac; padding:10px 14px; border-radius:8px; margin-bottom:16px;">
      <div>
        <strong style="font-size:13px; color:#166534;">🏅 '나도 시공해 봤어요' (국내 현장 적용 인증)</strong>
        <div style="font-size:12px; color:#15803d;">현재 인증 기술자: ${v.verifiedByTechs.join(", ")}</div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="verifyVideoTech('${v.id}')">+ 내 현장 적용 인증하기</button>
    </div>

    <h3 style="font-size:15px; margin-bottom:8px;">💬 국내 기술자 & 예비 건축주 적용성 토론</h3>
    <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:14px;">
      ${v.comments.map(c => `
        <div style="background:#f8fafc; border:1px solid var(--border); padding:10px 12px; border-radius:8px;">
          <strong style="font-size:12.5px; color:var(--primary);">${c.author}</strong>
          <p style="font-size:13px; margin-top:3px;">${c.text}</p>
        </div>
      `).join("")}
    </div>

    <div style="display:flex; gap:8px;">
      <input type="text" id="videoCommentInput" class="form-control" placeholder="이 해외 공법의 한국 현장 적용성에 대한 의견을 남겨주세요..." />
      <button class="btn btn-primary" style="white-space:nowrap;" onclick="addVideoComment('${v.id}')">의견 등록</button>
    </div>
  `;
  openModal(html);
}

function verifyVideoTech(videoId) {
  const v = globalVideosData.find(item => item.id === videoId);
  v.verifiedByTechs.push("신규 인증 기술자 (신기술 선도 뱃지 부여됨)");
  openVideoDetailModal(videoId);
  showToast("국내 현장 적용 인증 완료! 스킬 패스포트에 [신기술 선도 뱃지]가 추가되었습니다.");
}

function addVideoComment(videoId) {
  const v = globalVideosData.find(item => item.id === videoId);
  const input = document.getElementById("videoCommentInput");
  const text = input.value.trim();
  if (!text) return;
  const currentRole = document.getElementById("userRole").value;
  v.comments.push({ author: `참여자 (${currentRole})`, text });
  openVideoDetailModal(videoId);
  showToast("해외 건축 기술 토론 코멘트가 등록되었습니다!");
}

function openAddVideoModal() {
  const html = `
    <span class="badge badge-blue">글로벌 건축 기술 큐레이션</span>
    <h2 style="font-size:20px; margin:8px 0;">🎬 세계 각국의 건축 유튜브 / 쇼츠 공유하기</h2>
    <p style="font-size:13px; color:var(--text-sub); margin-bottom:14px;">
      유튜브 영상이나 쇼츠(Shorts) URL을 입력하면 AI가 자동으로 공법 요약과 한국어 건축 용어 번역을 생성합니다.
    </p>
    <div class="form-group">
      <label>유튜브 또는 쇼츠(Shorts) URL</label>
      <input type="text" id="nvUrl" class="form-control" placeholder="https://youtube.com/shorts/..." />
    </div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
      <div class="form-group">
        <label>국가/지역 분류</label>
        <select id="nvCountry" class="form-control">
          <option value="일본">🇯🇵 일본 (목조/내진/장인)</option>
          <option value="독일">🇩🇪 독일 (단열/패시브/창호)</option>
          <option value="북미">🇺🇸 북미 (경량목구조/첨단공구)</option>
          <option value="북유럽">🇸🇪 북유럽 (친환경/모듈러)</option>
        </select>
      </div>
      <div class="form-group">
        <label>영상 형태</label>
        <select id="nvType" class="form-control">
          <option value="YouTube Shorts">YouTube Shorts (숏폼)</option>
          <option value="YouTube 기술해설">YouTube 일반 영상 (롱폼)</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label>영상 제목 및 핵심 기술 소개</label>
      <input type="text" id="nvTitle" class="form-control" placeholder="예: [독일 외단열 쇼츠] 열교 0% 달성하는 고밀도 미네랄울 화스너 시공법" />
    </div>
    <button class="btn btn-primary" style="width:100%; justify-content:center;" onclick="submitNewVideo()">
      글로벌 미디어 허브에 공유하기
    </button>
  `;
  openModal(html);
}

function submitNewVideo() {
  const title = document.getElementById("nvTitle").value.trim() || "[글로벌 신공법 쇼츠] 레이저 자동 수평 미장 로봇 현장 테스트";
  const country = document.getElementById("nvCountry").value;
  const type = document.getElementById("nvType").value;
  const url = document.getElementById("nvUrl").value.trim() || "https://www.youtube.com/shorts/example";

  globalVideosData.unshift({
    id: "v" + (globalVideosData.length + 1),
    country,
    type,
    title,
    youtubeUrl: url,
    duration: type.includes("Shorts") ? "0:50 (Shorts)" : "06:30",
    views: "방금 공유됨",
    bgGradient: "linear-gradient(135deg, #1e3a8a 0%, #9333ea 100%)",
    aiSummary: "AI 핵심 공법 번역: 공유해주신 유튜브 영상의 음성과 자막을 분석하여 공정 순서 및 투입 장비 스펙을 한국어 표준 건축 용어로 자동 번역했습니다.",
    applicability: {
      climate: "92% (기술자 평가 진행 중)",
      law: "95% (국내 시공 기준 적합)",
      cost: "88% (공기 단축 효과 우수)"
    },
    linkedMaterialId: "m5",
    linkedMaterialName: "해외 혁신 시공 장비 & 자재 연동",
    verifiedByTechs: ["김태호 명장"],
    comments: []
  });

  closeModal();
  renderVideos("전체");
  showToast("새 유튜브/쇼츠 건축 기술 영상이 글로벌 미디어 허브에 등록되었습니다!");
}

// 4. 건축자재 쇼룸 & 시공 아카데미
function filterMaterials(category, btnEl) {
  if (btnEl) {
    document.querySelectorAll("#materialFilterBar .chip").forEach(c => c.classList.remove("active"));
    btnEl.classList.add("active");
  }
  renderMaterials(category);
}

function renderMaterials(category) {
  const grid = document.getElementById("materialGrid");
  const filtered = category === "전체"
    ? materialsData
    : materialsData.filter(m => m.category === category);

  grid.innerHTML = filtered.map(m => `
    <article class="card">
      <div class="card-body">
        <div class="badge-row">
          <span class="badge badge-blue">🧱 ${m.category}</span>
          <span class="badge badge-amber">기술자 시공평점 ★ ${m.techRating.toFixed(1)}</span>
        </div>
        <h3 class="card-title">${m.name}</h3>
        <div style="font-size:12.5px; color:var(--text-sub);">
          공급사: <strong>${m.supplier}</strong> · 표준단가: <strong style="color:var(--primary);">${m.price}</strong>
        </div>

        <div style="background:#f8fafc; border:1px solid var(--border); padding:10px; border-radius:8px; font-size:12.5px;">
          <div><strong>📐 핵심 스펙:</strong> ${m.spec}</div>
          <div style="margin-top:4px; color:#047857;"><strong>🎓 공인 시공 아카데미:</strong> ${m.academy}</div>
        </div>

        <div class="credits-box">
          <div class="credits-box-title">
            <span>🏛️ 이 자재가 실제 투입된 완공 건축물</span>
          </div>
          <div class="credit-tags">
            ${m.appliedBuildings.map(bName => `<span class="badge badge-purple">${bName}</span>`).join("")}
          </div>
        </div>

        <div style="font-size:12.5px; color:var(--text-sub); background:#fffbeb; border:1px solid #fde68a; padding:8px 10px; border-radius:6px;">
          💬 <strong>현직 기술자 후기:</strong> "${m.reviews[0]?.text || ''}" — <em>${m.reviews[0]?.author || ''}</em>
        </div>

        <div style="display:flex; gap:8px; margin-top:auto;">
          <button class="btn btn-primary" style="flex:1; justify-content:center;" onclick="openMaterialDetailModal('${m.id}')">
            자재 상세 & 시공아카데미 신청
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function openMaterialDetailModal(matId) {
  const m = materialsData.find(item => item.id === matId);
  if (!m) return;

  const html = `
    <span class="badge badge-blue">${m.category}</span>
    <h2 style="font-size:20px; margin:8px 0;">${m.name}</h2>
    <p style="font-size:13.5px; color:var(--text-sub); margin-bottom:14px;">
      공급업체: <strong>${m.supplier}</strong> | 공시 단가: <strong>${m.price}</strong>
    </p>

    <div style="background:#f8fafc; border:1px solid var(--border); padding:12px; border-radius:8px; margin-bottom:14px; font-size:13px;">
      <p><strong>• 상세 물성 및 인증 스펙:</strong> ${m.spec}</p>
      <p style="margin-top:6px;"><strong>• 실제 시공된 건축물 크레딧:</strong> ${m.appliedBuildings.join(", ")}</p>
    </div>

    <div style="background:#f0fdf4; border:1px solid #86efac; padding:12px; border-radius:8px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <strong style="font-size:13.5px; color:#166534;">🎓 ${m.academy}</strong>
        <div style="font-size:12px; color:#15803d;">이수 완료 시 기술자 프로필에 [공인 시공자 인증 마크]가 자동 부여됩니다.</div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="closeModal(); showToast('공인 시공자 아카데미 수강 및 샘플 신청이 접수되었습니다!')">
        교육 & 샘플 신청
      </button>
    </div>

    <h3 style="font-size:14.5px; margin-bottom:8px;">🔨 직접 시공해 본 기술자들의 실사용 평가</h3>
    <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:14px;">
      ${m.reviews.map(r => `
        <div style="background:#f8fafc; border:1px solid var(--border); padding:10px; border-radius:8px; font-size:13px;">
          <strong>${r.author}</strong>: "${r.text}"
        </div>
      `).join("")}
    </div>
  `;
  openModal(html);
}

function openAddMaterialModal() {
  const html = `
    <span class="badge badge-blue">건축자재 판매/제조업체 전용</span>
    <h2 style="font-size:20px; margin:8px 0;">🧱 신규 건축자재 및 해외 혁신 공구 등록</h2>
    <div class="form-group">
      <label>자재 / 장비 품명</label>
      <input type="text" id="nmName" class="form-control" placeholder="예: 열반사 로이 단열재 / 독일 전동 기밀 코킹건" />
    </div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
      <div class="form-group">
        <label>카테고리</label>
        <select id="nmCat" class="form-control">
          <option value="단열/방수재">단열/방수재</option>
          <option value="외장/벽돌">외장/벽돌</option>
          <option value="창호/유리">창호/유리</option>
          <option value="해외혁신공구">해외혁신공구</option>
        </select>
      </div>
      <div class="form-group">
        <label>표준 공급 단가</label>
        <input type="text" id="nmPrice" class="form-control" placeholder="예: ㎡당 35,000원" />
      </div>
    </div>
    <div class="form-group">
      <label>핵심 물성 스펙 및 공인 아카데미 과정 안내</label>
      <input type="text" id="nmSpec" class="form-control" placeholder="예: 친환경 HB 최우수 등급, 현장 기술자 무료 샘플 키트 지원" />
    </div>
    <button class="btn btn-primary" style="width:100%; justify-content:center;" onclick="submitNewMaterial()">
      자재 쇼룸에 공식 등재하기
    </button>
  `;
  openModal(html);
}

function submitNewMaterial() {
  const name = document.getElementById("nmName").value.trim() || "차세대 에어로겔 초단열 보드 (열교 차단용)";
  const category = document.getElementById("nmCat").value;
  const price = document.getElementById("nmPrice").value.trim() || "㎡당 48,000원";
  const spec = document.getElementById("nmSpec").value.trim() || "열전도율 0.015 W/mK, 불연 1등급 인증";

  materialsData.unshift({
    id: "m" + (materialsData.length + 1),
    name,
    category,
    supplier: "신규 입점 파트너사",
    price,
    spec,
    academy: "시공 매뉴얼 온라인 영상 교육 및 현장 샘플 발송 지원",
    appliedBuildings: ["양평 소풍재"],
    techRating: 5.0,
    reviews: [
      { author: "박진수 프로 (단열/방수)", text: "두께가 얇으면서도 단열 성능이 뛰어나 협소한 골조 모서리 열교 잡기에 최적입니다." }
    ]
  });

  closeModal();
  renderMaterials("전체");
  showToast("신규 건축자재가 쇼룸 DB에 등재되어 건축물·영상 태그와 연동되었습니다!");
}

// 5. AI 시공 사전 검수 체크리스트 & 단가 계산기
function loadChecklist(category, btnEl) {
  currentChecklistCategory = category;
  if (btnEl) {
    btnEl.parentElement.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    btnEl.classList.add("active");
  }
  renderChecklist(category);
}

function renderChecklist(category) {
  const list = checklistsData[category] || [];
  const container = document.getElementById("checklistContainer");
  const doneCount = list.filter(i => i.done).length;
  const pct = list.length ? Math.round((doneCount / list.length) * 100) : 0;

  const badge = document.getElementById("checklistProgressBadge");
  badge.textContent = `검수 달성률 ${pct}% (${pct === 100 ? "에스크로 기성금 지급 승인 가능" : "진행 중"})`;

  container.innerHTML = list.map((item, idx) => `
    <label class="checklist-item ${item.done ? "checked" : ""}">
      <input type="checkbox" ${item.done ? "checked" : ""} onchange="toggleChecklistItem('${category}', ${idx})" />
      <span style="font-size:13px; font-weight:600;">${item.text}</span>
    </label>
  `).join("");
}

function toggleChecklistItem(category, idx) {
  checklistsData[category][idx].done = !checklistsData[category][idx].done;
  renderChecklist(category);
}

function runAiInspectionDemo() {
  const box = document.getElementById("aiInspectionResult");
  box.innerHTML = `<strong style="color:#1d4ed8;">⏳ AI 비전 엔진이 현장 은폐 공정 사진을 스캔하고 있습니다...</strong>`;
  setTimeout(() => {
    box.innerHTML = `
      <div style="background:#ffffff; border-left:4px solid #10b981; padding:10px; border-radius:6px;">
        <div style="font-weight:800; color:#047857; margin-bottom:4px;">✅ AI 사전 검수 판독 완료 (신뢰도 97.4%)</div>
        <div>• <strong>기밀 테이핑 상태:</strong> 방습지 겹침 폭 100mm 이상 및 타카 자리 테이핑 정상 확인</div>
        <div>• <strong>주의 권고(1건):</strong> 우측 창호 하단 프레임 모서리에 팽창 밴드 밀착 상태를 마감 전 1회 추가 확인하세요.</div>
      </div>
    `;
    showToast("AI 현장 사진 사전 시공 검수 리포트가 생성되었습니다!");
  }, 600);
}

function calculateCost() {
  const baseWage = Number(document.getElementById("calcTrade").value || 330000);
  const tierMultiplier = Number(document.getElementById("calcTier").value || 1);
  const days = Number(document.getElementById("calcDays").value || 10);
  const total = Math.round((baseWage * tierMultiplier * days) / 10000) * 10000;
  document.getElementById("calcOutput").innerHTML = `
    <span>권장 스마트 에스크로 표준 노무비 (${days}품 기준):</span>
    <strong style="font-size:18px; color:#38bdf8;">${total.toLocaleString()}원</strong>
  `;
}

// 공통 모달 & 토스트 유틸
function openModal(htmlContent) {
  document.getElementById("modalBody").innerHTML = htmlContent;
  document.getElementById("commonModal").classList.add("open");
}

function closeModal() {
  document.getElementById("commonModal").classList.remove("open");
}

let toastTimer = null;
function showToast(msg) {
  const box = document.getElementById("toastBox");
  box.textContent = msg;
  box.style.display = "block";
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    box.style.display = "none";
  }, 3400);
}
