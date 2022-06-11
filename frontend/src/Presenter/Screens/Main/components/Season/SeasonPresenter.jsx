import React from "react";
import ClothItem from "../ClothItem";
import NoClothAlert from "../NoClothAlert";

const SeasonPresenter = ({ clothList, refreshClothList }) => {
  return (
    <>
      {clothList.length === 0 ? (
        <NoClothAlert />
      ) : (
        <>
          {clothList.map((cloth, index) => (
            <ClothItem cloth={cloth} key={index} refreshClothList={refreshClothList} />
          ))}
        </>
      )}
    </>
  );
};

export default SeasonPresenter;
