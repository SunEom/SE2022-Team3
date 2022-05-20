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
  const [secondFilterIdx, setSecondFilterIdx] = useState(0);

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
    ];

    setClothList(tempClothList);
  };

  const onFilterButtonClick = (idx) => () => {
    fetchClothes();
    setFilterIdx(idx);
    setSecondFilterIdx(0);
  };

  const onSecondFilterChange = (e) => {
    setSecondFilterIdx(e.target.value);
    fetchClothes();
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
    />
  );
};

export default MainContainer;
