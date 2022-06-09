import { IconButton, TableCell, TableRow, TextField } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

const ClassListItemPresenter = ({
  idx,
  classificationName,
  onModeToggleButtonClick,
  onDeleteButtonClick,
  mode,
  onChange,
  onSaveButtonClick,
}) => {
  return (
    <TableRow key={idx} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell width={40} scope="row">
        {idx + 1}
      </TableCell>
      {mode === "show" ? (
        <TableCell component="th" scope="row">
          {classificationName}
        </TableCell>
      ) : (
        <TableCell component="th" scope="row">
          <TextField size="small" value={classificationName} onChange={onChange} inputProps={{ maxLength: 7 }}></TextField>
        </TableCell>
      )}
      <TableCell align="right">
        {mode === "show" && (
          <>
            <IconButton size="small" color="primary" onClick={onModeToggleButtonClick}>
              <EditIcon />
            </IconButton>
            <IconButton size="small" color="error" onClick={onDeleteButtonClick}>
              <DeleteIcon />
            </IconButton>
          </>
        )}
        {mode === "edit" && (
          <>
            <IconButton size="small" color="primary" onClick={onSaveButtonClick}>
              <SaveIcon />
            </IconButton>
            <IconButton size="small" color="error" onClick={onModeToggleButtonClick}>
              <CancelIcon />
            </IconButton>
          </>
        )}
      </TableCell>
    </TableRow>
  );
};

export default ClassListItemPresenter;
