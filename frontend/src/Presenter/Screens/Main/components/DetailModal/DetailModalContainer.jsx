import React, { useEffect, useState } from "react";
import DetailModalPresenter from "./DetailModalPresenter";

const DetailModalContainer = ({ open, handleClose, cloth }) => {
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

  //분류 버튼을 위한 Property
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [classificationList, setClassificationList] = useState(["제주도 여행", "여름 휴가", "미국 여행"]);
  const [newClassification, setNewClassification] = useState("");
  const onClassificationAddButtonClick = () => {
    if (newClassification === "") {
      window.alert("분류 이름을 입력해주세요");
      return;
    }

    if (classificationList.includes(newClassification)) {
      window.alert("이미 존재하는 분류 이름입니다!");
      return;
    }

    //서버에 분류 추가 요청 (구현 예정)
    setClassificationList((current) => [...current, newClassification]);
    setNewClassification("");
  };
  const onNewClassificationInputChange = (e) => {
    setNewClassification(e.target.value);
  };

  const onLikeButtonClick = () => {
    //서버에 요청하는 코드가 들어갈 부분 (구현예정)

    setFavorite((current) => !current);
  };

  // 상세보기-수정 화면 토글 버튼
  const onModeToggleButtonClick = () => {
    setMode("edit");
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
      //서버에 의상 삭제 요청 보낼 부분 (구현예정)

      window.alert("삭제되었습니다!");
      handleClose();
    }
  };

  useEffect(() => {
    // 다음 페이지로 넘어갔을 때 Modal의 내용이 변경되지 않는 것을 방지하기 위한 코드
    resetDetailContents();
  }, [cloth]);

  return (
    <DetailModalPresenter
      open={open}
      handleClose={handleClose}
      cloth={cloth}
      setMode={setMode}
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
    />
  );
};

export default DetailModalContainer;
