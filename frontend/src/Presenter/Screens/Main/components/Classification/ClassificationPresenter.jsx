import React from "react";
import ClothItem from "../ClothItem";

const ClassficationPresenter = ({ clothList }) => {
  return (
    <>
      {clothList.map((cloth, index) => (
        <ClothItem cloth={cloth} key={index} />
      ))}
    </>
  );
};

export default ClassficationPresenter;
