import React from "react";
import CategoryPresenter from "./CategoryPresenter";

const CategoryContainer = ({ clothList, secondFilterIdx }) => {
  const categoryList = ["상의", "하의", "아우터", "모자", "신발", "가방"];

  const filteredClothList = clothList.filter((c) => c.type === categoryList[secondFilterIdx]);

  return <CategoryPresenter clothList={filteredClothList} />;
};

export default CategoryContainer;
