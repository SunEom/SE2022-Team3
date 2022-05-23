import React from "react";
import ClothItem from "../ClothItem";

const SeasonPresenter = ({ clothList }) => {
  return (
    <>
      {clothList.map((cloth, index) => (
        <ClothItem cloth={cloth} key={index} />
      ))}
    </>
  );
};

export default SeasonPresenter;
