import React from "react";
import { Button, IconButton, MenuItem, TextField } from "@mui/material";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ClassificationListItemPresenter = ({
  classification,
  onChange,
  onModeToggleButtonClick,
  onSaveButtonClick,
  mode,
  editedName,
  onDeleteButtonClick,
}) => {
  return (
    <>
      {mode === "show" && (
        <ItemContainer>
          <MenuItem style={{ width: "100%" }}>{classification.folder_name}</MenuItem>
          <IconButton size="small" color="primary" onClick={onModeToggleButtonClick}>
            <EditIcon />
          </IconButton>
          <IconButton size="small" color="error" onClick={onDeleteButtonClick}>
            <DeleteIcon />
          </IconButton>
        </ItemContainer>
      )}
      {mode === "edit" && (
        <ItemContainer>
          <TextField size="small" value={editedName} onChange={onChange}></TextField>
          <IconButton size="small" color="primary" onClick={onSaveButtonClick}>
            <SaveIcon />
          </IconButton>
          <IconButton size="small" color="error" onClick={onModeToggleButtonClick}>
            <CancelIcon />
          </IconButton>
        </ItemContainer>
      )}
    </>
  );
};

export default ClassificationListItemPresenter;
