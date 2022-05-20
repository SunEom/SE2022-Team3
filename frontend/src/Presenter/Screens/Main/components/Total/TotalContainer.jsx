import React from "react";
import TotalPresenter from "./TotalPresenter";

const TotalContainer = ({ clothList, page, setMaxPage }) => {
  const nowPageClothList = clothList.slice((page - 1) * 10, page * 10);
  setMaxPage(Math.ceil(clothList.length / 10));
  return <TotalPresenter clothList={nowPageClothList} />;
};

export default TotalContainer;
