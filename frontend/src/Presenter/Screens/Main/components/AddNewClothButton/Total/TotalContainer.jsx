import React from "react";
import TotalPresenter from "./TotalPresenter";

const TotalContainer = ({ clothList, page, setMaxPage }) => {
  //현재 보여지고 있는 의상 리스트
  const nowPageClothList = clothList.slice((page - 1) * 10, page * 10);

  // 마지막 페이지 번호 설정
  setMaxPage(Math.ceil(clothList.length / 10));

  return <TotalPresenter clothList={nowPageClothList} />;
};

export default TotalContainer;
