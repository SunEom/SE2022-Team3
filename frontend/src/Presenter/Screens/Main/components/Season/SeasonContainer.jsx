import React from "react";
import SeasonPresenter from "./SeasonPresenter";

const SeasonContainer = ({ clothList, secondFilterIdx, page, setMaxPage }) => {
  const secondFilterList = ["봄", "여름", "가을", "겨울"];
  // 특정 계절에 맞는 의상 리스트
  const filteredClothList = clothList.filter((c) => c.season.includes(secondFilterList[secondFilterIdx]));

  // 특정 계절에 맞는 의상 중 현재 페이지에서 보여지고 있는 의상 리스트
  const nowPageClothList = filteredClothList.slice((page - 1) * 10, page * 10);

  // 마지막 페이지 번호 설정
  setMaxPage(Math.ceil(filteredClothList.length / 10));

  return <SeasonPresenter clothList={nowPageClothList} />;
};

export default SeasonContainer;
