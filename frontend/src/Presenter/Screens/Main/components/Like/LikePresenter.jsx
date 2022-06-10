import React from "react";
import ClothItem from "../ClothItem";

const LikePresenter = ({ clothList, refreshClothList }) => {
  return (
    <>
      {clothList.map((cloth, index) => (
        <ClothItem cloth={cloth} key={index} refreshClothList={refreshClothList} />
      ))}
    </>
  );
};

export default LikePresenter;
