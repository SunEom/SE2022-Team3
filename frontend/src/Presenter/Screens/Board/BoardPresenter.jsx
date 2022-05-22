import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import React from "react";
import styled from "styled-components";
import BoardTable from "../../Components/BoardTable";

const BoardTopContainer = styled.div`
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  font-family: "Noto Sans KR", sans-serif;
`;

const BoardContentContainer = styled.div`
  margin-top: 100px;
`;

const BoardTitle = styled.div`
  margin-bottom: 30px;
  font-size: 25px;
  font-weight: 500;
`;

const BoardPresenter = ({ page, rowsPerPage, handleChangePage, handleChangeRowsPerPage, columns, rows, onPostItemClick, category }) => {
  return (
    <BoardTopContainer>
      <BoardContentContainer>
        <BoardTitle>{category === "fashion" ? "나만의 패션 코디" : "의상 관리 꿀팁"}</BoardTitle>

        <BoardTable postings={rows} />
      </BoardContentContainer>
    </BoardTopContainer>
  );
};

export default BoardPresenter;
