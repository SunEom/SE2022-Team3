import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import React from "react";
import styled from "styled-components";

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

        <Paper sx={{ width: 1000 }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align} style={{ width: column.width }}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, idx) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align} onClick={onPostItemClick(row)} style={{ cursor: "pointer" }}>
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </BoardContentContainer>
    </BoardTopContainer>
  );
};

export default BoardPresenter;
