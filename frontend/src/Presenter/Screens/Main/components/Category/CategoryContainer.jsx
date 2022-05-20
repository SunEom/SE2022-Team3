import React from "react";
import CategoryPresenter from "./CategoryPresenter";

const CategoryContainer = ({ clothList, secondFilterIdx, page, setMaxPage }) => {
  const categoryList = ["상의", "하의", "아우터", "모자", "신발", "가방"];

  const filteredClothList = clothList.filter((c) => c.type === categoryList[secondFilterIdx]);

  const nowPageClothList = filteredClothList.slice((page - 1) * 10, page * 10);

  setMaxPage(Math.ceil(filteredClothList.length / 10));

  return <CategoryPresenter clothList={nowPageClothList} />;
};

export default CategoryContainer;
