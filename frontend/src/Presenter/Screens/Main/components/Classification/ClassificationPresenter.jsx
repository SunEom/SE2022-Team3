import React from "react";
import ClothItem from "../ClothItem";

const ClassficationPresenter = ({ clothList, refreshClothList }) => {
  return (
    <>
      {clothList.map((cloth, index) => (
        <ClothItem cloth={cloth} key={index} refreshClothList={refreshClothList} />
      ))}
    </>
  );
};

export default ClassficationPresenter;
