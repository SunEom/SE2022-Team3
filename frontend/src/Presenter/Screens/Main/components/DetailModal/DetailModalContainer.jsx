import React, { useEffect, useState } from "react";
import { fetchClothFolderList, requestChangeClothFavState, requestDeleteCloth, requestNewClothFolder } from "../../../../../httpRequest";
import DetailModalPresenter from "./DetailModalPresenter";

const DetailModalContainer = ({ open, handleClose, cloth }) => {
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState("detail");
  const [name, setName] = useState(cloth.name);
  const [season, setSeason] = useState(cloth.season);
  const [size, setSize] = useState(cloth.size);
  const [brand, setBrand] = useState(cloth.brand);
  const [fileName, setFileName] = useState(cloth.file_name);
  const [type, setType] = useState(cloth.type);
  const [place, setPlace] = useState(cloth.place);
  const [clothBody, setClothBody] = useState(cloth.cloth_body);
  const [favorite, setFavorite] = useState(cloth.favorite);

  const [classificationList, setClassificationList] = useState();
  const [newClassification, setNewClassification] = useState("");

  //분류 버튼을 위한 Property
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    fetchClothFolderList().then((response) => {
      setClassificationList(response.data);
      setLoading(false);
    });
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const onClassificationAddButtonClick = () => {
    if (newClassification === "") {
      return window.alert("분류명을 입력해주세요");
    }

    for (var item of classificationList) {
      if (item.folder_name === newClassification) {
        return window.alert("이미 사용중인 분류명 입니다.");
      }
    }

    requestNewClothFolder({ folder_name: newClassification }).then((response) => {
      setClassificationList((current) => [...current, response.data]);
    });

    setNewClassification("");
  };

  const onNewClassificationInputChange = (e) => {
    setNewClassification(e.target.value);
  };

  const onLikeButtonClick = () => {
    requestChangeClothFavState({ cloth_id: cloth.cloth_id, favorite }).then((response) => {
      setFavorite(response.data.favorite);
    });

    setFavorite((current) => !current);
  };

  // 상세보기-수정 화면 토글 버튼
  const onModeToggleButtonClick = () => {
    if (mode === "detail") {
      setMode("edit");
    } else if (mode === "edit") {
      setMode("detail");
    }
  };

  const resetDetailContents = () => {
    setName(cloth.name);
    setSeason(cloth.season);
    setSize(cloth.size);
    setBrand(cloth.brand);
    setFileName(cloth.file_name);
    setType(cloth.type);
    setPlace(cloth.place);
    setClothBody(cloth.cloth_body);
    setFavorite(cloth.favorite);
  };

  const onDeleteButtonClick = () => {
    const doubleCheck = window.confirm("정말로 삭제하시겠습니까?");

    if (doubleCheck) {
      requestDeleteCloth({ cloth_id: cloth.cloth_id }).then((response) => {
        window.alert("삭제되었습니다!");
        handleClose();
        window.location.reload();
      });
    }
  };

  useEffect(() => {
    // 다음 페이지로 넘어갔을 때 Modal의 내용이 변경되지 않는 것을 방지하기 위한 코드
    resetDetailContents();
    fetchClothFolderList().then((response) => {
      setClassificationList(response.data);
      setLoading(false);
    });
  }, [cloth]);

  return (
    <DetailModalPresenter
      open={open}
      handleClose={handleClose}
      cloth={cloth}
      name={name}
      season={season}
      brand={brand}
      fileName={fileName}
      type={type}
      place={place}
      clothBody={clothBody}
      favorite={favorite}
      size={size}
      onDeleteButtonClick={onDeleteButtonClick}
      mode={mode}
      onModeToggleButtonClick={onModeToggleButtonClick}
      onLikeButtonClick={onLikeButtonClick}
      anchorEl={anchorEl}
      openMenu={openMenu}
      handleClick={handleClick}
      handleMenuClose={handleMenuClose}
      onClassificationAddButtonClick={onClassificationAddButtonClick}
      onNewClassificationInputChange={onNewClassificationInputChange}
      newClassification={newClassification}
      classificationList={classificationList}
      setClassificationList={setClassificationList}
      loading={loading}
    />
  );
};

export default DetailModalContainer;
