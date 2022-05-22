import { Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import BoardTable from "../../../../Components/BoardTable";
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

const PostingPresenter = ({ idx, handleTabChange, postings }) => {
  return (
    <div>
      <MyInfoHeader sx={{ borderBottom: 2 }}>
        <MyInfoTitle>게시글 관리</MyInfoTitle>
      </MyInfoHeader>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={idx} onChange={handleTabChange} aria-label="basic tabs example">
            <Tab label="내가 쓴 글 보기" {...a11yProps(0)} />
            <Tab label="좋아요 누른 글 보기" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={idx} index={0}>
          <BoardTable postings={postings} />
        </TabPanel>
        <TabPanel value={idx} index={1}>
          <BoardTable postings={postings} />
        </TabPanel>
      </Box>
    </div>
  );
};

export default PostingPresenter;
