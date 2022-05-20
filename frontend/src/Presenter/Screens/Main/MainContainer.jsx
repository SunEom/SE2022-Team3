import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import store from "../../../store";
import MainPresenter from "./MainPresenter";

const MainContainer = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(store.getState().user);
  const [clothList, setClothList] = useState([]);
  const [filterIdx, setFilterIdx] = useState(0); // 현재 선택된 필터의 index : 전체(0) 계절별(1) 카테고리별(2)
  const [secondFilterIdx, setSecondFilterIdx] = useState(0); // 봄,여름,가을,겨울 또는 상의, 하의 ...
  const [page, setPage] = useState(1); // 현재 보고있는 페이지
  const [maxPage, setMaxPage] = useState(1); // 마지막 페이지가 몇번째 페이지인가.

  const onAddNewClothButtonClick = () => {
    navigate("/newCloth", { replace: false });
  };

  const fetchClothes = async () => {
    // await axios.post(`${process.env.SERVER_URL}/clothes`, {});

    // 테스트를 위한 임시 의상 정보
    let tempClothList = [
      {
        name: "로고 프린팅 맨투맨 티셔츠",
        season: "가을",
        type: "상의",
        brand: "마크 곤잘레스",
        place: "옷장 3번째 칸",
        size: "L",
        cloth_body: "가끔 입기에는 나쁘지 않다...",
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
        name: "10TH ANNIVERSARY 3PACK T-SHIRTS EDITION",
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
        name: " 메탈릭 버튼 부클레 트위드 자켓(WOMAN)_UTO-FB02 ",
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
        type: "상의",
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
        cloth_body: "걷다보면 100번은 마주치게 되는 신발",
        file_name: "https://image.msscdn.net/images/goods_img/20170615/577636/577636_4_500.jpg?t=20200224172901",
        favorite: true,
      },
      {
        name: "여성 XXS 빌 토트백 - 블랙 / 5506461IZ1M1090 ",
        season: "봄, 여름",
        type: "가방",
        brand: "발렌시아가",
        place: "옷장 가방칸",
        size: "FREE",
        cloth_body: "이게 제일 비싼 가방이었네...",
        file_name: "https://image.msscdn.net/images/goods_img/20220331/2458213/2458213_1_500.jpg",
        favorite: false,
      },
    ];

    setClothList(tempClothList);
  };

  //전체, 계절별, 카테고리별 버튼 선택시
  const onFilterButtonClick = (idx) => () => {
    fetchClothes();
    setFilterIdx(idx);
    setSecondFilterIdx(0);
    setPage(1);
    setMaxPage(1);
  };

  // 본,여름,가을,겨울 또는 상의,하의... 선택시
  const onSecondFilterChange = (e) => {
    setSecondFilterIdx(e.target.value);
    fetchClothes();
    setPage(1);
    setMaxPage(1);
  };

  // 페이지 버튼 클릭시
  const onPageChange = (e, page) => {
    setPage(+page);
  };

  useEffect(() => {
    //로그인 되어있지 않은 사용자 접근 시 로그인페이지로 이동시킴
    if (user == null) {
      navigate("/login", { replace: true });
    }

    fetchClothes();
  }, []);

  return (
    <MainPresenter
      user={user}
      onAddNewClothButtonClick={onAddNewClothButtonClick}
      clothList={clothList}
      filterIdx={filterIdx}
      onFilterButtonClick={onFilterButtonClick}
      onSecondFilterChange={onSecondFilterChange}
      secondFilterIdx={secondFilterIdx}
      onPageChange={onPageChange}
      page={page}
      setMaxPage={setMaxPage}
      maxPage={maxPage}
    />
  );
};

export default MainContainer;
