import { Alert, AlertTitle } from "@mui/material";
import React from "react";

const NoClothAlert = () => {
  return (
    <Alert severity="success" sx={{ width: "100%" }}>
      <AlertTitle>추가된 의상이 없습니다!</AlertTitle>
      우측 하단의 의상 추가버튼을 눌러 의상을 추가해보세요! 👕
    </Alert>
  );
};

export default NoClothAlert;
