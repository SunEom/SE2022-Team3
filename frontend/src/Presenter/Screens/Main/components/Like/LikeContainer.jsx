import React from "react";
import LikePresenter from "./LikePresenter";

const LikeContainer = ({ clothList, page, setMaxPage }) => {
  // 좋아요를 누른 의상 리스트
  const filteredClothList = clothList.filter((c) => c.favorite);

  // 좋아요를 누른 의상 중 현재 페이지에서 보여지고 있는 의상 리스트
  const nowPageClothList = filteredClothList.slice((page - 1) * 10, page * 10);

  // 마지막 페이지 번호 설정
  setMaxPage(Math.ceil(filteredClothList.length / 10));

  return <LikePresenter clothList={nowPageClothList} />;
};

export default LikeContainer;
