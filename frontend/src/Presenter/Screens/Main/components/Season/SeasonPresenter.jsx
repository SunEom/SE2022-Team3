import React from "react";
import ClothItem from "../ClothItem";

const SeasonPresenter = ({ clothList, refreshClothList }) => {
  return (
    <>
      {clothList.map((cloth, index) => (
        <ClothItem cloth={cloth} key={index} refreshClothList={refreshClothList} />
      ))}
    </>
  );
};

export default SeasonPresenter;
