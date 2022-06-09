import React, { useState } from "react";
import { requestDeleteClassification, requestUpdateFolderName } from "../../../../../httpRequest";
import ClassListItemPresenter from "./ClassListItemPresenter";

const ClassListItemContainer = ({ classification, idx, refreshClassList }) => {
  const [classificationName, setClassificationName] = useState(classification.folder_name);
  const [mode, setMode] = useState("show");

  const onChange = (e) => {
    setClassificationName(e.target.value);
  };

  const onModeToggleButtonClick = () => {
    if (mode === "show") {
      setMode("edit");
    } else if (mode === "edit") {
      setClassificationName(classification.folder_name);
      setMode("show");
    }
  };

  const onSaveButtonClick = () => {
    requestUpdateFolderName({ folder_id: classification.folder_id, folder_name: classificationName }).then((response) => {
      console.log(response.data);
      refreshClassList();
      onModeToggleButtonClick();
    });
  };

  const onDeleteButtonClick = () => {
    let answer = window.confirm(`${classification.folder_name} 분류를 정말로 삭제하시겠습니까?`);

    if (answer) {
      requestDeleteClassification({ folder_id: classification.folder_id }).then((response) => {
        console.log(response.data);
        refreshClassList();
      });
    }
  };

  return (
    <ClassListItemPresenter
      idx={idx}
      classificationName={classificationName}
      onModeToggleButtonClick={onModeToggleButtonClick}
      onDeleteButtonClick={onDeleteButtonClick}
      mode={mode}
      onChange={onChange}
      onSaveButtonClick={onSaveButtonClick}
    />
  );
};

export default ClassListItemContainer;
