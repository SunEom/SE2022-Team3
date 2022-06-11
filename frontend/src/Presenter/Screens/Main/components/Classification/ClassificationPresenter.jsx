import { CircularProgress } from "@mui/material";
import React from "react";
import ClothItem from "../ClothItem";
import NoClothAlert from "../NoClothAlert";

const ClassficationPresenter = ({ clothList, refreshClothList, loading }) => {
  return (
    <>
      {loading ? (
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <CircularProgress color="success" />
        </div>
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

export default ClassficationPresenter;
