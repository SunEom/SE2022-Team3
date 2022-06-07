import React from "react";
import Alert from "@mui/material/Alert";
import { Collapse } from "@mui/material";

const SuggestionPresenter = ({ open, closeHandle, loading, recommendation }) => {
  return (
    <>
      {!loading && (
        <Collapse in={open} sx={{ width: "50%" }}>
          <Alert severity="info" onClose={closeHandle} style={{ whiteSpace: "pre-line" }}>
            {recommendation ? recommendation : "푹푹찌는 여름 반팔티를 더 구매해보시는건 어떨까요 ? 🥵"}
          </Alert>
        </Collapse>
      )}
    </>
  );
};

export default SuggestionPresenter;
