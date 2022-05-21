import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Backdrop,
  Box,
  Button,
  Checkbox,
  Divider,
  Fab,
  Fade,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";
import { faEnvira } from "@fortawesome/free-brands-svg-icons";
import { faSun, faSnowflake } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import styled from "styled-components";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const StyledBox = styled(Box)`
  font-family: "Noto Sans KR", sans-serif;
  height: 650px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background-color: white;
  border: 2px solid #000;
  box-shadow: 24;
  padding: 20px;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

// Detail Screen

const SeasonBadgeContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 5px;
`;

const SeasonBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 20px;
  border: 1px solid;
`;

const RightTopButtonContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12px;
  right: 10px;
`;

const ImageContainer = styled.div`
  text-align: center;
`;

const ClothImage = styled.img`
  max-height: 300px;
`;

const ClothTopStack = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-top: 20px;
`;

const ClothName = styled.div`
  font-size: 23px;
`;

const ClothType = styled.div`
  font-size: 14px;
  color: gray;
`;

const ClothBrand = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const ClothSize = styled.div`
  margin-top: 15px;
  font-size: 14px;
  font-weight: 500;
`;

const ClothLocationContainer = styled.div`
  margin-top: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ClothLocationTitle = styled.div`
  font-weight: 500;
`;

const ClothDescription = styled.div`
  margin-top: 30px;
`;
const ClothDescriptionTitle = styled.div`
  margin-bottom: 10px;
  font-weight: 500;
`;
const ClothDescriptionBody = styled.div`
  font-size: 14px;
`;

const LikeButton = styled(Fab)``;
const ClassificationButton = styled(Fab)``;

const BottomButtonContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const ClassificationMenuContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  gap: 3px;
`;

//Edit Screen

const TopContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const LeftContainer = styled.div`
  height: 250px;
  display: flex;
  width: 47%;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const RightContainer = styled.div`
  height: 250px;
  display: flex;
  width: 47%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ImagePreviewContainer = styled.div`
  height: 220px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditContainer = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const NameTextField = styled(TextField)`
  width: 100%;
`;

const MultiEditItemContianer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const FistEditItemContainer = styled.div`
  width: 45%;
  margin-top: 20px;
`;

const SecondEditItemContainer = styled.div`
  width: 45%;
  margin-top: 20px;
`;

const SeasonContainer = styled.div`
  margin-top: 20px;
  position: relative;
  left: 5px;
`;

const SeasonTitle = styled.div`
  font-size: 14px;
`;

const SeasonCheckboxContainer = styled.div`
  display: flex;
  width: 100%
  align-items: center;
  gap: 30px;
  position: relative;
  right: 10px;
`;

const CheckboxItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxTitle = styled.div`
  margin-left: -5px;
  position: relative;
  top: -1px;
`;

const ClothBodyTextField = styled(TextField)`
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftButtonContainer = styled.div``;
const RightButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ImageInput = styled.input`
  display: none;
