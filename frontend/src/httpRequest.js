import { getIdToken } from "./localStorageAccess";
import axios from "axios";

//Router
export const fetchUserData = async () => {
  const idToken = getIdToken();

  if (idToken) {
    return { nickname: window.localStorage.getItem("nickname") };
  } else {
    return null;
  }
};

//Join

export const requestJoin = async (userData) => {
  await axios
    .post({ ...userData, idToken: getIdToken() })
    .then((response) => response.data)
    .catch((err) => console.error(err));
};

//Main Page (의상 조회)

let tempClothList = [
  {
    name: "로고 프린팅 맨투맨 티셔츠",
    season: "가을",
    type: "상의",
    brand: "마크 곤잘레스",
    place: "옷장 3번째 칸",
    size: "L",
    cloth_body: "가끔 입기에는 나쁘지 않다...\n이제는 와릿이즌",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742348/1742348_2_500.jpg?t=20210825110402",
    favorite: false,
  },
  {
    name: "와이드 핏 데님 펜츠",
    season: "봄, 여름, 가을, 겨울",
    type: "하의",
    brand: "페이탈리즘",
    place: "행거",
    size: "30",
    cloth_body: "사계절 내내 애용하는 바지",
    file_name: "https://image.msscdn.net/images/goods_img/20210513/1948819/1948819_3_500.jpg?t=20220509120421",
    favorite: true,
  },
  {
    name: "아르더 토트백_블랙",
    season: "겨울",
    type: "가방",
    brand: "MADGOAT",
    place: "옷장 가방 전용 수납 공간",
    size: "FREE",
    cloth_body: "내가 가진 제일 비싼 가방 ",
    file_name: "https://image.msscdn.net/images/goods_img/20220224/2382075/2382075_1_500.jpg?t=20220224095432",
    favorite: false,
  },
  {
    name: "루키 언스트럭쳐 볼캡 NY (Black)",
    season: "여름",
    type: "모자",
    brand: "MLB",
    place: "모자 걸이",
    size: "FREE",
    cloth_body: "제일 자주 사용하는 모자",
    file_name: "https://image.msscdn.net/images/goods_img/20191105/1214164/1214164_8_500.jpg?t=20220311170314",
    favorite: false,
  },
  {
    name: "릴렉스드 베이식 블레이저 [블랙] ",
    season: "봄, 가을",
    type: "아우터",
    brand: "무신사 스탠다드",
    place: "메인 옷장",
    size: "100",
    cloth_body: "기본 아이템은 무탠다드!",
    file_name: "https://image.msscdn.net/images/prd_img/20200820/1558197/detail_1558197_30_500.jpg",
    favorite: true,
  },
  {
    name: "어센틱 - 레드 / VN000EE3RED1",
    season: "봄, 여름, 가을, 겨울",
    type: "신발",
    brand: "반스",
    place: "신발장",
    size: "270",
    cloth_body: "빨간색이 매력적인 신발",
    file_name: "https://image.msscdn.net/images/goods_img/20140620/102620/102620_8_500.jpg?t=20190227110752",
    favorite: false,
  },
  {
    name: "OORIGINAL BLACK - 조리 블랙",
    season: "여름",
    type: "신발",
    brand: "우포스",
    place: "신발장",
    size: "270",
    cloth_body: "여름에는 슬리퍼!",
    file_name: "https://image.msscdn.net/images/goods_img/20190710/1092992/1092992_1_500.jpg?t=20210511143707",
    favorite: true,
  },
  {
    name: "10TH ANNIVERSARY T-SHIRTS EDITION",
    season: "여름",
    type: "상의",
    brand: "그루브라임",
    place: "여름옷 상자",
    size: "L",
    cloth_body: "그루브라임 10주년 기념 반팔티셔츠 에디션",
    file_name: "https://image.msscdn.net/images/prd_img/20210324/1860490/detail_1860490_1_500.jpg",
    favorite: false,
  },
  {
    name: " HUNTING HOOD JACKET_BLACK",
    season: "겨울",
    type: "아우터",
    brand: "OUTSTANDING",
    place: "겨울옷 상자",
    size: "100",
    cloth_body: "빈티지 아웃도어 자켓의 제품을 아웃스탠딩의 감성으로 재해석해낸 제품",
    file_name: "https://image.msscdn.net/images/goods_img/20220209/2349864/2349864_1_500.png?t=20220323143623",
    favorite: false,
  },
  {
    name: "MEGAN CULOTTE - OFF WHITE",
    season: "여름",
    type: "하의",
    brand: "포트메인",
    place: "어디있는지 모르겠음..",
    size: "S",
    cloth_body: "미니멀한 래핑 실루엣이 돋보이는 큐롯팬츠",
    file_name: "https://image.msscdn.net/images/goods_img/20220401/2463018/2463018_1_500.jpg",
    favorite: false,
  },
  {
    name: "2 TONE ARCH HOODIE BLACK",
    season: "봄, 가을",
    type: "상의",
    brand: "예일",
    place: "메인 옷장",
    size: "100",
    cloth_body: "자주 입는 후드티",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    favorite: true,
  },
  {
    name: "원턱 와이드 스웨트팬츠 그레이",
    season: "봄, 여름, 가을, 겨울",
    type: "하의",
    brand: "가까이 유니언즈",
    place: "옷장 2번째 칸",
    size: "M",
    cloth_body: "무조건 손세탁 필수!",
    file_name: "https://image.msscdn.net/images/goods_img/20210906/2112059/2112059_1_500.jpg?t=20210909113606",
    favorite: false,
  },
  {
    name: " 메탈릭 버튼 부클레 트위드 자켓 ",
    season: "봄, 가을",
    type: "아우터",
    brand: "언티지",
    place: "옷장",
    size: "M",
    cloth_body: "70년대 글램 무드의 아카이브에서 영감을 받아 현대적으로 재해석한 컬렉션",
    file_name: "https://image.msscdn.net/images/prd_img/20210829/2096219/detail_2096219_4_500.jpg",
    favorite: true,
  },
  {
    name: "에어리 미니멀 니트 베스트 [BLACK] ",
    season: "봄, 여름, 가을",
    type: "상의",
    brand: "드로우 핏",
    place: "여름옷 상자",
    size: "L",
    cloth_body: "드로우핏의 썸머 시즌 베이직 니트 아이템",
    file_name: "https://image.msscdn.net/images/goods_img/20210428/1925536/1925536_2_500.jpg?t=20220422144120",
    favorite: false,
  },
  {
    name: "여포켓장식벨티드원피스 MVOP322R",
    season: "봄, 가을",
    type: "한벌옷",
    brand: "마인드 브릿지",
    place: "옷장",
    size: "M",
    cloth_body: "오피스룩으로 연출하기 좋은 사파리형 원피스",
    file_name: "https://image.msscdn.net/images/goods_img/20210510/1943045/1943045_1_500.jpg?t=20210510145206",
    favorite: false,
  },
  {
    name: "Sky High - MOD7w",
    season: "봄, 여름, 가을, 겨울",
    type: "하의",
    brand: "모드나인",
    place: "행거",
    size: "30",
    cloth_body: "입을거 없을 때 손이가는 바지",
    file_name: "https://image.msscdn.net/images/goods_img/20210521/1961498/1961498_1_500.jpg?t=20210521161608",
    favorite: false,
  },
  {
    name: "BW 아미 - 화이트 / BZ0579",
    season: "가을, 겨울",
    type: "신발",
    brand: "아디다스",
    place: "신발장",
    size: "280",
    cloth_body: "걷다보면 100번은 마주치게 되는 신발\n 요즘은 잘 안 신는듯...",
    file_name: "https://image.msscdn.net/images/goods_img/20170615/577636/577636_4_500.jpg?t=20200224172901",
    favorite: true,
  },
  {
    name: "여성 XXS 빌 토트백 - 블랙",
    season: "봄, 여름",
    type: "가방",
    brand: "발렌시아가",
    place: "옷장 가방칸",
    size: "FREE",
    cloth_body: "이게 제일 비싼 가방이었네...",
    file_name: "https://image.msscdn.net/images/goods_img/20220331/2458213/2458213_1_500.jpg",
    favorite: false,
  },
  {
    name: "Side Shirring Dress Black",
    season: "봄, 여름, 가을",
    type: "한벌옷",
    brand: "에트몽",
    place: "헹거",
    size: "M",
    cloth_body: "너무 예쁜데 기장이 길어서 좀 자르려고 합니다 160대 분들은 바로 예쁘게 입을 수 있을듯해요",
    file_name: "https://image.msscdn.net/images/goods_img/20220222/2377832/2377832_1_500.jpg?t=20220222174450",
    favorite: false,
  },
  {
    name: "가드닝 셔츠원피스 우먼 IVORY",
    season: "봄, 가을",
    type: "한벌옷",
    brand: "코닥",
    place: "옷장",
    size: "M",
    cloth_body: "가드닝 활동에서 모티브를 받아 밝고 유쾌하게 풀어낸 KODAK GRADENING 컬렉션",
    file_name: "https://image.msscdn.net/images/goods_img/20220517/2563691/2563691_1_500.jpg?t=20220517113659",
    favorite: false,
  },
  {
    name: "어썸스퀘어 클래식 블랙 남성 가죽시계",
    season: "봄, 여름, 가을, 겨울",
    type: "기타",
    brand: "로이드",
    place: "시계 보관함",
    size: "FREE",
    cloth_body: "크기가 작아서 은은하면서 포인트주기 좋네요 가성비굿",
    file_name: "https://image.msscdn.net/images/goods_img/20210127/1765855/1765855_1_500.jpg?t=20210127173841",
    favorite: true,
  },
  {
    name: "LAYERED LEATHER (BLACK)",
    season: "여름",
    type: "기타",
    brand: "마크4",
    place: "팔찌 보관함",
    size: "FREE",
    cloth_body: "여름이라 반팔만 입으면 허전한테 포인트 주기 좋아요",
    file_name: "https://image.msscdn.net/images/goods_img/20180417/757929/757929_4_500.jpg?t=20191204203507",
    favorite: true,
  },
  {
    name: " 써지컬 스틸 스퀘어 넥크리스",
    season: "봄, 여름, 가을, 겨울",
    type: "기타",
    brand: "크럼프",
    place: "목걸이 보관함",
    size: "FREE",
    cloth_body: "예뻐요 \n 조금 투머치한 감성이잇는데 \n 스트릿무드에는 굿임다",
    file_name: "https://image.msscdn.net/images/goods_img/20181004/872253/872253_2_500.jpg?t=20181119184200",
    favorite: false,
  },
];

