import React, { useState } from "react";
import { requestDeleteClothFolder, requesUpdateClothFolder } from "../../../../../httpRequest";
import ClassificationListItemPresenter from "./ClassificationListItemPresenter";

const ClassificationListItemContainer = ({ classification }) => {
  const [mode, setMode] = useState("show");
  const [editedName, setEditedName] = useState(classification.folder_name);

  const onChange = (e) => {
    setEditedName(e.target.value);
  };

  const onModeToggleButtonClick = () => {
    if (mode === "show") {
      setMode("edit");
    } else if (mode === "edit") {
      setMode("show");
      setEditedName(classification.folder_name);
    }
  };

  const onSaveButtonClick = () => {
    requesUpdateClothFolder({ folder_id: classification.folder_id, folder_name: editedName }).then((response) => {
      console.log(response);
    });
  };

  const onDeleteButtonClick = () => {
    let answer = window.confirm("정말로 삭제하시겠습니까?");

    if (answer) {
      requestDeleteClothFolder({ folder_id: classification.folder_id }).then((response) => {
        console.log(response);
      });
    }
  };

  return (
    <ClassificationListItemPresenter
      classification={classification}
      onChange={onChange}
      onModeToggleButtonClick={onModeToggleButtonClick}
      onSaveButtonClick={onSaveButtonClick}
      mode={mode}
      editedName={editedName}
      onDeleteButtonClick={onDeleteButtonClick}
    />
  );
};

export default ClassificationListItemContainer;
