import {} from "@fortawesome/free-regular-svg-icons";
import { faShirt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Lightbulb, Checkroom, AccountCircle, Logout, Reorder } from "@mui/icons-material";
import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";

const DrawerStyle = {
  fontFamily: "Noto Sans KR, sans-serif",
};

const BoxStyle = {
  width: "250px",
};

const ListItemButtonStyle = {
  display: "flex",
  alignItems: "center",
};

const ListItemTextStyle = {
  marginLeft: "5px",
};

const ListItemTitleStyle = {
  paddingBottom: "0px",
  fontWeight: 500,
  fontSize: 17,
};

const DrawerPresenter = ({ toggleDrawer, state, onListItemClick, user }) => {
  return (
    <>
      <Button onClick={toggleDrawer(true)} disabled={user === null}>
        <Reorder style={{ color: "black" }} />
      </Button>
      <Drawer open={state} onClose={toggleDrawer(false)} style={DrawerStyle}>
        <Box role="presentation" style={BoxStyle}>
          <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <ListItem key="나의 정보" disablePadding onClick={onListItemClick("나의 정보")}>
              <ListItemButton style={ListItemButtonStyle}>
                <AccountCircle />
                <ListItemText style={ListItemTextStyle} primary="나의 정보" />
              </ListItemButton>
            </ListItem>
            <ListItem key="나의 옷장" disablePadding onClick={onListItemClick("나의 옷장")}>
              <ListItemButton style={ListItemButtonStyle}>
                <Checkroom />
                <ListItemText style={ListItemTextStyle} primary="나의 옷장" />
              </ListItemButton>
            </ListItem>
            <ListItem key="로그아웃" disablePadding onClick={onListItemClick("로그아웃")}>
              <ListItemButton style={ListItemButtonStyle}>
                <Logout />
                <ListItemText style={ListItemTextStyle} primary="로그아웃" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem key="BoardTitle" style={ListItemTitleStyle}>
              패션 게시판
            </ListItem>
          </List>
          <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <ListItem key="의상 관리 꿀팁" disablePadding onClick={onListItemClick("의상 관리 꿀팁")}>
              <ListItemButton style={ListItemButtonStyle}>
                <Lightbulb />
                <ListItemText style={ListItemTextStyle} primary="의상 관리 꿀팁" />
              </ListItemButton>
            </ListItem>
            <ListItem key="나만의 패션 코디" disablePadding onClick={onListItemClick("나만의 패션 코디")}>
              <ListItemButton style={ListItemButtonStyle}>
                <FontAwesomeIcon icon={faShirt} />
                <ListItemText style={ListItemTextStyle} primary="나만의 패션 코디" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default DrawerPresenter;
