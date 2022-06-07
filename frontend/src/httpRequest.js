import { getIdToken, removeIdToken } from "./localStorageAccess";
import axios from "axios";
import { logoutDispatch } from "./reduxAccess";

const axiosPostRequest = async (url, data = {}, headerOption = null) => {
  let idToken = getIdToken();

  return await axios.post(`${process.env.REACT_APP_SERVER_URL}${url}`, { ...data, idToken }, { headers: headerOption }).catch((err) => {
    if (err?.response?.data?.message === "EXPIRED_ID_TOKEN") {
      window.alert("사용자 세션이 만료되었습니다.\n다시 로그인해주세요.");
      logoutDispatch();
      removeIdToken();
      window.location.replace("/login");
    } else if (err?.response?.data?.message === "INVALID_ID_TOKEN") {
      window.alert("잘못된 사용자 정보입니다.\n다시 로그인해주세요.");
      logoutDispatch();
      removeIdToken();
      window.location.replace("/login");
    }
  });
};

const axiosGetRequest = async (url) => {
  return await axios.get(`${process.env.REACT_APP_SERVER_URL}${url}`);
};

//Router

//특정 idToken에 해당하는 사용자 정보 요청
export const fetchUserData = async () => {
  return axiosPostRequest("/user/userinfo");
};

//Join

//새로운 사용자 회원가입 요청
export const requestJoin = (userData) => {
  return axiosPostRequest("/user/register", userData);
};

//닉네임 중복확인 요청
export const requestCheckNickname = (nickname) => {
  return axiosPostRequest("/user/check_nickname", nickname);
};

//Main Page (의상 조회)

