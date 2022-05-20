import { Button } from "@mui/material";
import DetailModal from "../DetailModal";
import React from "react";

const DetailButtonPresenter = ({ open, handleOpen, handleClose, cloth }) => {
  return (
    <>
      <Button onClick={handleOpen}>상세 정보</Button>
      <DetailModal open={open} handleClose={handleClose} cloth={cloth} />
    </>
  );
};

export default DetailButtonPresenter;
