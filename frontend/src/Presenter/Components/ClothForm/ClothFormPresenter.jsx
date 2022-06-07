import { Backdrop, Button, Checkbox, Fade, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import SaveIcon from "@mui/icons-material/Save";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DefaultImage from "../../../images/DefaultImage.png";

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
const ClothFormPresenter = ({
  open,
  handleClose,
  onImageFileChange,
  name,
  season,
  size,
  brand,
  fileName,
  category,
  place,
  clothBody,
  favorite,
  newImgFile,
  onNameChange,
  onBrandChange,
  onSizeChange,
  onCategoryChange,
  onSeasonChange,
  onClothBodyChange,
  onPlaceChange,
  cloth,
  loading,
  onSaveButtonClick,
}) => {
  return (
    <>
      {!loading && (
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
              <TopContainer>
                <LeftContainer>
                  <ImagePreviewContainer>
                    <img
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
                      src={fileName ? `${process.env.REACT_APP_SERVER_URL}/img/${fileName}` : DefaultImage}
                      alt=""
                    />
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
                    value={name}
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
                    <Select label="카테고리" color="success" onChange={onCategoryChange} value={category}>
                      <MenuItem value={"상의"}>상의</MenuItem>
                      <MenuItem value={"하의"}>하의</MenuItem>
                      <MenuItem value={"한벌옷"}>한벌옷</MenuItem>
                      <MenuItem value={"아우터"}>아우터</MenuItem>
                      <MenuItem value={"모자"}>모자</MenuItem>
                      <MenuItem value={"신발"}>신발</MenuItem>
                      <MenuItem value={"가방"}>가방</MenuItem>
                      <MenuItem value={"기타"}>기타</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    value={brand}
                    label="브랜드"
                    size="small"
                    sx={{ width: "100%" }}
                    color="success"
                    onChange={onBrandChange}
                    inputProps={{ maxLength: 15 }}
                  />

                  <TextField
                    value={size}
                    label="사이즈"
                    size="small"
                    sx={{ width: "100%" }}
                    color="success"
                    onChange={onSizeChange}
                    inputProps={{ maxLength: 10 }}
                  />

                  <TextField
                    value={place}
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
                    <Checkbox name="seasonCheckBox" value="봄" checked={season?.includes("봄")} color="success" onChange={onSeasonChange} />
                    <CheckboxTitle>봄</CheckboxTitle>
                  </CheckboxItemContainer>
                  <CheckboxItemContainer>
                    <Checkbox
                      name="seasonCheckBox"
                      value="여름"
                      checked={season?.includes("여름")}
                      color="success"
                      onChange={onSeasonChange}
                    />
                    <CheckboxTitle>여름</CheckboxTitle>
                  </CheckboxItemContainer>
                  <CheckboxItemContainer>
                    <Checkbox
                      name="seasonCheckBox"
                      value="가을"
                      checked={season?.includes("가을")}
                      color="success"
                      onChange={onSeasonChange}
                    />
                    <CheckboxTitle>가을</CheckboxTitle>
                  </CheckboxItemContainer>
                  <CheckboxItemContainer>
                    <Checkbox
                      name="seasonCheckBox"
                      value="겨울"
                      checked={season?.includes("겨울")}
                      color="success"
                      onChange={onSeasonChange}
                    />
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
                  value={clothBody}
                  color="success"
                  onChange={onClothBodyChange}
                  inputProps={{ maxLength: 300 }}
                />
              </EditContainer>

              <ButtonContainer>
                <LeftButtonContainer></LeftButtonContainer>
                <RightButtonContainer>
                  <Button variant="outlined" color="success" style={{ width: 80 }} size="small" onClick={onSaveButtonClick}>
                    <SaveIcon fontSize="small" style={{ marginRight: 3 }} />
                    저장
                  </Button>
                  <Button variant="outlined" color="inherit" onClick={handleClose} size="small">
                    취소
                  </Button>
                </RightButtonContainer>
              </ButtonContainer>
            </StyledBox>
          </Fade>
        </Modal>
      )}
    </>
  );
};

export default ClothFormPresenter;
