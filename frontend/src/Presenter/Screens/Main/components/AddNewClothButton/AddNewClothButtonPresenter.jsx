import { Fab } from "@mui/material";
import ClothForm from "../../../../Components/ClothForm";
import React from "react";
import AddClothIcon from "../../../../../images/AddClothIcon.png";
import styled from "styled-components";

const AddNewClothButton = styled(Fab)`
  right: 25px;
  bottom: 25px;
`;

const AddNewClothButtonPresenter = ({ open, handleOpen, handleClose }) => {
  return (
    <>
      <AddNewClothButton color="success" aria-label="add" style={{ position: "fixed" }} onClick={handleOpen}>
        <img src={AddClothIcon} width={70} alt="AddClothIcon" />
      </AddNewClothButton>
      <ClothForm open={open} handleClose={handleClose} />
    </>
  );
};

export default AddNewClothButtonPresenter;
