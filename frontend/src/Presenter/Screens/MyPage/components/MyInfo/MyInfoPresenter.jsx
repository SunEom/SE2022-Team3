import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";

const MyInfoContainer = styled.div``;

const MyInfoHeader = styled(Box)`
  width: 1000px;
  padding-bottom: 10px;
`;

const MyInfoTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const MyInfoPresenter = ({ rows }) => {
  return (
    <MyInfoContainer>
      <MyInfoHeader sx={{ borderBottom: 2 }}>
        <MyInfoTitle>내 정보</MyInfoTitle>
      </MyInfoHeader>
      <TableContainer component={Box}>
        <Table sx={{ minWidth: 650, borderBottom: 2 }} aria-label="simple table">
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row" sx={{ width: 150, color: "GrayText" }}>
                  {row.key}
                </TableCell>
                <TableCell align="left" sx={{ fontWeight: 500 }}>
                  {row.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MyInfoContainer>
  );
};

export default MyInfoPresenter;
