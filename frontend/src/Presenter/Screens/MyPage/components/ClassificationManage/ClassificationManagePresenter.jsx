import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Cancel";
import ClassListItem from "../ClassListItem";

const MyInfoTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const MyInfoHeader = styled(Box)`
  width: 1000px;
  padding-bottom: 10px;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ClassificationManagePresenter = ({
  idx,
  handleTabChange,
  loading,
  classList,
  handleChange,
  selectedClassId,
  clothList,
  onRemoveClothButtonClick,
  refreshClassList,
}) => {
  return (
    <div>
      {!loading && (
        <>
          <MyInfoHeader sx={{ borderBottom: 2 }}>
            <MyInfoTitle>게시글 관리</MyInfoTitle>
          </MyInfoHeader>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={idx} onChange={handleTabChange} aria-label="basic tabs example">
                <Tab label="분류 목록 관리" {...a11yProps(0)} />
                <Tab label="분류별 의상 관리" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={idx} index={0}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>번호</TableCell>
                      <TableCell>분류명</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {classList.map((c, idx) => (
                      <ClassListItem key={idx} classification={c} idx={idx} refreshClassList={refreshClassList} />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel value={idx} index={1}>
              <FormControl sx={{ m: 1, minWidth: 120, mt: 2, mb: 2 }} size="small">
                <InputLabel id="demo-select-small">분류명</InputLabel>
                <Select labelId="demo-select-small" id="demo-select-small" value={selectedClassId} label="분류명" onChange={handleChange}>
                  {classList.map((c, idx) => (
                    <MenuItem value={c.folder_id}>{c.folder_name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>번호</TableCell>
                      <TableCell>제품명</TableCell>
                      <TableCell>브랜드</TableCell>
                      <TableCell align="right">분류에서 제외</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {clothList.map((c, idx) => (
                      <TableRow key={idx} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        <TableCell width={40} scope="row">
                          {idx + 1}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {c.name}
                        </TableCell>
                        <TableCell scope="row">{c.brand}</TableCell>
                        <TableCell align="right">
                          <IconButton size="small" onClick={onRemoveClothButtonClick(c.cloth_id)}>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>
          </Box>
        </>
      )}
    </div>
  );
};

export default ClassificationManagePresenter;
