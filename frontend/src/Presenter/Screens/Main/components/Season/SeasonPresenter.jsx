import { CircularProgress } from "@mui/material";
import React from "react";
import ClothItem from "../ClothItem";
import NoClothAlert from "../NoClothAlert";

const SeasonPresenter = ({ clothList, refreshClothList, loading }) => {
  return (
    <>
      {loading ? (
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <CircularProgress color="success" />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default SeasonPresenter;
