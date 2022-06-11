import { Button } from "@mui/material";
import DetailModal from "../DetailModal";
import React from "react";

const DetailButtonPresenter = ({ open, handleOpen, handleClose, cloth, configurePresentData, refreshClothList }) => {
  return (
    <>
      <Button onClick={handleOpen} variant="outlined" size="small">
        상세 정보
      </Button>
      <DetailModal
        open={open}
        handleClose={handleClose}
        cloth={cloth}
        configurePresentData={configurePresentData}
        refreshClothList={refreshClothList}
      />
    </>
  );
};

export default DetailButtonPresenter;