let tempClothList = [
  {
    cloth_id: 1,
    name: "로고 프린팅 맨투맨 티셔츠",
    season: "가을",
    category: "상의",
    brand: "마크 곤잘레스",
    place: "옷장 3번째 칸",
    size: "L",
    cloth_body: "가끔 입기에는 나쁘지 않다...\n이제는 와릿이즌",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742348/1742348_2_500.jpg?t=20210825110402",
    favorite: false,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
  {
    cloth_id: 2,
    name: "와이드 핏 데님 펜츠",
    season: "봄, 여름, 가을, 겨울",
    category: "하의",
    brand: "페이탈리즘",
    place: "행거",
    size: "30",
    cloth_body: "사계절 내내 애용하는 바지",
    file_name: "https://image.msscdn.net/images/goods_img/20210513/1948819/1948819_3_500.jpg?t=20220509120421",
    favorite: true,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
  {
    cloth_id: 3,
    name: "아르더 토트백_블랙",
    season: "겨울",
    category: "가방",
    brand: "MADGOAT",
    place: "옷장 가방 전용 수납 공간",
    size: "FREE",
    cloth_body: "내가 가진 제일 비싼 가방 ",
    file_name: "https://image.msscdn.net/images/goods_img/20220224/2382075/2382075_1_500.jpg?t=20220224095432",
    favorite: false,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
  {
    cloth_id: 4,
    name: "루키 언스트럭쳐 볼캡 NY (Black)",
    season: "여름",
    category: "모자",
    brand: "MLB",
    place: "모자 걸이",
    size: "FREE",
    cloth_body: "제일 자주 사용하는 모자",
    file_name: "https://image.msscdn.net/images/goods_img/20191105/1214164/1214164_8_500.jpg?t=20220311170314",
    favorite: false,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
  {
    cloth_id: 5,
    name: "릴렉스드 베이식 블레이저 [블랙] ",
    season: "봄, 가을",
    category: "아우터",
    brand: "무신사 스탠다드",
    place: "메인 옷장",
    size: "100",
    cloth_body: "기본 아이템은 무탠다드!",
    file_name: "https://image.msscdn.net/images/prd_img/20200820/1558197/detail_1558197_30_500.jpg",
    favorite: true,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
  {
    cloth_id: 6,
    name: "어센틱 - 레드 / VN000EE3RED1",
    season: "봄, 여름, 가을, 겨울",
    category: "신발",
    brand: "반스",
    place: "신발장",
    size: "270",
    cloth_body: "빨간색이 매력적인 신발",
    file_name: "https://image.msscdn.net/images/goods_img/20140620/102620/102620_8_500.jpg?t=20190227110752",
    favorite: false,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
  {
    cloth_id: 7,
    name: "OORIGINAL BLACK - 조리 블랙",
    season: "여름",
    category: "신발",
    brand: "우포스",
    place: "신발장",
    size: "270",
    cloth_body: "여름에는 슬리퍼!",
    file_name: "https://image.msscdn.net/images/goods_img/20190710/1092992/1092992_1_500.jpg?t=20210511143707",
    favorite: true,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
  {
    cloth_id: 8,
    name: "10TH ANNIVERSARY T-SHIRTS EDITION",
    season: "여름",
    category: "상의",
    brand: "그루브라임",
    place: "여름옷 상자",
    size: "L",
    cloth_body: "그루브라임 10주년 기념 반팔티셔츠 에디션",
    file_name: "https://image.msscdn.net/images/prd_img/20210324/1860490/detail_1860490_1_500.jpg",
    favorite: false,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
  {
    cloth_id: 9,
    name: " HUNTING HOOD JACKET_BLACK",
    season: "겨울",
    category: "아우터",
    brand: "OUTSTANDING",
    place: "겨울옷 상자",
    size: "100",
    cloth_body: "빈티지 아웃도어 자켓의 제품을 아웃스탠딩의 감성으로 재해석해낸 제품",
    file_name: "https://image.msscdn.net/images/goods_img/20220209/2349864/2349864_1_500.png?t=20220323143623",
    favorite: false,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
  {
    cloth_id: 10,
    name: "MEGAN CULOTTE - OFF WHITE",
    season: "여름",
    category: "하의",
    brand: "포트메인",
    place: "어디있는지 모르겠음..",
    size: "S",
    cloth_body: "미니멀한 래핑 실루엣이 돋보이는 큐롯팬츠",
    file_name: "https://image.msscdn.net/images/goods_img/20220401/2463018/2463018_1_500.jpg",
    favorite: false,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
  {
    cloth_id: 11,
    name: "2 TONE ARCH HOODIE BLACK",
    season: "봄, 가을",
    category: "상의",
    brand: "예일",
    place: "메인 옷장",
    size: "100",
    cloth_body: "자주 입는 후드티",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    favorite: true,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
  {
    cloth_id: 12,
    name: "원턱 와이드 스웨트팬츠 그레이",
    season: "봄, 여름, 가을, 겨울",
    category: "하의",
    brand: "가까이 유니언즈",
    place: "옷장 2번째 칸",
    size: "M",
    cloth_body: "무조건 손세탁 필수!",
    file_name: "https://image.msscdn.net/images/goods_img/20210906/2112059/2112059_1_500.jpg?t=20210909113606",
    favorite: false,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
  {
    cloth_id: 13,
    name: " 메탈릭 버튼 부클레 트위드 자켓 ",
    season: "봄, 가을",
    category: "아우터",
    brand: "언티지",
    place: "옷장",
    size: "M",
    cloth_body: "70년대 글램 무드의 아카이브에서 영감을 받아 현대적으로 재해석한 컬렉션",
    file_name: "https://image.msscdn.net/images/prd_img/20210829/2096219/detail_2096219_4_500.jpg",
    favorite: true,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
  {
    cloth_id: 14,
    name: "에어리 미니멀 니트 베스트 [BLACK] ",
    season: "봄, 여름, 가을",
    category: "상의",
    brand: "드로우 핏",
    place: "여름옷 상자",
    size: "L",
    cloth_body: "드로우핏의 썸머 시즌 베이직 니트 아이템",
    file_name: "https://image.msscdn.net/images/goods_img/20210428/1925536/1925536_2_500.jpg?t=20220422144120",
    favorite: false,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
  {
    cloth_id: 15,
    name: "여포켓장식벨티드원피스 MVOP322R",
    season: "봄, 가을",
    category: "한벌옷",
    brand: "마인드 브릿지",
    place: "옷장",
    size: "M",
    cloth_body: "오피스룩으로 연출하기 좋은 사파리형 원피스",
    file_name: "https://image.msscdn.net/images/goods_img/20210510/1943045/1943045_1_500.jpg?t=20210510145206",
    favorite: false,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
  {
    cloth_id: 16,
    name: "Sky High - MOD7w",
    season: "봄, 여름, 가을, 겨울",
    category: "하의",
    brand: "모드나인",
    place: "행거",
    size: "30",
    cloth_body: "입을거 없을 때 손이가는 바지",
    file_name: "https://image.msscdn.net/images/goods_img/20210521/1961498/1961498_1_500.jpg?t=20210521161608",
    favorite: false,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
  {
    cloth_id: 17,
    name: "BW 아미 - 화이트 / BZ0579",
    season: "가을, 겨울",
    category: "신발",
    brand: "아디다스",
    place: "신발장",
    size: "280",
    cloth_body: "걷다보면 100번은 마주치게 되는 신발\n 요즘은 잘 안 신는듯...",
    file_name: "https://image.msscdn.net/images/goods_img/20170615/577636/577636_4_500.jpg?t=20200224172901",
    favorite: true,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
  {
    cloth_id: 18,
    name: "여성 XXS 빌 토트백 - 블랙",
    season: "봄, 여름",
    category: "가방",
    brand: "발렌시아가",
    place: "옷장 가방칸",
    size: "FREE",
    cloth_body: "이게 제일 비싼 가방이었네...",
    file_name: "https://image.msscdn.net/images/goods_img/20220331/2458213/2458213_1_500.jpg",
    favorite: false,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
  {
    cloth_id: 19,
    name: "Side Shirring Dress Black",
    season: "봄, 여름, 가을",
    category: "한벌옷",
    brand: "에트몽",
    place: "헹거",
    size: "M",
    cloth_body: "너무 예쁜데 기장이 길어서 좀 자르려고 합니다 160대 분들은 바로 예쁘게 입을 수 있을듯해요",
    file_name: "https://image.msscdn.net/images/goods_img/20220222/2377832/2377832_1_500.jpg?t=20220222174450",
    favorite: false,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
  {
    cloth_id: 20,
    name: "가드닝 셔츠원피스 우먼 IVORY",
    season: "봄, 가을",
    category: "한벌옷",
    brand: "코닥",
    place: "옷장",
    size: "M",
    cloth_body: "가드닝 활동에서 모티브를 받아 밝고 유쾌하게 풀어낸 KODAK GRADENING 컬렉션",
    file_name: "https://image.msscdn.net/images/goods_img/20220517/2563691/2563691_1_500.jpg?t=20220517113659",
    favorite: false,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
  {
    cloth_id: 21,
    name: "어썸스퀘어 클래식 블랙 남성 가죽시계",
    season: "봄, 여름, 가을, 겨울",
    category: "기타",
    brand: "로이드",
    place: "시계 보관함",
    size: "FREE",
    cloth_body: "크기가 작아서 은은하면서 포인트주기 좋네요 가성비굿",
    file_name: "https://image.msscdn.net/images/goods_img/20210127/1765855/1765855_1_500.jpg?t=20210127173841",
    favorite: true,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
  {
    cloth_id: 22,
    name: "LAYERED LEATHER (BLACK)",
    season: "여름",
    category: "기타",
    brand: "마크4",
    place: "팔찌 보관함",
    size: "FREE",
    cloth_body: "여름이라 반팔만 입으면 허전한테 포인트 주기 좋아요",
    file_name: "https://image.msscdn.net/images/goods_img/20180417/757929/757929_4_500.jpg?t=20191204203507",
    favorite: true,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
  {
    cloth_id: 23,
    name: " 써지컬 스틸 스퀘어 넥크리스",
    season: "봄, 여름, 가을, 겨울",
    category: "기타",
    brand: "크럼프",
    place: "목걸이 보관함",
    size: "FREE",
    cloth_body: "예뻐요 \n 조금 투머치한 감성이잇는데 \n 스트릿무드에는 굿임다",
    file_name: "https://image.msscdn.net/images/goods_img/20181004/872253/872253_2_500.jpg?t=20181119184200",
    favorite: false,
    id: 1,
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
  },
];

// 전체 의상 목록 요청
export const fetchClothList = async () => {
  return { data: tempClothList };

  //return  axiosPostRequest("/cloth");
};

// 특정 계절의 의상 목록 요청
export const fetchSeasonList = async (season) => {
  if (season === "봄") {
    return { data: tempClothList.filter((c) => c.season.includes("봄")) };
  } else if (season === "여름") {
    return { data: tempClothList.filter((c) => c.season.includes("여름")) };
  } else if (season === "가을") {
    return { data: tempClothList.filter((c) => c.season.includes("가을")) };
  } else if (season === "겨울") {
    return { data: tempClothList.filter((c) => c.season.includes("겨울")) };
  }
  //return  axiosPostRequest("/cloth/category", season);
};

// 좋아요 누른 의상 목록 요청
export const fetchFavList = async () => {
  return { data: tempClothList.filter((c) => c.favorite) };

  // return axiosPostRequest("/cloth/favorite");
};

// 특정 카테고리 의상 목록 요청
export const fetchCategoryList = async (category) => {
  return { data: tempClothList.filter((c) => c.category === category) };

  // return axiosPostRequest("/cloth/category", category);
};

//새로운 의상 추가 요청
export const requestNewCloth = (clothData) => {
  return axiosPostRequest("/cloth/crate", clothData, { "Content-Type": "multipart/form-data" });
};

//의상 정보 수정 요청
export const requestUpdateCloth = (clothData) => {
  return axiosPostRequest("/cloth/update", clothData, { "Content-Type": "multipart/form-data" });
};

//의상 정보 삭제 요청
export const requestDeleteCloth = (clothData) => {
  return axiosPostRequest("/cloth/delete", clothData);
};

// 특정 의상 상세정보 요청
export const requestPostDetail = (clothData) => {
  return axiosGetRequest(`/cloth/${clothData.cloth_id}`);
};

//의상 좋아요 설정 및 해제 요청
export const requestChangeClothFavState = (clothData) => {
  return axiosPostRequest("/cloth/change_favorite", clothData);
};

//의상 분류 폴더 생성
export const requestNewClothFolder = (folderData) => {
  return axiosPostRequest("/cloth/folder/create", folderData);
};

//의상 분류 폴더 조회
export const fetchClothFolderList = () => {
  return axiosPostRequest("/cloth/folder");
};

//의상 분류 폴더 수정
export const requesUpdateClothFolder = (folderData) => {
  return axiosPostRequest("/cloth/folder/update", folderData);
};

//의상 분류 폴더 삭제
export const requestDeleteClothFolder = (folderData) => {
  return axiosPostRequest("/cloth/folder/delete", folderData);
};

// 특정 분류 폴더에 의상 추가
export const requesAddClothToFolder = (clothFolderData) => {
  return axiosPostRequest("/cloth/folder/insert", clothFolderData);
};

// 특정 의상 분류 폴더의 의상 조회
export const fetchFolderClothList = (folderData) => {
  return axiosPostRequest("/cloth/folder/Detail", folderData);
};

// 특정 분류 폴더에 의상 t삭제
export const requesRemoveClothToFolder = (clothFolderData) => {
  return axiosPostRequest("/cloth/folder/remove", clothFolderData);
};

// 계절별 의상 추천 요청
export const fetchSeasonalRecommnend = () => {
  return axiosGetRequest("/recommend/season");
};

// 카테고리별 의상 추천 요청
export const fetchCategoricalRecommnend = () => {
  return axiosPostRequest("/recommend/category");
};

//Board

const tempPostingList = [
  {
    id: 1,
    post_id: 1,
    genre: "tip",
    post_body: "Test Post Body1",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁1",
    comment_count: 10,
    favorite: 1,
    favorite_count: 15,
    nickname: "suneom",
  },
  {
    id: 1,
    post_id: 2,
    genre: "tip",
    post_body: "Test Post Body2",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁2",
    comment_count: 7,
    favorite: 1,
    favorite_count: 15,
    nickname: "qkrco",
  },
  {
    id: 1,
    post_id: 3,
    genre: "tip",
    post_body: "Test Post Body3",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁3",
    comment_count: 15,
    favorite: 1,
    favorite_count: 15,
    nickname: "mihee",
  },
  {
    id: 1,
    post_id: 4,
    genre: "tip",
    post_body: "Test Post Body4",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁4",
    comment_count: 20,
    favorite: 1,
    favorite_count: 15,
    nickname: "ashrain",
  },
  {
    id: 1,
    post_id: 5,
    genre: "tip",
    post_body: "Test Post Body5",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁5",
    comment_count: 11,
    favorite: 1,
    favorite_count: 15,
    nickname: "kimcw",
  },
  {
    id: 1,
    post_id: 6,
    genre: "tip",
    post_body: "Test Post Body6",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁6",
    comment_count: 10,
    favorite: 1,
    favorite_count: 15,
    nickname: "suneom",
  },
  {
    id: 1,
    post_id: 7,
    genre: "tip",
    post_body: "Test Post Body7",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁7",
    comment_count: 7,
    favorite: 1,
    favorite_count: 15,
    nickname: "qkrco",
  },
  {
    id: 1,
    post_id: 8,
    genre: "tip",
    post_body: "Test Post Body8",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁8",
    comment_count: 15,
    favorite: 1,
    favorite_count: 15,
    nickname: "mihee",
  },
  {
    id: 1,
    post_id: 9,
    genre: "tip",
    post_body: "Test Post Body9",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁9",
    comment_count: 20,
    favorite: 1,
    favorite_count: 15,
    nickname: "ashrain",
  },
  {
    id: 1,
    post_id: 10,
    genre: "tip",
    post_body: "Test Post Body10",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁10",
    comment_count: 11,
    favorite: 1,
    favorite_count: 15,
    nickname: "kimcw",
  },
  {
    id: 1,
    post_id: 11,
    genre: "tip",
    post_body: "Test Post Body11",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁11",
    comment_count: 10,
    favorite: 1,
    favorite_count: 15,
    nickname: "suneom",
  },
  {
    id: 1,
    post_id: 12,
    genre: "tip",
    post_body: "Test Post Body12",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁12",
    comment_count: 7,
    favorite: 1,
    favorite_count: 15,
    nickname: "qkrco",
  },
  {
    id: 1,
    post_id: 13,
    genre: "tip",
    post_body: "Test Post Body13",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁13",
    comment_count: 15,
    favorite: 1,
    favorite_count: 15,
    nickname: "mihee",
  },
  {
    id: 1,
    post_id: 14,
    genre: "tip",
    post_body: "Test Post Body14",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁14",
    comment_count: 20,
    favorite: 1,
    favorite_count: 15,
    nickname: "ashrain",
  },
  {
    id: 1,
    post_id: 15,
    genre: "tip",
    post_body: "Test Post Body15",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁15",
    comment_count: 11,
    favorite: 1,
    favorite_count: 15,
    nickname: "kimcw",
  },
  {
    id: 1,
    post_id: 16,
    genre: "tip",
    post_body: "Test Post Body16",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁16",
    comment_count: 10,
    favorite: 1,
    favorite_count: 15,
    nickname: "suneom",
  },
  {
    id: 1,
    post_id: 17,
    genre: "tip",
    post_body: "Test Post Body17",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁17",
    comment_count: 7,
    favorite: 1,
    favorite_count: 15,
    nickname: "qkrco",
  },
  {
    id: 1,
    post_id: 18,
    genre: "tip",
    post_body: "Test Post Body18",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁18",
    comment_count: 15,
    favorite: 1,
    favorite_count: 15,
    nickname: "mihee",
  },
  {
    id: 1,
    post_id: 19,
    genre: "tip",
    post_body: "Test Post Body19",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁19",
    comment_count: 20,
    favorite: 1,
    favorite_count: 15,
    nickname: "ashrain",
  },
  {
    id: 1,
    post_id: 20,
    genre: "tip",
    post_body: "Test Post Body20",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁20",
    comment_count: 11,
    favorite: 1,
    favorite_count: 15,
    nickname: "kimcw",
  },
  {
    id: 1,
    post_id: 21,
    genre: "tip",
    post_body: "Test Post Body21",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁21",
    comment_count: 10,
    favorite: 1,
    favorite_count: 15,
    nickname: "suneom",
  },
  {
    id: 1,
    post_id: 22,
    genre: "tip",
    post_body: "Test Post Body22",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁22",
    comment_count: 7,
    favorite: 1,
    favorite_count: 15,
    nickname: "qkrco",
  },
  {
    id: 1,
    post_id: 23,
    genre: "tip",
    post_body: "Test Post Body23",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁23",
    comment_count: 15,
    favorite: 1,
    favorite_count: 15,
    nickname: "mihee",
  },
  {
    id: 1,
    post_id: 24,
    genre: "tip",
    post_body: "Test Post Body24",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁24",
    comment_count: 20,
    favorite: 1,
    favorite_count: 15,
    nickname: "ashrain",
  },
  {
    id: 1,
    post_id: 25,
    genre: "tip",
    post_body: "Test Post Body25",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁25",
    comment_count: 11,
    favorite: 1,
    favorite_count: 15,
    nickname: "kimcw",
  },
  {
    id: 1,
    post_id: 26,
    genre: "tip",
    post_body: "Test Post Body26",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁26",
    comment_count: 10,
    favorite: 1,
    favorite_count: 15,
    nickname: "suneom",
  },
  {
    id: 1,
    post_id: 27,
    genre: "tip",
    post_body: "Test Post Body27",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁27",
    comment_count: 7,
    favorite: 1,
    favorite_count: 15,
    nickname: "qkrco",
  },
  {
    id: 1,
    post_id: 28,
    genre: "tip",
    post_body: "Test Post Body28",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁28",
    comment_count: 15,
    favorite: 1,
    favorite_count: 15,
    nickname: "mihee",
  },
  {
    id: 1,
    post_id: 29,
    genre: "tip",
    post_body: "Test Post Body29",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁29",
    comment_count: 20,
    favorite: 1,
    favorite_count: 15,
    nickname: "ashrain",
  },
  {
    id: 1,
    post_id: 30,
    genre: "tip",
    post_body: "Test Post Body30",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁30",
    comment_count: 11,
    favorite: 1,
    favorite_count: 15,
    nickname: "kimcw",
  },
  {
    id: 1,
    post_id: 31,
    genre: "tip",
    post_body: "Test Post Body31",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁31",
    comment_count: 10,
    favorite: 1,
    favorite_count: 15,
    nickname: "suneom",
  },
  {
    id: 1,
    post_id: 32,
    genre: "tip",
    post_body: "Test Post Body32",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁32",
    comment_count: 7,
    favorite: 1,
    favorite_count: 15,
    nickname: "qkrco",
  },
  {
    id: 1,
    post_id: 33,
    genre: "tip",
    post_body: "Test Post Body33",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁33",
    comment_count: 15,
    favorite: 1,
    favorite_count: 15,
    nickname: "mihee",
  },
  {
    id: 1,
    post_id: 34,
    genre: "tip",
    post_body: "Test Post Body34",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁34",
    comment_count: 20,
    favorite: 1,
    favorite_count: 15,
    nickname: "ashrain",
  },
  {
    id: 1,
    post_id: 35,
    genre: "tip",
    post_body: "Test Post Body35",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁35",
    comment_count: 11,
    favorite: 1,
    favorite_count: 15,
    nickname: "kimcw",
  },
  {
    id: 1,
    post_id: 36,
    genre: "tip",
    post_body: "Test Post Body36",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁36",
    comment_count: 10,
    favorite: 1,
    favorite_count: 15,
    nickname: "suneom",
  },
  {
    id: 1,
    post_id: 37,
    genre: "tip",
    post_body: "Test Post Body37",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁37",
    comment_count: 7,
    favorite: 1,
    favorite_count: 15,
    nickname: "qkrco",
  },
  {
    id: 1,
    post_id: 38,
    genre: "tip",
    post_body: "Test Post Body38",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁38",
    comment_count: 15,
    favorite: 1,
    favorite_count: 15,
    nickname: "mihee",
  },
  {
    id: 1,
    post_id: 39,
    genre: "tip",
    post_body: "Test Post Body39",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁39",
    comment_count: 20,
    favorite: 1,
    favorite_count: 15,
    nickname: "ashrain",
  },
  {
    id: 1,
    post_id: 40,
    genre: "tip",
    post_body: "Test Post Body40",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "나만 알고 있는 옷 보관 꿀팁40",
    comment_count: 11,
    favorite: 1,
    favorite_count: 15,
    nickname: "kimcw",
  },
  {
    id: 1,
    post_id: 41,
    genre: "fashion",
    post_body: "Test Post Body41",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요1",
    comment_count: 10,
    favorite: 1,
    favorite_count: 15,
    nickname: "suneom",
  },
  {
    id: 1,
    post_id: 42,
    genre: "fashion",
    post_body: "Test Post Body42",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요2",
    comment_count: 7,
    favorite: 1,
    favorite_count: 15,
    nickname: "qkrco",
  },
  {
    id: 1,
    post_id: 43,
    genre: "fashion",
    post_body: "Test Post Body43",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요3",
    comment_count: 15,
    favorite: 1,
    favorite_count: 15,
    nickname: "mihee",
  },
  {
    id: 1,
    post_id: 44,
    genre: "fashion",
    post_body: "Test Post Body44",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요4",
    comment_count: 20,
    favorite: 1,
    favorite_count: 15,
    nickname: "ashrain",
  },
  {
    id: 1,
    post_id: 45,
    genre: "fashion",
    post_body: "Test Post Body45",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요5",
    comment_count: 11,
    favorite: 1,
    favorite_count: 15,
    nickname: "kimcw",
  },
  {
    id: 1,
    post_id: 46,
    genre: "fashion",
    post_body: "Test Post Body46",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요6",
    comment_count: 10,
    favorite: 1,
    favorite_count: 15,
    nickname: "suneom",
  },
  {
    id: 1,
    post_id: 47,
    genre: "fashion",
    post_body: "Test Post Body47",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요7",
    comment_count: 7,
    favorite: 1,
    favorite_count: 15,
    nickname: "qkrco",
  },
  {
    id: 1,
    post_id: 48,
    genre: "fashion",
    post_body: "Test Post Body48",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요8",
    comment_count: 15,
    favorite: 1,
    favorite_count: 15,
    nickname: "mihee",
  },
  {
    id: 1,
    post_id: 49,
    genre: "fashion",
    post_body: "Test Post Body49",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요9",
    comment_count: 20,
    favorite: 1,
    favorite_count: 15,
    nickname: "ashrain",
  },
  {
    id: 1,
    post_id: 50,
    genre: "fashion",
    post_body: "Test Post Body50",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요10",
    comment_count: 11,
    favorite: 1,
    favorite_count: 15,
    nickname: "kimcw",
  },
  {
    id: 1,
    post_id: 51,
    genre: "fashion",
    post_body: "Test Post Body51",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요11",
    comment_count: 10,
    favorite: 1,
    favorite_count: 15,
    nickname: "suneom",
  },
  {
    id: 1,
    post_id: 52,
    genre: "fashion",
    post_body: "Test Post Body52",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요12",
    comment_count: 7,
    favorite: 1,
    favorite_count: 15,
    nickname: "qkrco",
  },
  {
    id: 1,
    post_id: 53,
    genre: "fashion",
    post_body: "Test Post Body53",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요13",
    comment_count: 15,
    favorite: 1,
    favorite_count: 15,
    nickname: "mihee",
  },
  {
    id: 1,
    post_id: 54,
    genre: "fashion",
    post_body: "Test Post Body54",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요14",
    comment_count: 20,
    favorite: 1,
    favorite_count: 15,
    nickname: "ashrain",
  },
  {
    id: 1,
    post_id: 55,
    genre: "fashion",
    post_body: "Test Post Body55",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요15",
    comment_count: 11,
    favorite: 1,
    favorite_count: 15,
    nickname: "kimcw",
  },
  {
    id: 1,
    post_id: 56,
    genre: "fashion",
    post_body: "Test Post Body56",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요16",
    comment_count: 10,
    favorite: 1,
    favorite_count: 15,
    nickname: "suneom",
  },
  {
    id: 1,
    post_id: 57,
    genre: "fashion",
    post_body: "Test Post Body57",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요17",
    comment_count: 7,
    favorite: 1,
    favorite_count: 15,
    nickname: "qkrco",
  },
  {
    id: 1,
    post_id: 58,
    genre: "fashion",
    post_body: "Test Post Body58",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요18",
    comment_count: 15,
    favorite: 1,
    favorite_count: 15,
    nickname: "mihee",
  },
  {
    id: 1,
    post_id: 59,
    genre: "fashion",
    post_body: "Test Post Body59",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요19",
    comment_count: 20,
    favorite: 1,
    favorite_count: 15,
    nickname: "ashrain",
  },
  {
    id: 1,
    post_id: 60,
    genre: "fashion",
    post_body: "Test Post Body60",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요20",
    comment_count: 11,
    favorite: 1,
    favorite_count: 15,
    nickname: "kimcw",
  },
  {
    id: 1,
    post_id: 61,
    genre: "fashion",
    post_body: "Test Post Body61",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요21",
    comment_count: 10,
    favorite: 1,
    favorite_count: 15,
    nickname: "suneom",
  },
  {
    id: 1,
    post_id: 62,
    genre: "fashion",
    post_body: "Test Post Body62",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요22",
    comment_count: 7,
    favorite: 1,
    favorite_count: 15,
    nickname: "qkrco",
  },
  {
    id: 1,
    post_id: 63,
    genre: "fashion",
    post_body: "Test Post Body63",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요23",
    comment_count: 15,
    favorite: 1,
    favorite_count: 15,
    nickname: "mihee",
  },
  {
    id: 1,
    post_id: 64,
    genre: "fashion",
    post_body: "Test Post Body64",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요24",
    comment_count: 20,
    favorite: 1,
    favorite_count: 15,
    nickname: "ashrain",
  },
  {
    id: 1,
    post_id: 65,
    genre: "fashion",
    post_body: "Test Post Body65",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요25",
    comment_count: 11,
    favorite: 1,
    favorite_count: 15,
    nickname: "kimcw",
  },
  {
    id: 1,
    post_id: 66,
    genre: "fashion",
    post_body: "Test Post Body66",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요26",
    comment_count: 10,
    favorite: 1,
    favorite_count: 15,
    nickname: "suneom",
  },
  {
    id: 1,
    post_id: 67,
    genre: "fashion",
    post_body: "Test Post Body67",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요27",
    comment_count: 7,
    favorite: 1,
    favorite_count: 15,
    nickname: "qkrco",
  },
  {
    id: 1,
    post_id: 68,
    genre: "fashion",
    post_body: "Test Post Body68",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요28",
    comment_count: 15,
    favorite: 1,
    favorite_count: 15,
    nickname: "mihee",
  },
  {
    id: 1,
    post_id: 69,
    genre: "fashion",
    post_body: "Test Post Body69",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요29",
    comment_count: 20,
    favorite: 1,
    favorite_count: 15,
    nickname: "ashrain",
  },
  {
    id: 1,
    post_id: 70,
    genre: "fashion",
    post_body: "Test Post Body70",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요30",
    comment_count: 11,
    favorite: 1,
    favorite_count: 15,
    nickname: "kimcw",
  },
  {
    id: 1,
    post_id: 71,
    genre: "fashion",
    post_body: "Test Post Body71",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요31",
    comment_count: 10,
    favorite: 1,
    favorite_count: 15,
    nickname: "suneom",
  },
  {
    id: 1,
    post_id: 72,
    genre: "fashion",
    post_body: "Test Post Body72",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요32",
    comment_count: 7,
    favorite: 1,
    favorite_count: 15,
    nickname: "qkrco",
  },
  {
    id: 1,
    post_id: 73,
    genre: "fashion",
    post_body: "Test Post Body73",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요33",
    comment_count: 15,
    favorite: 1,
    favorite_count: 15,
    nickname: "mihee",
  },
  {
    id: 1,
    post_id: 74,
    genre: "fashion",
    post_body: "Test Post Body74",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요34",
    comment_count: 20,
    favorite: 1,
    favorite_count: 15,
    nickname: "ashrain",
  },
  {
    id: 1,
    post_id: 75,
    genre: "fashion",
    post_body: "Test Post Body75",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요35",
    comment_count: 11,
    favorite: 1,
    favorite_count: 15,
    nickname: "kimcw",
  },
  {
    id: 1,
    post_id: 76,
    genre: "fashion",
    post_body: "Test Post Body76",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요36",
    comment_count: 10,
    favorite: 1,
    favorite_count: 15,
    nickname: "suneom",
  },
  {
    id: 1,
    post_id: 77,
    genre: "fashion",
    post_body: "Test Post Body77",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요37",
    comment_count: 7,
    favorite: 1,
    favorite_count: 15,
    nickname: "qkrco",
  },
  {
    id: 1,
    post_id: 78,
    genre: "fashion",
    post_body: "Test Post Body78",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요38",
    comment_count: 15,
    favorite: 1,
    favorite_count: 15,
    nickname: "mihee",
  },
  {
    id: 1,
    post_id: 79,
    genre: "fashion",
    post_body: "Test Post Body79",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요39",
    comment_count: 20,
    favorite: 1,
    favorite_count: 15,
    nickname: "ashrain",
  },
  {
    id: 1,
    post_id: 80,
    genre: "fashion",
    post_body: "Test Post Body80",
    file_name: "https://image.msscdn.net/images/goods_img/20210111/1742661/1742661_5_500.jpg",
    created_date: "2022-06-01",
    updated_date: "2022-06-01",
    title: "이렇게 입어보면 어떨까요40",
    comment_count: 11,
    favorite: 1,
    favorite_count: 15,
    nickname: "kimcw",
  },
];

// 특정 카테고리의 게시글 목록 요청
export const fetchPostings = async (data) => {
  return { data: tempPostingList.filter((p) => p.genre === data.genre) };

  //return return  axiosGetRequest(`/post/{category.genre}`);
};

// 새로운 게시글 생성 요청
export const requestNewPosting = async (postData) => {
  return axiosPostRequest("/post/create", postData, { "Content-Type": "multipart/form-data" });
};

// 게시글 수정 요청
export const requestUpdatePosting = async (postData) => {
  return axiosPostRequest("/post/update", postData, { "Content-Type": "multipart/form-data" });
};

// 게시글 삭제 요청
export const requestDeletePosting = async (postData) => {
  return axiosPostRequest("/post/delete", postData);
};

// 게시글 상세 내용 조회
export const fetchPostDetail = async (postData) => {
  return { data: tempPostingList.filter((p) => +p.post_id === +postData.post_id)[0] };
  //return  axiosGetRequest(`/post/${postData.post_id}}`);
};

// 게시글 좋아요 상태 변경 요청
export const requestChangePostFavState = async (postData) => {
  return {
    data: {
      favorite: postData.favorite === 0 ? 1 : 0,
    },
  };
  // return axiosPostRequest("/post/change_favorite", postData);
};

// 새로운 댓글 추가 요청
export const requestNewComment = async (commentData) => {
  return axiosPostRequest("/comment/create", commentData);
};

// 댓글 수정 요청
export const requestUpdateComment = async (commentData) => {
  return axiosPostRequest("/comment/update", commentData);
};

// 댓글 삭제 요청
export const requestDeleteComment = async (commentData) => {
  return axiosPostRequest("/comment/delete", commentData);
};

// 댓글 목록 요청
export const fetchComments = async (postData) => {
  return axiosGetRequest(`/comment/${postData.post_id}`);
};

//MyPage

// 사용자 정보 요청
export const fetchMyData = async () => {
  return axiosPostRequest("/user/userinfo");
};

//사용자의 정보를 수정하도록 요청
export const requestUpdateUserData = async (userData) => {
  return axiosPostRequest("/user/update", userData);
};

//사용자의 정보를 삭제하도록 요청
export const requestDeleteUserData = async () => {
  return axiosPostRequest("/user/signout");
};

// 본인이 작성한 글 목록 조회
export const fetchMyPosting = async () => {
  return { data: tempPostingList.filter((p) => p.nickname === "suneom") };

  // return axiosPostRequest("/mypage/post");
};

// 본인이 좋아요를 누른 글 목록 조회
export const fetchMyFavPosting = async () => {
  return { data: tempPostingList.filter((p) => p.nickname === "ashrain") };
  // return axiosPostRequest("/mypage/favorite_post");
};
