import { Backdrop, Button, Card, CardContent, CardMedia, Fade, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import DetailButton from "../DetailButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DefaultImage from "../../../../../images/DefaultImage.png";

const ClothItemCard = styled(Card)`
  width: 450px;
  height: 200px;
  display: flex;
`;

const InfoContainer = styled(CardContent)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const Brand = styled.div`
  color: gray;
  font-size: 15px;
`;

const DetailButtonDiv = styled.div`
  margin-top: 20px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ClothItemPresenter = ({ cloth }) => {
  const { name, brand, file_name, favorite } = cloth;

  return (
    <ClothItemCard>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={file_name ? `${process.env.REACT_APP_SERVER_URL}/img/${file_name}` : DefaultImage}
        alt="cloth image"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <InfoContainer>
          <Title>{name.length <= 17 ? name : name.substring(0, 17) + "..."}</Title>
          <Brand>{brand}</Brand>
          <DetailButtonDiv>
            {favorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
            <DetailButton cloth={cloth} />
          </DetailButtonDiv>
        </InfoContainer>
      </Box>
    </ClothItemCard>
  );
};

export default ClothItemPresenter;
