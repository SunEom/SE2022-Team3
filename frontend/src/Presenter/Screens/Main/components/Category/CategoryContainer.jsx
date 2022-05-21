import React from "react";
import CategoryPresenter from "./CategoryPresenter";

const CategoryContainer = ({ clothList, secondFilterIdx, page, setMaxPage }) => {
  const categoryList = ["상의", "하의", "아우터", "모자", "신발", "가방"];

  // 의상 리스트 중 카테고리에 맞는 의상 리스트
  const filteredClothList = clothList.filter((c) => c.type === categoryList[secondFilterIdx]);

  // 카테고리에 맞는 의상 리스트 중 현제 페이지에서 보고 있는 의상 리스트
  const nowPageClothList = filteredClothList.slice((page - 1) * 10, page * 10);

  // 마지막 페이지 번호 설정
  setMaxPage(Math.ceil(filteredClothList.length / 10));

  return <CategoryPresenter clothList={nowPageClothList} />;
};

export default CategoryContainer;
