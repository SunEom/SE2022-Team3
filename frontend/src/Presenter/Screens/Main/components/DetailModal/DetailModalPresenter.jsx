import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Backdrop, Box, Button, Fab, Fade, Modal } from "@mui/material";
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";
import { faEnvira } from "@fortawesome/free-brands-svg-icons";
import { faSun, faSnowflake } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import styled from "styled-components";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledBox = styled(Box)`
  font-family: "Noto Sans KR", sans-serif;
  height: 600px;
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

const DetailModalPresenter = ({ open, handleClose, name, brand, fileName, type, place, clothBody, favorite, season, size }) => {
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
          <SeasonBadgeContainer>
            {season.includes("봄") && (
              <SeasonBadge style={{ borderColor: "green" }}>
                <FontAwesomeIcon icon={faEnvira} color="green" size="lg" />
              </SeasonBadge>
            )}

            {season.includes("여름") && (
              <SeasonBadge style={{ borderColor: "red" }}>
                <FontAwesomeIcon icon={faSun} color="red" size="m" />
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
            <LikeButton aria-label="like" style={{ color: favorite ? "red" : "default" }} size="small">
              <FavoriteIcon />
            </LikeButton>
            <ClassificationButton aria-label="classification" size="small">
              <CreateNewFolderIcon />
            </ClassificationButton>
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
            <ClothDescriptionTitle>참고 사항</ClothDescriptionTitle>
            <ClothDescriptionBody>{clothBody}</ClothDescriptionBody>
          </ClothDescription>

          <BottomButtonContainer>
            <Button variant="outlined" startIcon={<EditIcon />} size="small" color="primary">
              Edit
            </Button>
            <Button variant="outlined" startIcon={<DeleteIcon />} size="small" color="error">
              Delete
            </Button>
          </BottomButtonContainer>
        </StyledBox>
      </Fade>
    </Modal>
  );
};

export default DetailModalPresenter;
