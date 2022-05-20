import React from "react";
import SeasonPresenter from "./SeasonPresenter";

const SeasonContainer = ({ clothList, secondFilterIdx, page, setMaxPage }) => {
  const secondFilterList = ["봄", "여름", "가을", "겨울"];

  const filteredClothList = clothList.filter((c) => c.season.includes(secondFilterList[secondFilterIdx]));

  const nowPageClothList = filteredClothList.slice((page - 1) * 10, page * 10);

  setMaxPage(Math.ceil(filteredClothList.length / 10));

  return <SeasonPresenter clothList={nowPageClothList} />;
};

export default SeasonContainer;
