import React from "react";
import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";
import styled from "styled-components";

const MainTopContainer = styled.div`
  min-width: 1000px;
`;

const AddNewClothButton = styled(Fab)`
  right: 25px;
  bottom: 25px;
`;

const MainPresenter = ({ user, onAddNewClothButtonClick }) => {
  return (
    <MainTopContainer className="App">
      <AddNewClothButton color="primary" aria-label="add" style={{ position: "absolute" }} onClick={onAddNewClothButtonClick}>
        <Add />
      </AddNewClothButton>
    </MainTopContainer>
  );
};

export default MainPresenter;
