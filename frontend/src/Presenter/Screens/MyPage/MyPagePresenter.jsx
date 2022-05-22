import React from "react";
import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import MyInfo from "./components/MyInfo";
import InfoEdit from "./components/InfoEdit";
import Posting from "./components/Posting";

const MyPageTopContainer = styled.div`
  min-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  font-family: "Noto Sans KR", sans-serif;
`;

const MyPageContentContainer = styled.div`
  width: 1200px;
  margin-top: 60px;
`;

const MyPageTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px; ;
`;

const MyPageMainContent = styled.div``;

const MyPagePresenter = ({ value, handleChange, a11yProps }) => {
  //각 탭의 컨텐츠가 들어있는 부분
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <MyPageTopContainer>
      <MyPageContentContainer>
        <MyPageTitle>마이페이지</MyPageTitle>
        <Divider />
        <MyPageMainContent>
          <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex", minHeight: 700, borderRight: 1, borderColor: "divider" }}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderLeft: 1, borderColor: "divider", width: 120 }}
            >
              <Tab label="내 정보" {...a11yProps(0)} />
              <Tab label="정보 수정" {...a11yProps(1)} />
              <Tab label="게시글 관리" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <MyInfo />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <InfoEdit />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Posting />
            </TabPanel>
          </Box>
        </MyPageMainContent>
      </MyPageContentContainer>
    </MyPageTopContainer>
  );
};

export default MyPagePresenter;
