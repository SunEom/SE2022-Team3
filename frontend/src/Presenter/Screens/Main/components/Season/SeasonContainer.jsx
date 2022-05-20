import React from "react";
import SeasonPresenter from "./SeasonPresenter";

const SeasonContainer = ({ clothList, secondFilterIdx }) => {
  const secondFilterList = ["봄", "여름", "가을", "겨울"];

  const filteredClothList = clothList.filter((c) => c.season.includes(secondFilterList[secondFilterIdx]));

  return <SeasonPresenter clothList={filteredClothList} />;
};

export default SeasonContainer;
