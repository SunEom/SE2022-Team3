import React, { useState } from "react";
import {
  fetchClothFolderList,
  requestAddClothToFolder,
  requestDeleteClothFolder,
  requesUpdateClothFolder,
} from "../../../../../httpRequest";
import ClassificationListItemPresenter from "./ClassificationListItemPresenter";

const ClassificationListItemContainer = ({ classification, setClassificationList, cloth, onClose }) => {
  const [mode, setMode] = useState("show");
  const [editedName, setEditedName] = useState(classification.folder_name);

  const onChange = (e) => {
    setEditedName(e.target.value);
  };

  const onClassificationClick = () => {
    requestAddClothToFolder({ folder_id: classification.folder_id, cloth_id: cloth.cloth_id }).then(async () => {
      window.alert(`${classification.folder_name}에 추가되었습니다.`);
    });
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
      fetchClothFolderList().then((response) => {
        setClassificationList(response.data);
        setMode("show");
      });
    });
  };

  const onDeleteButtonClick = () => {
    let answer = window.confirm("정말로 삭제하시겠습니까?");

    if (answer) {
      requestDeleteClothFolder({ folder_id: classification.folder_id }).then((response) => {
        fetchClothFolderList().then((response) => {
          setClassificationList(response.data);
        });
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
      onClassificationClick={onClassificationClick}
    />
  );
};

export default ClassificationListItemContainer;
