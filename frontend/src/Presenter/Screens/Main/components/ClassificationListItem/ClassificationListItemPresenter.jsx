import React from "react";
import { MenuItem } from "@mui/material";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ClassificationListItemPresenter = ({ classification, onClassificationClick }) => {
  return (
    <ItemContainer>
      <MenuItem style={{ width: "100%" }} onClick={onClassificationClick}>
        {classification.folder_name}
      </MenuItem>
    </ItemContainer>
  );
};

export default ClassificationListItemPresenter;
