import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ClothItem from "../ClothItem";

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