export const fetchSeasonList = async (season) => {
  if (season === "봄") {
    return tempClothList.filter((c) => c.season.includes("봄"));
  } else if (season === "여름") {
    return tempClothList.filter((c) => c.season.includes("여름"));
  } else if (season === "가을") {
    return tempClothList.filter((c) => c.season.includes("가을"));
  } else if (season === "겨울") {
    return tempClothList.filter((c) => c.season.includes("겨울"));
  }
};

export const fetchFavList = async () => {
  return tempClothList.filter((c) => c.favorite);
};

export const fetchCategoryList = async (category) => {
  return tempClothList.filter((c) => c.type === category);
};

export const fetchClothList = async () => {
  return tempClothList;
};

//Board

export const fetchPostings = async (category) => {
  const rows1 = [
    { id: 1, title: "나만 알고 있는 옷 보관 꿀팁1", comments: 10, nickname: "suneom" },
    { id: 2, title: "나만 알고 있는 옷 보관 꿀팁2", comments: 7, nickname: "qkrco" },
    { id: 3, title: "나만 알고 있는 옷 보관 꿀팁3", comments: 15, nickname: "mihee" },
    { id: 4, title: "나만 알고 있는 옷 보관 꿀팁4", comments: 20, nickname: "ashrain" },
    { id: 5, title: "나만 알고 있는 옷 보관 꿀팁5", comments: 11, nickname: "kimcw" },
    { id: 6, title: "나만 알고 있는 옷 보관 꿀팁6", comments: 10, nickname: "suneom" },
    { id: 7, title: "나만 알고 있는 옷 보관 꿀팁7", comments: 7, nickname: "qkrco" },
    { id: 8, title: "나만 알고 있는 옷 보관 꿀팁8", comments: 15, nickname: "mihee" },
    { id: 9, title: "나만 알고 있는 옷 보관 꿀팁9", comments: 20, nickname: "ashrain" },
    { id: 10, title: "나만 알고 있는 옷 보관 꿀팁10", comments: 11, nickname: "kimcw" },
    { id: 11, title: "나만 알고 있는 옷 보관 꿀팁11", comments: 10, nickname: "suneom" },
    { id: 12, title: "나만 알고 있는 옷 보관 꿀팁12", comments: 7, nickname: "qkrco" },
    { id: 13, title: "나만 알고 있는 옷 보관 꿀팁13", comments: 15, nickname: "mihee" },
    { id: 14, title: "나만 알고 있는 옷 보관 꿀팁14", comments: 20, nickname: "ashrain" },
    { id: 15, title: "나만 알고 있는 옷 보관 꿀팁15", comments: 11, nickname: "kimcw" },
    { id: 16, title: "나만 알고 있는 옷 보관 꿀팁16", comments: 10, nickname: "suneom" },
    { id: 17, title: "나만 알고 있는 옷 보관 꿀팁17", comments: 7, nickname: "qkrco" },
    { id: 18, title: "나만 알고 있는 옷 보관 꿀팁18", comments: 15, nickname: "mihee" },
    { id: 19, title: "나만 알고 있는 옷 보관 꿀팁19", comments: 20, nickname: "ashrain" },
    { id: 20, title: "나만 알고 있는 옷 보관 꿀팁20", comments: 11, nickname: "kimcw" },
    { id: 21, title: "나만 알고 있는 옷 보관 꿀팁21", comments: 10, nickname: "suneom" },
    { id: 22, title: "나만 알고 있는 옷 보관 꿀팁22", comments: 7, nickname: "qkrco" },
    { id: 23, title: "나만 알고 있는 옷 보관 꿀팁23", comments: 15, nickname: "mihee" },
    { id: 24, title: "나만 알고 있는 옷 보관 꿀팁24", comments: 20, nickname: "ashrain" },
    { id: 25, title: "나만 알고 있는 옷 보관 꿀팁25", comments: 11, nickname: "kimcw" },
    { id: 26, title: "나만 알고 있는 옷 보관 꿀팁26", comments: 10, nickname: "suneom" },
    { id: 27, title: "나만 알고 있는 옷 보관 꿀팁27", comments: 7, nickname: "qkrco" },
    { id: 28, title: "나만 알고 있는 옷 보관 꿀팁28", comments: 15, nickname: "mihee" },
    { id: 29, title: "나만 알고 있는 옷 보관 꿀팁29", comments: 20, nickname: "ashrain" },
    { id: 30, title: "나만 알고 있는 옷 보관 꿀팁30", comments: 11, nickname: "kimcw" },
    { id: 31, title: "나만 알고 있는 옷 보관 꿀팁31", comments: 10, nickname: "suneom" },
    { id: 32, title: "나만 알고 있는 옷 보관 꿀팁32", comments: 7, nickname: "qkrco" },
    { id: 33, title: "나만 알고 있는 옷 보관 꿀팁33", comments: 15, nickname: "mihee" },
    { id: 34, title: "나만 알고 있는 옷 보관 꿀팁34", comments: 20, nickname: "ashrain" },
    { id: 35, title: "나만 알고 있는 옷 보관 꿀팁35", comments: 11, nickname: "kimcw" },
    { id: 36, title: "나만 알고 있는 옷 보관 꿀팁36", comments: 10, nickname: "suneom" },
    { id: 37, title: "나만 알고 있는 옷 보관 꿀팁37", comments: 7, nickname: "qkrco" },
    { id: 38, title: "나만 알고 있는 옷 보관 꿀팁38", comments: 15, nickname: "mihee" },
    { id: 39, title: "나만 알고 있는 옷 보관 꿀팁39", comments: 20, nickname: "ashrain" },
    { id: 40, title: "나만 알고 있는 옷 보관 꿀팁40", comments: 11, nickname: "kimcw" },
  ];

  const rows2 = [
    { id: 1, title: "이렇게 입어보면 어떨까요1", comments: 10, nickname: "suneom" },
    { id: 2, title: "이렇게 입어보면 어떨까요2", comments: 7, nickname: "qkrco" },
    { id: 3, title: "이렇게 입어보면 어떨까요3", comments: 15, nickname: "mihee" },
    { id: 4, title: "이렇게 입어보면 어떨까요4", comments: 20, nickname: "ashrain" },
    { id: 5, title: "이렇게 입어보면 어떨까요5", comments: 11, nickname: "kimcw" },
    { id: 6, title: "이렇게 입어보면 어떨까요6", comments: 10, nickname: "suneom" },
    { id: 7, title: "이렇게 입어보면 어떨까요7", comments: 7, nickname: "qkrco" },
    { id: 8, title: "이렇게 입어보면 어떨까요8", comments: 15, nickname: "mihee" },
    { id: 9, title: "이렇게 입어보면 어떨까요9", comments: 20, nickname: "ashrain" },
    { id: 10, title: "이렇게 입어보면 어떨까요10", comments: 11, nickname: "kimcw" },
    { id: 11, title: "이렇게 입어보면 어떨까요11", comments: 10, nickname: "suneom" },
    { id: 12, title: "이렇게 입어보면 어떨까요12", comments: 7, nickname: "qkrco" },
    { id: 13, title: "이렇게 입어보면 어떨까요13", comments: 15, nickname: "mihee" },
    { id: 14, title: "이렇게 입어보면 어떨까요14", comments: 20, nickname: "ashrain" },
    { id: 15, title: "이렇게 입어보면 어떨까요15", comments: 11, nickname: "kimcw" },
    { id: 16, title: "이렇게 입어보면 어떨까요16", comments: 10, nickname: "suneom" },
    { id: 17, title: "이렇게 입어보면 어떨까요17", comments: 7, nickname: "qkrco" },
    { id: 18, title: "이렇게 입어보면 어떨까요18", comments: 15, nickname: "mihee" },
    { id: 19, title: "이렇게 입어보면 어떨까요19", comments: 20, nickname: "ashrain" },
    { id: 20, title: "이렇게 입어보면 어떨까요20", comments: 11, nickname: "kimcw" },
    { id: 21, title: "이렇게 입어보면 어떨까요21", comments: 10, nickname: "suneom" },
    { id: 22, title: "이렇게 입어보면 어떨까요22", comments: 7, nickname: "qkrco" },
    { id: 23, title: "이렇게 입어보면 어떨까요23", comments: 15, nickname: "mihee" },
    { id: 24, title: "이렇게 입어보면 어떨까요24", comments: 20, nickname: "ashrain" },
    { id: 25, title: "이렇게 입어보면 어떨까요25", comments: 11, nickname: "kimcw" },
    { id: 26, title: "이렇게 입어보면 어떨까요26", comments: 10, nickname: "suneom" },
    { id: 27, title: "이렇게 입어보면 어떨까요27", comments: 7, nickname: "qkrco" },
    { id: 28, title: "이렇게 입어보면 어떨까요28", comments: 15, nickname: "mihee" },
    { id: 29, title: "이렇게 입어보면 어떨까요29", comments: 20, nickname: "ashrain" },
    { id: 30, title: "이렇게 입어보면 어떨까요30", comments: 11, nickname: "kimcw" },
    { id: 31, title: "이렇게 입어보면 어떨까요31", comments: 10, nickname: "suneom" },
    { id: 32, title: "이렇게 입어보면 어떨까요32", comments: 7, nickname: "qkrco" },
    { id: 33, title: "이렇게 입어보면 어떨까요33", comments: 15, nickname: "mihee" },
    { id: 34, title: "이렇게 입어보면 어떨까요34", comments: 20, nickname: "ashrain" },
    { id: 35, title: "이렇게 입어보면 어떨까요35", comments: 11, nickname: "kimcw" },
    { id: 36, title: "이렇게 입어보면 어떨까요36", comments: 10, nickname: "suneom" },
    { id: 37, title: "이렇게 입어보면 어떨까요37", comments: 7, nickname: "qkrco" },
    { id: 38, title: "이렇게 입어보면 어떨까요38", comments: 15, nickname: "mihee" },
    { id: 39, title: "이렇게 입어보면 어떨까요39", comments: 20, nickname: "ashrain" },
    { id: 40, title: "이렇게 입어보면 어떨까요40", comments: 11, nickname: "kimcw" },
  ];

  if (category === "tip") {
    return rows1;
  } else if (category === "fashion") {
    return rows2;
  }
};