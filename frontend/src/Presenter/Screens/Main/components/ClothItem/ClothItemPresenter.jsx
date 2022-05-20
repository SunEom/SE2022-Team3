import { Backdrop, Button, Card, CardContent, CardMedia, Fade, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import DetailButton from "../DetailButton";

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
  text-align: end;
`;

const ClothItemPresenter = ({ cloth }) => {
  const { name, brand, file_name } = cloth;

  return (
    <ClothItemCard>
      <CardMedia component="img" sx={{ width: 150 }} image={file_name} alt="Live from space album cover" />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <InfoContainer>
          <Title>{name.length <= 17 ? name : name.substring(0, 17) + "..."}</Title>
          <Brand>{brand}</Brand>
          <DetailButtonDiv>
            <DetailButton cloth={cloth} />
          </DetailButtonDiv>
        </InfoContainer>
      </Box>
    </ClothItemCard>
  );
};

export default ClothItemPresenter;