`;

const DetailModalPresenter = ({
  open,
  handleClose,
  name,
  brand,
  fileName,
  type,
  place,
  clothBody,
  favorite,
  season,
  size,
  onDeleteButtonClick,
  editedName,
  editedSeason,
  editedSize,
  editedBrand,
  editedFileName,
  editedType,
  editedPlace,
  editedClothBody,
  editedFavorite,
  mode,
  onModeToggleButtonClick,
  onNameChange,
  onBrandChange,
  onSizeChange,
  onCategoryChange,
  onSeasonChange,
  onClothBodyChange,
  onPlaceChange,
  onImageFileChange,
  onLikeButtonClick,
  anchorEl,
  openMenu,
  handleClick,
  handleMenuClose,
  onClassificationAddButtonClick,
  onNewClassificationInputChange,
  newClassification,
  classificationList,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <StyledBox>
          {mode === "detail" && (
            <>
              <SeasonBadgeContainer>
                {season.includes("봄") && (
                  <SeasonBadge style={{ borderColor: "green" }}>
                    <FontAwesomeIcon icon={faEnvira} color="green" size="lg" />
                  </SeasonBadge>
                )}

                {season.includes("여름") && (
                  <SeasonBadge style={{ borderColor: "red" }}>
                    <FontAwesomeIcon icon={faSun} color="red" />
                  </SeasonBadge>
                )}

                {season.includes("가을") && (
                  <SeasonBadge style={{ borderColor: "brown" }}>
                    <FontAwesomeIcon icon={faCanadianMapleLeaf} color="brown" size="lg" />
                  </SeasonBadge>
                )}

                {season.includes("겨울") && (
                  <SeasonBadge style={{ borderColor: "gray" }}>
                    <FontAwesomeIcon icon={faSnowflake} color="gray" size="lg" />
                  </SeasonBadge>
                )}
              </SeasonBadgeContainer>

              <RightTopButtonContainer>
                <LikeButton aria-label="like" style={{ color: favorite ? "red" : "black" }} size="small" onClick={onLikeButtonClick}>
                  <FavoriteIcon />
                </LikeButton>
                <ClassificationButton
                  id="classification-button"
                  aria-controls={openMenu ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                  onClick={handleClick}
                  aria-label="classification"
                  size="small"
                >
                  <CreateNewFolderIcon />
                </ClassificationButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    "aria-labelledby": "classification-button",
                  }}
                  sx={{ right: 100 }}
                >
                  {classificationList.map((c) => (
                    <MenuItem onClick={handleMenuClose}>{c}</MenuItem>
                  ))}
                  <Divider />

                  <ClassificationMenuContainer>
                    <TextField
                      size="small"
                      sx={{ width: 200 }}
                      label="새로운 분류 이름"
                      value={newClassification}
                      onChange={onNewClassificationInputChange}
                      inputProps={{ maxLength: 10 }}
                    />
                    <Button variant="outlined" onClick={onClassificationAddButtonClick}>
                      추가
                    </Button>
                  </ClassificationMenuContainer>
                </Menu>
              </RightTopButtonContainer>

              <ImageContainer>
                <ClothImage src={fileName} />
              </ImageContainer>

              <ClothTopStack>
                <ClothName>{name}</ClothName>
                <ClothType>{type}</ClothType>
              </ClothTopStack>

              <ClothBrand>브랜드: {brand}</ClothBrand>

              <ClothSize>사이즈: {size}</ClothSize>

              <ClothLocationContainer>
                <ClothLocationTitle>보관 위치: {place}</ClothLocationTitle>
              </ClothLocationContainer>

              <ClothDescription>
                <ClothDescriptionTitle>기타</ClothDescriptionTitle>
                <ClothDescriptionBody>{clothBody}</ClothDescriptionBody>
              </ClothDescription>

              <BottomButtonContainer>
                <Button variant="outlined" startIcon={<EditIcon />} size="small" color="primary" onClick={onModeToggleButtonClick}>
                  Edit
                </Button>
                <Button variant="outlined" startIcon={<DeleteIcon />} size="small" color="error" onClick={onDeleteButtonClick}>
                  Delete
                </Button>
              </BottomButtonContainer>
            </>
          )}

          {mode === "edit" && (
            <>
              <TopContainer>
                <LeftContainer>
                  <ImagePreviewContainer>
                    <img style={{ maxHeight: "100%", maxWidth: "100%" }} src={editedFileName} />
                  </ImagePreviewContainer>

                  <label htmlFor="contained-button-file" style={{ textAlign: "center" }}>
                    <ImageInput accept="image/*" id="contained-button-file" multiple={false} type="file" onChange={onImageFileChange} />
                    <Button variant="outlined" component="span" size="small">
                      <CameraAltIcon fontSize="small" style={{ marginRight: 3 }} />
                      사진 변경
                    </Button>
                  </label>
                </LeftContainer>
                <RightContainer>
                  <NameTextField
                    value={editedName}
                    label="제품명"
                    color="success"
                    onChange={onNameChange}
                    inputProps={{ maxLength: 15 }}
                    size="small"
                  />
                  <FormControl sx={{ width: "100%" }} size="small">
                    <InputLabel id="demo-select-small" color="success">
                      카테고리
                    </InputLabel>
                    <Select label="카테고리" color="success" defaultValue={0} onChange={onCategoryChange}>
                      <MenuItem value={0}>상의</MenuItem>
                      <MenuItem value={1}>하의</MenuItem>
                      <MenuItem value={2}>아우터</MenuItem>
                      <MenuItem value={3}>모자</MenuItem>
                      <MenuItem value={4}>가방</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    value={editedBrand}
                    label="브랜드"
                    size="small"
                    sx={{ width: "100%" }}
                    color="success"
                    onChange={onBrandChange}
                    inputProps={{ maxLength: 15 }}
                  />

                  <TextField
                    value={editedSize}
                    label="사이즈"
                    size="small"
                    sx={{ width: "100%" }}
                    color="success"
                    onChange={onSizeChange}
                    inputProps={{ maxLength: 10 }}
                  />

                  <TextField
                    value={editedPlace}
                    label="보관위치"
                    size="small"
                    sx={{ width: "100%" }}
                    color="success"
                    onChange={onPlaceChange}
                    inputProps={{ maxLength: 15 }}
                  />
                </RightContainer>
              </TopContainer>
              <SeasonContainer>
                <SeasonTitle>계절</SeasonTitle>
                <SeasonCheckboxContainer>
                  <CheckboxItemContainer>
                    <Checkbox defaultChecked={season.includes("봄")} color="success" onChange={onSeasonChange} />
                    <CheckboxTitle>봄</CheckboxTitle>
                  </CheckboxItemContainer>
                  <CheckboxItemContainer>
                    <Checkbox defaultChecked={season.includes("여름")} color="success" onChange={onSeasonChange} />
                    <CheckboxTitle>여름</CheckboxTitle>
                  </CheckboxItemContainer>
                  <CheckboxItemContainer>
                    <Checkbox defaultChecked={season.includes("가을")} color="success" onChange={onSeasonChange} />
                    <CheckboxTitle>가을</CheckboxTitle>
                  </CheckboxItemContainer>
                  <CheckboxItemContainer>
                    <Checkbox defaultChecked={season.includes("겨울")} color="success" onChange={onSeasonChange} />
                    <CheckboxTitle>겨울</CheckboxTitle>
                  </CheckboxItemContainer>
                </SeasonCheckboxContainer>
              </SeasonContainer>

              <EditContainer>
                <ClothBodyTextField
                  id="outlined-multiline-static"
                  label="기타"
                  multiline
                  rows={8}
                  value={editedClothBody}
                  color="success"
                  onChange={onClothBodyChange}
                  inputProps={{ maxLength: 300 }}
                />
              </EditContainer>

              <ButtonContainer>
                <LeftButtonContainer></LeftButtonContainer>
                <RightButtonContainer>
                  <Button variant="outlined" color="success" style={{ width: 80 }} size="small">
                    <SaveIcon fontSize="small" style={{ marginRight: 3 }} />
                    저장
                  </Button>
                  <Button variant="outlined" color="inherit" onClick={onModeToggleButtonClick} size="small">
                    취소
                  </Button>
                </RightButtonContainer>
              </ButtonContainer>
            </>
          )}
        </StyledBox>
      </Fade>
    </Modal>
  );
};

export default DetailModalPresenter;
