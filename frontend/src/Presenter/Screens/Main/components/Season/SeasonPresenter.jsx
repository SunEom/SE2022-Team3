import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import ClothItem from "../ClothItem";
const SeasonPresenter = ({ clothList }) => {
  return (
    <>
      {clothList.map((cloth, index) => (
        <ClothItem cloth={cloth} key={index} />
      ))}
    </>
  );
};

export default SeasonPresenter;
