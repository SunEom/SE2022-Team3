import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from "@mui/material";
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

const ButtonBox = styled(Box)`
  width: 1000px;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

const InfoEditPresenter = ({ rows, gender, handleChange }) => {
  return (
    <MyInfoContainer>
      <MyInfoHeader sx={{ borderBottom: 2 }}>
        <MyInfoTitle>정보 수정</MyInfoTitle>
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
                  {row.key === "닉네임" && <TextField value={row.value} size="small" />}
                  {row.key === "성별" && (
                    <FormControl size="small" sx={{ width: 195 }}>
                      <InputLabel id="demo-simple-select-label">성별</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={gender}
                        label="성별"
                        onChange={handleChange}
                      >
                        <MenuItem value="비공개">비공개</MenuItem>
                        <MenuItem value="남자">남자</MenuItem>
                        <MenuItem value="여자">여자</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                  {row.key === "나이" && <TextField defaultValue={row.value} size="small" type="number" inputProps={{ max: 100 }} />}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ButtonBox>
        <Button variant="outlined">저장</Button>
      </ButtonBox>
    </MyInfoContainer>
  );
};

export default InfoEditPresenter;
