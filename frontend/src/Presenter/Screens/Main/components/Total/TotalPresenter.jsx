import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ClothItem from "../ClothItem";

const ClothItemCard = styled(Card)`
  width: 450px;
  height: 200px;
  display: flex;
`;

const TotalPresenter = ({ clothList }) => {
  return (
    <>
      {clothList.map((cloth, index) => (
        <ClothItem cloth={cloth} key={index} />
      ))}
    </>
  );
};

export default TotalPresenter;
